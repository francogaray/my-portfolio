import { TypeAnimation } from "react-type-animation";
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    //FaFileDownload,
} from "react-icons/fa";

const Main = () => {
    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover object-left scale-x-[-1] "
                src="https://i.pinimg.com/564x/3d/f5/15/3df51526dcc7914e51d7efa9cfc983f4.jpg"
                alt="rout"
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-black/40">
                <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-2xl text-xl text-white">
                        {`Hola, mi nombre es`}
                    </h1>
                    <h2 className="sm:text-7xl text-4xl font-bold text-white ">
                        {`Franco Garay`}
                    </h2>
                    <h2 className=" flex sm:text-3xl text-2xl pt-4 teg8 text-white">
                        Y soy
                    </h2>
                    <h2 className=" flex sm:text-3xl text-2xl pt-4 teg8 text-white">
                        <TypeAnimation
                            sequence={[
                                "Developer FullStack",
                                1400,
                                // Same substring at the start will only be typed out once, initially
                                "Mobile Developer",
                                1400, // wait 1s before replacing "Mice" with "Hamsters"
                                "Freelancer",
                                1400,
                                "Desarrollador Javascript",
                                1400,
                                "Web Developer",
                                1400,
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{
                                fontSize: "1.5em",
                                display: "inline-block",
                                paddingLeft: "5px",
                                fontWeight: "bold",
                                color: "#c81e37",
                            }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[250px] w-full mt-2">
                        <a
                            href="https://www.linkedin.com/in/franco-david-garay-466699238/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FaLinkedin
                                className=" mx-3 cursor-pointer"
                                size={60}
                                color="#c81e37"
                            />
                        </a>
                        <a
                            href="https://github.com/francogaray"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FaGithub
                                className=" mx-3 cursor-pointer"
                                size={60}
                                color="#c81e37"
                            />
                        </a>
                        <a href="mailto:francogaray.dev@gmail.com">
                            <FaEnvelope
                                className="mx-3 cursor-pointer"
                                size={60}
                                color="#c81e37"
                            />
                        </a>
                    </div>
                    <div className="bg-[#c81e37] flex justify-evenly text-gray-100 mt-16 w-full  max-w-[250px] p-4 rounded-lg cursor-pointer  shadow-2xl shadow-gray-700 ">
                        <a
                            //target="_blank"
                            rel="noreferrer"
                            //href="https://drive.google.com/file/d/17JB2zXqvK1nZZrzkNntS90DEGEKiMxeI/view?usp=sharing"
                            className="ml-2 text-2xl font-bold "
                            href="#contact"
                        >
                            Contáctame
                        </a>
                        {/* <FaFileDownload className=" cursor-pointer" size={30} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
