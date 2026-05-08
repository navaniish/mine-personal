import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, BarChart3, Users, FileText, Settings, MessageSquare, Sparkles, LayoutDashboard, Send } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-[#0F172A] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white text-glow">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Real-world, production-ready SaaS platforms built with modern technology stacks and human-centered design.
          </p>
        </motion.div>

        <div className="space-y-32">
          
          {/* PROJECT 1: Navateja Cranes */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            {/* Navateja Visual Mockup */}
            <div className="w-full lg:w-[55%] group relative aspect-[4/3] rounded-[2rem] bg-slate-900/50 shadow-sm border border-slate-800 p-2 lg:p-4 hover:shadow-2xl hover:border-amber-900/50 transition-all duration-500">
              <div className="w-full h-full rounded-[1.5rem] bg-slate-900 relative overflow-hidden flex flex-col shadow-inner">
                {/* Dashboard Topbar */}
                <div className="h-12 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-950/80 backdrop-blur-sm z-10">
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                  </div>
                  <div className="font-heading font-semibold text-amber-500 tracking-wider text-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                    NAVATEJA CRANES
                  </div>
                  <div className="w-6 h-6 rounded-full bg-slate-800"></div>
                </div>
                
                {/* Dashboard Body */}
                <div className="flex flex-grow overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-16 sm:w-40 border-r border-slate-800 bg-slate-950/50 p-4 flex flex-col gap-4">
                    <div className="h-8 rounded flex items-center gap-3 text-amber-500 bg-amber-500/10 px-2 sm:px-3">
                      <LayoutDashboard size={16} /> <span className="hidden sm:block text-xs font-medium">Dashboard</span>
                    </div>
                    <div className="h-8 rounded flex items-center gap-3 text-slate-500 hover:text-slate-300 px-2 sm:px-3">
                      <FileText size={16} /> <span className="hidden sm:block text-xs font-medium">Invoices</span>
                    </div>
                    <div className="h-8 rounded flex items-center gap-3 text-slate-500 hover:text-slate-300 px-2 sm:px-3">
                      <Users size={16} /> <span className="hidden sm:block text-xs font-medium">Employees</span>
                    </div>
                    <div className="h-8 rounded flex items-center gap-3 text-slate-500 hover:text-slate-300 px-2 sm:px-3">
                      <Settings size={16} /> <span className="hidden sm:block text-xs font-medium">Settings</span>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-grow p-4 sm:p-6 bg-slate-900/50 flex flex-col gap-4 sm:gap-6 relative group-hover:scale-[1.02] transition-transform duration-700 origin-top-left">
                    {/* KPIs */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        { title: 'Active Cranes', val: '24', color: 'text-amber-400' },
                        { title: 'Monthly Revenue', val: '₹1.2M', color: 'text-green-400' },
                        { title: 'Pending Invoices', val: '8', color: 'text-blue-400' }
                      ].map((kpi, i) => (
                        <div key={i} className="bg-slate-950 border border-slate-800 p-3 sm:p-4 rounded-xl shadow-lg">
                          <p className="text-[10px] sm:text-xs text-slate-500 mb-1">{kpi.title}</p>
                          <p className={`text-lg sm:text-2xl font-bold ${kpi.color}`}>{kpi.val}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Charts & Tables Area */}
                    <div className="flex-grow flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-2/3 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col">
                        <div className="text-xs text-slate-500 mb-4">Revenue Analytics</div>
                        <div className="flex-grow flex items-end justify-between gap-1 sm:gap-2 px-2">
                          {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="w-full bg-amber-500/10 hover:bg-amber-500/30 rounded-t-sm transition-all" style={{ height: `${h}%` }}>
                              <div className="w-full bg-amber-500 rounded-t-sm" style={{ height: '4px' }}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 bg-slate-950 border border-slate-800 rounded-xl p-4 hidden sm:flex flex-col">
                        <div className="text-xs text-slate-500 mb-4">Recent Activity</div>
                        <div className="space-y-3">
                          <div className="h-2 w-full bg-slate-800 rounded-full"></div>
                          <div className="h-2 w-4/5 bg-slate-800 rounded-full"></div>
                          <div className="h-2 w-5/6 bg-slate-800 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navateja Info */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold mb-4 uppercase tracking-wider w-max">
                Industrial SaaS
              </div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4 text-glow">Navateja Cranes System</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                A premium, enterprise-level business management platform developed exclusively for crane operations. Features include automated invoice generation, employee tracking, and comprehensive client relationship management.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                {['Dashboard Analytics', 'Auto Invoice PDF Generation', 'Employee Management', 'Client CRM System'].map((feature, fIdx) => (
                  <li key={fIdx} className="text-sm font-medium text-slate-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-10">
                {['React.js', 'Node.js', 'MongoDB', 'PDF Automation'].map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="/demo/cranes" className="flex items-center gap-2 px-8 py-4 rounded-xl btn-primary font-semibold hover:shadow-lg transition-all group">
                  <ExternalLink size={18} /> View Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>


          {/* PROJECT 2: NexoVGen-GPT */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row-reverse gap-16 items-center"
          >
            {/* NexoVGen Visual Mockup */}
            <div className="w-full lg:w-[55%] group relative aspect-[4/3] rounded-[2rem] bg-slate-900/50 shadow-sm border border-slate-800 p-2 lg:p-4 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 order-1 lg:order-2">
              <div className="w-full h-full rounded-[1.5rem] bg-white relative overflow-hidden flex flex-col shadow-inner">
                {/* Chat Topbar */}
                <div className="h-14 border-b border-slate-100 flex items-center px-6 justify-between bg-white z-10">
                  <div className="flex gap-3 items-center">
                    <Sparkles size={18} className="text-primary" />
                    <span className="font-heading font-bold text-slate-800 text-sm">NexoVGen-GPT</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400">GPT-4 Turbo</div>
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30"></div>
                  </div>
                </div>

                <div className="flex-grow flex p-6 gap-6 bg-slate-50/30">
                  <div className="w-1/3 space-y-4 hidden sm:block">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Prompt Templates</p>
                     {['Portfolio Assistant', 'Code Reviewer', 'SEO Optimizer'].map((t, i) => (
                       <div key={i} className={`p-3 rounded-xl border border-slate-100 text-[10px] font-semibold ${i === 0 ? 'bg-white text-primary border-primary/20 shadow-sm' : 'bg-white/50 text-slate-500'}`}>{t}</div>
                     ))}
                  </div>
                  <div className="flex-grow flex flex-col gap-6">
                     <div className="self-end bg-primary text-white p-4 rounded-2xl rounded-tr-none text-xs font-medium max-w-[80%] shadow-md">
                        Design a portfolio onboarding sequence.
                     </div>
                     <div className="self-start bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none text-xs text-slate-600 max-w-[80%] shadow-sm flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><Sparkles size={12} className="text-primary"/></div>
                        <div className="space-y-2 w-full">
                           <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                           <div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
                           <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="h-16 border-t border-slate-100 bg-white p-4 flex items-center gap-4">
                   <div className="flex-grow bg-slate-50 rounded-xl px-4 py-2 text-[10px] text-slate-400">Type a message...</div>
                   <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"><Send size={14} /></div>
                </div>

                {/* Floating Metric */}
                <div className="absolute bottom-10 left-10 p-4 rounded-2xl bg-slate-900 shadow-2xl border border-slate-800 w-40 transform -rotate-3">
                   <p className="text-[10px] font-bold text-slate-500 mb-1">API Usage</p>
                   <p className="text-sm font-black text-white">12.4k / 50k</p>
                   <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '40%' }}></div>
                   </div>
                </div>
              </div>
            </div>

            {/* NexoVGen Info */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-wider w-max">
                AI SaaS Platform
              </div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4 text-glow">NexoVGen-GPT</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                A premium, modern AI chatbot platform capable of integrating intelligent assistants into portfolios and websites. It features a humanized conversational interface, advanced prompt engineering dashboards, and real-time AI training tools.
              </p>
              
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                {['Conversational AI UI', 'Prompt Engineering Dashboard', 'Website Integration', 'AI Analytics Tracking'].map((feature, fIdx) => (
                  <li key={fIdx} className="text-sm font-medium text-slate-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(129,140,248,0.6)]"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-10">
                {['OpenAI API', 'React.js', 'Tailwind', 'AI/ML Integration'].map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-semibold text-primary bg-primary/5 border border-primary/10 px-3 py-1.5 rounded-lg shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://nexovgen-gpt-1.onrender.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl btn-primary font-semibold hover:shadow-lg transition-all group">
                  <ExternalLink size={18} /> Live Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
                  View Details
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const BotIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/>
    <rect width="16" height="12" x="4" y="8" rx="2"/>
    <path d="M2 14h2"/>
    <path d="M20 14h2"/>
    <path d="M15 13v2"/>
    <path d="M9 13v2"/>
  </svg>
);

export default Projects;
