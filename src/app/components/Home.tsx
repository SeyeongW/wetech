import type { CSSProperties } from "react";
import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Cpu, Droplets, Snowflake, Flame, Wifi, Leaf, PowerOff, ZapOff, Smartphone, ShieldAlert, ShieldCheck, Timer, VolumeX } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollStorytelling } from "./ScrollStorytelling";
import benchCity from "../../assets/smart-bench/bench-city.png";
import heroBench from "../../assets/smart-bench/bench4.png";
import usageFields from "../../assets/smart-bench/usage-fields.png";

import featureTempImg from "../../assets/features/temp.png";
import featureWaterproofImg from "../../assets/features/waterproof.png";
import featureCondImg from "../../assets/features/condensation.png";
import featureEffImg from "../../assets/features/efficiency.png";
import cert1 from "../../assets/smart-bench/certs/cert1.png";
import cert2 from "../../assets/smart-bench/certs/cert2.png";
import cert3 from "../../assets/smart-bench/certs/cert3.png";
import cert4 from "../../assets/smart-bench/certs/cert4.png";
import cert5 from "../../assets/smart-bench/certs/cert5.png";

import { InteractiveFeatureBench } from "./InteractiveFeatureBench";
import { Contact } from "./Contact";

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

const featureGuide = [
  { icon: <Snowflake className="h-5 w-5" />, title: "결로 방지 기술", summary: "환경 실시간 감지로 결로 방지" },
  { icon: <Leaf className="h-5 w-5" />, title: "에너지 절감", summary: "모션센서 기반 전력 최적화" },
  { icon: <PowerOff className="h-5 w-5" />, title: "전원 차단 보호", summary: "침수 시 부품 및 회로 보호" },
  { icon: <ZapOff className="h-5 w-5" />, title: "과전압 차단", summary: "제어보드 보호 시스템" },
  { icon: <Smartphone className="h-5 w-5" />, title: "무선 제어", summary: "GPS 타이머 및 원격 관리" },
  { icon: <ShieldAlert className="h-5 w-5" />, title: "유해물질 차단", summary: "EMF 인증 안전 설계" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "전기 안전", summary: "KC 인증 획득" },
  { icon: <Droplets className="h-5 w-5" />, title: "IP 방수", summary: "실외 환경 완전 대응" },
  { icon: <Timer className="h-5 w-5" />, title: "자동 타이머", summary: "365일 지능형 가동" },
  { icon: <VolumeX className="h-5 w-5" />, title: "저소음 설계", summary: "쾌적한 정숙성 유지" },
];

const technicalSpecs = [
  { key: "Model", value: "WSBC-2300 / WSBC-2080" },
  { key: "Rated Voltage", value: "AC 220V, 60Hz" },
  { key: "Rated Power", value: "WSBC-2300: 530W, WSBC-2080: 490W" },
  { key: "Control", value: "자동 모드 + 개별 설정 모드" },
  { key: "Installation", value: "실외 공공공간 표준 규격" },
];

const useCases = [
  { title: "공원 및 정원", description: "야외 휴식 밀도가 높은 공간에서 계절별 체감 편차를 최소화합니다." },
  { title: "대중교통 대기소", description: "버스정류장 등 대기 시간이 발생하는 구간의 시민 만족도를 높입니다." },
  { title: "관광지 랜드마크", description: "방문객의 체류 편의성을 높여 공간의 품질과 가치를 향상시킵니다." },
  { title: "국립공원 산책로", description: "장거리 보행 구간의 중간 휴게 포인트로 최적의 회복 환경을 제공합니다." },
];

const certificates = [
  { title: "안전확인증명서", image: cert1 },
  { title: "안전확인증명서", image: cert2 },
  { title: "방송통신필증", image: cert3 },
  { title: "특허증(제10-2517070)", image: cert4 },
  { title: "특허증(제10-2623348)", image: cert5 },
];

export function Home() {
  const heroStyle = { "--hero-image": `url(${benchCity})` } as CSSProperties;
  
  // Scrollytelling Horizontal Section Ref & Hooks
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: horizontalRef });
  const scrollPct = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xOffset = useTransform(scrollPct, (val) => `calc(${val}% + ${-val}vw)`);

  return (
    <div className="spectral-page bg-black">
      {/* 1. HERO — Premium Ambient Design */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        
        {/* Refined Ambient Lighting: Replacing side glows with a subtle top-down spotlight */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 3 }}
            className="absolute left-1/2 top-[-20%] h-[1000px] w-[1400px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#0071e3]/20 via-transparent to-transparent blur-[200px]" 
          />
          <div className="absolute left-1/2 top-[-5%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white opacity-[0.02] blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-6 text-center max-w-6xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-8 text-sm sm:text-base font-bold uppercase tracking-[0.6em] text-[#0071e3]/80"
          >
            스마트 공공시설 솔루션
          </motion.p>

          <h1 className="text-[4.5rem] sm:text-[7.5rem] md:text-[11rem] lg:text-[14rem] font-black tracking-[-0.045em] leading-[0.9] mb-10 animate-silver-shine drop-shadow-[0_0_20px_rgba(255,255,255,0.03)] text-white">
            WETECH
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="mb-14 text-lg sm:text-2xl text-[#98989d] font-light tracking-wide max-w-lg mx-auto leading-relaxed"
          >
            스마트 휴식의 <span className="text-[#f5f5f7] font-medium">새로운 기준</span>을 제시합니다.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-[#0071e3] px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0077ed] hover:scale-105 active:scale-95">도입 문의</Link>
            <Link to="/products" className="rounded-full border border-white/15 px-10 py-4 text-sm font-medium text-[#f5f5f7] transition-all duration-300 hover:border-white/30 hover:bg-white/5 active:scale-95">제품 살펴보기 →</Link>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => document.getElementById('storytelling')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[#636366] transition-colors group-hover:text-[#f5f5f7]">Scroll</span>
          <div className="relative h-12 w-px bg-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-[#0071e3] animate-scroll-line h-full" />
          </div>
        </motion.button>
      </section>

      {/* 2. Scrollytelling Section */}
      <div id="storytelling">
        <ScrollStorytelling />
      </div>

      {/* 3. Core Features Bento Grid */}
      <section className="bg-[radial-gradient(circle_at_center,_#0a0a0a_0%,_#000_100%)] py-32 border-t border-white/5">
        <div className="max-w-[78rem] mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black text-white tracking-tighter uppercase mb-6">Core Technology</h2>
            <p className="text-[#98989d] text-lg font-medium max-w-2xl mx-auto break-keep">열전 제어, 결로 대응 등 공공시설 운영에 최적화된 첨단 기능을 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featureCards.map((feature, idx) => (
              <div key={idx} className="relative rounded-[2.5rem] p-10 overflow-hidden group border border-white/10 bg-[#111] transition-all duration-500 hover:border-[#0071e3]/40">
                <div className="w-14 h-14 rounded-2xl bg-white/5 text-[#0071e3] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h4 className="text-[#f5f5f7] text-[1.6rem] font-bold tracking-tight mb-4">{feature.title}</h4>
                <p className="text-[#86868b] text-[1.1rem] leading-relaxed font-medium break-keep">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Feature Bench */}
      <section className="bg-[radial-gradient(circle_at_center,_#080808_0%,_#000_100%)] py-24 border-y border-white/5 overflow-hidden">
        <div className="max-w-[78rem] mx-auto px-4 mb-16 text-center">
          <h2 className="text-[1.35rem] font-extrabold tracking-[0.1em] text-[#f5f5f7] mb-4 uppercase">WETECH 핵심 기술 탐색</h2>
          <p className="text-[#98989d] text-[1.1rem] max-w-2xl mx-auto">스마트 벤치에 적용된 혁신적인 기술들을 인터랙티브 모듈로 확인해 보세요.</p>
        </div>
        <div className="max-w-[120rem] mx-auto px-4">
          <InteractiveFeatureBench />
        </div>
      </section>

      {/* 5. Scenario Gallery — Horizontal Scroll */}
      <section ref={horizontalRef} className="relative bg-black h-[300vh] w-full border-t border-white/5">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <div className="px-6 sm:px-12 lg:px-24 xl:px-40 mb-10 shrink-0 z-20">
            <h2 className="text-[#f5f5f7] font-black text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] tracking-tighter uppercase leading-tight">
              무한한 가능성
            </h2>
            <p className="text-[#98989d] text-lg md:text-2xl mt-4 tracking-wide max-w-3xl break-keep font-medium">
              도시의 어느 공간이든 압도적인 스마트 휴식 공간으로 변화합니다.
            </p>
          </div>
          <div className="relative w-full flex items-center">
            <motion.div style={{ x: xOffset }} className="flex gap-6 sm:gap-8 px-6 sm:px-12 lg:px-24 xl:px-40 w-max pb-12 pt-4">
              <div className="relative w-[80vw] max-w-[700px] h-[45vh] sm:h-[55vh] rounded-[2.5rem] overflow-hidden shrink-0 group border border-white/10 bg-[#111]">
                <ImageWithFallback src={featureTempImg} alt="Winter Park" className="absolute inset-0 w-full h-[65%] object-cover scale-[1.3] transition-transform duration-[1.5s] group-hover:scale-[1.4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                  <span className="inline-block px-3 py-1 bg-[#0071e3]/10 rounded-full text-[#0071e3] text-[10px] font-black tracking-[0.2em] uppercase mb-4 border border-[#0071e3]/20">Scenario 01</span>
                  <h3 className="text-[#f5f5f7] text-[1.8rem] md:text-[2.2rem] font-extrabold tracking-tight mb-3">도심 공원 및 겨울철 쉼터</h3>
                  <p className="text-[#98989d] text-[1.05rem] max-w-lg break-keep font-semibold">폭설 속에서도 완벽한 단열 및 난방 기능으로 시민들에게 따뜻한 휴식을 제공합니다.</p>
                </div>
              </div>

              <div className="relative w-[80vw] max-w-[700px] h-[45vh] sm:h-[55vh] rounded-[2.5rem] overflow-hidden shrink-0 group border border-white/10 bg-[#111]">
                <ImageWithFallback src={featureWaterproofImg} alt="Long Transit" className="absolute inset-0 w-full h-[65%] object-cover scale-[1.1] transition-transform duration-[1.5s] group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                  <span className="inline-block px-3 py-1 bg-[#0071e3]/10 rounded-full text-[#0071e3] text-[10px] font-black tracking-[0.2em] uppercase mb-4 border border-[#0071e3]/20">Scenario 02</span>
                  <h3 className="text-[#f5f5f7] text-[1.8rem] md:text-[2.2rem] font-extrabold tracking-tight mb-3">스마트 도심 승강장</h3>
                  <p className="text-[#98989d] text-[1.05rem] max-w-lg break-keep font-semibold">폭우 속에서도 물을 튕겨내는 방수 설계로 안전하고 보송한 대기 환경을 지원합니다.</p>
                </div>
              </div>

              <div className="relative w-[80vw] max-w-[700px] h-[45vh] sm:h-[55vh] rounded-[2.5rem] overflow-hidden shrink-0 group border border-white/10 bg-[#111]">
                <ImageWithFallback src={featureCondImg} alt="Riverside" className="absolute inset-0 w-full h-[65%] object-cover scale-[1.1] transition-transform duration-[1.5s] group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                  <span className="inline-block px-3 py-1 bg-[#0071e3]/10 rounded-full text-[#0071e3] text-[10px] font-black tracking-[0.2em] uppercase mb-4 border border-[#0071e3]/20">Scenario 03</span>
                  <h3 className="text-[#f5f5f7] text-[1.8rem] md:text-[2.2rem] font-extrabold tracking-tight mb-3">수변 생태 공원 산책로</h3>
                  <p className="text-[#98989d] text-[1.05rem] max-w-lg break-keep font-semibold">습기가 잦은 수변에서도 능동형 결로 대응 시스템으로 365일 청결한 상태를 유지합니다.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Product Specifications & Technical Excellence */}
      <section className="bg-black py-32 border-t border-white/5">
        <div className="max-w-[78rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#111] p-12 border border-white/10 group">
              <ImageWithFallback src={heroBench} alt="Specs" className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div>
              <h2 className="text-[2.5rem] font-black text-white mb-8 tracking-tight">제품 사양<span className="text-[#0071e3]">.</span></h2>
              <div className="space-y-6">
                {technicalSpecs.map(spec => (
                  <div key={spec.key} className="flex flex-col pb-4 border-b border-white/10">
                    <span className="text-[10px] font-bold text-[#0071e3] uppercase tracking-widest mb-1">{spec.key}</span>
                    <span className="text-[1.1rem] text-[#f5f5f7] font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {featureGuide.map((item, i) => (
              <div key={i} className="bg-[#111] border border-white/10 p-6 rounded-[2rem] hover:border-[#0071e3]/40 transition-all group min-h-[180px] flex flex-col justify-between">
                <div className="text-[#98989d] group-hover:text-[#0071e3] transition-colors">{item.icon}</div>
                <div>
                  <h4 className="text-[#f5f5f7] font-bold mb-2 text-base">{item.title}</h4>
                  <p className="text-[#86868b] text-xs break-keep leading-tight">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Use Cases & Certifications */}
      <section className="bg-black py-32 border-t border-white/5">
        <div className="max-w-[78rem] mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-[2.5rem] font-black text-white mb-12 tracking-tight text-center">다채로운 공간, <span className="text-[#0071e3]">압도적 경험</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map(uc => (
                <div key={uc.title} className="p-10 rounded-[2.5rem] bg-[#111] border border-white/10 hover:border-[#0071e3]/40 transition-all h-full flex flex-col justify-between group">
                  <h4 className="text-xl font-bold text-[#f5f5f7] mb-4 group-hover:text-[#0071e3] transition-colors">{uc.title}</h4>
                  <p className="text-[#98989d] text-[0.95rem] font-semibold leading-relaxed break-keep">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111] p-12 rounded-[3rem] border border-white/10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-black text-white mb-6">검증된 안정성</h3>
                <p className="text-[#98989d] mb-10 leading-relaxed font-medium text-lg">KC 인증부터 특허 등록까지, 모든 기준을 충족했습니다.</p>
                <div className="flex flex-wrap gap-2">
                  {certificates.map(c => (
                    <span key={c.title} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-[#86868b] border border-white/10">{c.title}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {certificates.map((c, i) => (
                  <div key={i} className="aspect-[3/4] bg-white/10 rounded-xl p-3 border border-white/10 shadow-sm hover:-translate-y-2 transition-all">
                    <ImageWithFallback src={c.image} alt={c.title} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Section — One-page Closure (Light Mode) */}
      <section id="contact" className="bg-[#f5f5f7] py-32">
        <div className="max-w-[78rem] mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-[#eaeaea] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0071e3]/5 rounded-bl-[100%]"></div>
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
}
