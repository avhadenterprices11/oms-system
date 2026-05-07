"use client";
import svgPaths from "./svg-wd9fxt4q3e";
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
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #5048E5)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Social Media `}</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <button className="absolute block cursor-pointer h-[20.2px] left-[193px] max-w-[18px] top-[8px] w-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20.2">
        <g id="SVG">
          <path d="M14.4 12.2L10.2 8L6 12.2" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </button>
  );
}

function Link6() {
  return (
    <div className="bg-[rgba(80,72,229,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[90px] items-center px-[12px] py-[8px] relative size-full">
          <Container8 />
          <Svg />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #475569)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Social Overview</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #475569)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Social Accounts</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #475569)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Social Media Content</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #5048E5)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Calendar</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-l border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #475569)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Post Composer</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative size-full">
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
      </div>
    </div>
  );
}

function Container14() {
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

function Link12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container14 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[62.16px]">
        <p className="leading-[20px]">Meetings</p>
      </div>
    </div>
  );
}

function Container15() {
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

function Link13() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container15 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[76.33px]">
        <p className="leading-[20px]">Documents</p>
      </div>
    </div>
  );
}

function Container16() {
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

function Link14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container16 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[40.02px]">
        <p className="leading-[20px]">Leave</p>
      </div>
    </div>
  );
}

function Container17() {
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

function Link15() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[223px]" data-name="Link">
      <Container17 />
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

function Container18() {
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

function Container19() {
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
          <Container18 />
          <Container19 />
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
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[223px]">
            <Link6 />
            <Frame />
          </div>
          <Link12 />
          <Link13 />
          <Link14 />
          <Link15 />
          <System />
          <Settings />
        </div>
      </div>
    </div>
  );
}

function Container20() {
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
      <Container20 />
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

function Container21() {
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
      <Container21 />
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

function Container22() {
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
      <Container22 />
      <div className="absolute bg-[#ef4444] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container23() {
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
      <Container23 />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">July 2026</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #131B2E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container25 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[8.5px] pt-[7.5px] px-[16px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-center w-[40.95px]">
        <p className="leading-[20px]">Today</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #131B2E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container26 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f2f3ff] content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Heading />
      <Background />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-center w-[42.86px]">
        <p className="leading-[20px]">Month</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f2f3ff] content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <Button4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p20803d40} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#3525cd] content-stretch flex gap-[8px] items-center px-[20px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container28 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[89.11px]">
        <p className="leading-[24px]">Create Post</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Button5 />
    </div>
  );
}

function CalendarHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Calendar Header">
      <Container24 />
      <Container27 />
    </div>
  );
}

function DaysHeader() {
  return (
    <div className="bg-[#f2f3ff] col-1 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Days Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] text-center tracking-[1.2px] uppercase w-[33.19px]">
        <p className="leading-[16px]">Mon</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f2f3ff] col-2 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] text-center tracking-[1.2px] uppercase w-[27.69px]">
        <p className="leading-[16px]">Tue</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f2f3ff] col-3 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] text-center tracking-[1.2px] uppercase w-[32.02px]">
        <p className="leading-[16px]">Wed</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f2f3ff] col-4 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] text-center tracking-[1.2px] uppercase w-[29.36px]">
        <p className="leading-[16px]">Thu</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f2f3ff] col-5 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] text-center tracking-[1.2px] uppercase w-[21.91px]">
        <p className="leading-[16px]">Fri</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f2f3ff] col-6 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] text-center tracking-[1.2px] uppercase w-[27.19px]">
        <p className="leading-[16px]">Sat</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f2f3ff] col-7 content-stretch flex flex-col items-center justify-self-stretch py-[12px] relative row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] text-center tracking-[1.2px] uppercase w-[29.39px]">
        <p className="leading-[16px]">Sun</p>
      </div>
    </div>
  );
}

function PrevMonthDays() {
  return (
    <div className="bg-[rgba(242,243,255,0.3)] col-1 h-full justify-self-stretch opacity-40 relative row-2 shrink-0" data-name="Prev month days">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.45px]">
          <p className="leading-[20px]">26</p>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(242,243,255,0.3)] col-2 h-full justify-self-stretch opacity-40 relative row-2 shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[16.63px]">
          <p className="leading-[20px]">27</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(242,243,255,0.3)] col-3 h-full justify-self-stretch opacity-40 relative row-2 shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.45px]">
          <p className="leading-[20px]">28</p>
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(242,243,255,0.3)] col-4 h-full justify-self-stretch opacity-40 relative row-2 shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.45px]">
          <p className="leading-[20px]">29</p>
        </div>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(242,243,255,0.3)] col-5 h-full justify-self-stretch opacity-40 relative row-2 shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.83px]">
          <p className="leading-[20px]">30</p>
        </div>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(242,243,255,0.3)] col-6 h-full justify-self-stretch opacity-40 relative row-2 shrink-0" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.59px]">
          <p className="leading-[20px]">31</p>
        </div>
      </div>
    </div>
  );
}

function CurrentMonth() {
  return (
    <div className="bg-white col-7 h-full justify-self-stretch relative row-2 shrink-0" data-name="Current month">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[5.81px]">
          <p className="leading-[20px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4338ca] text-[10px] w-[49.22px]">
        <p className="leading-[15px]">09:00 AM</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 10.5">
        <g id="Container">
          <path d={svgPaths.p14a91f00} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#464555] text-[11px] top-[12.88px] w-[82.98px]">
          <p className="leading-[13.75px] mb-0">New collection</p>
          <p className="leading-[13.75px]">launch photos...</p>
        </div>
      </div>
    </div>
  );
}

function ScheduledPost() {
  return (
    <div className="bg-[#eef2ff] relative rounded-[4px] shrink-0 w-full" data-name="Scheduled Post">
      <div aria-hidden="true" className="absolute border border-[rgba(224,231,255,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[9px] relative size-full">
        <Container29 />
        <Container32 />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white col-1 h-full justify-self-stretch relative row-3 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8.5px] items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[8.64px]">
          <p className="leading-[20px]">2</p>
        </div>
        <ScheduledPost />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-white col-2 h-full justify-self-stretch relative row-3 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[8.78px]">
          <p className="leading-[20px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[47.75px]">
        <p className="leading-[15px]">02:30 PM</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3c4dd880} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#464555] text-[11px] top-[19.75px] w-[93.03px]">
          <p className="leading-[13.75px] mb-0">Weekly</p>
          <p className="leading-[13.75px] mb-0">newsletter upda…</p>
          <p className="leading-[13.75px]">shared to FB</p>
        </div>
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="Post">
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[9px] relative size-full">
        <Container33 />
        <Container36 />
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-white col-3 h-full justify-self-stretch relative row-3 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8.5px] items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[9.19px]">
          <p className="leading-[20px]">4</p>
        </div>
        <Post />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-white col-4 h-full justify-self-stretch relative row-3 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[8.45px]">
          <p className="leading-[20px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-white col-5 h-full justify-self-stretch relative row-3 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[8.83px]">
          <p className="leading-[20px]">6</p>
        </div>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-white col-6 h-full justify-self-stretch relative row-3 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[8px]">
          <p className="leading-[20px]">7</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-white col-7 h-full justify-self-stretch relative row-3 shrink-0" data-name="Row 2">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[8.81px]">
          <p className="leading-[20px]">8</p>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4338ca] text-[10px] w-[44.61px]">
        <p className="leading-[15px]">11:00 AM</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1045aa00} fill="var(--fill-0, #6366F1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#131b2e] text-[11px] top-[12.88px] w-[74.85px]">
          <p className="leading-[13.75px] mb-0">Thread on AI</p>
          <p className="leading-[13.75px]">trends in SaaS</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e0e7ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[9px] relative size-full">
        <Container38 />
        <Container41 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[10px] w-[48.5px]">
        <p className="leading-[15px]">04:00 PM</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 10.5">
        <g id="Container">
          <path d={svgPaths.p1031840} fill="var(--fill-0, #2563EB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#464555] text-[11px] top-[19.75px] w-[85.06px]">
          <p className="leading-[13.75px] mb-0">LinkedIn: Hiring</p>
          <p className="leading-[13.75px] mb-0">post for senior…</p>
          <p className="leading-[13.75px]">PM</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(239,246,255,0.5)] relative rounded-[4px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[9px] relative size-full">
        <Container42 />
        <Container45 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[14px] right-[14.01px] top-[42px]" data-name="Container">
      <BackgroundBorderShadow />
      <OverlayBorder />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white col-1 h-full justify-self-stretch relative row-4 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(53,37,205,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[14px] not-italic text-[#3525cd] text-[14px] top-[23.5px] w-[9.09px]">
        <p className="leading-[20px]">9</p>
      </div>
      <Container37 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-white col-2 h-full justify-self-stretch relative row-4 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.86px]">
          <p className="leading-[20px]">10</p>
        </div>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-white col-3 h-full justify-self-stretch relative row-4 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[11.63px]">
          <p className="leading-[20px]">11</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[10px] w-[49.23px]">
        <p className="leading-[15px]">08:00 AM</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3cf2be00} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[13.75px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#464555] text-[11px] top-[12.88px] w-[87.47px]">
          <p className="leading-[13.75px] mb-0">Client approval…</p>
          <p className="leading-[13.75px]">received</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[9px] relative size-full">
        <Container46 />
        <Container49 />
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-white col-4 h-full justify-self-stretch relative row-4 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8.5px] items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.44px]">
          <p className="leading-[20px]">12</p>
        </div>
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-white col-5 h-full justify-self-stretch relative row-4 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.59px]">
          <p className="leading-[20px]">13</p>
        </div>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-white col-6 h-full justify-self-stretch relative row-4 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[15px]">
          <p className="leading-[20px]">14</p>
        </div>
      </div>
    </div>
  );
}

function Row3MinimalRepresentationForOtherDays() {
  return (
    <div className="bg-white col-7 h-full justify-self-stretch relative row-4 shrink-0" data-name="Row 3 (Minimal representation for other days)">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.27px]">
          <p className="leading-[20px]">15</p>
        </div>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-white col-1 h-full justify-self-stretch relative row-5 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.64px]">
          <p className="leading-[20px]">16</p>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4338ca] text-[10px] w-[48.23px]">
        <p className="leading-[15px]">06:00 PM</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p20dd1580} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#464555] text-[11px] top-[19.75px] w-[69.39px]">
          <p className="leading-[13.75px] mb-0">Product Reel:</p>
          <p className="leading-[13.75px] mb-0">Behind the…</p>
          <p className="leading-[13.75px]">scenes</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#eef2ff] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(224,231,255,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[9px] relative size-full">
        <Container50 />
        <Container53 />
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-white col-2 h-full justify-self-stretch relative row-5 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8.5px] items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[13.81px]">
          <p className="leading-[20px]">17</p>
        </div>
        <BackgroundBorder2 />
      </div>
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-white col-3 h-full justify-self-stretch relative row-5 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.63px]">
          <p className="leading-[20px]">18</p>
        </div>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-white col-4 h-full justify-self-stretch relative row-5 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.64px]">
          <p className="leading-[20px]">19</p>
        </div>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-white col-5 h-full justify-self-stretch relative row-5 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.67px]">
          <p className="leading-[20px]">20</p>
        </div>
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-white col-6 h-full justify-self-stretch relative row-5 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[14.44px]">
          <p className="leading-[20px]">21</p>
        </div>
      </div>
    </div>
  );
}

function FillingTheRestWithPlaceholderCells() {
  return (
    <div className="bg-white col-7 h-full justify-self-stretch relative row-5 shrink-0" data-name="Filling the rest with placeholder cells">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.27px]">
          <p className="leading-[20px]">22</p>
        </div>
      </div>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-white col-1 h-full justify-self-stretch relative row-6 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.41px]">
          <p className="leading-[20px]">23</p>
        </div>
      </div>
    </div>
  );
}

function Background26() {
  return (
    <div className="bg-white col-2 h-full justify-self-stretch relative row-6 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.61px]">
          <p className="leading-[20px]">24</p>
        </div>
      </div>
    </div>
  );
}

function Background27() {
  return (
    <div className="bg-white col-3 h-full justify-self-stretch relative row-6 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.08px]">
          <p className="leading-[20px]">25</p>
        </div>
      </div>
    </div>
  );
}

function Background28() {
  return (
    <div className="bg-white col-4 h-full justify-self-stretch relative row-6 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.45px]">
          <p className="leading-[20px]">26</p>
        </div>
      </div>
    </div>
  );
}

function Background29() {
  return (
    <div className="bg-white col-5 h-full justify-self-stretch relative row-6 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[16.63px]">
          <p className="leading-[20px]">27</p>
        </div>
      </div>
    </div>
  );
}

function Background30() {
  return (
    <div className="bg-white col-6 h-full justify-self-stretch relative row-6 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[17.45px]">
          <p className="leading-[20px]">28</p>
        </div>
      </div>
    </div>
  );
}

function CalendarGrid() {
  return (
    <div className="bg-[#f2f3ff] gap-x-px gap-y-px grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[40px_repeat(5,1fr)] overflow-clip relative rounded-[16px] flex-1 w-full min-h-0" data-name="Calendar Grid">
      <DaysHeader />
      <Background2 />
      <Background3 />
      <Background4 />
      <Background5 />
      <Background6 />
      <Background7 />
      <PrevMonthDays />
      <Overlay1 />
      <Overlay2 />
      <Overlay3 />
      <Overlay4 />
      <Overlay5 />
      <CurrentMonth />
      <Background8 />
      <Background9 />
      <Background10 />
      <Background11 />
      <Background12 />
      <Background13 />
      <Row />
      <BackgroundBorder />
      <Background14 />
      <Background15 />
      <Background16 />
      <Background17 />
      <Background18 />
      <Row3MinimalRepresentationForOtherDays />
      <Background19 />
      <Background20 />
      <Background21 />
      <Background22 />
      <Background23 />
      <Background24 />
      <FillingTheRestWithPlaceholderCells />
      <Background25 />
      <Background26 />
      <Background27 />
      <Background28 />
      <Background29 />
      <Background30 />
    </div>
  );
}

function SectionCalendarContainer() {
  return (
    <div className="flex-1 relative w-full h-full overflow-hidden" data-name="Section - Calendar Container">
      <div className="flex flex-col gap-[16px] items-center py-[20px] px-[40px] relative h-full w-full max-w-[1400px] mx-auto">
        <div className="w-full">
          <CalendarHeader />
        </div>
        <CalendarGrid />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Main Content Area">
      <HeaderTopNavigation />
      <SectionCalendarContainer />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex h-[1024px] items-start overflow-clip relative shrink-0 w-full" data-name="Body">
      <AsideSidebarNavigation />
      <MainContentArea />
    </div>
  );
}

export default function SocialMediaCalendar() {
  return (
    <div className="bg-[#f6f6f8] flex flex-col items-start relative h-full w-full overflow-hidden" data-name="Social Media - Calendar">
      <SectionCalendarContainer />
    </div>
  );
}