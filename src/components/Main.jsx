import { TypeAnimation } from "react-type-animation";
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaFileDownload,
} from "react-icons/fa";

const Main = () => {
    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover object-left scale-x-[-1]"
                src="https://i.pinimg.com/564x/3d/f5/15/3df51526dcc7914e51d7efa9cfc983f4.jpg"
                alt="rout"
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
                <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                    <h1 className="sm:text-7xl text-4xl font-bold text-gray-800">
                        {`I'm Franco Garay`}
                    </h1>
                    <h2 className=" flex sm:text-3xl text-2xl pt-4 teg8">
                        {` I'm a`}
                        <TypeAnimation
                            sequence={[
                                "Mobile Developer",
                                1000,
                                // Same substring at the start will only be typed out once, initially
                                "Developer Fullstack",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Coder",
                                1000,
                                "Teach Enthusiast",
                                1000,
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{
                                fontSize: "1em",
                                display: "inline-block",
                                paddingLeft: "5px",
                            }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[150px] w-full mt-6">
                        <a
                            href="https://www.linkedin.com/in/franco-david-garay-466699238/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FaLinkedin className=" cursor-pointer" size={40} />
                        </a>
                        <a
                            href="https://github.com/francogaray"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FaGithub className=" cursor-pointer" size={40} />
                        </a>
                        <a href="mailto:contacto@francodev.com.ar">
                            <FaEnvelope className=" cursor-pointer" size={40} />
                        </a>
                    </div>
                    <div className="bg-[#1f97ba] flex justify-evenly text-gray-100 mt-16 w-full  max-w-[250px] p-4 rounded-lg cursor-pointer  shadow-2xl shadow-gray-700 ">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1BZ_prKtZS3s3JdhK-J_zCPcfwnQvRD6l/view?usp=sharing"
                            className="ml-2 text-lg font-bold "
                        >
                            Download CV
                        </a>
                        <FaFileDownload className=" cursor-pointer" size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
