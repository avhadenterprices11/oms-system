"use client";
import React, { useState, useMemo, useEffect } from "react";
import svgPaths from "./svg-esue4drt62";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";
import NextLink from "next/link";

const imgAb6AXuAc6HCxsmC2Xg3JGbDvbesnuVahv5QzILlvpxDoU2XJlp6V6PuzpfKsrucTvDfS7Sty7AS9DD66YvkInNpVdzCrkCLgh4TkNRfWgHaoVgmOigeZkGw8IjWfZgq2DJofIlZDhFeimYbvx18UIBfR7Ba9QLoyK4JSsL1U4CeI0XHg5A2EvyRmTmzHOdrHbXYjHi7ZLPtJlMralIhwhCaPtpc16FbSDrXgKxqrLucMWlfynFErLjxBs2Tx1Zw4RRigAlFiXpfj4C3 = imgProfilePic;
const imgAb6AXuAcF6FMvnMQFdGR2NiQnUpHnxZxI9VAerPn2QGGlxyw268BYUbAcCjTQzoCmVksxqvCttFwggQ729B5QWniUaSHuWCa4RYYf7Pn5E2FNVtj9Z6FEaeI0HFvJhfkXa7IqmKk2OJlpWr7SgsyGxztmSrWnUnnVqpyFLtm6BCLpBuzSiIe9K6EggCeMhDcBw0Jaw0AIxTc6YgvLm9Tu7V5B085P4YB2KzRwDdyV004DU6G5HLaaF0Wbap6T7KTmTa55U2Wj = imgProfilePic;
const imgAb6AXuBEbk2US7Bl4ICkNx12N3JcFuar4KXeLqIBxkCNqEx2Y1TZcsIsxYgyWp39OxGqxOkPlCwf8PRztCzqaWv0SkUqttUznp6W11XwqTy2Bv0DFOc16UyufZzIfx29X0My9KHsYXhSkmtilrcxUFqbfA7ZtGjxYXursfdqEcwZf9Vr61DhLEQyrfzQvoC0DhEgZgH9T3Qiy5UgEDnznEvFuKoXbN10Kk2G84ZMm3NSaXk6Y2Dg2Hl9JnTRkctDa1JdGrGwKwfQzz = imgProfilePic;
const imgAb6AXuAEavDDmVioj5WNkkOQDr8L8UeB7Gp5Cb73RjGmzrNLs12FhrfVi8BmvtJr3UiH11RStqtOzPcwp1Xc6NvtEhZEmeUKzpNPp2TgEqCnDWbsf5WBzk3LIrVw6Zl3VNrOmJxaEe3ByG5DGRgkwaWpNqWd1Sr1V8HrZauAjl5PxNwAv6CjSlRrCoBmjc5NY1Ebgg1Pta94UARuBvnvBXzFspy7A1Gj0M3Iflas6DVXetPuIz8PwLhAbVMw7XPbyxdnXxqd90Y2PA = imgProfilePic;

const DashboardContext = React.createContext<any>(null);

function Logog() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="logog">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="logog">
          <path d={svgPaths.p245e1900} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#5048e5] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="logo">
      <Logog />
    </div>
  );
}

function Portal1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Portal">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px]">
        <p className="leading-normal">Portal</p>
      </div>
    </div>
  );
}

function Version() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="version">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#64748b] text-[12px]">
        <p className="leading-normal">v1</p>
      </div>
    </div>
  );
}

function Portal() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60.75px]" data-name="Portal">
      <Portal1 />
      <Version />
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full mb-4" data-name="Top">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[32px] relative size-full">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#5048e5] to-[#7c3aed] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <Logo />
          </div>
          <Portal />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#5048e5] text-[14px]">
        <p className="leading-normal">Dashboard</p>
      </div>
    </div>
  );
}

function Dashboard1() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="absolute inset-[0_-12.5%_-25%_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Container">
            <path d={svgPaths.p1fe7b600} fill="var(--fill-0, #475569)" id="Icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[38.98px]">
        <p className="leading-[20px]">Chat</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p6e98980} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#475569] text-[14px]">
        <p className="leading-normal">Tasks</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p2173c3c0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#475569] text-[14px]">
        <p className="leading-normal">Projects</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p841cf00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container5 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#475569] text-[14px]">
        <p className="leading-normal">Events</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[10px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10">
        <g id="Container">
          <path d={svgPaths.p279daa80} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container6 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#475569] text-[14px]">
        <p className="leading-normal">CRM</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.pfffa80} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container7 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#475569] text-[14px]">
        <p className="leading-normal">Client Delivery</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container8 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[85.45px]">
        <p className="leading-[20px]">Social Media</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p2b384fc0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container9 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[62.16px]">
        <p className="leading-[20px]">Meetings</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p306f8c80} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container10 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[76.33px]">
        <p className="leading-[20px]">Documents</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p275bc9be} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container11 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[40.02px]">
        <p className="leading-[20px]">Leave</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14">
        <g id="Container">
          <path d={svgPaths.p1440a2c0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container12 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[111.39px]">
        <p className="leading-[20px]">Announcements</p>
      </div>
    </div>
  );
}

function System() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[199px]" data-name="system">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[45.41px]">
        <p className="leading-[15px]">System</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[53.95px]">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="settings">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[8px] pt-[16px] px-[12px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full overflow-y-auto custom-scrollbar" data-name="Nav">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center px-[16px] py-[12px] relative size-full">
          <Dashboard1 />
          <div className="w-full px-4 py-2 opacity-30">
            <div className="h-px bg-slate-200 w-full" />
          </div>
          <Link />
          <Link1 />
          <Link2 />
          <Link3 />
          <Link4 />
          <Link5 />
          <Link6 />
          <Link7 />
          <Link8 />
          <Link9 />
          <Link10 />
          <div className="mt-6 w-full">
            <System />
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p11e8dc00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container15 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5048e5] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(80,72,229,0.2),0px_4px_6px_-4px_rgba(80,72,229,0.2)]" data-name="Button:shadow" />
          <Overlay />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Upload document</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickCreate() {
  return (
    <div className="relative shrink-0 w-full" data-name="quick create">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Button />
      </div>
    </div>
  );
}

function AsideSidebarNavigation() {
  return (
    <div className="bg-white/70 backdrop-blur-xl border-r border-slate-200/50 content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[280px]" data-name="Aside - Sidebar Navigation">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#5048e5]/5 blur-[80px] rounded-full" />
      </div>
      <Top />
      <Nav />
      <div className="w-full p-4">
        <QuickCreate />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-normal">Search resources, tasks, or teammates...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bottom-[16.67%] content-stretch flex flex-col items-start left-[12px] top-[16.67%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SearchBar1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="search bar">
      <Input />
      <Container17 />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative shrink-0 w-[384px]" data-name="search bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <SearchBar1 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ef4444] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[10px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-[6.66px]">
        <p className="leading-[10px]">3</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex items-start right-[8px] size-[16px] top-[8px]" data-name="Container">
      <div className="absolute bg-[#f87171] left-0 opacity-75 rounded-[9999px] size-[16px] top-0" data-name="Background" />
      <Background />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1fe7b600} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="chat">
      <Container20 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start px-[8px] relative shrink-0 w-[17px]" data-name="Margin">
      <div className="bg-[rgba(80,72,229,0.1)] h-[32px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Name">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-right w-[79.8px]">
        <p className="leading-[16px]">Ashwini</p>
      </div>
    </div>
  );
}

function Role() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Role">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] text-right w-[57.64px]">
        <p className="leading-[15px]">Role</p>
      </div>
    </div>
  );
}

function EmployeeDetails1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.8px]" data-name="Employee details">
      <Name />
      <Role />
    </div>
  );
}

function ProfilePic() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Profile pic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePic.src} />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(80,72,229,0.2)] shrink-0 size-[40px]" data-name="Profile">
      <ProfilePic />
    </div>
  );
}

function EmployeeDetails() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="Employee details">
      <EmployeeDetails1 />
      <Profile />
    </div>
  );
}

function Other() {
  return (
    <div className="relative shrink-0" data-name="other">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="Notification Bell with Badge">
          <Button1 />
        </button>
        <Chat />
        <Margin />
        <EmployeeDetails />
      </div>
    </div>
  );
}

function HeaderTopNavigation() {
  return (
    <div className="bg-white/40 backdrop-blur-md h-[80px] shrink-0 sticky top-0 w-full z-[10] border-b border-slate-200/40" data-name="Header - Top Navigation">
      <div className="flex flex-row items-center size-full px-[32px]">
        <div className="flex items-center justify-between relative size-full">
          <SearchBar />
          <div className="flex items-center gap-6">
            <Other />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mb-2" data-name="Heading 2">
      <h1 className="font-['Inter:Black',sans-serif] font-black text-[40px] text-[#0f172a] tracking-tight leading-tight">
        Hi, Ashwini
      </h1>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5048e5] text-[18px]">
        <p className="decoration-[rgba(80,72,229,0.3)] decoration-2 underline underline-offset-4 leading-[28px]">3 tasks due today.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12px] items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="font-['Inter:Medium',sans-serif] font-medium text-[#64748b] text-[18px]">
        You have
      </div>
      <Container22 />
      <div className="font-['Inter:Medium',sans-serif] font-medium text-[#64748b] text-[18px]">
        Ready to dive in?
      </div>
    </div>
  );
}

function GreetingQuickActions1_Original() {
  const [greeting, setGreeting] = useState("Good Morning");
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 17) setGreeting("Good Afternoon");
    else if (hour >= 17) setGreeting("Good Evening");
  }, []);

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Greeting & Quick Actions">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[32px] w-full">
          <p className="leading-[40px]">{greeting}, Ashwini!</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-full">
          <p className="leading-[24px]">Here's what's happening in your workspace today.</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Container">
          <path d={svgPaths.p1274cc40} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[69.05px]">
        <p className="leading-[16px]">Create Task</p>
      </div>
    </div>
  );
}

function Button2_Old() {
  return (
    <div className="min-w-[90px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center min-w-[inherit] p-[12px] relative size-full">
        <Overlay1 />
        <Container24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pd0beb00} fill="var(--fill-0, #F59E0B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[54.31px]">
        <p className="leading-[16px]">Schedule</p>
      </div>
    </div>
  );
}

function Button3_Old() {
  return (
    <div className="min-w-[90px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center min-w-[inherit] pl-[17.84px] pr-[17.85px] py-[12px] relative size-full">
        <Overlay2 />
        <Container26 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p11e8dc00} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[41.27px]">
        <p className="leading-[16px]">Upload</p>
      </div>
    </div>
  );
}

function Button4_Old() {
  return (
    <div className="min-w-[90px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center min-w-[inherit] pl-[24.36px] pr-[24.37px] py-[12px] relative size-full">
        <Overlay3 />
        <Container28 />
      </div>
    </div>
  );
}

function QuickActionsWidget() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center p-[9px] relative rounded-[16px] shrink-0" data-name="Quick Actions Widget">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function GreetingQuickActions() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Greeting & Quick Actions">
      <GreetingQuickActions1 />
      <QuickActionsWidget />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p1de35f80} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container30 />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[83.81px]">
          <p className="leading-[28px]">My Tasks</p>
        </div>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] w-[92.5px]">
          <p className="leading-[20px]">View all tasks</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading1 />
          <Link11 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-normal">Finalize Q3 Performance Report</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p29487a00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container36 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#64748b] text-[12px]">
        <p className="leading-normal">Corporate Growth</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #EF4444)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container38 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#ef4444] text-[12px]">
        <p className="leading-normal">Today, 5:00 PM</p>
      </div>
    </div>
  );
}

function ProfilePic1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Profile pic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePic.src} />
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(80,72,229,0.2)] shrink-0 size-[20px]" data-name="Profile">
      <ProfilePic1 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[95.56px]">
        <p className="leading-[20px]">XYZ</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Container">
      <Profile1 />
      <Container40 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.5px] items-start min-w-px relative" data-name="Container">
      <Heading2 />
      <Container34 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-start px-[12px] py-[2.5px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[10px] tracking-[0.5px] uppercase w-[81.14px]">
        <p className="leading-[15px]">High Priority</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Background1 />
    </div>
  );
}

function TaskItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Task Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center pb-[24px] pt-[25px] px-[24px] relative size-full">
          <Container32 />
          <Container33 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="Input">
          <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">Review Design System Updates</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p29487a00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container46 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[79.31px]">
        <p className="leading-[16px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container48 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[74.27px]">
        <p className="leading-[16px]">Oct 24, 2023</p>
      </div>
    </div>
  );
}

function ProfilePic2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Profile pic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePic.src} />
      </div>
    </div>
  );
}

function Profile2() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(80,72,229,0.2)] shrink-0 size-[20px]" data-name="Profile">
      <ProfilePic2 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[95.56px]">
        <p className="leading-[20px]">XYZ</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Container">
      <Profile2 />
      <Container50 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container47 />
      <Container49 />
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative size-full">
        <Heading3 />
        <Container44 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-start px-[12px] py-[2.5px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4ed8] text-[10px] tracking-[0.5px] uppercase w-[72.3px]">
        <p className="leading-[15px]">In Progress</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function TaskItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Task Item">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center pb-[24px] pt-[25px] px-[24px] relative size-full">
          <Container42 />
          <Container43 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="Input">
          <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">Onboarding: New Project Hires</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p29487a00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container56 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[93.36px]">
        <p className="leading-[16px]">{`HR & Operations`}</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container58 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Oct 25, 2023</p>
      </div>
    </div>
  );
}

function ProfilePic3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Profile pic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePic.src} />
      </div>
    </div>
  );
}

function Profile3() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(80,72,229,0.2)] shrink-0 size-[20px]" data-name="Profile">
      <ProfilePic3 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[95.56px]">
        <p className="leading-[20px]">XYZ</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Container">
      <Profile3 />
      <Container60 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container57 />
      <Container59 />
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative size-full">
        <Heading4 />
        <Container54 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[12px] py-[2.5px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[10px] tracking-[0.5px] uppercase w-[48.84px]">
        <p className="leading-[15px]">Pending</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function TaskItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Task Item">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center pb-[24px] pt-[25px] px-[24px] relative size-full">
          <Container52 />
          <Container53 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <TaskItem />
        <TaskItem1 />
        <TaskItem2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <Container31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0f172a] text-[18px]">
        <p className="leading-normal">Active Projects</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p10965ac0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container65 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container63 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[20.071px] relative shrink-0 w-[20.047px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0467 20.0706">
        <g id="Container">
          <path d={svgPaths.p6551200} fill="var(--fill-0, #6366F1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(99,102,241,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Overlay">
      <Container68 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#10b981] text-[10px] w-[52.58px]">
        <p className="leading-[15px]">ON TRACK</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[25px] right-[25px] top-[25px]" data-name="Container">
      <Overlay4 />
      <Overlay5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[89px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[144.52px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[117px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[194.89px]">
        <p className="leading-[16px]">Modernizing internal ops platform.</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[11px] w-[47.52px]">
        <p className="leading-[16.5px]">Progress</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[11px] w-[24.08px]">
        <p className="leading-[16.5px]">74%</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#5048e5] inset-[0_26%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[25px] right-[25px] top-[157px]" data-name="Container">
      <Container71 />
      <Background4 />
    </div>
  );
}

function Ab6AXuAc6HCxsmC2Xg3JGbDvbesnuVahv5QzILlvpxDoU2XJlp6V6PuzpfKsrucTvDfS7Sty7AS9DD66YvkInNpVdzCrkCLgh4TkNRfWgHaoVgmOigeZkGw8IjWfZgq2DJofIlZDhFeimYbvx18UIBfR7Ba9QLoyK4JSsL1U4CeI0XHg5A2EvyRmTmzHOdrHbXYjHi7ZLPtJlMralIhwhCaPtpc16FbSDrXgKxqrLucMWlfynFErLjxBs2Tx1Zw4RRigAlFiXpfj4C() {
  return (
    <div className="max-w-[28px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="AB6AXuAC6HCxsmC2Xg3JGbDvbesnuVAHV5qzILlvpxDoU2x-JLP6V6puzpfKsrucTvDfS7Sty7aS9dD66yvkInNp_VDZCrkCLgh4tkNRfWgHaoVGMOigeZkGw8IJWfZgq2dJofIlZDhFEIMYbvx18uIBfR_7Ba9QLoyK4JSsL1U4CeI0xHG5_A2EvyRmTmzHOdrHbXYjHi7zLPtJLMralIHWHCaPTPC16fbSDrXgKXQRLucMWlfynFErLjxBs2TX1zw4rRig-AlFiXpfj4C3">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-[-8.33%] max-w-none size-[116.67%] top-[-8.33%]" src={imgAb6AXuAc6HCxsmC2Xg3JGbDvbesnuVahv5QzILlvpxDoU2XJlp6V6PuzpfKsrucTvDfS7Sty7AS9DD66YvkInNpVdzCrkCLgh4TkNRfWgHaoVgmOigeZkGw8IjWfZgq2DJofIlZDhFeimYbvx18UIBfR7Ba9QLoyK4JSsL1U4CeI0XHg5A2EvyRmTmzHOdrHbXYjHi7ZLPtJlMralIhwhCaPtpc16FbSDrXgKxqrLucMWlfynFErLjxBs2Tx1Zw4RRigAlFiXpfj4C3.src} />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start mr-[-8px] p-[2px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <Ab6AXuAc6HCxsmC2Xg3JGbDvbesnuVahv5QzILlvpxDoU2XJlp6V6PuzpfKsrucTvDfS7Sty7AS9DD66YvkInNpVdzCrkCLgh4TkNRfWgHaoVgmOigeZkGw8IjWfZgq2DJofIlZDhFeimYbvx18UIBfR7Ba9QLoyK4JSsL1U4CeI0XHg5A2EvyRmTmzHOdrHbXYjHi7ZLPtJlMralIhwhCaPtpc16FbSDrXgKxqrLucMWlfynFErLjxBs2Tx1Zw4RRigAlFiXpfj4C />
    </div>
  );
}

function Ab6AXuAcF6FMvnMQFdGR2NiQnUpHnxZxI9VAerPn2QGGlxyw268BYUbAcCjTQzoCmVksxqvCttFwggQ729B5QWniUaSHuWCa4RYYf7Pn5E2FNVtj9Z6FEaeI0HFvJhfkXa7IqmKk2OJlpWr7SgsyGxztmSrWnUnnVqpyFLtm6BCLpBuzSiIe9K6EggCeMhDcBw0Jaw0AIxTc6YgvLm9Tu7V5B085P4YB2KzRwDdyV004DU6G5HLaaF0Wbap6T7KTmTa55U2Wj() {
  return (
    <div className="max-w-[28px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="AB6AXuAcF6fMvn-mQFdG_R2NiQNUpHnxZx-i9vAerPn2qGGlxyw268bYUbAC-CjTQzoCmVKSXQVCttFwggQ729b5QWniUaSHuWCa4rYYf7pn5e2fNVtj9Z6FEaeI0H-fvJhfkXA7IqmKK2oJlpWR_7SgsyGxztm-sr-WNUnnVqpy-FLtm6b_cLPBuzSiIE9k6eggCe_mhDcBW0jaw0aIxTC6YGVLm9Tu7V5b085P4yB2KzRWDdyV004dU6g5hLaaF0WBAP6T7kTmTa55U2WJ">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-[-8.33%] max-w-none size-[116.67%] top-[-8.33%]" src={imgAb6AXuAcF6FMvnMQFdGR2NiQnUpHnxZxI9VAerPn2QGGlxyw268BYUbAcCjTQzoCmVksxqvCttFwggQ729B5QWniUaSHuWCa4RYYf7Pn5E2FNVtj9Z6FEaeI0HFvJhfkXa7IqmKk2OJlpWr7SgsyGxztmSrWnUnnVqpyFLtm6BCLpBuzSiIe9K6EggCeMhDcBw0Jaw0AIxTc6YgvLm9Tu7V5B085P4YB2KzRwDdyV004DU6G5HLaaF0Wbap6T7KTmTa55U2Wj.src} />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start p-[2px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <Ab6AXuAcF6FMvnMQFdGR2NiQnUpHnxZxI9VAerPn2QGGlxyw268BYUbAcCjTQzoCmVksxqvCttFwggQ729B5QWniUaSHuWCa4RYYf7Pn5E2FNVtj9Z6FEaeI0HFvJhfkXa7IqmKk2OJlpWr7SgsyGxztmSrWnUnnVqpyFLtm6BCLpBuzSiIe9K6EggCeMhDcBw0Jaw0AIxTc6YgvLm9Tu7V5B085P4YB2KzRwDdyV004DU6G5HLaaF0Wbap6T7KTmTa55U2Wj />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#cbd5e1] content-stretch flex items-center justify-center pb-[7px] pt-[6px] px-[2px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] text-center w-[13.2px]">
        <p className="leading-[15px]">+3</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <BackgroundBorder2 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Margin1 />
      <Margin2 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[56.66px]">
        <p className="leading-[15px]">Due Dec 12</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[25px] right-[25px] top-[211.5px]" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function ProjectCard_Old() {
  return (
    <div className="bg-white col-1 h-[264.5px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Project Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container67 />
      <Heading6 />
      <Container69 />
      <Container70 />
      <Container74 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="var(--fill-0, #F59E0B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Overlay">
      <Container78 />
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[10px] w-[38.75px]">
        <p className="leading-[15px]">AT RISK</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[25px] right-[25px] top-[25px]" data-name="Container">
      <Overlay6 />
      <Overlay7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[89px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[141.08px]">
        <p className="leading-[24px]">Payment Gateway</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[117px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[198.64px]">
        <p className="leading-[16px]">Integrating multi-currency support.</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[11px] w-[47.52px]">
        <p className="leading-[16.5px]">Progress</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[11px] w-[25.23px]">
        <p className="leading-[16.5px]">42%</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container82 />
        <Container83 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#f59e0b] inset-[0_58%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[25px] right-[25px] top-[157px]" data-name="Container">
      <Container81 />
      <Background5 />
    </div>
  );
}

function Ab6AXuBEbk2US7Bl4ICkNx12N3JcFuar4KXeLqIBxkCNqEx2Y1TZcsIsxYgyWp39OxGqxOkPlCwf8PRztCzqaWv0SkUqttUznp6W11XwqTy2Bv0DFOc16UyufZzIfx29X0My9KHsYXhSkmtilrcxUFqbfA7ZtGjxYXursfdqEcwZf9Vr61DhLEQyrfzQvoC0DhEgZgH9T3Qiy5UgEDnznEvFuKoXbN10Kk2G84ZMm3NSaXk6Y2Dg2Hl9JnTRkctDa1JdGrGwKwfQzz() {
  return (
    <div className="max-w-[28px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="AB6AXuBEbk2U_s7Bl4iCkNX12N3JcFuar4kXELqIBxkCNqEX2Y1tZcsIsxYgyWp39_OXGqxOkPlCwf8PRztCzqaWV0skUQTTUznp6W11xwqTY2Bv0dFOc16uyufZzIFX29x0My9KHsYXhSkmtilrcxUFqbfA7ZtGjx-YXursfdqECWZf9Vr61DH_lEQyrfz_QvoC0DhEGZgH9t3QIY5UgEDnznEVFuKOXbN10Kk2g8_4ZMm3NSaXk6y2dg2Hl9jnTRkctDa1jdGrGWKwfQZZ">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-[-8.33%] max-w-none size-[116.67%] top-[-8.33%]" src={imgAb6AXuBEbk2US7Bl4ICkNx12N3JcFuar4KXeLqIBxkCNqEx2Y1TZcsIsxYgyWp39OxGqxOkPlCwf8PRztCzqaWv0SkUqttUznp6W11XwqTy2Bv0DFOc16UyufZzIfx29X0My9KHsYXhSkmtilrcxUFqbfA7ZtGjxYXursfdqEcwZf9Vr61DhLEQyrfzQvoC0DhEgZgH9T3Qiy5UgEDnznEvFuKoXbN10Kk2G84ZMm3NSaXk6Y2Dg2Hl9JnTRkctDa1JdGrGwKwfQzz.src} />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start mr-[-8px] p-[2px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <Ab6AXuBEbk2US7Bl4ICkNx12N3JcFuar4KXeLqIBxkCNqEx2Y1TZcsIsxYgyWp39OxGqxOkPlCwf8PRztCzqaWv0SkUqttUznp6W11XwqTy2Bv0DFOc16UyufZzIfx29X0My9KHsYXhSkmtilrcxUFqbfA7ZtGjxYXursfdqEcwZf9Vr61DhLEQyrfzQvoC0DhEgZgH9T3Qiy5UgEDnznEvFuKoXbN10Kk2G84ZMm3NSaXk6Y2Dg2Hl9JnTRkctDa1JdGrGwKwfQzz />
    </div>
  );
}

function Ab6AXuAEavDDmVioj5WNkkOQDr8L8UeB7Gp5Cb73RjGmzrNLs12FhrfVi8BmvtJr3UiH11RStqtOzPcwp1Xc6NvtEhZEmeUKzpNPp2TgEqCnDWbsf5WBzk3LIrVw6Zl3VNrOmJxaEe3ByG5DGRgkwaWpNqWd1Sr1V8HrZauAjl5PxNwAv6CjSlRrCoBmjc5NY1Ebgg1Pta94UARuBvnvBXzFspy7A1Gj0M3Iflas6DVXetPuIz8PwLhAbVMw7XPbyxdnXxqd90Y2PA() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="AB6AXuAEavDDmVIOJ5wNKK-o_qDr8L8ueB7GP5cb73Rj_GmzrNLs12fhrfVi8_bmvtJR3UiH11rStqtOzPCWP1Xc6NVTEhZEmeUKzpNPp2tgEQCn-dWBSF5WBzk3lIrVw6zl3vNROmJXAEe3ByG5dGRgkwaWPNqWd1Sr1v8hrZAUAjl5PxNwAV6CjSlRrCoBMJC5nY1EBGG1Pta94uARuBvnvBXzFSPY7a1-GJ0M3Iflas6dVXetPuIz8PwLhAbVMw7XPbyxdnXxqd90Y2pA">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-[-8.33%] max-w-none size-[116.67%] top-[-8.33%]" src={imgAb6AXuAEavDDmVioj5WNkkOQDr8L8UeB7Gp5Cb73RjGmzrNLs12FhrfVi8BmvtJr3UiH11RStqtOzPcwp1Xc6NvtEhZEmeUKzpNPp2TgEqCnDWbsf5WBzk3LIrVw6Zl3VNrOmJxaEe3ByG5DGRgkwaWpNqWd1Sr1V8HrZauAjl5PxNwAv6CjSlRrCoBmjc5NY1Ebgg1Pta94UARuBvnvBXzFspy7A1Gj0M3Iflas6DVXetPuIz8PwLhAbVMw7XPbyxdnXxqd90Y2PA.src} />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start p-[2px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <Ab6AXuAEavDDmVioj5WNkkOQDr8L8UeB7Gp5Cb73RjGmzrNLs12FhrfVi8BmvtJr3UiH11RStqtOzPcwp1Xc6NvtEhZEmeUKzpNPp2TgEqCnDWbsf5WBzk3LIrVw6Zl3VNrOmJxaEe3ByG5DGRgkwaWpNqWd1Sr1V8HrZauAjl5PxNwAv6CjSlRrCoBmjc5NY1Ebgg1Pta94UARuBvnvBXzFspy7A1Gj0M3Iflas6DVXetPuIz8PwLhAbVMw7XPbyxdnXxqd90Y2PA />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <BackgroundBorder4 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#cbd5e1] content-stretch flex items-center justify-center pb-[7px] pt-[6px] px-[2px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] text-center w-[11.11px]">
        <p className="leading-[15px]">+1</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[28px]" data-name="Margin">
      <BackgroundBorder5 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-name="Container">
      <BackgroundBorder3 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[58.81px]">
        <p className="leading-[15px]">Due Nov 01</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[25px] right-[25px] top-[211.5px]" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function ProjectCard1() {
  return (
    <div className="bg-white col-2 h-[264.5px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Project Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container77 />
      <Heading7 />
      <Container79 />
      <Container80 />
      <Container84 />
    </div>
  );
}

function Container66() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_264.50px] relative shrink-0 w-full" data-name="Container">
      <ProjectCard />
      <ProjectCard1 />
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Projects Section">
      <Container62 />
      <Container66 />
    </div>
  );
}

function MyTasksCol() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[555.5px] relative row-1 self-start shrink-0" data-name="My Tasks (Col 1-8)">
      <BackgroundBorderShadow />
      <ProjectsSection />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p3c95900} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container87 />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[176.66px]">
          <p className="leading-[28px]">Upcoming Meetings</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pt-[24px] px-[24px] relative size-full">
        <Heading8 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[21.78px]">
        <p className="leading-[15px]">Oct</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[23.69px]">
        <p className="leading-[18px]">23</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container90 />
      <Container91 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">Product Sync: Nebula</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">10:30 AM - 11:30 AM</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f46e5] text-[10px] w-[89.88px]">
        <p className="leading-[15px]">PROJECT NEBULA</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Background7 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative self-stretch" data-name="Container">
      <Heading9 />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container89() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Background6 />
        <Container92 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[21.78px]">
        <p className="leading-[15px]">Oct</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[24px]">
        <p className="leading-[18px]">24</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container96 />
      <Container97 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">Acme Corp Stakeholders</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">2:00 PM - 3:00 PM</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[10px] w-[71.39px]">
        <p className="leading-[15px]">CLIENT: ACME</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Background9 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative self-stretch" data-name="Container">
      <Heading10 />
      <Container99 />
      <Container100 />
    </div>
  );
}

function Container95() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Background8 />
        <Container98 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="flex flex-col gap-4 p-8 relative shrink-0 w-full" data-name="Container">
      <TaskItemRow task={{ id: 101, title: "Strategy Sync", module: "Marketing & Sales", time: "10:00 AM", priority: "HIGH PRIORITY", completed: false }} />
      <TaskItemRow task={{ id: 102, title: "Product Sync", module: "HR & Operations", time: "2:30 PM", priority: "IN PROGRESS", completed: false }} />
    </div>
  );
}

function UpcomingMeetings() {
  return (
    <div className="bg-white/80 backdrop-blur-sm relative rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/20 shrink-0 w-full hover:shadow-2xl transition-all duration-500 overflow-hidden" data-name="Upcoming Meetings">
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <div className="w-full px-8 pt-8 pb-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-4">Chronology</p>
          <h3 className="text-xl font-bold text-slate-900">Upcoming Syncs</h3>
        </div>
        <Container88 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[18.025px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.025">
        <g id="Container">
          <path d={svgPaths.p16b8d100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container101 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[125.7px]">
        <p className="leading-[24px]">My Leave</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-[134.47px]">
        <p className="leading-[16px]">Available Balance</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[40px] leading-[0] not-italic relative shrink-0 text-white w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[40px] justify-center left-0 text-[36px] top-[20px] w-[83.44px]">
        <p className="leading-[40px]">{`12.5 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center left-[83.44px] text-[14px] top-[27.5px] w-[31.5px]">
        <p className="leading-[20px]">days</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[134.47px]" data-name="Container">
      <Container104 />
      <Paragraph />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-right text-white tracking-[0.6px] uppercase w-[78.7px]">
        <p className="leading-[16px]">Next Leave</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white w-[74.56px]">
        <p className="leading-[20px]">Nov 14 - 18</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[78.7px]" data-name="Container">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex items-end justify-between pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Container105 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[12px] text-center w-[85.97px]">
          <p className="leading-[16px]">Request Leave</p>
        </div>
      </div>
    </div>
  );
}

function LeaveSummary_Old() {
  return (
    <div className="relative group rounded-[32px] overflow-hidden shrink-0 w-full transition-all duration-500 hover:scale-[1.02]" data-name="Leave Summary">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5048e5] to-[#7c3aed]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      <div className="content-stretch flex flex-col gap-[20px] p-[32px] relative size-full z-10">
        <Heading11 />
        <Container102 />
        <div className="mt-4">
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase">
          <p className="leading-normal">Upcoming Events</p>
        </div>
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(255,251,235,0.3)] relative shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
          <div className="h-[12px] relative shrink-0 w-[12px]" data-name="Container">
            <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center relative shrink-0 text-[#d97706] text-[10px] tracking-[0.5px] uppercase">
              <p className="leading-normal">Pinned News</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0f172a] text-[13px] w-full">
            <p className="leading-relaxed">New Office Policy regarding Hybrid Work kicks in next Monday.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#64748b] text-[10px] w-full">
            <p className="leading-normal">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Announcements() {
  return (
    <div className="bg-white relative rounded-[32px] border border-slate-200/40 shadow-xl shadow-slate-200/30 shrink-0 w-full overflow-hidden group" data-name="Announcements">
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-3xl rounded-full" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <div className="w-full px-6 pt-6 pb-2 flex justify-between items-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px]">Broadcasts</p>
          <div className="bg-[#ef4444] rounded-full size-[8px] animate-pulse" />
        </div>
        <Overlay8 />
      </div>
    </div>
  );
}

function SideWidgetsCol() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Side Widgets (Col 9-12)">
      <UpcomingMeetings />
      <LeaveSummary />
      <Announcements />
    </div>
  );
}

function Container29() {
  const { tasks } = React.useContext(DashboardContext);
  
  return (
    <div className="flex flex-col xl:flex-row gap-10 items-start relative w-full" data-name="Container">
      {/* Left Column: Tasks & Projects */}
      <div className="flex-1 flex flex-col gap-10 min-w-0 w-full">
        {/* My Tasks Card */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/20 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="size-10 rounded-xl bg-[#5048e5]/10 flex items-center justify-center text-[#5048e5]">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                   <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                 </svg>
               </div>
               <h3 className="text-xl font-black text-slate-900 tracking-tight">My Tasks</h3>
             </div>
             <button className="text-[12px] font-black text-[#5048e5] uppercase tracking-widest hover:underline">View all tasks</button>
          </div>
          <div className="p-4 space-y-2">
            {tasks.map((task: any) => (
              <TaskItemRow key={task.id} task={task} />
            ))}
          </div>
        </div>

        {/* Active Projects Section */}
        <div className="space-y-6">
           <div className="flex items-center justify-between px-2">
             <h3 className="text-xl font-black text-slate-900 tracking-tight">Active Projects</h3>
             <div className="flex gap-2">
               <button className="size-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#5048e5] hover:border-[#5048e5] transition-all shadow-sm">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M15 19l-7-7 7-7" /></svg>
               </button>
               <button className="size-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#5048e5] hover:border-[#5048e5] transition-all shadow-sm">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M9 5l7 7-7 7" /></svg>
               </button>
             </div>
           </div>
           
           <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
             <ProjectCard title="Dashboard" desc="Modernizing internal ops platform." progress={74} status="ON TRACK" color="#5048e5" />
             <ProjectCard title="Payment Gateway" desc="Integrating multi-currency support." progress={45} status="AT RISK" color="#f59e0b" />
           </div>
        </div>
      </div>

      {/* Right Column: Widgets */}
      <div className="w-full xl:w-[420px] flex flex-col gap-10">
        <UpcomingMeetings />
        <LeaveSummary />
        <AnnouncementsWidget />
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, progress, status, color }: any) {
  return (
    <div className="min-w-[380px] bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/10 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
      <div className="flex items-start justify-between mb-8">
        <div className="size-14 rounded-[20px] flex items-center justify-center bg-slate-50 transition-transform duration-500 group-hover:scale-110" style={{ color }}>
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase ${status === 'ON TRACK' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
          {status}
        </span>
      </div>
      
      <h4 className="text-2xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-[14px] text-slate-500 mb-8 leading-relaxed">{desc}</p>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-[1.5px]">Project Progress</span>
          <span className="text-[11px] font-black text-slate-900">{progress}%</span>
        </div>
        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full transition-all duration-1000 ease-out" style={{ width: `${progress}%`, backgroundColor: color }} />
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-between pt-8 border-t border-slate-50">
        <div className="flex -space-x-2.5">
          {[1,2,3].map(i => (
            <div key={i} className="size-9 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm hover:z-10 transition-all">
              <img src={imgProfilePic.src} className="size-full object-cover" />
            </div>
          ))}
          <div className="size-9 rounded-full border-2 border-white bg-[#5048e5] flex items-center justify-center text-[10px] font-black text-white shadow-sm">+5</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Due Date</div>
          <div className="text-sm font-bold text-slate-900">Dec 12, 2023</div>
        </div>
      </div>
    </div>
  );
}

function AnnouncementsWidget() {
  return (
    <div className="bg-white/90 backdrop-blur-md p-8 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/20 w-full hover:shadow-slate-300/30 transition-all duration-500">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
           <div className="size-2 bg-red-500 rounded-full animate-pulse" />
           <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-[2px]">Announcements</h3>
        </div>
        <button className="size-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-all">
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
        </button>
      </div>
      
      <div className="space-y-10">
        <div className="flex gap-5 group cursor-pointer">
          <div className="w-1 bg-[#5048e5] rounded-full self-stretch transform transition-transform group-hover:scale-y-110" />
          <div className="flex-1">
             <div className="flex items-center gap-3 mb-2">
               <span className="px-2.5 py-1 bg-amber-50 text-amber-600 rounded-lg text-[9px] font-black uppercase tracking-widest">Pinned Post</span>
               <span className="text-[10px] font-bold text-slate-300">2 hours ago</span>
             </div>
             <h5 className="text-[14px] font-bold text-slate-900 group-hover:text-[#5048e5] transition-colors leading-relaxed">New Office Policy regarding Hybrid Work kicks in next Monday.</h5>
          </div>
        </div>

        <div className="flex gap-5 group cursor-pointer">
          <div className="w-1 bg-slate-100 rounded-full self-stretch" />
          <div className="flex-1">
             <div className="flex items-center gap-3 mb-2">
               <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest">Update</span>
               <span className="text-[10px] font-bold text-slate-300">Today, 10:45 AM</span>
             </div>
             <h5 className="text-[14px] font-bold text-slate-900 group-hover:text-[#5048e5] transition-colors leading-relaxed">Quarterly Town Hall scheduled for Friday 3 PM. Please RSVP.</h5>
          </div>
        </div>
      </div>
      
      <button className="w-full mt-10 py-4 bg-slate-50 rounded-2xl text-[12px] font-black text-slate-400 uppercase tracking-widest hover:bg-[#5048e5] hover:text-white transition-all">
         View All Archive
      </button>
    </div>
  );
}

function WorkspaceScrollable() {
  return (
    <div className="bg-[#f8fafc] h-full relative flex-1 w-full z-[1]" data-name="Workspace Scrollable">
      <div className="overflow-y-auto h-full custom-scrollbar scroll-smooth">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-12 items-start p-12 relative">
          <GreetingQuickActions />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Container">
      <WorkspaceScrollable />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
      <Container16 />
    </div>
  );
}

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finalize Q3 Performance Report", module: "Corporate Growth", time: "Today, 5:00 PM", priority: "HIGH PRIORITY", completed: false },
    { id: 2, title: "Review Design System Updates", module: "Brand Identity", time: "Oct 24, 2023", priority: "IN PROGRESS", completed: false },
    { id: 3, title: "Onboarding: New Project Hires", module: "HR & Operations", time: "Oct 25, 2023", priority: "PENDING", completed: false },
  ]);

  const [toast, setToast] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    showToast("Task status updated");
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full selection:bg-[#5048e5]/10 selection:text-[#5048e5]" data-name="Dashboard">
      <DashboardContext.Provider value={{ tasks, toggleTask, showToast, currentTime }}>
        <Body />
        
        {/* Toast Notification */}
        {toast && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10">
              <div className="size-2 bg-[#5048e5] rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-tight">{toast}</span>
            </div>
          </div>
        )}
      </DashboardContext.Provider>
    </div>
  );
}

function GreetingQuickActions1() {
  const { currentTime } = React.useContext(DashboardContext);
  const [greeting, setGreeting] = useState("Good Morning");
  
  useEffect(() => {
    const hour = currentTime.getHours();
    if (hour >= 12 && hour < 17) setGreeting("Good Afternoon");
    else if (hour >= 17) setGreeting("Good Evening");
    else setGreeting("Good Morning");
  }, [currentTime]);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="content-stretch flex flex-col gap-2 items-start relative" data-name="Greeting & Quick Actions">
      <div className="flex items-center gap-4">
        <h1 className="font-['Inter:Black',sans-serif] font-black text-[#0f172a] text-[42px] leading-tight tracking-tight">
          {greeting}, Ashwini!
        </h1>
        <div className="px-4 py-2 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2 mt-2">
           <div className="size-2 bg-[#5048e5] rounded-full animate-pulse" />
           <span className="text-sm font-bold text-slate-600">{formattedTime}</span>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#64748b] text-[18px] leading-relaxed">
        You have <span className="text-[#5048e5] font-bold">3 tasks due today</span>. Ready to dive in?
      </p>
    </div>
  );
}

function Button2() {
  const { showToast } = React.useContext(DashboardContext);
  return (
    <div 
      onClick={() => showToast("Create Task modal opened")}
      className="min-w-[100px] relative rounded-2xl shrink-0 group cursor-pointer hover:bg-slate-50 transition-all" 
      data-name="Button"
    >
      <div className="content-stretch flex flex-col gap-3 items-center justify-center p-4 relative">
        <div className="bg-[#5048e5]/10 group-hover:bg-[#5048e5] content-stretch flex items-center justify-center relative rounded-full size-12 transition-all">
          <svg className="w-6 h-6 text-[#5048e5] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <span className="text-[12px] font-bold text-slate-900">Create Task</span>
      </div>
    </div>
  );
}

function Button3() {
  const { showToast } = React.useContext(DashboardContext);
  return (
    <div 
      onClick={() => showToast("Schedule opened")}
      className="min-w-[100px] relative rounded-2xl shrink-0 group cursor-pointer hover:bg-slate-50 transition-all" 
      data-name="Button"
    >
      <div className="content-stretch flex flex-col gap-3 items-center justify-center p-4 relative">
        <div className="bg-amber-500/10 group-hover:bg-amber-500 content-stretch flex items-center justify-center relative rounded-full size-12 transition-all">
          <svg className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-[12px] font-bold text-slate-900">Schedule</span>
      </div>
    </div>
  );
}

function Button4() {
  const { showToast } = React.useContext(DashboardContext);
  return (
    <div 
      onClick={() => showToast("Upload initiated")}
      className="min-w-[100px] relative rounded-2xl shrink-0 group cursor-pointer hover:bg-slate-50 transition-all" 
      data-name="Button"
    >
      <div className="content-stretch flex flex-col gap-3 items-center justify-center p-4 relative">
        <div className="bg-blue-500/10 group-hover:bg-blue-500 content-stretch flex items-center justify-center relative rounded-full size-12 transition-all">
          <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </div>
        <span className="text-[12px] font-bold text-slate-900">Upload</span>
      </div>
    </div>
  );
}

function LeaveSummary() {
  const { showToast } = React.useContext(DashboardContext);
  const [requesting, setRequesting] = useState(false);

  const handleRequest = () => {
    setRequesting(true);
    setTimeout(() => {
      setRequesting(false);
      showToast("Leave request submitted successfully!");
    }, 1500);
  };

  return (
    <div className="relative group rounded-[40px] overflow-hidden shrink-0 w-full transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-[#5048e5]/20" data-name="Leave Summary">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5048e5] to-[#7c3aed]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      <div className="content-stretch flex flex-col gap-[32px] p-[40px] relative size-full z-10">
        <div className="flex items-center gap-3">
           <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
               <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
           </div>
           <h3 className="text-xl font-bold text-white">My Leave</h3>
        </div>

        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-black text-white/60 uppercase tracking-widest">Available Balance</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">12.5</span>
              <span className="text-sm font-bold text-white/80">days</span>
            </div>
          </div>
          <div className="text-right space-y-1">
             <p className="text-[11px] font-black text-white/60 uppercase tracking-widest">Next Leave</p>
             <p className="text-sm font-bold text-white">Nov 14 - 18</p>
          </div>
        </div>

        <button 
          onClick={handleRequest}
          disabled={requesting}
          className="w-full py-4 bg-white rounded-2xl text-[12px] font-black text-[#5048e5] uppercase tracking-widest hover:bg-[#f8fafc] transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          {requesting ? (
            <div className="size-4 border-2 border-[#5048e5]/30 border-t-[#5048e5] rounded-full animate-spin" />
          ) : "Request Leave"}
        </button>
      </div>
    </div>
  );
}

function TaskItemRow({ task }: { task: any }) {
  const { toggleTask } = React.useContext(DashboardContext);
  
  return (
    <div className={`group flex items-center gap-6 p-4 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100 ${task.completed ? "opacity-40" : ""}`}>
      <button 
        onClick={() => toggleTask(task.id)}
        className={`size-6 rounded-lg border-2 flex items-center justify-center transition-all ${task.completed ? "bg-[#5048e5] border-[#5048e5]" : "border-slate-200 bg-white group-hover:border-[#5048e5]"}`}
      >
        {task.completed && (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>
      
      <div className="flex-1 min-w-0">
        <h4 className={`font-bold text-slate-900 text-[15px] ${task.completed ? "line-through text-slate-400" : ""}`}>{task.title}</h4>
        <div className="flex items-center gap-4 mt-1">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
             <div className="size-1.5 rounded-full bg-slate-300" />
             {task.module}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-red-500 bg-red-50/50 px-2 py-0.5 rounded-md">
             <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
               <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             {task.time}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest uppercase ${
          task.priority === "HIGH PRIORITY" ? "bg-red-50 text-red-500" : 
          task.priority === "IN PROGRESS" ? "bg-blue-50 text-blue-500" : "bg-slate-50 text-slate-500"
        }`}>
          {task.priority}
        </span>
        <div className="size-9 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform">
           <img src={imgProfilePic.src} className="size-full object-cover" />
        </div>
      </div>
    </div>
  );
}