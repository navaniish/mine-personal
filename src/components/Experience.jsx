import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Freelance Full Stack Developer',
      company: 'Independent',
      period: '2024',
      desc: 'Developing business websites, AI systems, automation platforms, and premium portfolio websites for various clients. Focusing on scalable architecture and modern UX.'
    },
    {
      role: 'AI Integration Developer',
      company: 'NexoVGen',
      period: '2025',
      desc: 'Building AI-powered applications, prompt engineering, and conversational UI integration for intelligent digital assistants.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#0B0E14]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center text-white text-glow"
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:border-none space-y-12">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-[1px] w-[2px] bg-slate-200"></div>

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-21px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-white border-4 border-primary z-10 shadow-sm"></div>
              
              <div className="w-full md:w-[45%] pl-8 md:pl-0">
                <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 hover:shadow-lg hover:border-primary/30 transition-all group">
                  <div className="text-primary font-bold mb-2 tracking-wider text-sm uppercase text-glow">{exp.period}</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-md text-slate-400 mb-4 font-medium">{exp.company}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
