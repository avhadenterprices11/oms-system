"use client";
import svgPaths from "./svg-xbbyzps943";

function Link() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[29.828px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">CRM</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[4.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[49.297px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">Pipeline</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[4.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[188.539px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Support Contract — TechFlow</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[15.5px] items-center left-[32px] top-[20px] w-[960px]" data-name="Container">
      <Link />
      <Text />
      <Link1 />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex h-[17px] items-start left-[382.89px] px-[10px] py-[2px] rounded-[9999px] top-[7.25px] w-[79.586px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[11px] tracking-[-0.5px] whitespace-nowrap">Closed Won</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-0 not-italic text-[#0f172a] text-[26px] top-0 tracking-[-0.5px] whitespace-nowrap">{`Support Contract — TechFlow `}</p>
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[106.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[26px] whitespace-nowrap">$15,000</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[109.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
          <span className="leading-[normal] text-[13px]">{`Probability: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#0f172a] text-[13px]">100%</span>
        </p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[134.555px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
          <span className="leading-[normal] text-[13px]">{`Owner: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#0f172a] text-[13px]">Tomas Garcia</span>
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[31.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[69px] relative shrink-0 w-[462.477px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Heading />
        <Container3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5048e5] h-[37px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] shrink-0 w-[130.484px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Create Project</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#5048e5] flex-[1_0_0] h-[37px] min-w-px relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)]" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Create Delivery</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-[88.078px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[18px] py-[11px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Archive</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[39px] relative shrink-0 w-[377.172px]" data-name="Container">
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
    <div className="absolute content-stretch flex h-[69px] items-start justify-between left-[32px] top-[51.5px] w-[960px]" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[34.5px] items-center justify-center left-[186.8px] top-[20px] w-[24px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">→</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[34.5px] items-center justify-center left-[373.6px] top-[20px] w-[24px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">→</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[34.5px] items-center justify-center left-[560.4px] top-[20px] w-[24px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">→</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[34.5px] items-center justify-center left-[747.2px] top-[20px] w-[24px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">→</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex h-[34.5px] items-start left-[28px] px-[8px] py-[10px] rounded-[10px] top-[20px] w-[154.797px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#047857] text-[12px] text-center">Lead</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex h-[34.5px] items-start left-[214.8px] px-[8px] py-[10px] rounded-[10px] top-[20px] w-[154.805px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#047857] text-[12px] text-center">Qualification</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex h-[34.5px] items-start left-[401.6px] px-[8px] py-[10px] rounded-[10px] top-[20px] w-[154.797px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#047857] text-[12px] text-center">Proposal</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex h-[34.5px] items-start left-[588.4px] px-[8px] py-[10px] rounded-[10px] top-[20px] w-[154.805px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#047857] text-[12px] text-center">Negotiation</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#047857] content-stretch flex h-[34.5px] items-start left-[775.2px] px-[8px] py-[10px] rounded-[10px] top-[20px] w-[154.797px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[12px] text-center text-white">✓ Closed Won</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[76.5px] left-[32px] rounded-[20px] top-[144.5px] w-[960px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#d1fae5] content-stretch flex h-[51px] items-center left-[32px] px-[25px] py-[17px] rounded-[16px] top-[245px] w-[960px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a7f3d0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[14px] whitespace-nowrap">Deal closed on Mar 25, 2026 — $15,000 ARR</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[29px] top-[29px] w-[414px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Deal Summary</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[79.023px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Organisation</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[82.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] text-right whitespace-nowrap">TechFlow Inc</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start justify-between left-[29px] pb-px pt-[10px] top-[63px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[72.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] text-right whitespace-nowrap">Sarah Chen</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start justify-between left-[29px] pb-px pt-[10px] top-[99.5px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[75.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Closed Date</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[83.883px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">Mar 25, 2026</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start justify-between left-[29px] pb-px pt-[10px] top-[136px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[68.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Total Value</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[83.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[13px] text-right whitespace-nowrap">$15,000/year</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start justify-between left-[29px] pb-px pt-[10px] top-[172.5px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[54.367px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Payment</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[44.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">Annual</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start justify-between left-[29px] pb-px pt-[10px] top-[209px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text15 />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[110.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Contract Duration</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[64.164px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">12 months</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[35.5px] items-start justify-between left-[29px] pt-[10px] top-[245.5px] w-[414px]" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white h-[310px] relative rounded-[20px] shrink-0 w-[472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container19 />
        <Container20 />
        <Container21 />
        <Container22 />
        <Container23 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[29px] top-[29px] w-[414px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Post-Close Actions</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[17px] relative shrink-0 w-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#047857] text-[14px] text-center">✓</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[97.961px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] whitespace-nowrap">Contract signed</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[38px] items-center left-[29px] pb-px top-[63px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text19 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[17px] relative shrink-0 w-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#047857] text-[14px] text-center">✓</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[74.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] whitespace-nowrap">Invoice sent</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[38px] items-center left-[29px] pb-px top-[101px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[14px] text-center">☐</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[93.617px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] whitespace-nowrap">Project created</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[38.5px] items-center left-[29px] pb-px top-[139px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text23 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[14px] text-center">☐</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[200.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] whitespace-nowrap">Client delivery workspace set up</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[38.5px] items-center left-[29px] pb-px top-[177.5px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text25 />
      <Text26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[14px] text-center">☐</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[169.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] whitespace-nowrap">Kick-off meeting scheduled</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[38.5px] items-center left-[29px] pb-px top-[216px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text27 />
      <Text28 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#5048e5] h-[37px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] shrink-0 w-[414px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Create Project from Deal</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[8px] w-[414px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[18px] py-[11px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Create Client Delivery</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[86px] items-start left-[29px] top-[270.5px] w-[414px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[385.5px] relative rounded-[20px] shrink-0 w-[472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container27 />
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[876px] items-start left-0 top-0 w-[472px]" data-name="Container">
      <Container18 />
      <Container26 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Deal Timeline</p>
    </div>
  );
}

function Container40() {
  return <div className="bg-[#047857] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container41() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container39() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Deal closed</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` — Contract signed by both parties`}</span>
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 25, 2026 — 4:00 PM</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container39 />
        <Container42 />
      </div>
    </div>
  );
}

function Container47() {
  return <div className="bg-[#5048e5] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container48() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container46() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Invoice sent</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` to TechFlow finance team`}</span>
      </p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 25, 2026 — 4:30 PM</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container46 />
        <Container49 />
      </div>
    </div>
  );
}

function Container54() {
  return <div className="bg-[#5048e5] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container55() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container53() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Final contract sent</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` for signature via DocuSign`}</span>
      </p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 24, 2026 — 10:00 AM</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container53 />
        <Container56 />
      </div>
    </div>
  );
}

function Container61() {
  return <div className="bg-[#047857] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container62() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container60() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Terms finalized</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` — All negotiation points resolved`}</span>
      </p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 22, 2026 — 3:00 PM</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container60 />
        <Container63 />
      </div>
    </div>
  );
}

function Container68() {
  return <div className="bg-[#d97706] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container69() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container67() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Legal review completed</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` by both parties`}</span>
      </p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 21, 2026 — 5:00 PM</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container67 />
        <Container70 />
      </div>
    </div>
  );
}

function Container75() {
  return <div className="bg-[#5048e5] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container76() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container74() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container75 />
        <Container76 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Stage changed</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` to Negotiation`}</span>
      </p>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 18, 2026 — 10:00 AM</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container78 />
        <Container79 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container74 />
        <Container77 />
      </div>
    </div>
  );
}

function Container82() {
  return <div className="bg-[#5048e5] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container83() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container81() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container82 />
        <Container83 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Proposal accepted</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` with minor revisions`}</span>
      </p>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 15, 2026 — 2:00 PM</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container85 />
        <Container86 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container81 />
        <Container84 />
      </div>
    </div>
  );
}

function Container89() {
  return <div className="bg-[#d97706] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container90() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container88() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container89 />
        <Container90 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Demo completed</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` — Positive feedback from team`}</span>
      </p>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 10, 2026 — 11:00 AM</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container88 />
        <Container91 />
      </div>
    </div>
  );
}

function Container96() {
  return <div className="bg-[#047857] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container97() {
  return <div className="bg-[#e2e8f0] flex-[18.5_0_0] min-h-px w-px" data-name="Container" />;
}

function Container95() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container96 />
        <Container97 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Qualification passed</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` — Budget and timeline confirmed`}</span>
      </p>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 7, 2026 — 4:00 PM</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container99 />
        <Container100 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[50.5px] relative shrink-0 w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container95 />
        <Container98 />
      </div>
    </div>
  );
}

function Container103() {
  return <div className="bg-[#94a3b8] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container102() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container103 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-px not-italic relative text-[#0f172a] text-[0px]">
        <span className="leading-[normal] text-[13px]">Deal created</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#334155] text-[13px]">{` by Tomas Garcia`}</span>
      </p>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 1, 2026 — 9:00 AM</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="flex-[382_0_0] h-[30.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container105 />
        <Container106 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[10px] relative size-full">
        <Container102 />
        <Container104 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col h-[505px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container45 />
      <Container52 />
      <Container59 />
      <Container66 />
      <Container73 />
      <Container80 />
      <Container87 />
      <Container94 />
      <Container101 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[20px] w-[472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-px pt-[29px] px-[29px] relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[29px] top-[29px] w-[414px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Revenue Impact</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[18px] relative shrink-0 w-[50.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Monthly</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[18px] relative shrink-0 w-[51.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[15px] whitespace-nowrap">$1,250</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex h-[43px] items-start justify-between left-[29px] pb-px pt-[12px] top-[63px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text29 />
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[18px] relative shrink-0 w-[58.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Quarterly</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[18px] relative shrink-0 w-[52.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[15px] whitespace-nowrap">$3,750</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex h-[43px] items-start justify-between left-[29px] pb-px pt-[12px] top-[106px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text31 />
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[18px] relative shrink-0 w-[43.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Annual</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[18px] relative shrink-0 w-[61.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[15px] whitespace-nowrap">$15,000</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex h-[43px] items-start justify-between left-[29px] pb-px pt-[12px] top-[149px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Text33 />
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[18px] relative shrink-0 w-[85.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Lifetime (est.)</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[18px] relative shrink-0 w-[65.383px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[15px] whitespace-nowrap">$45,000</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex h-[42px] items-start justify-between left-[29px] pt-[12px] top-[192px] w-[414px]" data-name="Container">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-white h-[263px] relative rounded-[20px] shrink-0 w-[472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container108 />
        <Container109 />
        <Container110 />
        <Container111 />
        <Container112 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[876px] items-start left-[488px] top-0 w-[472px]" data-name="Container">
      <Container35 />
      <Container107 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[876px] left-[32px] top-[320px] w-[960px]" data-name="Container">
      <Container17 />
      <Container34 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[1228px] left-[256px] top-[64px] w-[1024px]" data-name="Main Content">
      <Container />
      <Container1 />
      <Container5 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p8322300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b4d480} fill="var(--fill-0, white)" id="Vector_2" opacity="0.6" />
          <path d={svgPaths.p22ff87f0} fill="var(--fill-0, white)" id="Vector_3" opacity="0.6" />
          <path d={svgPaths.p35086300} fill="var(--fill-0, white)" id="Vector_4" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Container115() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex h-[14.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[38.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container117 />
        <Container118 />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[24px] relative size-full">
          <Container115 />
          <Container116 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2_5596)" id="Icon">
          <path d={svgPaths.p15de6d32} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p20235940} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p3518de00} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p1f23e980} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2_5596">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pa10000} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M1.5 16.5C1.5 13.5 4 11 7 11" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p39a88ef0} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p229fdd80} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">People</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3 3H15V13H6L3 16V3Z" id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2_1353)" id="Icon">
          <path d="M4 9L7 12L14 5" id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p39fe4900} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2_1353">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p20f1fc00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M2 5L9 8L16 5" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M9 8V16" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pce61800} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M2 7H16" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M6 3V7" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M12 3V7" id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pbe7ef80} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
          <path d="M9 5V8L11 10" id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[42px] not-italic text-[#5048e5] text-[14px] top-[9.5px] whitespace-nowrap">CRM</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3 14V7L9 3L15 7V14" id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M7 14V10H11V14" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon8 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Client Delivery</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pc518c80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p1b5ed300} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p2469bd70} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p2045d440} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Social Media</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2ef09480} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M7 8L11 10L7 12V8Z" fill="var(--fill-0, #475569)" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M5 2V16L9 13.5L13 16V2H5Z" id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon11 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Documents</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p173c3c00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M5 5V3H13V5" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon12 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Leave</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3 4H15L14 15H4L3 4Z" id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M7 8V11" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M11 8V11" id="Vector_3" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon13 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[33px] relative shrink-0 w-[223px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[4px] pt-[16px] px-[12px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.6px] uppercase">System</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p314dee00} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d={svgPaths.p35af5400} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon14 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[609px] relative shrink-0 w-full" data-name="Navigation">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] py-[8px] relative size-full">
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
          <Link14 />
          <Container119 />
          <Link15 />
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697px] items-start left-0 top-0 w-[255px]" data-name="Container">
      <Container114 />
      <Navigation />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[20px] size-[18px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M9 13V4M5 7.5L9 3.5L13 7.5" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          <path d="M2 13.5H16" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#5048e5] h-[46px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[962px] w-[223px]" data-name="Button">
      <Icon15 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.5px] not-italic text-[14px] text-center text-white top-[14.5px] whitespace-nowrap">Upload document</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r border-solid h-[1024px] left-0 top-0 w-[256px]" data-name="Sidebar">
      <Container113 />
      <Button5 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1906ee40} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.5" />
          <path d="M11 11L14.5 14.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[17px] min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Search resources, tasks, or teammates...</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="bg-[#f8fafc] h-[35px] relative rounded-[8px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[17px] py-px relative size-full">
        <Icon16 />
        <TextInput />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex h-[14.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="flex-[1_0_0] h-[31.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container124 />
        <Container125 />
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[36px] items-center left-[104px] top-0 w-[99.992px]" data-name="Container">
      <Container123 />
      <Container126 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf42a00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
          <path d={svgPaths.p35259c00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return <div className="absolute bg-[#ef4444] border-[1.5px] border-solid border-white left-[23px] rounded-[3.5px] size-[7px] top-[6px]" data-name="Container" />;
}

function Container127() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[36px] top-0" data-name="Container">
      <Icon17 />
      <Container128 />
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

function Container129() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] px-[8px] rounded-[8px] size-[36px] top-0" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[36px] relative shrink-0 w-[203.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container122 />
        <Container127 />
        <Container129 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-[256px] pb-px px-[32px] top-0 w-[1214px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container120 />
      <Container121 />
    </div>
  );
}

export default function CrmDealDetailClosedWon() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="CRM — Deal Detail — Closed Won">
      <MainContent />
      <Sidebar />
      <Header />
    </div>
  );
}