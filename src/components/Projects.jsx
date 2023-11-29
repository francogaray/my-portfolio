import ProjectItem from "./ProjectItem";
import ReactImg from "../assets/react-native.png";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Projects
            </h1>
            <p className="text-center py-8">
                He participado en la realización de diversos proyectos.
                <br />
                Algunos fueron realizados de manera individual y otros en su
                mayoría fueron desarrollados en grupo y equipos de trabajo bajo
                la metodología ágil SCRUM
                <br />
                En la mayoría de ellos se utilizan las tecnologías abajo
                mencionadas como HTML5, CSS, JAVASCRIPT, REACT, NODE, etc.
                <br />
                En cada uno de ellos encontrarás un link al repositorio con más información!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={ReactImg} link={'https://github.com/francogaray/pokedex-app.git'} title="Pokedex-app" />
                <ProjectItem img={ReactImg} link={'https://github.com/francogaray/calories-counter-app.git'} title="Calorie counter" />
                <ProjectItem img={ReactImg} link={'https://github.com/francogaray/nasa-pic-of-day.git'} title="Nasa pic of day" />
                <ProjectItem img={ReactImg} link={'https://github.com/francogaray/ '} title="Pomodoro-App" />
            </div>
        </div>
    );
};

export default Projects;
