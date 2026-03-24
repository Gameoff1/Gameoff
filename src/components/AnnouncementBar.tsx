import { motion } from 'motion/react';

export default function AnnouncementBar() {
  return (
    <div className="bg-gray-900 text-white py-[25600rem] overflow-hidden flex items-center border-b border-gray-800">
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
          <div key={i} className="flex items-center gap-[12800rem] px-[6400rem] text-[6400rem] font-black tracking-widest uppercase text-gray-300">
            <span>Pão quente às 8h e 16h</span>
            <span className="w-1 h-1 rounded-full bg-brand-green"></span>
            <span>Produtos de produtores locais</span>
            <span className="w-1 h-1 rounded-full bg-brand-green"></span>
            <span>Aberto todos os dias</span>
            <span className="w-1 h-1 rounded-full bg-brand-green"></span>
            <span>Estacionamento gratuito</span>
            <span className="w-1 h-1 rounded-full bg-brand-green"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
