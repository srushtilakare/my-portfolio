import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

/* COMPONENTS */

import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/BackgroundGlow";
import CustomCursor from "./components/CustomCursor";
import Particles from "./components/Particles";

/* PAGES */

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ResearchPage from "./pages/ResearchPage";
import CertificatesPage from "./pages/CertificatesPage";

/* PROJECT SECTIONS */

import FarmAISection from "./components/FarmAISection";
import FakeReviewSection from "./components/FakeReviewSection";
import FakeNewsSection from "./components/FakeNewsSection";
import PCOSSection from "./components/PCOSSection";
import PotholeSection from "./components/PotholeSection";

function App() {

  return (

    <BrowserRouter>

      <CustomCursor />
      <Particles />
      <BackgroundGlow />
      <Navbar />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* SKILLS */}

        <Route
          path="/skills"
          element={<Skills />}
        />

        {/* PROJECTS MAIN */}

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        {/* INDIVIDUAL PROJECTS */}

        <Route
          path="/projects/farmai"
          element={<FarmAISection />}
        />

        <Route
          path="/projects/fake-review"
          element={<FakeReviewSection />}
        />

        <Route
          path="/projects/fake-news"
          element={<FakeNewsSection />}
        />

        <Route
          path="/projects/pcos"
          element={<PCOSSection />}
        />

        <Route
          path="/projects/pothole"
          element={<PotholeSection />}
        />

        {/* RESEARCH */}

        <Route
          path="/research"
          element={<ResearchPage />}
        />

        {/* CERTIFICATES */}

        <Route
          path="/certificates"
          element={<CertificatesPage />}
        />

        {/* CONTACT */}

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;