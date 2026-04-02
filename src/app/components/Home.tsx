import type { CSSProperties } from "react";
import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Cpu, Droplets, Snowflake, Flame, Wifi } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollStorytelling } from "./ScrollStorytelling";
import benchCity from "../../assets/smart-bench/bench-city.png";
import heroBench from "../../assets/smart-bench/bench4.png";
import usageFields from "../../assets/smart-bench/usage-fields.png";

import featureTempImg from "../../assets/features/temp.png";
import featureWaterproofImg from "../../assets/features/waterproof.png";
import featureCondImg from "../../assets/features/condensation.png";
import featureEffImg from "../../assets/features/efficiency.png";

const featureCards = [
  {
    title: "열전 기반 온도 제어",
    description: "주변 기온을 분석해 자동으로 냉·온열 모드를 전환하며 사용자에게 최적의 쾌적함을 일정하게 제공합니다.",
    icon: <Flame className="h-6 w-6" />,
  },
  {
    title: "구조적 내구성과 방수형 설계",
    description: "우천, 폭설 등 거친 실외 환경에서도 항상 안정적인 운영이 가능하도록 강력한 방수·방진 설계를 적용했습니다.",
    icon: <Droplets className="h-6 w-6" />,
  },
  {
    title: "스마트 결로 대응 시스템",
    description: "정밀한 대기 환경값 감지를 통해 결로 현상 발생을 사전에 차단하여 착석부의 품질을 항상 유지합니다.",
    icon: <Snowflake className="h-6 w-6" />,
  },
  {
    title: "고효율 운용",
    description: "사용 패턴과 외기 조건을 실시간으로 반영하여 불필요한 전력 소모를 차단하고 에너지 운용 효율을 극대화합니다.",
    icon: <Cpu className="h-6 w-6" />,
  },
];

export function Home() {
  const heroStyle = { "--hero-image": `url(${benchCity})` } as CSSProperties;
  
  // Scrollytelling Horizontal Section Ref & Hooks
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: horizontalRef });
  const scrollPct = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xOffset = useTransform(scrollPct, (val) => `calc(${val}% + ${-val}vw)`);

  return (
    <div className="spectral-page">
      {/* Apple-style Hero Section - Dark Mode */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center pt-40 pb-20 z-10">
        {/* Cinematic Typographic Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 text-center flex flex-col items-center px-4 w-full max-w-7xl mx-auto"
        >
          <p className="text-[#f5f5f7] font-semibold text-xl md:text-2xl mb-2 tracking-[0.25em] uppercase opacity-80">
            스마트 공공시설 <span className="text-[#0052cc] font-black">솔루션</span>
          </p>
          <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-800 drop-shadow-xl">
            WETECH
          </h1>
          <p className="text-[#86868b] text-lg md:text-2xl font-medium tracking-tight max-w-2xl mx-auto mb-16">
            스마트 휴식의 새로운 기준을 제시합니다.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 z-30 mb-12"
          >
            <Link to="/contact" className="bg-[#0052cc] text-white hover:bg-[#0042a3] px-8 py-3.5 rounded-full font-bold text-lg tracking-wide transition-all duration-300 shadow-[0_10px_30px_rgba(0,82,204,0.3)] hover:-translate-y-1">
              도입 문의
            </Link>
            <Link to="/about" className="text-[#f5f5f7] hover:text-white hover:underline underline-offset-4 px-6 py-3 font-medium text-lg tracking-wide transition-colors">
              더 알아보기 {'>'}
            </Link>
          </motion.div>
        </motion.div>

      </section>

      {/* Scrollytelling Section */}
      <ScrollStorytelling />

      <section id="overview" className="relative w-full bg-white pt-20 pb-20 border-t border-[#eaeaea]">
        <div className="w-full flex flex-col justify-center overflow-hidden">
          
          <div className="px-6 sm:px-12 lg:px-24 xl:px-40 mb-10 shrink-0 z-20">
            <h2 className="text-[#1d242a] font-black text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] tracking-tighter uppercase leading-tight opacity-95 drop-shadow-sm">
              핵심 기능
            </h2>
            <p className="text-[#1d242a]/70 text-base sm:text-lg md:text-xl mt-3 tracking-wide max-w-3xl break-keep font-semibold">
              열전 기반 냉·온열 제어, 결로 대응, 방수 설계 등 공공시설 운영과 이용자 편의에 최적화된 첨단 기능을 제공합니다.
            </p>
          </div>

          <div className="px-6 sm:px-12 lg:px-24 xl:px-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {featureCards.map((feature, idx) => (
                <div key={idx} className="relative rounded-[2rem] p-8 sm:p-10 overflow-hidden group transform-gpu shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#eaeaea] bg-white transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,82,204,0.08)] hover:-translate-y-1 hover:border-[#0052cc]/30">
                    <div className="w-12 h-12 rounded-xl bg-[#f8f9fa] text-[#0052cc] flex items-center justify-center mb-8 border border-[#eaeaea] transition-all duration-300 group-hover:bg-[#0052cc] group-hover:text-white shadow-sm">
                      {feature.icon}
                    </div>
                    <h4 className="text-[#1d242a] text-[1.5rem] sm:text-[1.75rem] font-extrabold tracking-tight mb-3 leading-tight">{feature.title}</h4>
                    <p className="text-[#1d242a]/70 text-[0.95rem] sm:text-[1.05rem] leading-relaxed font-semibold break-keep max-w-lg">
                      {feature.description}
                    </p>
                </div>
              ))}
            </div>

            <div className="flex justify-start">
              <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0052cc] text-white font-extrabold text-[1rem] hover:bg-[#0042a3] shadow-[0_10px_30px_rgba(0,82,204,0.3)] transition-all duration-300 hover:-translate-y-1">
                제품 상세 기능 보기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Cinematic Horizontal Scroll Gallery (Ioniq 9 Style - Light Theme) */}
      <section ref={horizontalRef} className="relative bg-white h-[300vh] w-full border-t border-[#eaeaea]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          <div className="px-6 sm:px-12 lg:px-24 xl:px-40 mb-10 shrink-0 z-20">
            <h2 className="text-[#1d242a] font-black text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] tracking-tighter uppercase leading-tight opacity-95 drop-shadow-sm">
              무한한 가능성
            </h2>
            <p className="text-[#1d242a]/70 text-base sm:text-lg md:text-xl mt-3 tracking-wide max-w-3xl break-keep font-semibold">
              공원, 대중교통 대기소, 관광지 랜드마크까지. 도시의 맥락에 맞추어 어느 공간이든 압도적인 스마트 휴식 공간으로 변화합니다.
            </p>
          </div>

          <div className="relative w-full flex items-center">
            <motion.div style={{ x: xOffset }} className="flex gap-6 sm:gap-8 px-6 sm:px-12 lg:px-24 xl:px-40 w-max pb-12 pt-4">
              
              {/* Horizontal Panels */}
              <div className="relative w-[80vw] max-w-[700px] h-[40vh] sm:h-[50vh] rounded-[2rem] overflow-hidden shrink-0 group transform-gpu shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#eaeaea] bg-white">
                <ImageWithFallback src={featureTempImg} alt="Winter Park" className="absolute inset-0 w-full h-[65%] object-cover scale-[1.3] transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-[1.4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full">
                  <span className="inline-block px-3 py-1 bg-[#0052cc]/10 backdrop-blur-md rounded-full text-[#0052cc] text-xs font-black tracking-[0.2em] uppercase mb-3 border border-[#0052cc]/20">
                    Scenario 01
                  </span>
                  <h3 className="text-[#1d242a] text-[1.75rem] sm:text-[2rem] font-extrabold tracking-tight mb-2">도심 공원 및 겨울철 쉼터</h3>
                  <p className="text-[#1d242a]/70 text-[0.95rem] sm:text-[1.05rem] max-w-lg break-keep leading-relaxed font-semibold">추운 겨울이나 폭설 속에서도 완벽한 단열 및 난방 기능으로 시민들에게 따뜻하고 쾌적한 휴식 공간을 제공합니다.</p>
                </div>
              </div>

              <div className="relative w-[80vw] max-w-[700px] h-[40vh] sm:h-[50vh] rounded-[2rem] overflow-hidden shrink-0 group transform-gpu shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#eaeaea] bg-white">
                <ImageWithFallback src={featureWaterproofImg} alt="Rainy City Transit" className="absolute inset-0 w-full h-[65%] object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full">
                  <span className="inline-block px-3 py-1 bg-[#0052cc]/10 backdrop-blur-md rounded-full text-[#0052cc] text-xs font-black tracking-[0.2em] uppercase mb-3 border border-[#0052cc]/20">
                    Scenario 02
                  </span>
                  <h3 className="text-[#1d242a] text-[1.75rem] sm:text-[2rem] font-extrabold tracking-tight mb-2">스마트 도심 승강장</h3>
                  <p className="text-[#1d242a]/70 text-[0.95rem] sm:text-[1.05rem] max-w-lg break-keep leading-relaxed font-semibold">거친 폭우와 비바람 속에서도 물을 튕겨내는 방수형 설계로 대중교통 이용객들에게 안전하고 쾌적한 대기 환경을 지원합니다.</p>
                </div>
              </div>

              <div className="relative w-[80vw] max-w-[700px] h-[40vh] sm:h-[50vh] rounded-[2rem] overflow-hidden shrink-0 group transform-gpu shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#eaeaea] bg-white">
                <ImageWithFallback src={featureCondImg} alt="Foggy Riverside" className="absolute inset-0 w-full h-[65%] object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full">
                  <span className="inline-block px-3 py-1 bg-[#0052cc]/10 backdrop-blur-md rounded-full text-[#0052cc] text-xs font-black tracking-[0.2em] uppercase mb-3 border border-[#0052cc]/20">
                    Scenario 03
                  </span>
                  <h3 className="text-[#1d242a] text-[1.75rem] sm:text-[2rem] font-extrabold tracking-tight mb-2">수변 생태 공원 및 산책로</h3>
                  <p className="text-[#1d242a]/70 text-[0.95rem] sm:text-[1.05rem] max-w-lg break-keep leading-relaxed font-semibold">안개와 습기가 잦은 수변 지역에서도 능동적인 결로 대응 시스템을 통해 365일 보송하고 청결한 표면을 유지합니다.</p>
                </div>
              </div>

              <div className="relative w-[80vw] max-w-[700px] h-[40vh] sm:h-[50vh] rounded-[2rem] overflow-hidden shrink-0 group transform-gpu shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#eaeaea] bg-white">
                <ImageWithFallback src={featureEffImg} alt="Smart City Sunset" className="absolute inset-0 w-full h-[65%] object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full">
                  <span className="inline-block px-3 py-1 bg-[#0052cc]/10 backdrop-blur-md rounded-full text-[#0052cc] text-xs font-black tracking-[0.2em] uppercase mb-3 border border-[#0052cc]/20">
                    Scenario 04
                  </span>
                  <h3 className="text-[#1d242a] text-[1.75rem] sm:text-[2rem] font-extrabold tracking-tight mb-2">스마트 다목적 광장</h3>
                  <p className="text-[#1d242a]/70 text-[0.95rem] sm:text-[1.05rem] max-w-lg break-keep leading-relaxed font-semibold">유동인구가 많은 도심 인프라 환경에서 고효율 전력 운용을 통해 미래지향적인 스마트 시티의 풍경을 완성합니다.</p>
                </div>
              </div>

            </motion.div>
          </div>
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
