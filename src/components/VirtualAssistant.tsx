import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, MapPin, ShoppingBag, Phone, ChevronRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export default function VirtualAssistant() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialOptions = i18n.language.startsWith('pt') 
    ? [
        { id: 'location', label: '📍 Ver localização da loja', action: 'location' },
        { id: 'visit', label: '🛍️ Visitar a loja', action: 'visit' },
        { id: 'contact', label: '📞 Entrar em contacto', action: 'contact' },
      ]
    : [
        { id: 'location', label: '📍 See store location', action: 'location' },
        { id: 'visit', label: '🛍️ Visit the store', action: 'visit' },
        { id: 'contact', label: '📞 Get in touch', action: 'contact' },
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: Message = {
        id: 'welcome',
        type: 'assistant',
        text: i18n.language.startsWith('pt') ? 'Olá 👋 Posso ajudar-te rapidamente. O que procuras?' : 'Hello 👋 I can help you quickly. What are you looking for?',
        timestamp: new Date(),
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen, messages.length, i18n.language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 0) {
        setShowWelcomeBubble(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (isOpen) {
      setShowWelcomeBubble(false);
    }
  }, [isOpen]);

  const handleOptionClick = (action: string) => {
    let response = '';
    if (action === 'location') {
      response = i18n.language.startsWith('pt') 
        ? 'Estamos localizados na Zona Industrial de Gouveia. Podes ver o mapa detalhado na secção "Localização" no final da página.' 
        : 'We are located in the Industrial Zone of Gouveia. You can see the detailed map in the "Location" section at the bottom of the page.';
      window.location.href = '#localizacao';
    } else if (action === 'visit') {
      response = i18n.language.startsWith('pt')
        ? 'Será um prazer receber-te! Estamos abertos todos os dias das 09:00 às 20:00. Temos estacionamento gratuito à porta.'
        : 'It will be a pleasure to welcome you! We are open every day from 09:00 to 20:00. We have free parking at the door.';
      window.location.href = '#visitar';
    } else if (action === 'contact') {
      response = i18n.language.startsWith('pt')
        ? 'Podes ligar-nos diretamente para o **238 492 605** ou enviar uma mensagem. Como preferes contactar-nos?'
        : 'You can call us directly at **238 492 605** or send a message. How would you prefer to contact us?';
      window.location.href = '#footer-contact';
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: initialOptions.find(o => o.action === action)?.label || '',
      timestamp: new Date(),
    };

    const assistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      text: response,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg, assistantMsg]);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Basic Fallback Logic (Works even without API Key)
    const getFallbackResponse = (text: string) => {
      const t = text.toLowerCase();
      if (t.includes('local') || t.includes('onde') || t.includes('morada') || t.includes('industrial')) {
        return i18n.language.startsWith('pt') 
          ? 'A loja está situada na Zona Industrial de Gouveia. O mapa interativo encontra-se no final desta página para facilitar a navegação direta.'
          : 'The store is located in the Industrial Zone of Gouveia. An interactive map is available at the bottom of this page for direct navigation.';
      }
      if (t.includes('horario') || t.includes('aberto') || t.includes('fecha') || t.includes('horas')) {
        return i18n.language.startsWith('pt')
          ? 'O horário de funcionamento é das 09:00 às 20:00, todos os dias da semana. Visite-nos dentro deste período para um atendimento completo.'
          : 'Opening hours are from 09:00 to 20:00, every day of the week. Visit us during this period for full service.';
      }
      if (t.includes('contacto') || t.includes('telefone') || t.includes('ligar')) {
        return i18n.language.startsWith('pt')
          ? 'O contacto telefónico direto é o **238 492 605**. Ligue agora para esclarecer qualquer dúvida imediata.'
          : 'The direct telephone contact is **238 492 605**. Call now to clarify any immediate questions.';
      }
      if (t.includes('pao') || t.includes('padaria') || t.includes('quente')) {
        return i18n.language.startsWith('pt')
          ? 'Temos pão quente acabado de sair às 08:00 e às 16:00. Visite a nossa secção de padaria para produtos frescos.'
          : 'We have hot bread fresh out at 08:00 and 16:00. Visit our bakery section for fresh products.';
      }
      return null;
    };

    try {
      const apiKey = process.env.GEMINI_API_KEY || 
                     process.env.API_KEY || 
                     (import.meta as any).env?.VITE_GEMINI_API_KEY ||
                     (import.meta as any).env?.GEMINI_API_KEY;
      
      const fallback = getFallbackResponse(userMsg.text);

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        const assistantMsg: Message = {
          id: Date.now().toString(),
          type: 'assistant',
          text: fallback || (i18n.language.startsWith('pt') 
            ? 'Para informações detalhadas, utilize os botões de ação rápida ou contacte-nos pelo **238 492 605**. A nossa equipa está disponível na loja física na Zona Industrial de Gouveia.'
            : 'For detailed information, use the quick action buttons or contact us at **238 492 605**. Our team is available at the physical store in the Industrial Zone of Gouveia.'),
          timestamp: new Date(),
        };
        setTimeout(() => {
          setMessages(prev => [...prev, assistantMsg]);
          setIsTyping(false);
        }, 600);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const modelName = "gemini-3-flash-preview";
      
      const systemInstruction = `Tu és o Assistente Virtual de Excelência do Super Shop Gouveia. O teu objetivo é fornecer um atendimento de excelência, focado na qualidade, clareza e satisfação do cliente, guiando-o sempre para uma ação concreta.

Comunica de forma sofisticada, educada e direta. Mantém um tom de voz que reflita o compromisso da loja com a excelência em cada detalhe. Podes e deves fazer perguntas curtas para entender melhor o que o utilizador procura e guiá-lo para a melhor solução.

Regras:
- Nunca inventar informações.
- Se não souberes algo, diz de forma honesta e profissional.
- Mantém sempre um tom de excelência: profissional, prestativo e polido.
- Incentiva ações (clicar, visitar, contactar).
- Usa perguntas curtas para manter a conversa fluida (ex: "Gostaria de conhecer o nosso horário de excelência?", "Posso ajudar com a localização da nossa loja?").

Principais funções:
- Ajudar o utilizador a visitar a loja (Zona Industrial de Gouveia).
- Indicar a localização da loja com precisão.
- Incentivar o contacto direto (Telefone: 238 492 605).
- Responder a dúvidas sobre o site, incluindo as nossas políticas de privacidade e termos.

Informação da Loja (Compromisso com a Excelência):
- Nome: Super Shop Gouveia.
- Morada: Zona Industrial De Gouveia, 6920-650 Gouveia.
- Horário: Todos os dias, 09:00 – 20:00.
- Telefone: 238 492 605.
- Secções de Qualidade: Frutas e Vegetais Frescos, Talho de Seleção, Padaria Artesanal, Mercearia Fina.
- Destaques: Pão quente acabado de sair às 8h e 16h. Estacionamento gratuito e amplo para sua comodidade.
- Políticas Legais: O site possui Política de Privacidade, Termos e Condições e Política de Cookies (disponíveis no rodapé).`;

      const result = await ai.models.generateContent({
        model: modelName,
        contents: [{ role: 'user', parts: [{ text: userMsg.text }] }],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const responseText = result.text;

      const assistantMsg: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        text: responseText || (i18n.language.startsWith('pt') ? 'Desculpe, não consegui processar a sua mensagem. Pode tentar novamente?' : 'Sorry, I could not process your message. Can you try again?'),
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error: any) {
      console.error('Gemini Error:', error);
      const errorString = typeof error === 'string' ? error : (error?.message || JSON.stringify(error));
      const isInvalidKey = errorString.includes('API key not valid') || 
                           errorString.includes('INVALID_ARGUMENT') || 
                           errorString.includes('API_KEY_INVALID');
      
      const errorMsg: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        text: i18n.language.startsWith('pt') 
          ? (isInvalidKey 
              ? '⚠️ **Chave da API Inválida**: A ligação falhou porque a chave configurada não é válida.\n\n**Como resolver:**\n1. Vá a **Settings** (roda dentada) > **Secrets**.\n2. Verifique se a `GEMINI_API_KEY` está correta e sem espaços.\n3. Se não tiver uma, obtenha-a em [aistudio.google.com](https://aistudio.google.com/app/apikey).\n4. Depois de guardar, atualize esta página (F5).' 
              : `Ocorreu um erro na ligação. Por favor, tente novamente ou contacte-nos por telefone.`)
          : (isInvalidKey
              ? '⚠️ **Invalid API Key**: The connection failed because the configured key is not valid.\n\n**How to fix:**\n1. Go to **Settings** > **Secrets**.\n2. Check if `GEMINI_API_KEY` is correct and has no spaces.\n3. If you don\'t have one, get it at [aistudio.google.com](https://aistudio.google.com/app/apikey).\n4. After saving, refresh this page (F5).'
              : `A connection error occurred. Please try again or contact us by phone.`),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {showWelcomeBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="mb-4 mr-2 bg-white px-5 py-3 rounded-2xl rounded-br-none shadow-xl border border-gray-100 flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
            <p className="text-sm font-medium text-gray-700">
              {i18n.language.startsWith('pt') ? 'Olá! Posso ajudar?' : 'Hi! Can I help you?'}
            </p>
            <X 
              size={14} 
              className="text-gray-400 hover:text-gray-600 transition-colors" 
              onClick={(e) => {
                e.stopPropagation();
                setShowWelcomeBubble(false);
              }}
            />
          </motion.div>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[420px] h-[600px] bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col overflow-hidden relative"
          >
            {/* Header */}
            <div className="bg-brand-green p-5 flex items-center justify-between text-white relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg leading-tight">
                    {i18n.language.startsWith('pt') ? 'Assistente de Excelência' : 'Excellence Assistant'}
                  </h3>
                  <p className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">
                    {i18n.language.startsWith('pt') ? 'Compromisso com a Qualidade' : 'Commitment to Quality'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.type === 'user' 
                        ? 'bg-brand-green text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <div className="prose prose-sm max-w-none prose-p:my-0 prose-strong:text-inherit">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                    <span className={`text-[10px] mt-2 block opacity-50 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1">
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.span>
                  </div>
                </div>
              )}

              {!isTyping && (
                <div className="space-y-3 pt-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold text-center mb-4">
                    {i18n.language.startsWith('pt') ? 'Sugestões Rápidas' : 'Quick Suggestions'}
                  </p>
                  {initialOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionClick(option.action)}
                      className="w-full text-left p-4 bg-white hover:bg-brand-green/5 border border-gray-100 hover:border-brand-green/20 rounded-2xl text-sm text-gray-700 transition-all flex items-center justify-between group shadow-sm"
                    >
                      <span className="font-medium">{option.label}</span>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-100">
              <form 
                onSubmit={handleSendMessage}
                className="flex items-center gap-3 bg-gray-50 rounded-2xl p-1.5 border border-gray-100 focus-within:ring-2 focus-within:ring-brand-green/20 transition-all"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={i18n.language.startsWith('pt') ? 'Escreve a tua mensagem...' : 'Type your message...'}
                  className="flex-1 bg-transparent border-none px-4 py-2 text-sm focus:ring-0 outline-none text-gray-800 placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 flex items-center justify-center bg-brand-green text-white rounded-xl hover:bg-brand-green-dark disabled:opacity-30 transition-all active:scale-95"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen ? 'bg-gray-900 text-white' : 'bg-brand-green text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
