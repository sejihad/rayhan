/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const themes = {
  dark: {
    name: "dark",
    primary: "#00d4aa",
    secondary: "#c084fc",
    accent: "#f97316",
    bgGradient: "radial-gradient(circle at 30% 40%, #0f172a, #020617)",
    cardBg: "rgba(10, 12, 20, 0.6)",
    text: "#ffffff",
    textSecondary: "#94a3b8",
    border: "rgba(255, 255, 255, 0.06)",
    terminalBg: "#0a0c15",
    success: "#4ade80",
    warning: "#facc15",
  },
  orange: {
    name: "orange",
    primary: "#f97316",
    secondary: "#ea580c",
    accent: "#22d3ee",
    bgGradient: "radial-gradient(circle at 30% 40%, #1a0c0a, #0a0505)",
    cardBg: "rgba(30, 20, 15, 0.6)",
    text: "#ffffff",
    textSecondary: "#cbd5e1",
    border: "rgba(249, 115, 22, 0.15)",
    terminalBg: "#0a0808",
    success: "#4ade80",
    warning: "#facc15",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "orange" ? themes.orange : themes.dark;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme.name);
    document.body.setAttribute("data-theme", theme.name);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev.name === "dark" ? themes.orange : themes.dark));
  };

  const setThemeByName = (name) => {
    setTheme(name === "orange" ? themes.orange : themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
