"use client";
import svgPaths from "./svg-i7ssxholyf";
import imgImage2 from "./be8043f55f7108c9a6b6f5f179066ce16e7b8dec.png";

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[112px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] text-center tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">Portal</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[156px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] text-center w-[311.73px]">
        <p className="leading-[24px]">Welcome back! Please enter your details.</p>
      </div>
    </div>
  );
}

function LogoAndHeader() {
  return (
    <div className="h-[204px] relative shrink-0 w-full" data-name="Logo and Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Container />
        <div className="absolute h-[136px] left-[73px] top-[5px] w-[312px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2.src} />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] w-full">
        <p className="leading-[20px]">Work Email</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">name@company.com</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[14px] relative size-full">
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Email Input">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] w-[65.59px]">
        <p className="leading-[20px]">Password</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5048e5] text-[12px] w-[103.94px]">
        <p className="leading-[16px]">Forgot password?</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Label1 />
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[14px] relative size-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-[36.98%] content-stretch flex flex-col items-center justify-center right-[12px] top-[36.98%]" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Button />
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Password Input">
      <Container2 />
      <Container3 />
    </div>
  );
}

function LoginButton() {
  return (
    <div className="bg-[#5048e5] relative rounded-[8px] shrink-0 w-full" data-name="Login Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(80,72,229,0.2),0px_4px_6px_-4px_rgba(80,72,229,0.2)]" data-name="Login Button:shadow" />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[53.13px]">
            <p className="leading-[24px]">Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[8px] relative self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[108.91px]">
        <p className="leading-[20px]">Or continue with</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Background />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p29ad9380} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p73c0a80} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p1f69ba00} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
          <path d={svgPaths.p3d0b3f00} fill="var(--fill-0, #EA4335)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSsoOptions() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Button - SSO Options">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[17px] py-[13px] relative size-full">
          <Svg />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] text-center w-[148.69px]">
            <p className="leading-[24px]">Sign in with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-[414px]" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[56px] relative size-full">
        <EmailInput />
        <PasswordInput />
        <LoginButton />
        <Container6 />
        <ButtonSsoOptions />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
          <p>
            <span className="leading-[20px]">{`New employee? `}</span>
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic text-[#5048e5]">Contact IT Support</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[17px] px-[32px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#d8d8d8] flex-[1_0_0] max-w-[480px] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <LogoAndHeader />
        <Form />
        <Footer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex items-center justify-center px-[400px] py-[182px] relative size-full" data-name="Body">
      <BackgroundBorderShadow />
    </div>
  );
}