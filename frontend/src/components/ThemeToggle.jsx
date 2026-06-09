import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, setThemeByName } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="theme-toggle-wrapper">
      <button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Change Theme"
      >
        {theme.name === "dark" ? <FaMoon /> : <FaSun />}
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          <button
            className={`theme-option ${theme.name === "dark" ? "active" : ""}`}
            onClick={() => {
              setThemeByName("dark");
              setIsOpen(false);
            }}
          >
            <FaMoon />
            <span>Dark Theme</span>
          </button>

          <button
            className={`theme-option ${theme.name === "orange" ? "active" : ""}`}
            onClick={() => {
              setThemeByName("orange");
              setIsOpen(false);
            }}
          >
            <FaSun />
            <span>Orange Theme</span>
          </button>
        </div>
      )}
    </div>
  );
}
