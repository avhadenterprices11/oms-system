"use client";
import { useState } from "react";

export function LeavePoliciesForm() {
  const [country, setCountry] = useState("");
  const [leaveTypes, setLeaveTypes] = useState([
    { name: "Annual Leave", days: "20", unit: "days" },
    { name: "Sick Leave", days: "10", unit: "days" }
  ]);
  const [carryForward, setCarryForward] = useState(true);
  const [unlimitedLeave, setUnlimitedLeave] = useState(false);

  return (
    <div className="space-y-4">
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="w-full h-[39px] px-3.5 py-2.5 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
      >
        <option value="">Select Country Template</option>
        <option value="US">United States</option>
        <option value="UK">United Kingdom</option>
        <option value="EU">European Union</option>
        <option value="IN">India</option>
        <option value="APAC">APAC</option>
      </select>

      <div className="space-y-2">
        {leaveTypes.map((leave, index) => (
          <div key={index} className="grid grid-cols-3 gap-2">
            <input
              type="text"
              value={leave.name}
              placeholder="Leave Type"
              className="h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            />
            <input
              type="number"
              value={leave.days}
              placeholder="Amount"
              className="h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            />
            <select
              value={leave.unit}
              className="h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            >
              <option value="days">Days</option>
              <option value="hours">Hours</option>
              <option value="half-days">Half-days</option>
            </select>
          </div>
        ))}
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
    </div>
  );
}
