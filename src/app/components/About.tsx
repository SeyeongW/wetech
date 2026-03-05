import type { CSSProperties } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import benchCity from "../../assets/smart-bench/bench-city.png";
import usageFields from "../../assets/smart-bench/usage-fields.png";
import cert1 from "../../assets/smart-bench/certs/cert1.png";
import cert2 from "../../assets/smart-bench/certs/cert2.png";
import cert3 from "../../assets/smart-bench/certs/cert3.png";
import cert4 from "../../assets/smart-bench/certs/cert4.png";
import cert5 from "../../assets/smart-bench/certs/cert5.png";

const useCases = [
  {
    title: "공원 및 정원",
    description: "야외 휴식 밀도가 높은 공간에서 계절별 체감 편차를 줄여 안정적인 이용 경험을 제공합니다.",
  },
  {
    title: "대중교통 대기 공간",
    description: "버스정류장, 환승 거점 등 대기 시간이 발생하는 구간에서 시민 만족도를 개선할 수 있습니다.",
  },
  {
    title: "관광지 및 공공시설",
    description: "관광객과 다중 이용 시설 방문객의 체류 편의성을 높여 공간 품질 향상에 기여합니다.",
  },
  {
    title: "국립공원/보행 동선",
    description: "장거리 보행 구간의 중간 휴게 포인트로 활용해 회복 동선과 보행 편의를 보완합니다.",
  },
];

const documents = [
  { title: "안전확인신고증명서 (WSBC-2300)", image: cert1 },
  { title: "안전확인신고증명서 (WSBC-2080)", image: cert2 },
  { title: "방송통신기자재 적합등록 필증", image: cert3 },
  { title: "특허증 제10-2517070호", image: cert4 },
  { title: "특허증 제10-2623348호", image: cert5 },
];

export function About() {
  const headerStyle = { "--page-image": `url(${benchCity})` } as CSSProperties;

  return (
    <div className="spectral-page">
      <section className="spectral-page-header" style={headerStyle}>
        <div className="spectral-inner">
          <p className="spectral-kicker text-xs text-white/75">About WETECH</p>
          <h1 className="spectral-title text-white scroll-follow scroll-delay-1">소개</h1>
          <p className="spectral-subtitle mx-auto mt-4 max-w-3xl text-sm sm:text-base">
            활용 환경을 기준으로 도입 목적을 정의하고, 운영 안정성 검토에 필요한 인증 자료를 함께 제공합니다.
          </p>
        </div>
      </section>

      <section className="spectral-section pt-12 pb-20">
        <div className="spectral-wrapper style1">
          {/* About Smart Bench Section */}
          <section className="mb-20">
            <header className="mb-6 text-center">
              <h2 className="text-[1.5rem] font-extrabold tracking-[0.1em] text-[#1d242a] relative inline-block">
                About Smart Bench
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0052cc]"></span>
              </h2>
            </header>
            <div className="bg-[#f8f9fa] rounded-2xl p-8 lg:p-12 border border-[#eaeaea] text-center shadow-sm">
              <p className="text-[1.05rem] leading-relaxed text-[#1d242a]/80 break-keep max-w-4xl mx-auto">
                국내외 유일의 특허 기술인 직류 기반 세라믹 열전소자를 적용하여 냉각과 가열을 동시에 수행하며, 뛰어난 효율과 내구성을 제공합니다. 이 기술은 기상 변화에 따라 벤치 스스로 온도 조절을 하여 온열 및 냉각 기능을 제공하며, 센서를 통해 사용자가 없을 때는 설정된 기본 온도만 유지해 불필요한 에너지 소비를 최소화합니다.
              </p>
            </div>
          </section>
          {/* Section 1: How it is used */}
          <section className="bg-white border border-[#eaeaea] rounded-xl overflow-hidden shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 p-0 bg-[#f4f6f8] flex flex-col items-center justify-center relative min-h-[300px]">
                <ImageWithFallback src={usageFields} alt="WETECH Smart Bench 활용 분야" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
              </div>
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center bg-white">
                <h2 className="text-2xl font-bold tracking-tight text-[#1d242a] mb-5">어떻게 활용되나요?</h2>
                <p className="text-[#1d242a]/80 mb-10 leading-relaxed text-[0.95rem] break-keep max-w-2xl">
                  공간 목적, 체류 시간, 운영 시간대에 따라 도입 목적이 달라집니다. WETECH는 현장 여건을 기반으로 우선 적용
                  분야를 설정할 수 있도록 활용 시나리오를 제공합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  {useCases.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#0052cc]"></div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-[0.95rem] text-[#1d242a] mb-2">{item.title}</h4>
                        <p className="text-sm text-[#1d242a]/70 leading-relaxed break-keep">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Certifications and Patents */}
          <section className="bg-white border border-[#eaeaea] rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center bg-white order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-[#eaeaea]">
                <h2 className="text-2xl font-bold tracking-tight text-[#1d242a] mb-5">인증서 및 특허</h2>
                <p className="text-[#1d242a]/80 mb-8 leading-relaxed text-[0.95rem] break-keep max-w-xl">
                  공공시설 도입 검토 시 확인할 수 있도록 안전확인신고증명서, 기자재 등록 필증, 특허 문서를 준비했습니다.
                  설치 계획 수립 단계에서 관련 자료를 기준으로 적용 가능 범위를 검토할 수 있습니다.
                </p>
                <ul className="flex flex-col gap-4">
                  {documents.map((doc) => (
                    <li key={doc.title} className="flex items-center gap-3 text-[0.95rem] font-medium text-[#1d242a]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1d242a]/30"></div>
                      {doc.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 p-8 lg:p-12 bg-[#f4f6f8] flex items-center justify-center order-1 lg:order-2 min-h-[300px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                  {documents.map((doc) => (
                    <div key={doc.title} className="bg-white p-3 rounded-lg border border-[#eaeaea] shadow-sm flex items-center justify-center transition-transform hover:-translate-y-1">
                      <ImageWithFallback src={doc.image} alt={doc.title} className="w-full h-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
