import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // emailjs
    //   .sendForm(
    //     "service_portfolio", // Replace with your EmailJS Service ID
    //     "template_contact",  // Replace with your EmailJS Template ID
    //     formRef.current,
    //     "YOUR_PUBLIC_KEY"    // Replace with your EmailJS Public Key
    //   )
      // .then(() => {
      //   setStatus("sent");
      //   formRef.current.reset();
      //   setTimeout(() => setStatus("idle"), 4000);
      // })
      // .catch(() => {
      //   setStatus("error");
      //   setTimeout(() => setStatus("idle"), 4000);
      // });
  };

  return (
    <section id="contact">
      <div className="contact-wrap">
        <p className="section-label">{"// GET IN TOUCH"}</p>
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          Have a project idea or want to collaborate? Feel free to reach out —
          I'd love to hear from you and discuss how we can work together.
        </p>

        <div className="contact-links">
          <a
            href="mailto:hritik6354@gmail.com"
            className="contact-link"
            id="contact-email"
          >
            ✉️ hritik6354@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
            id="contact-linkedin"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
            id="contact-github"
          >
            🐙 GitHub
          </a>
        </div>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          id="contact-form"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="user_name">YOUR NAME</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">YOUR EMAIL</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or idea..."
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            id="contact-submit"
            disabled={status === "sending"}
            style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}
          >
            {status === "idle" && "Send Message →"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "✓ Message Sent!"}
            {status === "error" && "✕ Failed — Try Again"}
          </button>

          {status === "sent" && (
            <p className="form-status success">
              Thank you! Your message has been sent successfully. I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error">
              Oops! Something went wrong. Please try emailing me directly at hritik6354@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}