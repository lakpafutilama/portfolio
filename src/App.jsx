import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Me } from "./Components/Me/Me";
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Me />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
