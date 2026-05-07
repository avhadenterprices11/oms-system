"use client";
import { useState } from "react";
import CreateProjectFromDeal from "../CreateProjectFromDeal/CreateProjectFromDeal";
import CreateClientDeliveryFromDeal from "../CreateClientDeliveryFromDeal/CreateClientDeliveryFromDeal";
import LinkToClientDelivery from "../LinkToClientDelivery/LinkToClientDelivery";
import svgPaths from "./svg-5j4ddh0vyn";

function Link() {
  return (
    <div className="h-[16.111px] relative shrink-0 w-[29.826px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[13px] whitespace-nowrap">CRM</p>
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
    <div className="h-[16.111px] relative shrink-0 w-[97.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[13px] whitespace-nowrap">{`Import & Export`}</p>
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

function Container2() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[219.644px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[36px] left-0 not-italic text-[#0f172a] text-[30px] top-[-0.56px] tracking-[-0.75px] whitespace-nowrap">{`Import & Export`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[35.998px] items-start justify-between left-[32px] pr-[740.365px] top-[52.11px] w-[960.009px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[21.667px] items-start left-[32px] top-[108.11px] w-[960.009px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[18px]">Import Data</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[20px] top-[20px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[14px]">Import Contacts</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[20px] top-[40.66px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">CSV / Excel (.xlsx)</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f8fafc] h-[31.545px] relative rounded-[8px] shrink-0 w-[101.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cbd5e1] border-[0.556px] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[50.55px] not-italic text-[#5048e5] text-[12px] text-center top-[8.55px] whitespace-nowrap">Choose File</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[14.444px] relative shrink-0 w-[113.516px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[12px] whitespace-nowrap">Download Template</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[31.545px] items-center left-[20px] top-[67.1px] w-[430.894px]" data-name="Container">
      <Button />
      <Link1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[20px] top-[106.64px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Last import: Mar 20 — 45 contacts</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[141.085px] left-0 rounded-[14px] top-0 w-[472.005px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[20px] top-[20px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[14px]">Import Organisations</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[20px] top-[40.66px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">CSV / Excel (.xlsx)</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f8fafc] h-[31.545px] relative rounded-[8px] shrink-0 w-[101.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cbd5e1] border-[0.556px] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[50.55px] not-italic text-[#5048e5] text-[12px] text-center top-[8.55px] whitespace-nowrap">Choose File</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[14.444px] relative shrink-0 w-[113.516px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[12px] whitespace-nowrap">Download Template</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[31.545px] items-center left-[20px] top-[67.1px] w-[430.894px]" data-name="Container">
      <Button1 />
      <Link2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[20px] top-[106.64px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Last import: Mar 15 — 12 orgs</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[141.085px] left-[488px] rounded-[14px] top-0 w-[472.005px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[20px] top-[20px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[14px]">Import Deals</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[20px] top-[40.66px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">CSV</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f8fafc] h-[31.545px] relative rounded-[8px] shrink-0 w-[101.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cbd5e1] border-[0.556px] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[50.55px] not-italic text-[#5048e5] text-[12px] text-center top-[8.55px] whitespace-nowrap">Choose File</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[14.444px] relative shrink-0 w-[113.516px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[12px] whitespace-nowrap">Download Template</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[31.545px] items-center left-[20px] top-[67.1px] w-[430.894px]" data-name="Container">
      <Button2 />
      <Link3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[20px] top-[106.64px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Last import: Mar 10 — 8 deals</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[141.085px] left-0 rounded-[14px] top-[157.08px] w-[472.005px]" data-name="Container">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[20px] top-[20px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[14px]">Import Leads</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-[20px] top-[40.66px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">CSV</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f8fafc] h-[31.545px] relative rounded-[8px] shrink-0 w-[101.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cbd5e1] border-[0.556px] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[50.55px] not-italic text-[#5048e5] text-[12px] text-center top-[8.55px] whitespace-nowrap">Choose File</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[14.444px] relative shrink-0 w-[113.516px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5048e5] text-[12px] whitespace-nowrap">Download Template</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[31.545px] items-center left-[20px] top-[67.1px] w-[430.894px]" data-name="Container">
      <Button3 />
      <Link4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[20px] top-[106.64px] w-[430.894px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px]">Last import: Mar 18 — 23 leads</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[141.085px] left-[488px] rounded-[14px] top-[157.08px] w-[472.005px]" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[298.168px] left-[32px] top-[145.77px] w-[960.009px]" data-name="Container">
      <Container5 />
      <Container10 />
      <Container15 />
      <Container20 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[27.99px] top-[27.99px] w-[902.908px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Export Data</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[27.99px] top-[50.32px] w-[902.908px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[13px]">Download your CRM data in various formats</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[150px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.5px] uppercase">Module</p>
      </div>
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option1() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option2() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option3() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option4() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white h-[34.323px] relative rounded-[8px] shrink-0 w-[150px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.556px] pl-[-316.545px] pr-[466.545px] pt-[-633.125px] relative size-full">
        <Option />
        <Option1 />
        <Option2 />
        <Option3 />
        <Option4 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[51.649px] items-start left-0 top-[0.89px] w-[150px]" data-name="Container">
      <Label />
      <Dropdown />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[150px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.5px] uppercase">Format</p>
      </div>
    </div>
  );
}

function Option5() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option6() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option7() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-white h-[34.323px] relative rounded-[8px] shrink-0 w-[150px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.556px] pl-[-478.542px] pr-[628.542px] pt-[-633.125px] relative size-full">
        <Option5 />
        <Option6 />
        <Option7 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[51.649px] items-start left-[162px] top-[0.89px] w-[150px]" data-name="Container">
      <Label1 />
      <Dropdown1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[146.641px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.5px] uppercase">From</p>
      </div>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-white h-[35.208px] relative rounded-[8px] shrink-0 w-[146.641px]" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[52.535px] items-start left-[323.99px] top-0 w-[146.641px]" data-name="Container">
      <Label2 />
      <DatePicker />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[146.641px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#64748b] text-[11px] tracking-[0.5px] uppercase">To</p>
      </div>
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="bg-white h-[35.208px] relative rounded-[8px] shrink-0 w-[146.641px]" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[52.535px] items-start left-[482.63px] top-0 w-[146.641px]" data-name="Container">
      <Label3 />
      <DatePicker1 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#5048e5] content-stretch flex h-[36.667px] items-center left-[641.27px] px-[17px] py-[10px] rounded-[8px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2),0px_4px_6px_0px_rgba(80,72,229,0.2)] top-[15.87px] w-[78.455px] cursor-pointer hover:bg-[#4338ca] transition-colors" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Export</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[52.535px] left-[27.99px] top-[82.43px] w-[902.908px]" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Button4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[16.111px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[13px]">Recent Exports</p>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-0 pb-[10.556px] pt-[10px] px-[16px] top-0 w-[249.748px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">File</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-[249.75px] pb-[10.556px] pt-[10px] px-[16px] top-0 w-[123.082px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Module</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-[372.83px] pb-[10.556px] pt-[10px] px-[16px] top-0 w-[115.946px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Format</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-[488.78px] pb-[10.556px] pt-[10px] px-[16px] top-0 w-[162.561px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Date</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[33.611px] items-start left-[651.34px] pb-[10.556px] pt-[10px] px-[16px] top-0 w-[124.991px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[11px] tracking-[0.5px] uppercase">Records</p>
    </div>
  );
}

function HeaderCell5() {
  return <div className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid h-[33.611px] left-[776.33px] top-0 w-[126.58px]" data-name="Header Cell" />;
}

function TableRow() {
  return (
    <div className="absolute h-[33.611px] left-0 top-0 w-[902.908px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-0 overflow-clip top-0 w-[249.748px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">contacts-mar-2026.csv</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[249.75px] overflow-clip top-0 w-[123.082px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">Contacts</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[372.83px] overflow-clip top-0 w-[115.946px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[488.78px] overflow-clip top-0 w-[162.561px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">Mar 25, 2026</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[651.34px] overflow-clip top-0 w-[124.991px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">156</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[776.33px] overflow-clip top-0 w-[126.58px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#5048e5] text-[12px] top-[11.39px] whitespace-nowrap">Download</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[36.667px] left-0 top-0 w-[902.908px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-0 overflow-clip top-0 w-[249.748px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">deals-q1-2026.xlsx</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[249.75px] overflow-clip top-0 w-[123.082px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">Deals</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[372.83px] overflow-clip top-0 w-[115.946px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">Excel</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[488.78px] overflow-clip top-0 w-[162.561px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">Mar 20, 2026</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[651.34px] overflow-clip top-0 w-[124.991px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">34</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[776.33px] overflow-clip top-0 w-[126.58px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#5048e5] text-[12px] top-[11.39px] whitespace-nowrap">Download</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[36.667px] left-0 top-[36.67px] w-[902.908px]" data-name="Table Row">
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-0 overflow-clip top-0 w-[249.748px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">leads-backup.json</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[249.75px] overflow-clip top-0 w-[123.082px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">Leads</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[372.83px] overflow-clip top-0 w-[115.946px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[488.78px] overflow-clip top-0 w-[162.561px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">Mar 15, 2026</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[651.34px] overflow-clip top-0 w-[124.991px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#0f172a] text-[13px] top-[10.28px] whitespace-nowrap">89</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute border-[#f1f5f9] border-b-[0.556px] border-solid h-[36.667px] left-[776.33px] overflow-clip top-0 w-[126.58px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[16px] not-italic text-[#5048e5] text-[12px] top-[11.39px] whitespace-nowrap">Download</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[36.667px] left-0 top-[73.33px] w-[902.908px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[110px] left-0 top-[33.61px] w-[902.908px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[143.889px] relative shrink-0 w-full" data-name="Table">
      <TableRow />
      <TableBody />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.995px] h-[167.995px] items-start left-[27.99px] top-[150.96px] w-[902.908px]" data-name="Container">
      <Container34 />
      <Table />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[348.064px] left-[32px] rounded-[20px] top-[467.93px] w-[960.009px]" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
      <Container33 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex h-[18.333px] items-start left-[27.99px] top-[27.99px] w-[902.908px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[15px]">Bulk Operations</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[16.111px] items-start left-[27.99px] top-[50.32px] w-[902.908px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[13px]">Perform batch actions across your CRM data</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[153.967px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Merge Duplicates</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[153.082px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Bulk Update Field</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white h-[37.778px] relative rounded-[8px] shrink-0 w-[172.986px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17.556px] py-[10.556px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#334155] text-[14px] text-center whitespace-nowrap">Archive Old Records</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[37.778px] items-start left-[27.99px] top-[82.43px] w-[902.908px]" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-[0.556px] border-solid h-[149.314px] left-[32px] rounded-[20px] top-[836px] w-[960.009px]" data-name="Container">
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative h-[1037.309px] mx-auto w-[1024.002px]" data-name="Main Content">
      <Container />
      <Container1 />
      <Container3 />
      <Container4 />
      <Container25 />
      <Container35 />
    </div>
  );
}

function Container39() {
  return <div className="absolute h-0 left-0 top-[1037.31px] w-[1280px]" data-name="Container" />;
}

function Container40() {
  return <div className="absolute h-0 left-0 top-[1037.31px] w-[1280px]" data-name="Container" />;
}

function Body() {
  return (
    <div className="relative w-full" data-name="Body">
      <MainContent />
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

function Container43() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10.998px] pr-[11.007px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-0 w-[38.533px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] tracking-[-0.35px] whitespace-nowrap">Portal</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex h-[14.444px] items-start left-0 top-[16.67px] w-[38.533px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px]">v1</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[38.533px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.997px] items-center pl-[23.993px] relative size-full">
          <Container43 />
          <Container44 />
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

function Link5() {
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

function Link6() {
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

function Link7() {
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

function Link8() {
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

function Link9() {
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

function Link10() {
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
          <path d={svgPaths.p172c300} id="Vector" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
          <path d={svgPaths.p227fd180} id="Vector_2" stroke="var(--stroke-0, #5048E5)" strokeWidth="1.49957" />
        </g>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="bg-[rgba(80,72,229,0.08)] h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[41.99px] not-italic text-[#5048e5] text-[14px] top-[9.66px] whitespace-nowrap">CRM</p>
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

function Link12() {
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

function Link13() {
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

function Link14() {
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

function Link15() {
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

function Link16() {
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

function Link17() {
  return (
    <div className="h-[35.998px] relative rounded-[8px] shrink-0 w-[223.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon13 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[41.99px] not-italic text-[#475569] text-[14px] top-[9.66px] whitespace-nowrap">Announcements</p>
      </div>
    </div>
  );
}

function Container47() {
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

function Link18() {
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
          <Link15 />
          <Link16 />
          <Link17 />
          <Container47 />
          <Link18 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697.179px] items-start left-0 top-0 w-[255.443px]" data-name="Container">
      <Container42 />
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

function Button8() {
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
      <Container41 />
      <Button8 />
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

function Container48() {
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

function Container52() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right whitespace-nowrap">Ashwini</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[14.444px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#64748b] text-[12px] text-right">Admin</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[31.111px] relative shrink-0 w-[53.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative rounded-[17.999px] shrink-0 size-[35.998px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[35.998px] items-center left-[103.99px] top-0 w-[99.991px]" data-name="Container">
      <Container51 />
      <Container54 />
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

function Container56() {
  return <div className="absolute bg-[#ef4444] border-[1.111px] border-solid border-white left-[23px] rounded-[3.498px] size-[6.997px] top-[6px]" data-name="Container" />;
}

function Container55() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon17 />
      <Container56 />
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

function Container57() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] pl-[7.995px] pr-[8.003px] rounded-[8px] size-[35.998px] top-0" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[203.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <Container55 />
        <Container57 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.993px] items-center justify-between left-[256px] pb-[0.556px] pl-[31.997px] pr-[31.996px] top-0 w-[1377.335px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Container49 />
    </div>
  );
}

export default function CrmImportExport() {
  const [showExportModal, setShowExportModal] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);

  const handleGlobalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.trim();
    if (text === "Export") {
      setShowExportModal(true);
    }
  };

  return (
    <div onClick={handleGlobalClick} className="bg-[#f6f6f8] min-h-screen py-12" data-name="CRM — Import & Export">
      {!showExportModal && !showDeliveryModal && !showLinkModal && <Body />}
      {showExportModal && (
        <CreateProjectFromDeal
          onClose={() => setShowExportModal(false)}
          onCreateDelivery={() => {
            setShowExportModal(false);
            setShowDeliveryModal(true);
          }}
        />
      )}
      {showDeliveryModal && (
        <CreateClientDeliveryFromDeal 
          onClose={() => setShowDeliveryModal(false)} 
          onCreateDelivery={() => {
            setShowDeliveryModal(false);
            setShowLinkModal(true);
          }}
        />
      )}
      {showLinkModal && (
        <LinkToClientDelivery onClose={() => setShowLinkModal(false)} />
      )}
    </div>
  );
}