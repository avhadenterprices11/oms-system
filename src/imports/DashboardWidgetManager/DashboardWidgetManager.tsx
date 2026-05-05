"use client";
import svgPaths from "./svg-722p30o1v8";

function Link() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[67.813px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">Dashboard</p>
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
    <div className="h-[15.5px] relative shrink-0 w-[122.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] whitespace-nowrap">Customize Widgets</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative content-stretch flex gap-[6px] h-[15.5px] items-center w-full" data-name="Container">
      <Link />
      <Text />
      <Text1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[36px] min-w-px not-italic relative text-[#0f172a] text-[30px] tracking-[-0.75px]">Widget Library</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#64748b] text-[16px] top-[-1px] whitespace-nowrap">Browse, preview, and arrange widgets on your dashboard</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[435.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 cursor-pointer hover:bg-slate-50 transition-colors" data-name="Button" onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] cursor-pointer hover:bg-[#4338ca] transition-colors shrink-0" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Save Layout</p>
      </div>
    </div>
  );
}

function Container5({ onClose, onSave }: { onClose?: () => void; onSave?: () => void }) {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button onClick={onClose} />
        <Button1 onClick={onSave} />
      </div>
    </div>
  );
}

function Container1({ onClose, onSave }: { onClose?: () => void; onSave?: () => void }) {
  return (
    <div className="relative content-stretch flex h-[64px] items-start justify-between w-full mt-[31.5px]" data-name="Container">
      <Container2 />
      <Container5 onClose={onClose} onSave={onSave} />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[140.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Available Widgets</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#ede9fe] h-[19px] relative rounded-[9999px] shrink-0 w-[76.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[3px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[11px] whitespace-nowrap">17 widgets</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-center justify-between left-[24px] top-[24px] w-[290px]" data-name="Container">
      <Container9 />
      <Text2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[8px] px-[4px] top-0 w-[290px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.6px] uppercase">Work</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_1460)" id="Icon">
          <path d="M3 8L6 11L12 5" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
          <path d={svgPaths.pf127b00} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_2_1460">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">My Tasks</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Tasks assigned to you</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[195_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container17() {
  return <div className="bg-[#10b981] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container12({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[20px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container13 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39933f40} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
          <path d="M8 4V8L11 10" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Tasks Due Today</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">{`Today's deadlines`}</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[195_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container23() {
  return <div className="bg-[#10b981] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container18({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[89px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container19 />
      <Container20 />
      <Container23 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 9H1V15H4V9Z" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
          <path d="M9.5 4H6.5V15H9.5V4Z" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
          <path d="M15 7H12V15H15V7Z" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Task Stats</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Completion trends</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container24({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[158px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_1440)" id="Icon">
          <path d={svgPaths.p15b30000} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
          <path d="M2 5L8 8L14 5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_2_1440">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">My Projects</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">{`Projects you're on`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[195_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#10b981] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container29({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[227px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container30 />
      <Container31 />
      <Container34 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 12L6 7L9 10L14 4" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Project Progress</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Milestone tracking</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container35({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[296px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[8px] px-[4px] top-[375px] w-[290px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.6px] uppercase">Communication</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_1493)" id="Icon">
          <path d="M2 3H14V11H6L2 15V3Z" id="Vector" stroke="var(--stroke-0, #059669)" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_2_1493">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Unread Messages</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Recent chat activity</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[195_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container46() {
  return <div className="bg-[#10b981] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container41({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[395px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container42 />
      <Container43 />
      <Container46 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3b7d7c00} id="Vector" stroke="var(--stroke-0, #059669)" strokeWidth="1.8" />
          <path d="M2 6H14" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeWidth="1.8" />
          <path d="M5 1V5M11 1V5" id="Vector_3" stroke="var(--stroke-0, #059669)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Upcoming Meetings</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Next scheduled calls</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[195_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container52() {
  return <div className="bg-[#10b981] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container47({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[464px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container48 />
      <Container49 />
      <Container52 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39933f40} id="Vector" stroke="var(--stroke-0, #059669)" strokeWidth="1.8" />
          <path d="M8 4V8L11 9" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Meeting Hours</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Weekly meeting load</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container53({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[533px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[8px] px-[4px] top-[612px] w-[290px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.6px] uppercase">People</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2cd79500} id="Vector" stroke="var(--stroke-0, #D97706)" strokeWidth="1.8" />
          <path d="M5 2V6M11 2V6" id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#fef3c7] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Leave Balance</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Days remaining</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[195_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Container64() {
  return <div className="bg-[#10b981] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container59({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[632px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container60 />
      <Container61 />
      <Container64 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p269f3100} id="Vector" stroke="var(--stroke-0, #D97706)" strokeWidth="1.8" />
          <path d={svgPaths.p1faf4600} id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#fef3c7] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Team Availability</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">{`Who's online today`}</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Container65({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[701px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container66 />
      <Container67 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3 13L6 10L9 13L13 8" id="Vector" stroke="var(--stroke-0, #D97706)" strokeWidth="1.8" />
          <path d={svgPaths.p3720cf00} id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#fef3c7] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Onboarding Progress</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">New hire tracking</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container70({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[770px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[8px] px-[4px] top-[849px] w-[290px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.6px] uppercase">CRM</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12251300} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#ede9fe] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Pipeline Summary</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Deal stage breakdown</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Container76({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[869px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container77 />
      <Container78 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39933f40} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeWidth="1.8" />
          <path d="M5 8L7 10L11 5" id="Vector_2" stroke="var(--stroke-0, #8B5CF6)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#ede9fe] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Active Deals</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Deals in progress</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container84 />
        <Container85 />
      </div>
    </div>
  );
}

function Container81({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[938px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container82 />
      <Container83 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14V12H2V4Z" id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeWidth="1.8" />
          <path d="M2 4L8 9L14 4" id="Vector_2" stroke="var(--stroke-0, #8B5CF6)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#ede9fe] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Recent CRM Activity</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Latest interactions</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container89 />
        <Container90 />
      </div>
    </div>
  );
}

function Container86({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[1007px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[8px] px-[4px] top-[1086px] w-[290px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px] tracking-[0.6px] uppercase">System</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3 4H13L12 14H4L3 4Z" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.8" />
          <path d="M6 8V12M10 8V12" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Announcements</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Company updates</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="flex-[195_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function Container97() {
  return <div className="bg-[#10b981] rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container92({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[1106px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container93 />
      <Container94 />
      <Container97 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39933f40} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.8" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">System Health</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Service status</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Container98({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[1175px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container99 />
      <Container100 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_1395)" id="Icon">
          <path d={svgPaths.p1427ce00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_2_1395">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex h-[15.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Quick Actions</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[14.297px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.3px] left-0 not-italic text-[#94a3b8] text-[11px] top-[0.5px] whitespace-nowrap">Shortcut buttons</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="flex-[215_0_0] h-[31.797px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container106 />
        <Container107 />
      </div>
    </div>
  );
}

function Container103({ active, onClick }: { active?: boolean; onClick?: () => void }) {
  return (
    <div
      className={`absolute content-stretch flex gap-[12px] h-[63px] items-center left-[8px] px-[13.5px] py-[1.5px] rounded-[12px] top-[1244px] w-[290px] cursor-pointer transition-all ${
        active ? "bg-[rgba(80,72,229,0.06)]" : "hover:bg-slate-50"
      }`}
      data-name="Container"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          active ? "border-[rgba(80,72,229,0.25)]" : "border-transparent"
        }`}
      />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container10({ activeWidgets, toggleWidget, filteredWidgets }: { activeWidgets: string[]; toggleWidget: (id: string) => void; filteredWidgets: any[] }) {
  const isWidgetVisible = (id: string) => filteredWidgets.some(w => w.id === id);

  return (
    <div className="absolute h-[1313px] left-[16px] top-[113px] w-[306px]" data-name="Container">
      <Container11 />
      {isWidgetVisible("my-tasks") && <Container12 active={activeWidgets.includes("my-tasks")} onClick={() => toggleWidget("my-tasks")} />}
      {isWidgetVisible("due-today") && <Container18 active={activeWidgets.includes("due-today")} onClick={() => toggleWidget("due-today")} />}
      {isWidgetVisible("task-stats") && <Container24 active={activeWidgets.includes("task-stats")} onClick={() => toggleWidget("task-stats")} />}
      {isWidgetVisible("my-projects") && <Container29 active={activeWidgets.includes("my-projects")} onClick={() => toggleWidget("my-projects")} />}
      {isWidgetVisible("project-progress") && <Container35 active={activeWidgets.includes("project-progress")} onClick={() => toggleWidget("project-progress")} />}
      <Container40 />
      {isWidgetVisible("unread-messages") && <Container41 active={activeWidgets.includes("unread-messages")} onClick={() => toggleWidget("unread-messages")} />}
      {isWidgetVisible("upcoming-meetings") && <Container47 active={activeWidgets.includes("upcoming-meetings")} onClick={() => toggleWidget("upcoming-meetings")} />}
      {isWidgetVisible("meeting-hours") && <Container53 active={activeWidgets.includes("meeting-hours")} onClick={() => toggleWidget("meeting-hours")} />}
      <Container58 />
      {isWidgetVisible("leave-balance") && <Container59 active={activeWidgets.includes("leave-balance")} onClick={() => toggleWidget("leave-balance")} />}
      {isWidgetVisible("team-availability") && <Container65 active={activeWidgets.includes("team-availability")} onClick={() => toggleWidget("team-availability")} />}
      {isWidgetVisible("onboarding-progress") && <Container70 active={activeWidgets.includes("onboarding-progress")} onClick={() => toggleWidget("onboarding-progress")} />}
      <Container75 />
      {isWidgetVisible("pipeline-summary") && <Container76 active={activeWidgets.includes("pipeline-summary")} onClick={() => toggleWidget("pipeline-summary")} />}
      {isWidgetVisible("active-deals") && <Container81 active={activeWidgets.includes("active-deals")} onClick={() => toggleWidget("active-deals")} />}
      {isWidgetVisible("recent-crm-activity") && <Container86 active={activeWidgets.includes("recent-crm-activity")} onClick={() => toggleWidget("recent-crm-activity")} />}
      <Container91 />
      {isWidgetVisible("announcements") && <Container92 active={activeWidgets.includes("announcements")} onClick={() => toggleWidget("announcements")} />}
      {isWidgetVisible("system-health") && <Container98 active={activeWidgets.includes("system-health")} onClick={() => toggleWidget("system-health")} />}
      {isWidgetVisible("quick-actions") && <Container103 active={activeWidgets.includes("quick-actions")} onClick={() => toggleWidget("quick-actions")} />}
    </div>
  );
}

function TextInput({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return (
    <div className="absolute bg-[#f8fafc] h-[37.5px] left-0 rounded-[10px] top-0 w-[290px]" data-name="Text Input">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-0 font-['Inter:Regular',sans-serif] font-normal leading-[normal] outline-none pl-[36px] pr-[12px] py-[10px] relative size-full text-[#0f172a] text-[13px] placeholder:text-[#94a3b8]"
        placeholder="Search widgets..."
      />
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[11.75px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p335f3460} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.8" />
          <path d="M9 9L12 12" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container108({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return (
    <div className="absolute h-[37.5px] left-[24px] top-[59.5px] w-[290px]" data-name="Container">
      <TextInput value={value} onChange={onChange} />
      <Icon17 />
    </div>
  );
}

function Container7({ activeWidgets, toggleWidget, filteredWidgets, widgetSearchQuery, onWidgetSearchChange }: { activeWidgets: string[]; toggleWidget: (id: string) => void; filteredWidgets: any[]; widgetSearchQuery: string; onWidgetSearchChange: (val: string) => void }) {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[1452px] left-0 rounded-[20px] top-0 w-[340px]" data-name="Container">
      <Container8 />
      <Container10 activeWidgets={activeWidgets} toggleWidget={toggleWidget} filteredWidgets={filteredWidgets} />
      <Container108 value={widgetSearchQuery} onChange={onWidgetSearchChange} />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_2_1452)" id="Icon">
          <path d="M4.4 11L8.8 15.4L17.6 6.6" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="2.2" />
          <path d={svgPaths.p2effa80} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="2.2" />
        </g>
        <defs>
          <clipPath id="clip0_2_1452">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-normal min-w-px not-italic relative text-[#0f172a] text-[20px] tracking-[-0.3px]">My Tasks</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[9999px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Real-time updates</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">·</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">All users</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container114() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container115 />
        <Container116 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container113 />
        <Container114 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Remove from Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Update Settings</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] pb-[16px] top-[24px] right-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container112 />
      <Container117 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[29px] top-[118px] w-[699.914px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.6px] uppercase whitespace-nowrap">Live Preview</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[15px] whitespace-nowrap">My Tasks</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[14.5px] relative shrink-0 w-[60.07px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[12px] whitespace-nowrap">View all →</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-between left-[24px] top-[24px] w-[649.914px]" data-name="Container">
      <Container121 />
      <Container122 />
    </div>
  );
}

function Container124() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container125() {
  return (
    <div className="flex-[484.813_0_0] h-[15.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Fix authentication token refresh bug</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#fee2e2] h-[18px] relative rounded-[9999px] shrink-0 w-[53.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] whitespace-nowrap">Critical</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[13px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] text-right">Today</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[43px] items-center left-[24px] pb-px top-[58px] w-[649.914px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container124 />
      <Container125 />
      <Text7 />
      <Container126 />
    </div>
  );
}

function Container128() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container129() {
  return (
    <div className="flex-[480.273_0_0] h-[15.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Review PR #247 — Payment module refactor</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#fef3c7] h-[18px] relative rounded-[9999px] shrink-0 w-[57.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[10px] whitespace-nowrap">Medium</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[13px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] text-right">Tomorrow</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[43px] items-center left-[24px] pb-px top-[101px] w-[649.914px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container128 />
      <Container129 />
      <Text8 />
      <Container130 />
    </div>
  );
}

function Container132() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container133() {
  return (
    <div className="flex-[497.188_0_0] h-[15.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Implement user search API endpoint</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#fee2e2] h-[18px] relative rounded-[9999px] shrink-0 w-[40.727px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] whitespace-nowrap">High</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[13px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] text-right">Mar 30</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[43px] items-center left-[24px] pb-px top-[144px] w-[649.914px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container132 />
      <Container133 />
      <Text9 />
      <Container134 />
    </div>
  );
}

function Container136() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container137() {
  return (
    <div className="flex-[480.273_0_0] h-[15.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Write unit tests for auth service</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#fef3c7] h-[18px] relative rounded-[9999px] shrink-0 w-[57.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[10px] whitespace-nowrap">Medium</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[13px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] text-right">Apr 1</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[43px] items-center left-[24px] pb-px top-[187px] w-[649.914px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container136 />
      <Container137 />
      <Text10 />
      <Container138 />
    </div>
  );
}

function Container140() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[18px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container141() {
  return (
    <div className="flex-[484.813_0_0] h-[15.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Database schema migration script</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#fee2e2] h-[18px] relative rounded-[9999px] shrink-0 w-[53.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] whitespace-nowrap">Critical</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[13px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] text-right">Apr 3</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[30px] items-center left-[24px] top-[230px] w-[649.914px]" data-name="Container">
      <Container140 />
      <Container141 />
      <Text11 />
      <Container142 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[286px] left-[29px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] top-[144px] w-[699.914px]" data-name="Container">
      <Container120 />
      <Container123 />
      <Container127 />
      <Container131 />
      <Container135 />
      <Container139 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.5px] uppercase">Display Variant</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="bg-[#5048e5] flex-[96.648_0_0] h-[27px] min-w-px relative rounded-[7px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[7px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[11px] text-center text-white">Detailed</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="flex-[96.656_0_0] h-[27px] min-w-px relative rounded-[7px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[7px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] text-center">Compact</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="flex-[96.648_0_0] h-[27px] min-w-px relative rounded-[7px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[7px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] text-center">Stats Only</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-white h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[2px] items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Container147 />
        <Container148 />
        <Container149 />
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col gap-[12px] h-[138px] items-start left-0 pb-px pt-[19px] px-[19px] rounded-[14px] top-0 w-[341.953px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container145 />
      <Container146 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.5px] uppercase">Widget Size</p>
    </div>
  );
}

function Container154() {
  return <div className="bg-[#e2e8f0] rounded-[3px] shrink-0 size-[14px]" data-name="Container" />;
}

function Container155() {
  return (
    <div className="h-[26px] relative shrink-0 w-[26.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[13.5px] not-italic text-[#64748b] text-[10px] text-center top-[0.5px] w-[27px]">
          <p className="leading-[13px] mb-0">Small</p>
          <p className="leading-[13px]">1×1</p>
        </div>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] h-[75px] items-center left-0 pb-[1.5px] pt-[11.5px] px-[1.5px] rounded-[10px] top-0 w-[69.984px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container154 />
      <Container155 />
    </div>
  );
}

function Container157() {
  return <div className="bg-[#5048e5] h-[16px] rounded-[3px] shrink-0 w-[22px]" data-name="Container" />;
}

function Container158() {
  return (
    <div className="h-[26px] relative shrink-0 w-[39.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[20px] not-italic text-[#5048e5] text-[10px] text-center top-[0.5px] w-[40px]">
          <p className="leading-[13px] mb-0">Medium</p>
          <p className="leading-[13px]">2×2</p>
        </div>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute bg-[rgba(80,72,229,0.04)] content-stretch flex flex-col gap-[6px] h-[75px] items-center left-[77.98px] pb-[1.5px] pt-[11.5px] px-[1.5px] rounded-[10px] top-0 w-[69.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#5048e5] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container157 />
      <Container158 />
    </div>
  );
}

function Container160() {
  return <div className="bg-[#e2e8f0] h-[18px] rounded-[3px] shrink-0 w-[28px]" data-name="Container" />;
}

function Container161() {
  return (
    <div className="h-[26px] relative shrink-0 w-[27.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[14px] not-italic text-[#64748b] text-[10px] text-center top-[0.5px] w-[28px]">
          <p className="leading-[13px] mb-0">Large</p>
          <p className="leading-[13px]">3×2</p>
        </div>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] h-[75px] items-center left-[155.98px] pb-[1.5px] pt-[11.5px] px-[1.5px] rounded-[10px] top-0 w-[69.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container160 />
      <Container161 />
    </div>
  );
}

function Container163() {
  return <div className="bg-[#e2e8f0] h-[20px] rounded-[3px] shrink-0 w-[32px]" data-name="Container" />;
}

function Container164() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[19.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[10px] not-italic text-[#64748b] text-[10px] text-center top-[0.5px] w-[20px]">
          <p className="leading-[13px] mb-0">Full</p>
          <p className="leading-[13px]">4×2</p>
        </div>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] h-[75px] items-center left-[233.97px] px-[1.5px] py-[11.5px] rounded-[10px] top-0 w-[69.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container163 />
      <Container164 />
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="Container">
      <Container153 />
      <Container156 />
      <Container159 />
      <Container162 />
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col gap-[12px] h-[138px] items-start left-[357.95px] pb-px pt-[19px] px-[19px] rounded-[14px] top-0 w-[341.961px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container151 />
      <Container152 />
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute h-[138px] left-[29px] top-[450px] w-[699.914px]" data-name="Container">
      <Container144 />
      <Container150 />
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[20px] w-[757.914px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container111 />
        <Container118 />
        <Container119 />
        <Container143 />
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Current Dashboard Layout</p>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex h-[14.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">7 widgets active · Drag to reorder</p>
    </div>
  );
}

function Container167() {
  return (
    <div className="h-[36px] relative shrink-0 w-[205.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container168 />
        <Container169 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[12px] top-[0.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2_1437)" id="Icon">
          <path d={svgPaths.p1e595800} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeWidth="1.28571" />
        </g>
        <defs>
          <clipPath id="clip0_2_1437">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[13px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon19 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#94a3b8] text-[11px] top-0 whitespace-nowrap">{` Click a slot to edit `}</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[13px] relative shrink-0 w-[109.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container167 />
      <Container170 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2_1391)" id="Icon">
          <path d={svgPaths.p2515b500} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.41429" />
          <path d={svgPaths.p34956e00} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.41429" />
        </g>
        <defs>
          <clipPath id="clip0_2_1391">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container174() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[6px] shrink-0 size-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.5px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="flex-[117.766_0_0] h-[14.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[12px]">My Tasks</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-center left-[14px] top-[14px] w-[147.766px]" data-name="Container">
      <Container174 />
      <Container175 />
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[14px] pl-[30px] top-[42px] w-[147.766px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px]">Medium · 2×2</p>
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[149.77px] p-px rounded-[9px] size-[18px] top-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">×</p>
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute bg-[rgba(80,72,229,0.05)] border-[#5048e5] border-[1.5px] border-solid h-[76px] left-0 rounded-[12px] top-0 w-[178.766px]" data-name="Container">
      <Container173 />
      <Container176 />
      <Container177 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2_1383)" id="Icon">
          <path d={svgPaths.p106e6100} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.41429" />
          <path d={svgPaths.p669e180} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.41429" />
        </g>
        <defs>
          <clipPath id="clip0_2_1383">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container180() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[6px] shrink-0 size-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.5px] relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="flex-[99.461_0_0] h-[14.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">Tasks Due Today</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-center left-[14px] top-[14px] w-[129.461px]" data-name="Container">
      <Container180 />
      <Container181 />
    </div>
  );
}

function Container182() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[14px] pl-[30px] top-[42px] w-[129.461px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px]">Small · 1×1</p>
    </div>
  );
}

function Container183() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[131.46px] p-px rounded-[9px] size-[18px] top-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">×</p>
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid h-[76px] left-[190.77px] rounded-[12px] top-0 w-[160.461px]" data-name="Container">
      <Container179 />
      <Container182 />
      <Container183 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2_1434)" id="Icon">
          <path d={svgPaths.p3d8b2700} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="1.41429" />
        </g>
        <defs>
          <clipPath id="clip0_2_1434">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container186() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[6px] shrink-0 size-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.5px] relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="flex-[97.008_0_0] h-[14.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[12px]">My Projects</p>
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-center left-[14px] top-[14px] w-[127.008px]" data-name="Container">
      <Container186 />
      <Container187 />
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[14px] pl-[30px] top-[42px] w-[127.008px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px]">Large · 3×2</p>
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[129.01px] p-px rounded-[9px] size-[18px] top-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">×</p>
    </div>
  );
}

function Container184() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid h-[76px] left-[363.23px] rounded-[12px] top-0 w-[158.008px]" data-name="Container">
      <Container185 />
      <Container188 />
      <Container189 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2_1427)" id="Icon">
          <path d={svgPaths.p1bc81a00} id="Vector" stroke="var(--stroke-0, #059669)" strokeWidth="1.41429" />
        </g>
        <defs>
          <clipPath id="clip0_2_1427">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container192() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[6px] shrink-0 size-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.5px] relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="flex-[105.68_0_0] h-[14.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">Unread Messages</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-center left-[14px] top-[14px] w-[135.68px]" data-name="Container">
      <Container192 />
      <Container193 />
    </div>
  );
}

function Container194() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[14px] pl-[30px] top-[42px] w-[135.68px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px]">Small · 1×1</p>
    </div>
  );
}

function Container195() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[137.68px] p-px rounded-[9px] size-[18px] top-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">×</p>
    </div>
  );
}

function Container190() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid h-[76px] left-[533.23px] rounded-[12px] top-0 w-[166.68px]" data-name="Container">
      <Container191 />
      <Container194 />
      <Container195 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p268be610} id="Vector" stroke="var(--stroke-0, #059669)" strokeWidth="1.41429" />
          <path d="M1.17857 4.32143H9.82143" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeWidth="1.41429" />
        </g>
      </svg>
    </div>
  );
}

function Container198() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[6px] shrink-0 size-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.5px] relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="flex-[117.766_0_0] h-[14.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">Upcoming Meetings</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-center left-[14px] top-[14px] w-[147.766px]" data-name="Container">
      <Container198 />
      <Container199 />
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[14px] pl-[30px] top-[42px] w-[147.766px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px]">Medium · 2×1</p>
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[149.77px] p-px rounded-[9px] size-[18px] top-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">×</p>
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid h-[76px] left-0 rounded-[12px] top-[88px] w-[178.766px]" data-name="Container">
      <Container197 />
      <Container200 />
      <Container201 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2_1375)" id="Icon">
          <path d={svgPaths.p2e179700} id="Vector" stroke="var(--stroke-0, #D97706)" strokeWidth="1.41429" />
          <path d={svgPaths.p22d5f0c0} id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeWidth="1.41429" />
        </g>
        <defs>
          <clipPath id="clip0_2_1375">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container204() {
  return (
    <div className="bg-[#fef3c7] relative rounded-[6px] shrink-0 size-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.5px] relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="flex-[99.461_0_0] h-[14.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[12px]">Leave Balance</p>
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-center left-[14px] top-[14px] w-[129.461px]" data-name="Container">
      <Container204 />
      <Container205 />
    </div>
  );
}

function Container206() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[14px] pl-[30px] top-[42px] w-[129.461px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px]">Small · 1×1</p>
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[131.46px] p-px rounded-[9px] size-[18px] top-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">×</p>
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid h-[76px] left-[190.77px] rounded-[12px] top-[88px] w-[160.461px]" data-name="Container">
      <Container203 />
      <Container206 />
      <Container207 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p12fcc600} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.41429" />
          <path d={svgPaths.p3363f300} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.41429" />
        </g>
      </svg>
    </div>
  );
}

function Container210() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[6px] shrink-0 size-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5.5px] relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="flex-[97.008_0_0] h-[14.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-center left-[14px] top-[14px] w-[127.008px]" data-name="Container">
      <Container210 />
      <Container211 />
    </div>
  );
}

function Container212() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[14px] pl-[30px] top-[42px] w-[127.008px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[10px]">Medium · 2×1</p>
    </div>
  );
}

function Container213() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[129.01px] p-px rounded-[9px] size-[18px] top-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">×</p>
    </div>
  );
}

function Container208() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid h-[76px] left-[363.23px] rounded-[12px] top-[88px] w-[158.008px]" data-name="Container">
      <Container209 />
      <Container212 />
      <Container213 />
    </div>
  );
}

function Container214() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[76px] items-center justify-center left-[533.23px] p-[15.5px] rounded-[12px] top-[88px] w-[166.68px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#cbd5e1] border-[1.5px] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#cbd5e1] text-[11px] whitespace-nowrap">{`+ Add Widget `}</p>
    </div>
  );
}

function Container171({ activeWidgets, toggleWidget }: { activeWidgets: string[]; toggleWidget: (id: string) => void }) {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Container">
      {activeWidgets.includes("my-tasks") && <Container172 />}
      {activeWidgets.includes("due-today") && <Container178 />}
      {activeWidgets.includes("my-projects") && <Container184 />}
      {activeWidgets.includes("unread-messages") && <Container190 />}
      {activeWidgets.includes("upcoming-meetings") && <Container196 />}
      {activeWidgets.includes("leave-balance") && <Container202 />}
      {activeWidgets.includes("announcements") && <Container208 />}
      <Container214 />
    </div>
  );
}

function Container165({ activeWidgets, toggleWidget }: { activeWidgets: string[]; toggleWidget: (id: string) => void }) {
  return (
    <div className="bg-white h-[266px] relative rounded-[20px] shrink-0 w-[757.914px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[29px] relative size-full">
        <Container166 />
        <Container171 activeWidgets={activeWidgets} toggleWidget={toggleWidget} />
      </div>
    </div>
  );
}

function Container109({ activeWidgets, toggleWidget }: { activeWidgets: string[]; toggleWidget: (id: string) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[903px] items-start left-[360px] top-0 w-[757.914px]" data-name="Container">
      <Container110 />
      <Container165 activeWidgets={activeWidgets} toggleWidget={toggleWidget} />
    </div>
  );
}

function Container6({ activeWidgets, toggleWidget, filteredWidgets, widgetSearchQuery, onWidgetSearchChange }: { activeWidgets: string[]; toggleWidget: (id: string) => void; filteredWidgets: any[]; widgetSearchQuery: string; onWidgetSearchChange: (val: string) => void }) {
  return (
    <div className="relative h-[1452px] w-full mt-[84px]" data-name="Container">
      <Container7 
        activeWidgets={activeWidgets} 
        toggleWidget={toggleWidget} 
        filteredWidgets={filteredWidgets}
        widgetSearchQuery={widgetSearchQuery}
        onWidgetSearchChange={onWidgetSearchChange}
      />
      <Container109 activeWidgets={activeWidgets} toggleWidget={toggleWidget} />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[110.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Unsaved changes</p>
      </div>
    </div>
  );
}

function BoldText() {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[4.148px]" data-name="Bold Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">·</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[15.5px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">2 widgets added, 1 removed</p>
      </div>
    </div>
  );
}

function Container216({ activeWidgetsCount }: { activeWidgetsCount: number }) {
  return (
    <div className="h-[15.5px] relative shrink-0 w-[310.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text13 />
        <BoldText />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">{activeWidgetsCount} widgets active</p>
      </div>
    </div>
  );
}



function Container217({ onSave, onReset, onDiscard }: { onSave?: () => void; onReset?: () => void; onDiscard?: () => void }) {
  return (
    <div className="h-[39px] relative shrink-0 w-[367.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start relative size-full">
        <Button4 onClick={onReset} />
        <Button5 onClick={onDiscard} />
        <Button6 onClick={onSave} />
      </div>
    </div>
  );
}

function Button4({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-white flex-[1_0_0] h-[39px] min-w-px relative rounded-[8px] cursor-pointer hover:bg-slate-50 transition-colors" data-name="Button" onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[18px] py-[11px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Reset to Default</p>
        </div>
      </div>
    </div>
  );
}

function Button5({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-[87.789px] cursor-pointer hover:bg-slate-50 transition-colors" data-name="Button" onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[18px] py-[11px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Discard</p>
      </div>
    </div>
  );
}

function Button6({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#5048e5] h-[39px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] shrink-0 w-[116.43px] cursor-pointer hover:bg-[#4338ca] transition-colors" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Save Layout</p>
      </div>
    </div>
  );
}

function Container215({ activeWidgetsCount, onSave, onReset, onDiscard }: { activeWidgetsCount: number; onSave?: () => void; onReset?: () => void; onDiscard?: () => void }) {
  return (
    <div className="relative bg-white content-stretch flex h-[77px] items-center justify-between px-[29px] py-px rounded-[16px] w-full z-10 shadow-lg mt-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container216 activeWidgetsCount={activeWidgetsCount} />
      <Container217 onSave={onSave} onReset={onReset} onDiscard={onDiscard} />
    </div>
  );
}

function MainContent({ onClose, onSave, activeWidgets, toggleWidget, filteredWidgets }: { onClose?: () => void; onSave?: () => void; activeWidgets: string[]; toggleWidget: (id: string) => void; filteredWidgets: any[] }) {
  const [widgetSearchQuery, setWidgetSearchQuery] = useState("");

  const handleReset = () => {
    // Logic to reset to default widgets
  };

  const handleDiscard = () => {
    onClose?.();
  };

  return (
    <div className="w-full flex flex-col flex-1" data-name="Main Content">
      <div className="mx-auto w-full max-w-[1120px] relative flex flex-col py-12 px-6">
        <Container />
        <Container1 onClose={onClose} onSave={onSave} />
        <Container6 
          activeWidgets={activeWidgets} 
          toggleWidget={toggleWidget} 
          filteredWidgets={filteredWidgets}
          widgetSearchQuery={widgetSearchQuery}
          onWidgetSearchChange={setWidgetSearchQuery}
        />
        <Container215 
          activeWidgetsCount={activeWidgets.length} 
          onSave={onSave}
          onReset={handleReset}
          onDiscard={handleDiscard}
        />
      </div>
    </div>
  );
}

function Icon27() {
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

function Container220() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex h-[14.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container221() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[38.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container222 />
        <Container223 />
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[24px] relative size-full">
          <Container220 />
          <Container221 />
        </div>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[12px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2_1357)" id="Icon">
          <path d={svgPaths.p15de6d32} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
          <path d={svgPaths.p20235940} id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
          <path d={svgPaths.p3518de00} id="Vector_3" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
          <path d={svgPaths.p1f23e980} id="Vector_4" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2_1357">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[36px] relative rounded-[8px] shrink-0 w-[223px] cursor-pointer hover:bg-[rgba(80,72,229,0.12)] transition-colors" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon28 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[42px] not-italic text-[#5048e5] text-[14px] top-[9.5px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Icon29() {
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
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px] cursor-pointer hover:bg-slate-50 transition-colors" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon29 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">People</p>
      </div>
    </div>
  );
}

function Icon30() {
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
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px] cursor-pointer hover:bg-slate-50 transition-colors" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon30 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon31() {
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
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px] cursor-pointer hover:bg-slate-50 transition-colors" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon31 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Icon32() {
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
        <Icon32 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Icon33() {
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
        <Icon33 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Icon34() {
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
        <Icon34 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">CRM</p>
      </div>
    </div>
  );
}

function Icon35() {
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
        <Icon35 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Client Delivery</p>
      </div>
    </div>
  );
}

function Icon36() {
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

function Link9() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon36 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Social Media</p>
      </div>
    </div>
  );
}

function Icon37() {
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
        <Icon37 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Icon38() {
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
        <Icon38 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Documents</p>
      </div>
    </div>
  );
}

function Icon39() {
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
        <Icon39 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Leave</p>
      </div>
    </div>
  );
}

function Icon40() {
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
        <Icon40 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[42px] not-italic text-[#475569] text-[14px] top-[9.5px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="h-[33px] relative shrink-0 w-[223px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[4px] pt-[16px] px-[12px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.6px] uppercase">System</p>
      </div>
    </div>
  );
}

function Icon41() {
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
        <Icon41 />
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
          <Container224 />
          <Link14 />
        </div>
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697px] items-start left-0 top-0 w-[255px]" data-name="Container">
      <Container219 />
      <Navigation />
    </div>
  );
}

function Icon42() {
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

function Button7() {
  return (
    <div className="absolute bg-[#5048e5] h-[46px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[770px] w-[223px] cursor-pointer hover:bg-[#4338ca] transition-all active:scale-[0.98]" data-name="Button" onClick={() => console.log("Upload document clicked")}>
      <Icon42 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.5px] not-italic text-[14px] text-center text-white top-[14.5px] whitespace-nowrap">Upload document</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r border-solid h-full left-0 top-0 w-[256px]" data-name="Sidebar">
      <Container218 />
      <Button7 />
    </div>
  );
}

function Icon43() {
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

function TextInput1({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return (
    <div className="flex-[1_0_0] h-[35px] min-w-px relative" data-name="Text Input">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-0 font-['Inter:Regular',sans-serif] font-normal leading-[normal] outline-none relative size-full text-[#0f172a] text-[14px] placeholder:text-[#94a3b8]"
        placeholder="Search resources, tasks, or teammates..."
      />
    </div>
  );
}



function Container229() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Sarah Mitchell</p>
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex h-[14.5px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Super Admin</p>
    </div>
  );
}

function Container228() {
  return (
    <div className="flex-[1_0_0] h-[31.5px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container229 />
        <Container230 />
      </div>
    </div>
  );
}

function Container231() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">SM</p>
      </div>
    </div>
  );
}

function Container227() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[36px] items-center left-[104px] top-0 w-[142.422px] cursor-pointer" data-name="Container" onClick={() => console.log("Profile clicked")}>
      <Container228 />
      <Container231 />
    </div>
  );
}

function Icon44() {
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

function Container233() {
  return <div className="absolute bg-[#ef4444] border-[1.5px] border-solid border-white left-[23px] rounded-[3.5px] size-[7px] top-[6px]" data-name="Container" />;
}

function Container232() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[36px] top-0 cursor-pointer hover:bg-slate-50 transition-colors" data-name="Container" onClick={() => console.log("Notifications clicked")}>
      <Icon44 />
      <Container233 />
    </div>
  );
}

function Icon45() {
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

function Container234() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] px-[8px] rounded-[8px] size-[36px] top-0 cursor-pointer hover:bg-slate-50 transition-colors" data-name="Container" onClick={() => console.log("Messages clicked")}>
      <Icon45 />
    </div>
  );
}

function Container226() {
  return (
    <div className="h-[36px] relative shrink-0 w-[246.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container227 />
        <Container232 />
        <Container234 />
      </div>
    </div>
  );
}

function Header({ searchQuery, onSearchChange }: { searchQuery: string; onSearchChange: (val: string) => void }) {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-[256px] pb-px px-[32px] right-0 top-0 z-10" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container225 searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <Container226 />
    </div>
  );
}

function Container225({ searchQuery, onSearchChange }: { searchQuery: string; onSearchChange: (val: string) => void }) {
  return (
    <div className="bg-[#f8fafc] h-[35px] relative rounded-[8px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[17px] py-px relative size-full">
        <Icon43 />
        <TextInput1 value={searchQuery} onChange={onSearchChange} />
      </div>
    </div>
  );
}

import { useState, useMemo } from "react";

const ALL_WIDGETS = [
  { id: "my-tasks", name: "My Tasks", category: "Work" },
  { id: "due-today", name: "Tasks Due Today", category: "Work" },
  { id: "task-stats", name: "Task Stats", category: "Work" },
  { id: "my-projects", name: "My Projects", category: "Work" },
  { id: "project-progress", name: "Project Progress", category: "Work" },
  { id: "unread-messages", name: "Unread Messages", category: "Communication" },
  { id: "upcoming-meetings", name: "Upcoming Meetings", category: "Communication" },
  { id: "meeting-hours", name: "Meeting Hours", category: "Communication" },
  { id: "leave-balance", name: "Leave Balance", category: "People" },
  { id: "team-availability", name: "Team Availability", category: "People" },
  { id: "onboarding-progress", name: "Onboarding Progress", category: "People" },
  { id: "pipeline-summary", name: "Pipeline Summary", category: "CRM" },
  { id: "active-deals", name: "Active Deals", category: "CRM" },
  { id: "recent-crm-activity", name: "Recent CRM Activity", category: "CRM" },
  { id: "announcements", name: "Announcements", category: "System" },
  { id: "system-health", name: "System Health", category: "System" },
  { id: "quick-actions", name: "Quick Actions", category: "System" },
];

export default function DashboardWidgetManager({ onClose }: { onClose?: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeWidgets, setActiveWidgets] = useState<string[]>(["my-tasks", "due-today"]);

  const filteredWidgets = useMemo(() => {
    if (!searchQuery) return ALL_WIDGETS;
    return ALL_WIDGETS.filter((w) => w.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const toggleWidget = (id: string) => {
    setActiveWidgets((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const handleSave = () => {
    console.log("Saving layout:", activeWidgets);
    onClose?.();
  };

  return (
    <div className="bg-white w-full flex justify-center min-h-screen" data-name="Dashboard — Widget Manager">
      <div className="w-full max-w-[1280px] flex flex-col">
        <MainContent 
          onClose={onClose} 
          onSave={handleSave}
          activeWidgets={activeWidgets}
          toggleWidget={toggleWidget}
          filteredWidgets={filteredWidgets}
        />
      </div>
    </div>
  );
}
