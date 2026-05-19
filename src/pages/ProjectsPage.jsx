import "../styles/projectsPage.css";
import FarmAISection from "../components/FarmAISection";
import FakeReviewSection from "../components/FakeReviewSection";
import FakeNewsSection from "../components/FakeNewsSection";
import PCOSSection from "../components/PCOSSection";
import PotholeSection from "../components/PotholeSection";

import { motion } from "framer-motion";

function ProjectsPage() {

  return (

    <section className="innovation-page">

      {/* HERO */}

      <div className="innovation-hero">

        {/* LEFT */}

        <div className="innovation-content">

          <motion.p

            className="innovation-subtitle"

            initial={{
              opacity: 0,
              y: 20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}
          >

            AI INNOVATION LAB

          </motion.p>

          <motion.h1

            initial={{
              opacity: 0,
              y: 30
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: 0.2
            }}
          >

            Building
            <br />

            Intelligent
            <br />

            Digital Systems

          </motion.h1>

          <motion.p

            className="innovation-description"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              delay: 0.4
            }}
          >

            A collection of AI-powered
            platforms, machine learning
            systems, and full-stack
            intelligent solutions designed
            to solve real-world problems.

          </motion.p>

          <motion.div

            className="innovation-buttons"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              delay: 0.6
            }}
          >

            <button className="primary-btn">

              Explore Systems

            </button>

            <button className="secondary-btn">

              Research Work

            </button>

          </motion.div>

        </div>

        {/* RIGHT VISUAL */}

        <div className="innovation-visual">

          <div className="visual-glow"></div>

          {/* MAIN PANEL */}

          <div className="main-panel">

            <div className="panel-top">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="panel-content">

              <div className="panel-graph"></div>

              <div className="panel-stats">

                <div></div>
                <div></div>
                <div></div>

              </div>

            </div>

          </div>

          {/* FLOATING CARDS */}

          <div className="floating-card card-1">

            <p>AI Models</p>

            <h3>12+</h3>

          </div>

          <div className="floating-card card-2">

            <p>Projects</p>

            <h3>10+</h3>

          </div>

          <div className="floating-card card-3">

            <p>Accuracy</p>

            <h3>94%</h3>

          </div>

        </div>

      </div>

      <FarmAISection />
      <FakeReviewSection />
      <FakeNewsSection />
      <PCOSSection />
      <PotholeSection />

    </section>

  );
}

export default ProjectsPage;