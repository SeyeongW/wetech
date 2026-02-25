'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // ---- Topbar close ----
    const topbar = document.getElementById("topbar");
    const topbarClose = document.getElementById("topbarClose");
    const header = document.getElementById("header");

    if (topbarClose && topbar && header) {
      topbarClose.addEventListener("click", () => {
        topbar.style.display = "none";
        header.style.top = "0px";
      });
    }

    // ---- Sidebar ----
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("backdrop") as HTMLDivElement | null;
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");

    function openSidebar() {
      if (!sidebar || !backdrop || !openMenu) return;
      sidebar.classList.add("is-open");
      sidebar.setAttribute("aria-hidden", "false");
      openMenu.setAttribute("aria-expanded", "true");
      backdrop.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
      if (!sidebar || !backdrop || !openMenu) return;
      sidebar.classList.remove("is-open");
      sidebar.setAttribute("aria-hidden", "true");
      openMenu.setAttribute("aria-expanded", "false");
      backdrop.hidden = true;
      document.body.style.overflow = "";
    }

    openMenu?.addEventListener("click", openSidebar);
    closeMenu?.addEventListener("click", closeSidebar);
    backdrop?.addEventListener("click", closeSidebar);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sidebar?.classList.contains("is-open")) closeSidebar();
    };
    window.addEventListener("keydown", onKeyDown);

    document.querySelectorAll(".sidebar__link").forEach((a) => {
      a.addEventListener("click", () => closeSidebar());
    });

    // ---- Reveal on scroll ----
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("on");
        else e.target.classList.remove("on");
      });
    }, { threshold: 0.15 });

    reveals.forEach((el) => io.observe(el));

    // ---- Parallax ----
    const parallaxEl = document.querySelector(".parallax") as HTMLElement | null;
    let current = 0;
    let target = 0;
    let ticking = false;

    function updateParallax() {
      current += (target - current) * 0.08;
      if (parallaxEl) parallaxEl.style.transform = `translateY(${current}px)`;
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
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}