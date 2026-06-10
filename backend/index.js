const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = Number(process.env.PORT || 3000);

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://rayhanislamrokon.com",
  "https://rayhanislamrokon.com",
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked origin: ${origin}`));
    },
    methods: ["GET", "POST"],
  }),
);
app.use(express.json({ limit: "20kb" }));

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getMissingEnv() {
  const baseRequired = ["SMTP_MAIL", "SMTP_PASSWORD"];
  const needsHost = !process.env.SMTP_SERVICE && !process.env.SMTP_HOST;

  if (needsHost) {
    baseRequired.push("SMTP_SERVICE or SMTP_HOST");
  }

  return baseRequired.filter((key) => {
    if (key === "SMTP_SERVICE or SMTP_HOST") return needsHost;
    return !process.env[key];
  });
}

function createTransporter() {
  const auth = {
    user: process.env.SMTP_USERNAME || process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  };
  const commonOptions = {
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  };

  if (process.env.SMTP_SERVICE) {
    return nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth,
      ...commonOptions,
    });
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth,
    ...commonOptions,
  });
}

function getEmailErrorMessage(error) {
  if (error.code === "EAUTH") {
    return "SMTP login failed. Check email/app password credentials.";
  }

  if (error.code === "ETIMEDOUT" || error.code === "ESOCKET") {
    return "SMTP server connection timed out. Check SMTP host, port, service, or network access.";
  }

  if (error.responseCode === 535) {
    return "SMTP authentication failed. For Gmail, use an App Password instead of your normal password.";
  }

  return "Unable to send message right now. Please try again later.";
}

app.get("/", (_req, res) => {
  res.json({ ok: true, message: "Email API is running" });
});

app.post("/api/send-email", async (req, res) => {
  const missingEnv = getMissingEnv();

  if (missingEnv.length) {
    return res.status(500).json({
      ok: false,
      message: `Email service is not configured. Missing: ${missingEnv.join(", ")}`,
    });
  }

  const name = clean(req.body.name);
  const email = clean(req.body.email);
  const projectType = clean(req.body.projectType || "General Inquiry");
  const message = clean(req.body.message);

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      message: "Name, email, and project details are required.",
    });
  }

  const transporter = createTransporter();
  const subject = `New portfolio inquiry: ${projectType}`;
  const recipient = process.env.CONTACT_TO || process.env.SMTP_MAIL;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    "",
    "Message:",
    message,
  ].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2>New portfolio inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_MAIL,
      to: recipient,
      replyTo: email,
      subject,
      text,
      html,
    });

    return res.json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({
      ok: false,
      message: getEmailErrorMessage(error),
    });
  }
});

app.listen(port, () => {
  console.log(`Email API running on http://localhost:${port}`);
});
