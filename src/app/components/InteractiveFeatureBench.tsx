import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Cpu, Droplets, Flame, Leaf, ShieldCheck, Snowflake, Wifi } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bench1Img from "../../assets/smart-bench/bench1.png";

type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
};

const features: Feature[] = [
  {
    id: "condensation",
    icon: Snowflake,
    title: "결로 방지 기술",
    summary: "표면 온도와 외기 환경을 분석해 결로가 생기기 쉬운 구간을 안정적으로 제어합니다.",
  },
  {
    id: "temp",
    icon: Flame,
    title: "자동 온도 제어",
    summary: "냉·온열 운전 조건을 실시간으로 조정해 계절과 시간대에 맞는 체감 온도를 제공합니다.",
  },
  {
    id: "waterproof",
    icon: Droplets,
    title: "방수 설계",
    summary: "실외 설치 환경을 고려한 구조와 마감으로 빗물, 물튀김, 습기에 대한 내구성을 높였습니다.",
  },
  {
    id: "wireless",
    icon: Wifi,
    title: "IoT 기반 무선 제어",
    summary: "현장 접근 없이도 운전 상태를 확인하고 주요 설정을 원격으로 조정할 수 있습니다.",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "전기 안전 기능",
    summary: "보호 회로와 안전 설계를 통해 공공장소에서도 안정적으로 운용할 수 있도록 구성했습니다.",
  },
  {
    id: "eco",
    icon: Leaf,
    title: "친환경 저소음 설계",
    summary: "에너지 소비를 줄이고 소음을 낮춰 장시간 사용 환경에서도 쾌적함을 유지합니다.",
  },
  {
    id: "optimization",
    icon: Cpu,
    title: "운영 최적화",
    summary: "운영 시간과 계절 조건에 따라 장비 동작을 세밀하게 맞춰 관리 효율을 높입니다.",
  },
];

export function InteractiveFeatureBench() {
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-12 p-4 lg:flex-row lg:p-12">
      <div className="flex w-full justify-center lg:w-2/3">
        <div className="relative isolate w-full max-w-4xl overflow-hidden bg-transparent px-4 py-6 transition-all duration-700 sm:px-8 sm:py-10">
          <ImageWithFallback
            src={bench1Img}
            alt="WETECH Smart Bench Interactive Features"
            className={`relative z-20 h-auto w-full object-contain transition-all duration-700 ${
              activeFeatureId ? "scale-[1.015] drop-shadow-[0_24px_36px_rgba(0,0,0,0.15)]" : "scale-100"
            }`}
          />
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-4 lg:w-1/3">
        {features.map((feature) => {
          const FeatureIcon = feature.icon;
          const isActive = activeFeatureId === feature.id;
          const isDimmed = activeFeatureId !== null && !isActive;

          return (
            <div
              key={feature.id}
              className="group relative flex cursor-pointer items-center lg:w-max"
              onMouseEnter={() => setActiveFeatureId(feature.id)}
              onMouseLeave={() => setActiveFeatureId(null)}
            >
              <div
                className={`z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#eaeaea] shadow-sm transition-all duration-300 ease-out ${
                  isActive
                    ? "scale-110 border-[#0052cc] bg-[#0052cc] text-white shadow-lg ring-4 ring-[#0052cc]/20"
                    : "bg-white text-[#1d242a] group-hover:bg-[#f4f6f8] group-hover:text-[#0052cc]"
                } ${isDimmed ? "scale-95 opacity-40" : "opacity-100"}`}
              >
                <FeatureIcon className="h-5 w-5" />
              </div>

              <div
                className={`ml-4 text-[1rem] font-bold transition-all duration-300 ${
                  isActive ? "text-[#0052cc]" : "text-[#1d242a]"
                } ${isDimmed ? "opacity-40" : "opacity-100"}`}
              >
                {feature.title}
              </div>

              <div
                className={`pointer-events-none absolute left-0 top-full z-30 mt-2 w-[280px] origin-top rounded-2xl border border-[#eaeaea]/80 bg-white/90 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 lg:left-[calc(100%+0.75rem)] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:origin-left ${
                  isActive ? "visible translate-x-0 scale-100 opacity-100" : "invisible -translate-x-4 scale-95 opacity-0"
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="shrink-0 rounded-lg bg-[#0052cc]/10 p-1.5 text-[#0052cc]">
                    <FeatureIcon className="h-4 w-4" />
                  </span>
                  <h4 className="text-[0.95rem] font-bold text-[#1d242a]">{feature.title}</h4>
                </div>
                <p className="break-keep text-[0.9rem] leading-relaxed text-[#1d242a]/80">{feature.summary}</p>
                <div className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-b border-l border-[#eaeaea]/80 bg-white/90 backdrop-blur-xl lg:block" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
