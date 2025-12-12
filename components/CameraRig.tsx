import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { Vector3, CatmullRomCurve3, Group } from 'three';
import { CAMERA_PATH } from '../constants';

interface CameraRigProps {
    setStep: (idx: number) => void;
    carRef: React.RefObject<Group>;
}

export const CameraRig: React.FC<CameraRigProps> = ({ setStep, carRef }) => {
  const scroll = useScroll();
  const upVector = useMemo(() => new Vector3(0, 1, 0), []);

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

    // Apply strict camera movement without handheld shake
    state.camera.position.copy(rawPoint);
    state.camera.lookAt(rawTarget);
  });

  return null;
};