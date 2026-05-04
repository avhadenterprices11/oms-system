"use client";
import { useState } from "react";

export function SetupWorkspaceForm() {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const tools = [
    { id: 'project', label: 'Project', icon: '📁' },
    { id: 'task-board', label: 'Task board', icon: '📋' },
    { id: 'team-workspace', label: 'Team workspace', icon: '👥' },
    { id: 'crm', label: 'CRM / pipeline', icon: '🤝' },
    { id: 'analytics', label: 'Analytics dashboard', icon: '📊' },
  ];

  const templates = [
    { id: 'startup', title: 'Startup workspace', desc: 'Lean & fast-paced' },
    { id: 'agency', title: 'Agency workflow', desc: 'Client & project focused' },
    { id: 'productivity', title: 'Personal productivity', desc: 'Focus on individual goals' },
    { id: 'ops', title: 'Operations dashboard', desc: 'Systems & performance' },
  ];

  const toggleTool = (id: string) => {
    setSelectedTools(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Choose What You Want To Start With */}
      <div className="space-y-3">
        <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Choose What You Want To Start With</p>
        <div className="grid grid-cols-2 gap-3">
          {tools.map(tool => (
            <div 
              key={tool.id}
              onClick={() => toggleTool(tool.id)}
              className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                selectedTools.includes(tool.id) 
                  ? "bg-[#5048e5]/5 border-[#5048e5] ring-1 ring-[#5048e5]" 
                  : "bg-white border-[#e2e8f0] hover:border-[#5048e5]/30"
              }`}
            >
              <span className="text-lg">{tool.icon}</span>
              <span className="text-[13px] font-medium text-[#0f172a]">{tool.label}</span>
              {selectedTools.includes(tool.id) && (
                <div className="ml-auto w-4 h-4 bg-[#5048e5] rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pre-built Templates */}
      <div className="space-y-3 pt-2">
        <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Pre-built Templates</p>
        <div className="grid grid-cols-2 gap-3">
          {templates.map(template => (
            <div 
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedTemplate === template.id 
                  ? "bg-[#5048e5]/5 border-[#5048e5] ring-1 ring-[#5048e5]" 
                  : "bg-white border-[#e2e8f0] hover:border-[#5048e5]/30"
              }`}
            >
              <p className="text-[13px] font-bold text-[#0f172a] mb-0.5">{template.title}</p>
              <p className="text-[11px] text-[#64748b]">{template.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3 pt-2">
        <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Quick Actions</p>
        <div className="flex flex-wrap gap-2">
          {["Create first task", "Invite team", "Connect tools"].map(action => (
            <button key={action} className="px-4 py-2 bg-white border border-[#e2e8f0] rounded-full text-[12px] font-semibold text-[#64748b] hover:border-[#5048e5] hover:text-[#5048e5] transition-all">
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* AI Assistant Callout */}
      <div className="p-4 bg-gradient-to-br from-[#5048e5] to-[#7c3aed] rounded-2xl text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
          </div>
          <p className="text-[14px] font-bold">AI Workspace Assistant</p>
        </div>
        <p className="text-[12px] text-white/80 leading-relaxed mb-4">
          Tell me what you want to build and I will generate the structure for you.
        </p>
        <div className="relative">
          <input 
            type="text" 
            placeholder="e.g. Build a marketing pipeline for a SaaS startup..." 
            className="w-full bg-white/10 border border-white/20 rounded-xl h-10 pl-4 pr-10 text-[12px] placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
