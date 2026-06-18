"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="ml-auto rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
