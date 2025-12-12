import { Vector3 } from 'three';

export interface CameraPoint {
  position: Vector3;
  target: Vector3;
  text?: string;
  subtext?: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}

export interface CarSpec {
  label: string;
  value: string;
}
