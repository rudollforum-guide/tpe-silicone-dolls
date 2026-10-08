"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "tsd-age-confirmed";

export function AgeGate() {
  const [isOpen, setIsOpen] = useState(true);
  const enterButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const confirmed = window.localStorage.getItem(STORAGE_KEY) === "true";

    if (!confirmed) {
      document.body.classList.add("age-gate-open");
    }

    const frame = window.requestAnimationFrame(() => {
      setIsOpen(!confirmed);
      if (!confirmed) enterButtonRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.classList.remove("age-gate-open");
    };
  }, []);

  function enterSite() {
    window.localStorage.setItem(STORAGE_KEY, "true");
    document.documentElement.dataset.ageConfirmed = "true";
    document.body.classList.remove("age-gate-open");
    setIsOpen(false);
  }

  function exitSite() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.replace("about:blank");
  }

  function keepFocusInside(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;

    const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>("button"));
    const first = buttons[0];
    const last = buttons[buttons.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  if (!isOpen) return null;

  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title" aria-describedby="age-gate-description" onKeyDown={keepFocusInside}>
      <div className="age-gate__panel">
        <div className="age-gate__mark" aria-hidden="true">18+</div>
        <p className="eyebrow">Age verification</p>
        <h2 id="age-gate-title">Adults Only — 18+</h2>
        <p id="age-gate-description">This website contains information and imagery related to adult TPE and silicone dolls. You must be at least 18 years old to continue.</p>
        <div className="age-gate__actions">
          <button ref={enterButtonRef} className="button button--primary" type="button" onClick={enterSite}>I AM 18 OR OLDER — ENTER</button>
          <button className="button button--secondary" type="button" onClick={exitSite}>EXIT</button>
        </div>
        <p className="age-gate__privacy">Your confirmation is stored only in this browser.</p>
      </div>
    </div>
  );
}
