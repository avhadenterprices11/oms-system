"use client";
import { useState } from "react";
import svgPaths from "./svg-7wotfssrj9";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";

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
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] w-auto whitespace-nowrap px-1">
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
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
          <path d={svgPaths.p6e98980} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <Container3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <h1 className="text-[30px] font-extrabold text-[#0f172a] tracking-tight leading-tight">
        Global Tasks
      </h1>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="text-[#64748b] text-[16px] leading-relaxed max-w-[600px]">
        Centralized view for all cross-departmental tasks and milestones.
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[432.28px]" data-name="Container">
      <Heading />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p21f4d300} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[7.99px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container23 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-auto justify-center not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center whitespace-nowrap px-1">
        <p className="leading-[20px]">Export</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[7px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 7">
        <g id="Container">
          <path d={svgPaths.p3592ed80} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-white content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container24 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-auto justify-center not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center whitespace-nowrap px-1">
        <p className="leading-[20px]">Views</p>
      </div>
    </div>
  );
}

function Container22({ onAddTask, onToggleViews }: { onAddTask: () => void, onToggleViews: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 onClick={onToggleViews} />
      <Button3 onClick={onAddTask} />
    </div>
  );
}

function Container25() {
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

function Button3({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-[#5048e5] content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#4338ca] transition-colors shadow-[0px_4px_10px_rgba(80,72,229,0.25)]" 
      data-name="Button"
      onClick={onClick}
    >
      <Container25 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-white text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Add Task</p>
      </div>
    </div>
  );
}

function Container19({ onAddTask, onToggleViews }: { onAddTask: () => void, onToggleViews: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container22 onAddTask={onAddTask} onToggleViews={onToggleViews} />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Assignee:</p>
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

function FilterDropdown({ label, value, options, isOpen, onToggle, onSelect }: { label: string, value: string, options: string[], isOpen: boolean, onToggle: () => void, onSelect: (val: string) => void }) {
  return (
    <div className="relative">
      <div 
        className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-slate-50 transition-colors border border-[#e2e8f0]" 
        onClick={onToggle}
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
            <p className="leading-[20px]">{label}:</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172a] text-[12px] whitespace-nowrap">{value}</span>
          <svg className={`size-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
          </svg>
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-[60] bg-white border border-slate-200 rounded-xl shadow-2xl p-2 w-56 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-60 overflow-y-auto scrollbar-hide">
            {options.map((opt) => (
              <button 
                key={opt} 
                onClick={() => onSelect(opt)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${value === opt ? 'bg-[#5048e5]/10 text-[#5048e5]' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Container26({ filters, activeDropdown, onToggle, onSelect, onReset }: { filters: any, activeDropdown: string | null, onToggle: (id: string) => void, onSelect: (type: string, val: string) => void, onReset: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <FilterDropdown 
        label="Assignee" 
        value={filters.assignee} 
        options={['All Assignees', 'Ashwini', 'Marcus Wright', 'Sarah Chen', 'Alex Rivera']} 
        isOpen={activeDropdown === 'assignee'}
        onToggle={() => onToggle('assignee')}
        onSelect={(val) => onSelect('assignee', val)}
      />
      <FilterDropdown 
        label="Project" 
        value={filters.project} 
        options={['All Projects', 'Core Engine', 'Cloud Migration', 'Mobile App', 'Security Audit']} 
        isOpen={activeDropdown === 'project'}
        onToggle={() => onToggle('project')}
        onSelect={(val) => onSelect('project', val)}
      />
      <FilterDropdown 
        label="Status" 
        value={filters.status} 
        options={['All Statuses', 'Active', 'Planning', 'On Hold', 'Completed']} 
        isOpen={activeDropdown === 'status'}
        onToggle={() => onToggle('status')}
        onSelect={(val) => onSelect('status', val)}
      />
      <FilterDropdown 
        label="Priority" 
        value={filters.priority} 
        options={['All Priorities', 'Low', 'Medium', 'High', 'Critical']} 
        isOpen={activeDropdown === 'priority'}
        onToggle={() => onToggle('priority')}
        onSelect={(val) => onSelect('priority', val)}
      />
      <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 cursor-pointer" onClick={onReset}>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center not-italic relative shrink-0 text-[#5048e5] text-[12px] text-center whitespace-nowrap hover:underline">
            <p className="leading-[20px]">Reset Filters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewControlsFilters({ onAddTask, onToggleViews, filters, activeDropdown, onToggleFilter, onSelectFilter, onResetFilters }: { onAddTask: () => void, onToggleViews: () => void, filters: any, activeDropdown: string | null, onToggleFilter: (id: string) => void, onSelectFilter: (type: string, val: string) => void, onResetFilters: () => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="View Controls & Filters">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[16px] relative size-full">
        <Container19 onAddTask={onAddTask} onToggleViews={onToggleViews} />
        <Container26 filters={filters} activeDropdown={activeDropdown} onToggle={onToggleFilter} onSelect={onSelectFilter} onReset={onResetFilters} />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[18px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">List</p>
      </div>
    </div>
  );
}

function TabNavigation() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Button5 />
      </div>
    </div>
  );
}

function EnhancedProjectHeaderSection({ onAddTask, onToggleViews, filters, activeDropdown, onToggleFilter, onSelectFilter, onResetFilters, showViews }: { onAddTask: () => void, onToggleViews: () => void, filters: any, activeDropdown: string | null, onToggleFilter: (id: string) => void, onSelectFilter: (type: string, val: string) => void, onResetFilters: () => void, showViews: boolean }) {
  return (
    <div className="bg-white shrink-0 relative w-full border-b border-[#e2e8f0]" data-name="Enhanced Project Header Section">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[32px] px-[32px] relative size-full">
        <ViewControlsFilters onAddTask={onAddTask} onToggleViews={onToggleViews} filters={filters} activeDropdown={activeDropdown} onToggleFilter={onToggleFilter} onSelectFilter={onSelectFilter} onResetFilters={onResetFilters} />
        <div className="flex items-center border-b border-slate-100 w-full gap-8">
          <button 
            className={`pb-4 text-sm font-bold transition-all border-b-2 ${!showViews ? 'text-[#5048e5] border-[#5048e5]' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
            onClick={() => showViews && onToggleViews()}
          >
            List View
          </button>
          <button 
            className={`pb-4 text-sm font-bold transition-all border-b-2 ${showViews ? 'text-[#5048e5] border-[#5048e5]' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
            onClick={() => !showViews && onToggleViews()}
          >
            Board View
          </button>
        </div>
      </div>
    </div>
  );
}



function StatusBadge({ status }: { status: string }) {
  const configs: Record<string, { bg: string; text: string; dot: string }> = {
    "Active": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
    "Planning": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
    "On Hold": { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" },
    "Completed": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  };
  const config = configs[status] || configs["Active"];
  return (
    <div className={`${config.bg} ${config.text} px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit border border-current/10`}>
      <span className={`size-1.5 rounded-full ${config.dot}`} />
      {status}
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const configs: Record<string, { bg: string; text: string; icon: string }> = {
    "Critical": { bg: "bg-rose-100", text: "text-rose-700", icon: "!" },
    "High": { bg: "bg-orange-100", text: "text-orange-700", icon: "↑" },
    "Medium": { bg: "bg-blue-100", text: "text-blue-700", icon: "=" },
    "Low": { bg: "bg-slate-100", text: "text-slate-600", icon: "↓" },
  };
  const config = configs[priority] || configs["Medium"];
  return (
    <div className={`${config.bg} ${config.text} px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 w-fit`}>
      <span>{config.icon}</span>
      {priority}
    </div>
  );
}

function ProjectBadge({ name }: { name: string }) {
  return (
    <div className="bg-[#5048e5]/10 text-[#5048e5] px-2.5 py-1 rounded-md text-[11px] font-bold border border-[#5048e5]/20 w-fit">
      {name}
    </div>
  );
}

function TaskProgress({ percentage, color }: { percentage: number; color: string }) {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-500 rounded-full" 
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs font-bold text-slate-600 w-8">{percentage}%</span>
    </div>
  );
}

function HeaderCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`py-4 text-[#64748b] text-[12px] font-bold uppercase tracking-wider ${className}`}>
      {children}
    </div>
  );
}

const TABLE_GRID_TEMPLATE = "minmax(300px, 1.5fr) minmax(150px, 1fr) minmax(140px, 1fr) minmax(120px, 0.8fr) minmax(120px, 0.8fr) minmax(130px, 1fr) minmax(130px, 1fr) minmax(150px, 1.2fr)";

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

function TaskRow({ 
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
      className="group grid w-full items-center border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors cursor-pointer"
      style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}
    >
      {/* Title */}
      <div className="pl-8 pr-4 py-4 flex items-center gap-4 overflow-hidden">
        <div className={`${iconBg} size-11 rounded-xl flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-bold text-[#0f172a] text-base whitespace-nowrap truncate">{title}</span>
          <span className="text-[#64748b] text-[11px] font-medium whitespace-nowrap truncate">{subtitle}</span>
        </div>
      </div>

      {/* Assignee */}
      <div className="px-4 py-4 flex items-center gap-2 overflow-hidden">
        <div className="size-7 rounded-full bg-[#e2e8f0] overflow-hidden shrink-0">
          <img src={imgProfilePic.src} alt="" className="size-full object-cover" />
        </div>
        <span className="font-semibold text-[#0f172a] text-sm whitespace-nowrap truncate">{assignee}</span>
      </div>

      {/* Project */}
      <div className="px-4 py-4 overflow-hidden">
        <ProjectBadge name={project} />
      </div>

      {/* Status */}
      <div className="px-4 py-4 overflow-hidden">
        <StatusBadge status={status} />
      </div>

      {/* Priority */}
      <div className="px-4 py-4 overflow-hidden">
        <PriorityBadge priority={priority} />
      </div>

      {/* Start Date */}
      <div className="px-4 py-4 overflow-hidden">
        <span className="text-[#475569] text-sm font-medium whitespace-nowrap truncate">{startDate}</span>
      </div>

      {/* Deadline */}
      <div className="px-4 py-4 overflow-hidden">
        <span className="text-[#0f172a] text-sm font-bold whitespace-nowrap truncate">{deadline}</span>
      </div>

      {/* Progress */}
      <div className="pl-4 pr-8 py-4 overflow-hidden">
        <TaskProgress percentage={progress} color={progress === 100 ? "#10b981" : "#5048e5"} />
      </div>
    </div>
  );
}









const TASK_DATA = [
  {
    id: 1,
    title: "Cloud Migration",
    subtitle: "Infrastructure Upgrade",
    assignee: "Marcus Wright",
    project: "Core Engine",
    status: "Active",
    priority: "High",
    startDate: "Oct 12, 2023",
    deadline: "Dec 20, 2023",
    progress: 65,
    icon: <svg className="size-5" viewBox="0 0 20 16" fill="none"><path d={svgPaths.p2914db00} fill="#5048E5"/></svg>,
    iconBg: "bg-[rgba(80,72,229,0.1)]"
  },
  {
    id: 2,
    title: "Q4 Marketing Campaign",
    subtitle: "Digital Strategy",
    assignee: "Sarah Chen",
    project: "Core Engine",
    status: "Planning",
    priority: "Medium",
    startDate: "Nov 01, 2023",
    deadline: "Dec 15, 2023",
    progress: 40,
    icon: <svg className="size-5" viewBox="0 0 20 16" fill="none"><path d={svgPaths.p12092b00} fill="#D97706"/></svg>,
    iconBg: "bg-[#fef3c7]"
  },
  {
    id: 3,
    title: "Security Audit",
    subtitle: "Compliance Review",
    assignee: "Alex Rivera",
    project: "Security Audit",
    status: "On Hold",
    priority: "Critical",
    startDate: "Sep 15, 2023",
    deadline: "Jan 30, 2024",
    progress: 25,
    icon: <svg className="size-5" viewBox="0 0 16 20" fill="none"><path d={svgPaths.p2bdb86e0} fill="#E11D48"/></svg>,
    iconBg: "bg-[#ffe4e6]"
  },
  {
    id: 4,
    title: "Mobile App Redesign",
    subtitle: "UX/UI Optimization",
    assignee: "Ashwini",
    project: "Mobile App",
    status: "Completed",
    priority: "Low",
    startDate: "Aug 20, 2023",
    deadline: "Oct 30, 2023",
    progress: 100,
    icon: <svg className="size-5" viewBox="0 0 22 21" fill="none"><path d={svgPaths.p13774060} fill="#059669"/></svg>,
    iconBg: "bg-[#d1fae5]"
  }
];

function Body1({ filters }: { filters: any }) {
  const filteredTasks = TASK_DATA.filter(task => {
    const matchAssignee = filters.assignee === 'All Assignees' || task.assignee === filters.assignee;
    const matchProject = filters.project === 'All Projects' || task.project === filters.project;
    const matchStatus = filters.status === 'All Statuses' || task.status === filters.status;
    const matchPriority = filters.priority === 'All Priorities' || task.priority === filters.priority;
    return matchAssignee && matchProject && matchStatus && matchPriority;
  });

  return (
    <div className="flex flex-col w-full" data-name="Table Body">
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <TaskRow 
            key={task.id}
            {...task}
          />
        ))
      ) : (
        <div className="py-20 flex flex-col items-center justify-center text-slate-400 bg-white">
          <svg className="size-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
          <p className="font-bold text-lg text-slate-500">No tasks found</p>
          <p className="text-sm">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}

function BoardView({ filters }: { filters: any }) {
  const statuses = ['Planning', 'Active', 'On Hold', 'Completed'];
  
  return (
    <div className="flex gap-6 p-8 overflow-x-auto min-h-full bg-[#f6f6f8]">
      {statuses.map(status => (
        <div key={status} className="flex-1 min-w-[320px] flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-slate-700">{status}</h3>
              <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full text-[10px] font-bold">
                {TASK_DATA.filter(t => t.status === status).length}
              </span>
            </div>
            <button className="p-1 hover:bg-slate-200 rounded transition-colors">
              <svg className="size-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
            </button>
          </div>
          
          <div className="flex flex-col gap-3">
            {TASK_DATA.filter(t => t.status === status).map(task => (
              <div key={task.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-[#5048e5] transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-3">
                  <div className={`${task.iconBg} size-8 rounded-lg flex items-center justify-center shrink-0`}>
                    {task.icon}
                  </div>
                  <PriorityBadge priority={task.priority} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{task.title}</h4>
                <p className="text-xs text-slate-500 font-medium mb-4">{task.project}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="size-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={imgProfilePic.src} alt="" className="size-full object-cover" />
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                    <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                    {task.deadline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Table({ filters }: { filters: any }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <HeaderRow />
        <Body1 filters={filters} />
      </div>
    </div>
  );
}

function BackgroundBorderShadow({ filters }: { filters: any }) {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full overflow-hidden" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Table filters={filters} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p>
          <span className="leading-[20px]">{`Showing `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic text-[#0f172a]">4</span>
          <span className="leading-[20px]">{` of `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic text-[#0f172a]">12</span>
          <span className="leading-[20px]">{` tasks`}</span>
        </p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center opacity-30 px-[21px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center not-italic relative shrink-0 text-[#475569] text-[14px] text-center w-auto whitespace-nowrap px-1">
        <p className="leading-[20px]">Previous</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[21px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center not-italic relative shrink-0 text-[#475569] text-[14px] text-center w-auto whitespace-nowrap px-1">
        <p className="leading-[20px]">Next</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function FooterPagination() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer / Pagination">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Container67 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function TaskListContainer({ filters }: { filters: any }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px relative w-full" data-name="Task List Container">
      <BackgroundBorderShadow filters={filters} />
      <FooterPagination />
    </div>
  );
}

function OverviewTabContent({ filters, showViews }: { filters: any, showViews: boolean }) {
  return (
    <div className="bg-[#f6f6f8] relative w-full" data-name="Overview Tab Content">
      {showViews ? (
        <BoardView filters={filters} />
      ) : (
        <div className="content-stretch flex flex-col items-start p-[32px] relative size-full min-h-screen">
          <TaskListContainer filters={filters} />
        </div>
      )}
    </div>
  );
}

function WorkspaceContent({ onAddTask, onToggleViews, filters, activeDropdown, onToggleFilter, onSelectFilter, onResetFilters, showViews }: { onAddTask: () => void, onToggleViews: () => void, filters: any, activeDropdown: string | null, onToggleFilter: (id: string) => void, onSelectFilter: (type: string, val: string) => void, onResetFilters: () => void, showViews: boolean }) {
  return (
    <div className="bg-white flex-1 flex flex-col relative w-full" data-name="Workspace Content">
      <EnhancedProjectHeaderSection onAddTask={onAddTask} onToggleViews={onToggleViews} filters={filters} activeDropdown={activeDropdown} onToggleFilter={onToggleFilter} onSelectFilter={onSelectFilter} onResetFilters={onResetFilters} showViews={showViews} />
      <div className="flex-1 w-full bg-[#f6f6f8]">
        <OverviewTabContent filters={filters} showViews={showViews} />
      </div>
    </div>
  );
}

function MainContentArea({ onAddTask, onToggleViews, filters, activeDropdown, onToggleFilter, onSelectFilter, onResetFilters, showViews }: { onAddTask: () => void, onToggleViews: () => void, filters: any, activeDropdown: string | null, onToggleFilter: (id: string) => void, onSelectFilter: (type: string, val: string) => void, onResetFilters: () => void, showViews: boolean }) {
  return (
    <div className="content-stretch flex flex-1 flex-col h-full items-start min-w-px overflow-hidden relative" data-name="Main Content Area">
      <HeaderTopNavigation />
      <WorkspaceContent onAddTask={onAddTask} onToggleViews={onToggleViews} filters={filters} activeDropdown={activeDropdown} onToggleFilter={onToggleFilter} onSelectFilter={onSelectFilter} onResetFilters={onResetFilters} showViews={showViews} />
    </div>
  );
}

function Body({ onAddTask, onToggleViews, filters, activeDropdown, onToggleFilter, onSelectFilter, onResetFilters, showViews }: { onAddTask: () => void, onToggleViews: () => void, filters: any, activeDropdown: string | null, onToggleFilter: (id: string) => void, onSelectFilter: (type: string, val: string) => void, onResetFilters: () => void, showViews: boolean }) {
  return (
    <div className="flex-1 flex h-full overflow-hidden relative w-full" data-name="Body">
      <AsideSidebarNavigation />
      <MainContentArea onAddTask={onAddTask} onToggleViews={onToggleViews} filters={filters} activeDropdown={activeDropdown} onToggleFilter={onToggleFilter} onSelectFilter={onSelectFilter} onResetFilters={onResetFilters} showViews={showViews} />
    </div>
  );
}

function AddTaskModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Create New Task</h2>
            <p className="text-sm text-slate-500 font-medium">Add a new task to the global board</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <svg className="size-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
          </button>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Task Title *</label>
            <input type="text" placeholder="e.g. Implement login API endpoint" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5048e5]/20 focus:border-[#5048e5] transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Description</label>
            <textarea placeholder="Describe what needs to be done..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5048e5]/20 focus:border-[#5048e5] transition-all h-32 resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Priority</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5048e5]/20 focus:border-[#5048e5] bg-white transition-all appearance-none">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Deadline</label>
              <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5048e5]/20 focus:border-[#5048e5] transition-all" />
            </div>
          </div>
        </div>
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-all">Cancel</button>
          <button className="px-8 py-2.5 rounded-xl bg-[#5048e5] text-white font-bold hover:bg-[#4338ca] shadow-lg shadow-indigo-100 transition-all">Create Task</button>
        </div>
      </div>
    </div>
  );
}

export default function TaskListView() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [showViews, setShowViews] = useState(false);
  const [activeFilterDropdown, setActiveFilterDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    assignee: 'All Assignees',
    project: 'All Projects',
    status: 'All Statuses',
    priority: 'All Priorities'
  });

  const handleToggleFilter = (id: string) => {
    setActiveFilterDropdown(activeFilterDropdown === id ? null : id);
  };

  const handleSelectFilter = (type: string, val: string) => {
    setFilters(prev => ({ ...prev, [type]: val }));
    setActiveFilterDropdown(null);
  };

  const handleResetFilters = () => {
    setFilters({
      assignee: 'All Assignees',
      project: 'All Projects',
      status: 'All Statuses',
      priority: 'All Priorities'
    });
  };

  return (
    <div className="bg-[#f6f6f8] flex h-screen w-full overflow-hidden" data-name="Task list view">
      <Body 
        onAddTask={() => setIsAddTaskOpen(true)} 
        onToggleViews={() => setShowViews(!showViews)}
        filters={filters}
        activeDropdown={activeFilterDropdown}
        onToggleFilter={handleToggleFilter}
        onSelectFilter={handleSelectFilter}
        onResetFilters={handleResetFilters}
        showViews={showViews}
      />
      <AddTaskModal isOpen={isAddTaskOpen} onClose={() => setIsAddTaskOpen(false)} />
    </div>
  );
}