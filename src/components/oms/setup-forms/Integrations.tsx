"use client";
import { useState } from "react";

export function IntegrationsForm() {
  const integrations = [
    { name: "Google Workspace", connected: false, category: "productivity" },
    { name: "Microsoft 365", connected: false, category: "productivity" },
    { name: "Slack / Teams", connected: false, category: "communication" },
    { name: "ADP / Deel / Remote", connected: false, category: "payroll & hr" },
    { name: "QuickBooks / Xero", connected: false, category: "accounting" },
    { name: "NetSuite / Workday", connected: false, category: "enterprise erp" },
    { name: "Zapier / Make", connected: false, category: "automation" }
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleIntegration = (name: string) => {
    setSelected(prev =>
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {integrations.map((integration) => (
          <label
            key={integration.name}
            className="flex items-center gap-2 p-3 bg-white border border-[#e2e8f0] rounded-lg hover:border-[#5048e5] cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(integration.name)}
              onChange={() => toggleIntegration(integration.name)}
              className="w-4 h-4"
            />
            <div>
              <p className="text-[13px] font-semibold text-[#0f172a]">{integration.name}</p>
              <p className="text-[11px] text-[#64748b] capitalize">{integration.category}</p>
            </div>
          </label>
        ))}
      </div>
      <p className="text-[12px] text-[#64748b]">
        Selected {selected.length} integration{selected.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
