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

function App() {

  return (

    <BrowserRouter>

      <CustomCursor />
      <Particles />
      <BackgroundGlow />
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

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
          element={<ResearchPage />}
        />

        <Route
          path="/certificates"
          element={<CertificatesPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;