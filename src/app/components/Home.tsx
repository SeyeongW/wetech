import { ArrowRight, Snowflake, Flame, ShieldCheck, Wifi, Droplets, Leaf } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBench from "../../assets/smart-bench/hero-bench.png";
import benchCity from "../../assets/smart-bench/bench-city.png";

const features = [
  {
    icon: <Snowflake className="h-6 w-6" />,
    title: "결로 방지 기술",
    description: "실시간 환경 감지 기반으로 결로를 줄여 쾌적한 착석 환경을 유지합니다.",
  },
  {
    icon: <Flame className="h-6 w-6" />,
    title: "자동 냉·온열 제어",
    description: "외기 조건과 설정값에 따라 냉열/온열 모드를 자동 전환합니다.",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "실외 방수 구조",
    description: "우천 환경을 고려한 설계로 공공시설 외부 설치에 적합합니다.",
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "무선 관리",
    description: "비접촉 제어 기반으로 운영 관리 효율과 유지보수 편의성을 높입니다.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "전기 안전",
    description: "보호 회로 및 인증 기반 설계로 전기적 리스크를 낮춥니다.",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "친환경·저소음",
    description: "열 효율 운용과 저소음 설계로 공공공간에 안정적으로 적용됩니다.",
  },
];

const applications = [
  "공원 및 정원 휴게 구간",
  "대중교통 대기 공간",
  "관광지 및 공공시설",
  "보행 동선 중심 휴식 포인트",
];

export function Home() {
  return (
    <div className="bg-[#f4f4f5] text-slate-900">
      <section className="smart-gradient relative overflow-hidden px-4 pb-20 pt-20 text-white sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="reveal-up font-display mb-4 text-sm tracking-[0.18em] text-slate-300">URBAN COMFORT TECHNOLOGY</p>
            <h1 className="reveal-up reveal-delay-1 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">WETECH</h1>
            <p className="reveal-up reveal-delay-2 mt-5 text-base text-slate-300 sm:text-lg">
              도시의 휴식 경험을 바꾸는 스마트 벤치 솔루션
            </p>
          </div>

          <div className="reveal-up reveal-delay-3 relative mx-auto mt-12 max-w-6xl">
            <div className="catalog-grid absolute inset-x-10 top-10 h-64 rounded-3xl opacity-30" />
            <div className="smart-panel relative overflow-hidden rounded-3xl border border-white/15 px-3 py-6 shadow-[0_40px_90px_rgba(0,0,0,0.45)] sm:px-8 sm:py-10">
              <ImageWithFallback
                src={heroBench}
                alt="Smart Bench 정면 이미지"
                className="float-soft mx-auto h-auto w-full max-w-5xl drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-black/30 blur-xl" />
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-5 lg:p-10">
          <div className="lg:col-span-2">
            <div className="group overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={benchCity}
                alt="도심 환경 Smart Bench"
                className="image-pan h-full min-h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="font-display mb-3 text-sm tracking-[0.14em] text-slate-500">INTRODUCTION</p>
            <h2 className="text-3xl leading-tight sm:text-4xl">
              WETECH Smart Bench
              <br />
              활용 분야 중심 공공 솔루션
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Smart Bench는 기상 변화와 이용 패턴을 고려해 체감 온도를 제어하는 공공시설용 벤치입니다. 공원, 대중교통 대기
              공간, 관광지, 보행 동선 휴게 포인트 등 다양한 활용 분야를 기준으로 설치 시나리오를 제안합니다.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              소개 페이지 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="font-display mb-2 text-sm tracking-[0.14em] text-slate-500">CORE FEATURES</p>
            <h2 className="text-3xl sm:text-4xl">핵심 기능</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="stagger-up rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-slate-900 p-2 text-slate-200">{feature.icon}</div>
                <h3 className="mb-2 text-xl">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#171717] p-8 text-white lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
          <div>
            <p className="font-display mb-2 text-sm tracking-[0.14em] text-slate-400">APPLICATION</p>
            <h2 className="text-3xl sm:text-4xl">활용 분야</h2>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              현장 조건과 운영 시간에 따라 제어 조건을 조정할 수 있어 다양한 공공 공간에 유연하게 적용할 수 있습니다.
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-slate-200 lg:mt-0">
            {applications.map((item) => (
              <li key={item} className="rounded-lg border border-white/15 bg-white/5 px-4 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
