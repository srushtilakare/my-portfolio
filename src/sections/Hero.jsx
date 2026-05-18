import "../styles/hero.css";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}

      <div className="hero-content">

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          AI ENGINEER • FULL STACK DEVELOPER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Building Intelligent
          <br />
          Digital Experiences
        </motion.h1>

        <div className="typing-container">

          <TypeAnimation
            sequence={[
              "AI Systems",
              1500,
              "Immersive Interfaces",
              1500,
              "Machine Learning Solutions",
              1500,
              "Future-Ready Products",
              1500,
            ]}
            speed={40}
            repeat={Infinity}
            className="typing-text"
          />

        </div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          I design futuristic AI-powered systems,
          immersive interfaces, and intelligent
          digital experiences that solve real-world problems.
        </motion.p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Projects
          </button>

          <button className="secondary-btn">
            Download Resume
          </button>

        </div>

      </div>

      {/* RIGHT SIDE VISUAL */}

      <div className="hero-visual">

        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="glass-card">

          <div className="card-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="card-content">

            <h3>AI SYSTEM STATUS</h3>

            <div className="status">
              <p>Neural Engine</p>
              <div className="status-bar">
                <div className="fill"></div>
              </div>
            </div>

            <div className="status">
              <p>ML Accuracy</p>
              <div className="status-bar">
                <div className="fill fill-2"></div>
              </div>
            </div>

            <div className="status">
              <p>Innovation Level</p>
              <div className="status-bar">
                <div className="fill fill-3"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>

    </section>
  );
}

export default Hero;