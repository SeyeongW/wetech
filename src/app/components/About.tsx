import { ImageWithFallback } from "./figma/ImageWithFallback";
import usageFields from "../../assets/smart-bench/usage-fields.png";
import cert1 from "../../assets/smart-bench/certs/cert1.png";
import cert2 from "../../assets/smart-bench/certs/cert2.png";
import cert3 from "../../assets/smart-bench/certs/cert3.png";
import cert5 from "../../assets/smart-bench/certs/cert4.png";
import cert6 from "../../assets/smart-bench/certs/cert5.png";

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
    description: "관광객 및 다중 이용 시설 방문객의 체류 편의성을 높여 공간 품질 향상에 기여합니다.",
  },
  {
    title: "국립공원/보행 동선",
    description: "장거리 보행 구간의 중간 휴게 포인트로 활용해 회복 동선과 보행 편의를 보완합니다.",
  },
];

const docs = [
  { title: "안전확인신고증명서 (WSBC-2300)", image: cert1 },
  { title: "안전확인신고증명서 (WSBC-2080)", image: cert2 },
  { title: "방송통신기자재등의 적합등록 필증", image: cert3 },
  { title: "특허증 제10-2517070호", image: cert5 },
  { title: "특허증 제10-2623348호", image: cert6 },
];

export function About() {
  return (
    <div className="bg-[#f4f4f5] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="font-display mb-3 text-sm tracking-[0.14em] text-slate-500">ABOUT WETECH</p>
          <h1 className="text-4xl sm:text-5xl">소개</h1>
          <p className="mt-5 max-w-4xl leading-relaxed text-slate-600">
            Smart Bench는 설치 환경에 따라 활용 시나리오를 다르게 적용할 수 있는 공공공간용 솔루션입니다. 아래 이미지는
            대표 활용 분야와 실제 적용 맥락을 기준으로 구성되어 있습니다.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:items-start lg:p-10">
          <div className="group self-start overflow-hidden rounded-2xl border border-slate-200">
            <ImageWithFallback
              src={usageFields}
              alt="Smart Bench 활용 분야 이미지"
              className="h-auto w-full transition duration-700 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <h2 className="text-3xl">어떻게 활용될 수 있나요?</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              공간 목적, 이용자 체류 시간, 운영 시간대에 따라 도입 목적을 다르게 설정할 수 있습니다. WETECH는 현장 여건에
              맞춰 우선 적용 분야를 제안합니다.
            </p>
            <div className="mt-6 space-y-3">
              {useCases.map((item) => (
                <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <h2 className="text-3xl">인증서 및 특허 첨부</h2>
          <p className="mt-4 text-sm text-slate-600">
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {docs.map((doc) => (
              <figure key={doc.title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <ImageWithFallback src={doc.image} alt={doc.title} className="h-44 w-full rounded-md bg-white object-contain p-1" />
                <figcaption className="mt-2 text-xs text-slate-700">{doc.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
