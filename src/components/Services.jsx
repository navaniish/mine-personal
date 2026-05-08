import { motion } from 'framer-motion';
import { MonitorSmartphone, Bot, LineChart, Code, Database, Layout } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Code, title: 'Web Development', desc: 'End-to-end modern web applications built for scale and performance.' },
    { icon: Bot, title: 'AI Chatbot Integration', desc: 'Intelligent digital assistants powered by advanced LLMs and APIs.' },
    { icon: LineChart, title: 'Business Automation', desc: 'Streamlining workflows with custom internal tools and management dashboards.' },
    { icon: MonitorSmartphone, title: 'Portfolio Design', desc: 'Premium, cinematic developer and agency portfolios.' },
    { icon: Database, title: 'API Integration', desc: 'Connecting complex systems seamlessly with robust backend architectures.' }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Delivering high-end digital solutions tailored for startups and ambitious businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group relative overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
