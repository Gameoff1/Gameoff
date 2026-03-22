import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { 
      name: 'TikTok', 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ), 
      href: '#' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-8">
              <Logo className="[&_span]:text-white [&_span>span]:text-brand-green" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              O seu supermercado de confiança na Zona Industrial de Gouveia. Produtos frescos todos os dias, com atendimento de proximidade.
            </p>
            <div className="flex items-center gap-3 text-gray-400 text-sm group">
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-brand-green transition-colors">
                <Mail size={16} className="text-gray-300 group-hover:text-white transition-colors" />
              </div>
              <a href="mailto:geral@supershopgouveia.pt" className="hover:text-white transition-colors">geral@supershopgouveia.pt</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 font-serif">Links Úteis</h3>
            <ul className="space-y-3">
              <li><a href="#produtos" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Nossos Produtos</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#localizacao" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Localização e Horário</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 font-serif">Siga-nos</h3>
            <p className="text-gray-400 text-sm mb-4">Acompanhe as nossas novidades nas redes sociais:</p>
            <p className="font-medium text-brand-yellow mb-4">@SuperShopGouveia</p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Super Shop Gouveia. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            SuperShop António Pessoa Lopes, LDA.<br />
            Zona Industrial De Gouveia, 6920-650 Gouveia
          </p>
        </div>
      </div>
    </footer>
  );
}
