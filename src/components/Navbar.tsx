import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Logo />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-600 hover:text-brand-green font-medium transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#localizacao"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm"
            >
              Visitar Loja
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-green p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-green hover:bg-green-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#localizacao"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-green text-white px-3 py-4 rounded-xl font-medium"
            >
              Visitar Loja
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
