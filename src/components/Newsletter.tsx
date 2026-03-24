import { motion } from 'motion/react';
import { Mail, FileText, Camera, Bell } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-32 bg-brand-green-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-green rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">
                Junte-se à nossa comunidade
              </h2>
              <p className="text-emerald-50 text-xl mb-8 leading-relaxed">
                Recebe novidades, folhetos digitais e conteúdos exclusivos em primeira mão.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-emerald-100 text-lg">
                  <FileText size={24} className="text-brand-yellow" />
                  <span>Folhetos digitais semanais</span>
                </div>
                <div className="flex items-center gap-4 text-emerald-100 text-lg">
                  <Camera size={24} className="text-brand-yellow" />
                  <span>Fotografias de produtos frescos</span>
                </div>
                <div className="flex items-center gap-4 text-emerald-100 text-lg">
                  <Bell size={24} className="text-brand-yellow" />
                  <span>Atualizações da loja em tempo real</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    O seu melhor email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-brand-green focus:border-brand-green sm:text-sm bg-gray-50"
                      placeholder="exemplo@email.com"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-brand-green hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green transition-colors"
                >
                  Subscrever Newsletter
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Pode cancelar a subscrição a qualquer momento.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
