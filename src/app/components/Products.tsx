import { useState } from "react";
import type { CSSProperties } from "react";
import { Snowflake, Leaf, PowerOff, ZapOff, Smartphone, ShieldAlert, ShieldCheck, Droplets, Timer, VolumeX } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollReveal } from "./useScrollReveal";
import { InteractiveFeatureBench } from "./InteractiveFeatureBench";
import benchCity from "../../assets/smart-bench/bench-city.png";
import bench4Image from "../../assets/smart-bench/bench4.png";

const featureGuide = [
  {
    icon: <Snowflake className="h-4 w-4" />,
    title: "결로 방지 기술",
    summary: "환경을 실시간으로 감지하여 결로를 방지하여 최적의 사용감 제공",
  },
  {
    icon: <Leaf className="h-4 w-4" />,
    title: "에너지 절감 기능",
    summary: "모션센서 적용으로 사용자 근접 시만 작동, 에너지 절약",
  },
  {
    icon: <PowerOff className="h-4 w-4" />,
    title: "전원 차단 기능",
    summary: "전원 차단을 통해 침수 등으로부터 부품 및 회로를 보호",
  },
  {
    icon: <ZapOff className="h-4 w-4" />,
    title: "과전압·과전류 차단기능",
    summary: "제어보드 보호",
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    title: "GPS 타이머·무선 제어 기능",
    summary: "전원 차단 시에도 부품과 회로를 보호하며, 정전 상황에서도 날짜와 시간을 정확히 동기화해 오류 없이 가동합니다.",
  },
  {
    icon: <ShieldAlert className="h-4 w-4" />,
    title: "유해 전자파 차단 기능",
    summary: "EMF인증, 안전한 저전압 DC12V 사용",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "전기 안전 기능",
    summary: "KC안전인증",
  },
  {
    icon: <Droplets className="h-4 w-4" />,
    title: "방수 기능",
    summary: "전원 차단을 통해 침수 등으로부터 부품 및 회로를 보호",
  },
  {
    icon: <Timer className="h-4 w-4" />,
    title: "자동 타이머 기능",
    summary: "설정에 따라 자동 ON/OFF 기능으로 365일 사용가능",
  },
  {
    icon: <VolumeX className="h-4 w-4" />,
    title: "무소음",
    summary: "소음이 적어 쾌적한 환경을 제공",
  },
];

const technicalSpecs = [
  { key: "Model", value: "WSBC-2300 / WSBC-2080" },
  { key: "Rated Voltage", value: "AC 220V, 60Hz" },
  { key: "Rated Power", value: "WSBC-2300: 530W, WSBC-2080: 490W" },
  { key: "Control", value: "자동 모드 + 시간/온도 기반 설정 모드" },
  { key: "Installation", value: "실외 공공공간 설치 기준 고려" },
];

export function Products() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState<"overview" | "features">("overview");

  const headerStyle = { "--page-image": `url(${benchCity})` } as CSSProperties;

  return (
    <div className="spectral-page">
      <section className="spectral-page-header" style={headerStyle}>
        <div className="spectral-inner">
          <p className="spectral-kicker text-xs text-white/75 scroll-follow">WETECH Product</p>
          <h1 className="spectral-title text-white scroll-follow scroll-delay-1">제품</h1>
        </div>
      </section>

      <section className="pt-10 pb-20">
        <div className="max-w-[78rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Custom Switcher */}
          <div className="flex justify-center mb-16 scroll-follow">
            <div className="inline-flex bg-[#f4f6f8] p-1.5 rounded-xl border border-[#eaeaea]">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-8 py-3 rounded-lg text-[0.95rem] font-bold tracking-[0.05em] transition-all duration-300 ${activeTab === "overview"
                  ? "bg-white text-[#0052cc] shadow-md border border-[#eaeaea] scale-105"
                  : "text-[#1d242a]/60 hover:text-[#1d242a] hover:bg-black/5"
                  }`}
              >
                개별 기능 설명
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-8 py-3 rounded-lg text-[0.95rem] font-bold tracking-[0.05em] transition-all duration-300 ${activeTab === "features"
                  ? "bg-white text-[#0052cc] shadow-md border border-[#eaeaea] scale-105"
                  : "text-[#1d242a]/60 hover:text-[#1d242a] hover:bg-black/5"
                  }`}
              >
                전체 기능 안내
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          {activeTab === "overview" ? (
            <div className="w-full">
              <header className="mb-12 text-center max-w-[78rem] mx-auto px-4">
                <h2 className="text-[1.35rem] font-extrabold tracking-[0.1em] text-[#1d242a] mb-4">WETECH 핵심 기술 탐색</h2>
                <p className="text-[#1d242a]/70 text-[1.05rem]">스마트 벤치에 적용된 혁신적인 기술 아이콘에 마우스를 올려 상세 기능을 확인해 보세요.</p>
              </header>
              <div className="w-full bg-[#f8f9fa] border-y border-[#eaeaea] py-16 overflow-hidden">
                <div className="max-w-[120rem] mx-auto px-4">
                  <InteractiveFeatureBench />
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Product Specifications Section */}
              <section className="bg-white border border-[#eaeaea] rounded-[2rem] overflow-hidden shadow-sm mb-24">
                <div className="grid lg:grid-cols-[45%_55%] items-stretch">
                  <div className="relative p-8 lg:p-12 min-h-[400px] bg-[#f4f6f8] flex items-center justify-center group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0052cc]/5 to-transparent z-0"></div>
                    <ImageWithFallback
                      src={bench4Image}
                      alt="WETECH Smart Bench 기술 구성 이미지"
                      className="relative z-10 w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-16 bg-white border-l border-[#eaeaea]">
                    <h2 className="text-[2rem] font-extrabold tracking-tight text-[#1d242a] mb-6 relative inline-block self-start">
                      제품 사양
                      <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#0052cc] rounded-full"></span>
                    </h2>
                    <p className="mt-2 text-[1.05rem] leading-relaxed text-[#1d242a]/80 break-keep mb-8">
                      WETECH Smart Bench는 냉·온열 제어, 결로 대응, 실외 안전 운용을 중심으로 설계된 공공공간용 차세대 설비입니다. 현장의 운영 정책(시간/온도/환경)에 따라 맞춤형 운전 모드를 구성할 수 있습니다.
                    </p>

                    <div className="bg-[#f8f9fa] rounded-2xl p-6 md:p-8 border border-[#eaeaea]">
                      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {technicalSpecs.map((spec) => (
                          <div key={spec.key} className="flex flex-col pb-4 border-b border-[#eaeaea] md:border-b-0 md:pb-0">
                            <dt className="text-sm font-bold text-[#0052cc] uppercase tracking-wider mb-2">{spec.key}</dt>
                            <dd className="text-[0.95rem] font-medium text-[#1d242a] leading-relaxed break-keep">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </section>

              {/* 10 Key Features Bento Box */}
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-[2rem] font-extrabold tracking-tight text-[#1d242a] mb-5 relative inline-block">
                  주요 기술 가이드
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0052cc] rounded-full"></div>
                </h2>
                <p className="text-[#1d242a]/70 text-[1.05rem] max-w-2xl mx-auto leading-relaxed break-keep mt-6">
                  도입 시 필수적으로 검토되는 10가지 핵심 기술을 안내합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 pb-20">
                {featureGuide.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative bg-white border border-[#eaeaea] hover:border-[#0052cc]/30 rounded-3xl p-6 sm:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400 overflow-hidden cursor-default flex flex-col justify-between min-h-[240px]"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0052cc]/5 to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-4xl font-extrabold text-[#1d242a]/5 group-hover:text-[#0052cc]/10 transition-colors duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-[#f8f9fa] flex items-center justify-center text-[#1d242a]/60 group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300 shadow-sm border border-[#eaeaea] group-hover:border-transparent">
                          {item.icon}
                        </div>
                      </div>
                      <h4 className="text-[1.15rem] font-bold text-[#1d242a] mb-3 group-hover:text-[#0052cc] transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[#1d242a]/70 leading-relaxed text-[0.95rem] break-keep font-medium">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
