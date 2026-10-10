"use client";

import { useState } from "react";

type CopyCodeButtonProps = {
  code: string;
  display?: "action" | "code";
};

export function CopyCodeButton({ code, display = "action" }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    let didCopy = false;

    try {
      await navigator.clipboard.writeText(code);
      didCopy = true;
    } catch {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = code;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      didCopy = document.execCommand("copy");
      temporaryInput.remove();
    }

    setCopied(didCopy);
    if (didCopy) window.setTimeout(() => setCopied(false), 3000);
  }

  if (display === "code") {
    return (
      <button
        className="hero-offer-code-button"
        type="button"
        onClick={copyCode}
        aria-label={`Copy promo code ${code}`}
        aria-live="polite"
      >
        <code>{copied ? "Code copied" : code}</code>
      </button>
    );
  }

  return <button className="button button--secondary promo-copy-button" type="button" onClick={copyCode} aria-live="polite">{copied ? "Copied" : "Copy code"}</button>;
}
