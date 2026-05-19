import { useState } from "react";
import "../styles/certificates.css";

const certificates = [

  // ================= FEATURED =================

  {
    id: 1,
    title: "FarmAI Research Presentation",
    category: "Research",
    badge: "International Research Presenter",
    year: "2026",
    description:
      "Presented AI-driven smart agriculture research paper at an international conference based on FarmAI project.",
    skills: [
      "Artificial Intelligence",
      "Agriculture AI",
      "Research",
      "CNN"
    ],
    image: "/certificates/farmai.png",
    featured: true,
  },

  {
    id: 2,
    title: "Government Copyright Registration",
    category: "Copyright",
    badge: "Government Registered Innovation",
    year: "2025",
    description:
      "Successfully received Government of India copyright registration for System Level Backup Utility project.",
    skills: [
      "Innovation",
      "System Design",
      "Python",
      "Streamlit"
    ],
    image: "/certificates/copyright.png",
    featured: true,
  },

  {
    id: 3,
    title: "IEEE Research Publication",
    category: "Research",
    badge: "IEEE Published Author",
    year: "2023",
    description:
      "Published research paper on blockchain-based privacy and trust mechanisms in edge and cloud computing.",
    skills: [
      "Blockchain",
      "Cloud Computing",
      "Research",
      "IEEE"
    ],
    image: "/certificates/ieee.png",
    link: "https://ieeexplore.ieee.org/document/10449566",
    featured: true,
  },

  // ================= INFOSYS =================

  {
    id: 4,
    title: "Infosys Pragati – AI Foundations",
    category: "Infosys Springboard",
    badge: "AI Foundation Certificate",
    year: "2025",
    description:
      "Completed AI Foundations module covering Artificial Intelligence, Deep Learning, and NLP fundamentals.",
    skills: [
      "Artificial Intelligence",
      "NLP",
      "Deep Learning"
    ],
    image: "/certificates/infosys-ai.png",
  },

  {
    id: 5,
    title: "Infosys Pragati – Personality Development",
    category: "Infosys Springboard",
    badge: "Leadership & Communication",
    year: "2025",
    description:
      "Completed leadership and personality development module focused on confidence, teamwork, communication, and leadership.",
    skills: [
      "Leadership",
      "Communication",
      "Confidence",
      "Teamwork"
    ],
    image: "/certificates/infosys-softskills.png",
  },

  {
    id: 6,
    title: "Infosys Pragati – Java & Python",
    category: "Infosys Springboard",
    badge: "Programming Foundations",
    year: "2025",
    description:
      "Completed Java and Python foundations including DSA, OOP, and programming fundamentals.",
    skills: [
      "Java",
      "Python",
      "DSA",
      "OOP"
    ],
    image: "/certificates/infosys-python.png",
  },

  {
    id: 7,
    title: "Infosys Pune DC Experience",
    category: "Infosys Springboard",
    badge: "5-Day Campus Experience",
    year: "2024",
    description:
      "Participated in immersive on-campus learning sessions at Infosys Pune Development Center.",
    skills: [
      "Presentation",
      "Interview Skills",
      "Leadership",
      "Emerging Technologies"
    ],
    image: "/certificates/infosys-pune.png",
  },

  // ================= NPTEL =================

  {
    id: 8,
    title: "NPTEL – Industry 4.0 & IIOT",
    category: "NPTEL",
    badge: "Elite + Topper",
    year: "2025",
    description:
      "Successfully completed NPTEL certification on Industry 4.0 and Industrial Internet of Things.",
    skills: [
      "IIOT",
      "Industry 4.0",
      "Automation",
      "Smart Systems"
    ],
    image: "/certificates/nptel-iiot.png",
  },

  {
    id: 9,
    title: "NPTEL – Project Management",
    category: "NPTEL",
    badge: "IIT Kanpur Certified",
    year: "2025",
    description:
      "Successfully completed NPTEL Project Management certification conducted by IIT Kanpur.",
    skills: [
      "Project Management",
      "Planning",
      "Execution"
    ],
    image: "/certificates/nptel-pm.png",
  },

  {
    id: 10,
    title: "NPTEL – Cloud Computing",
    category: "NPTEL",
    badge: "Elite",
    year: "2024",
    description:
      "Completed NPTEL Cloud Computing certification with Elite grade.",
    skills: [
      "Cloud Computing",
      "Distributed Systems",
      "Virtualization"
    ],
    image: "/certificates/nptel-cloud.png",
  },

  // ================= HACKATHONS =================

  {
    id: 11,
    title: "SheInspires Women Hackathon",
    category: "Hackathon",
    badge: "Women in Tech",
    year: "2025",
    description:
      "Participated in women-focused AI and innovation hackathon organized with AWS and Zensar Technologies.",
    skills: [
      "Hackathon",
      "AWS",
      "Innovation",
      "AI"
    ],
    image: "/certificates/sheinspires.png",
  },

  {
    id: 12,
    title: "Tech Pragyan 2025",
    category: "Hackathon",
    badge: "National Level Hackathon",
    year: "2025",
    description:
      "Participated in national-level hackathon organized with IEEE collaboration.",
    skills: [
      "Hackathon",
      "IEEE",
      "Teamwork",
      "Problem Solving"
    ],
    image: "/certificates/techpragyan.png",
  },

];

function CertificatesPage() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (

    <div className="certificates-page">

      <div className="certificates-grid"></div>

      {/* HERO SECTION */}

      <div className="certificates-hero">

        <p className="certificates-tag">
          RESEARCH • CERTIFICATIONS • ACHIEVEMENTS
        </p>

        <h1>
          Achievement Vault 🏆
        </h1>

        <p>
          A collection of my research publications,
          certifications, hackathons, AI learning journey,
          and innovation milestones.
        </p>

      </div>

      {/* CERTIFICATES */}

      <div className="certificates-container">

        {

          certificates.map((item) => (

            <div
              className={`certificate-card ${item.featured ? "featured-card" : ""}`}
              key={item.id}
            >

              <div
                className="certificate-image"
                onClick={() => setSelectedImage(item.image)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="certificate-content">

                <div className="certificate-top">

                  <span className="certificate-category">
                    {item.category}
                  </span>

                  <span className="certificate-year">
                    {item.year}
                  </span>

                </div>

                <h2>
                  {item.title}
                </h2>

                <div className="certificate-badge">
                  {item.badge}
                </div>

                <p>
                  {item.description}
                </p>

                <div className="skills-container">

                  {

                    item.skills.map((skill, index) => (

                      <span
                        key={index}
                        className="skill-tag"
                      >
                        {skill}
                      </span>

                    ))

                  }

                </div>

                {

                  item.link && (

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="view-btn"
                    >
                      View Publication →
                    </a>

                  )

                }

              </div>

            </div>

          ))

        }

      </div>

      {/* IMAGE POPUP */}

      {

        selectedImage && (

          <div
            className="image-popup"
            onClick={() => setSelectedImage(null)}
          >

            <img
              src={selectedImage}
              alt="certificate"
            />

          </div>

        )

      }

    </div>

  );

}

export default CertificatesPage;