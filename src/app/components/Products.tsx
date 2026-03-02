import { Snowflake, Flame, ShieldCheck, Wifi, Droplets, Leaf } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import brochureFeatures from "../../assets/smart-bench/brochure-features.png";

const featureGuide = [
  {
    icon: <Snowflake className="h-4 w-4" />,
    title: "결로 방지 기술",
    summary: "실시간 환경값 감지 기반으로 결로 발생을 줄여 쾌적한 착석 환경을 유지합니다.",
  },
  {
    icon: <Flame className="h-4 w-4" />,
    title: "자동 온도 제어",
    summary: "냉열/온열 모드를 외기 조건에 따라 자동 전환해 안정적인 체감 온도를 제공합니다.",
  },
  {
    icon: <Droplets className="h-4 w-4" />,
    title: "방수 설계",
    summary: "실외 설치 환경을 고려한 구조로 우천 시에도 안정적인 운용이 가능합니다.",
  },
  {
    icon: <Wifi className="h-4 w-4" />,
    title: "무선 제어",
    summary: "비접촉 설정 기반으로 운영관리와 유지보수 편의성을 높였습니다.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "전기 안전 기능",
    summary: "보호 회로 및 안전 기준 기반 설계로 공공시설 적용 리스크를 최소화합니다.",
  },
  {
    icon: <Leaf className="h-4 w-4" />,
    title: "친환경/저소음",
    summary: "열 효율 중심 운용과 저소음 설계로 주변 공간에 미치는 부담을 줄입니다.",
  },
];

export function Products() {
  return (
    <div className="bg-[#f4f4f5] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="font-display mb-3 text-sm tracking-[0.14em] text-slate-500">PRODUCT</p>
          <h1 className="text-4xl sm:text-5xl">제품</h1>
          <p className="mt-5 max-w-4xl leading-relaxed text-slate-600">
            Smart Bench 제품 페이지는 설치 가능 분야보다 기능 중심으로 확인할 수 있도록 구성했습니다. 현장 적용 전 핵심
            성능과 운영 방식을 먼저 검토할 수 있습니다.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-10">
          <div className="group overflow-hidden rounded-2xl border border-slate-200">
            <ImageWithFallback
              src={brochureFeatures}
              alt="Smart Bench 기능 소개 이미지"
              className="h-[420px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div>
            <h2 className="text-3xl">핵심 기능 안내</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Smart Bench는 냉·온열 제어, 결로 대응, 실외 안전 운용을 중심으로 설계되었습니다. 아래 항목은 실제 설치 현장에서
              가장 많이 검토되는 기능들입니다.
            </p>
            <div className="mt-6 space-y-3">
              {featureGuide.map((item) => (
                <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <span className="rounded-md bg-slate-900 p-1 text-slate-100">{item.icon}</span>
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
