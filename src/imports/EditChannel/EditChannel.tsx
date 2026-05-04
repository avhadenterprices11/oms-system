"use client";
import svgPaths from "./svg-v8t923fsu9";

function Container2() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[36px] left-0 not-italic text-[#0f172a] text-[30px] top-[-0.56px] tracking-[-0.75px] whitespace-nowrap">Chat</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24.002px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-0.78px] whitespace-nowrap">#engineering channel</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[63.993px] relative shrink-0 w-[164.227px]" data-name="Container">
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
      <div className="content-stretch flex items-start justify-between pr-[795.781px] relative size-full">
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
          <path d={svgPaths.p1ea50500} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p34f62700} fill="var(--fill-0, white)" id="Vector_2" opacity="0.6" />
          <path d={svgPaths.p1179c680} fill="var(--fill-0, white)" id="Vector_3" opacity="0.6" />
          <path d={svgPaths.p54d4e80} fill="var(--fill-0, white)" id="Vector_4" opacity="0.4" />
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
        <g clipPath="url(#clip0_2_5590)" id="Icon">
          <path d={svgPaths.p129e1a00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p831ad00} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p250f6780} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p368ba580} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_2_5590">
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
          <path d={svgPaths.p1c966500} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p1ee74680} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p10e98f80} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p2e77e500} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">People</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g clipPath="url(#clip0_2_5587)" id="Icon">
          <path d={svgPaths.p2d69ca00} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_2_5587">
            <rect fill="white" height="17.9948" width="17.9948" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g clipPath="url(#clip0_1_397)" id="Icon">
          <path d={svgPaths.p35891a80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p2732b200} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_1_397">
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
          <path d={svgPaths.p5590800} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.pb2f1300} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M8.9974 7.99769V15.9954" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
          <path d={svgPaths.p1e56f800} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M1.99942 6.99797H15.9954" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M5.99826 2.99913V6.99798" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M11.9965 2.99913V6.99798" id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
          <path d={svgPaths.p172c300} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p227fd180} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
          <path d={svgPaths.pc30a340} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p2e27ee00} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
          <path d={svgPaths.pe411b40} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p1d30cb00} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p2210d700} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.pfb6e880} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
          <path d={svgPaths.p31766000} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p17ffbf00} fill="var(--fill-0, #475569)" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
        <g clipPath="url(#clip0_1_417)" id="Icon">
          <path d={svgPaths.p306b1e80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_1_417">
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
          <path d={svgPaths.p3605ea80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p1d67ca00} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
          <path d={svgPaths.p307a100} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M6.99797 7.99769V10.9977" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M10.9968 7.99769V10.9977" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
          <path d={svgPaths.p870bf80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.p38b3cc00} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
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
          <path d={svgPaths.p273a7380} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.49957" />
          <path d="M1.99942 13.4961H15.9954" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#5048e5] h-[45.981px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[962.01px] w-[223.446px]" data-name="Button">
      <Icon15 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.49px] not-italic text-[14px] text-center text-white top-[14.65px] whitespace-nowrap">Upload document</p>
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
        <g clipPath="url(#clip0_1_370)" id="Icon">
          <path d={svgPaths.p35a8ef0} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49984" />
          <path d={svgPaths.p2e1fb780} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49984" />
        </g>
        <defs>
          <clipPath id="clip0_1_370">
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
    <div className="absolute left-[7.99px] size-[20px] top-[7.99px]" data-name="Icon">
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

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[24.444px] items-start left-[32px] top-[32px] w-[496.007px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[20px]">Edit Channel — #engineering</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[32px] top-[60.43px] w-[496.007px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[14px]">Update channel settings and manage members</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[496.007px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Channel Name</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[8px] w-[496.007px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[14px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">engineering</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] h-[58.889px] items-start left-0 top-0 w-[496.007px]" data-name="Container">
      <Label />
      <TextInput1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[58.889px] left-[32px] top-[101.09px] w-[496.007px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[496.007px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Description</p>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white h-[70px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Text Area">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] h-[91.111px] items-start left-0 top-0 w-[496.007px]" data-name="Container">
      <Label1 />
      <TextArea />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[91.111px] left-[32px] top-[175.98px] w-[496.007px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[496.007px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Type</p>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#f8fafc] h-[37.778px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Public</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] h-[58.889px] items-start left-0 top-0 w-[496.007px]" data-name="Container">
      <Label2 />
      <TextInput2 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[58.889px] left-[32px] top-[283.09px] w-[496.007px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[32px] top-[361.98px] w-[496.007px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Members (8)</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[13.997px] shrink-0 size-[27.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">AR</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Ashwini Reddy</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">VP Engineering</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[93.403px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[131.398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#f8fafc] h-[45.434px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11.997px] pr-[11.996px] relative size-full">
        <Container35 />
        <Container40 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative rounded-[13.997px] shrink-0 size-[27.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(147, 197, 253) 0%, rgb(96, 165, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">RK</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[73.637px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Ravi Kumar</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[73.637px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Full Stack Dev</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[73.637px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[111.632px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f8fafc] h-[45.434px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11.997px] pr-[11.996px] relative size-full">
        <Container42 />
        <Container47 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative rounded-[13.997px] shrink-0 size-[27.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(252, 165, 165) 0%, rgb(248, 113, 113) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">SC</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Sarah Chen</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Senior Engineer</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[82.413px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[120.408px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#f8fafc] h-[45.434px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11.997px] pr-[11.996px] relative size-full">
        <Container49 />
        <Container54 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative rounded-[13.997px] shrink-0 size-[27.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(134, 239, 172) 0%, rgb(74, 222, 128) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">MT</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Michael Torres</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">DevOps Lead</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[93.238px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[131.233px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f8fafc] h-[45.434px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11.997px] pr-[11.996px] relative size-full">
        <Container56 />
        <Container61 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative rounded-[13.997px] shrink-0 size-[27.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(253, 230, 138) 0%, rgb(251, 191, 36) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">EP</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[69.748px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Emily Park</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[69.748px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Frontend Dev</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[69.748px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[107.743px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#f8fafc] h-[45.434px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11.997px] pr-[11.996px] relative size-full">
        <Container63 />
        <Container68 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative rounded-[13.997px] shrink-0 size-[27.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(165, 180, 252) 0%, rgb(129, 140, 248) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">JL</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[68.481px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">James Lee</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[68.481px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Backend Dev</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[68.481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[106.476px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#f8fafc] h-[45.434px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11.997px] pr-[11.996px] relative size-full">
        <Container70 />
        <Container75 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative rounded-[13.997px] shrink-0 size-[27.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(249, 168, 212) 0%, rgb(244, 114, 182) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">PR</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Priya Rao</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">QA Engineer</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[64.679px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container80 />
        <Container81 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[102.674px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container78 />
        <Container79 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#f8fafc] h-[45.434px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11.997px] pr-[11.996px] relative size-full">
        <Container77 />
        <Container82 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative rounded-[13.997px] shrink-0 size-[27.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(110, 231, 183) 0%, rgb(52, 211, 153) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">TG</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[85.59px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Tomas Garcia</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[85.59px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Tech Lead</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[85.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container87 />
        <Container88 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[123.585px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container85 />
        <Container86 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#f8fafc] h-[45.434px] relative rounded-[8px] shrink-0 w-[496.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11.997px] pr-[11.996px] relative size-full">
        <Container84 />
        <Container89 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.998px] h-[200px] items-start left-[32px] overflow-clip top-[388.09px] w-[496.007px]" data-name="Container">
      <Container34 />
      <Container41 />
      <Container48 />
      <Container55 />
      <Container62 />
      <Container69 />
      <Container76 />
      <Container83 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-dashed h-[33.212px] left-[32px] rounded-[8px] top-[600.09px] w-[129.375px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[64.49px] not-italic text-[#5048e5] text-[13px] text-center top-[7.99px] whitespace-nowrap">+ Add Members</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[20px] w-[496.007px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#dc2626] text-[12px] tracking-[0.5px] uppercase">Danger Zone</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white border-[#fca5a5] border-[0.556px] border-solid h-[37.778px] left-0 rounded-[8px] top-[44.44px] w-[152.708px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[76px] not-italic text-[#dc2626] text-[14px] text-center top-[10px] whitespace-nowrap">Archive Channel</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute border-[#fee2e2] border-solid border-t-[0.556px] h-[82.778px] left-[32px] top-[653.3px] w-[496.007px]" data-name="Container">
      <Container91 />
      <Button2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[88.134px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#5048e5] h-[37.778px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2)] shrink-0 w-[136.901px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Save Changes</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[58.333px] items-start justify-end left-[32px] pt-[20.556px] top-[760.07px] w-[496.007px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white h-[785.773px] relative rounded-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[560px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container24 />
        <Container25 />
        <Container26 />
        <Container28 />
        <Container30 />
        <Container32 />
        <Container33 />
        <Button1 />
        <Container90 />
        <Container92 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[924.444px] items-center justify-center left-0 px-[536.667px] top-0 w-[1633.333px]" data-name="Container">
      <Container23 />
    </div>
  );
}

export default function EditChannel() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Edit Channel">
      <Body />
      <Sidebar />
      <Header />
      <Container22 />
    </div>
  );
}