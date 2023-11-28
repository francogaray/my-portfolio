import ProjectItem from "./ProjectItem";
import ReactImg from "../assets/download.jpeg";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Projects
            </h1>
            <p className="text-center py-8">
                He participado en la realización de diversos proyectos.
                <br />
                Algunos fueron realizados de manera indivudual y otros en su
                mayoría fueron desarrllados en grupo y equipos de trabajo bajo
                la metodología ágil SCRUM
                <br />
                En la mayoría de ellos se utilizan las tecnologías abajo
                mensionadas como HTML5, CSS, JAVASCRIPT, REACT, NODE, etc...
                <br />
                En cada uno de ellos encontrarás un link al sitio en producción como tabién al repositorio!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={ReactImg} title="Project X" />
                <ProjectItem img={ReactImg} title="Project X" />
                <ProjectItem img={ReactImg} title="Project X" />
                <ProjectItem img={ReactImg} title="Project X" />
            </div>
        </div>
    );
};

export default Projects;
