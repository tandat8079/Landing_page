"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BookingBar } from "@/components/BookingBar";

const slides = [
  {
    src: "/images/hero-hotel.png",
    alt: "An Nhiên Retreat giữa núi rừng lúc bình minh",
  },
  {
    src: "/images/suite.png",
    alt: "Suite nghỉ dưỡng mở ra thung lũng phủ sương",
  },
  { src: "/images/dining.png", alt: "Bữa tối riêng tư nhìn ra núi rừng" },
  { src: "/images/spa.png", alt: "Hồ trị liệu bằng đá giữa rừng tre" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const next = useCallback(
    () => setActive((current) => (current + 1) % slides.length),
    [],
  );
  const previous = () =>
    setActive((current) => (current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || hovered || reduceMotion || document.hidden) return;
    const timer = window.setInterval(next, 2000);
    return () => window.clearInterval(timer);
  }, [next, paused, hovered]);

  return (
    <section
      className="hero"
      id="top"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="hero__image" aria-live="off">
        {slides.map((slide, index) => (
          <Image
            className={`hero__slide${active === index ? " hero__slide--active" : ""}`}
            key={slide.src}
            src={slide.src}
            alt={active === index ? slide.alt : ""}
            aria-hidden={active !== index}
            fill
            priority={index === 0}
            sizes="100vw"
          />
        ))}
      </div>
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="hero__kicker">HÒA BÌNH · VIỆT NAM</p>
        <h1>
          Chạm vào
          <br />
          <em>khoảng lặng.</em>
        </h1>
        <p className="hero__intro">
          Một nơi trú ẩn giữa đại ngàn, nơi thời gian chậm lại và mỗi hơi thở
          đưa bạn trở về với chính mình.
        </p>
      </div>
      <div className="hero-slider" aria-label="Điều khiển ảnh giới thiệu">
        <button onClick={previous} aria-label="Ảnh trước">
          ←
        </button>
        <p>
          <strong>0{active + 1}</strong>
          <span>/ 0{slides.length}</span>
        </p>
        <button onClick={next} aria-label="Ảnh tiếp theo">
          →
        </button>
        <button
          className="hero-slider__pause"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
        >
          {paused ? "PHÁT" : "TẠM DỪNG"}
        </button>
      </div>
      <a className="hero__scroll" href="#story">
        <span>CUỘN ĐỂ KHÁM PHÁ</span>
        <i />
      </a>
      <BookingBar />
    </section>
  );
}
