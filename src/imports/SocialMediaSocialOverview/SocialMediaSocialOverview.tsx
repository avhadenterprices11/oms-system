"use client";
import svgPaths from "./svg-a58e20bqk4";
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
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #5048E5)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Social Overview</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-l border-solid inset-0 pointer-events-none rounded-[8px]" />
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
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #475569)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Calendar</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[44px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[44px] tracking-[-1.1px] w-[335.73px]">
        <p className="leading-[44px]">Social Overview</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] w-[444.27px]">
        <p className="leading-[24px] mb-0">Monitor your presence across all connected platforms with</p>
        <p className="leading-[24px]">architectural precision.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[444.27px]" data-name="Container">
      <Heading />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
        <g id="Container">
          <path d={svgPaths.p2a676800} fill="var(--fill-0, #3323CC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container27 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#3323cc] text-[16px] text-center w-[106.55px]">
        <p className="leading-[24px]">Export Report</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function SectionDashboardHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Section - Dashboard Header">
      <Container24 />
      <Container26 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[42px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 44">
        <g id="Overlay">
          <rect fill="var(--fill-0, #4F46E5)" fillOpacity="0.1" height="44" rx="8" width="42" />
          <path d={svgPaths.p6854dc0} fill="var(--fill-0, #3525CD)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] w-[33.08px]">
        <p className="leading-[16px]">+12%</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[25px] right-[25px] top-[25px]" data-name="Container">
      <Overlay1 />
      <Background />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[89px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[11px] tracking-[1.1px] uppercase w-[121.81px]">
        <p className="leading-[16.5px]">Total Scheduled</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[109.5px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[30px] w-[52.13px]">
        <p className="leading-[36px]">142</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f1f5f9] flex-[1_0_0] h-[4px] min-w-px overflow-clip relative rounded-[12px]" data-name="Background">
      <div className="absolute bg-[#3525cd] inset-[0_33.34%_0_0]" data-name="Background" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25px] right-[25px] top-[161.5px]" data-name="Container">
      <Background1 />
    </div>
  );
}

function TotalScheduled() {
  return (
    <div className="bg-white col-1 h-[195px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Total Scheduled">
      <div aria-hidden="true" className="absolute border border-[rgba(199,196,216,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container28 />
      <Container29 />
      <Heading1 />
      <Container30 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Overlay">
          <rect fill="var(--fill-0, #D0E1FB)" fillOpacity="0.3" height="44" rx="8" width="44" />
          <path d={svgPaths.pbef6f00} fill="var(--fill-0, #38485D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[33.98px]">
        <p className="leading-[16px]">Static</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[25px] right-[25px] top-[25px]" data-name="Container">
      <Overlay2 />
      <Background2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[89px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[11px] tracking-[1.1px] uppercase w-[71.58px]">
        <p className="leading-[16.5px]">Published</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[109.5px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[30px] w-[79.67px]">
        <p className="leading-[36px]">2,841</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[153.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[11px] w-[101.75px]">
        <p className="leading-[16.5px]">Last 30 days active</p>
      </div>
    </div>
  );
}

function Published() {
  return (
    <div className="bg-white col-2 h-[195px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Published">
      <div aria-hidden="true" className="absolute border border-[rgba(199,196,216,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container31 />
      <Container32 />
      <Heading2 />
      <Container33 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Overlay">
          <rect fill="var(--fill-0, #FFDAD6)" fillOpacity="0.4" height="44" rx="8" width="44" />
          <path d={svgPaths.p3795bfe0} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(255,218,214,0.2)] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] w-[25.5px]">
        <p className="leading-[16px]">-3%</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[25px] right-[25px] top-[25px]" data-name="Container">
      <Overlay3 />
      <Overlay4 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[89px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[11px] tracking-[1.1px] uppercase w-[90.33px]">
        <p className="leading-[16.5px]">Failed Posts</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[109.5px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[30px] w-[39.77px]">
        <p className="leading-[36px]">08</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[153.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[11px] w-[153.06px]">
        <p className="leading-[16.5px]">Requires immediate attention</p>
      </div>
    </div>
  );
}

function Failed() {
  return (
    <div className="bg-white col-3 h-[195px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Failed">
      <div aria-hidden="true" className="absolute border border-[rgba(199,196,216,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container34 />
      <Container35 />
      <Heading3 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bottom-[-16px] h-[105px] right-[-16px] w-[90px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 105">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p7744640} fill="var(--fill-0, #131B2E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="h-[45px] relative shrink-0 w-[42px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 45">
        <g id="Overlay">
          <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="45" rx="8" width="42" />
          <path d={svgPaths.p20d1b620} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex items-start left-[24px] right-[24px] top-[24px]" data-name="Container">
      <Overlay5 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[88px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2dfff] text-[11px] tracking-[1.1px] uppercase w-[70.34px]">
        <p className="leading-[16.5px]">Upcoming</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[108.5px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white w-[38.72px]">
        <p className="leading-[36px]">24</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[152.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(226,223,255,0.8)] w-[110.58px]">
        <p className="leading-[16.5px]">Next 48 hours queue</p>
      </div>
    </div>
  );
}

function Upcoming() {
  return (
    <div className="bg-[#3525cd] col-4 h-[195px] justify-self-stretch overflow-clip relative rounded-[24px] row-1 shrink-0" data-name="Upcoming">
      <Container37 />
      <Container38 />
      <Container39 />
      <Heading4 />
      <Container40 />
    </div>
  );
}

function SectionMetricsBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_195px] relative shrink-0 w-full" data-name="Section - Metrics Bento Grid">
      <TotalScheduled />
      <Published />
      <Failed />
      <Upcoming />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[20px] tracking-[-0.5px] w-[208.25px]">
        <p className="leading-[28px]">{`Growth & Engagement`}</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[12px] text-center w-[42.97px]">
        <p className="leading-[16px]">Weekly</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] text-center w-[47.63px]">
        <p className="leading-[16px]">Monthly</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f2f3ff] content-stretch flex items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative size-full">
          <Heading5 />
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#131b2e] content-stretch flex flex-col items-start left-[-35.92%] opacity-0 px-[8px] py-[4px] right-[-35.86%] rounded-[2px] top-[-40px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[45.17px]">
        <p className="leading-[15px]">Mon: 1.2k</p>
      </div>
    </div>
  );
}

function MockChartBars() {
  return (
    <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[108.8px] min-w-px relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Mock Chart Bars">
      <Background5 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-[#131b2e] content-stretch flex flex-col items-start left-[-35.36%] opacity-0 px-[8px] py-[4px] right-[-35.3%] rounded-[2px] top-[-40px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[44.77px]">
        <p className="leading-[15px]">Thu: 3.4k</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#3525cd] flex-[1_0_0] h-[204px] min-w-px relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Background">
      <Background7 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f2f3ff] h-[320px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pl-[24px] pr-[24.02px] py-[24px] relative size-full">
          <MockChartBars />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[149.59px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[122.39px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <Background6 />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[163.19px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[231.19px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[108.8px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[136px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[176.8px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[149.59px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[190.39px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
          <div className="bg-[rgba(53,37,205,0.2)] flex-[1_0_0] h-[122.39px] min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Reach</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[20px] w-full">
        <p className="leading-[28px]">128.4k</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Interactions</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#3525cd] text-[20px] w-full">
        <p className="leading-[28px]">14.2k</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Followers</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[20px] w-full">
        <p className="leading-[28px]">42.1k</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Shares</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[20px] w-full">
        <p className="leading-[28px]">2.4k</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_47px] relative size-full">
        <Container43 />
        <Container46 />
        <Container49 />
        <Container52 />
      </div>
    </div>
  );
}

function ActivityChartPlaceholderMainPanel() {
  return (
    <div className="bg-white col-[1/span_8] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Activity Chart Placeholder / Main Panel">
      <div aria-hidden="true" className="absolute border border-[rgba(199,196,216,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[106px] pt-[33px] px-[33px] relative size-full">
        <Container41 />
        <Background4 />
        <Container42 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[28px]">Recent Activity</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Heading 4:margin">
      <Heading6 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, #38485D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#d0e1fb] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]" data-name="Background">
      <Container56 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[25.49px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[111.23px]">
        <p className="leading-[20px] mb-0">Summer Launch</p>
        <p className="leading-[20px]">Post</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#d0e1fb] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="bg-[#3525cd] rounded-[12px] shrink-0 size-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#38485d] text-[10px] w-[33.95px]">
        <p className="leading-[15px]">Posted</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Background9 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] w-[182.9px]">
        <p className="leading-[19.5px] mb-0">System automatically pushed</p>
        <p className="leading-[19.5px]">{`content to LinkedIn & Instagram.`}</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#777587] text-[10px] w-[71.97px]">
        <p className="leading-[15px]">14 minutes ago</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[202.67px]" data-name="Container">
      <Container58 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function ItemPosted() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Item: Posted">
      <Background8 />
      <div className="absolute bg-[rgba(199,196,216,0.3)] bottom-0 left-[16px] top-[40px] w-px" data-name="Vertical Divider" />
      <Container57 />
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p18247600} fill="var(--fill-0, #3525CD)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]" data-name="Background">
      <Container62 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[137.72px]">
        <p className="leading-[20px]">Q3 Roadmap Teaser</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#3525cd] text-[10px] w-[35.27px]">
        <p className="leading-[15px]">Review</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Background11 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] w-[160.33px]">
        <p className="leading-[19.5px] mb-0">Content is pending manager</p>
        <p className="leading-[19.5px]">approval for Twitter thread.</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#777587] text-[10px] w-[56.73px]">
        <p className="leading-[15px]">2 hours ago</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[196.99px]" data-name="Container">
      <Container64 />
      <Container66 />
      <Container67 />
    </div>
  );
}

function ItemReview() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Item: Review">
      <Background10 />
      <div className="absolute bg-[rgba(199,196,216,0.3)] bottom-0 left-[16px] top-[40px] w-px" data-name="Vertical Divider" />
      <Container63 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.6667">
        <g id="Container">
          <path d={svgPaths.pc531a80} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(255,218,214,0.3)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]" data-name="Overlay">
      <Container68 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[21.55px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[127.92px]">
        <p className="leading-[20px] mb-0">Product Showcase</p>
        <p className="leading-[20px]">Video</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#93000a] text-[10px] w-[29.2px]">
        <p className="leading-[15px]">Failed</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Background12 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] w-[169.44px]">
        <p className="leading-[19.5px] mb-0">API Authentication expired for</p>
        <p className="leading-[19.5px]">Facebook Business account.</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#777587] text-[10px] w-[56.61px]">
        <p className="leading-[15px]">5 hours ago</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[202.67px]" data-name="Container">
      <Container70 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function ItemFailed() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Item: Failed">
      <Overlay6 />
      <div className="absolute bg-[rgba(199,196,216,0.3)] bottom-0 left-[16px] top-[40px] w-px" data-name="Vertical Divider" />
      <Container69 />
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p2541af00} fill="var(--fill-0, #3525CD)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]" data-name="Background">
      <Container74 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-[125.7px]">
        <p className="leading-[20px]">Holiday Promotion</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#3525cd] text-[10px] w-[35.27px]">
        <p className="leading-[15px]">Review</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Background14 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] w-[156.28px]">
        <p className="leading-[19.5px] mb-0">Draft created by Alex Chen.</p>
        <p className="leading-[19.5px]">Scheduled for next week.</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#777587] text-[10px] w-[88.28px]">
        <p className="leading-[15px]">Yesterday at 18:30</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[184.97px]" data-name="Container">
      <Container76 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function ItemReview1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Item: Review">
      <Background13 />
      <Container75 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <ItemPosted />
      <ItemReview />
      <ItemFailed />
      <ItemReview1 />
    </div>
  );
}

function ButtonMargin() {
  return <div className="h-[66px] shrink-0 w-full" data-name="Button:margin" />;
}

function RecentActivityFeed() {
  return (
    <div className="bg-[#f2f3ff] col-[9/span_4] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Recent Activity Feed">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Heading4Margin />
        <Container55 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function SectionMainDashboardContent() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_606px] relative shrink-0 w-full" data-name="Section - Main Dashboard Content">
      <ActivityChartPlaceholderMainPanel />
      <RecentActivityFeed />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="h-[960px] relative shrink-0 w-full" data-name="Main Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <SectionDashboardHeader />
        <SectionMetricsBentoGrid />
        <SectionMainDashboardContent />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Main Content Area">
      <HeaderTopNavigation />
      <MainCanvas />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex h-[1072px] items-start overflow-clip relative shrink-0 w-full" data-name="Body">
      <AsideSidebarNavigation />
      <MainContentArea />
    </div>
  );
}

export default function SocialMediaSocialOverview() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-col items-start relative size-full" data-name="Social Media - Social Overview">
      <Body />
    </div>
  );
}