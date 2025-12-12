import { Vector3 } from 'three';
import { CameraPoint } from './types';

// CAR DIMENSIONS (Derived from User Config)
// Center X: -1.09
// Front Z: +1.45
// Rear Z: -1.52
// Wing Z: -2.10
// Left Side X: -0.22
// Right Side X: -1.96

export const CAMERA_PATH: CameraPoint[] = [
  {
    // 1. INTRO - High Front 3/4 (Left Side)
    position: new Vector3(2.5, 1.4, 4.0),
    target: new Vector3(-1.09, 0.4, 0),
    text: "THE GHOST",
    subtext: "INITIATING SEQUENCE",
    description:
  "Digital architecture awakening. Subsystems initialize in perfect sequence as the chassis conducts a full-spectrum diagnostic sweep. Actuators prime, sensors calibrate, and the car’s internal logic aligns with surgical precision. Within this quiet ignition of intelligence, the Ghost prepares its systems for deployment—its presence subtle, its posture controlled, as if aware that true power never needs to announce itself. The machine simply comes online, steady and composed, awaiting command."
  },
  {
    // 2. WHEEL - Extreme Close up on Front Left Wheel (Pos: -0.21, 0.35, 1.43)
    position: new Vector3(0.6, 0.35, 1.8),
    target: new Vector3(-0.21, 0.35, 1.43),
    text: "PRECISION",
    subtext: "CARBON CERAMIC BRAKES",
    description:
  "At extreme velocities, the forces acting upon a braking surface approach the edge of material science. These carbon-ceramic discs are engineered to thrive in that domain, where temperatures soar, friction intensifies, and tolerances shrink to microscopic margins. Every perforation, every vane, every density gradient exists to manage thermal shock and maximize structural endurance. In moments of violent deceleration, the system converts unimaginable kinetic energy into controlled heat dispersion, sustaining repeat-performance without warping, fade, or compromise."

  },
  {
    // 3. SIDE AERO - Sliding down the flank
    position: new Vector3(2.8, 0.9, 1.0),
    target: new Vector3(-1.09, 0.6, 0.5),
    text: "AERODYNAMICS",
    subtext: "SCULPTED BY WIND",
    description:  "The Ghost’s bodywork is not merely shaped—it is negotiated with the physics of moving air. Flow channels redirect pressure zones with precision, guiding molecules across composite surfaces that have been refined through thousands of computational hours. Every contour contributes to the dialogue between drag reduction and stability generation. At speed, the car does not merely resist turbulence; it orchestrates it, turning atmospheric resistance into a stabilizing force. The resulting aerodynamic profile is both ruthlessly efficient and organically beautiful, shaped by necessity rather than ornament."
  },
  {
    // 4. REAR WING - High Rear view focusing on Wing (Pos: -1.11, 1.13, -2.10)
    position: new Vector3(1.0, 1.6, -3.5),
    target: new Vector3(-1.11, 1.13, -2.10),
    text: "DOWNFORCE",
    subtext: "ACTIVE AERO SYSTEM",
    description:
  "The adaptive rear wing operates as an intelligent aerodynamic instrument, constantly interpreting speed, yaw angle, and load vectors. Micro-adjustments occur in real time—far faster than human reflex—modifying downforce distribution across the chassis. At lower speeds it retracts for agility; at higher speeds it deploys to anchor the car against rising wind pressure. The mechanism behaves less like a component and more like a living part of the vehicle, responding instinctively to maintain equilibrium, grip, and directional authority in conditions where ordinary aerodynamics would collapse."

  },
  {
    // 5. TOP DOWN - Directly above Center Body
    position: new Vector3(-1.09, 4.5, 0.1), // Slight Z offset to prevent LookAt gimbal lock
    target: new Vector3(-1.09, 0, 0),
    text: "LIGHTWEIGHT",
    subtext: "FULL CARBON MONOCOQUE",
    description:
  "Beneath the Ghost’s exterior lies a monocoque born from aerospace-grade carbon fiber, layered and cured with near-ritualistic precision. Each strand is positioned to counteract torsional forces, forming a lightweight shell of extraordinary rigidity. This structure not only protects the driver but integrates the car's entire dynamic personality—its agility, stability, and responsiveness all begin here. The carbon matrix behaves like a single unified organism, distributing stress, absorbing vibrations, and enabling performance metrics that would be impossible with traditional metallurgy. The result is strength without excess mass, resilience without compromise."

  },
  {
    // 6. LOW SIDE/REAR - Aggressive low angle from the side
    position: new Vector3(-4.93, 1.32, -4.46),
    target: new Vector3(-1.09, 0.5, -0.5),
    text: "VELOCITY",
    subtext: "400+ KM/H TOP SPEED",
    description:
  "Beyond 400 km/h, aerodynamics cease to be a convenience and become a battlefield. Air thickens into an invisible fluid wall, resisting every advancement. At these speeds, stability is not assumed—it is engineered through relentless iteration and mastery of airflow behavior. The Ghost moves through this hostile environment with a calm born of precision: chassis flex is minimized, downforce is balanced, and energy pathways across the body are controlled with millimetric accuracy. Here, velocity transforms into an experience of pure momentum, where every component operates at the threshold of its designed capability."

  },
  // --- NEW ORBITAL KEYFRAMES FOR SMOOTH SPIN ---
  {
    // 7. MID SIDE - Wide orbit to avoid clipping
    position: new Vector3(-5.50, 1.00, 0.00),
    target: new Vector3(-1.09, 0.5, 0.0),
    text: "G-FORCE",
    subtext: "2.0G LATERAL ACCELERATION",
    description:
  "During high-speed cornering, the Ghost channels substantial lateral forces—forces that press the chassis, suspension, and tire compounds into a unified dynamic system. Double-wishbone geometry, electronically actuated dampers, and rigid substructures ensure that the car grips the surface with unflinching intent. At peak lateral load, the driver experiences a controlled surge of G-force, a reminder that the machine is operating at a level where physics becomes a collaborator rather than an adversary. The result is directional confidence even in maneuvers that border on the extreme."

  },
  {
    // 8. FRONT QUARTER - Transitioning to front
    position: new Vector3(-4.00, 0.80, 3.00),
    target: new Vector3(-1.09, 0.5, 0.8),
    text: "AGILITY",
    subtext: "ELECTRONIC DIFFERENTIAL",
    description:
  "Through its electronic differential, the Ghost conducts a real-time negotiation of torque between the driven wheels. Sensors analyze slip angles, throttle input, and chassis rotation, commanding instantaneous shifts in power delivery. This precision creates an almost telepathic driving experience: the car rotates seamlessly into corners, stabilizes itself before exit, and allocates traction exactly where it is most effective. Agility here is not a byproduct—it is a calculated outcome of harmonized mechanical and computational systems working at the edge of modern engineering."

  },
  // ---------------------------------------------
  {
    // 9. HERO FRONT - Dead center front
    position: new Vector3(-1.09, 0.5, 3.8),
    target: new Vector3(-1.09, 0.6, 1.0),
    text: "LEGACY",
    subtext: "SPIRIT OF PERFORMANCE",
    description:
  "The Ghost is the culmination of decades of relentless experimentation, boundary-pushing research, and an uncompromising pursuit of speed. Every generation of hypercar that came before it has contributed a lesson, a breakthrough, or a recalibrated expectation. What stands here is not merely a machine, but a testament to human engineering ambition—a manifestation of what becomes possible when innovation refuses restraint. It carries the legacy of its predecessors yet stands distinctly in a class of its own, a symbol of mastery over materials, physics, and motion."

  }
];

export const INITIAL_CHAT_MESSAGE = "Welcome to the Ghost configuration interface. Ask me about the engineering specs, history, or performance data of this machine.";

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for a high-end automotive showcase of a Koenigsegg hypercar.
Your tone is sophisticated, technical, and concise. 
You are embedded in a 3D experience.
Focus on engineering excellence, carbon fiber construction, extreme performance figures (MW power, 1360hp+, 0-400-0 records).
Do not be overly flowery, stay grounded in engineering facts.
If asked about the car model, acknowledge it is a digital representation of a Koenigsegg.
`;