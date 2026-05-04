"use client";
import svgPaths from "./svg-s9mslrtan3";

function Container2() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[36px] left-0 not-italic text-[#0f172a] text-[30px] top-[-0.56px] tracking-[-0.75px] whitespace-nowrap">{`Risks & Blockers`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24.002px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-0.78px] whitespace-nowrap">Portal v2 Redesign</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[63.993px] relative shrink-0 w-[231.962px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.993px] items-start relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[17px] size-[13.993px] top-[11.34px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p35694600} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.99901" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5048e5] h-[36.667px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] shrink-0 w-[115.425px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[68.98px] not-italic text-[14px] text-center text-white top-[10px] whitespace-nowrap">Add Risk</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[17.55px] size-[13.993px] top-[11.89px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p35694600} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.99901" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[37.778px] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[80.54px] not-italic text-[#334155] text-[14px] text-center top-[10.56px] whitespace-nowrap">Add Blocker</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[37.778px] relative shrink-0 w-[266.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[63.993px] items-start justify-between left-[32px] top-[20px] w-[960.009px]" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[59.74px] opacity-80 top-[6.55px] w-[17.196px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">(5)</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#5048e5] h-[29.219px] relative rounded-[8px] shrink-0 w-[93.49px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[16.55px] not-italic text-[13px] text-white top-[6.55px] whitespace-nowrap">{`Active `}</p>
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[77.6px] opacity-80 top-[6.55px] w-[17.517px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">(3)</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[29.219px] relative rounded-[8px] shrink-0 w-[111.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[16.55px] not-italic text-[#64748b] text-[13px] top-[6.55px] whitespace-nowrap">{`Resolved `}</p>
        <Text1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[29.219px] items-start left-[32px] top-[103.99px] w-[960.009px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-0 top-0 w-[777.387px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">API vendor may change pricing</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#fee2e2] h-[15.66px] relative rounded-[9999px] shrink-0 w-[42.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] whitespace-nowrap">High</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#fef3c7] h-[15.66px] relative rounded-[9999px] shrink-0 w-[73.464px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#92400e] text-[10px] whitespace-nowrap">Monitoring</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[5.998px] h-[15.66px] items-start left-[777.39px] top-0 w-[122.188px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[18.333px] left-[27.99px] top-[23.99px] w-[899.575px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Impact</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Budget</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-0 top-0 w-[291.858px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Likelihood</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Medium</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[303.85px] top-0 w-[291.858px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Owner</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Ashwini Reddy</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[607.71px] top-0 w-[291.858px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[29.774px] left-[27.99px] top-[54.32px] w-[899.575px]" data-name="Container">
      <Container13 />
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Mitigation</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[19.505px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#334155] text-[13px] top-[0.67px] whitespace-nowrap">Negotiate multi-year contract with current vendor. Evaluate backup providers as fallback.</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col gap-[3.993px] h-[55.165px] items-start left-[27.99px] pt-[10px] px-[13.993px] rounded-[8px] top-[96.09px] w-[899.575px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[27.99px] top-[161.26px] w-[899.575px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Created Mar 10</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white border-[#ef4444] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] h-[199.696px] left-[32px] rounded-[20px] top-[153.21px] w-[960.009px]" data-name="Container">
      <Container9 />
      <Container12 />
      <Container22 />
      <Container25 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[18.333px] relative shrink-0 w-[767.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Key developer on leave during integration phase</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#fef3c7] h-[15.66px] relative rounded-[9999px] shrink-0 w-[59.644px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[10px] whitespace-nowrap">Medium</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#d1fae5] h-[15.66px] relative rounded-[9999px] shrink-0 w-[66.354px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#059669] text-[10px] whitespace-nowrap">Mitigated</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[15.66px] relative shrink-0 w-[131.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.998px] items-start relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start justify-between left-[27.99px] top-[23.99px] w-[899.575px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Impact</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Timeline</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-0 top-0 w-[291.858px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Likelihood</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">High</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[303.85px] top-0 w-[291.858px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Owner</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Ashwini Reddy</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[607.71px] top-0 w-[291.858px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[29.774px] left-[27.99px] top-[54.32px] w-[899.575px]" data-name="Container">
      <Container31 />
      <Container34 />
      <Container37 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Mitigation</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[19.505px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#334155] text-[13px] top-[0.67px] whitespace-nowrap">{`Cross-train Jordan as backup for Ravi's integration responsibilities. Documentation sprint scheduled for Mar 28.`}</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col gap-[3.993px] h-[55.165px] items-start left-[27.99px] pt-[10px] px-[13.993px] rounded-[8px] top-[96.09px] w-[899.575px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[27.99px] top-[161.26px] w-[899.575px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Created Mar 12</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white border-[#f59e0b] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] h-[199.696px] left-[32px] rounded-[20px] top-[368.91px] w-[960.009px]" data-name="Container">
      <Container27 />
      <Container30 />
      <Container40 />
      <Container43 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[18.333px] relative shrink-0 w-[736.623px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Third-party SSO integration delayed</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#fee2e2] h-[15.66px] relative rounded-[9999px] shrink-0 w-[42.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] whitespace-nowrap">High</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#fee2e2] h-[15.66px] relative rounded-[9999px] shrink-0 w-[51.276px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] whitespace-nowrap">Active</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#fecaca] h-[15.66px] relative rounded-[9999px] shrink-0 w-[56.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[10px] whitespace-nowrap">Blocker</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[15.66px] relative shrink-0 w-[162.951px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.998px] items-start relative size-full">
        <Text6 />
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start justify-between left-[27.99px] top-[23.99px] w-[899.575px]" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Impact</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Timeline, Security</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-0 top-0 w-[291.858px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Likelihood</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">High</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[303.85px] top-0 w-[291.858px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Owner</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Ravi Kumar</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[607.71px] top-0 w-[291.858px]" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[29.774px] left-[27.99px] top-[54.32px] w-[899.575px]" data-name="Container">
      <Container49 />
      <Container52 />
      <Container55 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Mitigation</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[19.505px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#334155] text-[13px] top-[0.67px] whitespace-nowrap">Escalated to vendor support. Temporary basic auth fallback being implemented. Target resolution: Apr 5.</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col gap-[3.993px] h-[55.165px] items-start left-[27.99px] pt-[10px] px-[13.993px] rounded-[8px] top-[96.09px] w-[899.575px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[27.99px] top-[161.26px] w-[899.575px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Created Mar 18</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-white border-[#ef4444] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] h-[199.696px] left-[32px] rounded-[20px] top-[584.6px] w-[960.009px]" data-name="Container">
      <Container45 />
      <Container48 />
      <Container58 />
      <Container61 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[18.333px] relative shrink-0 w-[779.957px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Design feedback loop exceeding 2 weeks</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#dbeafe] h-[15.66px] relative rounded-[9999px] shrink-0 w-[40.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2563eb] text-[10px] whitespace-nowrap">Low</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#fef3c7] h-[15.66px] relative rounded-[9999px] shrink-0 w-[73.464px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#92400e] text-[10px] whitespace-nowrap">Monitoring</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[15.66px] relative shrink-0 w-[119.618px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.998px] items-start relative size-full">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start justify-between left-[27.99px] top-[23.99px] w-[899.575px]" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Impact</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Timeline</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-0 top-0 w-[291.858px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Likelihood</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Low</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[303.85px] top-0 w-[291.858px]" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Owner</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Sanya Mehta</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[607.71px] top-0 w-[291.858px]" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[29.774px] left-[27.99px] top-[54.32px] w-[899.575px]" data-name="Container">
      <Container67 />
      <Container70 />
      <Container73 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[27.99px] top-[94.1px] w-[899.575px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Created Mar 20</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-white border-[#3b82f6] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] h-[132.535px] left-[32px] rounded-[20px] top-[800.3px] w-[960.009px]" data-name="Container">
      <Container63 />
      <Container66 />
      <Container76 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[18.333px] relative shrink-0 w-[787.196px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Database migration script untested on production-size data</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#450a0a] h-[15.66px] relative rounded-[9999px] shrink-0 w-[55.104px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#fecaca] text-[10px] whitespace-nowrap">Critical</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#fee2e2] h-[15.66px] relative rounded-[9999px] shrink-0 w-[51.276px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] whitespace-nowrap">Active</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[15.66px] relative shrink-0 w-[112.378px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.998px] items-start relative size-full">
        <Text11 />
        <Text12 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start justify-between left-[27.99px] top-[23.99px] w-[899.575px]" data-name="Container">
      <Container79 />
      <Container80 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Impact</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Launch</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-0 top-0 w-[291.858px]" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Likelihood</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Medium</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[303.85px] top-0 w-[291.858px]" data-name="Container">
      <Container86 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Owner</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#334155] text-[13px]">Arun Patel</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.997px] h-[29.774px] items-start left-[607.71px] top-0 w-[291.858px]" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[29.774px] left-[27.99px] top-[54.32px] w-[899.575px]" data-name="Container">
      <Container82 />
      <Container85 />
      <Container88 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex h-[11.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase">Mitigation</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[19.505px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#334155] text-[13px] top-[0.67px] whitespace-nowrap">Schedule production-size dry run on staging by Apr 2. Prepare rollback script and data snapshot before migration.</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col gap-[3.993px] h-[55.165px] items-start left-[27.99px] pt-[10px] px-[13.993px] rounded-[8px] top-[96.09px] w-[899.575px]" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[27.99px] top-[161.26px] w-[899.575px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Created Mar 22</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-white border-[#7f1d1d] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] h-[199.696px] left-[32px] rounded-[20px] top-[948.83px] w-[960.009px]" data-name="Container">
      <Container78 />
      <Container81 />
      <Container91 />
      <Container94 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[1196.519px] left-[256px] top-[63.99px] w-[1024.002px]" data-name="Main Content">
      <Container />
      <Container5 />
      <Container8 />
      <Container26 />
      <Container44 />
      <Container62 />
      <Container77 />
    </div>
  );
}

function Icon2() {
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

function Container97() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.998px] pr-[11.007px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-0 w-[38.533px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.67px] w-[38.533px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[38.533px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container99 />
        <Container100 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.997px] items-center pl-[23.993px] relative size-full">
          <Container97 />
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
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
        <Icon3 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Icon4() {
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
        <Icon4 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">People</p>
      </div>
    </div>
  );
}

function Icon5() {
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

function Link2() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon6() {
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
        <Icon6 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Icon7() {
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

function Link4() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Icon8() {
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
        <Icon8 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Icon9() {
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
        <Icon9 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">CRM</p>
      </div>
    </div>
  );
}

function Icon10() {
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
        <Icon10 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Client Delivery</p>
      </div>
    </div>
  );
}

function Icon11() {
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
        <Icon11 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Social Media</p>
      </div>
    </div>
  );
}

function Icon12() {
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
        <Icon12 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Icon13() {
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
        <Icon13 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Documents</p>
      </div>
    </div>
  );
}

function Icon14() {
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
        <Icon14 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Leave</p>
      </div>
    </div>
  );
}

function Icon15() {
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
        <Icon15 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d="M2.99913 13.996V8.9974" id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M6.99797 13.996V5.99826" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M10.9968 13.996V3.99884" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
          <path d="M14.9957 13.996V6.99797" id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon16 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Analytics</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[33.325px] relative shrink-0 w-[223.446px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[12px] not-italic text-[#94a3b8] text-[11px] top-[16px] tracking-[0.6px] uppercase whitespace-nowrap">System</p>
      </div>
    </div>
  );
}

function Icon17() {
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
        <Icon17 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[649.184px] relative shrink-0 w-full" data-name="Navigation">
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
          <Link13 />
          <Container101 />
          <Link14 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col h-[737.17px] items-start left-0 top-0 w-[255.443px]" data-name="Container">
      <Container96 />
      <Navigation />
    </div>
  );
}

function Icon18() {
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

function Button2() {
  return (
    <div className="absolute bg-[#5048e5] h-[45.981px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[962.01px] w-[223.446px]" data-name="Button">
      <Icon18 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.49px] not-italic text-[14px] text-center text-white top-[14.65px] whitespace-nowrap">Upload document</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r-[0.556px] border-solid h-[1023.993px] left-0 top-0 w-[255.998px]" data-name="Sidebar">
      <Container95 />
      <Button2 />
    </div>
  );
}

function Icon19() {
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

function Container102() {
  return (
    <div className="bg-[#f8fafc] h-[33.767px] relative rounded-[8px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[16.554px] pr-[0.556px] py-[0.556px] relative size-full">
        <Icon19 />
        <TextInput />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[53.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container106 />
        <Container107 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative rounded-[17.999px] shrink-0 size-[35.998px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[35.998px] items-center left-[103.99px] top-0 w-[99.991px]" data-name="Container">
      <Container105 />
      <Container108 />
    </div>
  );
}

function Icon20() {
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

function Container110() {
  return <div className="absolute bg-[#ef4444] border-[1.111px] border-solid border-white left-[23px] rounded-[3.498px] size-[6.997px] top-[6px]" data-name="Container" />;
}

function Container109() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon20 />
      <Container110 />
    </div>
  );
}

function Icon21() {
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

function Container111() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] pl-[7.995px] pr-[8.003px] rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[203.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container104 />
        <Container109 />
        <Container111 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.993px] items-center justify-between left-[256px] pb-[0.556px] pl-[31.997px] pr-[31.996px] top-0 w-[1377.335px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container102 />
      <Container103 />
    </div>
  );
}

export default function RisksBlockersOmsPortal() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Risks & Blockers — OMS Portal">
      <MainContent />
      <Sidebar />
      <Header />
    </div>
  );
}