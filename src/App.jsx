import "./App.css";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";

function App() {
    return (
        <div>
            <Sidenav />
            <Main />
            <AboutMe />
            <Education />
            <Work />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
