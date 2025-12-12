import React from 'react';
import { CAMERA_PATH } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface OverlayProps {
  currentStep: number;
}

export const Overlay: React.FC<OverlayProps> = ({ currentStep }) => {
  const info = CAMERA_PATH[currentStep] || CAMERA_PATH[0];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8 md:p-16">
      
      {/* Top Bar */}
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mix-blend-difference text-white">
            PROJECT GHOST
          </h1>
          <div className="h-1 w-24 bg-white mt-2"></div>
        </div>
        <div className="text-right hidden md:block opacity-50">
          <p className="text-xs tracking-[0.3em]">CINEMATIC SEQUENCE</p>
          <p className="text-xs font-mono">SCROLL TO INTERACT</p>
        </div>
      </header>

      {/* Dynamic Content based on Scroll Step */}
      <section className="flex flex-col items-start justify-center h-full max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase tracking-tight">
              {info.text}
            </h2>
            <div className="flex items-center gap-4">
               <div className="h-px w-12 bg-green-500"></div>
               <p className="text-lg md:text-xl text-green-400 font-mono tracking-widest uppercase">
                 {info.subtext}
               </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Footer / Progress */}
      <footer className="flex justify-between items-end">
        <div className="flex gap-2">
            {CAMERA_PATH.map((_, idx) => (
                <div 
                    key={idx}
                    className={`h-1 transition-all duration-300 ${idx === currentStep ? 'w-12 bg-white' : 'w-4 bg-white/20'}`}
                />
            ))}
        </div>
        <div className="text-right">
           <p className="text-xs text-white/40 mb-1">RENDER ENGINE: WEBGL // R3F</p>
           <p className="text-xs text-white/40">MODEL: KOENIGSEGG_REF_01</p>
        </div>
      </footer>
    </div>
  );
};
