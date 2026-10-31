"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="header wrap">
      <a
        href="#"
        className="brand"
        aria-label="Bishal Gurung home"
        onClick={() => setIsOpen(false)}
      >
        <span className="monogram">
          bg<span>↗</span>
        </span>
        <span>
          Bishal Gurung<span className="brand-role">Design × Engineering</span>
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        Menu <span aria-hidden="true">{isOpen ? "−" : "＋"}</span>
      </button>
      <nav
        id="navigation"
        className={isOpen ? "open" : undefined}
        aria-label="Main navigation"
      >
        <a href="#work" onClick={() => setIsOpen(false)}>
          Selected work
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#experience" onClick={() => setIsOpen(false)}>
          Experience
        </a>
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setIsOpen(false)}
        >
          Let’s talk <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
