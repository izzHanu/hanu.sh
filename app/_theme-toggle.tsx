"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return { theme, toggleTheme };
}

// The home page hides the floating toggle below, so the avatar is its switch.
export function ProfileAvatar() {
  const { theme, toggleTheme } = useTheme();
  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="relative h-11 w-11 shrink-0 select-none overflow-hidden rounded-full ring-1 ring-line transition-transform duration-200 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/20 focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
    >
      <Image
        src="/me.png"
        alt=""
        fill
        sizes="44px"
        draggable={false}
        className="pointer-events-none select-none object-cover [-webkit-user-drag:none]"
      />
    </button>
  );
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="fixed right-4 top-4 z-50 grid size-9 place-items-center rounded-full border border-line bg-bg/90 text-muted shadow-sm backdrop-blur transition-[transform,color,background-color,border-color] duration-200 hover:text-fg active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/20 focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-colors"
    >
      <span className="relative grid size-4 place-items-center" aria-hidden>
        <Sun
          className={`absolute size-4 transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-opacity ${
            theme === "light" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
        <Moon
          className={`absolute size-4 transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-opacity ${
            theme === "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}

import { usePathname } from "next/navigation";

export function SiteThemeToggle() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;

  return <ThemeToggleButton />;
}
