import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------- Interface chrome: independent from scroll animation ---------- */
const navigation = document.querySelector<HTMLElement>(".navigation");
const syncNavigation = () =>
  navigation?.classList.toggle("is-scrolled", window.scrollY > 18);
syncNavigation();
window.addEventListener("scroll", syncNavigation, { passive: true });

/* Highlight the nav link for the section currently in view. */
const navLinks = Array.from(
  document.querySelectorAll<HTMLAnchorElement>(".navigation nav a"),
);
const spySections = navLinks
  .map((link) => {
    const id = link.getAttribute("href")?.split("#")[1];
    return id ? document.getElementById(id) : null;
  })
  .filter((section): section is HTMLElement => Boolean(section));
if (spySections.length && "IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle(
            "is-active",
            link.getAttribute("href")?.endsWith(`#${entry.target.id}`) ?? false,
          ),
        );
      });
    },
    { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
  );
  spySections.forEach((section) => spy.observe(section));
}

const media = gsap.matchMedia();
media.add("(prefers-reduced-motion: no-preference)", () => {
  /* Hero entrance: a staggered reveal that reads top to bottom. */
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .from(".hero-top", {
      y: 18,
      autoAlpha: 0,
      duration: 0.8,
    })
    .from(".hero-role", { y: 24, autoAlpha: 0, duration: 0.8 }, "-=0.55")
    .from(
      ".hero h1",
      { y: 55, autoAlpha: 0, duration: 1.25, ease: "power3.out" },
      "-=0.6",
    )
    .from(".hero-bottom", { y: 26, autoAlpha: 0, duration: 0.9 }, "-=0.75")
    .from(".hero-foot", { autoAlpha: 0, duration: 0.9 }, "-=0.55");

  /* Section content fades in with a softer, slower settle. */
  gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
    if (element.closest(".hero")) return;
    gsap.from(element, {
      y: 30,
      autoAlpha: 0,
      duration: 0.95,
      ease: "power2.out",
      scrollTrigger: { trigger: element, start: "top 94%", once: true },
    });
  });

  /* Hero drifts away as the first section comes up. */
  if (document.querySelector(".hero-content")) {
    gsap.to(".hero-content", {
      yPercent: -7,
      autoAlpha: 0.35,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }

  /* Thin reading progress line on the landing page. */
  if (document.querySelector(".page-progress")) {
    gsap.to(".page-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
  }

  if (document.querySelector(".orb"))
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

    /* Pointer light: coordinates are local to each surface, with no lag. */
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

    /* A soft halo trails the pointer without hiding the native cursor. */
    const follower = document.createElement("div");
    follower.className = "cursor-follower";
    follower.setAttribute("aria-hidden", "true");
    document.body.appendChild(follower);
    const followX = gsap.quickTo(follower, "x", {
      duration: 0.42,
      ease: "power3",
    });
    const followY = gsap.quickTo(follower, "y", {
      duration: 0.42,
      ease: "power3",
    });
    let visible = false;

    const onPointerMove = (event: PointerEvent) => {
      if (!visible) {
        follower.classList.add("is-active");
        visible = true;
      }
      followX(event.clientX);
      followY(event.clientY);
    };
    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest(
        "a, button, summary, [data-cursor-hover]",
      );
      follower.classList.toggle("is-hovering", Boolean(interactive));
    };
    const onPointerDown = () => follower.classList.add("is-pressed");
    const onPointerUp = () => follower.classList.remove("is-pressed");
    const onPointerLeave = () => {
      follower.classList.remove("is-active");
      visible = false;
    };
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    cleanups.push(() => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
      gsap.killTweensOf(follower);
      follower.remove();
    });

    /* Hero depth: the light layer travels further than the type. */
    const hero = document.querySelector<HTMLElement>(".hero");
    if (hero) {
      let frame = 0;
      let px = 0;
      let py = 0;
      const update = () => {
        frame = 0;
        hero.style.setProperty("--parallax-x", `${px}px`);
        hero.style.setProperty("--parallax-y", `${py}px`);
      };
      const schedule = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      const move = (event: PointerEvent) => {
        const rect = hero.getBoundingClientRect();
        px = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
        py = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
        schedule();
      };
      const leave = () => {
        px = 0;
        py = 0;
        schedule();
      };
      hero.addEventListener("pointermove", move, { passive: true });
      hero.addEventListener("pointerleave", leave, { passive: true });
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        hero.removeEventListener("pointermove", move);
        hero.removeEventListener("pointerleave", leave);
        hero.style.removeProperty("--parallax-x");
        hero.style.removeProperty("--parallax-y");
      });
    }

    /* Magnetic controls: a small, springy pull toward the pointer. */
    document
      .querySelectorAll<HTMLElement>(
        ".button, .nav-contact, .circle-link, .network-icons a, .social-links a",
      )
      .forEach((control) => {
        const move = (event: PointerEvent) => {
          const rect = control.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          control.style.setProperty("--mag-x", `${dx * 0.14}px`);
          control.style.setProperty("--mag-y", `${dy * 0.14}px`);
        };
        const leave = () => {
          control.style.removeProperty("--mag-x");
          control.style.removeProperty("--mag-y");
        };
        control.addEventListener("pointermove", move, { passive: true });
        control.addEventListener("pointerleave", leave);
        control.addEventListener("blur", leave);
        cleanups.push(() => {
          control.removeEventListener("pointermove", move);
          control.removeEventListener("pointerleave", leave);
          control.removeEventListener("blur", leave);
          control.style.removeProperty("--mag-x");
          control.style.removeProperty("--mag-y");
        });
      });

    /* Just enough tilt to give the project surfaces real depth. */
    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((surface) => {
      let frame = 0;
      let tiltX = 0;
      let tiltY = 0;
      const update = () => {
        frame = 0;
        surface.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        surface.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      };
      const schedule = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      const move = (event: PointerEvent) => {
        const rect = surface.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        tiltX = -y * 4;
        tiltY = x * 4;
        schedule();
      };
      const leave = () => {
        tiltX = 0;
        tiltY = 0;
        schedule();
      };
      surface.addEventListener("pointermove", move, { passive: true });
      surface.addEventListener("pointerleave", leave);
      surface.addEventListener("blur", leave);
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        surface.removeEventListener("pointermove", move);
        surface.removeEventListener("pointerleave", leave);
        surface.removeEventListener("blur", leave);
        surface.style.removeProperty("--tilt-x");
        surface.style.removeProperty("--tilt-y");
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  },
);
