import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "../siteConfig";

const quickLinks = [
  { to: "/", label: "홈" },
  { to: "/about", label: "소개" },
  { to: "/products", label: "제품" },
  { to: "/contact", label: "문의" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-700 bg-[#111111] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-display mb-3 text-xl text-white">WETECH</p>
            <p className="text-sm leading-relaxed text-slate-400">
              Smart Bench를 중심으로 공공공간의 체감 품질을 높이는 도시형 솔루션을 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">바로가기</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} onClick={scrollToTop} className="text-sm text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">연락처</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-slate-300" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-slate-300" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-slate-300" />
                <span>
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
