export default function SpecsPage() {
  return (
    <section className="section">
      <h1 className="section__title">스펙</h1>

      <div className="statgrid">
        <div className="stat reveal">
          <div className="stat__title">온도 제어 범위</div>
          <div className="stat__desc">예: -10°C ~ 45°C (모델별 상이)</div>
        </div>
        <div className="stat reveal">
          <div className="stat__title">제어 방식</div>
          <div className="stat__desc">센서 피드백 기반 자동 온도 유지</div>
        </div>
        <div className="stat reveal">
          <div className="stat__title">아웃도어 등급</div>
          <div className="stat__desc">예: 방진/방수 설계(요구사항 기반)</div>
        </div>
      </div>
    </section>
  );
}