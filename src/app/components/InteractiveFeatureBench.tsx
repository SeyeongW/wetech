import { useState } from "react";
import { Cpu, Droplets, Flame, Leaf, ShieldCheck, Snowflake, Wifi, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bench1Img from "../../assets/smart-bench/bench1.png";

const features = [
    {
        id: "condensation",
        icon: <Snowflake className="h-5 w-5" />,
        title: "결로 방지 기술",
        summary: "표면 온도와 외기 조건을 기반으로 결로 발생 구간을 최소화하도록 제어합니다.",
        top: "35%",
        left: "25%",
    },
    {
        id: "temp",
        icon: <Flame className="h-5 w-5" />,
        title: "자동 온도 제어",
        summary: "냉열/온열 운전 모드를 계절과 환경 조건에 맞춰 자동 전환합니다.",
        top: "35%",
        left: "75%",
    },
    {
        id: "waterproof",
        icon: <Droplets className="h-5 w-5" />,
        title: "방수 설계",
        summary: "실외 설치 기준을 고려한 구조 및 마감으로 우천 환경에서 안정성을 확보합니다.",
        top: "15%",
        left: "50%",
    },
    {
        id: "wireless",
        icon: <Wifi className="h-5 w-5" />,
        title: "무선 제어",
        summary: "비접촉 설정 기반으로 운전 파라미터 조정과 운영 상태 점검이 가능합니다.",
        top: "50%",
        left: "12%",
    },
    {
        id: "safety",
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "전기 안전 기능",
        summary: "보호 회로 및 안전 기준에 맞춘 설계로 공공시설 운용 리스크를 줄였습니다.",
        top: "50%",
        left: "88%",
    },
    {
        id: "eco",
        icon: <Leaf className="h-5 w-5" />,
        title: "친환경·저소음",
        summary: "열 효율 중심 설계와 저소음 운용으로 주변 공간 간섭을 줄입니다.",
        top: "75%",
        left: "30%",
    },
    {
        id: "optimization",
        icon: <Cpu className="h-5 w-5" />,
        title: "운영 최적화",
        summary: "운영 시간대/계절 조건에 따른 정책 설정으로 일관된 서비스 품질을 유지합니다.",
        top: "75%",
        left: "70%",
    },
];

export function InteractiveFeatureBench() {
    const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

    return (
        <div className="relative w-full p-4 lg:p-12 flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left: Bench Image */}
            <div className="w-full lg:w-2/3 flex justify-center">
                <ImageWithFallback
                    src={bench1Img}
                    alt="WETECH Smart Bench Interactive Features"
                    className="w-full h-auto max-w-4xl object-contain mix-blend-multiply"
                />
            </div>

            {/* Right: Vertical Features List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4 relative">
                {features.map((feature) => {
                    const isActive = activeFeatureId === feature.id;
                    const isDimmed = activeFeatureId !== null && !isActive;

                    return (
                        <div
                            key={feature.id}
                            className="relative flex items-center group cursor-pointer"
                            onMouseEnter={() => setActiveFeatureId(feature.id)}
                            onMouseLeave={() => setActiveFeatureId(null)}
                        >
                            {/* Icon Button */}
                            <div
                                className={`
                                    shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-[#eaeaea]
                                    transition-all duration-300 ease-out z-20 
                                    ${isActive
                                        ? "bg-[#0052cc] text-white border-[#0052cc] scale-110 shadow-lg ring-4 ring-[#0052cc]/20"
                                        : "bg-white text-[#1d242a] group-hover:bg-[#f4f6f8] group-hover:text-[#0052cc]"
                                    }
                                    ${isDimmed ? "opacity-40 scale-95" : "opacity-100"}
                                `}
                            >
                                {feature.icon}
                            </div>

                            {/* Title (Always visible next to icon) */}
                            <div className={`ml-4 font-bold text-[1rem] transition-all duration-300 ${isActive ? "text-[#0052cc]" : "text-[#1d242a]"} ${isDimmed ? "opacity-40" : "opacity-100"}`}>
                                {feature.title}
                            </div>

                            {/* Hover Tooltip Popup - appears to the left or right depending on space, here we'll pop it out to the left or just below */}
                            <div
                                className={`
                                    absolute left-0 top-full mt-2 lg:left-auto lg:right-full lg:top-1/2 lg:-translate-y-1/2 lg:mt-0 lg:mr-6 
                                    w-[280px] bg-white/90 backdrop-blur-xl border border-[#eaeaea]/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                                    rounded-2xl p-5 z-30 pointer-events-none transition-all duration-300 origin-top lg:origin-right
                                    ${isActive ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4 lg:translate-x-4 invisible"}
                                `}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[#0052cc] bg-[#0052cc]/10 p-1.5 rounded-lg shrink-0">{feature.icon}</span>
                                    <h4 className="font-bold text-[#1d242a] text-[0.95rem]">{feature.title}</h4>
                                </div>
                                <p className="text-[0.9rem] text-[#1d242a]/80 leading-relaxed break-keep">
                                    {feature.summary}
                                </p>
                                {/* Pointer Arrow */}
                                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-white/90 backdrop-blur-xl border-t border-r border-[#eaeaea]/80 transform rotate-45"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
