"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`header${scrolled || open ? " header--solid" : ""}`}>
      <a className="brand" href="#top" aria-label="An Nhiên - trang chủ">
        <span className="brand__mark">A</span>
        <span>AN NHIÊN<small>MOUNTAIN RETREAT</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Điều hướng chính">
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="header__book" href="#booking">Đặt kỳ nghỉ <span>↗</span></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Đóng menu" : "Mở menu"}>
        <span /><span />
      </button>
      <div className={`mobile-menu${open ? " mobile-menu--open" : ""}`}>
        {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.label}</a>)}
        <p>Hòa Bình, Việt Nam<br />+84 218 390 1888</p>
      </div>
    </header>
  );
}
