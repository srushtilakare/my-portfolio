import "../styles/farmAI.css";
import { motion } from "framer-motion";

/* IMAGES */

import farmai1 from "../assets/images/farmai 1.png";
import farmai2 from "../assets/images/farmai 2.png";
import farmai3 from "../assets/images/farmai 3.png";
import farmai4 from "../assets/images/farmai 4.png";
import farmai5 from "../assets/images/farmai 5.png";
import farmai6 from "../assets/images/farmai 6.png";
import farmai7 from "../assets/images/farmai 7.png";
import farmai8 from "../assets/images/farmai 8.png";
import farmai9 from "../assets/images/farmai 9.png";
import farmai10 from "../assets/images/farmai 10.png";
import farmai11 from "../assets/images/farmai 11.png";
import farmai12 from "../assets/images/farmai 12.png";
import farmai13 from "../assets/images/farmai 13.png";
import farmai14 from "../assets/images/farmai 14.png";
import farmai15 from "../assets/images/farmai 15.png";
import farmai16 from "../assets/images/farmai 16.png";
import farmai17 from "../assets/images/farmai 17.png";
import farmai18 from "../assets/images/farmai 18.png";
import farmai19 from "../assets/images/farmai 19.png";
import farmai20 from "../assets/images/farmai 20.png";
import farmai21 from "../assets/images/farmai 21.png";
import farmai22 from "../assets/images/farmai 22.png";
import farmai23 from "../assets/images/farmai 23.png";
import farmai24 from "../assets/images/farmai 24.png";
import farmai25 from "../assets/images/farmai 25.png";
import farmai26 from "../assets/images/farmai 26.png";
import farmai27 from "../assets/images/farmai 27.png";
import farmai28 from "../assets/images/farmai 28.png";
import farmai29 from "../assets/images/farmai 29.png";

function FarmAISection() {

  const modules = [

    "Crop Disease Detection",
    "Weather Forecasting",
    "Crop Advisory",
    "Soil Analysis",
    "Market Price Tracking",
    "AI Chatbot",
    "Government Schemes",
    "Community Forum"

  ];

  const screenshots = [

    farmai1,
    farmai2,
    farmai3,
    farmai4,
    farmai5,
    farmai6,
    farmai7,
    farmai8,
    farmai9,
    farmai10,
    farmai11,
    farmai12,
    farmai13,
    farmai14,
    farmai15,
    farmai16,
    farmai17,
    farmai18,
    farmai19,
    farmai20,
    farmai21,
    farmai22,
    farmai23,
    farmai24,
    farmai25,
    farmai26,
    farmai27,
    farmai28,
    farmai29

  ];

  return (

    <section className="farmai-section">

      {/* HEADER */}

      <div className="farmai-header">

        <motion.p
          className="farmai-subtitle"

          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.6
          }}
        >

          FLAGSHIP AI SYSTEM

        </motion.p>

        <motion.h2

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}
        >

          FarmAI —
          <br />

          Smart Agriculture Ecosystem

        </motion.h2>

      </div>

      {/* DESCRIPTION */}

      <div className="farmai-content">

        <p className="farmai-description">

          FarmAI is a full-stack AI-powered
          smart agriculture ecosystem built
          to solve multiple agricultural
          problems using artificial
          intelligence, deep learning,
          real-time APIs, and intelligent
          farmer assistance systems.

        </p>

        {/* STATS */}

        <div className="farmai-stats">

          <motion.div
            className="farmai-stat"

            whileHover={{
              y: -5
            }}
          >

            <h3>14+</h3>

            <p>Modules</p>

          </motion.div>

          <motion.div
            className="farmai-stat"

            whileHover={{
              y: -5
            }}
          >

            <h3>91%</h3>

            <p>AI Accuracy</p>

          </motion.div>

          <motion.div
            className="farmai-stat"

            whileHover={{
              y: -5
            }}
          >

            <h3>3</h3>

            <p>Languages</p>

          </motion.div>

        </div>

        {/* MODULES */}

        <div className="modules-container">

          {

            modules.map((module, index) => (

              <motion.div

                className="module-box"

                key={index}

                whileHover={{
                  y: -5
                }}
              >

                <div className="module-dot"></div>

                <p>{module}</p>

              </motion.div>

            ))

          }

        </div>

      </div>

      {/* SCREENSHOT GALLERY */}

      <div className="gallery-section">

        <div className="gallery-header">

          <p>FARMAI INTERFACE SHOWCASE</p>

          <h3>
            Real Platform Snapshots
          </h3>

        </div>

        <div className="image-showcase">

          {

            screenshots.map((image, index) => (

              <motion.div

                className="snapshot-card"

                key={index}

                whileHover={{
                  y: -8,
                  scale: 1.02
                }}

                transition={{
                  duration: 0.3
                }}
              >

                <img
                  src={image}
                  alt={`FarmAI ${index + 1}`}
                />

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  );
}

export default FarmAISection;