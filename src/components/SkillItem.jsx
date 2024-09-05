const SkillItem = () => {
    const dataSkill = [
        {
            name: "Bootstrap",
            logo: "./skills-logo/bootstrap.png",
        },
        {
            name: "Terminal",
            logo: "./skills-logo/cli.png",
        },
        {
            name: "Css",
            logo: "./skills-logo/css3.png",
        },
        {
            name: "Express",
            logo: "./skills-logo/express.png",
        },
        {
            name: "Git",
            logo: "./skills-logo/git.png",
        },
        {
            name: "Html",
            logo: "./skills-logo/html5.png",
        },
        {
            name: "Javascript",
            logo: "./skills-logo/js.png",
        },
        {
            name: "Material UI",
            logo: "./skills-logo/material.png",
        },
        {
            name: "MongoDb",
            logo: "./skills-logo/mongo.png",
        },
        {
            name: "MySQL",
            logo: "./skills-logo/mysql.png",
        },
        {
            name: "NextJS",
            logo: "./skills-logo/next.png",
        },
        {
            name: "NodeJS",
            logo: "./skills-logo/node.png",
        },
        {
            name: "NestJs",
            logo: "./skills-logo/nestjs.png",
        },
        {
            name: "Npm",
            logo: "./skills-logo/npm.png",
        },
        {
            name: "PostgreSQL",
            logo: "./skills-logo/postgre.png",
        },
        {
            name: "React",
            logo: "./skills-logo/react.png",
        },
        {
            name: "Sass",
            logo: "./skills-logo/sass.png",
        },
        {
            name: "Tailwind",
            logo: "./skills-logo/tailwind.png",
        },
        {
            name: "Vite",
            logo: "./skills-logo/vite.png",
        },
    ];

    return (
        <div className="flex flex-wrap justify-evenly  ">
            {dataSkill.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center mb-6">
                    <p className="inline-block font-semibold text-white text-xs md:text-xl ">
                        {item.name}
                    </p>
                    <div className=" md:w-[130px] w-[70px] items-center m-1 p-2 rounded-full hover:scale-110 ease-in duration-200 shadow-  shadow-gray-300 bg-white">
                        <img className="md:p-5 p-2" src={item.logo} alt="logo" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillItem;
