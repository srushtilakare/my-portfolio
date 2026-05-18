import "../styles/hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-subtitle"
        >
          AI Engineer • Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Intelligent <br />
          Digital Experiences
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I design futuristic AI-powered systems,
          immersive interfaces, and real-world intelligent solutions.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="primary-btn">
            Explore Projects
          </button>

          <button className="secondary-btn">
            Download Resume
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;