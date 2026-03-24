import { motion } from 'motion/react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div 
        whileHover={{ rotate: 5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-xl shadow-brand-green/15 overflow-hidden border border-gray-50"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
          {/* Basket Handle - Bolder */}
          <path d="M22 52 C 22 10, 78 10, 78 52" stroke="#059669" strokeWidth="7" fill="none" strokeLinecap="round" />
          
          {/* Apple (Left) - More defined */}
          <g transform="translate(32, 50)">
            <path d="M-13 0 C -13 -11, 13 -11, 13 0 C 13 11, -13 11, -13 0" fill="#f97316" />
            <path d="M-3 -9 C -9 -16, -13 -11, -13 -11" fill="#059669" />
            <path d="M3 -9 C 9 -16, 13 -11, 13 -11" fill="#059669" />
          </g>
          
          {/* Corn (Middle) - More defined */}
          <g transform="translate(52, 44)">
            <path d="M-7 0 C -7 -13, 7 -13, 7 0 C 7 13, -7 13, -7 0" fill="#fbbf24" />
            {/* Husks */}
            <path d="M-8 9 C -11 -3, -5 -6, -5 -6" fill="#059669" />
            <path d="M8 9 C 11 -3, 5 -6, 5 -6" fill="#059669" />
          </g>
          
          {/* Cactus (Right) - More defined */}
          <g transform="translate(72, 47)">
            <path d="M-4 11 V -6 C -4 -10, 4 -10, 4 -6 V 11" fill="#059669" />
            <path d="M-4 3 H -7 C -9 3, -9 -1, -7 -1 V -3" fill="#059669" />
            <path d="M4 1 H 7 C 9 1, 9 -3, 7 -3 V -5" fill="#059669" />
          </g>
          
          {/* Basket Body - Bolder and more solid */}
          <path d="M18 52 H 82 V 68 C 82 88, 72 94, 50 94 C 28 94, 18 88, 18 68 Z" fill="#059669" />
          {/* Basket Slots - More visible */}
          <rect x="27" y="62" width="5" height="22" rx="2.5" fill="white" fillOpacity="0.4" />
          <rect x="38.5" y="62" width="5" height="22" rx="2.5" fill="white" fillOpacity="0.4" />
          <rect x="50" y="62" width="5" height="22" rx="2.5" fill="white" fillOpacity="0.4" />
          <rect x="61.5" y="62" width="5" height="22" rx="2.5" fill="white" fillOpacity="0.4" />
          <rect x="73" y="62" width="5" height="22" rx="2.5" fill="white" fillOpacity="0.4" />
        </svg>
      </motion.div>
      <div className="flex flex-col">
        <span className="font-serif font-black text-3xl leading-none tracking-tight text-gray-900">
          Super<span className="text-emerald-600">Shop</span>
        </span>
        <span className="text-[11px] font-black tracking-[0.3em] uppercase text-emerald-700/60 mt-1.5 ml-0.5">
          Gouveia
        </span>
      </div>
    </div>
  );
}
