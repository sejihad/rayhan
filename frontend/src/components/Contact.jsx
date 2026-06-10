import { useState } from "react";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    const apiUrl =
      import.meta.env.VITE_API_URL ||
      import.meta.env.API_URL ||
      "http://localhost:3000";

    try {
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json().catch(() => ({
        message: "Email server returned an invalid response.",
      }));

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. Rayhan will get back to you soon.",
      });
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="badge">
            <span className="prompt">$</span> echo "Let's Build"
          </div>
          <h2>
            Start a <span className="gradient">Project</span>
          </h2>
          <p>
            Need a website, mobile app, software system, security review, or
            digital growth plan?
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="left-content">
              <h3>Tell Rayhan what you want to build.</h3>
              <p className="description">
                Share your project goal, preferred technology, timeline, and
                budget range. Rayhan can help turn the idea into a practical
                product plan and production-ready build.
              </p>

              <div className="contact-cards">
                <div className="info-card">
                  <div className="icon-wrapper">
                    <FaEnvelope className="card-icon" />
                  </div>
                  <div className="card-info">
                    <p>Email</p>
                    <h4>Available on request</h4>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-wrapper">
                    <FaMapMarkerAlt className="card-icon" />
                  </div>
                  <div className="card-info">
                    <p>Based in</p>
                    <h4>
                      Gazipur, Bangladesh{" "}
                      <span className="remote">(Remote Worldwide)</span>
                    </h4>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-wrapper">
                    <FaClock className="card-icon" />
                  </div>
                  <div className="card-info">
                    <p>Focus</p>
                    <h4 className="green">Web, apps, IT, and digital growth</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <span className="form-badge">Send a message</span>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-border"></span>
                </div>

                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-border"></span>
                </div>
              </div>

              <div className="input-group">
                <label>Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select a project type</option>
                  <option value="Full-Stack Website">Full-Stack Website</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Software System">Software System</option>
                  <option value="MERN Stack App">MERN Stack App</option>
                  <option value="React Native App">React Native App</option>
                  <option value="Cybersecurity Review">
                    Cybersecurity Review
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
                <span className="input-border"></span>
              </div>

              <div className="input-group">
                <label>Project Details</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your idea, users, features, timeline, and budget..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <span className="input-border"></span>
              </div>

              {status.message && (
                <p className={`form-status ${status.type}`}>{status.message}</p>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                <FaPaperPlane className="btn-icon" />
                {isSubmitting ? "Sending..." : "Send Message"}
                <span className="btn-arrow">-&gt;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
