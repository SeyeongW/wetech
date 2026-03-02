import type { CSSProperties } from "react";
import { Link } from "react-router";
import { Cpu, Droplets, Flame, ShieldCheck, Snowflake, Wifi } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import benchCity from "../../assets/smart-bench/bench-city.png";
import heroBench from "../../assets/smart-bench/hero-bench.png";
import usageFields from "../../assets/smart-bench/usage-fields.png";
import brochureFeatures from "../../assets/smart-bench/brochure-features.png";

const overviewCards = [
  {
    title: "공공공간 체감 온도 개선",
    description: "계절과 시간대 변화에 맞춘 제어로 공간 이용 경험의 편차를 줄입니다.",
    icon: <Snowflake className="h-4 w-4" />,
  },
  {
    title: "냉·온열 자동 대응",
    description: "외기 조건에 따라 운용 모드를 자동 전환해 운영 안정성을 확보합니다.",
    icon: <Flame className="h-4 w-4" />,
  },
  {
    title: "실외 설치 안전성",
    description: "방수·안전 기준을 고려한 설계로 실외 공공시설 환경에 대응합니다.",
    icon: <ShieldCheck className="h-4 w-4" />,
  },
];

const featureCards = [
  {
    title: "무선 제어",
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
      <section className="spectral-hero" style={heroStyle}>
        <div className="spectral-inner">
          <p className="spectral-kicker text-xs text-white/75">WETECH PUBLIC SPACE SOLUTION</p>
          <h1 className="spectral-title">WETECH</h1>
          <p className="spectral-subtitle mx-auto mt-4 max-w-3xl text-sm sm:text-base">
            도시 휴식 공간의 품질을 높이는 스마트 냉·온열 벤치 플랫폼
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/about" className="spectral-btn">
              소개 보기
            </Link>
            <Link to="/contact" className="spectral-btn">
              도입 문의
            </Link>
          </div>

          <div className="spectral-hero-product reveal-up">
            <ImageWithFallback src={heroBench} alt="WETECH Smart Bench 정면 이미지" className="float-soft" />
          </div>

          <a href="#overview" className="spectral-hero-scroll">
            Learn More
          </a>
        </div>
      </section>

      <section id="overview" className="spectral-section">
        <div className="spectral-wrapper style1">
          <header className="spectral-major text-center">
            <h2>WETECH 소개</h2>
            <p>
              WETECH Smart Bench는 공원, 보행 동선, 대중교통 대기 공간에서 이용자 체류 품질을 개선하기 위한
              공공공간 특화 제품입니다.
            </p>
          </header>
          <div className="spectral-card-list mt-7">
            {overviewCards.map((card) => (
              <article key={card.title} className="spectral-card">
                <h4 className="flex items-center gap-2">
                  {card.icon}
                  {card.title}
                </h4>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spectral-section pt-0">
        <div className="spectral-wrapper style2">
          <section className="spectral-spotlight">
            <div className="image">
              <ImageWithFallback
                src={brochureFeatures}
                alt="WETECH Smart Bench 기능 안내 이미지"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="content">
              <h3>핵심 기능</h3>
              <p>
                열전 기반 냉·온열 제어, 결로 대응, 방수 설계, 무선 제어 기능을 중심으로 공공시설 운영에 필요한 기능을
                제품 단위로 제공합니다.
              </p>
            </div>
          </section>

          <section className="spectral-spotlight">
            <div className="image">
              <ImageWithFallback
                src={usageFields}
                alt="WETECH Smart Bench 활용 분야"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="content">
              <h3>활용 분야</h3>
              <p>
                공원 및 정원, 대중교통 대기 구간, 관광지 및 공공시설, 장거리 보행 동선까지 현장 목적에 맞는 적용 시나리오를
                제안합니다.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="spectral-section pt-0">
        <div className="spectral-wrapper style3">
          <header className="spectral-major">
            <h2>Core Functions</h2>
            <p>도입 검토 시 우선 확인되는 주요 기능 항목입니다.</p>
          </header>
          <div className="spectral-feature-grid mt-6">
            {featureCards.map((feature) => (
              <article key={feature.title} className="spectral-feature-item">
                <h4 className="flex items-center gap-2">
                  {feature.icon}
                  {feature.title}
                </h4>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spectral-section pt-0">
        <div className="spectral-wrapper style4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <header className="spectral-major">
              <h2>Project Inquiry</h2>
              <p>설치 예정 공간 정보와 운영 조건을 알려주시면 목적에 맞는 제품 구성을 제안드립니다.</p>
            </header>
            <div className="flex flex-wrap gap-3">
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
    </div>
  );
}
