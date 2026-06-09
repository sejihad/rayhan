import {
  FaBullhorn,
  FaCode,
  FaMobileAlt,
  FaPlug,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      code: "const app = createMernPlatform()",
      desc: "Modern MERN stack websites and web applications built with React.js, Node.js, Express, MongoDB, dashboards, and business workflows.",
      result: 'return "production-ready"',
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <FaCode size={32} />,
      file: "web_app.jsx",
      color: "blue",
    },
    {
      title: "React Native App Development",
      code: "const app = createNativeApp()",
      desc: "Cross-platform Android and iOS apps with React Native, smooth UI flows, API connections, push-ready architecture, and launch-focused builds.",
      result: 'return "app launched"',
      tech: ["React Native", "JavaScript", "Firebase"],
      icon: <FaMobileAlt size={32} />,
      file: "mobile_app.tsx",
      color: "cyan",
    },
    {
      title: "Backend & Software Systems",
      code: "public ApiResponse run()",
      desc: "Custom backend logic, REST APIs, admin tools, database-driven systems, and automation scripts for growing business operations.",
      result: 'return "stable backend"',
      tech: ["Node.js", "Express", "MongoDB"],
      icon: <FaPlug size={32} />,
      file: "backend_service.java",
      color: "green",
    },
    {
      title: "MERN Business Websites",
      code: "site.renderBrand()",
      desc: "Professional business websites, landing pages, service pages, lead forms, SEO structure, and conversion-focused React interfaces.",
      result: 'return "brand online"',
      tech: ["React", "Node.js", "SEO"],
      icon: <FaSearch size={32} />,
      file: "business_site.jsx",
      color: "purple",
    },
    {
      title: "Cybersecurity Review",
      code: "def audit_surface():",
      desc: "Practical security checks, ethical hacking mindset, vulnerability research, and safer deployment guidance, backed by experience identifying software issues including a Google Drive vulnerability.",
      result: 'return "risk reduced"',
      tech: ["Security", "Testing", "Hardening"],
      icon: <FaShieldAlt size={32} />,
      file: "security_audit.py",
      color: "orange",
    },
    {
      title: "Digital Marketing & IT Services",
      code: "campaign.scale(reach)",
      desc: "Digital NexGen-style business growth support across branding, ads, SEO, social presence, and complete IT service delivery.",
      result: 'return "business growth"',
      tech: ["SEO", "Ads", "Strategy"],
      icon: <FaBullhorn size={32} />,
      file: "growth_strategy.js",
      color: "red",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <div className="badge">
            <span className="prompt">$</span> class Services:
          </div>
          <h2>
            What Rayhan <span className="gradient">Builds</span>
          </h2>
          <p># Websites, mobile apps, software systems, security, and growth</p>
        </div>

        <div className="services-grid">
          {services.map((s, index) => (
            <div
              className={`service-card ${s.color}`}
              key={s.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-topbar">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="file">{s.file}</span>
                <div className="topbar-icons">
                  <span>x</span>
                  <span>-</span>
                  <span>[]</span>
                </div>
              </div>

              <div className="card-body">
                <div className="icon-wrapper">
                  <div className="icon">{s.icon}</div>
                </div>

                <h3>{s.title}</h3>
                <p className="code-line">
                  <span className="keyword">run</span> {s.code};
                </p>

                <p className="desc">{s.desc}</p>

                <div className="result-box">
                  <span className="result-arrow">-&gt;</span>
                  <span className="result">{s.result}</span>
                </div>

                <div className="tags">
                  {s.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-terminal">
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command">python deploy_services.py --business-ready</span>
          </div>
          <div className="terminal-line success">
            <span className="arrow">OK</span>
            <span>6 service modules prepared for client projects</span>
          </div>
          <div className="terminal-line typing">
            <span className="prompt">$</span>
            <span className="command">Ready to build your next digital product</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
