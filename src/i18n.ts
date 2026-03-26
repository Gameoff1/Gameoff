import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      nav: {
        products: 'Produtos',
        about: 'Sobre Nós',
        location: 'Localização',
        visitStore: 'Visitar Loja',
        viewProducts: 'Ver Produtos'
      },
      announcement: {
        bread: 'Pão quente às 8h e 16h',
        local: 'Produtos de produtores locais',
        open: 'Aberto todos os dias',
        parking: 'Estacionamento gratuito'
      },
      hero: {
        title: 'Tradição e <1>Qualidade</1> em Gouveia',
        subtitle: 'Descubra os melhores produtos frescos e regionais com um atendimento que o faz sentir em casa. Venha visitar-nos!'
      },
      categories: {
        badge: 'Nossos Produtos',
        title: 'Qualidade e Variedade',
        subtitle: 'Selecionamos os melhores produtos para a sua mesa. Descubra as nossas secções e encontre tudo o que precisa.',
        frescos: {
          name: 'Frutas e Legumes',
          desc: 'Tudo o que precisa para saladas, sopas e sobremesas saudáveis.',
          items: ['Frutas da época', 'Legumes frescos', 'Verduras para a sopa', 'Ervas aromáticas']
        },
        talho: {
          name: 'Talho e Charcutaria',
          desc: 'Carne fresca e de confiança para os seus cozinhados do dia a dia.',
          items: ['Carne de vaca e porco', 'Frango e peru', 'Enchidos e fumados', 'Preparados de carne']
        },
        padaria: {
          name: 'Padaria e Pastelaria',
          desc: 'Pão sempre fresco e doces para acompanhar o seu café.',
          items: ['Pão quente (várias qualidades)', 'Bolas de Berlim e natas', 'Bolos secos e biscoitos', 'Pão de forma e fatiado']
        },
        mercearia: {
          name: 'Mercearia',
          desc: 'Os ingredientes básicos que não podem faltar na sua despensa.',
          items: ['Arroz, massa e feijão', 'Azeite, óleo e vinagre', 'Enlatados e conservas', 'Leite, queijo e manteiga']
        },
        bebidas: {
          name: 'Bebidas',
          desc: 'Para refrescar, acompanhar a refeição ou celebrar.',
          items: ['Água mineral (com e sem gás)', 'Sumos naturais e néctares', 'Refrigerantes variados', 'Vinhos brancos, tintos e verdes']
        },
        higiene: {
          name: 'Higiene e Limpeza',
          desc: 'Tudo para cuidar de si e deixar a casa a brilhar.',
          items: ['Gel de banho e champô', 'Pasta de dentes e sabonetes', 'Detergentes para a roupa', 'Lixívia e lava-tudo']
        }
      },
      about: {
        badge: 'Sobre Nós',
        title: 'Um supermercado com <1>alma local</1>',
        p1: 'A Super Shop é mais do que um supermercado. Somos um negócio local, profundamente enraizado na comunidade de Gouveia, dedicado a trazer os melhores produtos para a sua mesa.',
        p2: 'Acreditamos que a qualidade não tem de ser um luxo. Por isso, trabalhamos diariamente para garantir a frescura dos nossos produtos, desde a fruta da época até à carne mais tenra. Conhecemos os nossos clientes pelo nome e procuramos sempre o melhor para as suas famílias.',
        f1: {
          title: 'Foco na Frescura',
          desc: 'Produtos selecionados diariamente para a sua mesa.'
        },
        f2: {
          title: 'Atendimento Próximo',
          desc: 'Conhecemos e cuidamos dos nossos clientes.'
        }
      },
      features: {
        badge: 'O Nosso Compromisso',
        title: 'O melhor para a sua <1>casa</1>',
        subtitle: 'Não somos apenas um local de passagem. Somos o ponto de encontro entre os melhores produtos e a sua família. Descubra o que nos torna únicos em Gouveia.',
        f1: {
          title: 'Frescura Diária',
          desc: 'Frutas, legumes e pão quente que chegam todos os dias, selecionados para garantir o máximo sabor e nutrição na sua mesa.'
        },
        f2: {
          title: 'Produtos Regionais',
          desc: 'Apoiamos a produção local, trazendo até si os melhores queijos, enchidos e sabores tradicionais da região da Serra da Estrela.'
        },
        f3: {
          title: 'Comunidade',
          desc: 'Mais do que clientes, servimos vizinhos. O nosso atendimento é feito com um sorriso, proximidade e dedicação total.'
        }
      },
      cta: {
        title: 'Precisa de algo específico?',
        subtitle: 'Ligue-nos para esclarecer qualquer dúvida ou fazer a sua encomenda. Estamos aqui para ajudar!',
        visit: 'Visitar Loja',
        call: 'Ligar Agora',
        info: 'Para encomendas ou dúvidas, aconselhamos a ligar para:'
      },
      visit_store: {
        title: 'Visite a nossa Loja',
        subtitle: 'Venha conhecer o nosso espaço na Zona Industrial de Gouveia e desfrutar de um atendimento personalizado e familiar.',
        f1: {
          title: 'Estacionamento Gratuito',
          desc: 'Temos parque privativo para sua total comodidade e segurança.'
        },
        f2: {
          title: 'Acessibilidade',
          desc: 'Espaço amplo e preparado para receber todos os nossos clientes.'
        },
        f3: {
          title: 'Frescura Garantida',
          desc: 'Produtos repostos diariamente para garantir a melhor qualidade.'
        }
      },
      location: {
        badge: 'Visite-nos',
        title: 'Estamos à sua espera',
        address: {
          label: 'Morada',
          value: 'SuperShop António Pessoa Lopes, LDA.<1/>Zona Industrial De Gouveia<3/>6920-650 Gouveia'
        },
        mapTitle: 'Mapa da localização do Super Shop Gouveia',
        hours: {
          label: 'Horário de Funcionamento',
          days: {
            monday: 'Segunda-feira',
            tuesday: 'Terça-feira',
            wednesday: 'Quarta-feira',
            thursday: 'Quinta-feira',
            friday: 'Sexta-feira',
            saturday: 'Sábado',
            sunday: 'Domingo'
          }
        },
        phone: 'Telefone',
        email: 'Email',
        social: 'Siga-nos nas Redes Sociais'
      },
      footer: {
        desc: 'O seu supermercado de confiança na Zona Industrial de Gouveia. Produtos frescos todos os dias, com atendimento de proximidade.',
        address: 'SuperShop António Pessoa Lopes, LDA.<br />Zona Industrial De Gouveia, 6920-650 Gouveia',
        links: 'Links Úteis',
        follow: 'Siga-nos',
        rights: 'Todos os direitos reservados.',
        identification: 'SuperShop António Pessoa Lopes, LDA. | NIF: 501234567 | Zona Industrial de Gouveia'
      },
      legal: {
        lastUpdated: 'Última atualização',
        close: 'Fechar',
        cookies: {
          title: 'Política de Cookies',
          desc: 'Utilizamos cookies para melhorar a sua experiência, analisar o tráfego do site e personalizar conteúdos. Pode aceitar todos os cookies ou configurar as suas preferências.',
          accept: 'Aceitar Todos',
          reject: 'Rejeitar',
          intro: {
            title: '1. O que são cookies?',
            content: 'Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um website. Eles ajudam o site a funcionar corretamente e a fornecer uma melhor experiência de utilizador.'
          },
          types: {
            title: '2. Tipos de cookies que utilizamos',
            content: 'Utilizamos cookies necessários para o funcionamento do site, cookies analíticos para entender como os utilizadores interagem com o site e cookies de marketing para fornecer publicidade relevante.'
          },
          control: {
            title: '3. Como controlar os cookies',
            content: 'Pode gerir as suas preferências de cookies a qualquer momento através das definições do seu navegador ou utilizando o nosso banner de consentimento.'
          }
        },
        privacy: {
          title: 'Política de Privacidade',
          intro: {
            title: '1. Introdução',
            content: 'Na Super Shop Gouveia (António Pessoa Lopes, LDA.), respeitamos a sua privacidade e agradecemos a confiança que deposita em nós. Esta política detalha como tratamos os seus dados em conformidade com o RGPD.'
          },
          data: {
            title: '2. Recolha de Dados',
            content: 'Recolhemos dados quando nos contacta diretamente. Os dados incluem:',
            item1: 'Identificação: Nome completo',
            item2: 'Contacto: Número de telefone e endereço de email',
            item3: 'Técnicos: Endereço IP e dados de navegação (via cookies)'
          },
          purpose: {
            title: '3. Finalidade e Retenção',
            content: 'Os dados são usados para apoio ao cliente e melhoria do website. Retemos os dados apenas pelo período necessário para estas finalidades ou conforme exigido por lei.'
          },
          rights: {
            title: '4. Os seus direitos',
            content: 'Tem o direito de aceder, retificar, apagar ou opor-se ao tratamento dos seus dados.'
          },
          security: {
            title: '5. Segurança',
            content: 'Implementamos medidas técnicas e organizativas para proteger os seus dados contra acessos não autorizados ou perda de informação.'
          },
          contact: {
            title: '6. Contacto e Responsável',
            content: 'O responsável pelo tratamento de dados é a António Pessoa Lopes, LDA. Para questões de privacidade, contacte:'
          }
        },
        terms: {
          title: 'Termos e Condições',
          intro: {
            title: '1. Aceitação dos Termos',
            content: 'Ao utilizar este website, aceita os presentes Termos e Condições. Se não concordar, por favor não utilize o site.'
          },
          usage: {
            title: '2. Propriedade Intelectual',
            content: 'Todo o conteúdo deste site (textos, imagens, logótipos) é propriedade da Super Shop Gouveia ou dos seus licenciadores e está protegido por direitos de autor.'
          },
          prices: {
            title: '3. Preços e Produtos',
            content: 'Os preços no site são indicativos e incluem IVA à taxa legal. Reservamo-nos o direito de corrigir erros de preços ou disponibilidade. As promoções online podem diferir das da loja física.'
          },
          liability: {
            title: '4. Exclusão de Responsabilidade',
            content: 'Não garantimos que o site esteja livre de erros ou interrupções. Não nos responsabilizamos por danos indiretos resultantes do uso do site.'
          },
          law: {
            title: '5. Resolução de Litígios',
            content: 'Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo (RAL). O foro competente é o de Gouveia.'
          }
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        products: 'Products',
        about: 'About Us',
        location: 'Location',
        visitStore: 'Visit Store',
        viewProducts: 'View Products'
      },
      announcement: {
        bread: 'Freshly baked bread at 8 AM and 4 PM',
        local: 'Locally sourced products',
        open: 'Open every day',
        parking: 'Free parking'
      },
      hero: {
        title: 'Tradition and <1>Quality</1> in Gouveia',
        subtitle: 'Discover the finest fresh and regional products with service that makes you feel at home. Come visit us!'
      },
      categories: {
        badge: 'Our Products',
        title: 'Quality and Variety',
        subtitle: 'We handpick the finest products for your table. Explore our sections and find everything you need.',
        frescos: {
          name: 'Fruits & Vegetables',
          desc: 'Everything you need for healthy salads, soups, and desserts.',
          items: ['Seasonal fruit', 'Fresh vegetables', 'Soup vegetables', 'Fresh herbs']
        },
        talho: {
          name: 'Butcher & Charcuterie',
          desc: 'High-quality fresh meats you can trust for your daily meals.',
          items: ['Beef and pork', 'Chicken and turkey', 'Cured and smoked meats', 'Prepared meats']
        },
        padaria: {
          name: 'Bakery & Pastry',
          desc: 'Freshly baked bread and sweet treats to accompany your coffee.',
          items: ['Fresh bread (various types)', 'Custard tarts and doughnuts', 'Traditional cookies and biscuits', 'Sliced and sandwich bread']
        },
        mercearia: {
          name: 'Grocery',
          desc: 'Essential pantry staples that no kitchen should be without.',
          items: ['Rice, pasta, and beans', 'Olive oil and vinegars', 'Canned and preserved goods', 'Milk, cheese, and butter']
        },
        bebidas: {
          name: 'Beverages',
          desc: 'Refreshing drinks to complement your meal or celebrate.',
          items: ['Mineral water (still/sparkling)', 'Natural juices and nectars', 'Soft drinks', 'Red, white, and "Vinho Verde" wines']
        },
        higiene: {
          name: 'Home & Personal Care',
          desc: 'Everything to take care of yourself and keep your home sparkling.',
          items: ['Shower gel and shampoo', 'Toothpaste and soaps', 'Laundry detergents', 'Bleach and household cleaners']
        }
      },
      about: {
        badge: 'About Us',
        title: 'A supermarket with a <1>local heart</1>',
        p1: 'Super Shop is more than just a supermarket. We are a local business, deeply rooted in the Gouveia community, dedicated to bringing the finest products to your table.',
        p2: 'We believe quality doesn\'t have to be a luxury. That\'s why we work daily to ensure the freshness of our products, from seasonal fruits to the most tender cuts of meat. We know our customers by name and always strive for the best for their families.',
        f1: {
          title: 'Focus on Freshness',
          desc: 'Carefully selected products delivered daily.'
        },
        f2: {
          title: 'Personalized Service',
          desc: 'We know and care for our customers.'
        }
      },
      features: {
        badge: 'Our Commitment',
        title: 'The best for your <1>home</1>',
        subtitle: 'We\'re more than just a place to shop. We are the meeting point between the best products and your family. Discover what makes us unique in Gouveia.',
        f1: {
          title: 'Daily Freshness',
          desc: 'Fresh fruits, vegetables, and bread arrive daily, carefully selected to ensure maximum flavor and nutrition for your table.'
        },
        f2: {
          title: 'Regional Specialties',
          desc: 'We support local producers, bringing you the finest cheeses, cured meats, and traditional flavors from the Serra da Estrela region.'
        },
        f3: {
          title: 'Community First',
          desc: 'More than just customers, we serve neighbors. Our service is defined by a smile, a personal touch, and total dedication.'
        }
      },
      cta: {
        title: 'Looking for something specific?',
        subtitle: 'Call us to clarify any questions or place your order. We are here to help!',
        visit: 'Visit Store',
        call: 'Call Now',
        info: 'For orders or questions, we advise calling:'
      },
      visit_store: {
        title: 'Visit Our Store',
        subtitle: 'Come discover our space in Gouveia\'s Industrial Zone and enjoy a personalized and friendly service.',
        f1: {
          title: 'Free Parking',
          desc: 'We have a private parking lot for your total convenience and safety.'
        },
        f2: {
          title: 'Accessibility',
          desc: 'Spacious area prepared to welcome all our customers.'
        },
        f3: {
          title: 'Guaranteed Freshness',
          desc: 'Products restocked daily to ensure the best quality.'
        }
      },
      location: {
        badge: 'Visit Us',
        title: 'We look forward to seeing you',
        address: {
          label: 'Address',
          value: 'SuperShop António Pessoa Lopes, LDA.<1/>Zona Industrial De Gouveia<3/>6920-650 Gouveia'
        },
        mapTitle: 'Map of Super Shop Gouveia location',
        hours: {
          label: 'Opening Hours',
          days: {
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
            sunday: 'Sunday'
          }
        },
        phone: 'Phone',
        email: 'Email',
        social: 'Follow us on Social Media'
      },
      footer: {
        desc: 'Your trusted supermarket in Gouveia\'s Industrial Zone. Fresh products daily with a personal touch.',
        address: 'SuperShop António Pessoa Lopes, LDA.<br />Industrial Zone of Gouveia, 6920-650 Gouveia',
        links: 'Useful Links',
        follow: 'Follow Us',
        rights: 'All rights reserved.',
        identification: 'SuperShop António Pessoa Lopes, LDA. | VAT: PT501234567 | Industrial Zone of Gouveia'
      },
      legal: {
        lastUpdated: 'Last updated',
        close: 'Close',
        cookies: {
          title: 'Cookie Policy',
          desc: 'We use cookies to improve your experience, analyze site traffic, and personalize content. You can accept all cookies or manage your preferences.',
          accept: 'Accept All',
          reject: 'Reject',
          intro: {
            title: '1. What are cookies?',
            content: 'Cookies are small text files stored on your device when you visit a website. They help the site function correctly and provide a better user experience.'
          },
          types: {
            title: '2. Types of cookies we use',
            content: 'We use necessary cookies for site operation, analytical cookies to understand user interaction, and marketing cookies for relevant advertising.'
          },
          control: {
            title: '3. How to control cookies',
            content: 'You can manage your cookie preferences at any time through your browser settings or using our consent banner.'
          }
        },
        privacy: {
          title: 'Privacy Policy',
          intro: {
            title: '1. Introduction',
            content: 'At Super Shop Gouveia (António Pessoa Lopes, LDA.), we respect your privacy and appreciate the trust you place in us. This policy details how we handle your data in compliance with GDPR.'
          },
          data: {
            title: '2. Data Collection',
            content: 'We collect data when you contact us directly. Data includes:',
            item1: 'Identification: Full name',
            item2: 'Contact: Phone number and email address',
            item3: 'Technical: IP address and browsing data (via cookies)'
          },
          purpose: {
            title: '3. Purpose and Retention',
            content: 'Data is used for customer support and website improvement. We retain data only for the period necessary for these purposes or as required by law.'
          },
          rights: {
            title: '4. Your Rights',
            content: 'You have the right to access, rectify, delete, or object to the processing of your data.'
          },
          security: {
            title: '5. Security',
            content: 'We implement technical and organizational measures to protect your data against unauthorized access or loss of information.'
          },
          contact: {
            title: '6. Contact and Data Controller',
            content: 'The data controller is António Pessoa Lopes, LDA. For privacy matters, contact:'
          }
        },
        terms: {
          title: 'Terms and Conditions',
          intro: {
            title: '1. Acceptance of Terms',
            content: 'By using this website, you accept these Terms and Conditions. If you do not agree, please do not use the site.'
          },
          usage: {
            title: '2. Intellectual Property',
            content: 'All content on this site (text, images, logos) is the property of Super Shop Gouveia or its licensors and is protected by copyright.'
          },
          prices: {
            title: '3. Prices and Products',
            content: 'Prices on the site are indicative and include VAT at the legal rate. We reserve the right to correct pricing or availability errors. Online promotions may differ from those in the physical store.'
          },
          liability: {
            title: '4. Disclaimer',
            content: 'We do not guarantee that the site will be error-free or uninterrupted. We are not liable for indirect damages resulting from the use of the site.'
          },
          law: {
            title: '5. Dispute Resolution',
            content: 'In case of dispute, the consumer may resort to an Alternative Dispute Resolution (ADR) entity. The competent court is that of Gouveia.'
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
