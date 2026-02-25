export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img className="hero__bg parallax" src="/images/hero.jpg" alt="" />
        <div className="hero__overlay"></div>

        <div className="hero__content">
          <p className="badge">Outdoor</p>
          <h1 className="hero__title">자동 온도조절 냉·온열벤치</h1>
          <p className="hero__desc">
            야외 환경에서도 목표 온도를 자동으로 유지하는 스마트 열관리 벤치.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="/product">제품 보기</a>
            <a className="btn btn--ghost" href="/contact">문의하기</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">핵심 특징</h2>
        <div className="statgrid">
          <div className="stat reveal">
            <div className="stat__num">01</div>
            <div className="stat__title">자동 온도 유지</div>
            <div className="stat__desc">환경 변화에 맞춰 출력 자동 보정</div>
          </div>
          <div className="stat reveal">
            <div className="stat__num">02</div>
            <div className="stat__title">아웃도어 설계</div>
            <div className="stat__desc">현장/캠핑/훈련 환경을 고려한 구조</div>
          </div>
          <div className="stat reveal">
            <div className="stat__num">03</div>
            <div className="stat__title">안전 로직</div>
            <div className="stat__desc">과열/과냉 방지 및 제한 제어</div>
          </div>
        </div>
      </section>
    </>
  );
}