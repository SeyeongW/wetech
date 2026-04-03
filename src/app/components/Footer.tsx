import { siteConfig } from "../siteConfig";

const anchorLinks = [
  { href: "/#features", label: "핵심 기능" },
  { href: "/#specs", label: "제품 사양" },
  { href: "/#usecases", label: "활용 분야" },
  { href: "/#contact", label: "문의하기" },
];

export function Footer() {
  return (
    <footer className="bg-[#070b14] border-t border-white/[0.06] px-4 py-14 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black tracking-[0.3em] text-white">WETECH</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {anchorLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-white/30 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[0.7rem] uppercase tracking-[0.2em] text-white/20">
          © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
