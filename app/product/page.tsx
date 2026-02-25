export default function ProductPage() {
  return (
    <section className="section">
      <h1 className="section__title">제품</h1>

      <div className="feature__card reveal">
        <div className="feature__text">
          <h3 className="feature__title">WETECH Outdoor Smart Thermal Bench</h3>
          <p className="feature__desc">
            자동 온도 제어(피드백 제어)를 기반으로 냉/온열을 안정적으로 유지합니다.
            야외 환경에서의 사용을 전제로 설계되었습니다.
          </p>
          <div className="chips">
            <span className="chip">자동 온도조절</span>
            <span className="chip">냉/온열</span>
            <span className="chip">아웃도어</span>
          </div>
        </div>

        <div className="feature__media">
          <img src="/images/product.png" alt="제품 이미지" />
        </div>
      </div>
    </section>
  );
}