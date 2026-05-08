import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Code2 } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: Code2, title: 'Modern Web Dev', desc: 'Building high-performance, responsive web experiences' },
    { icon: Cpu, title: 'AI-Powered Systems', desc: 'Integrating intelligent machine learning solutions' },
    { icon: Terminal, title: 'Business Automation', desc: 'Streamlining workflows with smart digital tools' },
    { icon: Database, title: 'Interactive UI/UX', desc: 'Designing human-centered, premium interfaces' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white text-glow">
              About <span className="text-gradient">NexoVTech</span>
            </h2>
            <div className="space-y-6 text-slate-400 font-body text-lg leading-relaxed">
              <p>
                Welcome to **NexoVTech** — a modern digital solutions and AI innovation brand focused on building intelligent, scalable, and human-centered web experiences.
              </p>
              <p>
                Our mission is to help businesses, startups, and creators transform their ideas into powerful digital products with premium design and modern technology.
              </p>
              <div className="pt-4">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">We Specialize In</h4>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {['Portfolio Websites', 'Business Websites', 'AI Chatbot Integration', 'Dashboard Systems', 'Automation Platforms', 'SaaS Applications'].map((item, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-10 flex gap-10">
              <div className="flex flex-col">
                <span className="text-4xl font-heading font-bold text-primary mb-1 text-glow">2+</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">YEAR EXP</span>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-heading font-bold text-primary mb-1 text-glow">4+</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">PROJECTS</span>
              </div>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 blur-3xl -z-10 rounded-full"></div>
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300 border border-slate-700">
                  <card.icon size={24} className="text-primary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-xl md:text-2xl font-heading font-medium text-slate-300 italic max-w-3xl mx-auto leading-relaxed">
            “We build modern digital experiences powered by creativity, automation, and AI innovation.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
