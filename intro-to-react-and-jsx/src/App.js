import Section from "./components/Section";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <div>

      <Header />
      <Section />
      <About photoPath="assets/images/about/profile_image.jpg"/>
      <Education />

    </div>
  );
}

export default App;