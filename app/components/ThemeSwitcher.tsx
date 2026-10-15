"use client";

import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useTheme } from "next-themes"; // 👈 1. Import next-themes hook

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme(); // 👈 2. Destructure active indicators
  const [mounted, setMounted] = useState(false);

  // ⚡ CRUCIAL: Wait for hydration mount to prevent layout flash on screen render
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />; // Render placeholder empty frame during load

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // 👈 3. Toggle string keys
  };

  const sunVariants: Variants = {
    dark: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeInOut" }
    },
    light: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.05, duration: 0.3, ease: "easeOut" }
    }
  };

  const moonVariants: Variants = {
    dark: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { delay: 0.05, duration: 0.3, ease: "easeOut" }
    },
    light: {
      scale: 0,
      opacity: 0,
      rotate: -90,
      transition: { duration: 0.25, ease: "easeInOut" }
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        type="button"
        onClick={toggleTheme}
        className="w-10 h-10 flex items-center justify-center rounded-xl  transition-colors shadow-lg active:scale-95 group relative overflow-hidden outline-none"
        aria-label="Toggle theme layout view"
      >
        <motion.svg
          xmlns="http://w3.org"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 relative z-10"
          animate={{ rotate: theme === "light" ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 15 }}
        >
          <motion.path
            d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
            variants={moonVariants}
            animate={theme}
            style={{ originX: "12px", originY: "12px" }}
            stroke="#818cf8"
            fill="rgba(129, 140, 248, 0.1)"
          />

          <motion.circle
            cx="12"
            cy="12"
            r="5"
            variants={sunVariants}
            animate={theme}
            style={{ originX: "12px", originY: "12px" }}
            stroke="#fbbf24"
            fill="rgba(251, 191, 36, 0.1)"
          />

          <motion.g
            animate={theme}
            variants={sunVariants}
            style={{ originX: "12px", originY: "12px" }}
            stroke="#fbbf24"
          >
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.g>
        </motion.svg>

        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-md rounded-full -z-0 scale-75 ${
            theme === "dark" ? "bg-indigo-500/10" : "bg-amber-500/10"
          }`}
        />
      </button>
    </div>
  );
}
