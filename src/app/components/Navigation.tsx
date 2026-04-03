import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const anchorItems = [
  { id: "features", label: "핵심 기능" },
  { id: "specs", label: "제품 사양" },
  { id: "usecases", label: "활용 분야" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleAnchor = (id: string) => (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
    // else: href="/#id" navigates to home + scrolls
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-black text-sm tracking-[0.3em] text-white transition-opacity hover:opacity-70"
        >
          WETECH
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {anchorItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={handleAnchor(item.id)}
              className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/50 transition-all duration-200 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="mx-3 h-4 w-px bg-white/10" />
          <Link
            to="/products"
            className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/50 transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            상세 보기
          </Link>
          <a
            href="/#contact"
            onClick={handleAnchor("contact")}
            className="ml-2 rounded-full bg-[#0071e3] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#0077ed] active:bg-[#006edb] shadow-lg shadow-[#0071e3]/20"
          >
            문의하기
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-lg p-1.5 text-white/60 transition hover:bg-white/8 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label="menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="border-t border-white/[0.08] bg-black/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {anchorItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={handleAnchor(item.id)}
                className="rounded-xl px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              상세 보기
            </Link>
            <a
              href="/#contact"
              onClick={handleAnchor("contact")}
              className="mt-2 rounded-xl bg-[#0071e3] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              문의하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
