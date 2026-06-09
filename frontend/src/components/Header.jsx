import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  "Home",
  "About",
  "Skills",
  "Services",
  "Portfolio",
  "MD Rayhan",
  "Contact",
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const scrollTo = (id) => {
    const targetId = id.toLowerCase().replace(" ", "-");

    if (isHomePage) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    setActive(id);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (!isHomePage) navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("Home");
    setMenuOpen(false);
  };

  const handleNavClick = (link) => {
    if (link === "Home") {
      handleLogoClick();
    } else if (link === "MD Rayhan") {
      navigate("/about");
      setActive(link);
      setMenuOpen(false);
    } else {
      scrollTo(link);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <div className="logo-icon">&gt;_</div>
            <div className="logo-text">
              <span className="logo-name">Rayhan Islam Rokon</span>
              <span className="logo-sub">Full-Stack Developer</span>
            </div>
          </Link>

          <nav>
            <ul className="nav">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  {link === "Home" || link === "MD Rayhan" ? (
                    <Link
                      to={link === "Home" ? "/" : "/about"}
                      className={`nav-btn ${active === link ? "active" : ""}`}
                      onClick={() => handleNavClick(link)}
                    >
                      {link}
                    </Link>
                  ) : (
                    <button
                      className={`nav-btn ${active === link ? "active" : ""}`}
                      onClick={() => handleNavClick(link)}
                    >
                      {link}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="right-group">
            <ThemeToggle />

            <button className="hire-btn" onClick={() => scrollTo("Contact")}>
              Hire Me
            </button>

            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`mobile-nav-btn ${active === link ? "active" : ""}`}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </button>
          ))}
          <button className="mobile-hire" onClick={() => scrollTo("Contact")}>
            Hire Me
          </button>
        </div>
      )}

      <div style={{ height: 68 }} />
    </>
  );
}
