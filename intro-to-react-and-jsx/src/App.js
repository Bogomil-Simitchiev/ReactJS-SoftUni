import Section from "./components/Section";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import SkillsSection from "./components/SkillsSection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      <Header />
      <Section />
      <About photoPath="assets/images/about/profile_image.jpg" />
      <Education />
      <SkillsSection />
      <Experience />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;