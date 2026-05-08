import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2, Sparkles, Layout } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden" id="home">
      {/* Cinematic Particles & Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10 justify-between">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-400">Available for Freelance Projects</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-white mb-6 leading-tight text-glow"
            >
              Hi, I'm <br />
              <span className="text-gradient">Daggupati Navaneeswar</span> 👋
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl font-medium text-slate-300 mb-6"
            >
              AI & ML Student | Full Stack Developer
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              I build modern websites, AI-powered applications, and business automation systems focusing on clean design and premium user experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-xl btn-primary font-semibold flex items-center justify-center gap-2 group"
              >
                View My Work 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/resume.pdf" 
                download="Navaneeswar_Resume.pdf"
                className="px-8 py-4 rounded-xl bg-slate-800 text-white font-semibold flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-700 transition-all shadow-sm group"
              >
                Download Resume 
                <Download size={18} className="group-hover:-translate-y-1 transition-transform text-slate-400 group-hover:text-white" />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-5 justify-center lg:justify-start"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/navaniish' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/daggupati-navaneeswar-93831b308' }
              ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                  <item.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-2/5 order-1 lg:order-2 relative"
          >
            <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-2xl"></div>
              
              {/* Profile Image Wrapper */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/profile.png" 
                  alt="Daggupati Navaneeswar" 
                  className="w-full h-full object-cover rounded-[2rem] bg-slate-100"
                />
              </div>

              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 glass-card p-3 rounded-2xl bg-white/90 text-primary shadow-lg"
              >
                <Code2 size={24} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-6 glass-card p-3 rounded-2xl bg-white/90 text-accent shadow-lg"
              >
                <Sparkles size={24} />
              </motion.div>

              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-2xl bg-white/90 text-secondary shadow-lg flex items-center gap-2"
              >
                <Layout size={18} />
                <span className="text-sm font-semibold text-slate-700">Premium UI</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
