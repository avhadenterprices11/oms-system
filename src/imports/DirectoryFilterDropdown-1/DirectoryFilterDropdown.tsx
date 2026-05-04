"use client";
import svgPaths from "./svg-npneotyt13";

function Container2() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[36px] left-0 not-italic text-[#0f172a] text-[30px] top-[-0.56px] tracking-[-0.75px] whitespace-nowrap">Directory</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24.002px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-0.78px] whitespace-nowrap">Browse and manage team members</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[63.993px] relative shrink-0 w-[271.727px]" data-name="Container">
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
          <path d={svgPaths.p1ce78180} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.49926" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5048e5] flex-[1_0_0] h-[36.667px] min-w-px relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[87.98px] not-italic text-[14px] text-center text-white top-[10px] whitespace-nowrap">Add Employee</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[36.667px] relative shrink-0 w-[153.247px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button />
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

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[11.997px] top-[9.05px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.p2386cb80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[74.35px] size-[11.997px] top-[9.05px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.p25c42840} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.79948" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(80,72,229,0.04)] border-[#5048e5] border-[0.556px] border-solid h-[31.215px] left-0 rounded-[8px] top-0 w-[99.453px]" data-name="Container">
      <Icon1 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[29.99px] not-italic text-[#5048e5] text-[13px] top-[7px] whitespace-nowrap">{` Filters `}</p>
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[91.65px] size-[11.997px] top-[9.05px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.p25c42840} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.79948" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[31.215px] left-[109.45px] rounded-[8px] top-0 w-[116.753px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[12px] not-italic text-[#334155] text-[13px] top-[7px] whitespace-nowrap">{`Department `}</p>
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[45.01px] size-[11.997px] top-[9.05px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.p25c42840} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.79948" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[31.215px] left-[236.21px] rounded-[8px] top-0 w-[70.113px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[12px] not-italic text-[#334155] text-[13px] top-[7px] whitespace-nowrap">{`Role `}</p>
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[57.51px] size-[11.997px] top-[9.05px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9965 11.9965">
        <g id="Icon">
          <path d={svgPaths.p25c42840} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.79948" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[31.215px] left-[316.32px] rounded-[8px] top-0 w-[82.613px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[12px] not-italic text-[#334155] text-[13px] top-[7px] whitespace-nowrap">{`Status `}</p>
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_15_5799)" id="Icon">
          <path d={svgPaths.p10aec80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49926" />
          <path d={svgPaths.p19e0e340} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.49926" />
        </g>
        <defs>
          <clipPath id="clip0_15_5799">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[180px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Search employees...</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[5.998px] h-[31.215px] items-center left-[734.91px] pl-[12.553px] pr-[0.556px] py-[0.556px] rounded-[8px] top-0 w-[225.095px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon6 />
      <TextInput />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[31.215px] left-[32px] top-[103.99px] w-[960.009px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-0 w-[209.731px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[0.5px] uppercase">Department</p>
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[26.44px] w-[209.731px]" data-name="Label">
      <Checkbox />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Engineering`}</p>
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label1() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[51.1px] w-[209.731px]" data-name="Label">
      <Checkbox1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Sales`}</p>
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label2() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[75.76px] w-[209.731px]" data-name="Label">
      <Checkbox2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Marketing`}</p>
    </div>
  );
}

function Checkbox3() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label3() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[100.43px] w-[209.731px]" data-name="Label">
      <Checkbox3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Operations`}</p>
    </div>
  );
}

function Checkbox4() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label4() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[125.09px] w-[209.731px]" data-name="Label">
      <Checkbox4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Design`}</p>
    </div>
  );
}

function Checkbox5() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label5() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[149.75px] w-[209.731px]" data-name="Label">
      <Checkbox5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Finance`}</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[174.41px] left-0 top-0 w-[209.731px]" data-name="Container">
      <Container14 />
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-0 w-[209.731px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[0.5px] uppercase">Role</p>
    </div>
  );
}

function Checkbox6() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label6() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[26.44px] w-[209.731px]" data-name="Label">
      <Checkbox6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Developer`}</p>
    </div>
  );
}

function Checkbox7() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label7() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[51.1px] w-[209.731px]" data-name="Label">
      <Checkbox7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Designer`}</p>
    </div>
  );
}

function Checkbox8() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label8() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[75.76px] w-[209.731px]" data-name="Label">
      <Checkbox8 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Manager`}</p>
    </div>
  );
}

function Checkbox9() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label9() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[100.43px] w-[209.731px]" data-name="Label">
      <Checkbox9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Analyst`}</p>
    </div>
  );
}

function Checkbox10() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label10() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[125.09px] w-[209.731px]" data-name="Label">
      <Checkbox10 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Lead`}</p>
    </div>
  );
}

function Checkbox11() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label11() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[149.75px] w-[209.731px]" data-name="Label">
      <Checkbox11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Executive`}</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[174.41px] left-[233.72px] top-0 w-[209.731px]" data-name="Container">
      <Container16 />
      <Label6 />
      <Label7 />
      <Label8 />
      <Label9 />
      <Label10 />
      <Label11 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-0 w-[209.731px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[0.5px] uppercase">Status</p>
    </div>
  );
}

function Checkbox12() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label12() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[26.44px] w-[209.731px]" data-name="Label">
      <Checkbox12 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Active`}</p>
    </div>
  );
}

function Checkbox13() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label13() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[51.1px] w-[209.731px]" data-name="Label">
      <Checkbox13 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` On Leave`}</p>
    </div>
  );
}

function Checkbox14() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label14() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[75.76px] w-[209.731px]" data-name="Label">
      <Checkbox14 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Onboarding`}</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[174.41px] left-[467.45px] top-0 w-[209.731px]" data-name="Container">
      <Container18 />
      <Label12 />
      <Label13 />
      <Label14 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-0 w-[209.74px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[0.5px] uppercase">Location</p>
    </div>
  );
}

function Checkbox15() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label15() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[26.44px] w-[209.74px]" data-name="Label">
      <Checkbox15 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Mumbai`}</p>
    </div>
  );
}

function Checkbox16() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label16() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[51.1px] w-[209.74px]" data-name="Label">
      <Checkbox16 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Bangalore`}</p>
    </div>
  );
}

function Checkbox17() {
  return <div className="absolute left-0 size-[15.998px] top-[0.33px]" data-name="Checkbox" />;
}

function Label17() {
  return (
    <div className="absolute h-[16.667px] left-0 top-[75.76px] w-[209.74px]" data-name="Label">
      <Checkbox17 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[23.99px] not-italic text-[#334155] text-[14px] top-0 whitespace-nowrap">{` Remote`}</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[174.41px] left-[701.17px] top-0 w-[209.74px]" data-name="Container">
      <Container20 />
      <Label15 />
      <Label16 />
      <Label17 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[174.41px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[33.212px] relative rounded-[8px] shrink-0 w-[66.528px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[33.55px] not-italic text-[#64748b] text-[13px] text-center top-[8.55px] whitespace-nowrap">Clear</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#5048e5] h-[33.212px] relative rounded-[8px] shrink-0 w-[76.858px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[38.5px] not-italic text-[13px] text-center text-white top-[8.55px] whitespace-nowrap">Apply</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[11.997px] h-[49.766px] items-start justify-end pt-[16.554px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[293.273px] items-start left-[32px] pb-[0.556px] pt-[24.549px] px-[24.549px] rounded-[16px] top-[135.21px] w-[960.009px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.12)]" />
      <Container12 />
      <Container21 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[87.94px] rounded-[23.997px] size-[47.995px] top-[23.99px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(254, 202, 202) 0%, rgb(252, 165, 165) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">R</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[76.46px] top-[81.99px] w-[70.972px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap">Ravi Kumar</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[53.92px] top-[98.1px] w-[116.042px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">Full Stack Developer</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[137.648px] left-0 opacity-50 rounded-[24px] top-0 w-[225px]" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[87.94px] rounded-[23.997px] size-[47.995px] top-[23.99px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">A</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[65.24px] top-[81.99px] w-[93.403px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap">Ashwini Reddy</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[62.46px] top-[98.1px] w-[98.958px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">Engineering Lead</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[137.648px] left-[245px] opacity-50 rounded-[24px] top-0 w-[225px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[87.94px] rounded-[23.997px] size-[47.995px] top-[23.99px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(153, 246, 228) 0%, rgb(94, 234, 212) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">J</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[77px] top-[81.99px] w-[69.87px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap">Jordan Lee</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[69.79px] top-[98.1px] w-[84.297px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">Sales Manager</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[137.648px] left-[490px] opacity-50 rounded-[24px] top-0 w-[225px]" data-name="Container">
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[87.95px] rounded-[23.997px] size-[47.995px] top-[23.99px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(253, 230, 138) 0%, rgb(251, 191, 36) 100%)" }} data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">N</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[74.63px] top-[81.99px] w-[74.644px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap">Nina Okafor</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[76.28px] top-[98.1px] w-[71.319px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">UX Designer</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[137.648px] left-[735px] opacity-50 rounded-[24px] top-0 w-[225.009px]" data-name="Container">
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[137.648px] left-[32px] top-[448.48px] w-[960.009px]" data-name="Container">
      <Container23 />
      <Container27 />
      <Container31 />
      <Container35 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[960px] left-[256px] overflow-clip top-0 w-[1024.002px]" data-name="Main Content">
      <Container />
      <Container5 />
      <Container11 />
      <Container22 />
    </div>
  );
}

function Container39() {
  return <div className="absolute h-0 left-0 top-[960px] w-[1280px]" data-name="Container" />;
}

function Body() {
  return (
    <div className="absolute h-[1023.993px] left-0 overflow-clip top-[63.99px] w-[1280px]" data-name="Body">
      <MainContent />
      <Container39 />
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

function Icon7() {
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

function Container42() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.998px] pr-[11.007px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-0 w-[38.533px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.67px] w-[38.533px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[38.533px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.997px] items-center pl-[23.993px] relative size-full">
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
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
        <Icon8 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Icon9() {
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
        <Icon9 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">People</p>
      </div>
    </div>
  );
}

function Icon10() {
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
        <Icon10 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon11() {
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
        <Icon11 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Icon12() {
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
        <Icon12 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Icon13() {
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
        <Icon13 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Icon14() {
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
        <Icon14 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">CRM</p>
      </div>
    </div>
  );
}

function Icon15() {
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
        <Icon15 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Client Delivery</p>
      </div>
    </div>
  );
}

function Icon16() {
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
        <Icon16 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Social Media</p>
      </div>
    </div>
  );
}

function Icon17() {
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
        <Icon17 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Icon18() {
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
        <Icon18 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Documents</p>
      </div>
    </div>
  );
}

function Icon19() {
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
        <Icon19 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Leave</p>
      </div>
    </div>
  );
}

function Icon20() {
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
        <Icon20 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[33.325px] relative shrink-0 w-[223.446px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[12px] not-italic text-[#94a3b8] text-[11px] top-[16px] tracking-[0.6px] uppercase whitespace-nowrap">System</p>
      </div>
    </div>
  );
}

function Icon21() {
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
        <Icon21 />
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
          <Container46 />
          <Link13 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697.179px] items-start left-0 top-0 w-[255.443px]" data-name="Container">
      <Container41 />
      <Navigation />
    </div>
  );
}

function Icon22() {
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
      <Icon22 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.49px] not-italic text-[14px] text-center text-white top-[14.65px] whitespace-nowrap">Upload document</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r-[0.556px] border-solid h-[1023.993px] left-0 top-0 w-[255.998px]" data-name="Sidebar">
      <Container40 />
      <Button3 />
    </div>
  );
}

function Icon23() {
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

function TextInput1() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[320.894px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Search resources, tasks, or teammates...</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#f8fafc] h-[33.767px] relative rounded-[8px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[16.554px] pr-[0.556px] py-[0.556px] relative size-full">
        <Icon23 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[53.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative rounded-[17.999px] shrink-0 size-[35.998px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[35.998px] items-center left-[103.99px] top-0 w-[99.991px]" data-name="Container">
      <Container50 />
      <Container53 />
    </div>
  );
}

function Icon24() {
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

function Container55() {
  return <div className="absolute bg-[#ef4444] border-[1.111px] border-solid border-white left-[23px] rounded-[3.498px] size-[6.997px] top-[6px]" data-name="Container" />;
}

function Container54() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon24 />
      <Container55 />
    </div>
  );
}

function Icon25() {
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

function Container56() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] pl-[7.995px] pr-[8.003px] rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[203.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container49 />
        <Container54 />
        <Container56 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.993px] items-center justify-between left-[256px] pb-[0.556px] pl-[31.997px] pr-[31.996px] top-0 w-[1377.335px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container47 />
      <Container48 />
    </div>
  );
}

export default function DirectoryFilterDropdown() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Directory — Filter Dropdown">
      <Group />
      <Sidebar />
      <Header />
    </div>
  );
}