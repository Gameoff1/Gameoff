import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'cookies';
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const { t } = useTranslation();

  const getIcon = () => {
    switch (type) {
      case 'privacy': return <ShieldCheck size={28} />;
      case 'terms': return <FileText size={28} />;
      case 'cookies': return <Cookie size={28} />;
      default: return <FileText size={28} />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'privacy': return t('legal.privacy.title');
      case 'terms': return t('legal.terms.title');
      case 'cookies': return t('legal.cookies.title');
      default: return '';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-green/10 rounded-2xl text-brand-green">
                  {getIcon()}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                    {getTitle()}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {t('legal.lastUpdated')}: 26/03/2026
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 overflow-y-auto prose prose-brand max-w-none">
              <div className="space-y-8 text-gray-700 leading-relaxed">
                {type === 'privacy' && (
                  <>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.privacy.intro.title')}</h3>
                      <p>{t('legal.privacy.intro.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.privacy.data.title')}</h3>
                      <p>{t('legal.privacy.data.content')}</p>
                      <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>{t('legal.privacy.data.item1')}</li>
                        <li>{t('legal.privacy.data.item2')}</li>
                        <li>{t('legal.privacy.data.item3')}</li>
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.privacy.purpose.title')}</h3>
                      <p>{t('legal.privacy.purpose.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.privacy.rights.title')}</h3>
                      <p>{t('legal.privacy.rights.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.privacy.security.title')}</h3>
                      <p>{t('legal.privacy.security.content')}</p>
                    </section>
                    <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{t('legal.privacy.contact.title')}</h3>
                      <p className="text-sm">{t('legal.privacy.contact.content')}</p>
                      <p className="font-bold text-brand-green mt-2">geral@supershopgouveia.pt</p>
                    </section>
                  </>
                )}

                {type === 'terms' && (
                  <>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.terms.intro.title')}</h3>
                      <p>{t('legal.terms.intro.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.terms.usage.title')}</h3>
                      <p>{t('legal.terms.usage.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.terms.prices.title')}</h3>
                      <p>{t('legal.terms.prices.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.terms.liability.title')}</h3>
                      <p>{t('legal.terms.liability.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.terms.law.title')}</h3>
                      <p>{t('legal.terms.law.content')}</p>
                    </section>
                  </>
                )}

                {type === 'cookies' && (
                  <>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.cookies.intro.title')}</h3>
                      <p>{t('legal.cookies.intro.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.cookies.types.title')}</h3>
                      <p>{t('legal.cookies.types.content')}</p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('legal.cookies.control.title')}</h3>
                      <p>{t('legal.cookies.control.content')}</p>
                    </section>
                  </>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button
                onClick={onClose}
                className="bg-brand-green text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-green-dark transition-all shadow-xl shadow-brand-green/20 active:scale-95"
              >
                {t('legal.close')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
