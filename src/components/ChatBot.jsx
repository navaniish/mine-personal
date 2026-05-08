import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, User, ArrowRight, ExternalLink, Globe, Mail, Phone } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      text: "Hey 👋\nI'm Nav AI, your virtual assistant.\nI can help you explore Navaneeswar's projects, skills, AI systems, and development services.\nWhat would you like to know?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const suggestions = [
    "Show projects",
    "What technologies do you use?",
    "Tell me about NexoVGen-GPT",
    "Can you build business websites?",
    "How can I contact you?",
  ];

  const knowledgeBase = {
    projects: {
      keywords: ['projects', 'work', 'portfolio', 'built', 'show'],
      response: "Navaneeswar has built several high-end SaaS platforms. His favorites include:\n\n1. **Navateja Cranes**: An industrial management system with invoice automation.\n2. **NexoVGen-GPT**: A premium AI chatbot platform for modern portfolios.\n\nWhich one would you like to hear more about?",
      suggestions: ["Navateja Cranes", "NexoVGen-GPT", "Go back"]
    },
    cranes: {
      keywords: ['cranes', 'navateja', 'industrial'],
      response: "The **Navateja Cranes System** is an enterprise-level dashboard built for heavy machinery operations. \n\nKey features include:\n• Automated PDF Invoice Generation\n• Real-time Employee Tracking\n• Advanced Revenue Analytics\n• Client CRM System\n\nIt was built using React.js, Node.js, and MongoDB.",
      suggestions: ["Show NexoVGen-GPT", "View Demo", "Other projects"]
    },
    nexovgen: {
      keywords: ['nexovgen', 'gpt', 'ai platform'],
      response: "**NexoVGen-GPT** is a futuristic AI chatbot integration platform. \n\nIt specializes in:\n• Conversational AI UI design\n• Advanced Prompt Engineering\n• OpenAI API Integration\n• Real-time AI training dashboards\n\nIt helps developers add intelligent assistants to their sites seamlessly.",
      suggestions: ["Navateja Cranes", "Skills used", "Contact him"]
    },
    skills: {
      keywords: ['skills', 'technologies', 'stack', 'tech', 'languages', 'use'],
      response: "Navaneeswar is a Full Stack expert specializing in AI. His core stack includes:\n\n• **Frontend**: React.js, Tailwind CSS, Framer Motion\n• **Backend**: Node.js, Express\n• **AI**: OpenAI API, Prompt Engineering\n• **Database**: MongoDB, Firebase\n\nHe focuses on building clean, premium, and intelligent applications.",
      suggestions: ["Can you build business sites?", "Show projects", "Experience"]
    },
    services: {
      keywords: ['services', 'offer', 'hire', 'build', 'business', 'websites'],
      response: "Navaneeswar offers premium development services:\n\n• Custom Portfolio & Business Websites\n• AI Chatbot Integration (like me!)\n• Business Automation Systems\n• Modern Dashboard Development\n• API Architecture\n\nInterested in working together?",
      suggestions: ["How to contact?", "View Experience", "Pricing?"]
    },
    contact: {
      keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'linkedin', 'github'],
      response: "You can reach Navaneeswar directly via:\n\n📧 **Email**: daggupatinavaneeswar8980@gmail.com\n📞 **Phone**: +91 70757 08980\n\nOr check his socials below!",
      suggestions: ["View GitHub", "View LinkedIn", "Send an email"]
    },
    experience: {
      keywords: ['experience', 'history', 'journey', 'years'],
      response: "Navaneeswar has been actively developing since 2024. He currently works as an **AI Integration Developer** at NexoVGen and takes on high-end **Freelance Projects** globally.",
      suggestions: ["What skills?", "Show projects", "Contact"]
    },
    greeting: {
      keywords: ['hi', 'hello', 'hey', 'sup', 'yo'],
      response: "Hey there! I'm Nav AI. How can I help you explore Navaneeswar's portfolio today?",
      suggestions: ["Show projects", "What skills?", "Contact"]
    }
  };

  const handleSend = (text) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // AI Logic
    setTimeout(() => {
      let botResponse = "I'm sorry, I didn't quite catch that. Would you like to see Navaneeswar's projects or contact him?";
      let botSuggestions = ["Show projects", "Skills", "Contact"];
      
      const lowerText = messageText.toLowerCase();
      
      for (const key in knowledgeBase) {
        if (knowledgeBase[key].keywords.some(k => lowerText.includes(k))) {
          botResponse = knowledgeBase[key].response;
          botSuggestions = knowledgeBase[key].suggestions || suggestions;
          break;
        }
      }

      if (lowerText.includes('demo')) {
        window.location.href = '#projects';
        botResponse = "Redirecting you to the Projects section to see the live demos! 🚀";
      }

      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse,
        suggestions: botSuggestions,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-2xl bg-slate-900 text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center group border-2 border-primary/50 hover:border-primary transition-all duration-300"
      >
        {/* Rotating Outer Ring */}
        <div className="absolute inset-[-4px] rounded-[1.4rem] border border-primary/30 animate-[spin_8s_linear_infinite] group-hover:border-primary/60 transition-colors"></div>
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
              <Bot size={28} className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing Aura */}
        <div className="absolute inset-0 rounded-2xl bg-primary/40 animate-ping -z-10 opacity-50"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-[100] w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] flex flex-col glass-card border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 relative">
                  <Bot size={22} className="text-primary" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1E293B]"></div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm flex items-center gap-2">
                    Nav AI <Sparkles size={12} className="text-accent animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Online & Ready to Help</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-grow overflow-y-auto p-5 space-y-6 custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center border ${
                      msg.type === 'user' ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-primary/10 border-primary/20 text-primary'
                    }`}>
                      {msg.type === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.type === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 font-medium px-11">{msg.time}</span>
                  
                  {/* Bot Suggestions */}
                  {msg.type === 'bot' && msg.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-4 px-11">
                      {msg.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(suggestion)}
                          className="text-[10px] font-bold px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all active:scale-95"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-slate-500 rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-500 rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-500 rounded-full"></motion.span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 border-t border-white/10 bg-slate-900/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me something..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-5 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-light transition-all disabled:opacity-50 disabled:grayscale"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-600 mt-3 font-medium tracking-wide">
                Nav AI can make mistakes. Check important info.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
