import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/BackgroundGlow";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import Particles from "./components/Particles";

function App() {
  return (
    <>
      <CustomCursor />
      <Particles />
      <BackgroundGlow />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;