export default function ContactPage() {
  return (
    <section className="section">
      <h1 className="section__title">문의</h1>

      <div className="cta__inner reveal">
        <h2 className="cta__title">도입 상담</h2>
        <p className="cta__desc">
          제품 상담/견적/납품 문의를 남겨주세요. (현재는 UI만 구성)
        </p>

        <div className="cta__actions">
          <button className="btn btn--primary btn--wide">문의 남기기</button>
          <button className="btn btn--soft btn--wide">카탈로그 받기</button>
        </div>
      </div>
    </section>
  );
}