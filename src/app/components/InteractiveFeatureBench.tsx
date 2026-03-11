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
    title: "무선 제어",
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

const premiumKeyframes = `
  @keyframes premium-scan-h {
    0% { transform: translateX(-100%); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateX(200%); opacity: 0; }
  }
  @keyframes premium-scan-v {
    0% { transform: translateY(-100%); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(200%); opacity: 0; }
  }
  @keyframes premium-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes premium-float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-8px) scale(1.01); }
  }
  @keyframes temp-mode-cold {
    0%, 43% { opacity: 1; transform: scale(1) translateX(0); }
    50%, 100% { opacity: 0; transform: scale(0.92) translateX(14px); }
  }
  @keyframes temp-mode-hot {
    0%, 43% { opacity: 0; transform: scale(0.92) translateX(-14px); }
    50%, 100% { opacity: 1; transform: scale(1) translateX(0); }
  }
  @keyframes temp-band-cold {
    0%, 43% { opacity: 1; filter: saturate(1); }
    50%, 100% { opacity: 0; filter: saturate(0.7); }
  }
  @keyframes temp-band-hot {
    0%, 43% { opacity: 0; filter: saturate(0.7); }
    50%, 100% { opacity: 1; filter: saturate(1); }
  }
  @keyframes temp-control-sweep {
    0% { transform: translateX(-130%); opacity: 0; }
    18% { opacity: 0.9; }
    100% { transform: translateX(420%); opacity: 0; }
  }
  @keyframes temp-seat-warm {
    0%, 43% { opacity: 1; transform: skewX(-18deg) scale(1); }
    50%, 100% { opacity: 0; transform: skewX(-18deg) scale(0.96); }
  }
  @keyframes temp-seat-cool {
    0%, 43% { opacity: 0; transform: skewX(-18deg) scale(0.96); }
    50%, 100% { opacity: 1; transform: skewX(-18deg) scale(1); }
  }
  @keyframes temp-heat-rise {
    0% { transform: translateY(8px) scaleY(0.9); opacity: 0; }
    22% { opacity: 0.75; }
    100% { transform: translateY(-22px) scaleY(1.15); opacity: 0; }
  }
  @keyframes temp-cool-fall {
    0% { transform: translateY(-10px) scaleY(0.85); opacity: 0; }
    22% { opacity: 0.8; }
    100% { transform: translateY(16px) scaleY(1.1); opacity: 0; }
  }
  @keyframes rain-fall-outside {
    0% { transform: translateY(-50px) translateX(10px); opacity: 0; }
    20% { opacity: 0.6; }
    80% { opacity: 0.6; }
    100% { transform: translateY(400px) translateX(-20px); opacity: 0; }
  }
  @keyframes wifi-wave {
    0% { transform: scale(0.2) translateY(0); opacity: 1; border-width: 4px; }
    100% { transform: scale(1.8) translateY(-40px); opacity: 0; border-width: 1px; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.45; }
  }
  @keyframes circuit-flow {
    0% { stroke-dashoffset: 28; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes breaker-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.16); transform: scale(1); }
    50% { box-shadow: 0 0 0 12px rgba(22,163,74,0); transform: scale(1.04); }
  }
  @keyframes optimization-glow {
    0%, 100% { opacity: 0.38; transform: scaleX(0.98); }
    50% { opacity: 0.68; transform: scaleX(1.02); }
  }
  @keyframes wireless-ring {
    0% { transform: scale(0.72); opacity: 0; }
    25% { opacity: 0.75; }
    100% { transform: scale(1.35); opacity: 0; }
  }
`;

export function InteractiveFeatureBench() {
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  const getImageFilter = () => {
    switch (activeFeatureId) {
      case "waterproof":
        return "brightness-[1.02] contrast-[1.05] saturate-[1.05]";
      case "condensation":
        return "contrast-[1.02] saturate-[0.9] hue-rotate-[2deg] brightness-[1.02]";
      case "temp":
        return "sepia-[0.03] saturate-[1.05] brightness-[1.02]";
      case "eco":
        return "sepia-[0.05] hue-rotate-[15deg] saturate-[1.05] brightness-[1.02]";
      case "safety":
        return "contrast-[1.03] brightness-[1.02]";
      case "optimization":
        return "contrast-[1.02] saturate-[1.04] brightness-[1.02]";
      default:
        return "";
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-12 p-4 lg:flex-row lg:p-12">
      <style>{premiumKeyframes}</style>

      <div className="flex w-full justify-center lg:w-2/3">
        <div className="relative isolate w-full max-w-4xl overflow-hidden bg-transparent px-4 py-6 transition-all duration-700 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden transition-opacity duration-700">
            {activeFeatureId === "condensation" && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[premium-fade-in_0.7s_forwards]">
                <div className="absolute inset-[5%] overflow-hidden rounded-[2.5rem] border border-blue-200/60 bg-blue-50/40 shadow-2xl backdrop-blur-[2px]">
                  <div
                    className="absolute inset-y-0 w-64 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent blur-md"
                    style={{ animation: "premium-scan-h 3s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 w-[200%] bg-gradient-to-r from-transparent via-transparent to-blue-200/30"
                    style={{ animation: "premium-scan-h 3s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
                  />
                </div>
              </div>
            )}

            {activeFeatureId === "temp" && (
              <div className="absolute inset-0 overflow-hidden opacity-0 animate-[premium-fade-in_0.7s_forwards]">
                <div
                  className="absolute -left-[8%] top-[12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.28),rgba(125,211,252,0.12)_45%,transparent_72%)] blur-3xl"
                  style={{ animation: "temp-mode-cold 8s ease-in-out infinite" }}
                />
                <div
                  className="absolute left-[8%] top-[44%] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),rgba(125,211,252,0.06)_48%,transparent_74%)] blur-2xl"
                  style={{ animation: "temp-mode-cold 8s ease-in-out infinite" }}
                />
                <div
                  className="absolute right-[-8%] top-[10%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.30),rgba(251,191,36,0.12)_45%,transparent_72%)] blur-3xl"
                  style={{ animation: "temp-mode-hot 8s ease-in-out infinite" }}
                />
                <div
                  className="absolute right-[0%] top-[42%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.16),rgba(251,191,36,0.05)_48%,transparent_72%)] blur-2xl"
                  style={{ animation: "temp-mode-hot 8s ease-in-out infinite" }}
                />

                <div className="absolute left-[17.5%] top-[39.5%] z-20 h-[13.5%] w-[64%]">
                  <div className="absolute inset-0 rounded-[12px] border border-white/40 bg-white/12 backdrop-blur-[1px]" />
                  <div
                    className="absolute inset-0 rounded-[12px] bg-[linear-gradient(90deg,rgba(251,191,36,0.06),rgba(251,146,60,0.46),rgba(250,204,21,0.22),rgba(251,191,36,0.06))] shadow-[0_0_36px_rgba(251,146,60,0.26)]"
                    style={{
                      clipPath: "polygon(2% 74%, 12% 55%, 88% 8%, 98% 20%, 88% 43%, 12% 91%)",
                      animation: "temp-seat-warm 8s ease-in-out infinite",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-[12px] bg-[linear-gradient(90deg,rgba(56,189,248,0.08),rgba(14,165,233,0.36),rgba(125,211,252,0.18),rgba(56,189,248,0.06))] shadow-[0_0_36px_rgba(14,165,233,0.24)]"
                    style={{
                      clipPath: "polygon(2% 74%, 12% 55%, 88% 8%, 98% 20%, 88% 43%, 12% 91%)",
                      animation: "temp-seat-cool 8s ease-in-out infinite",
                    }}
                  />
                  <div
                    className="absolute inset-y-[20%] left-[-20%] w-[20%] rounded-full bg-gradient-to-r from-white/0 via-white/85 to-white/0 blur-md"
                    style={{ animation: "temp-control-sweep 2.8s linear infinite" }}
                  />
                </div>

                <div className="absolute inset-x-[30%] top-[27%] z-20 flex items-end justify-between" style={{ animation: "temp-mode-cold 8s ease-in-out infinite" }}>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`warm-wave-${i}`}
                      className="h-12 w-[3px] rounded-full bg-gradient-to-b from-orange-300/0 via-orange-300/75 to-orange-300/0 blur-[0.5px]"
                      style={{
                        animation: `temp-heat-rise ${1.5 + i * 0.18}s ease-in-out infinite`,
                        animationDelay: `${i * 0.22}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="absolute inset-x-[28%] top-[31%] z-20 flex items-start justify-between" style={{ animation: "temp-mode-hot 8s ease-in-out infinite" }}>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`cool-wave-${i}`}
                      className="h-12 w-[4px] rounded-full bg-gradient-to-b from-sky-300/0 via-sky-300/85 to-sky-300/0 blur-[0.5px]"
                      style={{
                        animation: `temp-cool-fall ${1.45 + i * 0.16}s ease-in-out infinite`,
                        animationDelay: `${0.8 + i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeFeatureId === "waterproof" && (
              <div className="absolute inset-0 overflow-hidden opacity-0 animate-[premium-fade-in_0.7s_forwards]">
                <div className="absolute inset-0 top-[-5%] z-20 flex items-center justify-center">
                  <div className="relative mt-8 h-[60%] w-[85%]">
                    <div className="absolute inset-0 rounded-[100%] border-t-[4px] border-emerald-400 bg-gradient-to-b from-emerald-400/20 to-transparent blur-[1px] shadow-[0_-15px_40px_rgba(52,211,153,0.3)]" />
                    <div className="absolute inset-[2px] rounded-[100%] border-t-2 border-emerald-300 shadow-[0_-15px_40px_rgba(52,211,153,0.4)]" />
                  </div>
                </div>

                <div
                  className="absolute inset-0 z-10"
                  style={{
                    maskImage: "radial-gradient(ellipse 80% 55% at 50% 64%, transparent 50%, black 51%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 64%, transparent 50%, black 51%)",
                  }}
                >
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-10 w-[2px] bg-gradient-to-b from-transparent to-cyan-500/80"
                      style={{
                        left: `${(i * 13.5) % 100}%`,
                        top: "-20%",
                        animation: `rain-fall-outside ${0.6 + (i % 3) * 0.2}s linear infinite`,
                        animationDelay: `${(i % 7) * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeFeatureId === "wireless" && (
              <div className="absolute inset-0 overflow-hidden opacity-0 animate-[premium-fade-in_0.7s_forwards]">
                <div className="absolute right-[12%] top-[16%] z-20 rounded-[1.25rem] border border-[#0052cc]/16 bg-white/88 px-4 py-3.5 shadow-[0_18px_36px_rgba(0,82,204,0.12)] backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#0052cc]/10 text-[#0052cc]">
                      <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" style={{ animation: "pulse 1.7s infinite" }} />
                      <Wifi className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[0.62rem] font-bold tracking-[0.18em] text-[#0052cc]">REMOTE LINK</div>
                      <div className="mt-2 flex items-center gap-1.5">
                        <div className="h-1.5 w-8 rounded-full bg-[#dbeafe]">
                          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#60a5fa] to-[#0052cc]" />
                        </div>
                        <div className="h-2.5 w-2.5 rounded-full bg-[#0052cc]" />
                      </div>
                    </div>
                  </div>
                </div>

                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="wireless-link" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#93c5fd" />
                      <stop offset="55%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#0052cc" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 77 26 C 73 33, 69 39, 64 43 C 60 47, 56 50, 52 53"
                    fill="none"
                    stroke="rgba(59,130,246,0.18)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 77 26 C 73 35, 67 43, 62 48 C 58 52, 55 56, 53 61"
                    fill="none"
                    stroke="rgba(59,130,246,0.14)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 77 26 C 73 33, 69 39, 64 43 C 60 47, 56 50, 52 53"
                    fill="none"
                    stroke="url(#wireless-link)"
                    strokeWidth="2.3"
                    strokeDasharray="6 10"
                    strokeLinecap="round"
                    style={{ animation: "circuit-flow 1.2s linear infinite" }}
                  />
                  <path
                    d="M 77 26 C 73 35, 67 43, 62 48 C 58 52, 55 56, 53 61"
                    fill="none"
                    stroke="url(#wireless-link)"
                    strokeWidth="2.3"
                    strokeDasharray="6 10"
                    strokeLinecap="round"
                    style={{ animation: "circuit-flow 1.4s linear infinite" }}
                  />
                  <circle r="2.2" fill="#ffffff" opacity="0.95">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 77 26 C 73 33, 69 39, 64 43 C 60 47, 56 50, 52 53" />
                  </circle>
                  <circle r="1.9" fill="#93c5fd" opacity="0.9">
                    <animateMotion dur="2s" begin="-0.75s" repeatCount="indefinite" path="M 77 26 C 73 35, 67 43, 62 48 C 58 52, 55 56, 53 61" />
                  </circle>
                </svg>

                <div className="absolute right-[28%] top-[46%] z-20 rounded-[1rem] border border-[#93c5fd]/50 bg-white/84 px-3 py-2 shadow-[0_12px_26px_rgba(59,130,246,0.10)] backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <div className="relative h-2.5 w-2.5 rounded-full bg-[#0052cc]">
                      <span className="absolute inset-[-6px] rounded-full border border-[#93c5fd]/45" style={{ animation: "wireless-ring 2.4s ease-out infinite" }} />
                    </div>
                    <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-[#93c5fd] to-[#0052cc]" />
                  </div>
                </div>
              </div>
            )}

            {activeFeatureId === "safety" && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[premium-fade-in_0.7s_forwards]">
                <div className="absolute inset-[8%] overflow-hidden rounded-[2.5rem] border border-emerald-400/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(240,253,244,0.55))] shadow-[inset_0_0_60px_rgba(22,163,74,0.08)] backdrop-blur-[2px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.10),transparent_65%)]" />
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                    <defs>
                      <linearGradient id="circuit-safe" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <path d="M12 64 H28 V44 H45 V32 H58" fill="none" stroke="rgba(17,24,39,0.12)" strokeWidth="2" />
                    <path d="M42 32 H58 V52 H73 V66 H88" fill="none" stroke="rgba(17,24,39,0.12)" strokeWidth="2" />
                    <path
                      d="M12 64 H28 V44 H45 V32 H58"
                      fill="none"
                      stroke="url(#circuit-safe)"
                      strokeWidth="2.5"
                      strokeDasharray="5 9"
                      style={{ animation: "circuit-flow 1.4s linear infinite" }}
                    />
                    <path
                      d="M42 32 H58 V52 H73 V66 H88"
                      fill="none"
                      stroke="url(#circuit-safe)"
                      strokeWidth="2.5"
                      strokeDasharray="5 9"
                      style={{ animation: "circuit-flow 1.2s linear infinite" }}
                    />
                    <path d="M58 32 V70" fill="none" stroke="rgba(34,197,94,0.25)" strokeWidth="1.5" strokeDasharray="3 5" />
                  </svg>

                  <div className="absolute left-[23%] top-[54%] rounded-2xl border border-amber-300/70 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(245,158,11,0.12)]">
                    <div className="mb-1 text-[0.62rem] font-bold tracking-[0.18em] text-amber-600">INPUT</div>
                    <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-300" />
                  </div>

                  <div
                    className="absolute left-[46%] top-[24%] rounded-2xl border border-emerald-300/80 bg-white/94 px-4 py-3 shadow-[0_14px_32px_rgba(22,163,74,0.16)]"
                    style={{ animation: "breaker-pulse 2s ease-in-out infinite" }}
                  >
                    <div className="mb-1 text-[0.62rem] font-bold tracking-[0.18em] text-emerald-700">PROTECTOR</div>
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-3 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-700" />
                      <div className="h-7 w-3 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-700" />
                      <div className="h-7 w-3 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-700" />
                    </div>
                  </div>

                  <div className="absolute right-[12%] top-[58%] rounded-2xl border border-cyan-300/70 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(6,182,212,0.12)]">
                    <div className="mb-1 text-[0.62rem] font-bold tracking-[0.18em] text-cyan-700">STABLE OUT</div>
                    <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                  </div>

                  <div className="absolute right-8 top-8 rounded-full border border-emerald-400/45 bg-white/92 px-5 py-2.5 shadow-lg backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_14px_#22c55e]" style={{ animation: "pulse 1.5s infinite" }} />
                      <span className="text-[0.78rem] font-bold tracking-[0.18em] text-emerald-700">PROTECTION CIRCUIT</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeatureId === "eco" && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[premium-fade-in_0.7s_forwards]">
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.25)_0%,transparent_70%)]"
                  style={{ animation: "premium-float 4s ease-in-out infinite alternate" }}
                />
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-3 w-3 rounded-full bg-emerald-400/70 blur-[1px] shadow-[0_0_15px_#34d399]"
                      style={{
                        left: `${15 + i * 10}%`,
                        bottom: "-10%",
                        animation: `premium-scan-v ${4 + (i % 3) * 1.5}s ease-in-out infinite`,
                        animationDelay: `${(i % 2) * 1.5}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-[20%] left-[50%] -translate-x-1/2 rounded-full border border-emerald-200/80 bg-white/80 px-8 py-3.5 shadow-[0_10px_30px_rgba(52,211,153,0.3)] backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <Leaf className="h-6 w-6 text-emerald-600" />
                    <div className="h-2 w-32 overflow-hidden rounded-full bg-emerald-100">
                      <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_10px_#34d399]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeatureId === "optimization" && (
              <div className="absolute inset-0 overflow-hidden opacity-0 animate-[premium-fade-in_0.7s_forwards]">
                <div
                  className="absolute left-[17%] top-[33%] h-[12%] w-[66%] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),rgba(255,255,255,0)_72%)] blur-xl"
                  style={{ animation: "optimization-glow 2.4s ease-in-out infinite" }}
                />

                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="optimization-route-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#0052cc" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 16 78 L 16 56 L 18 47 L 42 40 L 77 31 L 88 33 L 88 58 L 88 78"
                    fill="none"
                    stroke="rgba(15,23,42,0.12)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 16 78 L 16 56 L 18 47 L 42 40 L 77 31 L 88 33 L 88 58 L 88 78"
                    fill="none"
                    stroke="url(#optimization-route-glow)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="7 10"
                    style={{ animation: "circuit-flow 1.1s linear infinite" }}
                  />

                  <circle cx="16" cy="78" r="2.7" fill="#0ea5e9" />
                  <circle cx="50" cy="37" r="3.4" fill="#22d3ee" />
                  <circle cx="88" cy="78" r="2.7" fill="#0052cc" />

                  <circle r="2.4" fill="#ffffff" opacity="0.95">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 16 78 L 16 56 L 18 47 L 42 40 L 77 31 L 88 33 L 88 58 L 88 78" />
                  </circle>
                  <circle r="1.9" fill="#67e8f9" opacity="0.9">
                    <animateMotion dur="2.2s" begin="-0.7s" repeatCount="indefinite" path="M 16 78 L 16 56 L 18 47 L 42 40 L 77 31 L 88 33 L 88 58 L 88 78" />
                  </circle>
                  <circle r="1.7" fill="#bfdbfe" opacity="0.85">
                    <animateMotion dur="2.2s" begin="-1.35s" repeatCount="indefinite" path="M 16 78 L 16 56 L 18 47 L 42 40 L 77 31 L 88 33 L 88 58 L 88 78" />
                  </circle>
                </svg>

                <div className="absolute left-[9%] top-[70%] rounded-full border border-sky-300/60 bg-white/88 px-4 py-2 shadow-[0_10px_24px_rgba(14,165,233,0.12)] backdrop-blur-md">
                  <div className="text-[0.66rem] font-bold tracking-[0.18em] text-sky-700">LEFT INPUT</div>
                </div>
                <div className="absolute left-[42%] top-[18%] rounded-full border border-cyan-300/60 bg-white/92 px-4 py-2 shadow-[0_10px_24px_rgba(34,211,238,0.14)] backdrop-blur-md">
                  <div className="text-[0.66rem] font-bold tracking-[0.18em] text-cyan-700">OPTIMIZED FLOW</div>
                </div>
                <div className="absolute right-[7%] top-[69%] rounded-full border border-blue-300/60 bg-white/88 px-4 py-2 shadow-[0_10px_24px_rgba(0,82,204,0.12)] backdrop-blur-md">
                  <div className="text-[0.66rem] font-bold tracking-[0.18em] text-blue-700">RIGHT OUTPUT</div>
                </div>
              </div>
            )}
          </div>

          <ImageWithFallback
            src={bench1Img}
            alt="WETECH Smart Bench Interactive Features"
            className={`relative z-20 h-auto w-full object-contain transition-all duration-700 ${
              activeFeatureId ? "scale-[1.015] drop-shadow-[0_24px_36px_rgba(0,0,0,0.15)]" : "scale-100"
            } ${getImageFilter()}`}
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
