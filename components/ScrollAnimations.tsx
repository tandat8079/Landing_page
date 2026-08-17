"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ScrollAnimations() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".hero__content > *", { y: 55, opacity: 0, duration: 1.15, stagger: 0.13, ease: "power3.out", delay: 0.2 });
    gsap.to(".hero__image", { scale: 1.12, yPercent: 8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 } });
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
      gsap.from(element, { y: 70, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%", once: true } });
    });
    gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((element) => {
      gsap.from(element, { clipPath: "inset(0 0 100% 0)", duration: 1.25, ease: "power3.inOut", scrollTrigger: { trigger: element, start: "top 80%", once: true } });
      const image = element.querySelector("img");
      if (image) gsap.from(image, { scale: 1.16, duration: 1.7, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 80%", once: true } });
    });
  });
  return null;
}
