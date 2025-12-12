import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { Vector3, CatmullRomCurve3, Group } from 'three';
import { CAMERA_PATH } from '../constants';

interface CameraRigProps {
    setStep: (idx: number) => void;
    carRef: React.RefObject<Group>;
    freeLook: boolean;
}

export const CameraRig: React.FC<CameraRigProps> = ({ setStep, carRef, freeLook }) => {
  const scroll = useScroll();
  const upVector = useMemo(() => new Vector3(0, 1, 0), []);
  
  // Store the dynamic offset for smooth transitions
  const lookOffset = useRef(new Vector3(0, 0, 0));

  // Create curves for smooth path interpolation
  const { positionCurve, targetCurve } = useMemo(() => {
    const points = CAMERA_PATH.map(p => p.position);
    const targets = CAMERA_PATH.map(p => p.target);
    
    // Create open curves for linear progression
    const posCurve = new CatmullRomCurve3(points, false, 'catmullrom', 0.5);
    const tarCurve = new CatmullRomCurve3(targets, false, 'catmullrom', 0.5);
    
    return { positionCurve: posCurve, targetCurve: tarCurve };
  }, []);

  useFrame((state, delta) => {
    // scroll.offset is 0 to 1, default to 0 if undefined
    const offset = scroll?.offset || 0;
    
    // Update step index for UI
    const totalPoints = CAMERA_PATH.length;
    const exactIndex = offset * (totalPoints - 1);
    const currentIndex = Math.round(exactIndex);
    setStep(currentIndex);

    // Get Base Points from Curve (Local to Car)
    const rawPoint = positionCurve.getPointAt(offset);
    const rawTarget = targetCurve.getPointAt(offset);

    // Safety guard: If curves fail to return a vector, skip this frame
    if (!rawPoint || !rawTarget) return;

    // Sync with Car Rotation
    // If the car rotates, we must rotate the camera's position AND its target 
    // around the origin (0,0,0) so the camera stays "attached" to the car's frame of reference.
    if (carRef.current) {
        const rotationY = carRef.current.rotation.y;
        
        // Apply rotation to clones to avoid corrupting the curve data
        rawPoint.applyAxisAngle(upVector, rotationY);
        rawTarget.applyAxisAngle(upVector, rotationY);
    }

    // --- FREE LOOK LOGIC ---
    // If Free Look is enabled, we add an offset to the LOOK AT target based on mouse position.
    // This makes the camera "look" towards the cursor.
    if (freeLook) {
        // Calculate camera basis vectors to ensure "Up" on screen maps to "Up" in 3D relative to view
        const viewDir = new Vector3().subVectors(rawTarget, rawPoint).normalize();
        const right = new Vector3().crossVectors(viewDir, upVector).normalize();
        const camUp = new Vector3().crossVectors(right, viewDir).normalize();
        
        // Map pointer (-1 to 1) to a physical distance offset
        // Sensitivity factor controls how "wide" the look range is
        const SENSITIVITY = 3.0; 
        
        const targetX = state.pointer.x * SENSITIVITY;
        const targetY = state.pointer.y * SENSITIVITY;

        // Construct the desired offset vector in 3D space
        const desiredOffset = new Vector3()
             .addScaledVector(right, targetX)
             .addScaledVector(camUp, targetY);
        
        // Smoothly interpolate current offset to desired offset (Damping)
        lookOffset.current.lerp(desiredOffset, delta * 5);
        
    } else {
        // Smoothly return to center if Free Look is disabled
        lookOffset.current.lerp(new Vector3(0, 0, 0), delta * 5);
    }

    // Apply the offset to the final target
    rawTarget.add(lookOffset.current);

    // Apply strict camera movement without handheld shake
    state.camera.position.copy(rawPoint);
    state.camera.lookAt(rawTarget);
  });

  return null;
};