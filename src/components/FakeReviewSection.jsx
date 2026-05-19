import "../styles/fakeReview.css";

import { motion } from "framer-motion";

/* IMAGES */

import review1 from "../assets/fakeReview/review1.png";
import review2 from "../assets/fakeReview/review2.png";
import review3 from "../assets/fakeReview/review3.png";
import review4 from "../assets/fakeReview/review4.png";
import review5 from "../assets/fakeReview/review5.png";
import review6 from "../assets/fakeReview/review6.png";
import review7 from "../assets/fakeReview/review7.png";
import review8 from "../assets/fakeReview/review8.png";
import review9 from "../assets/fakeReview/review9.png";
import review10 from "../assets/fakeReview/review10.png";

import copyright from "../assets/fakeReview/copyright.png";

function FakeReviewSection() {

  const screenshots = [

    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10

  ];

  const technologies = [

    "React.js",
    "Flask",
    "Python",
    "NLP",
    "Naive Bayes",
    "k-NN",
    "TF-IDF",
    "Machine Learning",
    "MongoDB",
    "REST APIs"

  ];

  return (

    <section className="fake-review-section">

      {/* HEADER */}

      <div className="fake-header">

        <p>AI + NLP DETECTION SYSTEM</p>

        <h2>

          Fake Product
          <br />

          Review Detection

        </h2>

      </div>

      {/* DESCRIPTION */}

      <div className="fake-content">

        <p className="fake-description">

          An AI-powered review analysis system
          developed using Natural Language
          Processing and Machine Learning
          techniques to identify fake,
          misleading, and spam product reviews
          with intelligent sentiment and
          authenticity analysis.

        </p>

      </div>

      {/* TECH STACK */}

      <div className="tech-stack">

        {technologies.map((tech, index) => (

          <motion.div

            className="tech-box"

            key={index}

            whileHover={{
              y: -5
            }}
          >

            {tech}

          </motion.div>

        ))}

      </div>

      {/* AI SCANNER */}

      <div className="scanner-section">

        <div className="scanner-window">

          <div className="scanner-top">

            <span></span>
            <span></span>
            <span></span>

          </div>

          <div className="scanner-content">

            {/* LEFT */}

            <div className="review-panel">

              <p className="panel-title">

                Incoming Review

              </p>

              <div className="review-card">

                “Amazing product! Best purchase
                ever! Totally worth buying!!
                Highly recommended!!”

              </div>

              <div className="scan-line"></div>

            </div>

            {/* RIGHT */}

            <div className="analysis-panel">

              <p className="panel-title">

                AI Analysis

              </p>

              <div className="analysis-box">

                <span>Spam Probability</span>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                  ></div>

                </div>

                <h3>91% Fake</h3>

              </div>

              <div className="analysis-tags">

                <span>Repeated Words</span>

                <span>Emotion Bias</span>

                <span>Promotional Tone</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="certificate-section">

        <div className="certificate-content">

          <p className="certificate-tag">

            GOVERNMENT RECOGNITION

          </p>

          <h3>

            Copyright Registered
            AI Innovation

          </h3>

          <p className="certificate-description">

            This project received official
            copyright registration, showcasing
            originality, innovation, and
            real-world impact in the field of
            Artificial Intelligence and NLP.

          </p>

          <div className="certificate-badge">

            ✔ Government Registered

          </div>

        </div>

        <motion.div

          className="certificate-image"

          whileHover={{
            y: -8
          }}
        >

          <img
            src={copyright}
            alt="Copyright Certificate"
          />

        </motion.div>

      </div>

      {/* SCREENSHOTS */}

      <div className="review-gallery">

        <div className="gallery-title">

          <p>PROJECT SHOWCASE</p>

          <h3>

            Detection System Snapshots

          </h3>

        </div>

        <div className="review-grid">

          {screenshots.map((image, index) => (

            <motion.div

              className="review-shot"

              key={index}

              whileHover={{
                y: -8
              }}
            >

              <img
                src={image}
                alt={`Review ${index + 1}`}
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FakeReviewSection;