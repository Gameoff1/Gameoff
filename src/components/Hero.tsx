import { motion } from 'motion/react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" 
          alt="Interior do supermercado com produtos frescos" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
              Tradição e <span className="text-brand-green">Qualidade</span> em Gouveia
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed">
              Descubra os melhores produtos frescos e regionais com um atendimento que o faz sentir em casa. Venha visitar-nos!
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#localizacao"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-brand-green hover:bg-brand-green-dark transition-all duration-300 shadow-lg hover:shadow-brand-green/30 hover:-translate-y-1"
              >
                Visitar Loja
              </a>
              <a 
                href="#produtos"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Ver Produtos
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
