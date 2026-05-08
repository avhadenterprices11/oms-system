"use client";
import svgPaths from "./svg-sotug7kfcq";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";
import imgSarahChen from "./2c4523c262718dfb910eb4a04180417362ace7a1.png";
import imgMikeRoss from "./951f403b81f39779f11f6f3e0b32bfbc570df59d.png";
import imgHarveySpecter from "./7800db741b95b83dcd89dc440552a13c9c8ce327.png";
import imgSarahChen1 from "./75767f076552572a81d954a1c085899543b45490.png";

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
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, #5048E5)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Social Accounts</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-l border-solid inset-0 pointer-events-none rounded-[8px]" />
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
      <div className="flex flex-col font-['Public_Sans:Extra_Bold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px] w-[221.7px]">
        <p className="leading-[36px]">Social Accounts</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[556.48px]">
        <p className="leading-[24px]">Manage and monitor authentication for all your connected social platforms.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[556.48px]" data-name="Container">
      <Heading />
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative content-stretch flex items-center justify-between w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[9px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 9">
        <g id="Container">
          <path d={svgPaths.p1b72c490} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[45.14px]">
          <p className="leading-[20px]">Filters:</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[13px] py-[9px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="SVG">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-start justify-center left-0 overflow-clip pl-[90px] pr-[9px] py-[8.5px] top-0 w-[120px]" data-name="image fill">
      <Svg1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[17px] overflow-clip top-1/2" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[85.88px]">
        <p className="leading-[20px]">All Platforms</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white h-[38px] relative rounded-[12px] shrink-0 w-[120px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <ImageFill />
      <Container32 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="SVG">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-start justify-center left-0 overflow-clip pl-[94px] pr-[9px] py-[8.5px] top-0 w-[124px]" data-name="image fill">
      <Svg2 />
    </div>
  );
}

function Container33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[17px] overflow-clip pr-[21.94px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[68.06px]">
        <p className="leading-[20px]">All Brands</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[12px] shrink-0 w-[124px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <ImageFill1 />
      <Container33 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[14px] text-center w-[55.11px]">
        <p className="leading-[20px]">Clear all</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative content-stretch flex gap-[12px] items-center w-full" data-name="Container">
      <BackgroundBorder />
      <Options />
      <Options1 />
      <Button1 />
    </div>
  );
}

function Cell() {
  return (
    <div className="relative w-full min-w-0" data-name="Cell">
      <div className="content-stretch flex flex-col items-start py-[16px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">Platform</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative w-full min-w-0" data-name="Cell">
      <div className="content-stretch flex flex-col items-start py-[16px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">Brand</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative w-full min-w-0" data-name="Cell">
      <div className="content-stretch flex flex-col items-start py-[16px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">Account Identifier</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative w-full min-w-0" data-name="Cell">
      <div className="content-stretch flex flex-col items-start py-[16px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">Owner</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative w-full min-w-0" data-name="Cell">
      <div className="content-stretch flex flex-col items-start py-[16px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#f8fafc] border-b border-[#e2e8f0] relative w-full" data-name="Header → Row">
      <div className="grid grid-cols-[1.2fr_1fr_1.2fr_1fr_0.8fr_60px] items-center px-[24px] py-[12px] w-full">
        <Cell />
        <Cell1 />
        <Cell2 />
        <Cell3 />
        <Cell4 />
        <div className="w-[60px]" />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.5">
        <g id="Container">
          <path d={svgPaths.p211d8500} fill="var(--fill-0, #DB2777)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#fce7f3] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Background">
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[67.28px]">
        <p className="leading-[20px]">Instagram</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative w-full min-w-0" data-name="Data">
      <Background />
      <Container35 />
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[22.5px] relative w-full min-w-0" data-name="Data">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-full">
        <p className="leading-[20px]">Indigo Luxury</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[22.5px] relative w-full min-w-0" data-name="Data">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5048e5] text-[14px] w-full">
        <p className="leading-[20px]">@indigo_lux</p>
      </div>
    </div>
  );
}

function SarahChen() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[24px]" data-name="Sarah Chen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSarahChen.src} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <SarahChen />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[75.23px]">
        <p className="leading-[20px]">Sarah Chen</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative w-full min-w-0" data-name="Data">
      <Background1 />
      <Container36 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-end px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#166534] text-[12px] text-right w-[60.86px]">
        <p className="leading-[16px]">Connected</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[22.5px] relative w-full min-w-0" data-name="Data">
      <Background2 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container37 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-end py-[20.5px] relative w-full min-w-0" data-name="Data">
      <Button2 />
    </div>
  );
}

function Row() {
  return (
    <div className="border-b border-[#f1f5f9] hover:bg-slate-50 transition-colors relative w-full" data-name="Row">
      <div className="grid grid-cols-[1.2fr_1fr_1.2fr_1fr_0.8fr_60px] items-center px-[24px] py-[8px] w-full">
        <Data />
        <Data1 />
        <Data2 />
        <Data3 />
        <Data4 />
        <Data5 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1f7000} fill="var(--fill-0, #2563EB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Background">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[64.22px]">
        <p className="leading-[20px]">Facebook</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex gap-[12px] items-center relative size-full">
        <Background3 />
        <Container39 />
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-full">
          <p className="leading-[20px]">Indigo Home</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5048e5] text-[14px] w-full">
          <p className="leading-[20px]">Indigo Home Official</p>
        </div>
      </div>
    </div>
  );
}

function MikeRoss() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[24px]" data-name="Mike Ross">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMikeRoss.src} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <MikeRoss />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[65.98px]">
        <p className="leading-[20px]">Mike Ross</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex gap-[8px] items-center relative size-full">
        <Background4 />
        <Container40 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-end px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#166534] text-[12px] text-right w-[60.86px]">
        <p className="leading-[16px]">Connected</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <Background5 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container41 />
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data">
      <div className="content-stretch flex flex-col items-end py-[20.5px] relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="border-b border-[#f1f5f9] hover:bg-slate-50 transition-colors relative w-full" data-name="Row">
      <div className="grid grid-cols-[1.2fr_1fr_1.2fr_1fr_0.8fr_60px] items-center px-[24px] py-[8px] w-full">
        <Data6 />
        <Data7 />
        <Data8 />
        <Data9 />
        <Data10 />
        <Data11 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.25">
        <g id="Container">
          <path d={svgPaths.p56f7860} fill="var(--fill-0, #4F46E5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e0e7ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Background">
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[56.41px]">
        <p className="leading-[20px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex gap-[12px] items-center relative size-full">
        <Background6 />
        <Container43 />
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-full">
          <p className="leading-[20px]">Indigo CRM</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5048e5] text-[14px] w-full">
          <p className="leading-[20px]">Indigo CRM Solutions</p>
        </div>
      </div>
    </div>
  );
}

function HarveySpecter() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[24px]" data-name="Harvey Specter">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHarveySpecter.src} />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <HarveySpecter />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[101.28px]">
        <p className="leading-[20px]">Harvey Specter</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex gap-[8px] items-center relative size-full">
        <Background7 />
        <Container44 />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center justify-end px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#92400e] text-[12px] text-right w-[91.77px]">
        <p className="leading-[16px]">Re-auth Needed</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <Background8 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container45 />
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data">
      <div className="content-stretch flex flex-col items-end py-[20.5px] relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="border-b border-[#f1f5f9] hover:bg-slate-50 transition-colors relative w-full" data-name="Row">
      <div className="grid grid-cols-[1.2fr_1fr_1.2fr_1fr_0.8fr_60px] items-center px-[24px] py-[8px] w-full">
        <Data12 />
        <Data13 />
        <Data14 />
        <Data15 />
        <Data16 />
        <Data17 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p19992a40} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Background">
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[9.86px]">
        <p className="leading-[20px]">X</p>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex gap-[12px] items-center relative size-full">
        <Background9 />
        <Container47 />
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-full">
          <p className="leading-[20px]">Indigo Tech</p>
        </div>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5048e5] text-[14px] w-full">
          <p className="leading-[20px]">@indigotech_hq</p>
        </div>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#5048e5] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative w-full" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-[12.67px]">
        <p className="leading-[normal]">TT</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Background11 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[69.3px]">
        <p className="leading-[20px]">Tech Team</p>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex gap-[8px] items-center relative size-full">
        <Background10 />
        <Container48 />
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-end px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#166534] text-[12px] text-right w-[60.86px]">
        <p className="leading-[16px]">Connected</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <Background12 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container49 />
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data">
      <div className="content-stretch flex flex-col items-end py-[20.5px] relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="border-b border-[#f1f5f9] hover:bg-slate-50 transition-colors relative w-full" data-name="Row">
      <div className="grid grid-cols-[1.2fr_1fr_1.2fr_1fr_0.8fr_60px] items-center px-[24px] py-[8px] w-full">
        <Data18 />
        <Data19 />
        <Data20 />
        <Data21 />
        <Data22 />
        <Data23 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p11bcbe90} fill="var(--fill-0, #DC2626)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Background">
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[56.44px]">
        <p className="leading-[20px]">YouTube</p>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex gap-[12px] items-center relative size-full">
        <Background13 />
        <Container51 />
      </div>
    </div>
  );
}

function Data25() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-full">
          <p className="leading-[20px]">Indigo Academy</p>
        </div>
      </div>
    </div>
  );
}

function Data26() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5048e5] text-[14px] w-full">
          <p className="leading-[20px]">Indigo Academy TV</p>
        </div>
      </div>
    </div>
  );
}

function SarahChen1() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[24px]" data-name="Sarah Chen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSarahChen1.src} />
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <SarahChen1 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] w-[75.23px]">
        <p className="leading-[20px]">Sarah Chen</p>
      </div>
    </div>
  );
}

function Data27() {
  return (
    <div className="relative shrink-0 w-[142.81px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background14 />
        <Container52 />
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-end px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#166534] text-[12px] text-right w-[60.86px]">
        <p className="leading-[16px]">Connected</p>
      </div>
    </div>
  );
}

function Data28() {
  return (
    <div className="relative w-full min-w-0" data-name="Data">
      <div className="content-stretch flex flex-col items-start py-[22.5px] relative size-full">
        <Background15 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container53 />
    </div>
  );
}

function Data29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data">
      <div className="content-stretch flex flex-col items-end py-[20.5px] relative size-full">
        <Button6 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="border-b border-[#f1f5f9] hover:bg-slate-50 transition-colors relative w-full" data-name="Row">
      <div className="grid grid-cols-[1.2fr_1fr_1.2fr_1fr_0.8fr_60px] items-center px-[24px] py-[8px] w-full">
        <Data24 />
        <Data25 />
        <Data26 />
        <Data27 />
        <Data28 />
        <Data29 />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] size-full">
        <HeaderRow />
        <Body1 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[185.94px]">
          <p className="leading-[20px]">Showing 1 to 5 of 5 accounts</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center opacity-50 px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] text-center w-[56.19px]">
        <p className="leading-[20px]">Previous</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] text-center w-[31.28px]">
        <p className="leading-[20px]">Next</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[24px] relative size-full">
          <Container54 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-white left-0 right-0 rounded-[24px] top-[166px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Table />
        <BackgroundHorizontalBorder />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="flex flex-col gap-[20px] relative w-full" data-name="Container">
      <Container26 />
      <Container29 />
      <div className="bg-white rounded-[20px] border border-[#e2e8f0] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden" data-name="Background+Border+Shadow">
        <Table />
        <BackgroundHorizontalBorder />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Main Content Area">
      <HeaderTopNavigation />
      <Container24 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex min-h-screen items-start overflow-clip relative shrink-0 w-full" data-name="Body">
      <AsideSidebarNavigation />
      <MainContentArea />
    </div>
  );
}

export default function SocialMediaSocialAccounts() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-col items-start relative size-full" data-name="Social Media - social accounts">
      <Body />
    </div>
  );
}