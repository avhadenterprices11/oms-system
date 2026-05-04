"use client";
import svgPaths from "./svg-rrmv78i2vu";

function Link() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[50.694px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[4.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[117.83px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Portal v2 Redesign</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[5.998px] h-[16.111px] items-center left-[32px] top-[20px] w-[960.009px]" data-name="Container">
      <Link />
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex h-[17.326px] items-start left-[244.07px] px-[10px] py-[2px] rounded-[9999px] top-[6.89px] w-[75.139px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[11px] tracking-[-0.5px] whitespace-nowrap">In Progress</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#fef3c7] content-stretch flex h-[17.326px] items-start left-[331.21px] px-[10px] py-[2px] rounded-[9999px] top-[6.89px] w-[42.986px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[11px] tracking-[-0.5px] whitespace-nowrap">High</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[374.193px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-0 not-italic text-[#0f172a] text-[26px] top-0 tracking-[-0.5px] whitespace-nowrap">{`Portal v2 Redesign `}</p>
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[142.821px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
          <span className="leading-[normal] text-[13px]">{`Owner: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#0f172a] text-[13px]">Ashwini Reddy</span>
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[137.865px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
          <span className="leading-[normal] text-[13px]">{`Deadline: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#0f172a] text-[13px]">May 1, 2026</span>
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[374.193px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.998px] items-center relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[55.217px] relative shrink-0 w-[374.193px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.995px] items-start relative size-full">
        <Heading />
        <Container3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[60.929px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[90.964px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[87.179px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Archive</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[37.778px] relative shrink-0 w-[259.071px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[55.217px] items-start justify-between left-[32px] top-[52.11px] w-[960.009px]" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[27.99px] top-[27.99px] w-[170.903px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.5px] uppercase">Team</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[33.889px] items-start left-[27.99px] top-[46.43px] w-[170.903px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[28px]">6</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[27.99px] top-[82.32px] w-[170.903px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">members</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#7c3aed] content-stretch flex items-center justify-center left-0 p-[1.667px] rounded-[13.997px] size-[27.995px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[13.997px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">A</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex items-center justify-center left-[20px] p-[1.667px] rounded-[13.997px] size-[27.995px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[13.997px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">R</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#059669] content-stretch flex items-center justify-center left-[40px] p-[1.667px] rounded-[13.997px] size-[27.995px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[13.997px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">P</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#d97706] content-stretch flex items-center justify-center left-[60px] p-[1.667px] rounded-[13.997px] size-[27.995px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[13.997px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">S</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#e11d48] content-stretch flex items-center justify-center left-[80px] p-[1.667px] rounded-[13.997px] size-[27.995px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[13.997px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">J</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#0891b2] content-stretch flex items-center justify-center left-[100px] p-[1.667px] rounded-[13.997px] size-[27.995px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[13.997px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">M</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[27.995px] left-[27.99px] top-[104.76px] w-[170.903px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[161.858px] left-0 rounded-[20px] top-0 w-[228.003px]" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[27.99px] top-[27.99px] w-[170.903px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.5px] uppercase">Tasks</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[33.889px] items-start left-[27.99px] top-[46.43px] w-[170.903px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[28px]">28</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[27.99px] top-[82.32px] w-[170.903px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">10 completed</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[161.858px] left-[244px] rounded-[20px] top-0 w-[228.003px]" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[27.99px] top-[27.99px] w-[170.903px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.5px] uppercase">Progress</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[33.889px] items-start left-[27.99px] top-[46.43px] w-[170.903px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[28px]">68%</p>
    </div>
  );
}

function Container25() {
  return <div className="bg-[#5048e5] h-[7.995px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Container24() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex flex-col h-[7.995px] items-start left-[27.99px] pr-[54.696px] rounded-[4px] top-[88.32px] w-[170.903px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[161.858px] left-[488px] rounded-[20px] top-0 w-[228.003px]" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.5px] uppercase">Budget</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[28.889px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[24px]">₹4.5L / ₹6L</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[3.993px] h-[161.858px] items-start left-[732.01px] pb-[0.556px] pt-[28.55px] px-[28.55px] rounded-[20px] top-0 w-[228.003px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[161.858px] left-[32px] top-[131.32px] w-[960.009px]" data-name="Container">
      <Container6 />
      <Container17 />
      <Container21 />
      <Container26 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[104.488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[14px] whitespace-nowrap">Overview</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[78.984px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[97.014px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Timeline</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[112.865px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Milestones</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[71.068px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Files</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[102.144px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[75.512px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Risks</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[90.859px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Activity</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[37.891px] items-start left-[32px] pb-[0.556px] top-[317.17px] w-[960.009px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[18.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Description</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[83.194px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-0 not-italic text-[#334155] text-[13px] top-[0.22px] w-[573px]">Redesign the internal portal with a new design system, improved navigation, and responsive layouts. The goal is to modernize the employee experience and reduce onboarding friction for new hires. This includes overhauling 15+ modules with consistent tokens, accessibility compliance, and mobile-first layouts.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white h-[174.627px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[15.998px] items-start pb-[0.556px] pt-[28.55px] px-[28.55px] relative size-full">
        <Container41 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[18.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Recent Tasks</p>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-0 pb-[10.556px] pt-[10px] px-[16px] top-0 w-[229.87px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Task</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-[229.87px] pb-[10.556px] pt-[10px] px-[16px] top-0 w-[112.578px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Status</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-[342.45px] pb-[10.556px] pt-[10px] px-[16px] top-0 w-[95.703px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Priority</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-[438.15px] pb-[10.556px] pt-[10px] px-[16px] top-0 w-[134.089px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Assignee</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[33.611px] left-0 top-0 w-[572.24px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-0 top-0 w-[229.87px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#5048e5] text-[13px] top-[10.72px] whitespace-nowrap">Design system token audit</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#d1fae5] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[41.528px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#047857] text-[10px] top-[2px] whitespace-nowrap">Done</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[229.87px] top-0 w-[112.578px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#dbeafe] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[55.634px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#2563eb] text-[10px] top-[2px] whitespace-nowrap">Medium</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[342.45px] top-0 w-[95.703px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[438.15px] top-0 w-[134.089px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.72px] whitespace-nowrap">Priya Sharma</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[37.552px] left-0 top-0 w-[572.24px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-0 top-0 w-[229.87px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#5048e5] text-[13px] top-[10.72px] whitespace-nowrap">Sidebar navigation rework</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#dbeafe] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[71.146px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#2563eb] text-[10px] top-[2px] whitespace-nowrap">In Progress</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[229.87px] top-0 w-[112.578px]" data-name="Table Cell">
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#fef3c7] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[38.715px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#d97706] text-[10px] top-[2px] whitespace-nowrap">High</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[342.45px] top-0 w-[95.703px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[438.15px] top-0 w-[134.089px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.72px] whitespace-nowrap">Ravi Kumar</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[37.552px] left-0 top-[37.55px] w-[572.24px]" data-name="Table Row">
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-0 top-0 w-[229.87px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#5048e5] text-[13px] top-[10.72px] whitespace-nowrap">Dashboard KPI cards</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#dbeafe] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[71.146px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#2563eb] text-[10px] top-[2px] whitespace-nowrap">In Progress</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[229.87px] top-0 w-[112.578px]" data-name="Table Cell">
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#fef3c7] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[38.715px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#d97706] text-[10px] top-[2px] whitespace-nowrap">High</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[342.45px] top-0 w-[95.703px]" data-name="Table Cell">
      <Text11 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[438.15px] top-0 w-[134.089px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.72px] whitespace-nowrap">Ashwini Reddy</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[37.552px] left-0 top-[75.1px] w-[572.24px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-0 top-0 w-[229.87px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#5048e5] text-[13px] top-[10.72px] whitespace-nowrap">Authentication flow redesign</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#fef3c7] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[62.648px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#d97706] text-[10px] top-[2px] whitespace-nowrap">In Review</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[229.87px] top-0 w-[112.578px]" data-name="Table Cell">
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#ffe4e6] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[51.094px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#e11d48] text-[10px] top-[2px] whitespace-nowrap">Critical</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[342.45px] top-0 w-[95.703px]" data-name="Table Cell">
      <Text13 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[438.15px] top-0 w-[134.089px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.72px] whitespace-nowrap">Ravi Kumar</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[37.552px] left-0 top-[112.66px] w-[572.24px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-0 top-0 w-[229.87px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#5048e5] text-[13px] top-[10.72px] whitespace-nowrap">Mobile responsive layouts</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[43.75px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#64748b] text-[10px] top-[2px] whitespace-nowrap">To Do</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[229.87px] top-0 w-[112.578px]" data-name="Table Cell">
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#dbeafe] h-[15.66px] left-[16px] rounded-[9999px] top-[11.61px] w-[55.634px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[7.99px] not-italic text-[#2563eb] text-[10px] top-[2px] whitespace-nowrap">Medium</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[342.45px] top-0 w-[95.703px]" data-name="Table Cell">
      <Text15 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[37.552px] left-[438.15px] top-0 w-[134.089px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.72px] whitespace-nowrap">Jordan Lee</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[37.552px] left-0 top-[150.21px] w-[572.24px]" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[187.76px] left-0 top-[33.61px] w-[572.24px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[221.649px] relative shrink-0 w-full" data-name="Table">
      <TableRow />
      <TableBody />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white h-[313.082px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[15.998px] items-start pb-[0.556px] pt-[28.55px] px-[28.55px] relative size-full">
        <Container43 />
        <Table />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[572.24px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Recent Activity</p>
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-[#5048e5] left-0 rounded-[3.997px] size-[7.995px] top-[15px]" data-name="Container" />;
}

function Container49() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">Ravi Kumar</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[13px]">{` moved "Sidebar navigation rework" to In Progress`}</span>
      </p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">2 hours ago</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[31.441px] items-start left-[19.99px] top-[10px] w-[382.118px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[51.997px] left-[28.55px] top-[62.88px] w-[572.24px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container52() {
  return <div className="absolute bg-[#059669] left-0 rounded-[3.997px] size-[7.995px] top-[15px]" data-name="Container" />;
}

function Container54() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">Priya Sharma</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[13px]">{` completed "Design system token audit"`}</span>
      </p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">5 hours ago</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[31.441px] items-start left-[19.99px] top-[10px] w-[331.059px]" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[51.997px] left-[28.55px] top-[114.88px] w-[572.24px]" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container57() {
  return <div className="absolute bg-[#5048e5] left-0 rounded-[3.997px] size-[7.995px] top-[15px]" data-name="Container" />;
}

function Container59() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">Ashwini Reddy</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[13px]">{` added a comment on "Dashboard KPI cards"`}</span>
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Yesterday</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.996px] h-[31.441px] items-start left-[19.99px] top-[10px] w-[373.368px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[51.997px] left-[28.55px] top-[166.88px] w-[572.24px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container62() {
  return <div className="absolute bg-[#d97706] left-0 rounded-[3.997px] size-[7.995px] top-[15px]" data-name="Container" />;
}

function Container64() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">Jordan Lee</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[13px]">{` uploaded 3 mockup files`}</span>
      </p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">2 days ago</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[31.441px] items-start left-[19.99px] top-[10px] w-[225.408px]" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[51.997px] left-[28.55px] top-[218.87px] w-[572.24px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container67() {
  return <div className="absolute bg-[#5048e5] left-0 rounded-[3.997px] size-[7.995px] top-[15px]" data-name="Container" />;
}

function Container69() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">Ashwini Reddy</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[13px]">{` updated project deadline to May 1, 2026`}</span>
      </p>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">3 days ago</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.996px] h-[31.441px] items-start left-[19.99px] top-[10px] w-[345.399px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[51.441px] left-[28.55px] top-[270.87px] w-[572.24px]" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white h-[350.859px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container45 />
      <Container46 />
      <Container51 />
      <Container56 />
      <Container61 />
      <Container66 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[911.875px] items-start left-0 top-0 w-[629.34px]" data-name="Container">
      <Container40 />
      <Container42 />
      <Container44 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[257.569px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Team Members</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#7c3aed] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Ashwini Reddy</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Project Lead</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="flex-[213.576_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[62.88px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#2563eb] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">R</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[213.576px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Ravi Kumar</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[213.576px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Backend Developer</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[213.576_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container82 />
        <Container83 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[111.42px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#059669] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">P</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[213.576px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Priya Sharma</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[213.576px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">UI Designer</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="flex-[213.576_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container87 />
        <Container88 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[159.97px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#d97706] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">S</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Suresh Nair</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Frontend Developer</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="flex-[213.576_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[208.51px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#e11d48] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Jordan Lee</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">QA Engineer</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="flex-[213.576_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container97 />
        <Container98 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[257.05px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#0891b2] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">M</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[213.576px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Meera Patel</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[213.576px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Product Manager</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="flex-[213.576_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container102 />
        <Container103 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[47.986px] items-center left-[28.55px] top-[305.59px] w-[257.569px]" data-name="Container">
      <Container100 />
      <Container101 />
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-white h-[382.127px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container73 />
      <Container74 />
      <Container79 />
      <Container84 />
      <Container89 />
      <Container94 />
      <Container99 />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[257.569px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Upcoming Milestones</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Design System v1 Freeze</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">Apr 5, 2026</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[30.556px] relative shrink-0 w-[155.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container108 />
        <Container109 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[#dbeafe] h-[15.66px] relative rounded-[9999px] shrink-0 w-[71.146px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2563eb] text-[10px] whitespace-nowrap">In Progress</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex h-[51.111px] items-center justify-between left-[28.55px] pb-[0.556px] top-[62.88px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container107 />
      <Text16 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[138.863px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Beta Launch (Internal)</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.11px] w-[138.863px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">Apr 18, 2026</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[30.556px] relative shrink-0 w-[138.863px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container112 />
        <Container113 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#f1f5f9] h-[15.66px] relative rounded-[9999px] shrink-0 w-[66.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">Upcoming</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex h-[51.111px] items-center justify-between left-[28.55px] pb-[0.556px] top-[113.99px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container111 />
      <Text17 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Production Release</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">May 1, 2026</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[30.556px] relative shrink-0 w-[121.476px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container116 />
        <Container117 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#f1f5f9] h-[15.66px] relative rounded-[9999px] shrink-0 w-[66.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">Upcoming</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex h-[50.556px] items-center justify-between left-[28.55px] top-[165.1px] w-[257.569px]" data-name="Container">
      <Container115 />
      <Text18 />
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-white h-[244.21px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container105 />
      <Container106 />
      <Container110 />
      <Container114 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[257.569px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Quick Stats</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[102.387px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Completion Rate</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[30.113px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">68%</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[62.88px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text19 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[50.217px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Velocity</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[79.271px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">12 pts/sprint</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[99.55px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[92.752px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Overdue Tasks</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[8.394px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#e11d48] text-[13px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[136.22px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text23 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[112.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Avg Task Duration</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[55.026px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">2.4 days</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex h-[36.111px] items-start justify-between left-[28.55px] pt-[10px] top-[172.88px] w-[257.569px]" data-name="Container">
      <Text25 />
      <Text26 />
    </div>
  );
}

function Container118() {
  return (
    <div className="bg-white h-[237.543px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container119 />
      <Container120 />
      <Container121 />
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[911.875px] items-start left-[645.34px] top-0 w-[314.67px]" data-name="Container">
      <Container72 />
      <Container104 />
      <Container118 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[911.875px] left-[32px] top-[375.06px] w-[960.009px]" data-name="Container">
      <Container39 />
      <Container71 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[1318.932px] left-[256px] top-[63.99px] w-[1024.002px]" data-name="Main Content">
      <Container />
      <Container1 />
      <Container5 />
      <Container29 />
      <Container38 />
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

function Container126() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.998px] pr-[11.007px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-0 w-[38.533px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.67px] w-[38.533px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[38.533px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container128 />
        <Container129 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.997px] items-center pl-[23.993px] relative size-full">
          <Container126 />
          <Container127 />
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

function Link1() {
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

function Link2() {
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
        <g clipPath="url(#clip0_1_394)" id="Icon">
          <path d={svgPaths.p2d69ca00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_1_394">
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

function Link4() {
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
          <path d={svgPaths.p5590800} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.pb2f1300} id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d="M8.9974 7.99769V15.9954" id="Vector_3" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">Projects</p>
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

function Link6() {
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

function Link7() {
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

function Link8() {
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

function Link9() {
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

function Link10() {
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

function Link11() {
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

function Link12() {
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

function Link13() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon13 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container130() {
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

function Link14() {
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
          <Link13 />
          <Container130 />
          <Link14 />
        </div>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697.179px] items-start left-0 top-0 w-[255.443px]" data-name="Container">
      <Container125 />
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

function Button3() {
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
      <Container124 />
      <Button3 />
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

function Container131() {
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

function Container135() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[53.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container135 />
        <Container136 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="relative rounded-[17.999px] shrink-0 size-[35.998px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[35.998px] items-center left-[103.99px] top-0 w-[99.991px]" data-name="Container">
      <Container134 />
      <Container137 />
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

function Container139() {
  return <div className="absolute bg-[#ef4444] border-[1.111px] border-solid border-white left-[23px] rounded-[3.498px] size-[6.997px] top-[6px]" data-name="Container" />;
}

function Container138() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon17 />
      <Container139 />
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

function Container140() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] pl-[7.995px] pr-[8.003px] rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[203.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container133 />
        <Container138 />
        <Container140 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.993px] items-center justify-between left-[256px] pb-[0.556px] pl-[31.997px] pr-[31.996px] top-0 w-[1377.335px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container131 />
      <Container132 />
    </div>
  );
}

export default function ProjectsProjectDetail() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Projects — Project Detail">
      <MainContent />
      <Sidebar />
      <Header />
    </div>
  );
}