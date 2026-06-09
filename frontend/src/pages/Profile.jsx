import { useEffect, useState } from "react";
import {
  FaBolt,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaShieldAlt,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import {
  SiExpress,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";
import profilePic from "../assets/profile.jpg";
import "./Intro.css";

export default function Profile() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "I build MERN stack websites, React Native apps, software systems, and digital growth engines.";
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTypingComplete = currentIndex >= fullText.length;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <section className="intro" id="about">
      <div className="intro-container">
        <div className="intro-left">
          <div className="image-box">
            <div className="image-header">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <span className="image-title">rayhan-profile.jpg</span>
              <div className="header-icons">
                <span>x</span>
                <span>-</span>
                <span>[]</span>
              </div>
            </div>
            <div className="image-wrapper">
              <img src={profilePic} alt="Rayhan Islam Rokon" />
              <div className="image-overlay"></div>
              <div className="tech-badges">
                <span className="tech-badge">
                  <SiReact /> React
                </span>
                <span className="tech-badge">
                  <SiReact /> React Native
                </span>
              </div>
            </div>
            <div className="image-footer">
              <span className="status-dot"></span>
              <span className="status-text">Available for projects</span>
              <span className="location-text">
                <FaGlobe /> Gazipur, BD
              </span>
            </div>
          </div>
        </div>

        <div className="intro-right">
          <div className="top-line">
            <div className="terminal-prompt">
              <span className="prompt-sign">&gt;_</span>
              <span className="prompt-text">FOUNDER PROFILE</span>
            </div>
            <div className="badge">
              <span className="badge-icon">
                <FaStar />
              </span>
              <span>Full-Stack Developer</span>
            </div>
          </div>

          <h1>
            Rayhan Islam <span className="gradient-name">Rokon</span>
          </h1>

          <div className="tags">
            <span className="tag">
              <SiReact className="tag-icon" /> REACT.JS
            </span>
            <span className="tag">
              <SiReact className="tag-icon" /> REACT NATIVE
            </span>
            <span className="tag">
              <SiJavascript className="tag-icon" /> JAVASCRIPT
            </span>
            <span className="tag">
              <SiNodedotjs className="tag-icon" /> NODE.JS
            </span>
            <span className="tag">
              <SiExpress className="tag-icon" /> EXPRESS
            </span>
            <span className="tag">
              <SiMongodb className="tag-icon" /> MONGODB
            </span>
            <span className="tag">
              <SiPython className="tag-icon" /> PYTHON
            </span>
            <span className="tag">
              <SiFlutter className="tag-icon" /> FLUTTER
            </span>
          </div>

          <div className="desc-box">
            <div className="desc-header">
              <span className="quote-icon">"</span>
              <span className="desc-title">professional_bio.js</span>
              <span className="desc-version">v3.0.0</span>
            </div>
            <p className="typed-line">
              {typedText}
              {!isTypingComplete && <span className="cursor-blink">|</span>}
            </p>
            <p className="desc-continue">
              Rayhan is a tech entrepreneur based in Gazipur, Bangladesh. He is
              the Founder and CEO of{" "}
              <a
                className="bio-link"
                href="https://digitalnexgen.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital NexGen
              </a>{" "}
              and{" "}
              <a
                className="bio-link"
                href="https://sohozpoint.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sohoz Point
              </a>
              , working across MERN stack web development, React Native app
              development, digital marketing, IT services, and ethical security
              research. He is known for identifying software vulnerabilities,
              including a{" "}
              <span className="bio-highlight">
                discovered vulnerability in Google Drive
              </span>
              . He studied at Model Institute of Science & Technology (MIST).
            </p>
          </div>

          <div className="stats">
            <div className="stat-card">
              <div className="stat-icon">
                <FaCode />
              </div>
              <div className="stat-info">
                <h3 className="counter">Full</h3>
                <p>STACK</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaBolt />
              </div>
              <div className="stat-info">
                <h3 className="counter">CEO</h3>
                <p>FOUNDER</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaShieldAlt />
              </div>
              <div className="stat-info">
                <h3 className="counter">Sec</h3>
                <p>RESEARCH</p>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="cta-primary" onClick={scrollToContact}>
              <span>Start Project</span>
              <span className="button-arrow">-&gt;</span>
            </button>
            <button className="cta-secondary">
              <FaDownload className="btn-icon" />
              <span>Resume</span>
            </button>
          </div>

          <div className="links">
            <div className="links-header">
              <span className="links-icon">//</span>
              <span className="links-title">VENTURES_AND_FOCUS</span>
              <span className="links-count">(5)</span>
            </div>

            <div className="chips">
              <span className="chip">
                <span className="chip-dot"></span>
                Digital NexGen
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                Sohoz Point
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                Web Development
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                App Development
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                Digital Marketing
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                Web Security Expert
              </span>
            </div>
          </div>

          <div className="socials">
            <a
              href="https://github.com/rayhanislamrokon"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/rayhan-islam-rokon"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/RayhanIRokon"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:info@rayhanislamrokon.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
