import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="badge">
          Available for full-stack website and app projects
        </div>

        <h1>
          Rayhan Islam Rokon <span>Full-Stack</span> Developer
        </h1>

        <p>
          Tech entrepreneur, app and web developer, and digital strategist
          building{" "}
          <b>
            {" "}
            scalable software, mobile apps, and business-ready IT solutions
          </b>
          .
        </p>

        <div className="location">Based in Gazipur, Bangladesh</div>

        <div className="skills">
          {[
            "React.js",
            "React Native",
            "MERN Stack",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "Python",
            "Java",
            "Cybersecurity",
            "Digital Marketing",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="buttons">
          <button className="primary" onClick={() => scrollTo("contact")}>
            Let's Talk
          </button>
          <button className="secondary" onClick={() => scrollTo("portfolio")}>
            View Projects
          </button>
        </div>

        <div className="stats">
          <div>
            <h2>2+</h2>
            <p>Companies Lead</p>
          </div>
          <div>
            <h2>3+</h2>
            <p>Core Stacks</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="terminal">
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
          <p>$ npm create rayhan-portfolio --stack full</p>
        </div>

        <div className="code">
          <pre>
            <span className="keyword">const</span>{" "}
            <span className="property">developer</span> = {"{"}
            {"\n  "}
            <span className="property">name</span>:{" "}
            <span className="string">"Rayhan Islam Rokon"</span>,{"\n  "}
            <span className="property">roles</span>:{" "}
            <span className="array">
              ["Founder", "CEO", "Full-Stack Developer"]
            </span>
            ,{"\n  "}
            <span className="property">builds</span>:{" "}
            <span className="function">ship</span>(
            <span className="array">["web", "apps", "software"]</span>){"\n"}
            {"}"};
          </pre>
        </div>
      </div>
    </section>
  );
}
