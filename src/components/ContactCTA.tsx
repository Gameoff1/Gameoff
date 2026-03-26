import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Atmospheric background—layered gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden relative group">
          {/* Subtle light sweep effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-[0.3em] mb-6">
                {t('location.phone')}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-[1.1]">
                {t('cta.title')}
              </h2>
              <p className="text-gray-400 text-xl md:text-2xl mb-0 max-w-xl font-light leading-relaxed">
                {t('cta.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center lg:items-end"
            >
              <div className="relative">
                {/* Pulse effect for the button */}
                <div className="absolute -inset-4 bg-brand-orange/20 rounded-full blur-2xl animate-pulse"></div>
                
                <a 
                  href="tel:238492605"
                  className="relative flex items-center justify-center gap-4 bg-brand-orange text-white hover:bg-brand-orange-dark px-12 py-6 rounded-2xl font-bold text-2xl transition-all shadow-[0_20px_40px_-10px_rgba(242,125,38,0.4)] hover:-translate-y-1 active:scale-95 group overflow-hidden"
                >
                  <Phone size={32} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">{t('cta.call')}</span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
              
              <p className="mt-8 text-white/40 font-mono text-sm tracking-widest uppercase">
                Disponível no horário de funcionamento
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
