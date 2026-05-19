import "../styles/pothole.css";

import { motion } from "framer-motion";

import demoVideo from "../assets/pothole/demo.mp4";

function PotholeSection() {

  const features = [

    "YOLOv8 Training",
    "YOLOv26 Optimization",
    "mAP Performance Analysis",
    "Real-Time Detection",
    "Video Upload Detection",
    "Live Camera Detection",
    "Computer Vision Pipeline",
    "Smart Road Monitoring"

  ];

  return (

    <section className="pothole-section">

      {/* HEADER */}

      <div className="pothole-header">

        <p>COMPUTER VISION + SMART CITY AI</p>

        <h2>

          AI-Based Pothole
          <br />

          Detection System

        </h2>

      </div>

      {/* DESCRIPTION */}

      <div className="pothole-description">

        <p>

          A real-time AI-powered pothole
          detection platform developed using
          advanced YOLO object detection
          models for intelligent road damage
          identification. The system supports
          both live camera detection and
          uploaded video analysis for smart
          transportation and road safety
          applications.

        </p>

      </div>

      {/* MODEL COMPARISON */}

      <div className="model-comparison">

        {/* YOLOV8 */}

        <motion.div

          className="comparison-card"

          whileHover={{
            y: -8
          }}
        >

          <div className="model-badge">

            BASE MODEL

          </div>

          <h3>YOLOv8</h3>

          <div className="accuracy-box">

            mAP 78%

          </div>

          <p>

            Initially trained using YOLOv8
            for pothole object detection and
            road damage recognition with
            strong baseline performance.

          </p>

          <div className="comparison-tags">

            <span>Object Detection</span>
            <span>Baseline Model</span>
            <span>Road Analysis</span>

          </div>

        </motion.div>

        {/* YOLOV26 */}

        <motion.div

          className="comparison-card active-model"

          whileHover={{
            y: -8
          }}
        >

          <div className="model-badge best">

            FINAL MODEL

          </div>

          <h3>YOLOv26</h3>

          <div className="accuracy-box improved">

            mAP 80%

          </div>

          <p>

            Improved and optimized detection
            accuracy using YOLOv26 with
            enhanced real-time performance,
            better object localization,
            and higher detection precision.

          </p>

          <div className="comparison-tags">

            <span>Optimized AI</span>
            <span>High Accuracy</span>
            <span>Real-Time Detection</span>

          </div>

        </motion.div>

      </div>

      {/* DETECTION MODES */}

      <div className="detection-modes">

        <div className="mode-card">

          <div className="mode-number">

            01

          </div>

          <h4>Live Camera Detection</h4>

          <p>

            Detect potholes in real-time
            directly through live camera
            feed using optimized YOLOv26
            object detection.

          </p>

        </div>

        <div className="mode-card">

          <div className="mode-number">

            02

          </div>

          <h4>Video Upload Detection</h4>

          <p>

            Upload recorded road footage
            and automatically analyze
            potholes frame-by-frame using
            AI detection models.

          </p>

        </div>

      </div>

      {/* FEATURES */}

      <div className="pothole-features">

        {features.map((feature, index) => (

          <motion.div

            className="pothole-feature"

            key={index}

            whileHover={{
              y: -5
            }}
          >

            <div className="feature-light"></div>

            <p>{feature}</p>

          </motion.div>

        ))}

      </div>

      {/* VIDEO SHOWCASE */}

      <div className="video-showcase">

        <div className="video-header">

          <p>LIVE DETECTION SHOWCASE</p>

          <h3>

            Real-Time AI Detection Output

          </h3>

        </div>

        <motion.div

          className="video-container"

          whileHover={{
            scale: 1.01
          }}
        >

<video
  className="demo-video"
  controls
  muted
  loop
  playsInline
  preload="auto"
>
  <source src={demoVideo} type="video/mp4" />

  Your browser does not support the video tag.

</video>

        </motion.div>

      </div>

      {/* ANALYTICS */}

      <div className="pothole-analytics">

        <div className="analytics-box">

          <h3>80%</h3>

          <p>Detection mAP</p>

        </div>

        <div className="analytics-box">

          <h3>YOLO</h3>

          <p>Computer Vision Model</p>

        </div>

        <div className="analytics-box">

          <h3>AI</h3>

          <p>Smart Road Monitoring</p>

        </div>

      </div>

    </section>

  );
}

export default PotholeSection;