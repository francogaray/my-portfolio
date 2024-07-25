import ProjectItem from "./ProjectItem";
import caloriecounter from "../assets/projects/caloriecounter.png";
import gameover from "../assets/projects/gameover.png";
import ideforideas2 from "../assets/projects/idforideas2.png";
import idforideas from "../assets/projects/idforideas.png";
import nasapic from "../assets/projects/nasapic.png";
import pokeapi from "../assets/projects/pokeapi.png";
import pomodoro from "../assets/projects/pomodoro.png";
import valkystore from "../assets/projects/valkystore.png";
import studiocraft from "../assets/projects/studiocraft.png";
import trexal from "../assets/projects/trexal.png";

const Projects = () => {
    return (
        <div id="projects" className=" bg-white m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#c81e37] m-6">
                Proyectos
            </h1>
            <div className="grid sm:grid-cols-3 gap-16 p-5">
                <ProjectItem
                    img={pokeapi}
                    link={"https://github.com/francogaray/pokedex-app.git"}
                    title="Pokedex-app"
                />
                <ProjectItem
                    img={valkystore}
                    link={"https://github.com/francogaray/"}
                    title="Valky store"
                />
                <ProjectItem
                    img={gameover}
                    link={
                        "https://github.com/LucasEzequielSilva/Game-Over-Final-Challenge"
                    }
                    title="Game Over"
                />
                <ProjectItem
                    img={pomodoro}
                    link={"https://github.com/francogaray/ "}
                    title="Pomodoro-App"
                />
                <ProjectItem
                    img={ideforideas2}
                    link={"https://github.com/francogaray/"}
                    title="ID for Idea"
                />
                <ProjectItem
                    img={caloriecounter}
                    link={
                        "https://github.com/francogaray/calories-counter-app.git"
                    }
                    title="Calorie counter"
                />
                <ProjectItem
                    img={idforideas}
                    link={"https://github.com/francogaray/"}
                    title="EmploID"
                />
                <ProjectItem
                    img={nasapic}
                    link={"https://github.com/francogaray/nasa-pic-of-day.git"}
                    title="Nasa pic of day"
                />
                <ProjectItem
                    img={trexal}
                    link={"https://www.trexal.com.ar/"}
                    title="Trexal"
                />
                <ProjectItem
                    img={studiocraft}
                    link={"https://studiocraft.com.ar/"}
                    title="Studiocraft"
                />
            </div>
        </div>
    );
};

export default Projects;
