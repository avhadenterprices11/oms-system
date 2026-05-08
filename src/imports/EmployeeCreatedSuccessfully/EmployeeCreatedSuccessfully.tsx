"use client";
import svgPaths from "./svg-fy052vnjwd";
import { useRouter } from "next/navigation";

function Container2() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[36px] left-0 not-italic text-[#0f172a] text-[30px] top-[-0.55px] tracking-[-0.75px] whitespace-nowrap">People</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24.002px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-0.78px] whitespace-nowrap">Directory</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[63.993px] relative shrink-0 w-[97.005px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.993px] items-start relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[63.993px] opacity-30 relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[863.004px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[960px] items-start left-[256px] overflow-clip pt-[20px] px-[31.997px] top-0 w-[1024.002px]" data-name="Main Content">
      <Container />
    </div>
  );
}

function Container4() {
  return <div className="absolute h-0 left-0 top-[960px] w-[1280px]" data-name="Container" />;
}

function Body() {
  return (
    <div className="absolute h-[1023.993px] left-0 overflow-clip top-[63.99px] w-[1280px]" data-name="Body">
      <MainContent />
      <Container4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.peea9c80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p13530080} fill="var(--fill-0, white)" id="Vector_2" opacity="0.6" />
          <path d={svgPaths.p36bf8a00} fill="var(--fill-0, white)" id="Vector_3" opacity="0.6" />
          <path d={svgPaths.p26016a00} fill="var(--fill-0, white)" id="Vector_4" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.998px] pr-[11.007px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-0 w-[38.533px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.67px] w-[38.533px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[38.533px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.997px] items-center pl-[23.993px] relative size-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g clipPath="url(#clip0_15_15039)" id="Icon">
          <path d={svgPaths.p658acb0} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p39d09a80} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p21859e00} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p2403000} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_15_15039">
            <rect fill="white" height="17.9948" width="17.9948" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p37b7ea00} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p3c3cae00} id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p1c70ed00} id="Vector_3" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p1b68b180} id="Vector_4" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">People</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g clipPath="url(#clip0_15_15028)" id="Icon">
          <path d={svgPaths.p1d3dff80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_15_15028">
            <rect fill="white" height="17.9948" width="17.9948" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g clipPath="url(#clip0_15_15065)" id="Icon">
          <path d={svgPaths.p15e57f80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.pfa79300} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_15_15065">
            <rect fill="white" height="17.9948" width="17.9948" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.pd200200} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p20f6d600} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M8.99609 7.99805V15.9957" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.pa263600} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M2 6.99805H15.996" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M6 3V6.99884" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M11.9961 3V6.99884" id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p23bceb00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p1b6b7700} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">CRM</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p14b95700} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.pa39bde0} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon8 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Client Delivery</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p289a5d00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p3c2d2f80} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p354d3f80} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p3314f680} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Social Media</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p3032ca00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p3d3f2d00} fill="var(--fill-0, #475569)" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g clipPath="url(#clip0_15_15025)" id="Icon">
          <path d={svgPaths.p1bd8f80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_15_15025">
            <rect fill="white" height="17.9948" width="17.9948" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon11 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Documents</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p20066c80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M5 4.99942V3H12.9977V4.99942" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon12 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Leave</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p9803e00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M6.99609 7.99805V10.998" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M10.9961 7.99805V10.998" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon13 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[33.325px] relative shrink-0 w-[223.446px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[12px] not-italic text-[#94a3b8] text-[11px] top-[16px] tracking-[0.6px] uppercase whitespace-nowrap">System</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p7cea900} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p10ba3c00} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon14 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[609.193px] relative shrink-0 w-full" data-name="Navigation">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[3.993px] items-start pl-[15.998px] pt-[7.995px] relative size-full">
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
          <Link11 />
          <Link12 />
          <Container11 />
          <Link13 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697.179px] items-start left-0 top-0 w-[255.443px]" data-name="Container">
      <Container6 />
      <Navigation />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[20px] size-[17.995px] top-[13.99px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p4a5e680} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.49957" />
          <path d="M2 13.4961H15.996" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#5048e5] h-[45.981px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[962.01px] w-[223.446px]" data-name="Button">
      <Icon15 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.5px] not-italic text-[14px] text-center text-white top-[14.65px] whitespace-nowrap">Upload document</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r-[0.556px] border-solid h-[1023.993px] left-0 top-0 w-[255.998px]" data-name="Sidebar">
      <Container5 />
      <Button />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9983 15.9983">
        <g clipPath="url(#clip0_15_15008)" id="Icon">
          <path d={svgPaths.p35a8ef0} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49984" />
          <path d="M11 10.998L14.5 14.498" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49984" />
        </g>
        <defs>
          <clipPath id="clip0_15_15008">
            <rect fill="white" height="15.9983" width="15.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[320.894px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Search resources, tasks, or teammates...</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f8fafc] h-[33.767px] relative rounded-[8px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[16.554px] pr-[0.556px] py-[0.556px] relative size-full">
        <Icon16 />
        <TextInput />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[53.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative rounded-[17.999px] shrink-0 size-[35.998px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[35.998px] items-center left-[103.99px] top-0 w-[99.991px]" data-name="Container">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[7.99px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf42a00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
          <path d={svgPaths.p35259c00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#ef4444] border-[1.111px] border-solid border-white left-[23px] rounded-[3.498px] size-[6.997px] top-[6px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon17 />
      <Container20 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M3 4H17V14H6L3 17V4Z" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] pl-[7.995px] pr-[8.003px] rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[203.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
        <Container19 />
        <Container21 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.993px] items-center justify-between left-[256px] pb-[0.556px] pl-[31.997px] pr-[31.996px] top-0 w-[1377.335px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[31.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9965 31.9965">
        <g id="Icon">
          <path d={svgPaths.p9f5e280} id="Vector" stroke="var(--stroke-0, #059669)" strokeWidth="2.99967" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex items-center justify-center left-[208px] px-[15.998px] rounded-[31.997px] size-[63.993px] top-[32px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[24.444px] items-start left-[32px] top-[111.99px] w-[416.007px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[20px] text-center">Employee Created Successfully</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[32px] top-[144.43px] w-[416.007px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[14px] text-center">Ravi Kumar has been added to the system.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[27.014px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Role</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[128.264px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Full Stack Developer</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[28.663px] items-center justify-between pb-[0.556px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[73.655px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Department</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[75.425px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Engineering</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[28.663px] items-center justify-between pb-[0.556px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[67.118px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Reports To</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[93.403px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Ashwini Reddy</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[28.663px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[0.556px] relative size-full">
          <Text4 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[62.101px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[71.753px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Apr 1, 2026</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[28.663px] items-center justify-between pb-[0.556px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[53.498px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Modules</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#ede9fe] h-[17.326px] relative rounded-[9999px] shrink-0 w-[88.099px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[10px] not-italic text-[#5048e5] text-[11px] top-[2px] whitespace-nowrap">7/12 enabled</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[29.323px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text8 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col h-[177.083px] items-start left-[32px] pb-[0.556px] pt-[16.554px] px-[16.554px] rounded-[12px] top-[185.09px] w-[416.007px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Button1() {
  const router = useRouter();
  return (
    <div 
      onClick={() => router.push("/people/directory?edit=true")}
      className="bg-[#5048e5] h-[36.667px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2)] shrink-0 w-[416.007px] cursor-pointer" 
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">View Profile</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[416.007px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Add Another</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32.101px] relative shrink-0 w-[110.885px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[55px] not-italic text-[#5048e5] text-[13px] text-center top-[7.99px] whitespace-nowrap">Go to Directory</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[126.545px] items-center left-[32px] top-[386.16px] w-[416.007px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white h-[544.705px] relative rounded-[20px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-[480px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container24 />
        <Container25 />
        <Container26 />
        <Container27 />
        <Container33 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[924.444px] items-center justify-center left-0 px-[576.667px] top-0 w-[1633.333px]" data-name="Container">
      <Container23 />
    </div>
  );
}

export default function EmployeeCreatedSuccessfully() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Employee Created Successfully">
      <Body />
      <Sidebar />
      <Header />
      <Container22 />
    </div>
  );
}