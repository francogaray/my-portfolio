import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineMenu,
    AiOutlineProject,
    AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";

const Sidenav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        console.log("Change");
    };

    return (
        <div>
            <AiOutlineMenu
                className="fixed top-4 right-4 z-[99] md:hidden"
                onClick={handleNav}
                size={40}
            />
            {nav ? (
                <div className=" fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a
                        onClick={handleNav}
                        href="#main"
                        className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110- ease-in duration-200"
                    >
                        <AiOutlineHome size={20} />
                        <span className=" pl-4">Home</span>
                    </a>
                    <a
                        onClick={handleNav}
                        href="#aboutMe"
                        className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <BsPerson size={20} />
                        <span className=" pl-4">About Me</span>
                    </a>
                    <a
                        onClick={handleNav}
                        href="#education"
                        className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <MdOutlineSchool size={20} />
                        <span className=" pl-4">About Me</span>
                    </a>

                    <a
                        onClick={handleNav}
                        href="#work"
                        className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <GrProjects size={20} />
                        <span className=" pl-4">Work</span>
                    </a>
                    <a
                        onClick={handleNav}
                        href="#projects"
                        className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineProject size={20} />
                        <span className=" pl-4">Projects</span>
                    </a>

                    <a
                        onClick={handleNav}
                        href="#contact"
                        className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineMail size={20} />
                        <span className=" pl-4">Contact</span>
                    </a>
                </div>
            ) : (
                ""
            )}
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col ml-3">
                    <a
                        href="#main"
                        className="rounded-full shadow-lg bg-[#5ce1e6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineHome size={20} />
                    </a>
                    <a
                        href="#aboutMe"
                        className="rounded-full shadow-lg bg-[#5ce1e6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <BsPerson size={20} />
                    </a>
                    <a
                        href="#education"
                        className="rounded-full shadow-lg bg-[#5ce1e6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <MdOutlineSchool size={20} />
                    </a>
                    <a
                        href="#work"
                        className="rounded-full shadow-lg bg-[#5ce1e6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <GrProjects size={20} />
                    </a>{" "}
                    <a
                        href="#projects"
                        className="rounded-full shadow-lg bg-[#5ce1e6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineProject size={20} />
                    </a>{" "}
                    <a
                        href="#contact"
                        className="rounded-full shadow-lg bg-[#5ce1e6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
