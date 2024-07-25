import "./App.css";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Footer from "./components/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    return (
        <div>
            <Sidenav />
            <Main />
            <AboutMe />
            <Education />
            {/* <Work /> */}
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
