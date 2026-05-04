"use client";
import svgPaths from "./svg-etqqrtiamg";

function Link() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[36.198px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">Tasks</p>
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
    <div className="h-[16.111px] relative shrink-0 w-[199.34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Fix authentication token refresh</p>
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
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[17.326px] items-start left-[406.28px] px-[10px] py-[2px] rounded-[9999px] top-[6.89px] w-[75.139px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2563eb] text-[11px] tracking-[-0.5px] whitespace-nowrap">In Progress</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#ffe4e6] content-stretch flex h-[17.326px] items-start left-[493.42px] px-[10px] py-[2px] rounded-[9999px] top-[6.89px] w-[54.592px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#e11d48] text-[11px] tracking-[-0.5px] whitespace-nowrap">Critical</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[548.012px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-0 not-italic text-[#0f172a] text-[26px] top-0 tracking-[-0.5px] whitespace-nowrap">{`Fix authentication token refresh `}</p>
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[167.205px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
          <span className="leading-[normal] text-[13px]">{`Project: `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[#5048e5] text-[13px]">Portal v2 Redesign</span>
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[60.399px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Assignee:</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#2563eb] relative rounded-[10.998px] shrink-0 size-[21.997px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">R</p>
      </div>
    </div>
  );
}

function BoldText() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[71.91px]" data-name="Bold Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Ravi Kumar</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[21.997px] relative shrink-0 w-[99.905px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.998px] items-center relative size-full">
        <Text7 />
        <BoldText />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[21.997px] relative shrink-0 w-[548.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.998px] items-center relative size-full">
        <Text4 />
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[61.102px] relative shrink-0 w-[548.012px]" data-name="Container">
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
    <div className="bg-[#059669] h-[36.667px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(5,150,105,0.2)] shrink-0 w-[140.469px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-[10px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Move to Review</p>
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
    <div className="h-[37.778px] relative shrink-0 w-[308.576px]" data-name="Container">
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
    <div className="absolute content-stretch flex h-[61.102px] items-start justify-between left-[32px] top-[52.11px] w-[960.009px]" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[18.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Description</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[83.194px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-0 not-italic text-[#334155] text-[13px] top-[0.22px] w-[567px]">The JWT refresh token logic has a race condition when multiple API calls fire simultaneously after token expiry. This causes intermittent 401 errors and forced logouts for users. The fix requires implementing a token refresh queue that serialises refresh requests and replays pending API calls once a new token is obtained.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[174.627px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[15.998px] items-start pb-[0.556px] pt-[28.55px] px-[28.55px] relative size-full">
        <Container8 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[566.901px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Subtasks</p>
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-0 size-[15.998px] top-[10.05px]" data-name="Checkbox" />;
}

function Container11() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[28.55px] top-[62.88px] w-[566.901px]" data-name="Container">
      <Checkbox />
      <p className="[text-decoration-skip-ink:none] absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] line-through not-italic text-[#64748b] text-[13px] top-[10px] whitespace-nowrap">{` Identify race condition in token refresh flow`}</p>
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute left-0 size-[15.998px] top-[10.05px]" data-name="Checkbox" />;
}

function Container12() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[28.55px] top-[99.55px] w-[566.901px]" data-name="Container">
      <Checkbox1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[#0f172a] text-[13px] top-[10px] whitespace-nowrap">{` Implement token refresh queue with request serialisation`}</p>
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute left-0 size-[15.998px] top-[10.05px]" data-name="Checkbox" />;
}

function Container13() {
  return (
    <div className="absolute h-[36.111px] left-[28.55px] top-[136.22px] w-[566.901px]" data-name="Container">
      <Checkbox2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[#0f172a] text-[13px] top-[10px] whitespace-nowrap">{` Write unit tests for concurrent refresh scenarios`}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white h-[200.877px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[566.901px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Comments</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#2563eb] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">R</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[70.972px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Ravi Kumar</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[61.936px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">2 hours ago</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[7.995px] h-[16.111px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[58.516px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#334155] text-[13px] top-[0.67px] w-[523px]">{`Found the root cause. The axios interceptor fires a new refresh call for each queued request instead of waiting for the first one to resolve. I'll implement a promise-based queue pattern.`}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[78.62px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.993px] items-start relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[111.172px] items-start left-[28.55px] pb-[0.556px] pt-[15.998px] top-[62.88px] w-[566.901px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#7c3aed] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[93.403px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Ashwini Reddy</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[62.335px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">4 hours ago</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[7.995px] h-[16.111px] items-center relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[39.01px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#334155] text-[13px] top-[0.67px] w-[523px]">This is blocking the frontend team. Can we prioritize getting a fix in by end of day tomorrow?</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] h-[59.115px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.993px] items-start relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[91.667px] items-start left-[28.55px] pb-[0.556px] pt-[15.998px] top-[174.05px] w-[566.901px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#e11d48] relative rounded-[15.998px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[69.87px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Jordan Lee</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[51.615px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Yesterday</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[7.995px] h-[16.111px] items-center relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[39.01px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#334155] text-[13px] top-[0.67px] w-[523px]">I can reproduce this consistently by opening 3 tabs and letting the token expire. Added a screen recording to attachments.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] h-[59.115px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.993px] items-start relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[91.667px] items-start left-[28.55px] pb-[0.556px] pt-[15.998px] top-[265.72px] w-[566.901px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#7c3aed] content-stretch flex items-center justify-center left-0 rounded-[15.998px] size-[31.997px] top-0" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">A</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-white h-[60px] left-[43.99px] rounded-[8px] top-0 w-[446.832px]" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap">Add a comment...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#5048e5] content-stretch flex h-[36.667px] items-center left-[502.82px] px-[17px] py-[10px] rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] top-[23.33px] w-[64.08px]" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Post</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[60px] left-[28.55px] top-[373.39px] w-[566.901px]" data-name="Container">
      <Container32 />
      <TextArea />
      <Button3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[461.936px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container15 />
      <Container16 />
      <Container21 />
      <Container26 />
      <Container31 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[1257.135px] items-start left-0 top-0 w-[624.002px]" data-name="Container">
      <Container7 />
      <Container9 />
      <Container14 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[278.898px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Details</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-[39.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[#dbeafe] h-[15.66px] relative rounded-[9999px] shrink-0 w-full" data-name="Text">
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[66px] not-italic text-[#2563eb] text-[10px] text-right top-[2px] whitespace-nowrap">In Progress</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-[75.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[1.337px] relative rounded-[inherit] size-full">
        <Text16 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex h-[37.552px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[62.88px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-[45.182px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Priority</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#ffe4e6] h-[15.66px] relative rounded-[9999px] shrink-0 w-full" data-name="Text">
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[46px] not-italic text-[#e11d48] text-[10px] text-right top-[2px] whitespace-nowrap">Critical</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-[55.104px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[1.337px] relative rounded-[inherit] size-full">
        <Text19 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[37.552px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[100.43px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text17 />
      <Text18 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[57.587px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Assignee</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[70.972px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">Ravi Kumar</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[137.99px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[53.976px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Reporter</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[69.87px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">Jordan Lee</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[174.65px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[49.427px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Created</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[83.88px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">Mar 25, 2026</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[211.32px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[57.005px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Due Date</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[84.193px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e11d48] text-[13px] text-right whitespace-nowrap">Mar 29, 2026</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[247.99px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[43.811px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Project</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[117.83px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] text-right whitespace-nowrap">Portal v2 Redesign</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[284.65px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[37.083px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Sprint</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[57.595px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">Sprint 24</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[36.667px] items-start justify-between left-[28.55px] pb-[0.556px] pt-[10px] top-[321.32px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Text30 />
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[75.243px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Story Points</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[7.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] text-right whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex h-[36.111px] items-start justify-between left-[28.55px] pt-[10px] top-[357.99px] w-[278.898px]" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[422.648px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[278.898px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Dependencies</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.3px] uppercase">Depends on</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Database Schema Migration</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[31.441px] relative shrink-0 w-[174.948px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="bg-[#dbeafe] h-[15.66px] relative rounded-[9999px] shrink-0 w-[71.146px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2563eb] text-[10px] whitespace-nowrap">In Progress</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex h-[51.997px] items-center justify-between left-[28.55px] pb-[0.556px] top-[62.88px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Text34 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.3px] uppercase">Blocks</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Frontend Integration</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[31.441px] relative shrink-0 w-[126.085px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.997px] items-start relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="bg-[#ffe4e6] h-[15.66px] relative rounded-[9999px] shrink-0 w-[55.174px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#e11d48] text-[10px] whitespace-nowrap">Blocked</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex h-[51.441px] items-center justify-between left-[28.55px] top-[114.88px] w-[278.898px]" data-name="Container">
      <Container52 />
      <Text35 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[194.87px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container46 />
      <Container47 />
      <Container51 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[278.898px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Attachments</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9983 15.9983">
        <g id="Icon">
          <path d={svgPaths.p1bdaa000} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.49984" />
          <path d={svgPaths.p3d00c300} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.49984" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[7.995px] pr-[8.003px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">token-race-condition.mp4</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">12.4 MB</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[164.002px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[48.542px] items-center left-[28.55px] pb-[0.556px] top-[62.88px] w-[278.898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9983 15.9983">
        <g id="Icon">
          <path d={svgPaths.p1bdaa000} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.49984" />
          <path d={svgPaths.p3d00c300} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.49984" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[8px] shrink-0 size-[31.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[7.995px] pr-[8.003px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-0 top-0 w-[174.063px]" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">refresh-queue-diagram.png</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-0 top-[16.11px] w-[174.063px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">340 KB</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[29.444px] relative shrink-0 w-[174.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[47.986px] items-center left-[28.55px] top-[111.42px] w-[278.898px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white h-[187.96px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container56 />
      <Container57 />
      <Container62 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[28.55px] top-[28.55px] w-[278.898px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Activity Log</p>
    </div>
  );
}

function Container70() {
  return <div className="absolute bg-[#5048e5] left-0 rounded-[2.999px] size-[5.998px] top-[12.99px]" data-name="Container" />;
}

function Container72() {
  return (
    <div className="h-[16.788px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-[0.11px] whitespace-nowrap">
        <span className="leading-[16.8px] text-[12px]">Ravi Kumar</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] text-[12px]">{` moved to In Progress`}</span>
      </p>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">2 hours ago</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.122px] items-start left-[16px] top-[7.99px] w-[189.957px]" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[46.667px] left-[28.55px] top-[62.88px] w-[278.898px]" data-name="Container">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container75() {
  return <div className="absolute bg-[#94a3b8] left-0 rounded-[2.999px] size-[5.998px] top-[12.99px]" data-name="Container" />;
}

function Container77() {
  return (
    <div className="h-[16.788px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-[0.11px] whitespace-nowrap">
        <span className="leading-[16.8px] text-[12px]">Ravi Kumar</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] text-[12px]">{` added a comment`}</span>
      </p>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">2 hours ago</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.122px] items-start left-[16px] top-[7.99px] w-[172.031px]" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[46.667px] left-[28.55px] top-[109.55px] w-[278.898px]" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container80() {
  return <div className="absolute bg-[#94a3b8] left-0 rounded-[2.999px] size-[5.998px] top-[12.99px]" data-name="Container" />;
}

function Container82() {
  return (
    <div className="h-[16.788px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-[0.11px] whitespace-nowrap">
        <span className="leading-[16.8px] text-[12px]">Ashwini Reddy</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] text-[12px]">{` changed priority to Critical`}</span>
      </p>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">4 hours ago</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.122px] items-start left-[16px] top-[7.99px] w-[241.563px]" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[46.667px] left-[28.55px] top-[156.22px] w-[278.898px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container85() {
  return <div className="absolute bg-[#94a3b8] left-0 rounded-[2.999px] size-[5.998px] top-[12.99px]" data-name="Container" />;
}

function Container87() {
  return (
    <div className="h-[33.576px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-[0.11px] w-[263px]">
        <span className="leading-[16.8px] text-[12px]">Jordan Lee</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] text-[12px]">{` attached token-race-condition.mp4`}</span>
      </p>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Yesterday</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46.91px] items-start left-[16px] top-[7.99px] w-[262.899px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[63.455px] left-[28.55px] top-[202.88px] w-[278.898px]" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container90() {
  return <div className="absolute bg-[#94a3b8] left-0 rounded-[2.999px] size-[5.998px] top-[12.99px]" data-name="Container" />;
}

function Container92() {
  return (
    <div className="h-[16.788px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-[0.11px] whitespace-nowrap">
        <span className="leading-[16.8px] text-[12px]">Ashwini Reddy</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] text-[12px]">{` assigned to Ravi Kumar`}</span>
      </p>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Yesterday</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.122px] items-start left-[16px] top-[7.99px] w-[223.307px]" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[46.667px] left-[28.55px] top-[266.34px] w-[278.898px]" data-name="Container">
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container95() {
  return <div className="absolute bg-[#059669] left-0 rounded-[2.999px] size-[5.998px] top-[12.99px]" data-name="Container" />;
}

function Container97() {
  return (
    <div className="h-[16.788px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#334155] text-[0px] top-[0.11px] whitespace-nowrap">
        <span className="leading-[16.8px] text-[12px]">Jordan Lee</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] text-[12px]">{` created this task`}</span>
      </p>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex h-[13.333px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Mar 25, 2026</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.122px] items-start left-[16px] top-[7.99px] w-[162.031px]" data-name="Container">
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[46.111px] left-[28.55px] top-[313px] w-[278.898px]" data-name="Container">
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white h-[387.665px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container68 />
      <Container69 />
      <Container74 />
      <Container79 />
      <Container84 />
      <Container89 />
      <Container94 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[1257.135px] items-start left-[640px] top-0 w-[335.998px]" data-name="Container">
      <Container34 />
      <Container45 />
      <Container55 />
      <Container67 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[1257.135px] left-[32px] top-[137.2px] w-[960.009px]" data-name="Container">
      <Container6 />
      <Container33 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[1426.337px] left-[256px] top-[63.99px] w-[1024.002px]" data-name="Main Content">
      <Container />
      <Container1 />
      <Container5 />
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

function Container101() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.998px] pr-[11.007px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-0 w-[38.533px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.67px] w-[38.533px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[38.533px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container103 />
        <Container104 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.997px] items-center pl-[23.993px] relative size-full">
          <Container101 />
          <Container102 />
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

function Link1() {
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

function Link2() {
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

function Link3() {
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
        <g clipPath="url(#clip0_15_17747)" id="Icon">
          <path d={svgPaths.p35891a80} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p2732b200} id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
        </g>
        <defs>
          <clipPath id="clip0_15_17747">
            <rect fill="white" height="17.9948" width="17.9948" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">Tasks</p>
      </div>
    </div>
  );
}

function Icon7() {
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
        <Icon7 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Projects</p>
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

function Link6() {
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

function Link7() {
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

function Link8() {
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

function Link9() {
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

function Link10() {
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

function Link11() {
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

function Link12() {
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

function Link13() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon15 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[33.325px] relative shrink-0 w-[223.446px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[12px] not-italic text-[#94a3b8] text-[11px] top-[16px] tracking-[0.6px] uppercase whitespace-nowrap">System</p>
      </div>
    </div>
  );
}

function Icon16() {
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
        <Icon16 />
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
          <Container105 />
          <Link14 />
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697.179px] items-start left-0 top-0 w-[255.443px]" data-name="Container">
      <Container100 />
      <Navigation />
    </div>
  );
}

function Icon17() {
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
    <div className="absolute bg-[#5048e5] h-[45.981px] left-[16px] rounded-[12px] shadow-[0px_10px_25px_0px_rgba(80,72,229,0.3)] top-[962.01px] w-[223.446px]" data-name="Button">
      <Icon17 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108.49px] not-italic text-[14px] text-center text-white top-[14.65px] whitespace-nowrap">Upload document</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[rgba(80,72,229,0.1)] border-r-[0.556px] border-solid h-[1023.993px] left-0 top-0 w-[255.998px]" data-name="Sidebar">
      <Container99 />
      <Button4 />
    </div>
  );
}

function Icon18() {
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

function Container106() {
  return (
    <div className="bg-[#f8fafc] h-[33.767px] relative rounded-[8px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[16.554px] pr-[0.556px] py-[0.556px] relative size-full">
        <Icon18 />
        <TextInput />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[53.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container110 />
        <Container111 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative rounded-[17.999px] shrink-0 size-[35.998px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[35.998px] items-center left-[103.99px] top-0 w-[99.991px]" data-name="Container">
      <Container109 />
      <Container112 />
    </div>
  );
}

function Icon19() {
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

function Container114() {
  return <div className="absolute bg-[#ef4444] border-[1.111px] border-solid border-white left-[23px] rounded-[3.498px] size-[6.997px] top-[6px]" data-name="Container" />;
}

function Container113() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon19 />
      <Container114 />
    </div>
  );
}

function Icon20() {
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

function Container115() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] pl-[7.995px] pr-[8.003px] rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[203.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container108 />
        <Container113 />
        <Container115 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.993px] items-center justify-between left-[256px] pb-[0.556px] pl-[31.997px] pr-[31.996px] top-0 w-[1377.335px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container106 />
      <Container107 />
    </div>
  );
}

export default function TasksTaskDetail() {
  return (
    <div className="bg-[#f6f6f8] relative size-full" data-name="Tasks — Task Detail">
      <MainContent />
      <Sidebar />
      <Header />
    </div>
  );
}