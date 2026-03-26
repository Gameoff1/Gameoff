import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-gray-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-green"></div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-green/10 rounded-2xl text-brand-green shrink-0">
                  <Cookie size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
                  {t('legal.cookies.title')}
                </h3>
              </div>
              
              <p className="text-gray-600 text-base leading-relaxed font-light">
                {t('legal.cookies.desc')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-brand-green-dark transition-all shadow-xl shadow-brand-green/20 active:scale-95"
                >
                  {t('legal.cookies.accept')}
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold text-base hover:bg-gray-200 transition-all active:scale-95"
                >
                  {t('legal.cookies.reject')}
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
