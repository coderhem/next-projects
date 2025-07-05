'use client';

import { useTheme } from "next-themes";

export function ThemeToggle() {
 const { theme, setTheme } = useTheme();

 return (
  <a
   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
   className="toggle-btn"
  >
   <i
    className={`fa before:text-sm ${theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o'}`}
    aria-hidden="true"
   ></i>
  </a>
 );
}
