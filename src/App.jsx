import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/BackgroundGlow";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import Particles from "./components/Particles";
import Terminal from "./sections/Terminal";

function App() {
  return (
    <>
      <CustomCursor />
      <Particles />
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <Terminal />
    </>
  );
}

export default App;