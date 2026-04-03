import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bench1Img from "../../assets/smart-bench/bench1.png";

type Feature = {
  id: string;
  title: string;
  summary: string;
  color: string;
};

const features: Feature[] = [
  {
    id: "temp",
    title: "친환경 무냉매 온열 제어",
    summary: "냉매를 사용하지 않는 친환경 열전 모듈로 유해물질 걱정 없는 균일한 안락함을 전달합니다.",
    color: "#ff453a",
  },
  {
    id: "condensation",
    title: "능동형 고효율 결로 방지",
    summary: "환경 데이터를 정밀하게 분석하여 온도와 습도를 제어, 착석부의 쾌적함을 최상으로 유지합니다.",
    color: "#ff9f0a",
  },
  {
    id: "waterproof",
    title: "구조적 방수·방진 설계",
    summary: "외부 환경의 영향으로부터 자유로운 IP 등급의 강력한 보호 설계가 적용되었습니다.",
    color: "#bf5af2",
  },
  {
    id: "wireless",
    title: "IoT 지능형 원격 제어",
    summary: "IoT 메인 인프라를 통해 물리적 방문 없이도 실시간 모니터링 및 기기 상태를 정밀 제어하는 차세대 원격 관리 시스템입니다.",
    color: "#0071e3",
  },
  {
    id: "eco",
    title: "현장 최적화 절전 시스템",
    summary: "필요한 순간에만 작동하는 지능형 절전 알고리즘으로 불필요한 에너지 소모를 획기적으로 줄입니다.",
    color: "#32d74b",
  },
  {
    id: "safety",
    title: "통합 다중 안전 시스템",
    summary: "KC 안전 인증과 다중 보호 회로를 통해 공공장소에서의 예상치 못한 사고를 철저히 방지합니다.",
    color: "#64d2ff",
  },
  {
    id: "custom",
    title: "상상을 현실로, 전천후 커스텀",
    summary: "당신이 상상하는 그 어떤 환경과 조건이라도 WETECH은 마침내 해답을 찾아냅니다. 공간의 한계를 넘어선 맞춤형 솔루션을 제안합니다.",
    color: "#ff2d55",
  },
];

export function InteractiveFeatureBench() {
  const [activeFeatureId, setActiveFeatureId] = useState<string>(features[0].id);
  
  const activeFeature = features.find(f => f.id === activeFeatureId) || features[0];

  return (
    <div className="relative w-full max-w-[90rem] mx-auto min-h-[700px] flex flex-col items-center justify-center p-6 lg:p-16">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl rounded-full blur-[160px] pointer-events-none -z-10 opacity-30" style={{ background: `radial-gradient(circle, ${activeFeature.color}15 0%, transparent 70%)` }}></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full items-center">
        
        {/* Left: Product Visualization (Static position for less distraction) */}
        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Subtle glow reacting to selection */}
            <motion.div 
              key={activeFeatureId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
              style={{ background: activeFeature.color }}
            />
            
            <ImageWithFallback
              src={bench1Img}
              alt="WETECH Smart Bench Focus"
              className="relative z-10 w-full max-w-3xl h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />

            {/* Simple indicator */}
            <div className="absolute top-0 right-0 flex flex-col items-end gap-2 pr-4 lg:pr-0">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeFeature.color }} />
                <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-70">Focus: {activeFeature.id.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Details Showcase */}
        <div className="flex flex-col gap-6">
          <div className="mb-8 space-y-4">
            <span className="text-[#0071e3] text-sm font-black tracking-[0.3em] uppercase">Technical Excellence</span>
            <h2 className="text-white text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                스마트 기술의 <br />압도적 차이
            </h2>
          </div>

          <div className="space-y-4">
            {features.map((feature) => {
              const isActive = activeFeatureId === feature.id;

              return (
                <motion.div
                  key={feature.id}
                  onClick={() => setActiveFeatureId(feature.id)}
                  className={`relative group cursor-pointer p-6 rounded-3xl border transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? "bg-white/10 shadow-2xl" 
                      : "bg-transparent border-white/5 hover:border-white/15"
                  }`}
                  style={{ 
                    borderColor: isActive ? `${feature.color}40` : undefined,
                  }}
                  whileHover={{ x: 10 }}
                >
                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h4 className={`text-xl font-bold transition-colors ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                        {feature.title}
                      </h4>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-white/60 text-sm leading-relaxed break-keep font-medium pt-1"
                        >
                          {feature.summary}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Active indicator line with unique color */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 w-1 h-full" 
                      style={{ backgroundColor: feature.color }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
