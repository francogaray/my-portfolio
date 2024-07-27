import profilePhoto from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaFileDownload } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div
            id="aboutMe"
            className="  m-auto md:pl-20 p-4 py-16 flex flex-col items-center justify-center"
        >
            <h1 className="text-4xl font-bold text-center text-black mb-10">
                Acerca de mí
            </h1>
            <div className="flex flex-col md:flex-row md:items-start items-center justify-center">
                <div className="w-full flex justify-center min-w-[200px] max-w-[400px]">
                    <img
                        className=" rounded-full shadow-2xl shadow-gray-400"
                        src={profilePhoto}
                        alt="profile photo"
                    />
                </div>
                <div className="flex flex-col justify-center items-center m-4">
                    <div className="md:mx-6">
                        <div className="flex flex-col sm:flex-row text-center pb-1">
                            <h3 className=" flex">
                                Hola! Me llamo Franco Garay y soy
                            </h3>

                            <TypeAnimation
                                sequence={[
                                    "Web Developer.",
                                    1400,
                                    // Same substring at the start will only be typed out once, initially
                                    "Mobile Developer.",
                                    1400, // wait 1s before replacing "Mice" with "Hamsters"
                                    "Freelancer.",
                                    1400,
                                    "Desarrollador Javascript.",
                                    1400,
                                    "Developer FullStack.",
                                    1400,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{
                                    fontSize: "1rem",
                                    display: "inline-block",
                                    paddingLeft: "5px",
                                    fontWeight: "bold",
                                    color: "#c81e37",
                                    textAlign: "left",
                                }}
                                repeat={Infinity}
                            />
                        </div>
                        <h3 className="pb-2">
                            Me desempeño como Desarrollador <b>Full-Stack</b>,
                            donde utilizo una variedad de tecnologías modernas
                            para brindar soluciones digitales innovadoras.
                        </h3>
                        <h3 className="pb-2">
                            Cuento con habilidades tanto en desarrollo{" "}
                            <b>frontend</b> como
                            <b> backend</b>, y también tengo experiencia en el
                            desarrollo de
                            <b> aplicaciones móviles</b>.
                        </h3>
                        <h3 className="pb-2">
                            Además, me encuentro cursando la carrera de{" "}
                            <b>Analista en Sistemas </b>, lo que me permite
                            complementar mis competencias técnicas con una base
                            teórica sólida.
                            <br />
                            <br />
                            Estoy en constante formación y busco oportunidades
                            que me permitan seguir creciendo como profesional.
                            Me sienta muy bien trabajar en equipo y poder
                            colaborar y cumplir objetivos.
                            <br />
                            <br />
                            Si quieres conocer más sobre mí te invito a
                            descargar mi CV!
                        </h3>
                    </div>
                </div>
            </div>
            <div className="bg-[#c81e37] flex justify-evenly text-gray-100 mt-6 w-full  max-w-[250px] p-4 rounded-lg cursor-pointer  shadow-2xl shadow-gray-700 ">
                <a
                    target="_blank"
                    //rel="noreferrer"
                    //href="https://drive.google.com/file/d/17JB2zXqvK1nZZrzkNntS90DEGEKiMxeI/view?usp=sharing"
                    href="./Cv-FrancoGaray-Developer.pdf"
                    className="ml-2 text-2xl font-bold "
                    download
                >
                    Descargar CV
                </a>
                <FaFileDownload className=" cursor-pointer" size={30} />
            </div>
        </div>
    );
};

export default AboutMe;
