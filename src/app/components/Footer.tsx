import { Link } from "react-router";
import { siteConfig } from "../siteConfig";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#1d242a] px-4 py-12 text-center text-white/70 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-sm tracking-[0.24em] text-white">WETECH</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={scrollTop}
                className="text-xs uppercase tracking-[0.22em] transition hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.7rem] uppercase tracking-[0.22em] text-white/45">
          &copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
