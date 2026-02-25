import Link from "next/link";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main id="top">
      {/* Top Bar */}
      <div className="topbar" id="topbar">
        <div className="topbar__left">WETECH</div>
        <div className="topbar__right">Outdoor Thermal Bench</div>
        <button className="topbar__close" aria-label="닫기" id="topbarClose">
          ✕
        </button>
      </div>

      {/* Header */}
      <header className="header" id="header">
        <button
          className="icon-btn"
          id="openMenu"
          aria-label="메뉴"
          aria-controls="sidebar"
          aria-expanded="false"
        >
          ☰
        </button>

        <Link className="logo" href="/">
          WETECH
        </Link>

        <Link className="icon-btn" aria-label="문의" href="/contact">
          ✉️
        </Link>
      </header>

      {/* Sidebar Backdrop */}
      <div className="backdrop" id="backdrop" hidden></div>

      {/* Sidebar */}
      <aside className="sidebar" id="sidebar" aria-hidden="true">
        <div className="sidebar__top">
          <div className="sidebar__brand">
            <div className="logo logo--small">WETECH</div>
            <p className="sidebar__sub">아웃도어 자동 온도조절 냉·온열벤치</p>
          </div>
          <button className="icon-btn" id="closeMenu" aria-label="메뉴 닫기">
            ✕
          </button>
        </div>

        <nav className="sidebar__nav">
          <Link href="/" className="sidebar__link">홈</Link>
          <Link href="/product" className="sidebar__link">제품</Link>
          <Link href="/specs" className="sidebar__link">스펙</Link>
          <Link href="/cases" className="sidebar__link">도입사례</Link>
          <Link href="/contact" className="sidebar__link">문의</Link>
        </nav>

        <div className="sidebar__footer">
          <Link className="btn btn--primary btn--wide" href="/contact">
            구매 상담하기
          </Link>
          <p className="sidebar__fine">© 2026 WETECH</p>
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