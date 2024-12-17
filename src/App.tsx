import About from "./components/About";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

function App() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}

export default App;
