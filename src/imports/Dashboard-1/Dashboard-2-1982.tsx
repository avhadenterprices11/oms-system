"use client";
import React, { useState } from "react";
import DashboardWidgetManager from "../DashboardWidgetManager/DashboardWidgetManager";
import svgPaths from "./svg-r8n5wq7vya";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";
import imgAb6AXuAc6HCxsmC2Xg3JGbDvbesnuVahv5QzILlvpxDoU2XJlp6V6PuzpfKsrucTvDfS7Sty7AS9DD66YvkInNpVdzCrkCLgh4TkNRfWgHaoVgmOigeZkGw8IjWfZgq2DJofIlZDhFeimYbvx18UIBfR7Ba9QLoyK4JSsL1U4CeI0XHg5A2EvyRmTmzHOdrHbXYjHi7ZLPtJlMralIhwhCaPtpc16FbSDrXgKxqrLucMWlfynFErLjxBs2Tx1Zw4RRigAlFiXpfj4C3 from "./4aeb2dfc1570cb0a781ca8e275b3c4bfa8e146dc.png";
import imgAb6AXuAcF6FMvnMQFdGR2NiQnUpHnxZxI9VAerPn2QGGlxyw268BYUbAcCjTQzoCmVksxqvCttFwggQ729B5QWniUaSHuWCa4RYYf7Pn5E2FNVtj9Z6FEaeI0HFvJhfkXa7IqmKk2OJlpWr7SgsyGxztmSrWnUnnVqpyFLtm6BCLpBuzSiIe9K6EggCeMhDcBw0Jaw0AIxTc6YgvLm9Tu7V5B085P4YB2KzRwDdyV004DU6G5HLaaF0Wbap6T7KTmTa55U2Wj from "./8dc71d58f149bb945354ae713528e009feaaad81.png";
import imgAb6AXuBEbk2US7Bl4ICkNx12N3JcFuar4KXeLqIBxkCNqEx2Y1TZcsIsxYgyWp39OxGqxOkPlCwf8PRztCzqaWv0SkUqttUznp6W11XwqTy2Bv0DFOc16UyufZzIfx29X0My9KHsYXhSkmtilrcxUFqbfA7ZtGjxYXursfdqEcwZf9Vr61DhLEQyrfzQvoC0DhEgZgH9T3Qiy5UgEDnznEvFuKoXbN10Kk2G84ZMm3NSaXk6Y2Dg2Hl9JnTRkctDa1JdGrGwKwfQzz from "./d9eb99246fb1fda757058bdd28e2b8642fa6356d.png";
import imgAb6AXuAEavDDmVioj5WNkkOQDr8L8UeB7Gp5Cb73RjGmzrNLs12FhrfVi8BmvtJr3UiH11RStqtOzPcwp1Xc6NvtEhZEmeUKzpNPp2TgEqCnDWbsf5WBzk3LIrVw6Zl3VNrOmJxaEe3ByG5DGRgkwaWpNqWd1Sr1V8HrZauAjl5PxNwAv6CjSlRrCoBmjc5NY1Ebgg1Pta94UARuBvnvBXzFspy7A1Gj0M3Iflas6DVXetPuIz8PwLhAbVMw7XPbyxdnXxqd90Y2PA from "./3f028db3fbaa7e65e85e0a8c24ab44245646d121.png";

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
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] w-[60.75px]">
        <p className="leading-[20px]">Portal</p>
      </div>
    </div>
  );
}

function Version() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="version">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[35.59px]">
        <p className="leading-[16px]">v1</p>
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
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <Logo />
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] w-[73.02px]">
        <p className="leading-[20px]">Dashboard</p>
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

function LinkPeople() {
  return (
    <div className="content-stretch cursor-pointer hover:bg-[#f8fafc] transition-colors flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link" data-nav="people">
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM4 14a4 4 0 018 0H4z" fill="#475569" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[54.59px]">
        <p className="leading-[20px]">People</p>
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[38.98px]">
        <p className="leading-[20px]">Tasks</p>
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[54.59px]">
        <p className="leading-[20px]">Projects</p>
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container5 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[45.05px]">
        <p className="leading-[20px]">Events</p>
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container6 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[32.13px]">
        <p className="leading-[20px]">CRM</p>
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container7 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[97.55px]">
        <p className="leading-[20px]">Client Delivery</p>
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
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <Dashboard1 />
          <Link />
          <LinkPeople />
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
          <System />
          <Settings />
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
    <div className="bg-white content-stretch flex flex-col h-screen sticky top-0 items-start justify-between pr-px shrink-0 w-[256px]" data-name="Aside - Sidebar Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(80,72,229,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <Top />
      <Nav />
      <QuickCreate />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search resources, tasks, or teammates...</p>
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
    <div className="bg-white h-[64px] shrink-0 sticky top-0 w-full z-[2]" data-name="Header - Top Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(80,72,229,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[32px] relative size-full">
          <SearchBar />
          <Other />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px] w-[283.44px]">
        <p className="leading-[36px]">Hi, Ashwini</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[18px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-[rgba(80,72,229,0.3)] decoration-solid leading-[28px] underline">3 tasks due today.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[18px] w-[78.09px]">
        <p className="leading-[28px]">You have</p>
      </div>
      <Container22 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Ready to dive in?</p>
      </div>
    </div>
  );
}

function GreetingQuickActions1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[400.09px]" data-name="Greeting & Quick Actions">
      <Heading />
      <Container21 />
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

function Button2() {
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

function Button3() {
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

function Button4() {
  return (
    <div className="min-w-[90px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center min-w-[inherit] pl-[24.36px] pr-[24.37px] py-[12px] relative size-full">
        <Overlay3 />
        <Container28 />
      </div>
    </div>
  );
}

function ButtonCustomize({ onClick }: { onClick: () => void }) {
  return (
    <div className="min-w-[100px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-slate-50 transition-colors" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center min-w-[inherit] p-[12px] relative size-full">
        <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
          <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
              <g id="Container">
                <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #5048E5)" id="Icon" />
              </g>
            </svg>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-full whitespace-nowrap">
            <p className="leading-[16px]">Customize Widgets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickActionsWidget({ onCustomize }: { onCustomize: () => void }) {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center p-[9px] relative rounded-[16px] shrink-0" data-name="Quick Actions Widget">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Button2 />
      <Button3 />
      <Button4 />
      <ButtonCustomize onClick={onCustomize} />
    </div>
  );
}

function GreetingQuickActions({ onCustomize }: { onCustomize: () => void }) {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Greeting & Quick Actions">
      <GreetingQuickActions1 />
      <QuickActionsWidget onCustomize={onCustomize} />
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
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">Finalize Q3 Performance Report</p>
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[101.75px]">
        <p className="leading-[16px]">Corporate Growth</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[12px] w-[89.53px]">
        <p className="leading-[16px]">Today, 5:00 PM</p>
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
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
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
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[132.88px]">
        <p className="leading-[28px]">Active Projects</p>
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

function ProjectCard() {
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
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[8px] relative size-full">
        <Container89 />
        <Container95 />
      </div>
    </div>
  );
}

function UpcomingMeetings() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Upcoming Meetings">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder1 />
        <Container88 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
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

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Button7 />
    </div>
  );
}

function LeaveSummary() {
  return (
    <div className="bg-[#5048e5] relative rounded-[24px] shrink-0 w-full" data-name="Leave Summary">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(80,72,229,0.2),0px_4px_6px_-4px_rgba(80,72,229,0.2)]" data-name="Leave Summary:shadow" />
        <Heading11 />
        <Container102 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-[151.22px]">
          <p className="leading-[20px]">Announcements</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading12 />
          <div className="bg-[#ef4444] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11.6667">
        <g id="Container">
          <path d={svgPaths.p1c2e35c0} fill="var(--fill-0, #F59E0B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#d97706] text-[10px] tracking-[0.5px] uppercase w-[76.91px]">
        <p className="leading-[15px]">Pinned News</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container110 />
      <Container111 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-full">
        <p className="leading-[15px] mb-0">New Office Policy regarding Hybrid Work</p>
        <p className="leading-[15px]">kicks in next Monday.</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
        <p className="leading-[15px]">2 hours ago</p>
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(255,251,235,0.3)] relative shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[20px] relative size-full">
        <Container109 />
        <Heading13 />
        <Container112 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-full">
          <p className="leading-[15px] mb-0">Quarterly Town Hall scheduled for Friday 3</p>
          <p className="leading-[15px]">PM.</p>
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
          <p className="leading-[15px]">Yesterday</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[21px] px-[20px] relative size-full">
        <Heading14 />
        <Container113 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-full">
          <p className="leading-[15px] mb-0">Welcome 5 new engineers joining the nebula</p>
          <p className="leading-[15px]">team today!</p>
        </div>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
          <p className="leading-[15px]">2 days ago</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[21px] px-[20px] relative size-full">
        <Heading15 />
        <Container114 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Overlay8 />
        <HorizontalBorder4 />
        <HorizontalBorder5 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[12px] pt-[13px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center w-[60.81px]">
          <p className="leading-[16px]">View Feed</p>
        </div>
      </div>
    </div>
  );
}

function Announcements() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Announcements">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder3 />
        <Container108 />
        <Button8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
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
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_1237px] relative shrink-0 w-full" data-name="Container">
      <MyTasksCol />
      <SideWidgetsCol />
    </div>
  );
}

function WorkspaceScrollable({ onCustomize }: { onCustomize: () => void }) {
  return (
    <div className="bg-[#f6f6f8] relative w-full z-[1]" data-name="Workspace Scrollable">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
          <GreetingQuickActions onCustomize={onCustomize} />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container16({ onCustomize }: { onCustomize: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-screen min-w-px relative" data-name="Container">
      <HeaderTopNavigation />
      <WorkspaceScrollable onCustomize={onCustomize} />
    </div>
  );
}

function Body({ onCustomize }: { onCustomize: () => void }) {
  return (
    <div className="content-stretch flex min-h-screen items-start relative shrink-0 w-full" data-name="Body">
      <AsideSidebarNavigation />
      <Container16 onCustomize={onCustomize} />
    </div>
  );
}

export default function Dashboard() {
  const [showWidgetManager, setShowWidgetManager] = useState(false);

  return (
    <div className="bg-[#f6f6f8] flex min-h-screen items-start relative w-full" data-name="Dashboard">
      <AsideSidebarNavigation />
      <div className="flex-1 min-w-0 relative">
        {showWidgetManager ? (
          <DashboardWidgetManager onClose={() => setShowWidgetManager(false)} />
        ) : (
          <Container16 onCustomize={() => setShowWidgetManager(true)} />
        )}
      </div>
    </div>
  );
}