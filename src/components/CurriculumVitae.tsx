import { useState } from "react";
import { ChevronDown } from "lucide-react";
import svgPaths from "../imports/svg-dgcyx194wb";

const imgImageAnnVogel = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764187428/251119_melli-1592_tqoibv.jpg";

interface CVProps {
  language: 'de' | 'en';
}

export function CurriculumVitae({ language }: CVProps) {
  const content = {
    de: {
      buttonText: "Lebenslauf",
      name: "Ann Vogel",
      title: "UI/UX Student",
      contact: "Kontakt",
      birthdateLabel: "Geburtsdatum",
      birthdateValue: "25.06.2002 (23 Jahre)",
      phone: "Telefon",
      phoneNumber: "015775890589",
      email: "E-Mail",
      emailAddress: "ann.vogel@hfg-gmuend.de",
      languages: "Sprachen",
      german: "Deutsch",
      germanLevel: "Muttersprache",
      english: "Englisch",
      englishLevel: "C1 Level",
      skills: "Skills",
      education: "Ausbildung",
      workExperience: "Berufserfahrung",
      // Education entries
      hfgTitle: "HFG Gmünd",
      hfgPeriod: "Mai 2024 - Heute",
      hfgDegree: "Studium: Interaktionsgestaltung",
      hfgDescription: "Vertiefung in UI/UX Design, Prototyping und digitaler Gestaltung",
      morikeAbiturTitle: "Mörike Gymnasium Stuttgart",
      morikeAbiturPeriod: "2018 - 2021",
      morikeAbiturDegree: "Abitur",
      morikeAbiturDescription: "Abschluss der gymnasialen Oberstufe",
      sligoTitle: "Sligo Grammar School",
      sligoPeriod: "2017 - 2018",
      sligoDegree: "Auslandsjahr in Irland",
      sligoDescription: "Internationale Erfahrung und Sprachkenntnisse",
      morikeMittelstufeTitle: "Mörike Gymnasium Stuttgart",
      morikeMittelstufePeriod: "2012 - 2017",
      morikeMittelstufeDegree: "Mittelstufe",
      // Work Experience entries
      fairflexxTitle: "Fairflexx Digital",
      fairflexxPosition: "Datenverarbeitung",
      fairflexxDescription: "Erfahrung in der digitalen Datenverarbeitung und -verwaltung",
      bioladenTitle: "Bioladen Naturgut",
      bioladenPosition: "Einzelhandel",
      bioladenDescription: "Kundenbetreuung und Verkauf im Einzelhandel",
      daimlerTitle: "Mercede Benz Group",
      daimlerPosition: "Ferienjob",
      daimlerDescription: "Praktische Erfahrung in der Automobilindustrie"
    },
    en: {
      buttonText: "Curriculum Vitae",
      name: "Ann Vogel",
      title: "UI/UX Student",
      contact: "Contact",
      birthdateLabel: "Date of Birth",
      birthdateValue: "25.06.2002 (23 years)",
      phone: "Phone",
      phoneNumber: "015775890589",
      email: "Email",
      emailAddress: "ann.vogel@hfg-gmuend.de",
      languages: "Languages",
      german: "German",
      germanLevel: "Native Speaker",
      english: "English",
      englishLevel: "C1 Level",
      skills: "Skills",
      education: "Education",
      workExperience: "Work Experience",
      // Education entries
      hfgTitle: "HFG Gmünd",
      hfgPeriod: "May 2024 - Present",
      hfgDegree: "Studies: Interaction Design",
      hfgDescription: "Specialization in UI/UX Design, Prototyping and Digital Design",
      morikeAbiturTitle: "Mörike Gymnasium Stuttgart",
      morikeAbiturPeriod: "2018 - 2021",
      morikeAbiturDegree: "Abitur (High School Diploma)",
      morikeAbiturDescription: "Completed secondary education",
      sligoTitle: "Sligo Grammar School",
      sligoPeriod: "2017 - 2018",
      sligoDegree: "Study Abroad Year in Ireland",
      sligoDescription: "International experience and language development",
      morikeMittelstufeTitle: "Mörike Gymnasium Stuttgart",
      morikeMittelstufePeriod: "2012 - 2017",
      morikeMittelstufeDegree: "Secondary School",
      // Work Experience entries
      fairflexxTitle: "Fairflexx Digital",
      fairflexxPosition: "Data Processing",
      fairflexxDescription: "Experience in digital data processing and management",
      bioladenTitle: "Bioladen Naturgut",
      bioladenPosition: "Retail Position",
      bioladenDescription: "Customer service and sales in retail environment",
      daimlerTitle: "Mercedes Benz Group",
      daimlerPosition: "Summer Job",
      daimlerDescription: "Hands-on experience in the automotive industry"
    }
  };

  const t = content[language];

  return (
    <div id="cv" className="w-full max-w-6xl mx-auto my-16">
      {/* CV Content - Always Visible */}
      <div className="mt-6 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* CV Layout - New Figma Design */}
        <div className="grid grid-cols-1 lg:grid-cols-[341px_1fr]">
          {/* Left Sidebar - Profile & Contact */}
          <div className="bg-gradient-to-b from-[#F5F3F0] to-[#E8E4DF] p-8 relative">
            {/* Profile Image */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="rounded-full overflow-hidden border-4 border-[#7A6F5D] shadow-xl">
                <img
                  src={imgImageAnnVogel}
                  alt={t.name}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Name & Info */}
            <div className="text-center mb-8">
              <h3 className="text-[#2C2C2C] text-[16px] mb-2">
                {t.name}
              </h3>
              <div className="w-24 h-1 bg-[#7A6F5D] mx-auto mb-3" />
              <p className="text-[#2C2C2C] mb-1">
                {t.title}
              </p>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p26ddc800} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p35ba4680} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <h4 className="text-[#7A6F5D] font-medium">
                  {t.contact}
                </h4>
              </div>
              <div className="w-full h-0.5 bg-[#ACA399] mb-4" />

              <div className="space-y-4">
                {/* Birthdate */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1da67b80} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">{t.birthdateLabel}</p>
                    <p className="text-[#2C2C2C]">{t.birthdateValue}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p24c7c480} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">{t.phone}</p>
                    <p className="text-[#2C2C2C]">{t.phoneNumber}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p24d83580} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pd919a80} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-sm text-[#6B6B6B]">{t.email}</p>
                    <p className="text-[#2C2C2C] break-all">{t.emailAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pc5cc480} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p114c6ec0} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M1.66667 4.16667H11.6667" stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M5.83333 1.66667H6.66667" stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p3be0dd80} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M11.6667 15H16.6667" stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <h4 className="text-[#7A6F5D]">
                  {t.languages}
                </h4>
              </div>
              <div className="w-full h-0.5 bg-[#ACA399] mb-4" />

              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-[#2C2C2C]">{t.german}</p>
                  <p className="text-sm text-[#6B6B6B]">{t.germanLevel}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-[#2C2C2C]">{t.english}</p>
                  <p className="text-sm text-[#6B6B6B]">{t.englishLevel}</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p27e2e0c0} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p809b580} stroke="#7A6F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <h4 className="text-[#7A6F5D] font-medium">
                  {t.skills}
                </h4>
              </div>
              <div className="w-full h-0.5 bg-[#ACA399] mb-4" />

              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-[#2C2C2C]">Figma</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-[#2C2C2C]">Vibe Coding</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-[#2C2C2C]">Prototyping</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-[#2C2C2C]">Managing Group Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Education & Expertise */}
          <div className="bg-[#F5F3F0] p-8 space-y-10">
            {/* Education Section */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl text-[#7A6F5D] mb-2">
                  {t.education}
                </h3>
                <div className="w-32 h-1 bg-[#7A6F5D]" />
              </div>

              <div className="space-y-6">
                {/* HFG Gmünd */}
                <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#7A6F5D] p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="text-[#7A6F5D]">{t.hfgTitle}</h4>
                    <span className="text-sm text-[#6B6B6B] whitespace-nowrap">{t.hfgPeriod}</span>
                  </div>
                  <p className="text-[#2C2C2C] mb-1">{t.hfgDegree}</p>
                  <p className="text-sm text-[#6B6B6B]">
                    {t.hfgDescription}
                  </p>
                </div>

                {/* Mörike Gymnasium - Abitur */}
                <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#ACA399] p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="text-[#2C2C2C]">{t.morikeAbiturTitle}</h4>
                    <span className="text-sm text-[#6B6B6B] whitespace-nowrap">{t.morikeAbiturPeriod}</span>
                  </div>
                  <p className="text-[#2C2C2C] mb-1">{t.morikeAbiturDegree}</p>
                  <p className="text-sm text-[#6B6B6B]">
                    {t.morikeAbiturDescription}
                  </p>
                </div>

                {/* Sligo Grammar School */}
                <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#ACA399] p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="text-[#2C2C2C]">{t.sligoTitle}</h4>
                    <span className="text-sm text-[#6B6B6B] whitespace-nowrap">{t.sligoPeriod}</span>
                  </div>
                  <p className="text-[#2C2C2C] mb-1">{t.sligoDegree}</p>
                  <p className="text-sm text-[#6B6B6B]">
                    {t.sligoDescription}
                  </p>
                </div>

                {/* Mörike Gymnasium - Mittelstufe */}
                <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#ACA399] p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="text-[#2C2C2C]">{t.morikeMittelstufeTitle}</h4>
                    <span className="text-sm text-[#6B6B6B] whitespace-nowrap">{t.morikeMittelstufePeriod}</span>
                  </div>
                  <p className="text-[#2C2C2C]">{t.morikeMittelstufeDegree}</p>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl text-[#7A6F5D] mb-2">
                  {t.workExperience}
                </h3>
                <div className="w-32 h-1 bg-[#7A6F5D]" />
              </div>

              <div className="space-y-6">
                {/* Fairflexx Digital */}
                <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#7A6F5D] p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="text-[#7A6F5D]">{t.fairflexxTitle}</h4>
                    <span className="text-sm text-[#6B6B6B] whitespace-nowrap">2023 - 2024</span>
                  </div>
                  <p className="text-[#2C2C2C] mb-1">{t.fairflexxPosition}</p>
                  <p className="text-sm text-[#6B6B6B]">
                    {t.fairflexxDescription}
                  </p>
                </div>

                {/* Bioladen Naturgut */}
                <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#ACA399] p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="text-[#2C2C2C]">{t.bioladenTitle}</h4>
                    <span className="text-sm text-[#6B6B6B] whitespace-nowrap">2022 - 2023</span>
                  </div>
                  <p className="text-[#2C2C2C] mb-1">{t.bioladenPosition}</p>
                  <p className="text-sm text-[#6B6B6B]">
                    {t.bioladenDescription}
                  </p>
                </div>

                {/* Daimler */}
                <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#ACA399] p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="text-[#2C2C2C]">{t.daimlerTitle}</h4>
                    <span className="text-sm text-[#6B6B6B] whitespace-nowrap">2021</span>
                  </div>
                  <p className="text-[#2C2C2C] mb-1">{t.daimlerPosition}</p>
                  <p className="text-sm text-[#6B6B6B]">
                    {t.daimlerDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}