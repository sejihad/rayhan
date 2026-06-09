import {
  FaBullhorn,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Business Website Platform",
      file: "business_site.jsx",
      code: "render(<BusinessWebsite />)",
      desc: "A responsive MERN stack company website system with service pages, lead capture, admin-ready backend, and conversion-focused UI.",
      stats: "MERN",
      statsLabel: "Stack",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <FaCode size={28} />,
      color: "blue",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
    {
      title: "React Native Service App",
      file: "sohoz_point_app.tsx",
      code: "navigation.navigate('ServiceFlow')",
      desc: "A mobile-first React Native app concept for service discovery, customer requests, booking flows, and smooth cross-platform UX.",
      stats: "RN",
      statsLabel: "Mobile",
      tech: ["React Native", "JavaScript", "Firebase"],
      icon: <FaMobileAlt size={28} />,
      color: "cyan",
      gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)",
    },
    {
      title: "Agency Growth Dashboard",
      file: "growth_dashboard.js",
      code: "campaigns.map(trackROI)",
      desc: "A dashboard concept for Digital NexGen to track campaigns, leads, conversions, content performance, and client reporting.",
      stats: "ROI",
      statsLabel: "Tracking",
      tech: ["JavaScript", "Charts", "Marketing"],
      icon: <FaChartLine size={28} />,
      color: "green",
      gradient: "linear-gradient(135deg, #22c55e, #14b8a6)",
    },
    {
      title: "Secure Backend API",
      file: "SecureApi.java",
      code: "return ResponseEntity.ok(payload);",
      desc: "A Java-style backend architecture for authenticated requests, role-based access, structured APIs, and reliable business data handling.",
      stats: "Java",
      statsLabel: "Backend",
      tech: ["Java", "REST API", "MySQL"],
      icon: <FaDatabase size={28} />,
      color: "orange",
      gradient: "linear-gradient(135deg, #f97316, #facc15)",
    },
    {
      title: "Security Audit Toolkit",
      file: "security_scan.py",
      code: "findings = audit(target)",
      desc: "A Python-based security review workflow inspired by ethical hacking and vulnerability research, including experience with a Google Drive vulnerability discovery.",
      stats: "Audit",
      statsLabel: "Security",
      tech: ["Python", "Testing", "Hardening"],
      icon: <FaShieldAlt size={28} />,
      color: "purple",
      gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    },
    {
      title: "MERN Lead Website",
      file: "lead_website.jsx",
      code: "await api.post('/leads', formData)",
      desc: "A polished MERN business website with service structure, brand presentation, contact flow, lead storage, and search-friendly pages.",
      stats: "Leads",
      statsLabel: "CRM",
      tech: ["React", "Node.js", "MongoDB"],
      icon: <FaBullhorn size={28} />,
      color: "teal",
      gradient: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="badge">
            <span className="prompt">from</span> rayhan_portfolio{" "}
            <span className="prompt">import</span> projects
          </div>
          <h2>
            Featured <span className="gradient">Work</span>
          </h2>
          <p># Practical MERN, React Native, backend, marketing, and security builds</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card ${project.color}`}
              key={project.title}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="project-header">
                <div className="file-info">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="filename">{project.file}</span>
                </div>
                <div className="stats-badge">
                  <span className="stats-number">{project.stats}</span>
                  <span className="stats-label">{project.statsLabel}</span>
                </div>
              </div>

              <div className="project-body">
                <div className="icon-bg" style={{ background: project.gradient }}>
                  <div className="project-icon">{project.icon}</div>
                </div>

                <h3>{project.title}</h3>

                <div className="code-block">
                  <code>{project.code}</code>
                </div>

                <p className="description">{project.desc}</p>

                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="coming-soon">
          <div className="terminal-loader">
            <div className="loader-header">
              <span className="prompt">$</span>
              <span className="command">git push origin rayhan/full-stack</span>
            </div>
            <div className="loader-content">
              <div className="spinner"></div>
              <div className="loader-text">
                <span className="typing-text">More client work loading...</span>
                <span className="cursor-blink">|</span>
              </div>
            </div>
            <div className="loader-footer">
              <span className="status">Building websites, apps, and digital systems.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
