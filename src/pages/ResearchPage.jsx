import "../styles/research.css";

const researchPapers = [
  {
    id: 1,
    title:
      "Enhancing Trust and Privacy in Edge and Cloud Computing Through Blockchain Technology",

    type: "IEEE Publication",

    year: "2024",

    status: "Published",

    description:
      "This research explores how blockchain technology can improve trust, privacy, and security in edge and cloud computing environments using decentralized cryptographic systems.",

    tech: [
      "Blockchain",
      "Cloud Computing",
      "Edge Computing",
      "Cryptography",
      "Security",
    ],

    achievements: [
      "IEEE Published",
      "6 Citations",
      "Indexed Research",
      "2nd Year Engineering Research",
    ],

    link: "https://ieeexplore.ieee.org/document/10449566",

    glow: "#00f0ff",
  },

  {
    id: 2,

    title:
      "AI Smart Agriculture Platform for Crop Health Monitoring and Personalized Farm Advisory",

    type: "International Conference Research",

    year: "2026",

    status: "Presented",

    description:
      "An AI-powered smart agriculture research project focused on crop disease detection, smart advisory systems, weather intelligence, and personalized farming recommendations.",

    tech: [
      "Artificial Intelligence",
      "CNN",
      "Deep Learning",
      "Computer Vision",
      "MERN Stack",
    ],

    achievements: [
      "International Conference",
      "FarmAI Research",
      "AI Agriculture Innovation",
      "Presented on 30 Jan 2026",
    ],

    certificate: "/certificate.jpg",

    glow: "#7b2ff7",
  },
];

function ResearchPage() {
  return (
    <div className="research-page">
      <div className="research-stars"></div>

      <div className="research-hero">
        <p className="research-tag">
          RESEARCH • PUBLICATIONS • INNOVATION
        </p>

        <h1>
          Researching The Future
          <br />
          With AI & Emerging Technologies
        </h1>

        <p className="research-subtitle">
          Transforming ideas into impactful research and intelligent systems.
        </p>
      </div>

      <div className="research-stats">
        <div className="research-stat-card">
          <h2>2+</h2>
          <p>Research Works</p>
        </div>

        <div className="research-stat-card">
          <h2>IEEE</h2>
          <p>Publication</p>
        </div>

        <div className="research-stat-card">
          <h2>2026</h2>
          <p>Conference Presentation</p>
        </div>

        <div className="research-stat-card">
          <h2>AI</h2>
          <p>Research Focus</p>
        </div>
      </div>

      <div className="research-container">
        {researchPapers.map((paper) => (
          <div
            className="research-card"
            key={paper.id}
            style={{
              boxShadow: `0 0 40px ${paper.glow}20`,
            }}
          >
            <div className="research-top">
              <span className="research-type">{paper.type}</span>

              <span className="research-year">{paper.year}</span>
            </div>

            <h2>{paper.title}</h2>

            <p className="research-description">{paper.description}</p>

            <div className="research-tech">
              {paper.tech.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>

            <div className="research-achievements">
              {paper.achievements.map((item, index) => (
                <div key={index} className="achievement-card">
                  ✨ {item}
                </div>
              ))}
            </div>

            {paper.link && (
              <a
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                className="research-button"
              >
                View IEEE Paper →
              </a>
            )}

            {paper.certificate && (
              <div className="certificate-showcase">
                <img
                  src={paper.certificate}
                  alt="Research Certificate"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchPage;