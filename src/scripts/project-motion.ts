import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Only the visible case owns scroll animations; hidden tabs stay untouched. */
export function createProjectMotion() {
  const root = document.querySelector<HTMLElement>(".category-page")!;
  const navigation = root.querySelector<HTMLElement>(".case-tabs");
  const indicator = navigation?.querySelector<HTMLElement>(
    ".case-tab-indicator",
  );
  const progress = document.querySelector<HTMLElement>(
    ".case-reading-progress",
  );
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activePanel: HTMLElement | undefined;
  let activeTab: HTMLElement | undefined;
  let panelContext: gsap.Context | undefined;

  function positionIndicator(animate: boolean) {
    if (!indicator || !activeTab || !navigation) return;
    navigation.dataset.motionReady = "true";
    const target = {
      x: activeTab.offsetLeft,
      y: activeTab.offsetTop,
      width: activeTab.offsetWidth,
      height: activeTab.offsetHeight,
    };
    gsap.killTweensOf(indicator);
    if (animate && !reducedMotion.matches) {
      gsap.to(indicator, { ...target, duration: 0.45, ease: "power3.inOut" });
    } else {
      gsap.set(indicator, target);
    }
  }

  function animatePanel(panel: HTMLElement) {
    return gsap.context(() => {
      function reveal(selector: string, trigger: string, stagger = 0.08) {
        const elements = panel.querySelectorAll<HTMLElement>(selector);
        if (!elements.length) return;
        gsap.fromTo(
          elements,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: panel.querySelector(trigger),
              start: "top 92%",
              once: true,
            },
          },
        );
      }

      reveal(
        ".project-case-header .eyebrow, .project-case-header h2, .project-case-header p, .project-case-actions",
        ".project-case-header",
        0.1,
      );
      reveal(".project-facts > div", ".project-facts", 0.1);
      reveal(
        ".case-stack > .eyebrow, .case-stack li",
        ".case-details-layout",
        0.07,
      );
      panel
        .querySelectorAll<HTMLElement>(
          ".case-story section, .case-subheading, .case-capture",
        )
        .forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 35 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
              scrollTrigger: { trigger: element, start: "top 93%", once: true },
            },
          );
        });
      reveal(".case-feature-grid > div", ".case-feature-grid", 0.12);
      const preview = panel.querySelector(".case-browser");
      if (preview) {
        gsap.fromTo(
          preview,
          { autoAlpha: 0, y: 45, scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: preview, start: "top 94%", once: true },
          },
        );
      }
    }, panel);
  }

  const media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.fromTo(
      root.querySelectorAll(
        ".category-back, .category-heading > *, .case-tabs",
      ),
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
      },
    );
    if (progress)
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.25,
        },
      });
    if (activePanel) panelContext = animatePanel(activePanel);
    return () => {
      panelContext?.revert();
      panelContext = undefined;
      positionIndicator(false);
    };
  });

  window.addEventListener("resize", () => positionIndicator(false), {
    passive: true,
  });
  document.fonts.ready.then(() => {
    positionIndicator(false);
    ScrollTrigger.refresh();
  });

  return {
    activate(panel: HTMLElement, tab: HTMLElement) {
      const changed = panel !== activePanel;
      const first = !activeTab;
      activeTab = tab;
      if (changed) {
        panelContext?.revert();
        panelContext = undefined;
        activePanel = panel;
        if (!reducedMotion.matches) panelContext = animatePanel(panel);
      }
      positionIndicator(!first);
      ScrollTrigger.refresh();
    },
    openViewer(viewer: HTMLDialogElement) {
      if (reducedMotion.matches) return;
      gsap.fromTo(
        viewer,
        { opacity: 0, y: 16, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          clearProps: "opacity,transform",
        },
      );
    },
  };
}
