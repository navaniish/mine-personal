import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Firebase', 'REST APIs']
    },
    {
      title: 'AI & APIs',
      skills: ['OpenAI API', 'Prompt Engineering', 'AI Training', 'Integrations']
    },
    {
      title: 'Tools',
      skills: ['Git & GitHub', 'Netlify', 'Vercel', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#0B0E14] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white text-glow"
          >
            Technical <span className="text-gradient">Toolkit</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A curated set of technologies I use to build scalable, high-performance applications.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 lg:pb-0 scrollbar-hide snap-x snap-mandatory">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-0 snap-center bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all group"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-6 flex items-center justify-between">
                {category.title}
                <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                </div>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5">
                 <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
