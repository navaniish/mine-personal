import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, FileText, Users, Construction, BarChart3, Settings, 
  Search, Bell, Plus, Download, ChevronRight, MoreHorizontal, 
  ArrowUpRight, Clock, CheckCircle2, AlertCircle, LogOut, Menu, X,
  Briefcase, Users2, Calendar, ClipboardList, MessageSquare, BellRing
} from 'lucide-react';

const CranesDemo = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-[#0B0E14] flex font-body text-slate-300">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 bg-[#111827] flex-col h-screen sticky top-0 border-r border-slate-800/50 shadow-2xl">
        <div className="p-8">
          <div className="flex items-center gap-3 text-[#FBBF24]">
            <div className="w-10 h-10 bg-[#FBBF24]/10 rounded-xl flex items-center justify-center border border-[#FBBF24]/20">
              <Construction size={24} />
            </div>
            <span className="font-heading font-black text-xl tracking-tighter uppercase">NAVATEJA <span className="block text-[10px] tracking-[0.3em] font-medium text-slate-500">CRANES</span></span>
          </div>
        </div>

        <nav className="flex-grow px-4 space-y-1 mt-4">
          {[
            { name: 'Dashboard', icon: LayoutDashboard },
            { name: 'Crane Operations', icon: Construction },
            { name: 'Projects', icon: Briefcase },
            { name: 'Invoices', icon: FileText },
            { name: 'Clients', icon: Users2 },
            { name: 'Employees', icon: Users },
            { name: 'Attendance', icon: Calendar },
            { name: 'Maintenance', icon: Settings },
            { name: 'Reports', icon: ClipboardList },
            { name: 'Notifications', icon: BellRing },
            { name: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.name 
                ? 'bg-[#FBBF24] text-[#0B0E14] font-bold shadow-lg shadow-[#FBBF24]/20' 
                : 'text-slate-500 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <item.icon size={18} className={activeTab === item.name ? 'text-[#0B0E14]' : 'group-hover:text-[#FBBF24] transition-colors'} />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-8 mt-auto">
          <div className="bg-[#1F2937] rounded-2xl p-4 border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FBBF24]/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <img src="https://ui-avatars.com/api/?name=NC&background=FBBF24&color=000" alt="Navateja" className="w-12 h-12 rounded-xl mb-4 relative z-10 border border-slate-700 shadow-lg" />
            <h4 className="text-sm font-bold text-white relative z-10">Navateja Cranes Pvt. Ltd.</h4>
            <p className="text-[10px] text-slate-500 mt-1 relative z-10">Lifting Solutions, Building the Future.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-h-screen overflow-x-hidden">
        {/* Header */}
        <header className="h-20 bg-[#0B0E14]/80 backdrop-blur-xl border-b border-slate-800/50 sticky top-0 z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-8 flex-grow">
            <h1 className="text-xl font-heading font-bold text-white flex items-center gap-3">
              <Menu size={24} className="lg:hidden text-slate-400" />
              Dashboard <span className="hidden sm:inline text-xs font-medium text-slate-500 ml-2">Welcome back, Navaneeswar! 👋</span>
            </h1>
            <div className="hidden md:flex items-center gap-4 flex-grow max-w-md relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="w-full pl-12 pr-4 py-2.5 bg-[#111827] border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FBBF24]/20 focus:border-[#FBBF24] transition-all text-sm text-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 bg-[#111827] border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors flex items-center justify-center">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FBBF24] rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-800/50">
              <div className="text-right">
                <p className="text-sm font-bold text-white">Navaneeswar</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Admin</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=N&background=FBBF24&color=000" className="w-10 h-10 rounded-xl border border-slate-800" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
          {/* Action Header */}
          <div className="flex items-center justify-end">
            <button className="bg-[#FBBF24] text-[#0B0E14] px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-[#FBBF24]/20 transition-all active:scale-95">
              <Plus size={18} /> Quick Action
            </button>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[
              { label: 'Total Projects', val: '24', change: '+18%', icon: LayoutDashboard, color: 'text-blue-400' },
              { label: 'Active Cranes', val: '12', change: '+8%', icon: Construction, color: 'text-[#FBBF24]' },
              { label: 'Monthly Revenue', val: '₹18,75,000', change: '+26%', icon: BarChart3, color: 'text-green-400' },
              { label: 'Pending Invoices', val: '7', change: '+5', icon: FileText, color: 'text-red-400' },
              { label: 'Employees', val: '32', change: '+3', icon: Users, color: 'text-purple-400' },
              { label: 'Active Clients', val: '18', change: '+4', icon: Users2, color: 'text-cyan-400' },
            ].map((kpi, i) => (
              <div key={i} className="bg-[#111827] p-6 rounded-[1.5rem] border border-slate-800 shadow-sm relative overflow-hidden group hover:border-[#FBBF24]/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center ${kpi.color}`}>
                    <kpi.icon size={20} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{kpi.val}</div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{kpi.change}</span>
                  <span className="text-[10px] text-slate-500">from last month</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800 overflow-hidden">
                  <div className={`h-full ${kpi.color.replace('text-', 'bg-')} opacity-20`} style={{width: '60%'}}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Overview */}
            <div className="lg:col-span-2 bg-[#111827] rounded-[2rem] border border-slate-800 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-white">Revenue Overview</h3>
                <select className="bg-slate-800 border-none rounded-lg px-3 py-1.5 text-xs font-bold text-slate-400 outline-none">
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
              </div>
              <div className="h-64 relative flex items-end">
                {/* Simulated Chart */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <svg width="100%" height="100%" viewBox="0 0 800 200" className="overflow-visible">
                     <path d="M0 180 Q 100 160, 200 150 T 400 80 T 600 100 T 800 20" fill="none" stroke="#FBBF24" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                     <path d="M0 190 Q 100 185, 200 180 T 400 140 T 600 160 T 800 120" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="5,5" />
                     <circle cx="400" cy="80" r="6" fill="#FBBF24" className="animate-pulse" />
                     <rect x="370" y="30" width="80" height="40" rx="8" fill="#1F2937" />
                     <text x="378" y="48" fill="#FBBF24" fontSize="10" fontWeight="bold">15 May 2024</text>
                     <text x="378" y="60" fill="white" fontSize="10" fontWeight="bold">₹12,45,000</text>
                   </svg>
                </div>
                <div className="w-full flex justify-between px-4 text-[10px] font-bold text-slate-500 mt-4 border-t border-slate-800 pt-4">
                  {['01 May', '08 May', '15 May', '22 May', '30 May'].map((d) => <span key={d}>{d}</span>)}
                </div>
              </div>
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-[3px] bg-[#FBBF24] rounded-full"></div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase">Actual Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-3 h-[3px] bg-slate-600 rounded-full border-dashed border"></div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase">Target Revenue</span>
                </div>
              </div>
            </div>

            {/* Crane Utilization */}
            <div className="bg-[#111827] rounded-[2rem] border border-slate-800 p-8 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-white mb-8">Crane Utilization</h3>
              <div className="flex-grow flex flex-col items-center justify-center relative py-10">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="45" stroke="#1F2937" strokeWidth="8" fill="none" />
                    <circle cx="50" cy="50" r="45" stroke="#FBBF24" strokeWidth="8" fill="none" strokeDasharray="210, 283" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-black text-white">75%</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Utilized</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Utilized', val: '9 Cranes', color: 'bg-[#FBBF24]' },
                  { label: 'Idle', val: '2 Cranes', color: 'bg-slate-600' },
                  { label: 'Maintenance', val: '1 Crane', color: 'bg-red-500' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                      <span className="text-xs font-medium text-slate-400">{item.label}</span>
                    </div>
                    <span className="text-xs font-bold text-white">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tables Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Recent Projects */}
            <div className="xl:col-span-2 bg-[#111827] rounded-[2rem] border border-slate-800 overflow-hidden shadow-sm">
              <div className="p-8 border-b border-slate-800 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Recent Projects</h3>
                <button className="text-xs font-bold text-[#FBBF24] hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                      <th className="px-8 py-5">Project Name</th>
                      <th className="px-8 py-5">Client</th>
                      <th className="px-8 py-5">Crane Assigned</th>
                      <th className="px-8 py-5">Status</th>
                      <th className="px-8 py-5">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {[
                      { name: 'Bridge Construction - Phase 2', client: 'Navateja Cranes', crane: 'ACE 14XW', status: 'In Progress', progress: 75, color: 'text-green-400 bg-green-400/10' },
                      { name: 'Industrial Plant Lifting', client: 'Shiva Industries', crane: 'Tata Hydra 12', status: 'In Progress', progress: 60, color: 'text-green-400 bg-green-400/10' },
                      { name: 'Commercial Complex', client: 'Urban Buildcon', crane: 'Liebherr LTM 1090', status: 'Pending', progress: 25, color: 'text-amber-400 bg-amber-400/10' },
                      { name: 'Warehouse Construction', client: 'Sree Builders', crane: 'Escort F15', status: 'Completed', progress: 100, color: 'text-blue-400 bg-blue-400/10' },
                    ].map((proj, i) => (
                      <tr key={i} className="text-sm">
                        <td className="px-8 py-5 font-bold text-white flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400"><Briefcase size={14}/></div>
                           {proj.name}
                        </td>
                        <td className="px-8 py-5 text-slate-400 font-medium">{proj.client}</td>
                        <td className="px-8 py-5 text-slate-400 font-medium">{proj.crane}</td>
                        <td className="px-8 py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${proj.color}`}>{proj.status}</span>
                        </td>
                        <td className="px-8 py-5">
                           <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <div className={`h-full ${proj.progress === 100 ? 'bg-blue-400' : proj.progress > 50 ? 'bg-green-400' : 'bg-amber-400'}`} style={{width: `${proj.progress}%`}}></div>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Maintenance */}
            <div className="bg-[#111827] rounded-[2rem] border border-slate-800 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-white">Upcoming Maintenance</h3>
                <button className="text-xs font-bold text-[#FBBF24] hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'ACE 14XW Crane', due: 'Maintenance in 3 days', icon: Construction },
                  { name: 'Tata Hydra 12', due: 'Maintenance in 5 days', icon: Construction },
                  { name: 'Escort F15', due: 'Maintenance in 7 days', icon: Construction },
                  { name: 'Liebherr LTM 1090', due: 'Maintenance in 10 days', icon: Construction },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-[#FBBF24] group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                      <p className="text-[10px] font-bold text-[#FBBF24] flex items-center gap-1 mt-1">
                        <Clock size={10} /> {item.due}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
             {/* Recent Invoices */}
             <div className="bg-[#111827] rounded-[2rem] border border-slate-800 overflow-hidden shadow-sm">
               <div className="p-8 border-b border-slate-800 flex items-center justify-between">
                 <h3 className="text-lg font-bold text-white">Recent Invoices</h3>
                 <button className="text-xs font-bold text-[#FBBF24] hover:underline">View All</button>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                       <th className="px-8 py-5">Invoice ID</th>
                       <th className="px-8 py-5">Amount</th>
                       <th className="px-8 py-5">Status</th>
                     </tr>
                   </thead>
                   <tbody>
                     {[
                       { id: 'INV-2024-125', amount: '₹2,45,000', status: 'Paid', color: 'text-green-400' },
                       { id: 'INV-2024-124', amount: '₹1,80,000', status: 'Paid', color: 'text-green-400' },
                       { id: 'INV-2024-123', amount: '₹3,75,000', status: 'Pending', color: 'text-amber-400' },
                       { id: 'INV-2024-122', amount: '₹2,10,000', status: 'Pending', color: 'text-amber-400' },
                     ].map((inv, i) => (
                       <tr key={i} className="border-b border-slate-800/30 text-sm">
                         <td className="px-8 py-5 font-bold text-white">{inv.id}</td>
                         <td className="px-8 py-5 font-black text-white">{inv.amount}</td>
                         <td className={`px-8 py-5 font-bold ${inv.color}`}>{inv.status}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </div>

             {/* Notifications */}
             <div className="xl:col-span-2 bg-[#111827] rounded-[2rem] border border-slate-800 p-8 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                 <h3 className="text-lg font-bold text-white">Notifications</h3>
                 <button className="text-xs font-bold text-[#FBBF24] hover:underline">View All</button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { title: 'New invoice generated', desc: 'INV-2024-125 for Navateja Cranes', time: '2 min ago', icon: FileText, color: 'text-blue-400' },
                   { title: 'Maintenance due', desc: 'ACE 14XW Crane in 3 days', time: '1 hour ago', icon: Clock, color: 'text-[#FBBF24]' },
                   { title: 'Payment received', desc: '₹2,45,000 from Navateja Cranes', time: '3 hours ago', icon: CheckCircle2, color: 'text-green-400' },
                   { title: 'New project added', desc: 'Bridge Construction - Phase 2', time: '1 day ago', icon: Plus, color: 'text-purple-400' },
                 ].map((note, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/20 border border-slate-800/30">
                     <div className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center ${note.color} flex-shrink-0`}>
                        <note.icon size={18} />
                     </div>
                     <div>
                       <h4 className="text-sm font-bold text-white">{note.title}</h4>
                       <p className="text-[10px] text-slate-500 font-medium mt-0.5">{note.desc}</p>
                       <p className="text-[10px] font-bold text-slate-600 mt-2 uppercase tracking-tighter">{note.time}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
          
          <div className="pt-8 text-center border-t border-slate-800/50">
             <p className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">© 2024 Navateja Cranes Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CranesDemo;
