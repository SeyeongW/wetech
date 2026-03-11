import type { CSSProperties } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Flame, ShieldCheck, Snowflake } from "lucide-react";
import benchCity from "../../assets/smart-bench/bench-city.png";
import usageFields from "../../assets/smart-bench/usage-fields.png";
import cert1 from "../../assets/smart-bench/certs/cert1.png";
import cert2 from "../../assets/smart-bench/certs/cert2.png";
import cert3 from "../../assets/smart-bench/certs/cert3.png";
import cert4 from "../../assets/smart-bench/certs/cert4.png";
import cert5 from "../../assets/smart-bench/certs/cert5.png";

const overviewCards = [
  {
    title: "공공공간 체감 온도 개선",
    description: "계절과 시간대 변화에 맞춘 제어로 공간 이용 경험의 편차를 줄입니다.",
    icon: <Snowflake className="h-4 w-4" />,
  },
  {
    title: "냉·온열 자동 대응",
    description: "외기 조건에 따라 운용 모드를 자동 전환해 운영 안정성을 확보합니다.",
    icon: <Flame className="h-4 w-4" />,
  },
  {
    title: "실외 설치 안전성",
    description: "방수·안전 기준을 고려한 설계로 실외 공공시설 환경에 대응합니다.",
    icon: <ShieldCheck className="h-4 w-4" />,
  },
];

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
          {/* Section 0: WETECH 소개 (Moved from Home) */}
          <section className="mb-24">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-[2.2rem] md:text-[2.5rem] font-extrabold tracking-tight text-[#1d242a] mb-5 relative inline-block">
                스마트 벤치 소개
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#0052cc] rounded-full"></div>
              </h2>
              <p className="text-[#1d242a]/70 text-[1.1rem] md:text-[1.2rem] max-w-3xl mx-auto leading-relaxed break-keep mt-8">
                WETECH Smart Bench는 공원, 보행 동선, 대중교통 대기 공간에서 이용자 체류 품질을 개선하기 위한 공공공간 특화 제품입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {overviewCards.map((card) => (
                <article key={card.title} className="group relative bg-white border border-[#eaeaea] hover:border-[#0052cc]/30 rounded-3xl p-8 lg:p-10 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full min-h-[300px]">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0052cc]/5 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#f4f6f8] flex items-center justify-center text-[#0052cc] group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-500 shadow-sm border border-[#eaeaea] group-hover:border-transparent mb-6">
                      {card.icon}
                    </div>
                    <h4 className="text-[1.35rem] font-bold text-[#1d242a] group-hover:text-[#0052cc] transition-colors duration-300">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-[#1d242a]/70 leading-relaxed text-[1.05rem] break-keep font-medium mt-auto">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Section 1: How it is used */}
          <section className="mb-24">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-[2rem] font-extrabold tracking-tight text-[#1d242a] mb-5 relative inline-block">
                어떻게 활용되나요?
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0052cc] rounded-full"></div>
              </h2>
              <p className="text-[#1d242a]/70 text-[1.05rem] max-w-2xl mx-auto leading-relaxed break-keep mt-6">
                공간 목적, 체류 시간, 운영 시간대에 따라 도입 목적이 달라집니다.<br className="hidden sm:block" />
                WETECH는 현장 여건을 기반으로 최적의 활용 시나리오를 제안합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Image Showcase Card */}
              <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[350px] lg:min-h-[100%] group shadow-sm border border-[#eaeaea]">
                <ImageWithFallback
                  src={usageFields}
                  alt="WETECH Smart Bench 활용 분야"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d242a]/90 via-[#1d242a]/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-5 border border-white/20">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">다양한 공간 연출</h3>
                  <p className="text-white/80 text-[0.95rem] font-light leading-relaxed break-keep">
                    단순한 휴식 공간을 넘어, 스마트한 기술로 지속 가능한 도시 환경을 조성합니다.
                  </p>
                </div>
              </div>

              {/* Feature Cards Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {useCases.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative bg-white border border-[#eaeaea] hover:border-[#0052cc]/30 rounded-3xl p-6 sm:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400 overflow-hidden cursor-default flex flex-col justify-between h-full min-h-[220px]"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0052cc]/5 to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-4xl font-extrabold text-[#1d242a]/5 group-hover:text-[#0052cc]/10 transition-colors duration-500">
                          0{index + 1}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-[#1d242a] mb-3 group-hover:text-[#0052cc] transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[#1d242a]/70 leading-relaxed text-[0.95rem] break-keep font-medium">
                      {item.description}
                    </p>
                  </div>
                ))}
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
