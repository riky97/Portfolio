import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TelemetryDivider } from "./components/TelemetryDivider";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TelemetryDivider />
        <About />
        <TelemetryDivider />
        <Skills />
        <TelemetryDivider />
        <Experience />
        <TelemetryDivider />
        <Education />
        <TelemetryDivider />
        <Projects />
        <TelemetryDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
