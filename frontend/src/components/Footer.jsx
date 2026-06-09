import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="bottom-left">
            <span className="prompt-sign">-&gt;</span>
            <span className="path">~/Rayhan-Islam-Rokon</span>
            <span className="separator">|</span>
            <span className="copyright">&copy; {currentYear}</span>
          </div>

          <div className="bottom-center">
            <div className={`animated-text ${isVisible ? "slide-in" : ""}`}>
              <span className="dollar">$</span>
              <span className="echo">echo</span>
              <span className="quote">"</span>
              <span className="typing-text">Build. Secure. Grow.</span>
              <span className="quote">"</span>
            </div>
          </div>

          <div className="bottom-right">
            <span className="heart">
              <FaHeart />
            </span>
            <span className="copyright-text">Rayhan Rokon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
