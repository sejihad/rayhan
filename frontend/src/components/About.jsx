import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter,FaFacebook } from "react-icons/fa";
import "./About.css";

export default function About() {
  const skills = [
    {
      key: "frontend",
      label: "React.js, JavaScript, responsive interfaces",
      val: 94,
    },
    {
      key: "mobile_apps",
      label: "React Native mobile app development",
      val: 90,
    },
    {
      key: "backend",
      label: "Node.js, Express, Python, Java, APIs",
      val: 88,
    },
    {
      key: "mern_stack",
      label: "MongoDB, Express, React, Node.js apps",
      val: 92,
    },
    {
      key: "security",
      label: "Ethical hacking, vulnerability research, Google Drive finding",
      val: 86,
    },
  ];
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about" id="about">
      <div className="about-left">
        <div className="about-top">
          <div className="about-badge">def about_rayhan():</div>
        </div>

        <h2 className="about-title">
          Founder, Developer & <span>Digital Problem Solver</span>
        </h2>

        <div className="code-box">
          <div className="code-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="file-name">developer.py</span>
          </div>

          <pre className="code">
            <span className="keyword">class</span>{" "}
            <span className="class-name">RayhanIslamRokon</span>:{"\n    "}
            <span className="property">location</span> ={" "}
            <span className="string">"Gazipur, Bangladesh"</span>
            {"\n    "}
            <span className="property">companies</span> ={" "}
            <span className="array">["Digital NexGen", "Sohoz Point"]</span>
            {"\n    "}
            <span className="property">mission</span> ={" "}
            <span className="string">"build practical digital solutions"</span>
          </pre>
        </div>

        <p className="about-text">
          Rayhan Islam Rokon is a Bangladeshi tech entrepreneur, full-stack
          developer, React Native app developer, and digital marketer. As
          Founder and CEO of Digital NexGen and Sohoz Point, he focuses on
          helping businesses move faster with MERN stack websites, mobile apps,
          software systems, IT services, digital marketing, and secure
          technology practices. He is also known for ethical hacking and
          identifying software vulnerabilities, including a discovered
          vulnerability in Google Drive.
        </p>

        <div className="about-actions">
          <button className="resume-btn" onClick={downloadResume}>
            Download Resume
          </button>

          <div className="socials">
            <a
              href="https://github.com/rayhanislamrokon"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/rayhan-islam-rokon"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com/rayhanislamrokon"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/RayhanIRokon"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/RayhanIslamRokonCEO"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="about-footer">
          return "software that serves real business goals"
        </div>
      </div>

      <div className="about-right">
        <div className="skills-box">
          <div className="skills-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="file-name">expertise.py</span>
          </div>

          <div className="skills-content">
            <p className="class-title">class ProfessionalExpertise:</p>

            {skills.map((skill) => (
              <div key={skill.key} className="skill-block">
                <div className="skill-code">
                  <span className="self">self.</span>
                  <span className="key">{skill.key}</span>
                  <span> =</span>
                </div>

                <div className="skill-label">
                  # {skill.label}
                  <span>{skill.val}%</span>
                </div>

                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${skill.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
