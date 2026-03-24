import { motion } from 'motion/react';
import { Leaf, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100"
        >
          {/* Image Side - Now physically connected to the text */}
          <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1000&auto=format&fit=crop" 
              alt="Dono do supermercado a sorrir" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Gradient overlay for mobile readability if needed, but mostly for style */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden"></div>
          </div>
          
          {/* Text Side */}
          <div className="lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Um supermercado com <span className="text-brand-green italic">alma local</span>
            </h2>
            
            <div className="space-y-6 text-xl text-gray-600 mb-10 leading-relaxed">
              <p>
                A Super Shop é mais do que um supermercado. Somos um negócio local, profundamente enraizado na comunidade de Gouveia, dedicado a trazer os melhores produtos para a sua mesa.
              </p>
              <p>
                Acreditamos que a qualidade não tem de ser um luxo. Por isso, trabalhamos diariamente para garantir a frescura dos nossos produtos, desde a fruta da época até à carne mais tenra. Conhecemos os nossos clientes pelo nome e procuramos sempre o melhor para as suas famílias.
              </p>
            </div>
            
            {/* Features inside the about card to reinforce the connection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <Leaf size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Foco na Frescura</h4>
                  <p className="text-base text-gray-500 mt-1">Produtos selecionados diariamente para a sua mesa.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-orange shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Atendimento Próximo</h4>
                  <p className="text-base text-gray-500 mt-1">Conhecemos e cuidamos dos nossos clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
