import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.products'), href: '#produtos' },
    { name: t('nav.about'), href: '#sobre' },
    { name: t('nav.location'), href: '#localizacao' },
  ];

  return (
    <nav className="relative w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="cursor-pointer origin-left hover:scale-105 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
                className="text-gray-600 hover:text-brand-green font-bold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            
            <div className="flex items-center gap-8 pl-8 border-l border-gray-100">
              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=SuperShop+António+Pessoa+Lopes+LDA+Gouveia"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2.5 rounded-full font-bold transition-colors shadow-sm"
              >
                {t('nav.visitStore')}
              </motion.a>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-6">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-green p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <LanguageSwitcher />
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
              href="https://www.google.com/maps/dir/?api=1&destination=SuperShop+António+Pessoa+Lopes+LDA+Gouveia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-green text-white px-3 py-4 rounded-xl font-medium"
            >
              {t('nav.visitStore')}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
