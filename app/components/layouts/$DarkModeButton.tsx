import { useEffect, useState } from "hono/jsx";
import MoonIcon from "@/components/icons/Moon";
import SunIcon from "@/components/icons/Sun";

type Theme = "dark" | "light";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<Theme>("dark");

  useEffect(() => {
    setDarkMode(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  const toggleTheme = () => {
    const nextTheme = darkMode === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("ethtokyo.theme", nextTheme);
    setDarkMode(nextTheme);
  };

  return (
    <div className="text-xl">
      <button
        type="button"
        class="anchor-theme rounded-full p-1 style-base w-7 h-7 flex items-center justify-center z-50 border"
        onClick={toggleTheme}
        aria-label={`Switch to ${darkMode === "dark" ? "light" : "dark"} mode`}
      >
        {darkMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
