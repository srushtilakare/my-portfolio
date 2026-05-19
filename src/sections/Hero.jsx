import "../styles/hero.css";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

/* YOUR PHOTO */

import profile from "../assets/profile.png";

function Hero() {

  return (

    <section className="hero">

      {/* LEFT SIDE */}

      <div className="hero-content">

        <motion.p
          className="hero-subtitle"

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}
        >

          HELLO 👋 I'M

        </motion.p>

        <motion.h1

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}
        >

          Srushti
          <span> Vijay Lakare</span>

        </motion.h1>

        {/* TYPING */}

        <div className="typing-container">

          <TypeAnimation

            sequence={[

              "AI Engineer",
              1500,

              "Full Stack Developer",
              1500,

              "Machine Learning Enthusiast",
              1500,

              "Research & Innovation Explorer",
              1500,

            ]}

            speed={50}

            repeat={Infinity}

            className="typing-text"
          />

        </div>

        {/* DESCRIPTION */}

        <motion.p

          className="hero-description"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 0.5 }}
        >

          Passionate about building intelligent AI-powered
          applications, futuristic interfaces, and real-world
          technology solutions through Artificial Intelligence,
          Full Stack Development, and Research Innovation.

        </motion.p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <a
            href="/resume.pdf"
            download="Srushti_Lakare_Resume.pdf"
            className="primary-btn"
          >

            Download Resume

          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-visual">

        {/* PROFILE IMAGE */}

        <motion.div

          className="profile-container"

          initial={{ opacity: 0, scale: 0.8 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.8 }}
        >

          <img
            src={profile}
            alt="Srushti Lakare"
            className="profile-image"
          />

        </motion.div>

        {/* GLOW */}

        <div className="profile-glow"></div>

      </div>

    </section>

  );

}

export default Hero;