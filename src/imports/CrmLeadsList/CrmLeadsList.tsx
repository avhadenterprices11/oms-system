"use client";
import { useState } from "react";
import AddLeadModal from "../AddLeadModal/AddLeadModal";
import imgProfilePic from "../CrmOrganisationsList/8903f064e14b604493b2a186385c8300714f69a3.png";

// Design constants matching the exact grid template used in CrmOrganisationsList
const TABLE_GRID_TEMPLATE = "minmax(300px, 2fr) 180px 180px 220px 120px 120px 100px";

// --- Design Tokens & Sub-components (Structure matched to CrmOrganisationsList) ---

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px] w-[195.25px]">
        <p className="leading-[36px]">Leads</p>
      </div>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[485.13px]">
        <p className="leading-[24px]">Manage and track your prospects and conversion funnel.</p>
      </div>
    </div>
  );
}

function PageHeader({ onAddClick }: { onAddClick: () => void }) {
  return (
    <div className="content-stretch flex h-[64px] items-end justify-between relative shrink-0 w-full mb-14" data-name="Page Header">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[485.13px]">
        <Heading />
        <SubHeading />
      </div>
      <div 
        onClick={onAddClick}
        className="bg-[#5048e5] content-stretch drop-shadow-[0px_1px_1px_rgba(80,72,229,0.2)] flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#4338ca] transition-colors"
      >
        <svg className="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Add Lead</p>
        </div>
      </div>
    </div>
  );
}

function FilterDropdown({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 border border-[#e2e8f0] cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="text-[#94a3b8]">{icon}</div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{label}:</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{value}</p>
      </div>
      <svg className="size-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  );
}

function FiltersRow() {
  return (
    <div className="content-stretch flex gap-[12px] h-[34px] items-center relative shrink-0 w-full mb-8">
      <FilterDropdown 
        label="Status" 
        value="All Statuses" 
        icon={<svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>} 
      />
      <FilterDropdown 
        label="Owner" 
        value="All Members" 
        icon={<svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>} 
      />
      <div className="flex-[1_0_0] flex justify-end items-center gap-2">
        <svg className="size-4 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px]">
          <p className="leading-[20px]">Showing 128 leads</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`px-4 py-3 flex items-center overflow-hidden ${className}`}>
      <div className="font-bold text-[#64748b] text-[11px] tracking-wider uppercase truncate whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div 
      className="bg-[#f8fafc] grid w-full border-b border-[#e2e8f0] sticky top-0 z-10" 
      style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}
    >
      <HeaderCell className="pl-8">Lead Name</HeaderCell>
      <HeaderCell>Company</HeaderCell>
      <HeaderCell>Email</HeaderCell>
      <HeaderCell>Status</HeaderCell>
      <HeaderCell>Source</HeaderCell>
      <HeaderCell>Created Date</HeaderCell>
      <HeaderCell className="pl-4 pr-8 text-right justify-end">Actions</HeaderCell>
    </div>
  );
}

function TableRow({ name, company, email, status, source, date, avatar, assignedTo }: any) {
  const statusColors: any = {
    'New': 'bg-blue-100 text-blue-600',
    'Contacted': 'bg-amber-100 text-amber-600',
    'Qualified': 'bg-emerald-100 text-emerald-600',
    'Lost': 'bg-rose-100 text-rose-600'
  };

  return (
    <div 
      className="group grid w-full items-center border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors cursor-pointer"
      style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}
    >
      <div className="pl-8 pr-4 py-4 flex items-center gap-4 overflow-hidden">
        <div className="bg-indigo-50 text-[#5048e5] size-11 rounded-xl flex items-center justify-center shrink-0 font-bold border border-indigo-100 shadow-sm">
          {avatar || name.charAt(0)}
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-bold text-[#0f172a] text-base truncate block whitespace-nowrap">{name}</span>
          <span className="text-[#64748b] text-[11px] font-medium truncate whitespace-nowrap">Lead</span>
        </div>
      </div>

      <div className="px-4 py-4 overflow-hidden">
        <span className="text-[#64748b] text-sm font-medium truncate block whitespace-nowrap">{company}</span>
      </div>

      <div className="px-4 py-4 overflow-hidden">
        <span className="text-[#64748b] text-sm truncate block whitespace-nowrap">{email}</span>
      </div>

      <div className="px-4 py-4 overflow-hidden">
        <div className={`${statusColors[status] || 'bg-gray-100'} px-2 py-1 rounded text-[10px] font-bold uppercase whitespace-nowrap inline-block`}>
          {status}
        </div>
      </div>

      <div className="px-4 py-4 overflow-hidden">
        <span className="text-[#64748b] text-sm font-medium whitespace-nowrap">{source}</span>
      </div>

      <div className="px-4 py-4 text-sm text-[#64748b] whitespace-nowrap overflow-hidden">
        {date}
      </div>

      <div className="pl-4 pr-8 py-4 text-right overflow-hidden">
        <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-[#94a3b8] transition-all group-hover:text-[#5048e5]">
          <svg className="size-5" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="4" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="8" cy="12" r="1.5" /></svg>
        </button>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] border-t border-[#e2e8f0] py-4 px-8 flex items-center justify-between">
      <div className="text-[#64748b] text-[14px] whitespace-nowrap">Page 1 of 12</div>
      <div className="flex gap-2">
        <button className="p-1 border border-[#e2e8f0] rounded opacity-50"><svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2"/></svg></button>
        <button className="bg-[#5048e5] text-white px-3 py-1 rounded text-sm font-medium">1</button>
        <button className="px-3 py-1 text-sm font-medium hover:bg-gray-100 rounded">2</button>
        <button className="px-3 py-1 text-sm font-medium hover:bg-gray-100 rounded">3</button>
        <button className="p-1 border border-[#e2e8f0] rounded hover:bg-gray-50"><svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2"/></svg></button>
      </div>
    </div>
  );
}

export default function CrmLeadsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#f6f6f8] min-h-screen" data-name="CRM Leads List">
      <div className="p-8 max-w-[1500px] mx-auto">
        <PageHeader onAddClick={() => setIsModalOpen(true)} />
        
        <div className="bg-white rounded-[24px] shadow-sm border border-[#e2e8f0] overflow-hidden relative">
          <div className="p-8">
            <FiltersRow />
            
            <div className="border border-[#e2e8f0] rounded-[24px] overflow-hidden">
              <HeaderRow />
              <div className="flex flex-col">
                <TableRow name="Priya Sharma" company="InnovateTech" email="priya.s@innovatetech.in" status="Contacted" source="Website Form" date="Mar 20, 2026" />
                <TableRow name="Alex Rivera" company="Nexus Ltd" email="alex@nexus.com" status="Qualified" source="LinkedIn" date="May 12, 2024" />
                <TableRow name="Sarah Chen" company="Global Solutions" email="sarah.c@globalsol.io" status="New" source="Website" date="May 11, 2024" />
                <TableRow name="Jordan Lee" company="Starlight Inc" email="j.lee@starlight.com" status="Contacted" source="Referral" date="May 10, 2024" />
                <TableRow name="Marcus Thorne" company="Cyberdyne Systems" email="m.thorne@cyberdyne.ai" status="Qualified" source="LinkedIn" date="May 08, 2024" />
                <TableRow name="Casey Brown" company="Ecosystems" email="casey@ecosystems.org" status="Lost" source="Cold Call" date="May 05, 2024" />
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>

      <AddLeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
