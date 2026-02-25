export default function CasesPage() {
  return (
    <section className="section">
      <h1 className="section__title">도입사례</h1>

      <div className="grid">
        <article className="card reveal">
          <img src="/images/bench1.jpg" alt="사례 1" />
          <div className="card__body">
            <div className="card__title">캠핑장</div>
            <div className="card__meta">Outdoor</div>
          </div>
        </article>

        <article className="card reveal">
          <img src="/images/bench2.jpg" alt="사례 2" />
          <div className="card__body">
            <div className="card__title">훈련 현장</div>
            <div className="card__meta">Training</div>
          </div>
        </article>

        <article className="card reveal">
          <img src="/images/bench3.jpg" alt="사례 3" />
          <div className="card__body">
            <div className="card__title">스포츠 팀</div>
            <div className="card__meta">Recovery</div>
          </div>
        </article>
      </div>
    </section>
  );
}