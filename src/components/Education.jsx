import CarouselCard from "./CarrouselCard";
import { PiCertificate } from "react-icons/pi";
import BootcampPic from '../assets/bootcamp.jpeg'
const AboutMe = () => {
    return (
        <div
            id="education"
            className="max-w-[1040px] min-h-fit m-auto md:pl-20 p-4 py-16 flex flex-col justify-center items-center 
            
            "
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-5">
                    Education
                </h1>
                <div className="flex flex-col md:flex-row justify-evenly items-center my-4 p-6">
                    <div className="md:w-[40%] mb-6">
                        <img
                            className="rounded-lg"
                            src={BootcampPic}
                            alt="Mindhub"
                        />
                    </div>
                    <p className="md:w-[40%]">
                        Comencé a estudiar programación en el 2020 de manera autodidacta motivado por la curiosidad y explorar el mundo IT.
                        <br />
                        <br />
                        A comienzos del 2022 cursé el Bootcamp de Mindhub.
                        Egresé como Full Stack Developer MERN & Mobile Apps.
                        <br />
                        <br />
                        Me inscribí en el ISPC (instituto superior politécnico Córdoba) en la carrera técnica de programador. Pero opté por continuar mi formación a través de Platzi apuntando a especializar mi perfil con tecnologías y herramientas específicas.
                        <br />
                        <br />
                        Actualmente sigo en constante aprendizaje, desarrollando nuevas habilidades y mejorando mi Inglés. Reforzando y poniendo en práctica todo lo aprendido en estos cortos pero intensivos años.
                        <br />
                        <br />
                    </p>
                </div>
            </div>
            <div className="w-[90%] pr-4 flex flex-col items-center border ]  rounded-lg p-6">
                <div className="flex text-[#001B5E] justify-center items-center ">
                    <h2 className="inline-block px-2 py-1 text-3xl ">
                        Certificates
                    </h2>
                    <PiCertificate size={30} />
                </div>
                <CarouselCard />
            </div>
        </div>
    );
};

export default AboutMe;
