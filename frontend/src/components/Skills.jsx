import "./Skills.css";

import {
  FaAward,
  FaBook,
  FaBullhorn,
  FaJava,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiExpress,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "React.js",
      sub: "const ui = buildResponsiveExperience();",
      val: 94,
      color: "cyan",
      icon: <SiReact size={32} />,
    },
    {
      name: "React Native",
      sub: "const app = createNativeExperience();",
      val: 90,
      color: "blue",
      icon: <SiReact size={32} />,
    },
    {
      name: "Flutter",
      sub: "const app = createNativeExperience();",
      val: 90,
      color: "blue",
      icon: <SiFlutter size={32} />,
    },
    {
      name: "Node.js",
      sub: "server.listen(scaleBusiness);",
      val: 89,
      color: "green",
      icon: <SiNodedotjs size={32} />,
    },
    {
      name: "Express.js",
      sub: "router.post('/api/growth', handler);",
      val: 88,
      color: "teal",
      icon: <SiExpress size={32} />,
    },
    {
      name: "JavaScript",
      sub: "async function shipFeature() {}",
      val: 92,
      color: "yellow",
      icon: <SiJavascript size={32} />,
    },
    {
      name: "MongoDB",
      sub: "db.clients.insertOne(solution);",
      val: 87,
      color: "green",
      icon: <SiMongodb size={32} />,
    },
    {
      name: "Java",
      sub: "public class ReliableBackend {}",
      val: 95,
      color: "orange",
      icon: <FaJava size={32} />,
    },
    {
      name: "Python",
      sub: "def automate_business_flow():",
      val: 88,
      color: "purple",
      icon: <SiPython size={32} />,
    },
    {
      name: "Databases",
      sub: "SELECT insight FROM business;",
      val: 86,
      color: "teal",
      icon: <SiMysql size={32} />,
    },
    {
      name: "Digital Growth",
      sub: "campaign.optimize(conversions)",
      val: 89,
      color: "pink",
      icon: <FaBullhorn size={32} />,
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="badge">Tech stack and execution strength</div>
          <h2>
            &lt;Skills &amp; <span className="gradient-text">Expertise</span>
            /&gt;
          </h2>
          <p>
            A practical full-stack toolkit for websites, mobile apps, backend
            systems, API backends, and digital business growth.
          </p>
        </div>

        <div className="skills-box">
          <div className="skills-topbar">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="topbar-title">stack.config.js - rayhan</span>
            <div className="topbar-icons">
              <span>x</span>
              <span>-</span>
              <span>[]</span>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((s, index) => (
              <div
                className="skill-card"
                key={s.name}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-top">
                  <div className="icon-wrapper">
                    <div className="icon">{s.icon}</div>
                  </div>

                  <div className="skill-text">
                    <h4>{s.name}</h4>
                    <p>{s.sub}</p>
                  </div>

                  <div className="percent">
                    <span className="percent-number">{s.val}%</span>
                  </div>
                </div>

                <div className="bar-container">
                  <div className="bar">
                    <div
                      className={`fill ${s.color}`}
                      style={{ width: `${s.val}%` }}
                    >
                      <div className="glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="terminal-output">
            <div className="terminal-header">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">npm run stack-audit</span>
              <span className="terminal-cursor"></span>
            </div>
            <div className="terminal-lines">
              <p className="terminal-line">
                <span className="success">OK</span> MERN stack, React Native,
                Python, and Java loaded
              </p>
              <p className="terminal-line highlight">
                <span className="arrow">-&gt;</span> Ready for web, app,
                software, and growth projects
              </p>
              <p className="terminal-line typing">
                <span className="prompt">$</span> deploy --client business
                <span className="cursor-blink"></span>
              </p>
            </div>
          </div>
        </div>

        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <FaLaptopCode size={32} />
            </div>
            <div className="stat-number">MERN</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <SiReact size={32} />
            </div>
            <div className="stat-number">Apps</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaBook size={32} />
            </div>
            <div className="stat-number">IT</div>
            <div className="stat-label">Digital NexGen Services</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaAward size={32} />
            </div>
            <div className="stat-number">CEO</div>
            <div className="stat-label">Digital NexGen and Sohoz Point</div>
          </div>
        </div>
      </div>
    </section>
  );
}
