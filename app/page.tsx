import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img className="hero__bg parallax" src="/images/hero.jpg" alt="Smart Thermal Bench" />
        <div className="hero__overlay"></div>

        <div className="hero__content">
          <div className="badge reveal">
            <span className="dot"></span>
            차세대 아웃도어 솔루션
          </div>
          <h1 className="hero__title reveal" style={{ transitionDelay: '0.1s' }}>
            지능형 공조의 새로운 기준,<br />
            <span className="text-gradient">WETECH 스마트벤치.</span>
          </h1>
          <p className="hero__desc reveal" style={{ transitionDelay: '0.2s' }}>
            야외 환경에서도 쾌적한 목표 온도를 자동으로 유지하는 첨단 열관리 시스템. 극한의 폭염과 혹한에서도 완벽한 휴식을 제공합니다.
          </p>

          <div className="hero__actions reveal" style={{ transitionDelay: '0.3s' }}>
            <Link className="btn btn--primary" href="/product">제품 자세히 보기</Link>
            <Link className="btn btn--ghost" href="/contact">도입 문의하기</Link>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <h2 className="section__title reveal">핵심 기술과 특징</h2>
        <p className="section__subtitle reveal">
          완벽한 온도 제어를 넘어 외부 환경에 대응하는 강력한 내구성과 스마트한 안전 설계가 적용되었습니다.
        </p>

        <div className="bento-grid">
          <div className="bento-card reveal">
            <div className="bento__icon">🌡️</div>
            <h3 className="bento__title">정밀한 자동 온도 유지</h3>
            <p className="bento__desc">
              내장 센서가 실시간으로 주변 온도를 감지하여 출력량을 자동으로 보정합니다. 최적의 착좌감을 위해 사일런트 쿨링과 퀵 히팅을 지원합니다.
            </p>
          </div>
          <div className="bento-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="bento__icon">🛡️</div>
            <h3 className="bento__title">아웃도어 특화 설계</h3>
            <p className="bento__desc">
              비, 눈, 자외선 등 거친 외부 환경(IP65 둥급 이상 설계 목표)에 견딜 수 있는 특수 코팅 마감과 견고한 알루미늄 프레임을 채택했습니다.
            </p>
          </div>
          <div className="bento-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bento__icon">⚡</div>
            <h3 className="bento__title">다중 안전 로직 제어</h3>
            <p className="bento__desc">
              과열, 과냉 방지 알고리즘 및 비정상 온도 상승 시 즉각적으로 전원을 차단하는 3중 안전 장치를 내장하여 화상 및 동상을 예방합니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}