const ProjectItem = ({ img, title, link }) => {
    return (
        <div className="relative bg-gradient-to-br from-[#c81e37] to-[#a12037] flex items-center justify-center h-auto  max-w-sm shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-br hover:from-gray-600 hover:to-[#1f2938] p-6 ">
            <img
                src={img}
                alt="/"
                className="rounded-xl group-hover:opacity-10 w-full"
                style={{ filter: "drop-shadow(12px 12px 10px #000000)" }}
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-4xl font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React Js</p>
                <a href={link} target="_blank" rel="noreferrer">
                    <p className="text-center p-3 rounded-lg bg-[#c81e37] text-white font-bold cursor-pointer text-lg  shadow-2xl shadow-gray-400">
                        More Info
                    </p>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;
