import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function ScrollRevealAll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const selector = "h1, h2, h3, h4, p, li, dt, dd, label, figcaption, blockquote, .spectral-btn, .scroll-follow";
    const targets = Array.from(new Set(main.querySelectorAll<HTMLElement>(selector)));

    targets.forEach((target, index) => {
      target.classList.add("scroll-follow");
      target.classList.remove("is-visible");
      target.style.setProperty("--scroll-delay", `${(index % 4) * 0.08}s`);
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const rafId = requestAnimationFrame(() => {
      targets.forEach((target) => observer.observe(target));
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <ScrollRevealAll />
      <Navigation />
      <main className="flex-grow pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
