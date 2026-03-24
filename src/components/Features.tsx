import { motion } from 'motion/react';

const commitments = [
  {
    title: 'Frescura Diária',
    desc: 'Frutas, legumes e pão quente que chegam todos os dias, selecionados para garantir o máximo sabor e nutrição na sua mesa.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Produtos Regionais',
    desc: 'Apoiamos a produção local, trazendo até si os melhores queijos, enchidos e sabores tradicionais da região da Serra da Estrela.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f214b985c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Comunidade',
    desc: 'Mais do que clientes, servimos vizinhos. O nosso atendimento é feito com um sorriso, proximidade e dedicação total.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-end mb-16">
          <div className="md:w-1/2">
            <h2 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3">O Nosso Compromisso</h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
              O melhor para a sua <span className="italic text-brand-green">casa</span>
            </h3>
          </div>
          <div className="md:w-1/2 pb-2">
            <p className="text-gray-600 text-xl leading-relaxed">
              Não somos apenas um local de passagem. Somos o ponto de encontro entre os melhores produtos e a sua família. Descubra o que nos torna únicos em Gouveia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {commitments.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-8 relative shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-brand-green transition-colors">{item.title}</h4>
              <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
