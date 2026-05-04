"use client";
import { useState } from "react";

interface Department {
  name: string;
  head: string;
  structure: string;
  location: string;
  businessUnit: string;
  costCenter: string;
}

export function SetupDepartmentsForm() {
  const [departments, setDepartments] = useState<Department[]>([
    { name: "", head: "", structure: "", location: "", businessUnit: "", costCenter: "" }
  ]);

  const addDepartment = () => {
    setDepartments([...departments, { name: "", head: "", structure: "", location: "", businessUnit: "", costCenter: "" }]);
  };

  const updateDepartment = (index: number, field: keyof Department | "businessUnit" | "costCenter", value: string) => {
    const updated = [...departments] as any;
    updated[index][field] = value;
    setDepartments(updated);
  };

  return (
    <div className="space-y-4">
      {departments.map((dept, index) => (
        <div key={index} className="grid grid-cols-2 gap-3 p-4 bg-white border border-[#e2e8f0] rounded-xl shadow-sm">
          <input
            type="text"
            value={dept.name}
            onChange={(e) => updateDepartment(index, "name", e.target.value)}
            placeholder="Department / Team Name"
            className="col-span-2 h-[38px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          />
          <input
            type="text"
            value={dept.head}
            onChange={(e) => updateDepartment(index, "head", e.target.value)}
            placeholder="Department Head"
            className="h-[38px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          />
          <input
            type="text"
            value={(dept as any).businessUnit}
            onChange={(e) => updateDepartment(index, "businessUnit", e.target.value)}
            placeholder="Business Unit / Entity"
            className="h-[38px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          />
          <select
            value={dept.structure}
            onChange={(e) => updateDepartment(index, "structure", e.target.value)}
            className="h-[38px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          >
            <option value="">Reporting Structure</option>
            <option value="hierarchical">Hierarchical (Standard)</option>
            <option value="flat">Flat Organisation</option>
            <option value="matrix">Matrix (Multiple lines)</option>
            <option value="squad">Cross-functional Squad</option>
          </select>
          <select
            value={dept.location}
            onChange={(e) => updateDepartment(index, "location", e.target.value)}
            className="h-[38px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          >
            <option value="">Region / Location</option>
            <option value="global">Global Shared Service</option>
            <option value="americas">Americas (AMER)</option>
            <option value="emea">Europe & MEA (EMEA)</option>
            <option value="apac">Asia Pacific (APAC)</option>
          </select>
          <div className="col-span-2 pt-2 flex gap-3">
             <div className="flex-1 space-y-1">
               <p className="text-[10px] text-[#64748b] font-bold uppercase">Cost Center</p>
               <input
                 type="text"
                 value={(dept as any).costCenter}
                 onChange={(e) => updateDepartment(index, "costCenter", e.target.value)}
                 placeholder="e.g. CC-4001-MKT"
                 className="w-full h-[38px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
               />
             </div>
             <div className="flex-1 space-y-1">
               <p className="text-[10px] text-[#64748b] font-bold uppercase">Profit Center</p>
               <input
                 type="text"
                 placeholder="e.g. PC-REGION-01"
                 className="w-full h-[38px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
               />
             </div>
          </div>
        </div>
      ))}
      <button
        onClick={addDepartment}
        className="text-[13px] text-[#5048e5] font-semibold hover:text-[#4338ca]"
      >
        + Add Department
      </button>
    </div>
  );
}
