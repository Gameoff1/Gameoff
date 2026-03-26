import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Car, Accessibility, CheckCircle, Navigation } from 'lucide-react';

export default function VisitStore() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <Car className="text-brand-green" size={32} />,
      title: t('visit_store.f1.title'),
      desc: t('visit_store.f1.desc')
    },
    {
      icon: <Accessibility className="text-brand-green" size={32} />,
      title: t('visit_store.f2.title'),
      desc: t('visit_store.f2.desc')
    },
    {
      icon: <CheckCircle className="text-brand-green" size={32} />,
      title: t('visit_store.f3.title'),
      desc: t('visit_store.f3.desc')
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 flex flex-col gap-2">
              <span className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-2">{t('about.badge')}</span>
              {t('visit_store.title')}
            </h2>
            <p className="text-gray-600 text-xl mb-10 leading-relaxed">
              {t('visit_store.subtitle')}
            </p>

            <div className="space-y-8">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=SuperShop+António+Pessoa+Lopes+LDA+Gouveia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-green-dark transition-all shadow-lg hover:-translate-y-1"
              >
                <Navigation size={20} />
                {t('nav.visitStore')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
                alt="Store Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-yellow rounded-full -z-10 blur-2xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-green rounded-full -z-10 blur-2xl opacity-50"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
