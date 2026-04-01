import type { CSSProperties } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Cpu, Droplets, Snowflake, Wifi } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollStorytelling } from "./ScrollStorytelling";
import benchCity from "../../assets/smart-bench/bench-city.png";
import heroBench from "../../assets/smart-bench/bench4.png";
import usageFields from "../../assets/smart-bench/usage-fields.png";

const featureCards = [
  {
    title: "IoT 기반 무선 제어",
    description: "비접촉 설정 기반으로 운영 관리와 점검 편의성을 높입니다.",
    icon: <Wifi className="h-4 w-4" />,
  },
  {
    title: "방수 설계",
    description: "우천 시에도 안정적인 사용이 가능하도록 구조적 내구성을 강화했습니다.",
    icon: <Droplets className="h-4 w-4" />,
  },
  {
    title: "결로 대응",
    description: "환경값 감지 기반으로 결로 발생을 줄여 착석 품질을 유지합니다.",
    icon: <Snowflake className="h-4 w-4" />,
  },
  {
    title: "고효율 운용",
    description: "사용 패턴과 외기 조건을 반영해 에너지 운용 효율을 높일 수 있습니다.",
    icon: <Cpu className="h-4 w-4" />,
  },
];

export function Home() {
  const heroStyle = { "--hero-image": `url(${benchCity})` } as CSSProperties;

  return (
    <div className="spectral-page">
      {/* Apple-style Hero Section - Dark Mode */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center pt-32 pb-16">
        {/* Cinematic Typographic Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 text-center flex flex-col items-center px-4 w-full max-w-7xl mx-auto"
        >
          <p className="text-[#f5f5f7] font-semibold text-xl md:text-2xl mb-2 tracking-[0.25em] uppercase opacity-80">
            스마트 공공시설 솔루션
          </p>
          <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-800 drop-shadow-xl">
            WETECH
          </h1>
          <p className="text-[#86868b] text-lg md:text-2xl font-medium tracking-tight max-w-2xl mx-auto mb-16">
            도시 공간에 빛과 온기를 불어넣는 새로운 휴식의 척도.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 z-30 mb-12"
          >
            <Link to="/contact" className="bg-[#f5f5f7] text-black hover:bg-white px-8 py-3.5 rounded-full font-bold text-lg tracking-wide transition-all duration-300 shadow-lg shadow-white/20">
              도입 문의
            </Link>
            <Link to="/about" className="text-[#f5f5f7] hover:text-white hover:underline underline-offset-4 px-6 py-3 font-medium text-lg tracking-wide transition-colors">
              더 알아보기 {'>'}
            </Link>
          </motion.div>
        </motion.div>

        {/* Cinematic Hero Product Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-[120rem] mx-auto mt-auto flex justify-center px-4 sm:px-12 origin-bottom"
        >
          {/* Glowing Spotlight expanding from behind */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3.5, delay: 0.8, ease: "easeOut" }}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[900px] h-[75%] rounded-[100%] blur-[80px] pointer-events-none -z-10"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(180,210,255,0.25) 25%, rgba(0,0,0,0) 70%)" }}
          ></motion.div>

          <ImageWithFallback
            src={heroBench}
            alt="WETECH Smart Bench Cinematic Reveal"
            className="w-full h-auto object-contain max-h-[65vh] drop-shadow-2xl"
          />
          
          {/* Bottom Fade Gradient for blending seamlessly */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </motion.div>
      </section>

      {/* Scrollytelling Section */}
      <ScrollStorytelling />

      <section id="overview" className="spectral-section bg-[#f8f9fa] pt-24 pb-12">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature Showcase Bento */}
          <section className="bg-white border border-[#eaeaea] rounded-[2rem] overflow-hidden shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
              <div className="lg:col-span-7 flex flex-col justify-center p-8 lg:p-16">
                <h3 className="text-[2rem] font-extrabold tracking-tight text-[#1d242a] mb-6 relative self-start">
                  핵심 기능
                  <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-[#0052cc] rounded-full"></span>
                </h3>
                <p className="text-[#1d242a]/80 mb-12 leading-relaxed text-[1.1rem] break-keep max-w-2xl">
                  열전 기반 냉·온열 제어, 결로 대응, 방수 설계, 무선 제어 기능을 중심으로 공공시설 운영에 필요한 기능을 제품 단위로 제공합니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  {featureCards.map((feature, idx) => (
                    <div key={idx} className="flex gap-5 group cursor-default">
                      <div className="shrink-0 rounded-2xl bg-[#f4f6f8] border border-[#eaeaea] text-[#0052cc] w-14 h-14 flex items-center justify-center group-hover:bg-[#0052cc] group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <h4 className="font-bold text-[1.1rem] text-[#1d242a] mb-2">{feature.title}</h4>
                        <p className="text-[0.95rem] text-[#1d242a]/70 leading-relaxed break-keep">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center">
                  <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f8f9fa] text-[#0052cc] font-bold text-[0.95rem] hover:bg-[#0052cc] hover:text-white transition-colors duration-300 border border-[#eaeaea] hover:border-transparent">
                    제품 상세 기능 보기
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 bg-[#f4f6f8] flex flex-col items-center justify-center relative min-h-[350px] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
                <ImageWithFallback
                  src={heroBench}
                  alt="WETECH Smart Bench 3D Render"
                  className="relative z-10 w-full max-w-lg h-auto object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </section>

          {/* Usage Fields Summary Bento */}
          <section className="bg-white border border-[#eaeaea] rounded-[2rem] overflow-hidden shadow-sm lg:mx-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[400px]">
              <div className="lg:col-span-5 p-0 bg-[#f4f6f8] flex flex-col items-center justify-center relative min-h-[300px] overflow-hidden group">
                <ImageWithFallback
                  src={usageFields}
                  alt="WETECH Smart Bench 활용 분야"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center bg-white border-t lg:border-t-0 lg:border-l border-[#eaeaea]">
                <h3 className="text-[2rem] font-extrabold tracking-tight text-[#1d242a] mb-5 relative self-start">
                  다양한 공간 연출
                  <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-[#0052cc] rounded-full"></span>
                </h3>
                <p className="text-[#1d242a]/80 leading-relaxed text-[1.1rem] break-keep max-w-xl">
                  공원 및 정원, 대중교통 대기 구간, 관광지 및 공공시설, 장거리 보행 동선까지 현장 목적에 맞는 최적의 적용 시나리오를 제안합니다. 단순한 휴식 공간을 넘어, 스마트한 기술로 지속 가능한 도시 환경을 조성합니다.
                </p>

                <div className="mt-8 flex items-center">
                  <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f8f9fa] text-[#0052cc] font-bold text-[0.95rem] hover:bg-[#0052cc] hover:text-white transition-colors duration-300 border border-[#eaeaea] hover:border-transparent">
                    활용 시나리오 자세히 보기
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>



      <section className="spectral-section pt-0 overflow-hidden">
        <div className="spectral-wrapper style4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <header className="spectral-major">
              <h2 className="scroll-follow">Project Inquiry</h2>
              <p className="scroll-follow scroll-delay-1">설치 예정 공간 정보와 운영 조건을 알려주시면 목적에 맞는 제품 구성을 제안드립니다.</p>
            </header>
            <div className="flex flex-wrap gap-3 scroll-follow scroll-delay-2">
              <Link to="/products" className="spectral-btn">
                제품 상세
              </Link>
              <Link to="/contact" className="spectral-btn">
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
