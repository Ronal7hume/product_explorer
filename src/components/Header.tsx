"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="p-4 border-b flex justify-between">
      <h1>Product Explorer</h1>
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
