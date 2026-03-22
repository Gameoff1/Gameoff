import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Location() {
  const currentDay = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
  
  const weekDays = [
    { index: 1, name: 'Segunda-feira', hours: '09:00 – 20:00' },
    { index: 2, name: 'Terça-feira', hours: '09:00 – 20:00' },
    { index: 3, name: 'Quarta-feira', hours: '09:00 – 20:00' },
    { index: 4, name: 'Quinta-feira', hours: '09:00 – 20:00' },
    { index: 5, name: 'Sexta-feira', hours: '09:00 – 20:00' },
    { index: 6, name: 'Sábado', hours: '09:00 – 20:00' },
    { index: 0, name: 'Domingo', hours: '09:00 – 20:00' },
  ];

  return (
    <section id="localizacao" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Info Side */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              <motion.span variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3 block">Visite-nos</motion.span>
              <motion.h2 variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
                Estamos à sua espera
              </motion.h2>

              <div className="space-y-8">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-5 group">
                  <div className="bg-brand-green/10 p-4 rounded-2xl text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Morada</h4>
                    <p className="text-gray-600 text-lg">SuperShop António Pessoa Lopes, LDA.<br/>Zona Industrial De Gouveia<br/>6920-650 Gouveia</p>
                  </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-5 group">
                  <div className="bg-brand-yellow/20 p-4 rounded-2xl text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Clock size={28} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Horário de Funcionamento</h4>
                    <ul className="space-y-2 w-full max-w-sm">
                      {weekDays.map((day) => {
                        const isToday = currentDay === day.index;
                        return (
                          <li 
                            key={day.index} 
                            className={`flex justify-between items-center text-sm md:text-base p-2 rounded-lg transition-colors ${
                              isToday 
                                ? 'bg-brand-yellow/20 font-semibold text-gray-900 border-l-2 border-brand-orange' 
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <span>{day.name}</span>
                            <span>{day.hours}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-5 group">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Telefone</h4>
                    <p className="text-gray-600 text-lg font-medium">238 492 605</p>
                  </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-5 group">
                  <div className="bg-purple-50 p-4 rounded-2xl text-purple-600 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600 text-lg font-medium">
                      <a href="mailto:geral@supershopgouveia.pt" className="hover:text-brand-green transition-colors">
                        geral@supershopgouveia.pt
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pt-4 border-t border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Siga-nos nas Redes Sociais</h4>
                  <div className="flex items-center gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-colors shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="Instagram">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-colors shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="Facebook">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-colors shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="YouTube">
                      <Youtube size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-colors shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="TikTok">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-auto min-h-[500px] relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Zona%20Industrial%20De%20Gouveia,%206920-650%20Gouveia,%20Portugal&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização do Super Shop Gouveia"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
