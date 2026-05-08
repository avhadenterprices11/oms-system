"use client";
import { useState } from "react";
import LeaveRequest from "../LeaveRequest/LeaveRequest";
import svgPaths from "./svg-brr7xtw1rq";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";
import imgImageBackground from "./2daa5e8783aa23085464355ee469da1fc4737314.png";
import imgImageBackground1 from "./9f39ba0042b845649787c958b7db075d9ef220e9.png";

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
          <path d={svgPaths.p20793584} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="h-[36px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="dashboard">
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[223px]" data-name="Link">
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[223px]" data-name="Link">
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container5 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[223px]" data-name="Link">
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
          <path d={svgPaths.p275bc9be} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container11 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] w-[40.02px]">
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
    <div className="flex-[1_0_0] min-h-px relative w-full overflow-y-auto" data-name="Nav">
      <div className="flex flex-col items-center rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <Dashboard />
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
    <div className="bg-white content-stretch flex flex-col h-full items-start justify-between pr-px relative shrink-0 w-[256px]" data-name="Aside - Sidebar Navigation">
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

function Container16() {
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
      <Container16 />
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

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Notifications() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="notifications">
      <Container17 />
      <div className="absolute bg-[#ef4444] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container18() {
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
      <Container18 />
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
        <Notifications />
        <Chat />
        <Margin />
        <EmployeeDetails />
      </div>
    </div>
  );
}

function HeaderTopNavigation() {
  return (
    <div className="bg-white h-[64px] shrink-0 sticky top-0 w-full" data-name="Header - Top Navigation">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] w-full">
        <p className="leading-[24px]">Your Balances</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[#5048e5] content-stretch drop-shadow-[0px_1px_1px_rgba(80,72,229,0.2)] flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#4338ca] transition-colors" 
      data-name="Button"
    >
      <Container20 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Request Leave</p>
      </div>
    </div>
  );
}

function Container19({ onRequestLeave }: { onRequestLeave: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button1 onClick={onRequestLeave} />
    </div>
  );
}

function Background() {
  return (
    <div className="h-[34.025px] relative shrink-0 w-[34px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34.025">
        <g id="Background">
          <rect fill="var(--fill-0, #ECFDF5)" height="34.025" rx="8" width="34" />
          <path d={svgPaths.p3caf4e00} fill="var(--fill-0, #059669)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] w-[37.53px]">
        <p className="leading-[16px]">Active</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[25px] right-[25px] top-[25px]" data-name="Container">
      <Background />
      <Background1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[90.42px]">
        <p className="leading-[20px]">Annual Leave</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-[25px] not-italic right-[25px] top-[105px]" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center relative shrink-0 text-[#0f172a] text-[30px] w-[33.23px]">
        <p className="leading-[36px]">14</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center relative shrink-0 text-[#94a3b8] text-[16px] w-[65.19px]">
        <p className="leading-[24px]">days left</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[6px] left-[25px] overflow-clip right-[25px] rounded-[9999px] top-[157px]" data-name="Background">
      <div className="absolute bg-[#10b981] inset-[0_30%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[188px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container22 />
      <Container23 />
      <Paragraph />
      <Background2 />
    </div>
  );
}

function Background3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Background">
          <rect fill="var(--fill-0, #FFFBEB)" height="36" rx="8" width="36" />
          <path d={svgPaths.p1dc4580} fill="var(--fill-0, #D97706)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex items-start left-[25px] right-[25px] top-[25px]" data-name="Container">
      <Background3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[72.23px]">
        <p className="leading-[20px]">Sick Leave</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-[25px] not-italic right-[25px] top-[105px]" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center relative shrink-0 text-[#0f172a] text-[30px] w-[39.77px]">
        <p className="leading-[36px]">08</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center relative shrink-0 text-[#94a3b8] text-[16px] w-[65.19px]">
        <p className="leading-[24px]">days left</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[6px] left-[25px] overflow-clip right-[25px] rounded-[9999px] top-[157px]" data-name="Background">
      <div className="absolute bg-[#f59e0b] inset-[0_60%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[188px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container24 />
      <Container25 />
      <Paragraph1 />
      <Background4 />
    </div>
  );
}

function Background5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Background">
          <rect fill="var(--fill-0, #EEF2FF)" height="32" rx="8" width="32" />
          <path d={svgPaths.p6e2c400} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-start left-[25px] right-[25px] top-[25px]" data-name="Container">
      <Background5 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[102.17px]">
        <p className="leading-[20px]">Personal Leave</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-baseline leading-[0] left-[25px] not-italic right-[25px] top-[105px]" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center relative shrink-0 text-[#0f172a] text-[30px] w-[39.61px]">
        <p className="leading-[36px]">03</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center relative shrink-0 text-[#94a3b8] text-[16px] w-[65.19px]">
        <p className="leading-[24px]">days left</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[6px] left-[25px] overflow-clip right-[25px] rounded-[9999px] top-[157px]" data-name="Background">
      <div className="absolute bg-[#6366f1] inset-[0_70%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white col-3 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[188px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container26 />
      <Container27 />
      <Paragraph2 />
      <Background6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_188px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function SectionLeaveBalanceCards({ onRequestLeave }: { onRequestLeave: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - Leave Balance Cards">
      <Container19 onRequestLeave={onRequestLeave} />
      <Container21 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[102.94px]">
          <p className="leading-[20px]">Team Calendar</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.55 9">
        <g id="Container">
          <path d={svgPaths.p1250fe00} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.55 9">
        <g id="Container">
          <path d={svgPaths.p4874b00} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative size-full">
          <Heading1 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[94.91px]">
        <p className="leading-[20px]">October 2023</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[6.56px]">
        <p className="leading-[15px]">S</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[9.33px]">
        <p className="leading-[15px]">M</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[6.69px]">
        <p className="leading-[15px]">T</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[10.39px]">
        <p className="leading-[15px]">W</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[6.69px]">
        <p className="leading-[15px]">T</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[5.88px]">
        <p className="leading-[15px]">F</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[6.56px]">
        <p className="leading-[15px]">S</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[_15px] relative w-full" data-name="Container">
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="col-1 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-1 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[14.77px]">
        <p className="leading-[16px]">26</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="col-2 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-1 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[14.11px]">
        <p className="leading-[16px]">27</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-3 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-1 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[14.75px]">
        <p className="leading-[16px]">28</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-4 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-1 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[14.77px]">
        <p className="leading-[16px]">29</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-5 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-1 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[14.98px]">
        <p className="leading-[16px]">30</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-6 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-1 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[4.89px]">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-7 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-1 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[7.33px]">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="col-1 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-2 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[7.42px]">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-2 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-2 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[7.77px]">
        <p className="leading-[16px]">4</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] col-4 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative rounded-bl-[6px] rounded-tl-[6px] row-2 shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[7.45px]">
        <p className="leading-[16px]">6</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] col-5 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-2 shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[6.8px]">
        <p className="leading-[16px]">7</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] col-6 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative rounded-br-[6px] rounded-tr-[6px] row-2 shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[7.44px]">
        <p className="leading-[16px]">8</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-7 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-2 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[7.45px]">
        <p className="leading-[16px]">9</p>
      </div>
    </div>
  );
}

function SimplifiedRestOfTheCalendar() {
  return (
    <div className="col-1 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-3 shrink-0" data-name="Simplified rest of the calendar">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[12.45px]">
        <p className="leading-[16px]">10</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-2 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-3 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[9.77px]">
        <p className="leading-[16px]">11</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-3 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-3 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[12.2px]">
        <p className="leading-[16px]">12</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-4 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-3 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[12.3px]">
        <p className="leading-[16px]">13</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#fef3c7] col-5 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-3 shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[12.64px]">
        <p className="leading-[16px]">14</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="col-6 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-3 shrink-0" data-name="Container">
      <div className="h-[8.848px] relative shrink-0 w-[10.723px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7227 8.84766">
          <path d={svgPaths.pbeb3e00} fill="var(--fill-0, #0F172A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="col-7 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-3 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[12.33px]">
        <p className="leading-[16px]">16</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="col-1 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-4 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[11.67px]">
        <p className="leading-[16px]">17</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="col-2 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-4 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[12.31px]">
        <p className="leading-[16px]">18</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-3 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-4 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[12.33px]">
        <p className="leading-[16px]">19</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-4 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-4 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[14.89px]">
        <p className="leading-[16px]">20</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="col-5 content-stretch flex h-[32px] items-center justify-center justify-self-stretch pb-[8.5px] pt-[7.5px] relative row-4 shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[12.2px]">
        <p className="leading-[16px]">21</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#5048e5] content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[7.13px]">
        <p className="leading-[16px]">5</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="col-3 content-stretch flex h-[32px] items-center justify-center justify-self-stretch relative row-2 shrink-0" data-name="Container">
      <Background8 />
    </div>
  );
}

function Container42() {
  return (
    <div className="gap-y-[4px] grid grid-cols-[repeat(7,minmax(0,1fr))] auto-rows-[32px] relative w-full" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Overlay1 />
      <Overlay2 />
      <Overlay3 />
      <Container52 />
      <SimplifiedRestOfTheCalendar />
      <Container53 />
      <Container54 />
      <Container55 />
      <Background7 />
      <Container56 />
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Upcoming Team Leave</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-full">
        <p className="leading-[16px]">Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
        <p className="leading-[15px]">Oct 6 - Oct 8 (Annual)</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Image+Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
          <div className="absolute bg-[#f1f5f9] inset-0 rounded-[9999px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-0 max-w-none size-[1600%] top-0" src={imgImageBackground.src} />
          </div>
        </div>
      </div>
      <Container67 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-full">
        <p className="leading-[16px]">Michael Chen</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-full">
        <p className="leading-[15px]">Oct 14 (Sick Leave)</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Image+Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
          <div className="absolute bg-[#f1f5f9] inset-0 rounded-[9999px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-0 max-w-none size-[1600%] top-0" src={imgImageBackground1.src} />
          </div>
        </div>
      </div>
      <Container71 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full pt-[8px]" data-name="Container">
      <Container65 />
      <Container66 />
      <Container70 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-col gap-[16px] p-[16px] relative w-full">
        <Container33 />
        <Container34 />
        <Container42 />
        <Container64 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white relative rounded-[24px] w-full min-h-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-stretch pt-px px-px pb-[32px] relative rounded-[inherit] w-full">
        <HorizontalBorder />
        <Container32 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SectionCalendarView() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-start justify-self-stretch relative row-1 min-h-full" data-name="Section - Calendar View">
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Leave History</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">View All</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading2 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[180px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] uppercase w-[31.97px]">
        <p className="leading-[16px]">Type</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[180px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] uppercase w-[44.23px]">
        <p className="leading-[16px]">Period</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[100px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] uppercase w-[63px]">
        <p className="leading-[16px]">Duration</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[120px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] uppercase w-[47.27px]">
        <p className="leading-[16px]">Status</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[80px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] uppercase w-[54.97px]">
        <p className="leading-[16px]">Actions</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#f8fafc] flex flex-row items-center gap-[24px] px-[24px] relative shrink-0 w-full" data-name="Header → Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[18.025px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.025">
        <g id="Container">
          <path d={svgPaths.p16b8d100} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Annual Leave</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="flex gap-[12px] items-center shrink-0 w-[180px] px-[24px]" data-name="Data">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Data1() {
  return (
    <div className="flex flex-col items-start px-[24px] py-[16px] shrink-0 w-[180px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 20 - Oct 25, 2023</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="flex flex-col items-start py-[16px] px-[24px] shrink-0 w-[100px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">5 Days</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#92400e] text-[12px] w-[47px]">
        <p className="leading-[16px]">Pending</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="flex flex-col items-start py-[16px] px-[24px] shrink-0 w-[120px]" data-name="Data">
      <Background9 />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
        <g id="Container">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container76 />
    </div>
  );
}

function Data4() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[80px]" data-name="Data">
      <Button5 />
    </div>
  );
}

function Row() {
  return (
    <div className="border-b border-[#f1f5f9] relative shrink-0 w-full hover:bg-[#f8fafc] transition-colors" data-name="Row">
      <div className="flex flex-row items-center gap-[24px] px-[24px] relative size-full">
        <Data />
        <Data1 />
        <Data2 />
        <Data3 />
        <Data4 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2cccbbb0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[72.23px]">
        <p className="leading-[20px]">Sick Leave</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="flex gap-[12px] items-center shrink-0 w-[180px] px-[24px]" data-name="Data">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Data6() {
  return (
    <div className="flex flex-col items-start px-[24px] py-[16px] shrink-0 w-[180px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Sep 12, 2023</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="flex flex-col items-start py-[16px] px-[24px] shrink-0 w-[100px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">1 Day</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] w-[55.92px]">
        <p className="leading-[16px]">Approved</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="flex flex-col items-start py-[16px] px-[24px] shrink-0 w-[120px]" data-name="Data">
      <Background10 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
        <g id="Container">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container79 />
    </div>
  );
}

function Data9() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[80px]" data-name="Data">
      <Button6 />
    </div>
  );
}

function Row1() {
  return (
    <div className="border-b border-[#f1f5f9] relative shrink-0 w-full hover:bg-[#f8fafc] transition-colors" data-name="Row">
      <div className="flex flex-row items-center gap-[24px] px-[24px] relative size-full">
        <Data5 />
        <Data6 />
        <Data7 />
        <Data8 />
        <Data9 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Personal Leave</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="flex gap-[12px] items-center shrink-0 w-[180px] px-[24px]" data-name="Data">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Data11() {
  return (
    <div className="flex flex-col items-start px-[24px] py-[16px] shrink-0 w-[180px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Aug 05 - Aug 06, 2023</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="flex flex-col items-start py-[16px] px-[24px] shrink-0 w-[100px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">2 Days</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[12px] w-[50.09px]">
        <p className="leading-[16px]">Rejected</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="flex flex-col items-start py-[16px] px-[24px] shrink-0 w-[120px]" data-name="Data">
      <Background11 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
        <g id="Container">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container82 />
    </div>
  );
}

function Data14() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[80px]" data-name="Data">
      <Button7 />
    </div>
  );
}

function Row2() {
  return (
    <div className="border-b border-[#f1f5f9] relative shrink-0 w-full hover:bg-[#f8fafc] transition-colors" data-name="Row">
      <div className="flex flex-row items-center gap-[24px] px-[24px] relative size-full">
        <Data10 />
        <Data11 />
        <Data12 />
        <Data13 />
        <Data14 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[18.025px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.025">
        <g id="Container">
          <path d={svgPaths.p16b8d100} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Annual Leave</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="flex gap-[12px] items-center shrink-0 w-[180px] px-[24px]" data-name="Data">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Data16() {
  return (
    <div className="flex flex-col items-start px-[24px] py-[16px] shrink-0 w-[180px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Jun 10 - Jun 17, 2023</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="flex flex-col items-start py-[16px] px-[24px] shrink-0 w-[100px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">6 Days</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] w-[55.92px]">
        <p className="leading-[16px]">Approved</p>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="flex flex-col items-start py-[16px] px-[24px] shrink-0 w-[120px]" data-name="Data">
      <Background12 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
        <g id="Container">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container85 />
    </div>
  );
}

function Data19() {
  return (
    <div className="flex items-center px-[24px] py-[16px] shrink-0 w-[80px]" data-name="Data">
      <Button8 />
    </div>
  );
}

function Row3() {
  return (
    <div className="border-b border-[#f1f5f9] relative shrink-0 w-full hover:bg-[#f8fafc] transition-colors" data-name="Row">
      <div className="flex flex-row items-center gap-[24px] px-[24px] relative size-full">
        <Data15 />
        <Data16 />
        <Data17 />
        <Data18 />
        <Data19 />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-stretch relative rounded-[inherit] w-full">
        <HeaderRow />
        <Body1 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Load more history</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[16px] pt-[17px] px-[16px] relative size-full">
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function SectionLeaveHistoryTable() {
  return (
    <div className="bg-white col-[2/span_2] justify-self-stretch relative rounded-[24px] row-1 min-h-full" data-name="Section - Leave History Table">
      <div className="content-stretch flex flex-col items-stretch p-px relative rounded-[inherit] size-full">
        <HorizontalBorder1 />
        <Table />
        <HorizontalBorder2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] relative shrink-0 w-full" data-name="Container">
      <SectionCalendarView />
      <SectionLeaveHistoryTable />
    </div>
  );
}

function MainScrollableContent({ onRequestLeave }: { onRequestLeave: () => void }) {
  return (
    <div className="flex-1 overflow-y-auto relative w-full" data-name="Main - Scrollable Content">
      <div className="max-w-[1440px] mx-auto min-h-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
          <SectionLeaveBalanceCards onRequestLeave={onRequestLeave} />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function MainContentArea({ onRequestLeave, onCancel, onSwitchToApprovals, view }: { onRequestLeave: () => void; onCancel: () => void; onSwitchToApprovals: () => void; view: 'dashboard' | 'request' }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Main Content Area">
      <HeaderTopNavigation />
      {view === 'dashboard' ? (
        <MainScrollableContent onRequestLeave={onRequestLeave} />
      ) : (
        <LeaveRequest onCancel={onCancel} onSubmit={onSwitchToApprovals} />
      )}
    </div>
  );
}

function Body({ onSwitchToApprovals }: { onSwitchToApprovals: () => void }) {
  const [view, setView] = useState<'dashboard' | 'request'>('dashboard');

  return (
    <div className="content-stretch flex h-screen items-start overflow-clip relative shrink-0 w-full" data-name="Body">
      <AsideSidebarNavigation />
      <MainContentArea 
        view={view}
        onRequestLeave={() => setView('request')}
        onCancel={() => setView('dashboard')}
        onSwitchToApprovals={onSwitchToApprovals}
      />
    </div>
  );
}

export default function LeaveDashboard({ onSwitchToApprovals = () => {} }: { onSwitchToApprovals?: () => void }) {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-col items-start relative size-full" data-name="Leave Dashboard">
      <Body onSwitchToApprovals={onSwitchToApprovals} />
    </div>
  );
}