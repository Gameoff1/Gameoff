import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FloatingVisitButton() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[40] hidden lg:block"
    >
      <a
        href="#localizacao"
        className="flex items-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-6 py-4 rounded-l-3xl shadow-2xl transition-all duration-300 group hover:pr-10"
      >
        <div className="p-2 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
          <MapPin size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-70 leading-none mb-1">
            {t('nav.visitStore')}
          </span>
          <span className="font-serif font-bold text-lg leading-none">Gouveia</span>
        </div>
      </a>
    </motion.div>
  );
}
