"use client";
import svgPaths from "./svg-mrm49yrali";

function Link() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[79.344px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">Social Media</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[4.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[123.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] whitespace-nowrap">Brand Management</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[15.5px] items-center left-[32px] top-[20px] w-[960px]" data-name="Container">
      <Link />
      <Text />
      <Text1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[278.586px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[36px] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px] whitespace-nowrap">Brand Management</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[11.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 1V13M1 7H13" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5048e5] flex-[1_0_0] h-[37px] min-w-px relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[74px] not-italic text-[14px] text-center text-white top-[10px] whitespace-nowrap">Add Brand</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[37px] relative shrink-0 w-[126.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[37px] items-start justify-between left-[32px] top-[51.5px] w-[960px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(139, 92, 246) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#ede9fe] content-stretch flex h-[17px] items-start left-[110.45px] px-[10px] py-[2px] rounded-[99px] top-[5px] w-[62.344px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[11px] whitespace-nowrap">Primary</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[22px] relative shrink-0 w-[172.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#0f172a] text-[18px] top-0 whitespace-nowrap">{`Acme Corp `}</p>
        <Text2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[28px] top-[28px] w-[414px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#d1fae5] h-[20.5px] relative rounded-[6px] shrink-0 w-[81.273px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[3px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">LinkedIn ✓</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#d1fae5] h-[20.5px] relative rounded-[6px] shrink-0 w-[72.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[3px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">Twitter ✓</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#d1fae5] h-[20.5px] relative rounded-[6px] shrink-0 w-[90.492px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[3px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">Instagram ✓</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20.5px] items-start left-[28px] top-[92px] w-[414px]" data-name="Container">
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[22px] left-[28px] top-[120.5px] w-[414px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[22px] text-[13px]">Posts this month:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#64748b] text-[13px]">{` 24`}</span>
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[22px] left-[28px] top-[148.5px] w-[414px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[22px] text-[13px]">Brand voice:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#64748b] text-[13px]">{` Professional yet approachable`}</span>
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[22px] left-[28px] top-[176.5px] w-[414px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[22px] text-[13px]">Owner:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#64748b] text-[13px]">{` Sanya Patel`}</span>
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[31.5px] relative rounded-[8px] shrink-0 w-[53.977px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[15px] py-[8px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[31.5px] relative rounded-[8px] shrink-0 w-[131.031px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[15px] py-[8px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] text-center whitespace-nowrap">View Guidelines</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[31.5px] items-start left-[28px] top-[214.5px] w-[414px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[276px] left-0 rounded-[20px] top-0 w-[472px]" data-name="Container">
      <Container6 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(147, 197, 253) 0%, rgb(59, 130, 246) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">AL</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17px] items-start left-[109.35px] px-[10px] py-[2px] rounded-[99px] top-[5px] w-[77.563px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Sub-brand</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[22px] relative shrink-0 w-[186.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#0f172a] text-[18px] top-0 whitespace-nowrap">{`Acme Labs `}</p>
        <Text6 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[28px] top-[28px] w-[414px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#d1fae5] h-[20.5px] relative rounded-[6px] shrink-0 w-[81.273px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[3px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">LinkedIn ✓</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#fee2e2] h-[20.5px] relative rounded-[6px] shrink-0 w-[70.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[3px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] whitespace-nowrap">Twitter ✗</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20.5px] items-start left-[28px] top-[92px] w-[414px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[22px] left-[28px] top-[120.5px] w-[414px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[22px] text-[13px]">Posts this month:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#64748b] text-[13px]">{` 8`}</span>
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[22px] left-[28px] top-[148.5px] w-[414px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[22px] text-[13px]">Brand voice:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#64748b] text-[13px]">{` Technical, developer-focused`}</span>
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[22px] left-[28px] top-[176.5px] w-[414px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-0 whitespace-nowrap">
        <span className="leading-[22px] text-[13px]">Owner:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#64748b] text-[13px]">{` Lisa Chen`}</span>
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[31.5px] relative rounded-[8px] shrink-0 w-[53.977px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[15px] py-[8px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[31.5px] relative rounded-[8px] shrink-0 w-[131.031px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[15px] py-[8px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] text-center whitespace-nowrap">View Guidelines</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[31.5px] items-start left-[28px] top-[214.5px] w-[414px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[276px] left-[488px] rounded-[20px] top-0 w-[472px]" data-name="Container">
      <Container15 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[24px] whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[17px] relative shrink-0 w-[70.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Add Brand</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[200px] items-center justify-center left-0 px-[2px] py-[61.5px] rounded-[20px] top-[292px] w-[472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[20px]" />
      <Container24 />
      <Text9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[492px] left-[32px] top-[108.5px] w-[960px]" data-name="Container">
      <Container5 />
      <Container14 />
      <Container23 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-[28px] top-[28px] w-[902px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[16px]">Brand Guidelines — Acme Corp</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Color Palette</p>
    </div>
  );
}

function Container32() {
  return <div className="bg-[#5048e5] h-[40px] rounded-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container33() {
  return (
    <div className="content-stretch flex h-[10.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">#5048E5</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[54.5px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return <div className="bg-[#0f172a] h-[40px] rounded-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container36() {
  return (
    <div className="content-stretch flex h-[10.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[9px] text-center">#0F172A</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[54.5px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Container38() {
  return <div className="bg-[#f8fafc] h-[40px] rounded-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container39() {
  return (
    <div className="content-stretch flex h-[10.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">#F8FAFC</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[54.5px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return <div className="bg-[#22c55e] h-[40px] rounded-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container42() {
  return (
    <div className="content-stretch flex h-[10.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">#22C55E</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[54.5px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container44() {
  return <div className="bg-[#f59e0b] h-[40px] rounded-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container45() {
  return (
    <div className="content-stretch flex h-[10.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center whitespace-nowrap">#F59E0B</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[54.5px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[54.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
      <Container37 />
      <Container40 />
      <Container43 />
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[435_0_0] h-[77.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-0 top-0 w-[435px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Typography</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[24px] left-0 top-[23px] w-[435px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-[0.5px] whitespace-nowrap">
        <span className="leading-[24px] text-[14px]">Inter Bold</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[14px]">{` — Headings & CTAs`}</span>
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[24px] left-0 top-[47px] w-[435px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#334155] text-[14px] top-[0.5px] whitespace-nowrap">{`Inter Regular — Body text & descriptions`}</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[435_0_0] h-[77.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container47 />
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[77.5px] items-start left-[28px] top-[67.5px] w-[902px]" data-name="Container">
      <Container28 />
      <Container46 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Logo Usage</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#d1fae5] flex-[100.148_0_0] h-[82px] min-w-px relative rounded-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[50.5px] not-italic text-[#047857] text-[12px] text-center top-[12px] w-[77px]">✓ Use on white or light backgrounds</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#d1fae5] flex-[95.617_0_0] h-[82px] min-w-px relative rounded-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[48px] not-italic text-[#047857] text-[12px] text-center top-[12px] w-[72px]">✓ Maintain clear space around logo</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#fee2e2] flex-[95.617_0_0] h-[82px] min-w-px relative rounded-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[48px] not-italic text-[#dc2626] text-[12px] text-center top-[12px] w-[72px]">✗ Do not stretch or distort</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#fee2e2] flex-[95.617_0_0] h-[82px] min-w-px relative rounded-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[48px] not-italic text-[#dc2626] text-[12px] text-center top-[12px] w-[72px]">✗ Do not change brand colors</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container51() {
  return (
    <div className="flex-[435_0_0] h-[105px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Restricted Words</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#fee2e2] content-stretch flex h-[20.5px] items-start left-0 px-[10px] py-[3px] rounded-[6px] top-0 w-[78.953px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] whitespace-nowrap">guarantee</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#fee2e2] content-stretch flex h-[20.5px] items-start left-[84.95px] px-[10px] py-[3px] rounded-[6px] top-0 w-[88.133px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] whitespace-nowrap">free forever</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#fee2e2] content-stretch flex h-[20.5px] items-start left-[179.09px] px-[10px] py-[3px] rounded-[6px] top-0 w-[73.617px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] whitespace-nowrap">unlimited</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#fee2e2] content-stretch flex h-[20.5px] items-start left-[258.7px] px-[10px] py-[3px] rounded-[6px] top-0 w-[32.805px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] whitespace-nowrap">#1</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#fee2e2] content-stretch flex h-[20.5px] items-start left-[297.51px] px-[10px] py-[3px] rounded-[6px] top-0 w-[92.156px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] whitespace-nowrap">best in class</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#fee2e2] content-stretch flex h-[20.5px] items-start left-0 px-[10px] py-[3px] rounded-[6px] top-[26.5px] w-[69.711px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] whitespace-nowrap">risk-free</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[435_0_0] h-[105px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[105px] items-start left-[28px] top-[169px] w-[902px]" data-name="Container">
      <Container51 />
      <Container58 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[328px] left-[32px] rounded-[20px] top-[628.5px] w-[960px]" data-name="Container">
      <Container26 />
      <Container27 />
      <Container50 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[988.5px] left-[256px] top-[64px] w-[1024px]" data-name="Main Content">
      <Container />
      <Container1 />
      <Container4 />
      <Container25 />
    </div>
  );
}

function Icon1() {
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

function Container63() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex h-[14.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[38.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[24px] relative size-full">
          <Container63 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
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

function Link1() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Icon3() {
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

function Link2() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">People</p>
      </div>
    </div>
  );
}

function Icon4() {
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

function Link3() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon5() {
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

function Link4() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Icon6() {
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

function Link5() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Icon7() {
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

function Link6() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pbe7ef80} id="Vector" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
          <path d="M9 5V8L11 10" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon8 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">CRM</p>
      </div>
    </div>
  );
}

function Icon9() {
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

function Link8() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Client Delivery</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pc518c80} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
          <path d={svgPaths.p1b5ed300} id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
          <path d={svgPaths.p2469bd70} id="Vector_3" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
          <path d={svgPaths.p2045d440} id="Vector_4" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[42px] not-italic text-[#5048e5] text-[14px] top-[9.5px] whitespace-nowrap">Social Media</p>
      </div>
    </div>
  );
}

function Icon11() {
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

function Link10() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon11 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Icon12() {
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

function Link11() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon12 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Documents</p>
      </div>
    </div>
  );
}

function Icon13() {
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

function Link12() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon13 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Leave</p>
      </div>
    </div>
  );
}

function Icon14() {
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

function Link13() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon14 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[33px] relative shrink-0 w-[223px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[4px] pt-[16px] px-[12px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.6px] uppercase">System</p>
      </div>
    </div>
  );
}

function Icon15() {
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

function Link14() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon15 />
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
          <Container67 />
          <Link14 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697px] items-start left-0 top-0 w-[255px]" data-name="Container">
      <Container62 />
      <Navigation />
    </div>
  );
}

function Icon16() {
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
    <div className="absolute bg-[#5048e5] h-[46px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[770px] w-[223px]" data-name="Button">
      <Icon16 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.5px] not-italic text-[14px] text-center text-white top-[14.5px] whitespace-nowrap">Upload document</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r border-solid h-[832px] left-0 top-0 w-[256px]" data-name="Sidebar">
      <Container61 />
      <Button5 />
    </div>
  );
}

function Icon17() {
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

function Container68() {
  return (
    <div className="bg-[#f8fafc] h-[35px] relative rounded-[8px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[17px] py-px relative size-full">
        <Icon17 />
        <TextInput />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Sarah Mitchell</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex h-[14.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Super Admin</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="flex-[1_0_0] h-[31.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">SM</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[36px] items-center left-[104px] top-0 w-[142.422px]" data-name="Container">
      <Container71 />
      <Container74 />
    </div>
  );
}

function Icon18() {
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

function Container76() {
  return <div className="absolute bg-[#ef4444] border-[1.5px] border-solid border-white left-[23px] rounded-[3.5px] size-[7px] top-[6px]" data-name="Container" />;
}

function Container75() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[36px] top-0" data-name="Container">
      <Icon18 />
      <Container76 />
    </div>
  );
}

function Icon19() {
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

function Container77() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] px-[8px] rounded-[8px] size-[36px] top-0" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[36px] relative shrink-0 w-[246.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container70 />
        <Container75 />
        <Container77 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-[256px] pb-px px-[32px] top-0 w-[1214px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container68 />
      <Container69 />
    </div>
  );
}

export default function SocialMediaBrandManagement() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Social Media — Brand Management">
      <MainContent />
      <Sidebar />
      <Header />
    </div>
  );
}