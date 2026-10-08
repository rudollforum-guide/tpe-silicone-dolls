"use client";

import { useState } from "react";

type CopyCodeButtonProps = {
  code: string;
};

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="button button--secondary" type="button" onClick={copyCode}>
      {copied ? "Code copied" : "Copy code"}
      <span aria-hidden="true">{copied ? "✓" : "＋"}</span>
    </button>
  );
}
