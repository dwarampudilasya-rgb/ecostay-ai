"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "bg-black text-white p-4"
          : "bg-white text-black p-4"
      }
    >
      <button
        onClick={() => setDark(!dark)}
        className="border px-4 py-2 rounded"
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>

      <h1 className="mt-4 text-2xl font-bold">
        Theme Demo
      </h1>

      <p>
        This page demonstrates dark and light mode.
      </p>
    </div>
  );
}