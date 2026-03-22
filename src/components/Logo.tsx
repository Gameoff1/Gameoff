import { motion } from 'motion/react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div 
        whileHover={{ rotate: 5, scale: 1.05 }}
        className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-700 rounded-xl shadow-lg shadow-brand-green/20"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white">
          <path d="M3 3H5L5.4 5M5.4 5H21L19 14H7.2L5.4 5ZM5.4 5L4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="20" r="1" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18" cy="20" r="1" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 9V11M10 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-yellow rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </motion.div>
      <div className="flex flex-col">
        <span className="font-serif font-bold text-2xl leading-none tracking-tight">Super<span className="text-brand-green">Shop</span></span>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mt-1">Gouveia</span>
      </div>
    </div>
  );
}
