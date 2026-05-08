"use client";
import svgPaths from "./svg-7kzovmf2o4";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";
import imgXyz from "./1e81e73e9567e08bdb8bdf9b3b3fed30be5645ba.png";
import imgMarcus from "./54d5cf63f99c269d1b2a115b1ac107b47b03feda.png";
import imgSarah from "./0cf80ce72cec805d70e988390a760bb30e352428.png";

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
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] w-[60.75px]">
        <p className="leading-[20px]">Portal</p>
      </div>
    </div>
  );
}

function Version() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="version">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[12px] w-[35.59px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[38.98px]">
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
    <div className="bg-[rgba(80,72,229,0.1)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#5048e5] text-[14px] w-[38.98px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[45.05px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[32.13px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[97.55px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[85.45px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[62.16px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[76.33px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[40.02px]">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[111.39px]">
        <p className="leading-[20px]">Announcements</p>
      </div>
    </div>
  );
}

function System() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[199px]" data-name="system">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[45.41px]">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[53.95px]">
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
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-normal not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
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
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] text-right w-[79.8px]">
        <p className="leading-[16px]">Ashwini</p>
      </div>
    </div>
  );
}

function Role() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Role">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[10px] text-right w-[57.64px]">
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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[38.11px]">
        <p className="leading-[16px]">Export</p>
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
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container24 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center w-[35.45px]">
        <p className="leading-[16px]">Views</p>
      </div>
    </div>
  );
}

function ButtonDeliveryRecord() {
  return (
    <div className="bg-[#5048e5] content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#4338ca] transition-colors shadow-[0px_4px_10px_rgba(80,72,229,0.25)]" data-name="Button">
      <div className="relative shrink-0 size-[14px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d="M7 2.33333V11.6667M2.33333 7H11.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-white text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Add Delivery Record</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
      <ButtonDeliveryRecord />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container22 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[58.34px]">
          <p className="leading-[15px]">Assignee:</p>
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

function Container27() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 overflow-clip top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[78.64px]">
        <p className="leading-[16px]">All Assignees</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="h-[16px] relative shrink-0 w-[103px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill />
        <Container27 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container26 />
      <Options />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[53.75px]">
          <p className="leading-[15px]">Project:</p>
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
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[95px]" data-name="image fill">
      <Svg1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 overflow-clip pr-[5.45px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[65.55px]">
        <p className="leading-[16px]">All Projects</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[95px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill1 />
        <Container29 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container28 />
      <Options1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[46.22px]">
          <p className="leading-[15px]">Status:</p>
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
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[93px]" data-name="image fill">
      <Svg2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 overflow-clip top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[68.89px]">
        <p className="leading-[16px]">All Statuses</p>
      </div>
    </div>
  );
}

function Options2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill2 />
        <Container31 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container30 />
      <Options2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-[54.23px]">
          <p className="leading-[15px]">Priority:</p>
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
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[95px]" data-name="image fill">
      <Svg3 />
    </div>
  );
}

function Container33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 overflow-clip pr-[0.89px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[70.11px]">
        <p className="leading-[16px]">All Priorities</p>
      </div>
    </div>
  );
}

function Options3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[95px]" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageFill3 />
        <Container33 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8.01px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container32 />
      <Options3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#5048e5] text-[12px] text-center w-[70.88px]">
        <p className="leading-[16px]">Reset Filters</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
      <Button3 />
    </div>
  );
}

function Container25() {
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
        <Container25 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[18px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-[#5048e5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">List</p>
      </div>
    </div>
  );
}

function TabNavigation() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Button4 />
      </div>
    </div>
  );
}

function EnhancedProjectHeaderSection() {
  return (
    <div className="bg-white shrink-0 relative w-full border-b border-[#e2e8f0]" data-name="Enhanced Project Header Section">
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

function HeaderCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-4 py-5 flex items-center ${className}`}>
      <div className="font-['Inter:Bold',sans-serif] font-bold text-[#64748b] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#f8fafc] grid grid-cols-[minmax(280px,2fr)_150px_140px_140px_120px_120px_120px_180px] w-full border-b border-[#e2e8f0] sticky top-0 z-10" data-name="Header Row">
      <HeaderCell className="pl-8">Title</HeaderCell>
      <HeaderCell>Assignee</HeaderCell>
      <HeaderCell>Project</HeaderCell>
      <HeaderCell>Status</HeaderCell>
      <HeaderCell>Priority</HeaderCell>
      <HeaderCell>Start Date</HeaderCell>
      <HeaderCell>Deadline</HeaderCell>
      <HeaderCell className="pr-8">Progress</HeaderCell>
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
      style={{ gridTemplateColumns: "minmax(280px, 2fr) 150px 140px 140px 120px 120px 120px 180px" }}
    >
      {/* Title */}
      <div className="pl-8 pr-4 py-4 flex items-center gap-4 overflow-hidden">
        <div className={`${iconBg} size-11 rounded-xl flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-bold text-[#0f172a] text-base truncate">{title}</span>
          <span className="text-[#64748b] text-[11px] font-medium truncate">{subtitle}</span>
        </div>
      </div>

      {/* Assignee */}
      <div className="px-4 py-4 flex items-center gap-2 overflow-hidden">
        <div className="size-7 rounded-full bg-[#e2e8f0] overflow-hidden shrink-0">
          <img src={imgProfilePic.src} alt="" className="size-full object-cover" />
        </div>
        <span className="font-semibold text-[#0f172a] text-sm truncate">{assignee}</span>
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
        <span className="text-[#475569] text-sm font-medium whitespace-nowrap">{startDate}</span>
      </div>

      {/* Deadline */}
      <div className="px-4 py-4 overflow-hidden">
        <span className="text-[#0f172a] text-sm font-bold whitespace-nowrap">{deadline}</span>
      </div>

      {/* Progress */}
      <div className="pl-4 pr-8 py-4 overflow-hidden">
        <TaskProgress percentage={progress} color={progress === 100 ? "#10b981" : "#5048e5"} />
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
      <TaskRow 
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
      <TaskRow 
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
      <TaskRow 
        title="Mobile App Redesign"
        subtitle="UX/UI Optimization"
        assignee="xyz"
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
    <div className="min-w-[1112px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pb-px relative size-full">
        <HeaderRow />
        <Body1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-x-auto overflow-y-clip p-px relative size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
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

function Button5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center opacity-30 px-[21px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] text-center w-[59.86px]">
        <p className="leading-[20px]">Previous</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[21px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] text-center w-[32.19px]">
        <p className="leading-[20px]">Next</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function FooterPagination() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer / Pagination">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Container66 />
          <Container67 />
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
    <div className="relative bg-[#f6f6f8] content-stretch flex flex-col items-start p-[32px] w-full" data-name="Overview Tab Content">
      <TaskListContainer />
    </div>
  );
}

function WorkspaceContent() {
  return (
    <div className="bg-white flex-1 flex flex-col relative w-full overflow-hidden" data-name="Workspace Content">
      <EnhancedProjectHeaderSection />
      <div className="flex-1 overflow-y-auto w-full bg-[#f6f6f8]">
        <OverviewTabContent />
      </div>
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
    <div className="flex-1 flex overflow-hidden relative w-full" data-name="Body">
      <AsideSidebarNavigation />
      <MainContentArea />
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p38c98480} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container70 />
    </div>
  );
}

function Container72() {
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

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[89.8px]">
        <p className="leading-[16px]">Q4 Planning</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[6px] relative shrink-0 w-[3.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.7 6">
        <g id="Container">
          <path d={svgPaths.p2dcc20c0} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-[69.84px]">
        <p className="leading-[16px]">TASK-1234</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button7 />
        <Container71 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container77 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container78 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start px-[4px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-[#e2e8f0] h-[24px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p15494480} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container79 />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button8 />
        <Button9 />
        <Margin1 />
        <Button10 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative size-full">
          <Container69 />
          <Container76 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[24px] w-full">
        <p className="leading-[30px] mb-0">{`Update Q4 Marketing Strategy & Budget`}</p>
        <p className="leading-[30px]">Allocation</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Container">
          <path d={svgPaths.p29641280} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Container80 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#5048e5] text-[12px] w-[65.53px]">
            <p className="leading-[16px]">In Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[12px] relative shrink-0 w-[2.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 12">
        <g id="Container">
          <path d={svgPaths.p1fb03780} fill="var(--fill-0, #E11D48)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#ffe4e6] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Container81 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#e11d48] text-[12px] w-[72.53px]">
            <p className="leading-[16px]">High Priority</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Container82 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[12px] w-[101.59px]">
            <p className="leading-[16px]">Due Oct 24, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetadataBadges() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-full" data-name="Metadata Badges">
      <Overlay6 />
      <Background15 />
      <Background16 />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Review the historical performance of Q3 campaigns and outline the</p>
        <p className="leading-[24px] mb-0">proposed budget adjustments for Q4 social media spends. Ensure</p>
        <p className="leading-[24px]">alignment with the new brand guidelines launching in November.</p>
      </div>
    </div>
  );
}

function TitleDescriptionSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title & Description Section">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative size-full">
        <Heading1 />
        <MetadataBadges />
        <Description />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase w-full">
        <p className="leading-[16.5px]">Assignee</p>
      </div>
    </div>
  );
}

function Xyz() {
  return (
    <div className="max-w-[243.5px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="xyz">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgXyz.src} />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[74.81px]">
        <p className="leading-[20px]">xyz</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Xyz />
      <Container86 />
    </div>
  );
}

function Container84() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label />
      <Container85 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase w-full">
        <p className="leading-[16.5px]">CLIENT</p>
      </div>
    </div>
  );
}

function Xyz1() {
  return (
    <div className="max-w-[243.5px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="xyz">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgXyz.src} />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[77.8px]">
        <p className="leading-[20px]">xyz</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Xyz1 />
      <Container89 />
    </div>
  );
}

function Container87() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label1 />
      <Container88 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase w-full">
        <p className="leading-[16.5px]">Project</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.5">
        <g id="Container">
          <path d={svgPaths.p3d46dc00} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#5048e5] text-[14px] w-[98.16px]">
        <p className="leading-[20px]">Marketing Ops</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container90() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Label2 />
      <Container91 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase w-full">
        <p className="leading-[16.5px]">Meeting Note</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
        <g id="Container">
          <path d={svgPaths.p292bd880} fill="var(--fill-0, #334155)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#334155] text-[14px] w-[117.7px]">
        <p className="[text-decoration-skip-ink:none] decoration-[#cbd5e1] decoration-solid leading-[20px] underline">Q4 Strategy Sync</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container94() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Label3 />
      <Container95 />
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[48px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__46.50px_42.50px] relative size-full">
        <Container84 />
        <Container87 />
        <Container90 />
        <Container94 />
      </div>
    </div>
  );
}

function AttributesGrid() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative shrink-0 w-full" data-name="Attributes Grid">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[32px] py-[25px] relative size-full">
        <Container83 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[63.84px]">
        <p className="leading-[20px]">Subtasks</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[10px] w-[16.95px]">
        <p className="leading-[15px]">2/4</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Heading2 />
      <Background17 />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#5048e5] text-[12px] text-center w-[85.64px]">
        <p className="leading-[16px]">+ Add Subtask</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container99 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#5048e5] bottom-0 left-0 right-1/2 rounded-[9999px] top-0" data-name="Background" />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20f47640} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[184.69px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through">Compile Q3 analytics report</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative size-full">
          <Container102 />
          <Container103 />
        </div>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20f47640} fill="var(--fill-0, #5048E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[198.95px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through">Draft initial budget breakdown</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative size-full">
          <Container105 />
          <Container106 />
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p15b00a40} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[180.91px]">
        <p className="leading-[20px]">Stakeholder review session</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative size-full">
          <Container108 />
          <Container109 />
        </div>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p15b00a40} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[181.39px]">
        <p className="leading-[20px]">Finalize deck and distribute</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative size-full">
          <Container111 />
          <Container112 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container101 />
        <Container104 />
        <Container107 />
        <Container110 />
      </div>
    </div>
  );
}

function SubtasksSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subtasks Section">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[25px] pt-[24px] px-[32px] relative size-full">
        <Container98 />
        <ProgressBar />
        <Container100 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full">
          <p className="leading-[20px]">Dependencies</p>
        </div>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[10px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10">
        <g id="Container">
          <path d={svgPaths.pc80eb80} fill="var(--fill-0, #F59E0B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[38.78px]">
        <p className="leading-[16px]">Blocks</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#475569] text-[14px] w-[187.36px]">
        <p className="leading-[20px]">Launch Q4 Social Campaign</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[187.36px]" data-name="Container">
      <Container116 />
      <Container117 />
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container114 />
        <Container115 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[13px] relative size-full">
          <Container113 />
          <Container118 />
        </div>
      </div>
    </div>
  );
}

function Dependencies() {
  return (
    <div className="relative shrink-0 w-full" data-name="Dependencies">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[25px] pt-[24px] px-[32px] relative size-full">
        <Heading3 />
        <Border />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[88.03px]">
        <p className="leading-[20px]">Attachments</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p20803d40} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container120 />
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading4 />
        <Button12 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #2563EB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[4px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container122 />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[88.09px]">
        <p className="leading-[16px]">Budget_V2.xlsx</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[10px] w-[33.83px]">
        <p className="leading-[15px]">2.4 MB</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 w-[88.09px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container124 />
        <Container125 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="col-1 h-[58px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[9px] relative size-full">
          <Background18 />
          <Container123 />
        </div>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p27589980} fill="var(--fill-0, #9333EA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#faf5ff] relative rounded-[4px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container126 />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[76.25px]">
        <p className="leading-[16px]">Brand_Kit.zip</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[10px] w-[37.42px]">
        <p className="leading-[15px]">14.8 MB</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative shrink-0 w-[76.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container128 />
        <Container129 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="col-2 h-[58px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[9px] relative size-full">
          <Background19 />
          <Container127 />
        </div>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_58px] relative size-full">
        <Border1 />
        <Border2 />
      </div>
    </div>
  );
}

function Attachments() {
  return (
    <div className="relative shrink-0 w-full" data-name="Attachments">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[25px] pt-[24px] px-[32px] relative size-full">
        <Container119 />
        <Container121 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[10px] pt-[8px] px-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#5048e5] text-[14px] text-center w-[74.42px]">
          <p className="leading-[20px]">Comments</p>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[10px] pt-[8px] px-[16px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[14px] text-center w-[53.34px]">
          <p className="leading-[20px]">Activity</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Marcus() {
  return (
    <div className="max-w-[535px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Marcus">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMarcus.src} />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[104.16px]">
        <p className="leading-[20px]">Marcus Thorne</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[56.34px]">
        <p className="leading-[15px]">2 hours ago</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container133 />
      <Container134 />
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-normal not-italic relative shrink-0 text-[#334155] text-[14px] w-full">
          <p className="leading-[20px] mb-0">Just uploaded the latest budget projections. Let me know if we need</p>
          <p className="leading-[20px]">to trim the LinkedIn spend further.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f8fafc] relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative size-full">
        <Container135 />
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative self-stretch" data-name="Container">
      <Container132 />
      <BackgroundBorder4 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Marcus />
      <Container131 />
    </div>
  );
}

function Sarah() {
  return (
    <div className="max-w-[535px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Sarah">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSarah.src} />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-normal not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[79.09px]">
        <p className="leading-[20px]">Sarah Chen</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-normal not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[73.05px]">
        <p className="leading-[15px]">45 minutes ago</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container139 />
      <Container140 />
    </div>
  );
}

function Container141() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-normal not-italic relative shrink-0 text-[#334155] text-[14px] w-full">
          <p className="leading-[20px] mb-0">{`Looks good, Marcus. I'll review these tomorrow morning before the`}</p>
          <p className="leading-[20px]">stakeholder meeting.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f8fafc] relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative size-full">
        <Container141 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative self-stretch" data-name="Container">
      <Container138 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Sarah />
      <Container137 />
    </div>
  );
}

function CommentThread() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[48px] relative shrink-0 w-full" data-name="Comment Thread">
      <Container130 />
      <Container136 />
    </div>
  );
}

function CommentsActivityTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[331px] items-start pt-[16px] px-[32px] relative shrink-0 w-[599px]" data-name="Comments & Activity Tabs">
      <HorizontalBorder />
      <CommentThread />
    </div>
  );
}

function ScrollableContent() {
  return (
    <div className="flex-1 relative w-full overflow-y-auto overflow-x-hidden" data-name="Scrollable Content">
      <div className="content-stretch flex flex-col items-start relative size-full p-8">
        <TitleDescriptionSection />
        <AttributesGrid />
        <SubtasksSection />
        <Dependencies />
        <Attachments />
        <CommentsActivityTabs />
      </div>
    </div>
  );
}

function Xyz2() {
  return (
    <div className="max-w-[243.5px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="xyz">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgXyz.src} />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-normal not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[normal]">Write a comment...</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] pt-[9px] px-[12px] relative size-full">
          <Container142 />
        </div>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p856c000} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container144 />
    </div>
  );
}

function Container145() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p3cbf8d90} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container145 />
    </div>
  );
}

function Container146() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[15.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 13.3333">
        <g id="Container">
          <path d={svgPaths.pf594000} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#5048e5] content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container146 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Button:margin">
      <Button17 />
    </div>
  );
}

function Container143() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button15 />
        <Button16 />
        <ButtonMargin1 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[9px] relative size-full">
          <Xyz2 />
          <Input1 />
          <Container143 />
        </div>
      </div>
    </div>
  );
}

function FooterCommentInput() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer Comment Input">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <BackgroundBorder6 />
      </div>
    </div>
  );
}

function RightSideDrawer() {
  return (
    <div className="bg-white flex flex-col h-full min-w-px relative" data-name="Right Side Drawer">
      <Header />
      <ScrollableContent />
      <FooterCommentInput />
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container68() {
  return (
    <div className="fixed inset-0 z-50 flex justify-end" data-name="Container">
      <div className="absolute inset-0 backdrop-blur-[2px] bg-[rgba(15,23,42,0.2)]" data-name="Overlay Backdrop" />
      <div className="relative h-full w-[600px] shadow-2xl transition-transform duration-300">
        <RightSideDrawer />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden">
      <Body />
      {/* Container68 is the side drawer overlay */}
      <Container68 />
    </div>
  );
}

export default function TaskDetailsModal() {
  return (
    <div className="bg-[#f6f6f8] flex h-screen overflow-hidden relative w-full font-['Inter',sans-serif]" data-name="Task details modal">
      <Frame />
    </div>
  );
}
