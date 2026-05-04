"use client";
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
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">Global Tasks</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-auto whitespace-nowrap px-1">
        <p className="leading-[20px]">Centralized view for all cross-departmental tasks and milestones.</p>
      </div>
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
    <div className="content-stretch flex gap-[7.99px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
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

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container24 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-auto justify-center not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center whitespace-nowrap px-1">
        <p className="leading-[20px]">Views</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-start relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
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

function Button3() {
  return (
    <div className="bg-[#5048e5] content-stretch drop-shadow-[0px_1px_1px_rgba(80,72,229,0.2)] flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container25 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Add Delivery Record</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container22 />
      <Button3 />
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

function ImageFill() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[103px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container28() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">All Assignees</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="h-[20px] relative shrink-0 w-fit min-w-[103px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill />
        <Container28 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container27 />
      <Options />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Project:</p>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
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

function ImageFill1() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[95px]" data-name="image fill">
      <Svg1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 pr-[5.45px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">All Projects</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="h-[20px] relative shrink-0 w-fit min-w-[95px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill1 />
        <Container30 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container29 />
      <Options1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Status:</p>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
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

function ImageFill2() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93px]" data-name="image fill">
      <Svg2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">All Statuses</p>
      </div>
    </div>
  );
}

function Options2() {
  return (
    <div className="h-[20px] relative shrink-0 w-fit min-w-[93px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill2 />
        <Container32 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container31 />
      <Options2 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Priority:</p>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
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

function ImageFill3() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[95px]" data-name="image fill">
      <Svg3 />
    </div>
  );
}

function Container34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 pr-[0.89px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">All Priorities</p>
      </div>
    </div>
  );
}

function Options3() {
  return (
    <div className="h-[20px] relative shrink-0 w-fit min-w-[95px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill3 />
        <Container34 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8.01px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container33 />
      <Options3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center not-italic relative shrink-0 text-[#5048e5] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Reset Filters</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
      <Button4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <ButtonMargin />
    </div>
  );
}

function ViewControlsFilters() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="View Controls & Filters">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[16px] relative size-full">
        <Container19 />
        <Container26 />
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

function EnhancedProjectHeaderSection() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] flex-[1_0_0] min-h-px relative w-full" data-name="Enhanced Project Header Section">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-px pt-[32px] px-[32px] relative size-full">
        <ViewControlsFilters />
        <TabNavigation />
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: "bg-[#dbeafe] text-[#1d4ed8]",
    Completed: "bg-[#d1fae5] text-[#047857]",
    "On Hold": "bg-[#f1f5f9] text-[#334155]",
    Planning: "bg-[#fef3c7] text-[#d97706]",
  };
  return (
    <div className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${styles[status] || styles.Active}`}>
      {status}
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    High: "bg-[#fee2e2] text-[#b91c1c]",
    Medium: "bg-[#f1f5f9] text-[#334155]",
    Low: "bg-[#d1fae5] text-[#047857]",
    Critical: "bg-[#f3e8ff] text-[#7e22ce]",
  };
  return (
    <div className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${styles[priority] || styles.Medium}`}>
      {priority}
    </div>
  );
}

function ProjectBadge({ name }: { name: string }) {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] px-2 py-1 rounded text-[#5048e5] text-[10px] font-bold whitespace-nowrap">
      {name}
    </div>
  );
}

function TaskProgress({ percentage, color = "#5048e5" }: { percentage: number; color?: string }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-extrabold text-[#0f172a] uppercase">Progress</span>
        <span className="text-[10px] font-extrabold text-[#5048e5] uppercase">{percentage}%</span>
      </div>
      <div className="h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500" 
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function AvatarGroup({ count = 3 }: { count?: number }) {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="inline-block size-7 rounded-full ring-2 ring-white bg-[#e2e8f0] overflow-hidden">
          <img src={imgProfilePic.src} alt="" className="size-full object-cover" />
        </div>
      ))}
      {count > 3 && (
        <div className="flex items-center justify-center size-7 rounded-full ring-2 ring-white bg-[#f1f5f9] text-[10px] font-bold text-[#64748b]">
          +{count - 3}
        </div>
      )}
    </div>
  );
}

function HeaderCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-4 py-3 flex items-center overflow-hidden ${className}`}>
      <div className="font-bold text-[#64748b] text-[11px] tracking-wider uppercase !whitespace-nowrap truncate">
        {children}
      </div>
    </div>
  );
}

const TABLE_GRID_TEMPLATE = "minmax(250px, 1.5fr) 140px 120px 110px 110px 120px 120px 140px";

function HeaderRow() {
  return (
    <div 
      className="bg-[#f8fafc] grid w-full border-b border-[#e2e8f0] sticky top-0 z-10" 
      style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}
      data-name="Header Row"
    >
      <HeaderCell className="pl-8 pr-4">Title</HeaderCell>
      <HeaderCell className="px-4">Owner</HeaderCell>
      <HeaderCell className="px-4">Team</HeaderCell>
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
          <span className="font-bold text-[#0f172a] text-base !whitespace-nowrap truncate">{title}</span>
          <span className="text-[#64748b] text-[11px] font-medium !whitespace-nowrap truncate">{subtitle}</span>
        </div>
      </div>

      {/* Assignee */}
      <div className="px-4 py-4 flex items-center gap-2 overflow-hidden">
        <div className="size-7 rounded-full bg-[#e2e8f0] overflow-hidden shrink-0">
          <img src={imgProfilePic.src} alt="" className="size-full object-cover" />
        </div>
        <span className="font-semibold text-[#0f172a] text-sm !whitespace-nowrap truncate">{assignee}</span>
      </div>

      {/* Team (was Project) */}
      <div className="px-4 py-4 overflow-hidden">
        <AvatarGroup count={project === "Core Engine" ? 7 : 2} />
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
        <TaskProgress percentage={progress} />
      </div>
    </div>
  );
}





function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-auto whitespace-nowrap px-1">
        <p className="leading-[20px]">xyz</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[97.23px]" data-name="Data">
      <div className="relative rounded-[9999px] shrink-0 size-[28px]" data-name="Image+Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
          <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[116.38%]" src={imgProfilePic.src} />
          </div>
        </div>
      </div>
      <Container39 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Core Engine</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[31.99px] py-[14.5px] relative shrink-0 w-[97.67px]" data-name="Data">
      <Overlay2 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4ed8] text-[11px] w-[34.41px]">
        <p className="leading-[normal]">Active</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] py-[43.5px] relative shrink-0 w-[94.81px]" data-name="Data">
      <Background />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[11px] tracking-[-0.55px] uppercase w-[25.59px]">
        <p className="leading-[normal]">High</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] py-[43.5px] relative shrink-0 w-[84.77px]" data-name="Data">
      <Background1 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 12, 2023</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Data">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dec 20, 2023</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[10px] uppercase w-[54.33px]">
        <p className="leading-[normal]">Progress</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] uppercase w-[23.25px]">
        <p className="leading-[normal]">65%</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#5048e5] inset-[0_35%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Data7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start min-w-[140px] relative shrink-0 w-[140px]" data-name="Data">
      <Container40 />
      <Background2 />
    </div>
  );
}

function Data8() {
  return (
    <div className="h-[89px] relative shrink-0 w-[40.01px]" data-name="Data">
      <div className="flex flex-col items-end size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[173.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <div className="bg-[#5048e5] size-11 rounded-xl flex items-center justify-center shrink-0">
          <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-[#0f172a] text-[14px]">Authentication Bug</span>
          <span className="text-[#64748b] text-[11px]">Core Engine</span>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pl-[32px] relative size-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <Data4 />
          <Data5 />
          <Data6 />
          <Data7 />
          <Data8 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
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

function Background3() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="Background">
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center not-italic relative shrink-0 text-[#0f172a] text-[16px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Q4 Marketing Campaign</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Digital Strategy</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[173.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background3 />
        <Container44 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-auto whitespace-nowrap px-1">
        <p className="leading-[20px]">xyz</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[97.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="relative rounded-[9999px] shrink-0 size-[28px]" data-name="Image+Background">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
            <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[116.38%]" src={imgProfilePic.src} />
            </div>
          </div>
        </div>
        <Container47 />
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Core Engine</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[97.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[31.99px] py-[14.5px] relative size-full">
        <Overlay3 />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] w-[46.98px]">
        <p className="leading-[normal]">Planning</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[94.81px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] py-[36.5px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] tracking-[-0.55px] uppercase w-[42.97px]">
        <p className="leading-[normal]">Medium</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[84.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[36.5px] relative size-full">
        <Background5 />
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Nov 01, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[72.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-auto whitespace-nowrap px-1">
          <p className="leading-[20px]">Dec 15, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[10px] uppercase w-[54.33px]">
        <p className="leading-[normal]">Progress</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] uppercase w-[24.11px]">
        <p className="leading-[normal]">40%</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Background6() {
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
        <Container48 />
        <Background6 />
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="h-[75px] relative shrink-0 w-[40.01px]" data-name="Data">
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

function Container51() {
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

function Background7() {
  return (
    <div className="bg-[#ffe4e6] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="Background">
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Security Audit</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center not-italic relative shrink-0 text-[#64748b] text-[11px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Compliance Review</p>
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

function Data18() {
  return (
    <div className="relative shrink-0 w-[173.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background7 />
        <Container52 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-auto whitespace-nowrap px-1">
        <p className="leading-[20px]">xyz</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[97.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
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
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Core Engine</p>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[97.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[31.99px] py-[14.5px] relative size-full">
        <Overlay4 />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">On Hold</p>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[94.81px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] py-[31.5px] relative size-full">
        <Background8 />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f3e8ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#7e22ce] text-[11px] tracking-[-0.55px] uppercase w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Critical</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[84.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[31.5px] relative size-full">
        <Background9 />
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Sep 15, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Jan 30, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[10px] uppercase w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Progress</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] uppercase w-[23.02px]">
        <p className="leading-[normal]">25%</p>
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

function Background10() {
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
        <Container56 />
        <Background10 />
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

function Container59() {
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

function Background11() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="Background">
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center not-italic relative shrink-0 text-[#0f172a] text-[16px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Mobile App Redesign</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center not-italic relative shrink-0 text-[#64748b] text-[11px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">UX/UI Optimization</p>
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

function Data26() {
  return (
    <div className="relative shrink-0 w-[173.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background11 />
        <Container60 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-auto whitespace-nowrap px-1">
        <p className="leading-[20px]">xyz</p>
      </div>
    </div>
  );
}

function Data27() {
  return (
    <div className="relative shrink-0 w-[97.23px]" data-name="Data">
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

function Overlay5() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">Core Engine</p>
      </div>
    </div>
  );
}

function Data28() {
  return (
    <div className="relative shrink-0 w-[97.67px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[31.99px] py-[14.5px] relative size-full">
        <Overlay5 />
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[11px] w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Completed</p>
      </div>
    </div>
  );
}

function Data29() {
  return (
    <div className="relative shrink-0 w-[94.81px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pr-[16px] pt-[36.5px] relative size-full">
        <Background12 />
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[11px] tracking-[-0.55px] uppercase w-auto whitespace-nowrap px-1">
        <p className="leading-[normal]">Low</p>
      </div>
    </div>
  );
}

function Data30() {
  return (
    <div className="relative shrink-0 w-[84.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pr-[32px] pt-[36.5px] relative size-full">
        <Background13 />
      </div>
    </div>
  );
}

function Data31() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-auto justify-center not-italic relative shrink-0 text-[#475569] text-[14px] w-auto whitespace-nowrap px-1">
          <p className="leading-[20px]">Aug 20, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Data32() {
  return (
    <div className="relative shrink-0" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-auto justify-center not-italic relative shrink-0 text-[#0f172a] text-[14px] w-auto whitespace-nowrap px-1">
          <p className="leading-[20px]">Oct 30, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[10px] uppercase w-[54.33px]">
        <p className="leading-[normal]">Progress</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[10px] uppercase w-[28.55px]">
        <p className="leading-[normal]">100%</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Background14() {
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
        <Container64 />
        <Background14 />
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
      <TaskRow 
        title="Cloud Migration"
        subtitle="Infrastructure Upgrade"
        assignee="Alex Rivera"
        project="Core Engine"
        status="Active"
        priority="High"
        startDate="Oct 12, 2023"
        deadline="Dec 20, 2023"
        progress={65}
        icon={<svg className="size-5" viewBox="0 0 20 16" fill="none"><path d={svgPaths.p2914db00} fill="#5048E5"/></svg>}
        iconBg="bg-[rgba(80,72,229,0.1)]"
      />
      <TaskRow 
        title="Q4 Marketing Campaign"
        subtitle="Digital Strategy"
        assignee="Sarah Chen"
        project="Growth Kit"
        status="Planning"
        priority="Medium"
        startDate="Nov 01, 2023"
        deadline="Dec 15, 2023"
        progress={40}
        icon={<svg className="size-5" viewBox="0 0 20 16" fill="none"><path d={svgPaths.p12092b00} fill="#D97706"/></svg>}
        iconBg="bg-[#fef3c7]"
      />
      <TaskRow 
        title="Security Audit"
        subtitle="Compliance Review"
        assignee="Marcus Thorne"
        project="Core Engine"
        status="On Hold"
        priority="Critical"
        startDate="Sep 15, 2023"
        deadline="Jan 30, 2024"
        progress={25}
        icon={<svg className="size-5" viewBox="0 0 16 20" fill="none"><path d={svgPaths.p2bdb86e0} fill="#E11D48"/></svg>}
        iconBg="bg-[#ffe4e6]"
      />
      <TaskRow 
        title="Mobile App Redesign"
        subtitle="UX/UI Optimization"
        assignee="Ashwini Kumar"
        project="Core Engine"
        status="Completed"
        priority="Low"
        startDate="Aug 20, 2023"
        deadline="Oct 30, 2023"
        progress={100}
        icon={<svg className="size-5" viewBox="0 0 22 21" fill="none"><path d={svgPaths.p13774060} fill="#059669"/></svg>}
        iconBg="bg-[#d1fae5]"
      />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <HeaderRow />
        <Body1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full overflow-hidden" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Table />
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

function TaskListContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px relative w-full" data-name="Task List Container">
      <BackgroundBorderShadow />
      <FooterPagination />
    </div>
  );
}

function OverviewTabContent() {
  return (
    <div className="bg-[#f6f6f8] h-[960px] relative shrink-0 w-full" data-name="Overview Tab Content">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <TaskListContainer />
      </div>
    </div>
  );
}

function WorkspaceContent() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[237px] items-start min-h-px relative w-full" data-name="Workspace Content">
      <EnhancedProjectHeaderSection />
      <OverviewTabContent />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Main Content Area">
      <HeaderTopNavigation />
      <WorkspaceContent />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0 w-full" data-name="Body">
      <AsideSidebarNavigation />
      <MainContentArea />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[1024px] items-start pb-[1024px] relative shrink-0 w-full">
      <Body />
    </div>
  );
}

export default function TaskListView() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-col items-start relative size-full" data-name="Task list view">
      <Frame />
    </div>
  );
}