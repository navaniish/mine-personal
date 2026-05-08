import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B0E14] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-1">
          Nava<span className="text-primary text-glow">.Dev</span>
        </h2>
        
        <div className="flex gap-4 mb-8">
          <a href="https://github.com/navaniish" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/daggupati-navaneeswar-93831b308" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:daggupatinavaneeswar8980@gmail.com" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Daggupati Navaneeswar. Built with passion & AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
