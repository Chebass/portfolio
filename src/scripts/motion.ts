import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const media = gsap.matchMedia();
media.add("(prefers-reduced-motion: no-preference)", () => {
  gsap.from(".hero h1", {
    y: 45,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
  gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
    gsap.from(element, {
      y: 28,
      opacity: 0,
      duration: 0.85,
      ease: "power2.out",
      scrollTrigger: { trigger: element, start: "top 94%", once: true },
    });
  });
  gsap.to(".orb", {
    rotation: 22,
    duration: 16,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});
media.add(
  "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
  () => {
    if (!document.querySelector(".about-portrait-image")) return;
    gsap.fromTo(
      ".about-portrait-image",
      { yPercent: -3, scale: 1.07 },
      {
        yPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-portrait",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
  },
);
media.add(
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  () => {
    const cleanups: (() => void)[] = [];
    document
      .querySelectorAll<HTMLElement>("[data-pointer-glow]")
      .forEach((card) => {
        let pointerX = 0;
        let pointerY = 0;
        let active = false;
        let frame = 0;
        const update = () => {
          frame = 0;
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--spot-x", `${pointerX - rect.left}px`);
          card.style.setProperty("--spot-y", `${pointerY - rect.top}px`);
          card.style.setProperty("--spot-opacity", active ? "1" : "0");
        };
        const schedule = () => {
          if (!frame) frame = requestAnimationFrame(update);
        };
        const move = (event: PointerEvent) => {
          pointerX = event.clientX;
          pointerY = event.clientY;
          active = true;
          schedule();
        };
        const leave = () => {
          active = false;
          schedule();
        };
        const scroll = () => {
          if (!active) return;
          const rect = card.getBoundingClientRect();
          active =
            pointerX >= rect.left &&
            pointerX <= rect.right &&
            pointerY >= rect.top &&
            pointerY <= rect.bottom;
          schedule();
        };
        card.addEventListener("pointerenter", move);
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        card.addEventListener("pointercancel", leave);
        window.addEventListener("scroll", scroll, { passive: true });
        window.addEventListener("resize", scroll, { passive: true });
        cleanups.push(() => {
          cancelAnimationFrame(frame);
          card.removeEventListener("pointerenter", move);
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
          card.removeEventListener("pointercancel", leave);
          window.removeEventListener("scroll", scroll);
          window.removeEventListener("resize", scroll);
          card.style.removeProperty("--spot-x");
          card.style.removeProperty("--spot-y");
          card.style.removeProperty("--spot-opacity");
        });
      });
    return () => cleanups.forEach((cleanup) => cleanup());
  },
);
