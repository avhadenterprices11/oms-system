"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import ProjectDetailsRedesign from "../ProjectDetailsRedesign/ProjectDetailsRedesign";
import svgPaths from "./svg-vf7pc75xjv";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";

const ViewContext = createContext<{ setView: (v: string) => void }>({ setView: () => {} });

function Button1() {
  return (
    <div className="bg-white border border-[#e2e8f0] flex items-center gap-2 px-[16px] py-[10px] rounded-[8px] cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button:Export">
      <svg className="size-4 text-[#475569]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-[14px] font-bold text-[#0f172a]">Export</span>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white border border-[#e2e8f0] flex items-center gap-2 px-[16px] py-[10px] rounded-[8px] cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button:Views">
      <svg className="size-4 text-[#475569]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M3 6h18M6 12h12M10 18h4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-[14px] font-bold text-[#0f172a]">Views</span>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <h1 className="text-[30px] font-extrabold text-[#0f172a] tracking-tight leading-tight">
        Global Projects
      </h1>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="text-[#64748b] text-[16px] leading-relaxed max-w-[600px]">
        Centralized view for all cross-departmental tasks and milestones.
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f06d100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  const { setView } = useContext(ViewContext);
  return (
    <div 
      onClick={() => setView('details')}
      className="bg-[#5048e5] content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0 hover:bg-[#4338ca] transition-colors cursor-pointer" data-name="Button"
    >
      <div className="flex items-center gap-2">
        <span className="text-white text-lg font-bold">+</span>
        <span className="font-bold text-[14px] text-center text-white whitespace-nowrap">Add Projects</span>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Button12 />
    </div>
  );
}

function PageHeaderMainAction() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Page Header & Main Action">
      <Container40 />
      <div className="flex items-center gap-3">
        <Button1 />
        <Button2 />
        <Button12 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">
          <p className="leading-[15px] whitespace-nowrap">Assignee:</p>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[77px] size-[18px] top-[-1px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[103px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container46() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 overflow-clip top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px]">
        <p className="leading-[16px] whitespace-nowrap">All Assignees</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="h-[16px] relative shrink-0 w-[103px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill />
        <Container46 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container45 />
      <Options />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">
          <p className="leading-[15px] whitespace-nowrap">Status:</p>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[67px] size-[18px] top-[-1px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[93px]" data-name="image fill">
      <Svg1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 overflow-clip top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px]">
        <p className="leading-[16px] whitespace-nowrap">All Statuses</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill1 />
        <Container48 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container47 />
      <Options1 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">
          <p className="leading-[15px] whitespace-nowrap">Priority:</p>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-[69px] size-[18px] top-[-1px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill2() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[95px]" data-name="image fill">
      <Svg2 />
    </div>
  );
}

function Container50() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 overflow-clip pr-[0.89px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px]">
        <p className="leading-[16px] whitespace-nowrap">All Priorities</p>
      </div>
    </div>
  );
}

function Options2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[95px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill2 />
        <Container50 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8.01px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container49 />
      <Options2 />
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[12px] text-center">
        <p className="leading-[16px] whitespace-nowrap">Reset Filters</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
      <Button13 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <div className="bg-[#f8fafc] border border-[#e2e8f0] flex gap-[8px] items-center px-[16px] py-[8px] rounded-[8px] cursor-pointer">
        <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Project:</span>
        <span className="text-[14px] font-bold text-[#0f172a]">All Projects</span>
        <svg className="size-3.5 text-[#64748b]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <ButtonMargin />
    </div>
  );
}

const TABLE_GRID_TEMPLATE = "minmax(280px, 1.5fr) 150px 140px 120px 120px 130px 130px 160px";

function StatusBadge({ status }: { status: string }) {
  const configs: Record<string, { bg: string; text: string; dot: string }> = {
    "Active": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
    "Planning": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
    "On Hold": { bg: "bg-slate-50", text: "text-slate-600", dot: "bg-slate-400" },
    "Completed": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
    "Critical": { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" },
  };
  const config = configs[status] || configs["On Hold"];
  return (
    <div className={`px-2.5 py-1 rounded-full ${config.bg} flex items-center gap-1.5 w-fit border border-black/5`}>
      <div className={`size-1.5 rounded-full ${config.dot}`} />
      <span className={`text-[10px] font-black uppercase tracking-wider ${config.text}`}>{status}</span>
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const configs: Record<string, { bg: string; text: string; icon: string }> = {
    "High": { bg: "bg-orange-50", text: "text-orange-700", icon: "↑" },
    "Critical": { bg: "bg-rose-50", text: "text-rose-700", icon: "!" },
    "Medium": { bg: "bg-blue-50", text: "text-blue-700", icon: "=" },
    "Low": { bg: "bg-slate-50", text: "text-slate-600", icon: "↓" },
  };
  const config = configs[priority] || configs["Medium"];
  return (
    <div className={`px-2 py-0.5 rounded-md ${config.bg} flex items-center gap-1 w-fit border border-black/5`}>
      <span className={`text-[10px] font-black ${config.text}`}>{config.icon} {priority}</span>
    </div>
  );
}

function HeaderCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-4 py-3 flex items-center overflow-hidden ${className}`}>
      <div className="font-bold text-[#64748b] text-[11px] tracking-wider uppercase whitespace-nowrap truncate">
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
      data-name="Header Row"
    >
      <HeaderCell className="pl-8 pr-4">Title</HeaderCell>
      <HeaderCell className="px-4">Assignee</HeaderCell>
      <HeaderCell className="px-4">Project</HeaderCell>
      <HeaderCell className="px-4">Status</HeaderCell>
      <HeaderCell className="px-4">Priority</HeaderCell>
      <HeaderCell className="px-4">Start Date</HeaderCell>
      <HeaderCell className="px-4">Deadline</HeaderCell>
      <HeaderCell className="pl-4 pr-8">Progress</HeaderCell>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p2914db00} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="Overlay">
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px]">
        <p className="leading-[normal] mb-0 whitespace-nowrap">Cloud</p>
        <p className="leading-[normal] whitespace-nowrap">Migration</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px]">
        <p className="leading-[normal] mb-0 whitespace-nowrap">Infrastructure</p>
        <p className="leading-[normal] whitespace-nowrap">Upgrade</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Data">
      <Overlay1 />
      <Container52 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px]">
        <p className="leading-[20px] whitespace-nowrap">xyz</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Data">
      <div className="relative rounded-[9999px] shrink-0 size-[28px]" data-name="Image+Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
          <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[116.38%]" src={imgProfilePic.src} />
          </div>
        </div>
      </div>
      <Container55 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <div className="bg-[#94a3b8] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <div className="bg-[#64748b] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] text-center w-[13.56px]">
        <p className="leading-[normal] whitespace-nowrap">+4</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <BackgroundBorder4 />
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-name="Data">
      <div className="bg-[#cbd5e1] mr-[-8px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <Margin2 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4ed8] text-[11px]">
        <p className="leading-[normal] whitespace-nowrap">Active</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] py-[43.5px] relative shrink-0" data-name="Data">
      <Background3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[11px] tracking-[-0.55px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">High</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] py-[43.5px] relative shrink-0" data-name="Data">
      <Background4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px]">
        <p className="leading-[20px] mb-0 whitespace-nowrap">Oct 12,</p>
        <p className="leading-[20px] whitespace-nowrap">2023</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px]">
        <p className="leading-[20px] mb-0 whitespace-nowrap">Dec 20,</p>
        <p className="leading-[20px] whitespace-nowrap">2023</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[10px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">Progress</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">65%</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container57 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#5048e5] inset-[0_35%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Data7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start min-w-[140px] relative shrink-0" data-name="Data">
      <Container56 />
      <Background5 />
    </div>
  );
}

function Data8() {
  return (
    <div className="h-[89px] relative shrink-0" data-name="Data">
      <div className="flex flex-col items-end size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Row({ 
  title, 
  subtitle, 
  assignee, 
  project, 
  status, 
  priority, 
  startDate, 
  deadline, 
  progress,
  icon,
  iconBg
}: {
  title: string;
  subtitle: string;
  assignee: string;
  project: string;
  status: string;
  priority: string;
  startDate: string;
  deadline: string;
  progress: number;
  icon: React.ReactNode;
  iconBg: string;
}) {
  return (
    <div 
      className="group grid w-full items-center border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300 cursor-pointer"
      style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}
    >
      {/* Title */}
      <div className="pl-8 pr-4 py-5 flex items-center gap-4 overflow-hidden">
        <div className={`${iconBg} size-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-black/5 group-hover:scale-105 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-bold text-slate-900 text-sm group-hover:text-[#5048e5] transition-colors truncate">{title}</span>
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider truncate mt-0.5">{subtitle}</span>
        </div>
      </div>

      {/* Assignee */}
      <div className="px-4 py-5 flex items-center gap-3 overflow-hidden">
        <div className="size-8 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-white shadow-sm">
          <img src={imgProfilePic.src} alt="" className="size-full object-cover" />
        </div>
        <span className="font-bold text-slate-700 text-[13px] truncate">{assignee}</span>
      </div>
 
      {/* Project */}
      <div className="px-4 py-5 overflow-hidden">
        <div className="bg-indigo-50/50 px-2.5 py-1 rounded-lg text-[#5048e5] text-[10px] font-black uppercase tracking-widest border border-indigo-100 inline-block">
          {project}
        </div>
      </div>

      {/* Status */}
      <div className="px-4 py-5 overflow-hidden">
        <StatusBadge status={status} />
      </div>

      {/* Priority */}
      <div className="px-4 py-5 overflow-hidden">
        <PriorityBadge priority={priority} />
      </div>

      {/* Start Date */}
      <div className="px-4 py-5 overflow-hidden">
        <span className="text-slate-500 text-[13px] font-bold tracking-tight truncate">{startDate}</span>
      </div>

      {/* Deadline */}
      <div className="px-4 py-5 overflow-hidden">
        <span className="text-slate-900 text-[13px] font-black tracking-tight truncate">{deadline}</span>
      </div>

      {/* Progress */}
      <div className="pl-4 pr-8 py-5 overflow-hidden">
        <div className="flex flex-col gap-2 w-full max-w-[140px]">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</span>
            <span className="text-[10px] font-black text-[#5048e5] tracking-widest">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-black/5">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#5048e5] to-[#7c3aed] transition-all duration-700 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p12092b00} fill="var(--fill-0, #D97706)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="Background">
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px]">
        <p className="leading-[normal] mb-0 whitespace-nowrap">Q4 Marketing</p>
        <p className="leading-[normal] whitespace-nowrap">Campaign</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px]">
        <p className="leading-[normal] whitespace-nowrap">Digital Strategy</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background6 />
        <Container60 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px]">
        <p className="leading-[20px] whitespace-nowrap">xyz</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="relative rounded-[9999px] shrink-0 size-[28px]" data-name="Image+Background">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
            <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[116.38%]" src={imgProfilePic.src} />
            </div>
          </div>
        </div>
        <Container63 />
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="Margin">
      <div className="absolute bg-[#64748b] border-2 border-solid border-white left-[-8px] rounded-[9999px] size-[28px] top-0" data-name="Background+Border" />
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="bg-[#94a3b8] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
        <Margin5 />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px]">
        <p className="leading-[normal] whitespace-nowrap">Planning</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] py-[36.5px] relative size-full">
        <Background7 />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] tracking-[-0.55px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">Medium</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[36.5px] relative size-full">
        <Background8 />
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px]">
          <p className="leading-[20px] mb-0 whitespace-nowrap">Nov 01,</p>
          <p className="leading-[20px] whitespace-nowrap">2023</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px]">
          <p className="leading-[20px] mb-0 whitespace-nowrap">Dec 15,</p>
          <p className="leading-[20px] whitespace-nowrap">2023</p>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[10px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">Progress</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">40%</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#5048e5] inset-[0_60%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Data16() {
  return (
    <div className="min-w-[140px] relative shrink-0 w-[140px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start min-w-[inherit] relative size-full">
        <Container64 />
        <Background9 />
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="h-[75px] relative shrink-0" data-name="Data">
      <div className="flex flex-col items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pl-[32px] pt-px relative size-full">
          <Data9 />
          <Data10 />
          <Data11 />
          <Data12 />
          <Data13 />
          <Data14 />
          <Data15 />
          <Data16 />
          <Data17 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p2bdb86e0} fill="var(--fill-0, #E11D48)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#ffe4e6] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="Background">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal] whitespace-nowrap">Security Audit</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px]">
        <p className="leading-[normal] whitespace-nowrap">Compliance Review</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background10 />
        <Container68 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px]">
        <p className="leading-[20px] whitespace-nowrap">xyz</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="relative rounded-[9999px] shrink-0 size-[28px]" data-name="Image+Background">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
            <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[116.38%]" src={imgProfilePic.src} />
            </div>
          </div>
        </div>
        <Container71 />
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <div className="bg-[#cbd5e1] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <div className="bg-[#94a3b8] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <div className="bg-[#e2e8f0] mr-[-8px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
        <Margin6 />
        <Margin7 />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px]">
        <p className="leading-[normal] whitespace-nowrap">On Hold</p>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] py-[31.5px] relative size-full">
        <Background11 />
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#f3e8ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#7e22ce] text-[11px] tracking-[-0.55px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">Critical</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[31.5px] relative size-full">
        <Background12 />
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px]">
          <p className="leading-[20px] mb-0 whitespace-nowrap">Sep 15,</p>
          <p className="leading-[20px] whitespace-nowrap">2023</p>
        </div>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px]">
          <p className="leading-[20px] mb-0 whitespace-nowrap">Jan 30,</p>
          <p className="leading-[20px] whitespace-nowrap">2024</p>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[10px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">Progress</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">25%</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container73 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#5048e5] bottom-0 left-0 right-3/4 rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Data25() {
  return (
    <div className="min-w-[140px] relative shrink-0 w-[140px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start min-w-[inherit] relative size-full">
        <Container72 />
        <Background13 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 3">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pl-[32px] pt-px relative size-full">
          <Data18 />
          <Data19 />
          <Data20 />
          <Data21 />
          <Data22 />
          <Data23 />
          <Data24 />
          <Data25 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p13774060} fill="var(--fill-0, #059669)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="Background">
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px]">
        <p className="leading-[normal] mb-0 whitespace-nowrap">Mobile App</p>
        <p className="leading-[normal] whitespace-nowrap">Redesign</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px]">
        <p className="leading-[normal] whitespace-nowrap">UX/UI Optimization</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Data26() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background14 />
        <Container76 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px]">
        <p className="leading-[20px] whitespace-nowrap">xyz</p>
      </div>
    </div>
  );
}

function Data27() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="relative rounded-[9999px] shrink-0 size-[28px]" data-name="Image+Background">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
            <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[116.38%]" src={imgProfilePic.src} />
            </div>
          </div>
        </div>
        <Container79 />
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <div className="bg-[#94a3b8] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <div className="bg-[#64748b] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <div className="bg-[#475569] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <div className="bg-[#334155] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Data28() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <div className="bg-[#cbd5e1] mr-[-8px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
        <Margin8 />
        <Margin9 />
        <Margin10 />
        <Margin11 />
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[11px]">
        <p className="leading-[normal] whitespace-nowrap">Completed</p>
      </div>
    </div>
  );
}

function Data29() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pr-[16px] pt-[36.5px] relative size-full">
        <Background15 />
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[11px] tracking-[-0.55px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">Low</p>
      </div>
    </div>
  );
}

function Data30() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pr-[32px] pt-[36.5px] relative size-full">
        <Background16 />
      </div>
    </div>
  );
}

function Data31() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px]">
          <p className="leading-[20px] mb-0 whitespace-nowrap">Aug 20,</p>
          <p className="leading-[20px] whitespace-nowrap">2023</p>
        </div>
      </div>
    </div>
  );
}

function Data32() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px]">
          <p className="leading-[20px] mb-0 whitespace-nowrap">Oct 30,</p>
          <p className="leading-[20px] whitespace-nowrap">2023</p>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[10px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">Progress</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[10px] uppercase">
        <p className="leading-[normal] whitespace-nowrap">100%</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container81 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[6px] items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-[#10b981] flex-[1_0_0] min-h-px rounded-[9999px] w-full" data-name="Background" />
    </div>
  );
}

function Data33() {
  return (
    <div className="min-w-[140px] relative shrink-0 w-[140px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start min-w-[inherit] relative size-full">
        <Container80 />
        <Background17 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 4">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pl-[32px] pt-px relative size-full">
          <Data26 />
          <Data27 />
          <Data28 />
          <Data29 />
          <Data30 />
          <Data31 />
          <Data32 />
          <Data33 />
        </div>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="flex flex-col w-full" data-name="Table Body">
      <Row 
        title="Cloud Migration"
        subtitle="Infrastructure Upgrade"
        assignee="xyz"
        project="Core Engine"
        status="Active"
        priority="High"
        startDate="Oct 12, 2023"
        deadline="Dec 20, 2023"
        progress={65}
        icon={<svg className="size-5" viewBox="0 0 20 16" fill="none"><path d={svgPaths.p2914db00} fill="#5048E5"/></svg>}
        iconBg="bg-[rgba(80,72,229,0.1)]"
      />
      <Row 
        title="Q4 Marketing Campaign"
        subtitle="Digital Strategy"
        assignee="xyz"
        project="Core Engine"
        status="Planning"
        priority="Medium"
        startDate="Nov 01, 2023"
        deadline="Dec 15, 2023"
        progress={40}
        icon={<svg className="size-5" viewBox="0 0 20 16" fill="none"><path d={svgPaths.p12092b00} fill="#D97706"/></svg>}
        iconBg="bg-[#fef3c7]"
      />
      <Row 
        title="Security Audit"
        subtitle="Compliance Review"
        assignee="xyz"
        project="Core Engine"
        status="On Hold"
        priority="Critical"
        startDate="Sep 15, 2023"
        deadline="Jan 30, 2024"
        progress={25}
        icon={<svg className="size-5" viewBox="0 0 16 20" fill="none"><path d={svgPaths.p2bdb86e0} fill="#E11D48"/></svg>}
        iconBg="bg-[#ffe4e6]"
      />
      <Row 
        title="Mobile App Redesign"
        subtitle="UX/UI Optimization"
        assignee="xyz"
        project="Core Engine"
        status="Completed"
        priority="Low"
        startDate="Aug 20, 2023"
        deadline="Oct 30, 2023"
        progress={100}
        icon={<svg className="size-5" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p2bdb86e0} fill="#059669"/></svg>}
        iconBg="bg-[#d1fae5]"
      />
    </div>
  );
}





function Container83() {
  return (
    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-auto px-1">
      <p className="leading-[20px] whitespace-nowrap">Page 1 of 10</p>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm w-full overflow-hidden" data-name="Background+Border+Shadow">
      <HeaderRow />
      <Body1 />
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center opacity-30 px-[21px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center w-auto px-1">
        <p className="leading-[20px] whitespace-nowrap">Previous</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[21px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] text-center w-auto px-1">
        <p className="leading-[20px] whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button14 />
      <Button15 />
    </div>
  );
}

function FooterPagination() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer / Pagination">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Container83 />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function TabButton({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className={`pb-4 px-1 cursor-pointer transition-all relative ${active ? "text-[#5048e5]" : "text-[#64748b] hover:text-[#0f172a]"}`}>
      <span className={`text-sm ${active ? "font-bold" : "font-medium"}`}>{label}</span>
      {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5048e5] rounded-full" />}
    </div>
  );
}

function TabNavigation() {
  const tabs = ["Overview", "List", "Board", "Workload", "Timeline", "Tasks", "Files", "Meetings", "Activity"];
  return (
    <div className="flex gap-8 border-b border-[#e2e8f0] w-full" data-name="Tab Navigation">
      {tabs.map((tab) => (
        <TabButton key={tab} label={tab} active={tab === "List"} />
      ))}
    </div>
  );
}

function ProjectsListContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Projects List Container">
      <BackgroundBorderShadow />
      <FooterPagination />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start px-[32px] py-[32px] w-full" data-name="Main">
      <PageHeaderMainAction />
      <Container44 />
      <TabNavigation />
      <ProjectsListContainer />
    </div>
  );
}

function WorkspaceContent() {
  return (
    <div className="bg-white relative flex flex-col w-full h-full" data-name="Workspace Content">
      <Main />
    </div>
  );
}

export default function ProjectListView() {
  const [view, setView] = useState('list');

  return (
    <ViewContext.Provider value={{ setView }}>
      <div className="w-full flex flex-col scrollbar-hide" data-name="Project List View">
        {view === 'details' ? <ProjectDetailsRedesign /> : <WorkspaceContent />}
      </div>
    </ViewContext.Provider>
  );
}