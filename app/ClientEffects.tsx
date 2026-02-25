'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // ---- Reveal on scroll ----
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("on");
      });
    }, { threshold: 0.1 });

    reveals.forEach((el) => io.observe(el));

    // ---- Parallax ----
    const parallaxEl = document.querySelector(".parallax") as HTMLElement | null;
    let current = 0;
    let target = 0;
    let ticking = false;

    function updateParallax() {
      current += (target - current) * 0.08;
      if (parallaxEl) parallaxEl.style.transform = `translateY(${current}px) scale(1.05)`;
      ticking = false;
    }

    const onScroll = () => {
      target = window.scrollY * 0.15;
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}