"use client";
import svgPaths from "./svg-lel6k9sf4w";

function Container1() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[101.849px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Directory</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[103.984px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Workload</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[38.333px] relative shrink-0 w-[105.972px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-b-[1.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[11.667px] pt-[10px] px-[20px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[14px] whitespace-nowrap">Org Chart</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[37.891px] items-start pb-[0.556px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[36px] left-0 not-italic text-[#0f172a] text-[30px] top-[-0.56px] tracking-[-0.75px] whitespace-nowrap">Organisation Chart</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[48.003px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-0.78px] w-[290px]">Reporting structure across 6 departments</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[87.995px] relative shrink-0 w-[289.444px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.993px] items-start relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[13.993px] left-[17.55px] top-[20.23px] w-[11.91px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9097 13.9931">
        <g id="Icon">
          <path d={svgPaths.p1e7a1e80} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.27604" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[54.444px] relative rounded-[8px] shrink-0 w-[123.03px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[61.56px] not-italic text-[#334155] text-[14px] text-center top-[10.56px] w-[88px]">{` Collapse All `}</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[13.993px] left-[17.55px] top-[20.23px] w-[11.892px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8924 13.9931">
        <g id="Icon">
          <path d={svgPaths.p21b97b00} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.27418" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[54.444px] relative rounded-[8px] shrink-0 w-[115.911px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[58.06px] not-italic text-[#334155] text-[14px] text-center top-[10.56px] w-[81px]">{` Expand All `}</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[17.55px] size-[13.993px] top-[11.89px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p33330800} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
          <path d={svgPaths.p221b2200} id="Vector_2" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[101.554px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[62.04px] not-italic text-[#334155] text-[14px] text-center top-[10.56px] whitespace-nowrap">{` Export `}</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[13.993px] left-[17.55px] top-[20.23px] w-[11.927px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9271 13.9931">
        <g id="Icon">
          <path d={svgPaths.p30d4b520} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.2779" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[54.444px] relative rounded-[8px] shrink-0 w-[134.063px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[67.06px] not-italic text-[#334155] text-[14px] text-center top-[10.56px] w-[99px]">{` Edit Structure `}</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute h-[13.993px] left-[17px] top-[19.67px] w-[11.944px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9444 13.9931">
        <g id="Icon">
          <path d={svgPaths.p27584500} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.70635" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#5048e5] h-[53.333px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] shrink-0 w-[148.021px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[77.52px] not-italic text-[14px] text-center text-white top-[16.56px] w-[115px]">{` Add Employee `}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[54.444px] relative shrink-0 w-[670.564px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[87.995px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[479.51px] top-[169.09px] w-[0.998px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-[#e2e8f0] h-[0.998px] left-0 top-[197.08px] w-[960.009px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[65.33px] rounded-[10px] size-[35.998px] top-[20px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">S</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[15.998px] left-[37.98px] overflow-clip top-[62px] w-[90.712px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[45.5px] not-italic text-[#0f172a] text-[13px] text-center top-[-0.56px] whitespace-nowrap">Sarah Mitchell</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[14.002px] items-start left-[71.81px] overflow-clip top-[83.99px] w-[23.047px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">CEO</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17.995px] items-start left-[53.79px] px-[8px] py-[2px] rounded-[9999px] top-[105.99px] w-[59.071px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Executive</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d="M2 4L5 7L8 4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[72.33px] px-[5.999px] py-[0.556px] rounded-[6px] size-[22px] top-[132.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Icon5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-white border-[#5048e5] border-b-[0.556px] border-l-[2.778px] border-r-[0.556px] border-solid border-t-[0.556px] h-[145.095px] left-0 rounded-[16px] top-0 w-[170px]" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[145.095px] left-[395px] top-[23.99px] w-[170px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[74.5px] top-0 w-[0.998px]" data-name="Container" />;
}

function Container23() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[55.33px] rounded-[10px] size-[35.998px] top-[16px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(251, 207, 232) 0%, rgb(249, 168, 212) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">L</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[15.998px] left-[42.16px] overflow-clip top-[57.99px] w-[62.335px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[31.5px] not-italic text-[#0f172a] text-[13px] text-center top-[-0.56px] whitespace-nowrap">Lisa Chen</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[14.002px] items-start left-[35.97px] overflow-clip top-[79.99px] w-[74.714px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">VP Operations</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17.995px] items-start left-[41.03px] px-[8px] py-[2px] rounded-[9999px] top-[101.99px] w-[64.601px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Operations</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#ede9fe] content-stretch flex h-[17.656px] items-start left-[39.71px] px-[8px] py-[3px] rounded-[9999px] top-[129.97px] w-[67.231px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[10px] whitespace-nowrap">+3 reports</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d="M2 6L5 3L8 6" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[62.33px] px-[5.999px] py-[0.556px] rounded-[6px] size-[22px] top-[152.63px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Icon6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(80,72,229,0.04)] border-[#5048e5] border-[1.667px] border-solid h-[166.962px] left-0 rounded-[16px] top-[27.99px] w-[150px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[385.156px] left-[671.99px] top-0 w-[150px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[74.5px] top-0 w-[0.998px]" data-name="Container" />;
}

function Container32() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[56.44px] rounded-[10px] size-[35.998px] top-[16px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(153, 246, 228) 0%, rgb(94, 234, 212) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">T</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[15.998px] left-[31.23px] overflow-clip top-[57.99px] w-[86.415px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[43.5px] not-italic text-[#0f172a] text-[13px] text-center top-[-0.56px] whitespace-nowrap">Tomas Garcia</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex h-[14.002px] items-start left-[51.54px] overflow-clip top-[79.99px] w-[45.807px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">VP Sales</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17.995px] items-start left-[54.47px] px-[8px] py-[2px] rounded-[9999px] top-[101.99px] w-[39.939px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Sales</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#ede9fe] content-stretch flex h-[17.656px] items-start left-[40.99px] px-[8px] py-[3px] rounded-[9999px] top-[129.97px] w-[66.91px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[10px] whitespace-nowrap">+2 reports</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d="M2 6L5 3L8 6" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[63.45px] px-[5.999px] py-[0.556px] rounded-[6px] size-[22px] top-[152.63px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Icon7 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[164.74px] left-0 rounded-[16px] top-[27.99px] w-[150px]" data-name="Container">
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[385.156px] left-[845.98px] top-0 w-[150px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[74.5px] top-0 w-[0.998px]" data-name="Container" />;
}

function Container41() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[56.44px] rounded-[10px] size-[35.998px] top-[16px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(167, 243, 208) 0%, rgb(110, 231, 183) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">S</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[15.998px] left-[37.46px] overflow-clip top-[57.99px] w-[73.958px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[37px] not-italic text-[#0f172a] text-[13px] text-center top-[-0.56px] whitespace-nowrap">Sanya Patel</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[14.002px] items-start left-[39.53px] overflow-clip top-[79.99px] w-[69.818px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">VP Marketing</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17.995px] items-start left-[44.04px] px-[8px] py-[2px] rounded-[9999px] top-[101.99px] w-[60.79px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Marketing</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#ede9fe] content-stretch flex h-[17.656px] items-start left-[40.65px] px-[8px] py-[3px] rounded-[9999px] top-[129.97px] w-[67.587px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[10px] whitespace-nowrap">+4 reports</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d="M2 6L5 3L8 6" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[63.45px] px-[5.999px] py-[0.556px] rounded-[6px] size-[22px] top-[152.63px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Icon8 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[164.74px] left-0 rounded-[16px] top-[27.99px] w-[150px]" data-name="Container">
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[385.156px] left-[1019.97px] top-0 w-[150px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container48() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[323.5px] top-0 w-[0.998px]" data-name="Container" />;
}

function Container49() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[323.5px] top-[165.09px] w-[0.998px]" data-name="Container" />;
}

function Container50() {
  return <div className="absolute bg-[#e2e8f0] h-[0.998px] left-0 top-[193.08px] w-[647.995px]" data-name="Container" />;
}

function Container53() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[74.5px] top-0 w-[0.998px]" data-name="Container" />;
}

function Container54() {
  return <div className="absolute border-[#cbd5e1] border-[1.667px] border-dashed h-[120px] left-0 rounded-[16px] top-[27.99px] w-[150px]" data-name="Container" />;
}

function Container52() {
  return (
    <div className="h-[191.076px] relative shrink-0 w-[150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Container56() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[74.5px] top-0 w-[0.998px]" data-name="Container" />;
}

function Container58() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[56.44px] rounded-[10px] size-[35.998px] top-[16px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">J</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[15.998px] left-[39.3px] overflow-clip top-[57.99px] w-[70.295px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[35.5px] not-italic text-[#0f172a] text-[13px] text-center top-[-0.56px] whitespace-nowrap">Jordan Lee</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex h-[14.002px] items-start left-[27.38px] overflow-clip top-[79.99px] w-[94.132px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">Backend Engineer</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17.995px] items-start left-[39.98px] px-[8px] py-[2px] rounded-[9999px] top-[101.99px] w-[68.915px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Engineering</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[137.092px] left-0 rounded-[16px] top-[27.99px] w-[150px]" data-name="Container">
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[191.076px] relative shrink-0 w-[150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container63() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[74.5px] top-0 w-[0.998px]" data-name="Container" />;
}

function Container65() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[56.44px] rounded-[10px] size-[35.998px] top-[16px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(191, 219, 254) 0%, rgb(147, 197, 253) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">M</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[15.998px] left-[32.91px] overflow-clip top-[57.99px] w-[83.064px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[42.5px] not-italic text-[#0f172a] text-[13px] text-center top-[-0.56px] whitespace-nowrap">Marcus Vane</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex h-[14.002px] items-start left-[36.78px] overflow-clip top-[79.99px] w-[75.33px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">Lead Designer</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17.995px] items-start left-[51.14px] px-[8px] py-[2px] rounded-[9999px] top-[101.99px] w-[46.606px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Design</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-[#fef3c7] content-stretch flex h-[17.995px] items-start left-[47.02px] px-[7px] py-[2px] rounded-[9999px] top-[127.98px] w-[54.844px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#92400e] text-[9px] whitespace-nowrap">On Leave</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[163.082px] left-0 rounded-[16px] top-[27.99px] w-[150px]" data-name="Container">
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[191.076px] relative shrink-0 w-[150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container71() {
  return <div className="absolute bg-[#e2e8f0] h-[27.995px] left-[74.5px] top-0 w-[0.998px]" data-name="Container" />;
}

function Container73() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[56.44px] rounded-[10px] size-[35.998px] top-[16px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(217, 249, 157) 0%, rgb(190, 242, 100) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">N</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[15.998px] left-[36.73px] overflow-clip top-[57.99px] w-[75.425px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[38px] not-italic text-[#0f172a] text-[13px] text-center top-[-0.56px] whitespace-nowrap">Nina Okafor</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex h-[14.002px] items-start left-[40.25px] overflow-clip top-[79.99px] w-[68.385px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">HR Specialist</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17.995px] items-start left-[26.48px] px-[8px] py-[2px] rounded-[9999px] top-[101.99px] w-[95.911px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Human Resources</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-[#ede9fe] content-stretch flex h-[17.995px] items-start left-[41.52px] px-[7px] py-[2px] rounded-[9999px] top-[127.98px] w-[65.851px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#5048e5] text-[9px] whitespace-nowrap">Onboarding</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[163.082px] left-0 rounded-[16px] top-[27.99px] w-[150px]" data-name="Container">
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[191.076px] relative shrink-0 w-[150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[15.998px] h-[191.076px] items-start justify-center left-0 top-[194.08px] w-[647.995px]" data-name="Container">
      <Container52 />
      <Container55 />
      <Container62 />
      <Container70 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[56.44px] rounded-[10px] size-[35.998px] top-[16px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(254, 215, 170) 0%, rgb(253, 186, 116) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">A</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[15.998px] left-[27.1px] overflow-clip top-[57.99px] w-[94.679px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[47.5px] not-italic text-[#0f172a] text-[13px] text-center top-[-0.56px] whitespace-nowrap">Ashwini Reddy</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex h-[14.002px] items-start left-[34.6px] overflow-clip top-[79.99px] w-[79.679px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">VP Engineering</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[17.995px] items-start left-[39.98px] px-[8px] py-[2px] rounded-[9999px] top-[101.99px] w-[68.915px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Engineering</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d="M2 4L5 7L8 4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[63.45px] px-[5.999px] py-[0.556px] rounded-[6px] size-[22px] top-[124.98px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Icon9 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[137.092px] left-[248.99px] rounded-[16px] top-[27.99px] w-[150px]" data-name="Container">
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[12px] size-[13.993px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p69c3b00} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
          <path d={svgPaths.p47e9b0} id="Vector_2" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[35.998px] left-[7.99px] rounded-[8px] top-[7.99px] w-[184.01px]" data-name="Container">
      <Icon10 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[35.99px] not-italic text-[#334155] text-[13px] top-[9.94px] whitespace-nowrap">{` View Profile `}</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[12px] size-[13.993px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p97b1d00} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[35.998px] left-[7.99px] rounded-[8px] top-[43.99px] w-[184.01px]" data-name="Container">
      <Icon11 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[35.99px] not-italic text-[#334155] text-[13px] top-[9.94px] whitespace-nowrap">{` Edit Details `}</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[12px] size-[13.993px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_15_5927)" id="Icon">
          <path d={svgPaths.p124bb100} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
          <path d={svgPaths.p191ed880} id="Vector_2" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
        </g>
        <defs>
          <clipPath id="clip0_15_5927">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[35.998px] left-[7.99px] rounded-[8px] top-[79.99px] w-[184.01px]" data-name="Container">
      <Icon12 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[35.99px] not-italic text-[#334155] text-[13px] top-[9.94px] whitespace-nowrap">{` Reassign Reports `}</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[12px] size-[13.993px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p1f80dea0} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.99901" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[35.998px] left-[7.99px] rounded-[8px] top-[115.99px] w-[184.01px]" data-name="Container">
      <Icon13 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[35.99px] not-italic text-[#334155] text-[13px] top-[9.94px] whitespace-nowrap">{` Add Direct Report `}</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[12px] size-[13.993px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p2f573d80} id="Vector" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
          <path d="M4.99752 6.99653H8.99554" id="Vector_2" stroke="var(--stroke-0, #334155)" strokeWidth="1.49926" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[35.998px] left-[7.99px] rounded-[8px] top-[151.99px] w-[184.01px]" data-name="Container">
      <Icon14 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[35.99px] not-italic text-[#334155] text-[13px] top-[9.94px] whitespace-nowrap">{` Move to Department `}</p>
    </div>
  );
}

function Container90() {
  return <div className="absolute bg-[#e2e8f0] h-[0.998px] left-[19.99px] top-[191.98px] w-[160.017px]" data-name="Container" />;
}

function Icon15() {
  return (
    <div className="absolute left-[12px] size-[13.993px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p70542f0} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeWidth="1.49926" />
          <path d="M5.49727 6.49678V9.99504" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeWidth="1.49926" />
          <path d="M8.49578 6.49678V9.99504" id="Vector_3" stroke="var(--stroke-0, #EF4444)" strokeWidth="1.49926" />
          <path d="M1.49926 3.99802H12.4938" id="Vector_4" stroke="var(--stroke-0, #EF4444)" strokeWidth="1.49926" />
          <path d={svgPaths.pa030c00} id="Vector_5" stroke="var(--stroke-0, #EF4444)" strokeWidth="1.49926" />
        </g>
      </svg>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[35.998px] left-[7.99px] rounded-[8px] top-[196.97px] w-[184.01px]" data-name="Container">
      <Icon15 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[35.99px] not-italic text-[#ef4444] text-[13px] top-[9.94px] whitespace-nowrap">{` Remove from Chart `}</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_8px_16px_rgba(0,0,0,0.12),0px_2px_4px_rgba(0,0,0,0.06)] h-[240.964px] left-[413.99px] rounded-[12px] top-[32px] w-[200px]" data-name="Container">
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[385.156px] left-0 top-0 w-[647.995px]" data-name="Container">
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container78 />
      <Container84 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[385.156px] left-[-104.98px] top-[198.08px] w-[1169.974px]" data-name="Container">
      <Container20 />
      <Container29 />
      <Container38 />
      <Container47 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[623.238px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
      <Container19 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[841.12px] items-start left-[256px] pt-[20px] px-[31.997px] top-0 w-[1024.002px]" data-name="Main Content">
      <Container />
      <Container4 />
      <Container9 />
    </div>
  );
}

function Container92() {
  return <div className="absolute h-0 left-0 top-[841.12px] w-[1280px]" data-name="Container" />;
}

function Body() {
  return (
    <div className="absolute h-[1023.993px] left-0 top-[63.99px] w-[1280px]" data-name="Body">
      <MainContent />
      <Container92 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[63.99px]">
      <Body />
    </div>
  );
}

function Icon16() {
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

function Container95() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.998px] pr-[11.007px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-0 w-[38.533px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.67px] w-[38.533px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[38.533px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container97 />
        <Container98 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.997px] items-center pl-[23.993px] relative size-full">
          <Container95 />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
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
        <Icon17 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[12px] size-[17.995px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9948 17.9948">
        <g id="Icon">
          <path d={svgPaths.p1c966500} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p1ee74680} id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p10e98f80} id="Vector_3" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p2e77e500} id="Vector_4" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon18 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">People</p>
      </div>
    </div>
  );
}

function Icon19() {
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
        <Icon19 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon20() {
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
        <Icon20 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Icon21() {
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
        <Icon21 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Icon22() {
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
        <Icon22 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Icon23() {
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
        <Icon23 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">CRM</p>
      </div>
    </div>
  );
}

function Icon24() {
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
        <Icon24 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Client Delivery</p>
      </div>
    </div>
  );
}

function Icon25() {
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
        <Icon25 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Social Media</p>
      </div>
    </div>
  );
}

function Icon26() {
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
        <Icon26 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Icon27() {
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
        <Icon27 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Documents</p>
      </div>
    </div>
  );
}

function Icon28() {
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
        <Icon28 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Leave</p>
      </div>
    </div>
  );
}

function Icon29() {
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
        <Icon29 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[33.325px] relative shrink-0 w-[223.446px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[12px] not-italic text-[#94a3b8] text-[11px] top-[16px] tracking-[0.6px] uppercase whitespace-nowrap">System</p>
      </div>
    </div>
  );
}

function Icon30() {
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
        <Icon30 />
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
          <Container99 />
          <Link13 />
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697.179px] items-start left-0 top-0 w-[255.443px]" data-name="Container">
      <Container94 />
      <Navigation />
    </div>
  );
}

function Icon31() {
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

function Button5() {
  return (
    <div className="absolute bg-[#5048e5] h-[45.981px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[862.47px] w-[223.446px]" data-name="Button">
      <Icon31 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[107.99px] not-italic text-[14px] text-center text-white top-[14.65px] whitespace-nowrap">{` Upload document `}</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r-[0.556px] border-solid h-[924.444px] left-0 top-0 w-[255.998px]" data-name="Sidebar">
      <Container93 />
      <Button5 />
    </div>
  );
}

function Icon32() {
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

function Container100() {
  return (
    <div className="bg-[#f8fafc] h-[33.767px] relative rounded-[8px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[16.554px] pr-[0.556px] py-[0.556px] relative size-full">
        <Icon32 />
        <TextInput />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[53.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container104 />
        <Container105 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative rounded-[17.999px] shrink-0 size-[35.998px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[35.998px] items-center left-[103.99px] top-0 w-[99.991px]" data-name="Container">
      <Container103 />
      <Container106 />
    </div>
  );
}

function Icon33() {
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

function Container108() {
  return <div className="absolute bg-[#ef4444] border-[1.111px] border-solid border-white left-[23px] rounded-[3.498px] size-[6.997px] top-[6px]" data-name="Container" />;
}

function Container107() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon33 />
      <Container108 />
    </div>
  );
}

function Icon34() {
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

function Container109() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] pl-[7.995px] pr-[8.003px] rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[203.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container102 />
        <Container107 />
        <Container109 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.993px] items-center justify-between left-[256px] pb-[0.556px] pl-[31.997px] pr-[31.996px] top-0 w-[1377.335px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container100 />
      <Container101 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[19.444px] relative shrink-0 w-[75.417px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Edit Node</p>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p3733f8a0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.99901" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.002px] py-[0.556px] relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[72.552px] relative shrink-0 w-[359.444px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[0.556px] px-[23.993px] relative size-full">
        <Heading />
        <Button6 />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[47.995px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(254, 215, 170) 0%, rgb(253, 186, 116) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex h-[18.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[15px] whitespace-nowrap">Ashwini Reddy</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">Engineering</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[34.774px] relative shrink-0 w-[109.245px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Container116 />
        <Container117 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[68.55px] relative shrink-0 w-[311.458px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.993px] items-center pb-[0.556px] relative size-full">
        <Container114 />
        <Container115 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[14.444px] relative shrink-0 w-[311.458px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.4px] uppercase">Job Title</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[311.458px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">VP Engineering</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[58.22px] relative shrink-0 w-[311.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.998px] items-start relative size-full">
        <Label />
        <TextInput1 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[14.444px] relative shrink-0 w-[311.458px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.4px] uppercase">Department</p>
      </div>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-347.75px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-347.75px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-347.75px]" data-name="Option" />;
}

function Option3() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-347.75px]" data-name="Option" />;
}

function Option4() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-347.75px]" data-name="Option" />;
}

function Option5() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-347.75px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white h-[38.889px] relative rounded-[8px] shrink-0 w-[311.458px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-347.75px] whitespace-nowrap">​</p>
        <Option />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-347.75px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option1 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-347.75px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option2 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-347.75px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option3 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-347.75px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option4 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-347.75px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option5 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-347.75px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`      `}</p>
        </div>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[59.332px] relative shrink-0 w-[311.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.998px] items-start relative size-full">
        <Label1 />
        <Dropdown />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[14.444px] relative shrink-0 w-[311.458px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.4px] uppercase">Reports To</p>
      </div>
    </div>
  );
}

function Option6() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-427.08px]" data-name="Option" />;
}

function Option7() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-427.08px]" data-name="Option" />;
}

function Option8() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-427.08px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-white h-[38.889px] relative rounded-[8px] shrink-0 w-[311.458px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-427.08px] whitespace-nowrap">​</p>
        <Option6 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-427.08px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option7 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-427.08px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option8 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-427.08px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`      `}</p>
        </div>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[59.332px] relative shrink-0 w-[311.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.998px] items-start relative size-full">
        <Label2 />
        <Dropdown1 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[14.444px] relative shrink-0 w-[311.458px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] tracking-[0.4px] uppercase">Employment Type</p>
      </div>
    </div>
  );
}

function Option9() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-506.41px]" data-name="Option" />;
}

function Option10() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-506.41px]" data-name="Option" />;
}

function Option11() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-506.41px]" data-name="Option" />;
}

function Option12() {
  return <div className="absolute left-[-1297.88px] size-0 top-[-506.41px]" data-name="Option" />;
}

function Dropdown2() {
  return (
    <div className="bg-white h-[38.889px] relative rounded-[8px] shrink-0 w-[311.458px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-506.41px] whitespace-nowrap">​</p>
        <Option9 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-506.41px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option10 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-506.41px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option11 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-506.41px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`        `}</p>
        </div>
        <Option12 />
        <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[-1297.88px] not-italic text-[#0f172a] text-[14px] top-[-506.41px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 whitespace-pre">​</p>
          <p className="leading-[normal] whitespace-pre">{`      `}</p>
        </div>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[59.332px] relative shrink-0 w-[311.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.998px] items-start relative size-full">
        <Label3 />
        <Dropdown2 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[311.458px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Direct Reports (4)</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[73.637px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Ravi Kumar</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[73.637px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Full Stack Dev</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[30.443px] relative shrink-0 w-[73.637px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.998px] items-start relative size-full">
        <Container127 />
        <Container128 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.pb0ab3c8} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.998px] relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[51.554px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12.553px] py-[0.556px] relative size-full">
          <Container126 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[94.132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Jordan Lee</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[94.132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">Backend Engineer</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[30.443px] relative shrink-0 w-[94.132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.998px] items-start relative size-full">
        <Container131 />
        <Container132 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.pb0ab3c8} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.998px] relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[51.554px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12.553px] py-[0.556px] relative size-full">
          <Container130 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[82.118px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Marcus Vane</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[82.118px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">Lead Designer</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[30.443px] relative shrink-0 w-[82.118px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.998px] items-start relative size-full">
        <Container135 />
        <Container136 />
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.pb0ab3c8} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.998px] relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[51.554px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12.553px] py-[0.556px] relative size-full">
          <Container134 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[74.644px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Nina Okafor</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[74.644px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px]">HR Specialist</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[30.443px] relative shrink-0 w-[74.644px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.998px] items-start relative size-full">
        <Container139 />
        <Container140 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[11.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.pb0ab3c8} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[23.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.998px] relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[51.554px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12.553px] py-[0.556px] relative size-full">
          <Container138 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.998px] h-[224.21px] items-start left-0 top-[24.11px] w-[311.458px]" data-name="Container">
      <Container125 />
      <Container129 />
      <Container133 />
      <Container137 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-0 size-[13.993px] top-[1.06px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p1f80dea0} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.99901" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute h-[16.111px] left-0 top-[258.31px] w-[143.594px]" data-name="Button">
      <Icon40 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[81.99px] not-italic text-[#5048e5] text-[13px] text-center top-0 whitespace-nowrap">{` + Add Direct Report `}</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[277.248px] relative shrink-0 w-[311.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container123 />
        <Container124 />
        <Button11 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="flex-[817.118_0_0] min-h-px relative w-[359.444px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pl-[23.993px] pt-[23.993px] relative size-full">
          <Container113 />
          <Container118 />
          <Container119 />
          <Container120 />
          <Container121 />
          <Container122 />
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white flex-[150.286_0_0] h-[37.778px] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17.556px] py-[10.556px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#5048e5] flex-[149.175_0_0] h-[37.778px] min-w-px relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Save Changes</p>
        </div>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[70.33px] relative shrink-0 w-[359.444px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-start pt-[16.554px] px-[23.993px] relative size-full">
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[-4px_0px_12px_rgba(0,0,0,0.06)] flex flex-col h-[960px] items-start left-[1273.33px] pl-[0.556px] top-[63.99px] w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container111 />
      <Container112 />
      <Container141 />
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[55.33px] rounded-[10px] size-[37.233px] top-[15.84px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(254, 202, 202) 0%, rgb(252, 165, 165) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">R</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute h-[18.498px] left-[37.33px] overflow-clip top-[57.84px] w-[72.424px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[36.03px] not-italic text-[#0f172a] text-[13px] text-center top-[-3.07px] whitespace-nowrap">Ravi Kumar</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute content-stretch flex h-[16.563px] items-start left-[36.33px] overflow-clip top-[79.83px] w-[74.081px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#64748b] text-[11px] text-center whitespace-nowrap">Full Stack Dev</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[20.389px] items-start left-[38.83px] px-[8px] py-[2px] rounded-[9999px] top-[101.83px] w-[69.501px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#475569] text-[9px] whitespace-nowrap">Engineering</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="bg-white border-[#5048e5] border-[1.667px] border-dashed h-[139px] opacity-92 relative rounded-[16px] shadow-[0px_12px_32px_0px_rgba(80,72,229,0.18),0px_4px_12px_0px_rgba(0,0,0,0.08)] w-[150px]" data-name="Container">
      <Container143 />
      <Container144 />
      <Container145 />
      <Container146 />
    </div>
  );
}

export default function PeopleOrgChart() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="People — Org Chart">
      <Group />
      <Sidebar />
      <Header />
      <Container110 />
      <div className="absolute flex h-[144.15px] items-center justify-center left-[697.62px] top-[427.58px] w-[154.76px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "96" } as React.CSSProperties}>
        <div className="-rotate-2 flex-none">
          <Container142 />
        </div>
      </div>
    </div>
  );
}