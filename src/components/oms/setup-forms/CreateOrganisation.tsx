"use client";
import { useState } from "react";

export function CreateOrganisationForm() {
  const [orgName, setOrgName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [hqCountry, setHqCountry] = useState("");
  const [operatingCountries, setOperatingCountries] = useState<string[]>([]);
  const [timezone, setTimezone] = useState("");
  const [defaultCurrency, setDefaultCurrency] = useState("USD");
  const [multiCurrency, setMultiCurrency] = useState(true);
  const [fiscalYearStart, setFiscalYearStart] = useState("");
  const [languages, setLanguages] = useState<string[]>(["English"]);
  const [gdprCompliant, setGdprCompliant] = useState(false);
  const [soc2Ready, setSoc2Ready] = useState(false);
  const [localLaborLaws, setLocalLaborLaws] = useState(true);
  const [dataResidency, setDataResidency] = useState("EU");
  const [multiEntity, setMultiEntity] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          placeholder="Organization Name *"
          className="col-span-2 h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        />
        <input
          type="text"
          value={legalName}
          onChange={(e) => setLegalName(e.target.value)}
          placeholder="Legal Entity Name"
          className="col-span-2 h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        />
        <select
          value={orgType}
          onChange={(e) => setOrgType(e.target.value)}
          className="h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        >
          <option value="">Organization Type</option>
          <option value="single">Single entity</option>
          <option value="multi">Multi-entity</option>
          <option value="holding">Holding company</option>
        </select>
        <select
          value={hqCountry}
          onChange={(e) => setHqCountry(e.target.value)}
          className="h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        >
          <option value="">Headquarters Country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="IN">India</option>
          <option value="DE">Germany</option>
          <option value="SG">Singapore</option>
        </select>
        <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        >
          <option value="">Primary Timezone</option>
          <option value="America/New_York">EST (UTC-5)</option>
          <option value="Europe/London">GMT (UTC+0)</option>
          <option value="Asia/Kolkata">IST (UTC+5:30)</option>
          <option value="Asia/Singapore">SGT (UTC+8)</option>
        </select>
        <select
          value={defaultCurrency}
          onChange={(e) => setDefaultCurrency(e.target.value)}
          className="h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        >
          <option value="">Default Currency</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="INR">INR (₹)</option>
        </select>
        <input
          type="month"
          value={fiscalYearStart}
          onChange={(e) => setFiscalYearStart(e.target.value)}
          placeholder="Fiscal Year Start"
          className="col-span-2 h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
        />
      </div>

      <div className="space-y-4 pt-4 border-t border-[#e2e8f0]">
        <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Compliance & Residency</p>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-xl cursor-pointer hover:border-[#5048e5] transition-all">
            <input type="checkbox" checked={gdprCompliant} onChange={(e) => setGdprCompliant(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#0f172a]">GDPR (EU)</span>
              <span className="text-[10px] text-[#64748b]">Privacy & data protection</span>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-xl cursor-pointer hover:border-[#5048e5] transition-all">
            <input type="checkbox" checked={soc2Ready} onChange={(e) => setSoc2Ready(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#0f172a]">SOC2 / ISO</span>
              <span className="text-[10px] text-[#64748b]">Security compliance readiness</span>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-xl cursor-pointer hover:border-[#5048e5] transition-all">
            <input type="checkbox" checked={localLaborLaws} onChange={(e) => setLocalLaborLaws(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#0f172a]">Local Labor Laws</span>
              <span className="text-[10px] text-[#64748b]">Configurable frameworks</span>
            </div>
          </label>
          <div className="flex flex-col gap-1.5">
            <p className="text-[10px] text-[#64748b] font-bold uppercase">Data Residency</p>
            <select
              value={dataResidency}
              onChange={(e) => setDataResidency(e.target.value)}
              className="w-full h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            >
              <option value="EU">EU Servers (Frankfurt)</option>
              <option value="US">US Servers (N. Virginia)</option>
              <option value="APAC">APAC Servers (Singapore)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-[#e2e8f0]">
        <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Advanced Structure</p>
        <label className="flex items-start gap-3 p-3 bg-[#5048e5]/5 border border-[#5048e5]/20 rounded-xl cursor-pointer">
          <input type="checkbox" checked={multiEntity} onChange={(e) => setMultiEntity(e.target.checked)} className="mt-1 w-4 h-4 rounded text-[#5048e5]" />
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-[#5048e5]">Enable Multi-entity Structure</span>
            <span className="text-[11px] text-[#5048e5]/70">Support for subsidiaries, brands, and inter-company mapping.</span>
          </div>
        </label>
      </div>
    </div>
  );
}
