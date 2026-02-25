'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const REVEAL_VIEWPORT_RATIO = 0.92;

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight * REVEAL_VIEWPORT_RATIO && rect.bottom >= 0;
}

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // ---- Sidebar ----
    const openMenuBtn = document.getElementById("openMenu") as HTMLButtonElement | null;
    const closeMenuBtn = document.getElementById("closeMenu") as HTMLButtonElement | null;
    const sidebar = document.getElementById("sidebar") as HTMLElement | null;
    const backdrop = document.getElementById("backdrop") as HTMLElement | null;
    const sidebarLinks = sidebar?.querySelectorAll<HTMLAnchorElement>(".sidebar__link") ?? [];

    let isSidebarOpen = false;
    let backdropHideTimer: number | undefined;

    const setSidebarOpen = (open: boolean, immediate = false) => {
      if (!openMenuBtn || !sidebar || !backdrop) return;
      isSidebarOpen = open;

      if (backdropHideTimer !== undefined) {
        window.clearTimeout(backdropHideTimer);
      }

      if (open) {
        backdrop.hidden = false;
        sidebar.classList.add("is-open");
        sidebar.setAttribute("aria-hidden", "false");
        openMenuBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
        return;
      }

      sidebar.classList.remove("is-open");
      sidebar.setAttribute("aria-hidden", "true");
      openMenuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";

      if (immediate) {
        backdrop.hidden = true;
        return;
      }

      backdropHideTimer = window.setTimeout(() => {
        backdrop.hidden = true;
      }, 300);
    };

    // Reset possible stale UI state before wiring events.
    if (sidebar) {
      sidebar.classList.remove("is-open");
      sidebar.setAttribute("aria-hidden", "true");
    }
    if (openMenuBtn) {
      openMenuBtn.setAttribute("aria-expanded", "false");
    }
    if (backdrop) {
      backdrop.hidden = true;
    }
    document.body.style.overflow = "";

    const onOpenSidebar = () => setSidebarOpen(true);
    const onCloseSidebar = () => setSidebarOpen(false);
    const onSidebarLinkClick = () => setSidebarOpen(false, true);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSidebarOpen) {
        setSidebarOpen(false);
      }
    };

    openMenuBtn?.addEventListener("click", onOpenSidebar);
    closeMenuBtn?.addEventListener("click", onCloseSidebar);
    backdrop?.addEventListener("click", onCloseSidebar);
    sidebarLinks.forEach((link) => link.addEventListener("click", onSidebarLinkClick));
    window.addEventListener("keydown", onKeyDown);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("on");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    const observed = new WeakSet<Element>();
    const bindReveals = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);

        if (isInViewport(el)) {
          el.classList.add("on");
          return;
        }

        io.observe(el);
      });
    };

    bindReveals();
    const revealRafId = requestAnimationFrame(bindReveals);
    const revealTimeoutId = window.setTimeout(bindReveals, 120);

    // ---- Parallax ----
    const parallaxEl = document.querySelector(".parallax") as HTMLElement | null;
    let current = window.scrollY * 0.15;
    let target = current;
    let ticking = false;

    const updateParallax = () => {
      current += (target - current) * 0.08;
      if (parallaxEl) parallaxEl.style.transform = `translateY(${current}px) scale(1.05)`;
      ticking = false;
    };

    const onScroll = () => {
      target = window.scrollY * 0.15;
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // cleanup
    return () => {
      if (backdropHideTimer !== undefined) {
        window.clearTimeout(backdropHideTimer);
      }
      document.body.style.overflow = "";
      if (sidebar) {
        sidebar.classList.remove("is-open");
        sidebar.setAttribute("aria-hidden", "true");
      }
      if (openMenuBtn) {
        openMenuBtn.setAttribute("aria-expanded", "false");
      }
      if (backdrop) {
        backdrop.hidden = true;
      }
      openMenuBtn?.removeEventListener("click", onOpenSidebar);
      closeMenuBtn?.removeEventListener("click", onCloseSidebar);
      backdrop?.removeEventListener("click", onCloseSidebar);
      sidebarLinks.forEach((link) => link.removeEventListener("click", onSidebarLinkClick));
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(revealRafId);
      window.clearTimeout(revealTimeoutId);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
