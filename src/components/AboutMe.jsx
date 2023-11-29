import profilePhoto from "../assets/profile.jpeg";

const AboutMe = () => {
    return (
        <div
            id="aboutMe"
            className="max-w-[1040px]  m-auto md:pl-20 md:flex-row p-4 py-16 bg-gradient-to-tl from-[#1f97ba] to-[#5ce1e6]"
        >
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">
                About Me
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full flex justify-center min-w-[200px] m-4">
                    <img
                        className=" rounded-full shadow-2xl shadow-gray-400"
                        src={profilePhoto}
                        alt="profile photo"
                    />
                </div>
                <div>
                    <p>
                        Hola! Bienvenido y gracias por visitar mi portafolio web. Me llamo Franco Garay y vivo en Córdoba, Argentina.
                        Soy desarrollador FullStack.
                        <br />
                        Permíteme contarte un poco más sobre mí y mi
                        pasión por lo que hago.
                        <br />
                        <br />
                        Desde que era un niño, siempre he tenido una fascinación
                        por la tecnología. Esta curiosidad me llevó a explorar
                        el mundo de la programación y el desarrollo web.
                        <br />
                        <br />
                        Lo que más me emociona de este camino es el deseo constante de aprender y superar mis propios límites. Creo firmemente en la formación continua y me esfuerzo por adquirir nuevas habilidades y perfeccionar las que ya tengo.
                        <br />
                        <br />
                        Mi personalidad sociable y mi capacidad para trabajar de manera eficiente me han permitido disfrutar tanto del trabajo en solitario como en equipos colaborativos. Creo que la diversidad de ideas y la colaboración son esenciales para alcanzar resultados excepcionales.
                        <br />
                        <br />
                        En este momento, me encuentro en búsqueda de emocionantes oportunidades que desafíen mis habilidades y compromiso. Mi objetivo es aplicar mi experiencia y conocimientos para contribuir al éxito de proyectos innovadores y apasionantes.
                        <br />
                        <br />
                        Gracias por visitar mi portafolio!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
