import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Me } from "./Components/Me/Me";
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
// import { Contact } from "./Components/Contact/Contact";
// import { Projects } from "./Components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Me />
      <About />
      <Experience />
      {/* <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
