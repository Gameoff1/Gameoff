import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import Logo from './Logo';
import { useTranslation, Trans } from 'react-i18next';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'cookies') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const { t } = useTranslation();
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
    <footer className="bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-10 scale-125 origin-left">
              <Logo className="[&_span]:text-white [&_span>span]:text-brand-green" />
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-8 font-light italic">
              {t('footer.desc')}
            </p>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400 text-base group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-brand-green transition-colors">
                    <Mail size={16} className="text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <a href="mailto:geral@supershopgouveia.pt" className="hover:text-white transition-colors">geral@supershopgouveia.pt</a>
                </div>
                <div id="footer-contact" className="flex items-center gap-3 text-gray-400 text-base group scroll-mt-32">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-brand-green transition-colors">
                    <Phone size={16} className="text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <a href="tel:238492605" className="hover:text-white transition-colors">238 492 605</a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-800">
                <h4 className="text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">{t('location.hours.label')}</h4>
                <p className="text-gray-400 text-sm">
                  {t('location.hours.days.monday')} – {t('location.hours.days.sunday')}<br />
                  09:00 – 20:00
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 font-serif">{t('footer.links')}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li><a href="#produtos" className="text-gray-400 hover:text-brand-green transition-colors text-sm">{t('nav.products')}</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-brand-green transition-colors text-sm">{t('nav.about')}</a></li>
              <li><a href="#localizacao" className="text-gray-400 hover:text-brand-green transition-colors text-sm">{t('nav.location')}</a></li>
              <li className="pt-4 border-t border-gray-800 sm:col-span-2">
                <button 
                  onClick={() => onOpenLegal('privacy')}
                  className="text-gray-500 hover:text-brand-green transition-colors text-xs"
                >
                  {t('legal.privacy.title')}
                </button>
              </li>
              <li className="sm:col-span-2">
                <button 
                  onClick={() => onOpenLegal('terms')}
                  className="text-gray-500 hover:text-brand-green transition-colors text-xs"
                >
                  {t('legal.terms.title')}
                </button>
              </li>
              <li className="sm:col-span-2">
                <button 
                  onClick={() => onOpenLegal('cookies')}
                  className="text-gray-500 hover:text-brand-green transition-colors text-xs"
                >
                  {t('legal.cookies.title')}
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} Super Shop Gouveia. {t('footer.rights')}
            </p>
            <p className="text-gray-600 text-[10px] uppercase tracking-wider">
              {t('footer.identification')}
            </p>
          </div>
          <p className="text-gray-600 text-xs text-center md:text-right">
            <Trans i18nKey="footer.address">
              SuperShop António Pessoa Lopes, LDA.<br />
              Zona Industrial De Gouveia, 6920-650 Gouveia
            </Trans>
          </p>
        </div>
      </div>
    </footer>
  );
}
