import "../styles/pcos.css";

import { motion } from "framer-motion";

function PCOSSection() {

  const features = [

    "Random Forest Prediction",
    "YOLO Ultrasound Detection",
    "Medical Report Generation",
    "Downloadable Reports",
    "Detection Analytics",
    "Patient Profile System",
    "Healthcare Dashboard",
    "AI-Based Diagnosis"

  ];

  return (

    <section className="pcos-section">

      {/* HEADER */}

      <div className="pcos-header">

        <p>AI + HEALTHCARE SYSTEM</p>

        <h2>

          PCOS Detection
          <br />

          & Analysis Platform

        </h2>

      </div>

      {/* DESCRIPTION */}

      <div className="pcos-description">

        <p>

          An AI-powered healthcare platform
          designed for intelligent PCOS
          detection using both structured
          medical inputs and ultrasound image
          analysis. The system combines
          Machine Learning and Computer Vision
          models to provide accurate diagnosis,
          downloadable reports, analytics,
          and patient management features.

        </p>

      </div>

      {/* DUAL MODEL */}

      <div className="model-system">

        {/* MODEL 1 */}

        <motion.div

          className="model-card"

          whileHover={{
            y: -8
          }}
        >

          <div className="model-number">

            MODEL 01

          </div>

          <h3>

            Random Forest
            Prediction Model

          </h3>

          <p>

            Uses manual medical parameters
            and patient health inputs to
            predict whether PCOS is detected
            or not using a trained Random
            Forest Machine Learning model.

          </p>

          <div className="model-tags">

            <span>Machine Learning</span>
            <span>Structured Data</span>
            <span>Prediction Analysis</span>

          </div>

        </motion.div>

        {/* MODEL 2 */}

        <motion.div

          className="model-card"

          whileHover={{
            y: -8
          }}
        >

          <div className="model-number">

            MODEL 02

          </div>

          <h3>

            YOLO Ultrasound
            Detection System

          </h3>

          <p>

            Detects PCOS through ultrasound
            scan image analysis using the
            YOLO object detection model for
            intelligent medical image-based
            diagnosis and abnormality
            detection.

          </p>

          <div className="model-tags">

            <span>YOLO</span>
            <span>Computer Vision</span>
            <span>Medical Imaging</span>

          </div>

        </motion.div>

      </div>

      {/* AI WORKFLOW */}

      <div className="workflow-section">

        <div className="workflow-header">

          <p>AI HEALTHCARE WORKFLOW</p>

          <h3>

            Intelligent Detection Pipeline

          </h3>

        </div>

        <div className="workflow-grid">

          <div className="workflow-card">

            <div className="workflow-icon">

              01

            </div>

            <h4>Patient Input</h4>

            <p>

              Medical data and ultrasound
              images are uploaded securely.

            </p>

          </div>

          <div className="workflow-card">

            <div className="workflow-icon">

              02

            </div>

            <h4>AI Analysis</h4>

            <p>

              ML and YOLO models process
              the data for intelligent
              prediction.

            </p>

          </div>

          <div className="workflow-card">

            <div className="workflow-icon">

              03

            </div>

            <h4>Detection Result</h4>

            <p>

              The system generates diagnosis,
              confidence analysis, and insights.

            </p>

          </div>

          <div className="workflow-card">

            <div className="workflow-icon">

              04

            </div>

            <h4>Report Generation</h4>

            <p>

              Downloadable medical reports
              and analytics are generated.

            </p>

          </div>

        </div>

      </div>

      {/* FEATURES */}

      <div className="pcos-features">

        {features.map((feature, index) => (

          <motion.div

            className="pcos-feature"

            key={index}

            whileHover={{
              y: -5
            }}
          >

            <div className="feature-pulse"></div>

            <p>{feature}</p>

          </motion.div>

        ))}

      </div>

      {/* ANALYTICS */}

      <div className="analytics-section">

        <div className="analytics-card">

          <h3>95%</h3>

          <p>Detection Accuracy</p>

        </div>

        <div className="analytics-card">

          <h3>2</h3>

          <p>AI Models Integrated</p>

        </div>

        <div className="analytics-card">

          <h3>AI</h3>

          <p>Healthcare Intelligence</p>

        </div>

      </div>

    </section>

  );
}

export default PCOSSection;