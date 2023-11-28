import WorkItem from "./WorkItem";
import SkillItem from "./SkillItem";
import { GoTools } from "react-icons/go";
const data = [
    {
        year: 2022,
        title: "CoderHouse",
        duration: "07-2022 - Atctualidad",
        description: `Tutor en los cursos de "Desarrollo Web", "React", "Backend con NodeJs"`,
    },
    {
        year: 2022,
        title: "Argentina Programa",
        duration: "11-2022 - 03-2023",
        description: "Mentor Jr Frontend (desarrollo web, Javascript, VueJs)",
    },
    {
        year: 2022,
        title: "Xcapit",
        duration: "08-2022 - 12 - 2022",
        description: "Pasantías como QA Tester",
    },
];

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Work
            </h1>
            <div>
                <p>
                    Luego de mis capacitaciones pude poner en práctica todo lo
                    aprendido en diferentes proyectos.
                    <br />
                    Realicé pasantías como Tester QA poniendo en práctiac
                    metodolías agiles (SCRUM).
                    <br />
                    También desempeñé el rol como Mentor y Tutor, brindando
                    clases, workshops y seguimiento a los alumnos como asi
                    también corrigiendo trabajos y realizando devoluciones de
                    los proyectos realizados
                </p>
            </div>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    description={item.description}
                />
            ))}
            <div className=" w-[90%] flex flex-col items-center border ]  rounded-lg p-6 ">
                <div className="flex  text-[#001B5E] justify-center items-center ">
                    <h2 className="inline-block px-2 py-1 text-3xl  ">
                        Skills{" "}
                    </h2>
                    <GoTools size={30} />
                </div>

                <SkillItem />
            </div>
        </div>
    );
};

export default Work;
