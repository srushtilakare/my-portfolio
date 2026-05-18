import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/BackgroundGlow";
import CustomCursor from "./components/CustomCursor";
import Particles from "./components/Particles";

/* PAGES */

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import ProjectsPage from "./pages/ProjectsPage";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

function App() {

  return (

    <BrowserRouter>

      <CustomCursor />
      <Particles />
      <BackgroundGlow />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/skills"
          element={<Skills />}
        />

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        <Route
          path="/research"
          element={<Research />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;