import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/BackgroundGlow";
import CustomCursor from "./components/CustomCursor";
import Particles from "./components/Particles";
import ResearchPage from "./pages/ResearchPage";

/* PAGES */

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import ContactPage from "./pages/ContactPage";

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
          path="/contact"
          element={<ContactPage />}
        />

<Route path="/research" element={<ResearchPage />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;