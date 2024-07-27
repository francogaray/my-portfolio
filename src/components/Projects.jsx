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

const projects = [
    {
        img: pokeapi,
        link: "https://github.com/francogaray/pokedex-app.git",
        title: "Pokedex-app",
        badges: [
            // Frameworks y Librerías
            "https://flat.badgen.net/badge/color/React%20Native/007fff?label", // React Native
            "https://flat.badgen.net/badge/color/Expo/000020?label", // Expo
            "https://flat.badgen.net/badge/color/CSS/1572b6?label", // CSS
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
        ],
    },
    {
        img: valkystore,
        link: "https://github.com/francogaray/",
        title: "Valky store",
        badges: [
            // Frameworks y Librerías
            "https://flat.badgen.net/badge/color/Bootstrap/6f42c1?label", // Bootstrap
            "https://flat.badgen.net/badge/color/React/61dafb?label", // React
            "https://flat.badgen.net/badge/color/Tailwind%20CSS/38bdf8?label", // Tailwind CSS
            "https://flat.badgen.net/badge/color/Vite/646cff?label", // Vite

            "https://flat.badgen.net/badge/color/HTML/e34f26?label", // HTML
            "https://flat.badgen.net/badge/color/CSS/1572b6?label", // CSS
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
            "https://flat.badgen.net/badge/color/Sass/c69?label", // Sass
        ],
    },
    {
        img: gameover,
        link: "https://github.com/LucasEzequielSilva/Game-Over-Final-Challenge",
        title: "Game Over",
        badges: [
            // Frameworks y Librerías
            "https://flat.badgen.net/badge/color/Bootstrap/6f42c1?label", // Bootstrap
            "https://flat.badgen.net/badge/color/Express/000000?label", // Express
            "https://flat.badgen.net/badge/color/Material%20UI/007fff?label", // Material UI
            "https://flat.badgen.net/badge/color/React/61dafb?label", // React
            "https://flat.badgen.net/badge/color/React%20Native/007fff?label", // React Native
            "https://flat.badgen.net/badge/color/Redux/764abc?label", // Redux
            "https://flat.badgen.net/badge/color/Expo/000020?label", // Expo

            // Bases de Datos
            "https://flat.badgen.net/badge/color/MongoDB/47a248?label", // MongoDB

            // Lenguajes y Herramientas
            "https://flat.badgen.net/badge/color/HTML/e34f26?label", // HTML
            "https://flat.badgen.net/badge/color/CSS/1572b6?label", // CSS
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
            "https://flat.badgen.net/badge/color/Sass/c69?label", // Sass
        ],
    },
    {
        img: pomodoro,
        link: "https://github.com/francogaray/ ",
        title: "Pomodoro-App",
        badges: [
            "https://flat.badgen.net/badge/color/React%20Native/007fff?label", // React Native
            "https://flat.badgen.net/badge/color/Expo/000020?label", // Expo
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
        ],
    },
    {
        img: ideforideas2,
        link: "https://idforideas.com/",
        title: "ID for Idea",
        badges: [
            "https://flat.badgen.net/badge/color/Bootstrap/6f42c1?label", // Bootstrap
            "https://flat.badgen.net/badge/color/MySQL/4479a1?label", // MySQL
            "https://flat.badgen.net/badge/color/HTML/e34f26?label", // HTML
            "https://flat.badgen.net/badge/color/CSS/1572b6?label", // CSS
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/Express/000000?label", // Express
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
        ],
    },
    {
        img: caloriecounter,
        link: "https://github.com/francogaray/calories-counter-app.git",
        title: "Calorie counter",
        badges: [
            "https://flat.badgen.net/badge/color/Expo/000020?label", // Expo
            "https://flat.badgen.net/badge/color/Redux/764abc?label", // Redux

            "https://flat.badgen.net/badge/color/React%20Native/007fff?label", // React Native
            "https://flat.badgen.net/badge/color/CSS/1572b6?label", // CSS
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/TypeScript/007ACC?label", // TypeScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
        ],
    },
    {
        img: idforideas,
        link: "https://idforideas.com/",
        title: "EmploID",
        badges: [
            "https://flat.badgen.net/badge/color/Bootstrap/6f42c1?label", // Bootstrap
            "https://flat.badgen.net/badge/color/MySQL/4479a1?label", // MySQL
            "https://flat.badgen.net/badge/color/HTML/e34f26?label", // HTML
            "https://flat.badgen.net/badge/color/CSS/1572b6?label", // CSS
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/Express/000000?label", // Express
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
        ],
    },
    {
        img: nasapic,
        link: "https://github.com/francogaray/nasa-pic-of-day.git",
        title: "Nasa pic of day",
        badges: [
            // Frameworks y Librerías
            "https://flat.badgen.net/badge/color/Expo/000020?label", // Expo
            "https://flat.badgen.net/badge/color/React%20Native/007fff?label", // React Native
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/TypeScript/007ACC?label", // TypeScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
        ],
    },
    {
        img: trexal,
        link: "https://www.trexal.com.ar/",
        title: "Trexal",
        badges: [
            // Frameworks y Librerías
            "https://flat.badgen.net/badge/color/React/61dafb?label", // React
            "https://flat.badgen.net/badge/color/Tailwind%20CSS/38bdf8?label", // Tailwind CSS
            "https://flat.badgen.net/badge/color/Vite/646cff?label", // Vite

            // Lenguajes y Herramientas
            "https://flat.badgen.net/badge/color/HTML/e34f26?label", // HTML
            "https://flat.badgen.net/badge/color/CSS/1572b6?label", // CSS
            "https://flat.badgen.net/badge/color/JavaScript/f7df1e?label", // JavaScript
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/Node.js/339933?label", // Node.js
            "https://flat.badgen.net/badge/color/npm/cb3837?label", // npm
        ],
    },
    {
        img: studiocraft,
        link: "https://studiocraft.com.ar/",
        title: "Studiocraft",
        badges: [
            "https://flat.badgen.net/badge/color/MongoDB/47a248?label", // MongoDB
            "https://flat.badgen.net/badge/color/HTML/e34f26?label", // HTML
            "https://flat.badgen.net/badge/color/CSS/1572b6?label", // CSS
            "https://flat.badgen.net/badge/color/Terminal/563d7c?label", // Terminal
            "https://flat.badgen.net/badge/color/WordPress/21759b?label", //
            "https://flat.badgen.net/badge/color/Git/f05032?label", // Git
        ],
    },
];

const Projects = () => {
    return (
        <div id="projects" className=" bg-white m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#c81e37] m-6">
                Proyectos
            </h1>
            <div className="grid sm:grid-cols-3 gap-16 p-5">
                {projects.map((project, idx) => (
                    <ProjectItem
                        key={idx}
                        img={project.img}
                        link={project.link}
                        title={project.title}
                        badges={project.badges}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
