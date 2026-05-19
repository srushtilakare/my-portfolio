import "../styles/contact.css";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import ReCAPTCHA from "react-google-recaptcha";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function ContactPage() {

  const form = useRef();

  const captchaRef = useRef(null);

  const [isVerified, setIsVerified] = useState(false);

  const [isSending, setIsSending] = useState(false);

  const handleCaptcha = (value) => {

    if (value) {

      setIsVerified(true);

    } else {

      setIsVerified(false);

    }

  };

  const sendEmail = (e) => {

    e.preventDefault();

    if (!isVerified) {

      alert("Please verify reCAPTCHA");

      return;

    }

    if (isSending) return;

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {

          alert("Message Sent Successfully 🚀");

          form.current.reset();

          captchaRef.current.reset();

          setIsVerified(false);

          setIsSending(false);

        },

        (error) => {

          console.log(error.text);

          alert("Something went wrong ❌");

          setIsSending(false);

        }
      );
  };

  return (

    <div className="contact-page">

      <div className="contact-grid"></div>

      {/* HERO */}

      <div className="contact-hero">

        <p className="contact-tag">
          CONTACT • CONNECT • COLLABORATE
        </p>

        <h1>
          Let’s Build
          <br />
          Something Intelligent Together
        </h1>

        <p className="contact-subtitle">

          Open to AI, Full Stack, Research,
          Internship, and innovative
          collaboration opportunities.

        </p>

      </div>

      {/* MAIN */}

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-info">

          <div className="contact-card">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>

              <h3>Email</h3>

              <a href="mailto:srushti1924@gmail.com">
                srushti1924@gmail.com
              </a>

            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              <FaPhone />
            </div>

            <div>

              <h3>Phone</h3>

              <a href="tel:+917821805085">
                +91 7821805085
              </a>

            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              <FaLinkedin />
            </div>

            <div>

              <h3>LinkedIn</h3>

              <a
                href="https://www.linkedin.com/in/srushtilakare"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/srushtilakare
              </a>

            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              <FaGithub />
            </div>

            <div>

              <h3>GitHub</h3>

              <a
                href="https://github.com/srushtilakare"
                target="_blank"
                rel="noreferrer"
              >
                github.com/srushtilakare
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-box">

          <h2>
            Quick Connect 🚀
          </h2>

          <p>

            Interested in AI projects,
            research collaborations,
            internships, or full-stack
            development opportunities?

          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            {/* HONEYPOT */}

            <input
              type="text"
              name="hidden_field"
              style={{ display: "none" }}
            />

            {/* RECAPTCHA */}

            <div className="captcha-box">

              <ReCAPTCHA
                sitekey={
                  import.meta.env
                    .VITE_RECAPTCHA_SITE_KEY
                }
                onChange={handleCaptcha}
                ref={captchaRef}
              />

            </div>

            <button
              type="submit"
              disabled={isSending}
            >

              {
                isSending
                  ? "Sending..."
                  : "Send Message →"
              }

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ContactPage;