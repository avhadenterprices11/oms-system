"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function FeatureFlagsPage() {
  const [flags, setFlags] = useState([
    { id: 1, name: "Social Media Module", module: "Social Media", status: "Enabled", rollout: 100, desc: "Brand publishing & scheduling", enabled: true },
    { id: 2, name: "AI Task Suggestions", module: "Tasks", status: "Beta", rollout: 25, desc: "AI-powered task assignment...", enabled: true },
    { id: 3, name: "Client Portal", module: "Client Delivery", status: "Disabled", rollout: 0, desc: "External client-facing portal", enabled: false },
    { id: 4, name: "Meeting Transcription", module: "Meetings", status: "Enabled", rollout: 100, desc: "Auto-transcribe via whisper...", enabled: true },
    { id: 5, name: "Document E-Signatures", module: "Documents", status: "Enabled", rollout: 100, desc: "Built-in signing workflow", enabled: true },
    { id: 6, name: "CRM Automation", module: "CRM", status: "Beta", rollout: 50, desc: "Auto lead routing & follow-up...", enabled: true },
    { id: 7, name: "Advanced Analytics", module: "Analytics", status: "Disabled", rollout: 0, desc: "Cross-module reporting dashboards", enabled: false },
    { id: 8, name: "Org Chart Drag & Drop", module: "People", status: "Beta", rollout: 100, desc: "Drag to reassign reports", enabled: true },
    { id: 9, name: "Webhook Events", module: "Integrations", status: "Enabled", rollout: 100, desc: "Outbound event webhooks", enabled: true },
    { id: 10, name: "Dark Mode", module: "System", status: "Disabled", rollout: 0, desc: "Dark theme UI", enabled: false },
  ]);

  const toggleFlag = (id: number) => {
    setFlags(prev => prev.map(f => 
      f.id === id ? { ...f, enabled: !f.enabled, status: !f.enabled ? "Enabled" : "Disabled", rollout: !f.enabled ? 100 : 0 } : f
    ));
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Enabled: "bg-emerald-50 text-emerald-600",
      Beta: "bg-amber-50 text-amber-500",
      Disabled: "bg-slate-100 text-slate-400",
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${styles[status]}`}>
        {status}
      </span>
    );
  };

  const getRolloutBar = (percent: number, status: string) => {
    const color = status === "Enabled" ? "bg-emerald-500" : status === "Beta" ? "bg-amber-500" : "bg-slate-200";
    return (
      <div className="flex items-center gap-3 w-full max-w-[120px]">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} transition-all duration-500`} 
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-[11px] font-bold text-slate-400 w-8">{percent}%</span>
      </div>
    );
  };

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-0.5">Feature Flags</h1>
        <p className="text-slate-500 text-xs font-medium">Enable or disable features across the platform</p>
      </div>

      {/* Flags Card */}
      <section className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4">FEATURE</th>
                <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4">MODULE</th>
                <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4">STATUS</th>
                <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4">ROLLOUT</th>
                <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4">DESCRIPTION</th>
                <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4 text-right">TOGGLE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {flags.map((flag) => (
                <tr key={flag.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-bold text-slate-900 text-[13px]">{flag.name}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-[13px] font-medium text-slate-500">{flag.module}</span>
                  </td>
                  <td className="py-3 px-4">
                    {getStatusBadge(flag.status)}
                  </td>
                  <td className="py-3 px-4">
                    {getRolloutBar(flag.rollout, flag.status)}
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-[13px] font-medium text-slate-400 max-w-[280px] truncate">
                      {flag.desc}
                    </p>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => toggleFlag(flag.id)}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${flag.enabled ? 'bg-[#5048e5]' : 'bg-slate-200'}`}
                    >
                      <div className={`absolute top-1 size-4 bg-white rounded-full shadow-sm transition-all duration-300 ${flag.enabled ? 'left-7' : 'left-1'}`} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SettingsLayout>
  );
}
