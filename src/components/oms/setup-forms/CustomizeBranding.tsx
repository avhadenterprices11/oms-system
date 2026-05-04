"use client";
import { useState } from "react";

export function CustomizeBrandingForm() {
  const [portalName, setPortalName] = useState("Portal");
  const [primaryColor, setPrimaryColor] = useState("#5048e5");
  const [customDomain, setCustomDomain] = useState("");
  const [theme, setTheme] = useState("light");
  const [logo, setLogo] = useState<File | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-[#e2e8f0] rounded-lg flex items-center justify-center overflow-hidden">
          {logo ? (
            <img src={URL.createObjectURL(logo)} alt="Logo" className="w-full h-full object-cover" />
          ) : (
            <span className="text-[#94a3b8] text-[12px]">Logo</span>
          )}
        </div>
        <label className="text-[12px] text-[#5048e5] cursor-pointer font-semibold">
          Upload Logo
          <input type="file" accept="image/*" className="hidden" onChange={(e) => setLogo(e.target.files?.[0] || null)} />
        </label>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          value={portalName}
          onChange={(e) => setPortalName(e.target.value)}
          placeholder="Portal Name"
          className="w-full h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        />

        <div className="flex items-center gap-3">
          <label className="text-[13px] font-semibold text-[#0f172a]">Primary Color:</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-12 h-[39px] rounded-[8px] cursor-pointer"
          />
          <span className="text-[13px] text-[#64748b]">{primaryColor}</span>
        </div>

        <input
          type="text"
          value={customDomain}
          onChange={(e) => setCustomDomain(e.target.value)}
          placeholder="Custom Domain (e.g., hr.company.com)"
          className="w-full h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        />

        <div className="grid grid-cols-2 gap-3 pt-2">
           <div className="space-y-1">
             <p className="text-[10px] text-[#64748b] font-bold uppercase">Default Language</p>
             <select className="w-full h-[38px] px-3 py-2 bg-white border border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]">
               <option>English (US)</option>
               <option>English (UK)</option>
               <option>Spanish</option>
               <option>French</option>
               <option>German</option>
             </select>
           </div>
           <div className="space-y-1">
             <p className="text-[10px] text-[#64748b] font-bold uppercase">UI Mode</p>
             <select value={theme} onChange={(e) => setTheme(e.target.value)} className="w-full h-[38px] px-3 py-2 bg-white border border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]">
               <option value="light">Light Mode</option>
               <option value="dark">Dark Mode</option>
               <option value="system">Follow System</option>
             </select>
           </div>
        </div>

        <label className="flex items-start gap-3 p-3 bg-[#5048e5]/5 border border-[#5048e5]/20 rounded-xl cursor-pointer">
          <input type="checkbox" className="mt-1 w-4 h-4 rounded text-[#5048e5]" />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#5048e5]">Multi-Brand Support</span>
            <span className="text-[10px] text-[#5048e5]/70">Customize theme and logo per sub-entity or subsidiary.</span>
          </div>
        </label>
      </div>
    </div>
  );
}
