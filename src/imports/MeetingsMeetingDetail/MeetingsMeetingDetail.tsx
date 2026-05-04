"use client";
import svgPaths from "./svg-1f71zwfdth";

function Link() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[57.708px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">Meetings</p>
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
    <div className="h-[16.111px] relative shrink-0 w-[171.345px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Sprint Planning — Portal v2</p>
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
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[17.326px] items-start left-[348.47px] px-[10px] py-[2px] rounded-[9999px] top-[6.89px] w-[72.804px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2563eb] text-[11px] tracking-[-0.5px] whitespace-nowrap">Scheduled</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[421.276px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-0 not-italic text-[#0f172a] text-[26px] top-0 tracking-[-0.5px] whitespace-nowrap">{`Sprint Planning — Portal v2 `}</p>
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[218.403px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Mar 31, 2026 · 10:00 AM – 11:00 AM</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[130.651px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
          <span className="leading-[normal] text-[13px]">{`Host: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#0f172a] text-[13px]">Ashwini Reddy</span>
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[421.276px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.998px] items-center relative size-full">
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[55.217px] relative shrink-0 w-[421.276px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.995px] items-start relative size-full">
        <Heading />
        <Container3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#059669] h-[36.667px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(5,150,105,0.2)] shrink-0 w-[121.788px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Join Meeting</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[60.929px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[141.05px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fca5a5] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e11d48] text-[14px] text-center whitespace-nowrap">Cancel Meeting</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[37.778px] relative shrink-0 w-[343.767px]" data-name="Container">
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

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[572.24px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Agenda</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#ede9fe] relative rounded-[11.997px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[11px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[310.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Review Sprint 23 completed items and carry-overs</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[44.549px] items-start left-[28.55px] pb-[0.556px] pt-[10px] top-[62.88px] w-[572.24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#ede9fe] relative rounded-[11.997px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[11px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[293.741px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Groom and estimate backlog items for Sprint 24</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[44.549px] items-start left-[28.55px] pb-[0.556px] pt-[10px] top-[107.43px] w-[572.24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#ede9fe] relative rounded-[11.997px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[11px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[354.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Assign tasks and confirm capacity for each team member</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[44.549px] items-start left-[28.55px] pb-[0.556px] pt-[10px] top-[151.98px] w-[572.24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#ede9fe] relative rounded-[11.997px] shrink-0 size-[23.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[11px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[339.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Identify blockers and dependencies for upcoming work</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[43.993px] items-start left-[28.55px] pt-[10px] top-[196.53px] w-[572.24px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[269.071px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container8 />
      <Container9 />
      <Container12 />
      <Container15 />
      <Container18 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[18.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Meeting Notes</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f8fafc] h-[65.208px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[287.09px] not-italic text-[#94a3b8] text-[13px] text-center top-[24.55px] whitespace-nowrap">Notes will be available after the meeting</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[156.641px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[15.998px] items-start pb-[0.556px] pt-[28.55px] px-[28.55px] relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex h-[27.552px] items-center left-[445.33px] px-[14.556px] py-[6.556px] rounded-[8px] top-0 w-[126.91px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">Convert to Tasks</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[27.552px] left-[28.55px] top-[28.55px] w-[572.24px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#0f172a] text-[15px] top-[4.61px] whitespace-nowrap">{`Action Items `}</p>
      <Button3 />
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-0 size-[15.998px] top-[10.05px]" data-name="Checkbox" />;
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[503.07px] top-[11.39px] w-[69.167px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Priya Sharma</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[28.55px] top-[72.1px] w-[572.24px]" data-name="Container">
      <Checkbox />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[13px] text-black top-[10px] whitespace-nowrap">{` Update design tokens in Storybook `}</p>
      <Text5 />
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute left-0 size-[15.998px] top-[10.05px]" data-name="Checkbox" />;
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[513.8px] top-[11.39px] w-[58.438px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Ravi Kumar</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[28.55px] top-[108.77px] w-[572.24px]" data-name="Container">
      <Checkbox1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[13px] text-black top-[10px] whitespace-nowrap">{` Fix authentication token refresh bug `}</p>
      <Text6 />
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute left-0 size-[15.998px] top-[10.05px]" data-name="Checkbox" />;
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[513.88px] top-[11.39px] w-[58.359px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Jordan Lee</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[28.55px] top-[145.43px] w-[572.24px]" data-name="Container">
      <Checkbox2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[13px] text-black top-[10px] whitespace-nowrap">{` Write E2E tests for onboarding flow `}</p>
      <Text7 />
    </div>
  );
}

function Checkbox3() {
  return <div className="absolute left-0 size-[15.998px] top-[10.05px]" data-name="Checkbox" />;
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[511.66px] top-[11.39px] w-[60.582px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Suresh Nair</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[28.55px] top-[182.1px] w-[572.24px]" data-name="Container">
      <Checkbox3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[13px] text-black top-[10px] whitespace-nowrap">{` Finalise API contract for notifications `}</p>
      <Text8 />
    </div>
  );
}

function Checkbox4() {
  return <div className="absolute left-0 size-[15.998px] top-[10.05px]" data-name="Checkbox" />;
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[495.42px] top-[11.39px] w-[76.823px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Ashwini Reddy</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[36.111px] left-[28.55px] top-[218.77px] w-[572.24px]" data-name="Container">
      <Checkbox4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[13px] text-black top-[10px] whitespace-nowrap">{` Prepare sprint demo slides `}</p>
      <Text9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white h-[283.429px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[899.201px] items-start left-0 top-0 w-[629.34px]" data-name="Container">
      <Container7 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[257.569px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Participants</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#7c3aed] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Ashwini Reddy</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Host</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[138.498_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#d1fae5] h-[15.66px] relative rounded-[9999px] shrink-0 w-[63.082px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[10px] whitespace-nowrap">Accepted</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[62.88px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container35 />
      <Container36 />
      <Text10 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#2563eb] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">R</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Ravi Kumar</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Backend Developer</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[138.498_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#d1fae5] h-[15.66px] relative rounded-[9999px] shrink-0 w-[63.082px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[10px] whitespace-nowrap">Accepted</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[111.42px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Container41 />
      <Text11 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#059669] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">P</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Priya Sharma</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">UI Designer</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[138.498_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#d1fae5] h-[15.66px] relative rounded-[9999px] shrink-0 w-[63.082px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[10px] whitespace-nowrap">Accepted</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[159.97px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container45 />
      <Container46 />
      <Text12 />
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#d97706] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">S</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Suresh Nair</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Frontend Developer</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="flex-[139.844_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#fef3c7] h-[15.66px] relative rounded-[9999px] shrink-0 w-[61.736px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[10px] whitespace-nowrap">Tentative</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[208.51px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container50 />
      <Container51 />
      <Text13 />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#e11d48] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Jordan Lee</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">QA Engineer</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[138.498_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#d1fae5] h-[15.66px] relative rounded-[9999px] shrink-0 w-[63.082px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[10px] whitespace-nowrap">Accepted</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[257.05px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container55 />
      <Container56 />
      <Text14 />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#0891b2] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">M</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[145.451px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Meera Patel</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[145.451px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Product Manager</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[145.451_0_0] h-[29.444px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#f1f5f9] h-[15.66px] relative rounded-[9999px] shrink-0 w-[56.128px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">Pending</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[47.986px] items-center left-[28.55px] top-[305.59px] w-[257.569px]" data-name="Container">
      <Container60 />
      <Container61 />
      <Text15 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white h-[382.127px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container33 />
      <Container34 />
      <Container39 />
      <Container44 />
      <Container49 />
      <Container54 />
      <Container59 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[257.569px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Details</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[53.585px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Location</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[117.049px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">Jitsi #portal-sprint</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[62.88px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[52.934px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Duration</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[37.769px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">1 hour</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[99.55px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[71.762px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Recurrence</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[46.554px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">Weekly</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[136.22px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[88.368px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Linked Project</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[117.83px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] text-right whitespace-nowrap">Portal v2 Redesign</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[172.88px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[63.194px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Recording</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[51.536px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] text-right whitespace-nowrap">Pending</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex h-[36.111px] items-start justify-between left-[28.55px] pt-[10px] top-[209.55px] w-[257.569px]" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white h-[274.21px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[257.569px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Related Meetings</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.3px] uppercase">Previous</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">Sprint Planning — Mar 24</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[31.441px] relative shrink-0 w-[158.342px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Container75 />
        <Container76 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex h-[51.997px] items-center justify-between left-[28.55px] pb-[0.556px] pr-[99.227px] top-[62.88px] w-[257.569px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container74 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.3px] uppercase">Next</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">Sprint Planning — Apr 7</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[31.441px] relative shrink-0 w-[147.431px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex h-[51.441px] items-center justify-between left-[28.55px] pr-[110.139px] top-[114.88px] w-[257.569px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[194.87px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container72 />
      <Container73 />
      <Container77 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[899.201px] items-start left-[645.34px] top-0 w-[314.67px]" data-name="Container">
      <Container32 />
      <Container64 />
      <Container71 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[899.201px] left-[32px] top-[131.32px] w-[960.009px]" data-name="Container">
      <Container6 />
      <Container31 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[1062.517px] left-[256px] top-0 w-[1024.002px]" data-name="Main Content">
      <Container />
      <Container1 />
      <Container5 />
    </div>
  );
}

function Container81() {
  return <div className="absolute h-0 left-0 top-[1062.52px] w-[1280px]" data-name="Container" />;
}

function Body() {
  return (
    <div className="absolute h-[1062.517px] left-0 top-[63.99px] w-[1280px]" data-name="Body">
      <MainContent />
      <Container81 />
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

function Container84() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.998px] pr-[11.007px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-0 w-[38.533px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.67px] w-[38.533px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[38.533px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.997px] items-center pl-[23.993px] relative size-full">
          <Container84 />
          <Container85 />
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
          <path d={svgPaths.p5590800} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d={svgPaths.pb2f1300} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M8.9974 7.99769V15.9954" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
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
          <path d={svgPaths.p31766000} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p17ffbf00} fill="var(--fill-0, #5048E5)" id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">Meetings</p>
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

function Container88() {
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
          <Container88 />
          <Link14 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697.179px] items-start left-0 top-0 w-[255.443px]" data-name="Container">
      <Container83 />
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

function Button4() {
  return (
    <div className="absolute bg-[#5048e5] h-[45.981px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[862.47px] w-[223.446px]" data-name="Button">
      <Icon15 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.49px] not-italic text-[14px] text-center text-white top-[14.65px] whitespace-nowrap">Upload document</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r-[0.556px] border-solid h-[924.444px] left-0 top-0 w-[255.998px]" data-name="Sidebar">
      <Container82 />
      <Button4 />
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

function Container89() {
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

function Container93() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[53.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container93 />
        <Container94 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="relative rounded-[17.999px] shrink-0 size-[35.998px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[35.998px] items-center left-[103.99px] top-0 w-[99.991px]" data-name="Container">
      <Container92 />
      <Container95 />
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

function Container97() {
  return <div className="absolute bg-[#ef4444] border-[1.111px] border-solid border-white left-[23px] rounded-[3.498px] size-[6.997px] top-[6px]" data-name="Container" />;
}

function Container96() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon17 />
      <Container97 />
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

function Container98() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] pl-[7.995px] pr-[8.003px] rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[203.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container91 />
        <Container96 />
        <Container98 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.993px] items-center justify-between left-[256px] pb-[0.556px] pl-[31.997px] pr-[31.996px] top-0 w-[1377.335px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container89 />
      <Container90 />
    </div>
  );
}

export default function MeetingsMeetingDetail() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Meetings — Meeting Detail">
      <Body />
      <Sidebar />
      <Header />
    </div>
  );
}