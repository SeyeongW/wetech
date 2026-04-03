import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    id: "temp",
    icon: Flame,
    title: "자동 온도 제어",
    summary: "냉·온열 운전 조건을 실시간 조정하여 최적의 체감 온도를 항시 유지합니다.",
  },
  {
    id: "waterproof",
    icon: Droplets,
    title: "방수/방진 설계",
    summary: "실외 비와 눈, 습기에도 견디도록 완벽한 구조적 방형 설계를 적용했습니다.",
  },
  {
    id: "condensation",
    icon: Snowflake,
    title: "결로 대응 시스템",
    summary: "표면 온도와 대기 습도를 분석해 착석 라인에 결로가 발생하지 않도록 제어합니다.",
  },
  {
    id: "wireless",
    icon: Wifi,
    title: "IoT 무선 제어",
    summary: "관리 시스템을 통해 현장에 가지 않고도 온도와 조명을 원격으로 즉시 조정합니다.",
  },
  {
    id: "eco",
    icon: Leaf,
    title: "저소음 고효율",
    summary: "자체 개발된 에너지 최적화 알고리즘으로 전력 소모와 팬 소음을 최소화합니다.",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "전기 및 구조 안전",
    summary: "다중 안전 보호 회로와 고강성 소재를 적용해 공공장소에서도 철저히 보호됩니다.",
  },
  {
    id: "optimization",
    icon: Cpu,
    title: "운영 최적화",
    summary: "이용 패턴을 학습하여 스스로 운전 효율을 극대화하는 메인 브레인 모듈.",
  },
];

export function InteractiveFeatureBench() {
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[100rem] mx-auto min-h-[600px] flex flex-col items-center justify-center p-4 lg:p-12 overflow-hidden">
      
      {/* Background ambient lighting — adjusted for pure black */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-[100%] blur-[120px] pointer-events-none -z-10" style={{ background: "radial-gradient(ellipse, rgba(0,113,227,0.12) 0%, rgba(0,113,227,0.05) 40%, rgba(0,0,0,0) 70%)" }}></div>

      {/* Main Bench Display */}
      <div className="relative w-full max-w-4xl h-[350px] sm:h-[450px] lg:h-[550px] flex items-center justify-center mb-16 isolate">
        
        {/* Core Bench Image always remains original */}
        <ImageWithFallback
          src={bench1Img}
          alt="WETECH Smart Bench Interactive View"
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-transform duration-700 ease-out"
          style={{ transform: activeFeatureId ? "scale(1.02)" : "scale(1)" }}
        />
        
      </div>

      {/* Neatly Aligned Dock of Feature Icons */}
      <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 z-20">
        {features.map((feature) => {
          const FeatureIcon = feature.icon;
          const isActive = activeFeatureId === feature.id;
          const isDimmed = activeFeatureId !== null && !isActive;

          return (
            <div
              key={feature.id}
              className="relative group"
              onMouseEnter={() => setActiveFeatureId(feature.id)}
              onMouseLeave={() => setActiveFeatureId(null)}
            >
              {/* Tooltip Popup */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: -16, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 w-max max-w-[240px] sm:max-w-[280px] p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#eaeaea] shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-30 pointer-events-none"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#0071e3]/10 text-[#0071e3]">
                        <FeatureIcon className="h-4 w-4" />
                      </span>
                      <h4 className="text-[1rem] font-extrabold text-[#1d1d1f] tracking-tight leading-none whitespace-nowrap">{feature.title}</h4>
                    </div>
                    <p className="break-keep text-[0.88rem] leading-relaxed text-[#1d1d1f]/80 m-0 font-medium">{feature.summary}</p>
                    
                    {/* Tooltip downward arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-b border-r border-[#eaeaea] bg-white/95 backdrop-blur-xl"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Neatly Aligned Icon Button */}
              <div
                className={`relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ease-out shadow-sm cursor-pointer border ${
                  isActive
                    ? "bg-[#0071e3] text-white border-transparent scale-110 shadow-lg shadow-[#0071e3]/20"
                    : "bg-white/5 text-[#98989d] border-white/10 hover:bg-white/10 hover:text-[#f5f5f7] hover:border-white/20 shadow-none"
                } ${isDimmed ? "opacity-30 scale-95" : "opacity-100"}`}
              >
                {/* Static Icon */}
                <div className="flex items-center justify-center transform-gpu">
                  <FeatureIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
