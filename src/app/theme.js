'use client';

import { useTheme } from "next-themes";

export function ThemeToggle() {
 const { theme, setTheme } = useTheme();

 return (
  <a
   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
   className="toggle-btn"
  >
   <i
    className={`fa before:text-sm ${theme === 'dark' ? 'fa-moon-o' : 'fa-sun-o'}`}
    aria-hidden="true"
   ></i>
  </a>
 );
}
