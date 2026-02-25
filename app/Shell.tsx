import Link from "next/link";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main id="top">
      {/* Header (Apple Style) */}
      <header className="header" id="header">
        <Link className="logo" href="/">
          WETECH
        </Link>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link className="icon-btn" aria-label="문의" href="/contact">
            ✉️
          </Link>
          <button
            className="icon-btn"
            id="openMenu"
            aria-label="메뉴"
            aria-controls="sidebar"
            aria-expanded="false"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Sidebar Backdrop */}
      <div className="backdrop" id="backdrop" hidden></div>

      {/* Sidebar */}
      <aside className="sidebar" id="sidebar" aria-hidden="true">
        <div className="sidebar__top">
          <div className="sidebar__brand">
            <div className="logo logo--small">WETECH</div>
            <p className="sidebar__sub">스마트 라이프 플랫폼</p>
          </div>
          <button className="icon-btn" id="closeMenu" aria-label="메뉴 닫기">
            ✕
          </button>
        </div>

        <nav className="sidebar__nav">
          <Link href="/" className="sidebar__link">스마트벤치</Link>
          <Link href="/product" className="sidebar__link">제품 소개</Link>
          <Link href="/specs" className="sidebar__link">기술 사양</Link>
          <Link href="/cases" className="sidebar__link">도입 사례</Link>
          <Link href="/contact" className="sidebar__link">비즈니스 문의</Link>
        </nav>

        <div className="sidebar__footer">
          <Link className="btn btn--primary btn--wide" href="/contact">
            구입하기
          </Link>
          <p className="sidebar__fine">© 2026 WETECH Inc.</p>
        </div>
      </aside>

      {children}

      <footer className="footer">
        <div className="footer__inner">
          <div className="logo logo--small">WETECH</div>
          <p className="footer__text">© 2026 WETECH. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}