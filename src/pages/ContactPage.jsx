import "../styles/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function ContactPage() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_7o4d92p",
        "template_7pbxhfx",
        form.current,
        "PT6VLj81L7wOznSG2"
      )

      .then(
        () => {

          alert("Message Sent Successfully 🚀");

          form.current.reset();
        },

        (error) => {

          console.log(error.text);

          alert("Something went wrong ❌");
        }
      );
  };

  return (

    <div className="contact-page">

      <div className="contact-grid"></div>

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
          Open to AI, Full Stack, Research, and innovative collaboration opportunities.
        </p>

      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

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

        {/* RIGHT SIDE */}

        <div className="contact-box">

          <h2>Quick Connect 🚀</h2>

          <p>
            Interested in AI projects, research collaborations,
            internships, or full-stack development opportunities?
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

            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ContactPage;