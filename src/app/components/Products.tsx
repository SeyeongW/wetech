import type { CSSProperties } from "react";
import { Cpu, Droplets, Flame, Leaf, ShieldCheck, Snowflake, Wifi } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollReveal } from "./useScrollReveal";
import benchCity from "../../assets/smart-bench/bench-city.png";
import brochureFeatures from "../../assets/smart-bench/brochure-features.png";

const featureGuide = [
  {
    icon: <Snowflake className="h-4 w-4" />,
    title: "결로 방지 기술",
    summary: "표면 온도와 외기 조건을 기반으로 결로 발생 구간을 최소화하도록 제어합니다.",
  },
  {
    icon: <Flame className="h-4 w-4" />,
    title: "자동 온도 제어",
    summary: "냉열/온열 운전 모드를 계절과 환경 조건에 맞춰 자동 전환합니다.",
  },
  {
    icon: <Droplets className="h-4 w-4" />,
    title: "방수 설계",
    summary: "실외 설치 기준을 고려한 구조 및 마감으로 우천 환경에서 안정성을 확보합니다.",
  },
  {
    icon: <Wifi className="h-4 w-4" />,
    title: "무선 제어",
    summary: "비접촉 설정 기반으로 운전 파라미터 조정과 운영 상태 점검이 가능합니다.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "전기 안전 기능",
    summary: "보호 회로 및 안전 기준에 맞춘 설계로 공공시설 운용 리스크를 줄였습니다.",
  },
  {
    icon: <Leaf className="h-4 w-4" />,
    title: "친환경·저소음",
    summary: "열 효율 중심 설계와 저소음 운용으로 주변 공간 간섭을 줄입니다.",
  },
  {
    icon: <Cpu className="h-4 w-4" />,
    title: "운영 최적화",
    summary: "운영 시간대/계절 조건에 따른 정책 설정으로 일관된 서비스 품질을 유지합니다.",
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

  const headerStyle = { "--page-image": `url(${benchCity})` } as CSSProperties;

  return (
    <div className="spectral-page">
      <section className="spectral-page-header" style={headerStyle}>
        <div className="spectral-inner">
          <p className="spectral-kicker text-xs text-white/75 scroll-follow">WETECH Product</p>
          <h1 className="spectral-title scroll-follow scroll-delay-1">제품</h1>
        </div>
      </section>

      <section className="spectral-section pt-0">
        <div className="spectral-wrapper style5 scroll-follow">
          <section className="grid gap-8 lg:grid-cols-[46%_54%] lg:items-center">
            <div className="overflow-hidden rounded-md border border-[#d7dde3] bg-[#f4f6f8]">
              <ImageWithFallback
                src={brochureFeatures}
                alt="WETECH Smart Bench 기술 구성 이미지"
                className="h-full min-h-[280px] w-full object-cover object-top"
              />
            </div>
            <div className="scroll-follow scroll-delay-1">
              <h2 className="text-[1.22rem] font-extrabold uppercase tracking-[0.18em] text-[#2e3842]">제품 기능 설명</h2>
              <p className="mt-4 text-base leading-8 text-[#2e3842]/88">
                WETECH Smart Bench는 냉·온열 제어, 결로 대응, 실외 안전 운용을 중심으로 설계된 공공공간용 설비입니다.
                운영 정책(시간/온도/환경)에 따라 운전 모드를 구성할 수 있습니다.
              </p>
              <p className="mt-4 text-base leading-8 text-[#2e3842]/80">
                현장 적용 시에는 공간 유형, 이용 밀도, 유지보수 접근성, 전원 인프라 조건을 함께 검토해 기능 우선순위를
                설정하는 것을 권장합니다.
              </p>
              <dl className="spectral-tech-list mt-5">
                {technicalSpecs.map((spec, index) => (
                  <div key={spec.key} className={`spectral-tech-row scroll-follow scroll-delay-${Math.min(index, 3)}`}>
                    <dt>{spec.key}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </div>
      </section>

      <section className="spectral-section pt-0">
        <div className="spectral-wrapper style5 scroll-follow">
          <header className="spectral-major scroll-follow">
            <h2>핵심 기능</h2>
            <p>도입 시 검토되는 주요 기술 요소입니다.</p>
          </header>
          <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-md border border-[#d7dde3] lg:grid-cols-2">
            {featureGuide.map((item, index) => (
              <article
                key={item.title}
                className={`border-b border-[#d7dde3] p-5 scroll-follow ${index % 2 === 0 ? "lg:border-r" : ""} scroll-delay-${Math.min(index % 4, 3)}`}
              >
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#2e3842]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#bfc7d0] text-[#2e3842]">
                    {item.icon}
                  </span>
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-7 text-[#2e3842]/82">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
