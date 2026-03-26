import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function AnnouncementBar() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 text-white py-2.5 overflow-hidden flex items-center border-b border-gray-800">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
        className="flex whitespace-nowrap"
      >
        {/* We duplicate the content to make the loop seamless */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
            <span>{t('announcement.bread')}</span>
            <span className="w-1 h-1 rounded-full bg-brand-green"></span>
            <span>{t('announcement.local')}</span>
            <span className="w-1 h-1 rounded-full bg-brand-green"></span>
            <span>{t('announcement.open')}</span>
            <span className="w-1 h-1 rounded-full bg-brand-green"></span>
            <span>{t('announcement.parking')}</span>
            <span className="w-1 h-1 rounded-full bg-brand-green"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
