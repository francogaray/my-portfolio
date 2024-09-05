const cardsData = [
    {
        title: "WEB DEVELOPER FULL STACK MERN & MOBILE APPS",
        content: "Mind-Hub",
        imgUrl: "./developer-full-stack.png",
    },
    {
        title: "FULL STACK JAVASCRIPT",
        content: "Platzi",
        imgUrl: "./full-stack-platzi.png",
    },
    {
        title: "REACT NATIVE DEVELOPER",
        content: "Platzi",
        imgUrl: "./intro-react-native.png",
    },

    {
        title: "SCRUM - agile methodologies",
        content: "Scrum Foundation",
        imgUrl: "./certification-scrum.png",
    },
    {
        title: "EF SET English Certificate (B1 Intermediate)",
        content: "EF Standard English Test",
        imgUrl: "./EFSETCertificate.png",
    },
    {
        title: "MENTOR FRONT END JR.",
        content: "Mind-hub",
        imgUrl: "./mentor.png",
    },
];

const Card = ({ imgUrl, title, content, linkUrl }) => (
    <a
        href="https://www.linkedin.com/in/francodavidgaray/"
        target="blank"
        className="card  m-4 rounded-md hover:scale-110 ease-in duration-200 shadow-lg bg-[#c81e37] cursor-pointer"
    >
        <img
            className=" max-sm:max-h-[100px] max-sm:max-w-[200px] bg-white max-h-[200px] min-h-[200px] min-w-[300px] max-w-[300px] object-contain"
            src={imgUrl}
            alt={imgUrl}
        />
        <div className="card-content h-full px-6  font-bold text-white rounded-md align-bottom">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </a>
);

const CardContainer = ({ cards }) => (
    <div className="cards-container h-auto  w-full flex overflow-x-scroll overflow-y-hidden">
        {cards.map((card, idx) => (
            <Card
                key={idx}
                title={card.title}
                content={card.content}
                imgUrl={card.imgUrl}
            />
        ))}
    </div>
);

const CarrouselCard = () => {
    return <CardContainer cards={cardsData} />;
};

export default CarrouselCard;
