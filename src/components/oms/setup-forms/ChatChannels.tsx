"use client";
import { useState } from "react";

export function ChatChannelsForm() {
  const [channels, setChannels] = useState([
    { name: "General", type: "public", team: "all" },
    { name: "Announcements", type: "public", team: "all" }
  ]);

  const addChannel = () => {
    setChannels([...channels, { name: "", type: "public", team: "" }]);
  };

  const updateChannel = (index: number, field: string, value: string) => {
    const updated = [...channels];
    updated[index] = { ...updated[index], [field]: value };
    setChannels(updated);
  };

  return (
    <div className="space-y-3">
      {channels.map((channel, index) => (
        <div key={index} className="grid grid-cols-3 gap-2">
          <input
            type="text"
            value={channel.name}
            onChange={(e) => updateChannel(index, "name", e.target.value)}
            placeholder="Channel Name"
            className="h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          />
          <select
            value={channel.type}
            onChange={(e) => updateChannel(index, "type", e.target.value)}
            className="h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          <select
            value={channel.team}
            onChange={(e) => updateChannel(index, "team", e.target.value)}
            className="h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          >
            <option value="all">All Teams</option>
            <option value="engineering">Engineering</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      ))}
      <button
        onClick={addChannel}
        className="text-[13px] text-[#5048e5] font-semibold hover:text-[#4338ca] flex items-center gap-1"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M12 4v16m8-8H4"/></svg>
        Add Channel
      </button>

      <div className="pt-4 border-t border-[#e2e8f0] space-y-3">
        <label className="flex items-start gap-3 p-3 bg-[#5048e5]/5 border border-[#5048e5]/20 rounded-xl cursor-pointer">
          <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded text-[#5048e5]" />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#5048e5]">Timezone-Aware Communication</span>
            <span className="text-[10px] text-[#5048e5]/70">Show local time for global team members to respect async hours.</span>
          </div>
        </label>
        <label className="flex items-start gap-3 p-3 bg-white border border-[#e2e8f0] rounded-xl cursor-pointer">
          <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded text-[#5048e5]" />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#0f172a]">Enable AI Chat Assistant</span>
            <span className="text-[10px] text-[#64748b]">Summarize threads and handle basic HR/Leave queries via chat.</span>
          </div>
        </label>
      </div>
    </div>
  );
}
