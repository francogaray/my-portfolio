const SkillItem = () => {
    const dataSkill = [
        {
            name: "Bootstrap",
            logo: "./skills-logo/bootstrap.png",
        },{
            name: "Terminal",
            logo: "./skills-logo/cli.png",
        },{
            name: "Css",
            logo: "./skills-logo/css3.png",
        },{
            name: "Express",
            logo: "./skills-logo/express.png",
        },{
            name: "Git",
            logo: "./skills-logo/git.png",
        },{
            name: "Html",
            logo: "./skills-logo/html5.png",
        },{
            name: "Javascript",
            logo: "./skills-logo/js.png",
        },{
            name: "Material UI",
            logo: "./skills-logo/material.png",
        },{
            name: "MongoDb",
            logo: "./skills-logo/mongo.png",
        },{
            name: "MySQL",
            logo: "./skills-logo/mysql.png",
        },{
            name: "NextJS",
            logo: "./skills-logo/next.png",
        },{
            name: "NodeJS",
            logo: "./skills-logo/node.png",
        },{
            name: "Npm",
            logo: "./skills-logo/npm.png",
        },{
            name: "PostgreSQL",
            logo: "./skills-logo/postgre.png",
        },{
            name: "React",
            logo: "./skills-logo/react.png",
        },{
            name: "Sass",
            logo: "./skills-logo/sass.png",
        },{
            name: "Tailwind",
            logo: "./skills-logo/tailwind.png",
        },{
            name: "Vite",
            logo: "./skills-logo/vite.png",
        },
    ];

    return (
        <div className="flex flex-wrap justify-evenly ">
            {dataSkill.map((item, idx) => (
                <div className=" flex flex-col justify-center w-[100px] items-center m-2 p-2 rounded-md hover:scale-110 ease-in duration-200 shadow-lg  shadow-gray-400 bg-white" key={idx}>
                    <img className="w-[50px] " src={item.logo} alt="logo" />
                    <p className="inline-block font-semibold text-[#001B5E]">{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default SkillItem;
