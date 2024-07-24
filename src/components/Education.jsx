import CarouselCard from "./CarrouselCard";
import SkillItem from "./SkillItem";
const AboutMe = () => {
    return (
        <div
            id="education"
            className=" min-h-fit m-auto md:pl-20 p-4 py-16 flex flex-col justify-center items-center bg-[#1f2938] text-white"
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-white mb-5">
                    Habilidades
                </h1>
                <div className="flex flex-col md:flex-row justify-evenly items-center my-4 p-6">
                    <SkillItem />
                </div>
            </div>
            <div className="w-[100%] pr-4 flex flex-col items-center rounded-lg p-6 overflow-y-hidden overflow-x-scroll">
                <CarouselCard />
            </div>
        </div>
    );
};

export default AboutMe;
