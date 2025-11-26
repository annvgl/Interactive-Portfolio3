import svgPaths from "./svg-pvlwaxgdm4";
import imgImageAnnVogel from "figma:asset/f44853e85f8d15d87fbdabb06050fc58db398ad5.png";

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="h-[36px] w-full" />
      </div>
    </div>
  );
}

function ImageAnnVogel() {
  return (
    <div className="h-[184px] relative shrink-0 w-full" data-name="Image (Ann Vogel)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAnnVogel} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[74.66px] rounded-[1.67772e+07px] size-[192px] top-[32px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[inherit] size-[192px]">
        <ImageAnnVogel />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#ff637e] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[277.328px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[138.9px] not-italic text-[#ec003f] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Ann Vogel</p>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#ff2056] h-[4px] left-[90.66px] top-[32px] w-[96px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[52px] w-[277.328px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[139.41px] not-italic text-[16px] text-center text-neutral-700 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">UI/UX Student</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-0 top-[84px] w-[277.328px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[138.68px] not-italic text-[14px] text-center text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">25.06.2002 • 23 years</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[104px] left-[32px] top-[256px] w-[277.328px]" data-name="Container">
      <Heading />
      <Container2 />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <Icon />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-[28px] not-italic text-[#ec003f] text-[18px] text-nowrap top-[0.5px] tracking-[-0.4395px] whitespace-pre">Contact</p>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#ffa1ad] h-[2px] shrink-0 w-full" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[41px] items-start left-0 top-0 w-[277.328px]" data-name="Container">
      <Heading2 />
      <Container4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #FF2056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #FF2056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #FF2056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #FF2056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Date of Birth</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">25.06.2002 (23 years)</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[161.75px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Container6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_101_304)" id="Icon">
          <path d={svgPaths.p24c7c480} id="Vector" stroke="var(--stroke-0, #FF2056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_101_304">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Phone</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">015775890589</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[112.688px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Container8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #FF2056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #FF2056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Email</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">ann.vogel@hfg-gmuend.de</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[196.195px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[164px] items-start left-0 top-[65px] w-[277.328px]" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_101_292)" id="Icon">
          <path d={svgPaths.pc5cc480} id="Vector" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p114c6ec0} id="Vector_2" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 4.16667H11.6667" id="Vector_3" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5.83333 1.66667H6.66667" id="Vector_4" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3be0dd80} id="Vector_5" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M11.6667 15H16.6667" id="Vector_6" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_101_292">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <Icon4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[28px] not-italic text-[#ec003f] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Languages</p>
    </div>
  );
}

function Container13() {
  return <div className="bg-[#ffa1ad] h-[2px] shrink-0 w-full" data-name="Container" />;
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">German</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Native Speaker</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[72px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph8 />
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">English</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">{`C1 Level `}</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[72px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[72px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph10 />
          <Paragraph11 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[160px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[214px] items-start left-0 top-[261px] w-[277.328px]" data-name="Container">
      <Heading3 />
      <Container13 />
      <Container16 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[20px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p27e2e0c0} id="Vector" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p809b580} id="Vector_2" stroke="var(--stroke-0, #EC003F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <Icon5 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-[28px] not-italic text-[#ec003f] text-[18px] text-nowrap top-[0.5px] tracking-[-0.4395px] whitespace-pre">Skills</p>
    </div>
  );
}

function Container18() {
  return <div className="bg-[#ffa1ad] h-[2px] shrink-0 w-full" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Figma</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[48px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph12 />
        </div>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Vibe Coding</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[48px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph13 />
        </div>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Prototyping</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[48px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph14 />
        </div>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Managing Group Projects</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[48px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph15 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[228px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[285px] items-start left-0 top-[507px] w-[277.328px]" data-name="Container">
      <Heading4 />
      <Container18 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[792px] left-[32px] top-[392px] w-[277.328px]" data-name="Container">
      <Container5 />
      <Container12 />
      <Container17 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-gradient-to-b from-[#fff1f2] h-[1252px] left-0 to-[#ffe4e6] top-0 w-[341.328px]" data-name="Container">
      <Container1 />
      <Container3 />
      <Container25 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[618.672px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[#ec003f] text-[20px] text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">Education</p>
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[#ff2056] h-[4px] left-0 top-[38px] w-[128px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container27 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[89.031px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[89.031px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#ec003f] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">HFG Gmünd</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[128.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[128.125px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">May 2024 - Present</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Text />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Studies: Interaction Design</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Specialization in UI/UX Design, Prototyping and Digital Design</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white h-[132px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff637e] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative w-full">
          <Container29 />
          <Paragraph16 />
          <Paragraph17 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[207.594px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[207.594px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Mörike Gymnasium Stuttgart</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[77.742px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">2018 - 2021</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Text1 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Abitur (High School Diploma)</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Completed secondary education</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white h-[132px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffa1ad] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative w-full">
          <Container31 />
          <Paragraph18 />
          <Paragraph19 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[161.297px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[161.297px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Sligo Grammar School</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[77.266px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">2017 - 2018</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Text2 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Study Abroad Year in Ireland</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">International experience and language development</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[132px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffa1ad] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative w-full">
          <Container33 />
          <Paragraph20 />
          <Paragraph21 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[207.594px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[207.594px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Mörike Gymnasium Stuttgart</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.773px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">2012 - 2017</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Text3 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Secondary School</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white h-[104px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffa1ad] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative w-full">
          <Container35 />
          <Paragraph22 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[572px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container32 />
      <Container34 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[638px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container37 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[618.672px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[#ec003f] text-[20px] text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">Work Experience</p>
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-[#ff2056] h-[4px] left-0 top-[38px] w-[128px]" data-name="Container" />;
}

function Container40() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container39 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Fairflexx Digital</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Data Processing</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Experience in digital data processing and management</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white h-[132px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff637e] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative w-full">
          <Heading10 />
          <Paragraph23 />
          <Paragraph24 />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Bioladen Naturgut</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Retail Position</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Customer service and sales in retail environment</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white h-[132px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffa1ad] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative w-full">
          <Heading11 />
          <Paragraph25 />
          <Paragraph26 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-800 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Daimler</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Summer Job</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Hands-on experience in the automotive industry</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white h-[132px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffa1ad] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative w-full">
          <Heading12 />
          <Paragraph27 />
          <Paragraph28 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[444px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[510px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-neutral-50 box-border content-stretch flex flex-col gap-[40px] h-[1252px] items-start left-[341.33px] pb-0 pt-[32px] px-[32px] top-0 w-[682.672px]" data-name="Container">
      <Container38 />
      <Container45 />
    </div>
  );
}

function CvDocumentEnglish() {
  return (
    <div className="bg-white h-[1252px] overflow-clip relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="CVDocumentEnglish">
      <Container26 />
      <Container46 />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-neutral-100 relative size-full" data-name="App">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[32px] px-[122px] relative size-full">
          <Container />
          <CvDocumentEnglish />
        </div>
      </div>
    </div>
  );
}