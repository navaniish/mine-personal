import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CircleDot } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent z-0"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-5/12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white text-glow"
            >
              Let's build something <span className="text-gradient">epic together</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 mb-10"
            >
              Have a project in mind or want to collaborate? I'm currently open for freelance opportunities and full-time roles.
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <a href="mailto:daggupatinavaneeswar8980@gmail.com" className="text-white font-semibold hover:text-primary transition-colors">daggupatinavaneeswar8980@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone</p>
                  <a href="tel:+917075708980" className="text-white font-semibold hover:text-secondary transition-colors">+91 70757 08980</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="text-white font-semibold">Remote / India</p>
                </div>
              </div>
            </div>

            <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100">
              <CircleDot size={14} className="text-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700">Available for new projects</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12 bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-800"
          >
            <form action="https://formsubmit.co/daggupatinavaneeswar8980@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 ${focusedInput === 'name' ? '-top-3 text-xs text-primary bg-slate-900 px-2 font-bold' : 'top-4 text-slate-500'}`}>Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    onFocus={() => setFocusedInput('name')}
                    onBlur={(e) => !e.target.value && setFocusedInput(null)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-slate-900 transition-all focus:ring-4 focus:ring-primary/10"
                  />
                </div>
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 ${focusedInput === 'email' ? '-top-3 text-xs text-primary bg-slate-900 px-2 font-bold' : 'top-4 text-slate-500'}`}>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    onFocus={() => setFocusedInput('email')}
                    onBlur={(e) => !e.target.value && setFocusedInput(null)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-slate-900 transition-all focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className={`absolute left-4 transition-all duration-300 ${focusedInput === 'message' ? '-top-3 text-xs text-primary bg-slate-900 px-2 font-bold' : 'top-4 text-slate-500'}`}>Message</label>
                <textarea 
                  name="message" 
                  rows="5"
                  required
                  onFocus={() => setFocusedInput('message')}
                  onBlur={(e) => !e.target.value && setFocusedInput(null)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-slate-900 transition-all resize-none focus:ring-4 focus:ring-primary/10"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 btn-primary rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
