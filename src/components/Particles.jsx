import "../styles/particles.css";

function Particles() {

  const particles = Array.from({ length: 30 });

  return (
    <div className="particles-container">

      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
        ></span>
      ))}

    </div>
  );
}

export default Particles;