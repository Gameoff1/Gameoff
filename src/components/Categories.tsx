import { motion } from 'motion/react';

const categories = [
  {
    id: 'frescos',
    name: 'Frutas e Legumes',
    desc: 'Tudo o que precisa para saladas, sopas e sobremesas saudáveis.',
    items: ['Frutas da época', 'Legumes frescos', 'Verduras para a sopa', 'Ervas aromáticas'],
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1000&auto=format&fit=crop',
    color: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'talho',
    name: 'Talho e Charcutaria',
    desc: 'Carne fresca e de confiança para os seus cozinhados do dia a dia.',
    items: ['Carne de vaca e porco', 'Frango e peru', 'Enchidos e fumados', 'Preparados de carne'],
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1000&auto=format&fit=crop',
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 'padaria',
    name: 'Padaria e Pastelaria',
    desc: 'Pão sempre fresco e doces para acompanhar o seu café.',
    items: ['Pão quente (várias qualidades)', 'Bolas de Berlim e natas', 'Bolos secos e biscoitos', 'Pão de forma e fatiado'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    color: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'mercearia',
    name: 'Mercearia',
    desc: 'Os ingredientes básicos que não podem faltar na sua despensa.',
    items: ['Arroz, massa e feijão', 'Azeite, óleo e vinagre', 'Enlatados e conservas', 'Leite, queijo e manteiga'],
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1000&auto=format&fit=crop',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    desc: 'Para refrescar, acompanhar a refeição ou celebrar.',
    items: ['Água mineral (com e sem gás)', 'Sumos naturais e néctares', 'Refrigerantes variados', 'Vinhos brancos, tintos e verdes'],
    image: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?q=80&w=1000&auto=format&fit=crop',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'higiene',
    name: 'Higiene e Limpeza',
    desc: 'Tudo para cuidar de si e deixar a casa a brilhar.',
    items: ['Gel de banho e champô', 'Pasta de dentes e sabonetes', 'Detergentes para a roupa', 'Lixívia e lava-tudo'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop',
    color: 'bg-blue-100 text-blue-800'
  }
];

export default function Categories() {
  return (
    <section id="produtos" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3">Nossos Produtos</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
            Qualidade e Variedade
          </h3>
          <p className="text-gray-600 text-xl">
            Selecionamos os melhores produtos para a sua mesa. Descubra as nossas secções e encontre tudo o que precisa.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-6 relative z-20 bg-white flex flex-col h-full">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${category.color}`}>
                    {category.name}
                  </span>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h4>
                  <p className="text-gray-600 text-lg mb-4">{category.desc}</p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <ul className="text-sm text-gray-500 space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
