"use client";
import { useState } from "react";

export function RolesPermissionsForm() {
  const [roles, setRoles] = useState([
    { name: "Global Admin", level: "global", sso: true },
    { name: "Manager", level: "department", sso: false }
  ]);
  const [ssoProvider, setSsoProvider] = useState("");
  const [auditLogsEnabled, setAuditLogsEnabled] = useState(true);
  const [ipRestrictions, setIpRestrictions] = useState("");
  const [theme, setTheme] = useState("light");
  const [carryForward, setCarryForward] = useState(false);
  const [unlimitedLeave, setUnlimitedLeave] = useState(false);

  const addMember = () => {};

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {roles.map((role, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-lg">
            <input
              type="text"
              value={role.name}
              className="flex-1 h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px]"
              readOnly
            />
            <select
              value={role.level}
              className="w-[140px] h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px]"
            >
              <option value="global">Global Admin</option>
              <option value="regional">Regional Admin</option>
              <option value="department">Department</option>
              <option value="user">User</option>
            </select>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          onClick={addMember}
          className="flex-1 bg-white border border-[#e2e8f0] px-4 py-2.5 rounded-xl font-bold text-[13px] text-[#334155] hover:bg-[#f8fafc] hover:border-[#5048e5]/30 transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M12 4v16m8-8H4"/></svg>
          Add Team Member
        </button>
        <button className="flex-1 bg-white border border-[#e2e8f0] px-4 py-2.5 rounded-xl font-bold text-[13px] text-[#5048e5] hover:bg-[#5048e5]/5 transition-all flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
          Bulk Sync (HRIS/CSV)
        </button>
      </div>

      <label className="flex items-center gap-3 p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl cursor-pointer">
        <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-emerald-600" />
        <div className="flex flex-col">
          <span className="text-[12px] font-bold text-emerald-700">Trigger Auto-Onboarding</span>
          <span className="text-[10px] text-emerald-600/70">Send localized welcome emails and document requests automatically.</span>
        </div>
      </label>

      <div className="space-y-3">
        <select
          value={ssoProvider}
          onChange={(e) => setSsoProvider(e.target.value)}
          className="w-full h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        >
          <option value="">Select SSO / IAM Provider</option>
          <option value="google">Google Workspace (SSO)</option>
          <option value="microsoft">Microsoft Azure AD / Okta</option>
          <option value="saml">Custom SAML 2.0</option>
          <option value="scim">SCIM Provisioning</option>
        </select>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <label className="flex items-center gap-2 p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl cursor-pointer">
            <input type="checkbox" checked={auditLogsEnabled} onChange={(e) => setAuditLogsEnabled(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
            <span className="text-[12px] font-medium">Enable Audit Logs</span>
          </label>
          <label className="flex items-center gap-2 p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#5048e5]" />
            <span className="text-[12px] font-medium">ABAC Controls</span>
          </label>
        </div>

        <div className="space-y-3 pt-2">
          <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Policy Configuration</p>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-xl cursor-pointer">
              <input type="checkbox" checked={carryForward} onChange={(e) => setCarryForward(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
              <span className="text-[12px] font-medium">Carry Forward</span>
            </label>
            <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-xl cursor-pointer">
              <input type="checkbox" checked={unlimitedLeave} onChange={(e) => setUnlimitedLeave(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
              <span className="text-[12px] font-medium">Unlimited Leave</span>
            </label>
            <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-xl cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#5048e5]" />
              <span className="text-[12px] font-medium">Holiday Calendars</span>
            </label>
            <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-xl cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#5048e5]" />
              <span className="text-[12px] font-medium">Accrual Rules</span>
            </label>
          </div>
        </div>

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

        <input
          type="text"
          value={ipRestrictions}
          onChange={(e) => setIpRestrictions(e.target.value)}
          placeholder="IP Restrictions (e.g. 192.168.1.1/24)"
          className="w-full h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        />
      </div>
    </div>
  );
}
