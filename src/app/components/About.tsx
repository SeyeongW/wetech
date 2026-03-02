import type { CSSProperties } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import benchCity from "../../assets/smart-bench/bench-city.png";
import usageFields from "../../assets/smart-bench/usage-fields.png";
import cert1 from "../../assets/smart-bench/certs/cert1.png";
import cert2 from "../../assets/smart-bench/certs/cert2.png";
import cert3 from "../../assets/smart-bench/certs/cert3.png";
import cert4 from "../../assets/smart-bench/certs/cert4.png";
import cert5 from "../../assets/smart-bench/certs/cert5.png";

const useCases = [
  {
    title: "공원 및 정원",
    description: "야외 휴식 밀도가 높은 공간에서 계절별 체감 편차를 줄여 안정적인 이용 경험을 제공합니다.",
  },
  {
    title: "대중교통 대기 공간",
    description: "버스정류장, 환승 거점 등 대기 시간이 발생하는 구간에서 시민 만족도를 개선할 수 있습니다.",
  },
  {
    title: "관광지 및 공공시설",
    description: "관광객과 다중 이용 시설 방문객의 체류 편의성을 높여 공간 품질 향상에 기여합니다.",
  },
  {
    title: "국립공원/보행 동선",
    description: "장거리 보행 구간의 중간 휴게 포인트로 활용해 회복 동선과 보행 편의를 보완합니다.",
  },
];

const documents = [
  { title: "안전확인신고증명서 (WSBC-2300)", image: cert1 },
  { title: "안전확인신고증명서 (WSBC-2080)", image: cert2 },
  { title: "방송통신기자재 적합등록 필증", image: cert3 },
  { title: "특허증 제10-2517070호", image: cert4 },
  { title: "특허증 제10-2623348호", image: cert5 },
];

export function About() {
  const headerStyle = { "--page-image": `url(${benchCity})` } as CSSProperties;

  return (
    <div className="spectral-page">
      <section className="spectral-page-header" style={headerStyle}>
        <div className="spectral-inner">
          <p className="spectral-kicker text-xs text-white/75">About WETECH</p>
          <h1 className="spectral-title">소개</h1>
          <p className="spectral-subtitle mx-auto mt-4 max-w-3xl text-sm sm:text-base">
            활용 환경을 기준으로 도입 목적을 정의하고, 운영 안정성 검토에 필요한 인증 자료를 함께 제공합니다.
          </p>
        </div>
      </section>

      <section className="spectral-band">
        <article className="spectral-strip dark">
          <div className="media">
            <ImageWithFallback src={usageFields} alt="WETECH Smart Bench 활용 분야" className="h-full w-full object-cover" />
          </div>
          <div className="content">
            <h2>어떻게 활용되나요?</h2>
            <p>
              공간 목적, 체류 시간, 운영 시간대에 따라 도입 목적이 달라집니다. WETECH는 현장 여건을 기반으로 우선 적용
              분야를 설정할 수 있도록 활용 시나리오를 제공합니다.
            </p>
            <ul className="spectral-line-list">
              {useCases.map((item) => (
                <li key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="spectral-strip muted reverse">
          <div className="media spectral-cert-wall">
            {documents.map((doc) => (
              <figure key={doc.title}>
                <ImageWithFallback src={doc.image} alt={doc.title} className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>
          <div className="content">
            <h2>인증서 및 특허</h2>
            <p>
              공공시설 도입 검토 시 확인할 수 있도록 안전확인신고증명서, 기자재 등록 필증, 특허 문서를 준비했습니다.
              설치 계획 수립 단계에서 관련 자료를 기준으로 적용 가능 범위를 검토할 수 있습니다.
            </p>
            <ul className="spectral-line-list">
              {documents.map((doc) => (
                <li key={doc.title}>
                  <h4>{doc.title}</h4>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
