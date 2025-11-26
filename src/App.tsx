import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navigation } from "./components/Navigation";

function MainPage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Navigation />
      <About />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-[#F5F3F0]">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}