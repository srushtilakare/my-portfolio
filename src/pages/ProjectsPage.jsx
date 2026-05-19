import "../styles/projectsPage.css";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import farmaiImg from "../assets/projects/farmai.png";
import fakeReviewImg from "../assets/projects/fake-reviews.png";
import fakeNewsImg from "../assets/projects/fake-news.png";
import pcosImg from "../assets/projects/pcos.png";
import potholeImg from "../assets/projects/pothole.png";

const projects = [
  {
    title: "FarmAI",
    subtitle: "AI Smart Agriculture Ecosystem",
    image: farmaiImg,
    tech: ["AI", "CNN", "MERN", "IoT"],
    route: "/projects/farmai",
  },

  {
    title: "Fake Review Detection",
    subtitle: "NLP + ML Fraud Detection",
    image: fakeReviewImg,
    tech: ["NLP", "Flask", "React", "ML"],
    route: "/projects/fake-review",
  },

  {
    title: "Fake News Detection",
    subtitle: "AI Powered News Verification",
    image: fakeNewsImg,
    tech: ["NLP", "Python", "AI"],
    route: "/projects/fake-news",
  },

  {
    title: "PCOS Prediction",
    subtitle: "Healthcare AI Prediction System",
    image: pcosImg,
    tech: ["Machine Learning", "Healthcare", "Python"],
    route: "/projects/pcos",
  },

  {
    title: "Pothole Detection",
    subtitle: "Computer Vision Road Analysis",
    image: potholeImg,
    tech: ["YOLO", "OpenCV", "Deep Learning"],
    route: "/projects/pothole",
  },
];

function ProjectsPage() {
  return (
    <div className="projects-page">

      <div className="projects-hero">

        <p className="projects-tag">
          AI • FULL STACK • RESEARCH • INNOVATION
        </p>

        <h1>
          Featured Projects 🚀
        </h1>

        <p>
          A collection of AI-powered systems, research projects,
          full-stack applications, and innovative solutions.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.subtitle}</p>

              <div className="project-tech">

                {project.tech.map((tech, i) => (

                  <span key={i}>
                    {tech}
                  </span>

                ))}

              </div>

              <Link
                to={project.route}
                className="project-btn"
              >
                View Project →
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProjectsPage;