import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "홈" },
  { to: "/about", label: "소개" },
  { to: "/products", label: "제품" },
  { to: "/contact", label: "문의" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            scrollToTop();
          }}
        >
          <span className="font-display text-xl tracking-wide text-slate-900">WETECH</span>
          <span className="hidden text-xs tracking-[0.2em] text-slate-500 sm:inline">SMART BENCH</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={scrollToTop}
              className={`text-sm font-medium transition ${
                isActive(item.to) ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="메뉴"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
