import "../styles/fakeNews.css";

import { motion } from "framer-motion";

/* IMAGES */

import news1 from "../assets/fakeNews/news1.png";
import news2 from "../assets/fakeNews/news2.png";
import news3 from "../assets/fakeNews/news3.png";

function FakeNewsSection() {

  const screenshots = [

    news1,
    news2,
    news3

  ];

  const features = [

    "News Classification",
    "Confidence Analysis",
    "Prediction History",
    "Text Analytics",
    "ML-Based Detection",
    "Dark Dashboard UI"

  ];

  return (

    <section className="fake-news-section">

      {/* HEADER */}

      <div className="news-header">

        <p>AI + MACHINE LEARNING SYSTEM</p>

        <h2>

          Fake News
          <br />

          Detection Platform

        </h2>

      </div>

      {/* DESCRIPTION */}

      <div className="news-description">

        <p>

          An intelligent fake news detection
          platform developed using Machine
          Learning and Natural Language
          Processing techniques to classify
          news content as REAL or FAKE with
          confidence analysis, prediction
          tracking, and text-based analytics.

        </p>

      </div>

      {/* FEATURES */}

      <div className="news-features">

        {features.map((feature, index) => (

          <motion.div

            className="feature-card"

            key={index}

            whileHover={{
              y: -5
            }}
          >

            <div className="feature-dot"></div>

            <p>{feature}</p>

          </motion.div>

        ))}

      </div>

      {/* AI ANALYSIS PANEL */}

      <div className="analysis-system">

        <div className="analysis-window">

          {/* TOP */}

          <div className="analysis-top">

            <span></span>
            <span></span>
            <span></span>

          </div>

          {/* CONTENT */}

          <div className="analysis-content">

            {/* LEFT */}

            <div className="input-side">

              <p className="panel-heading">

                News Input

              </p>

              <div className="news-box">

                “OnePlus 13s price drops to
                under Rs 47,800 during Amazon
                Great Indian Festival 2025”

              </div>

              <button className="analyze-btn">

                Analyze News

              </button>

            </div>

            {/* RIGHT */}

            <div className="result-side">

              <p className="panel-heading">

                AI Prediction

              </p>

              <div className="result-card">

                <h3>REAL</h3>

                <p>

                  Confidence:
                  <span> 83.3%</span>

                </p>

                <div className="confidence-bar">

                  <div className="confidence-fill"></div>

                </div>

              </div>

              <div className="analysis-tags">

                <span>ML Classification</span>

                <span>NLP Processing</span>

                <span>Content Verification</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* DASHBOARD STATS */}

      <div className="stats-section">

        <div className="stat-box">

          <h3>93%</h3>

          <p>Detection Accuracy</p>

        </div>

        <div className="stat-box">

          <h3>10K+</h3>

          <p>News Samples</p>

        </div>

        <div className="stat-box">

          <h3>ML</h3>

          <p>Prediction Model</p>

        </div>

      </div>

      {/* SNAPSHOTS */}

      <div className="news-gallery">

        <div className="gallery-heading">

          <p>PROJECT SHOWCASE</p>

          <h3>

            Dashboard & Detection Screens

          </h3>

        </div>

        <div className="news-grid">

          {screenshots.map((image, index) => (

            <motion.div

              className="news-shot"

              key={index}

              whileHover={{
                y: -8
              }}
            >

              <img
                src={image}
                alt={`News ${index + 1}`}
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FakeNewsSection;