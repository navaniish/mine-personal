import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "SURESH BABU",
      role: "Managing Director at Navateja Cranes",
      text: "The Navateja Cranes management system transformed our fleet operations. Navaneeswar built a dashboard that is both visually stunning and technically robust, handling our complex logistics with ease.",
      avatar: "https://ui-avatars.com/api/?name=Suresh+Babu&background=6366F1&color=fff"
    },
    {
      name: "Dr. Arvind Kumar",
      role: "Founder of NexoVGen AI",
      text: "Navaneeswar's expertise in AI integration is exceptional. The NexoVGen-GPT portal he developed is a masterpiece of modern web design and prompt engineering, providing our users with a seamless AI experience.",
      avatar: "https://ui-avatars.com/api/?name=Arvind+Kumar&background=C084FC&color=fff"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">
            Client <span className="text-gradient">Feedback</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote size={40} className="text-slate-100 absolute top-8 right-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full shadow-sm" />
                <div>
                  <h4 className="font-heading font-bold text-slate-800">{test.name}</h4>
                  <p className="text-sm text-slate-500">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
