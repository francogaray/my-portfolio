const cardsData = [
    {
        title: "MENTOR FRONT END JR.",
        content: "Mind-hub",
        imgUrl: "./mentor.png",
    },
    {
        title: "FULL STACK JAVASCRIPT",
        content: "Platzi",
        imgUrl: "./full-stack-platzi.png",
    },   {
        title: "REACT NATIVE DEVELOPER",
        content: "Platzi",
        imgUrl: "./intro-react-native.png",
    },
    {
        title: "WEB DEVELOPER FULL STACK MERN & MOBILE APPS",
        content: "Mind-hub",
        imgUrl: "./developer-full-stack.png",
    },
    {
        title: "SCRUM - agile methodologys",
        content: "Scrum Foundation",
        imgUrl: "./certification-scrum.png",
    },
    {
        title: "EF SET English Certificate (B1 Intermediate)",
        content: "EF Standard English Test",
        imgUrl: "./EFSETCertificate.png",
    },
];

const Card = ({ imgUrl, title, content, linkUrl }) => (
    <a
        href="https://www.linkedin.com/in/franco-david-garay-/"
        target="blank"
        className="card flex-[1 0 250px] m-4 rounded-md hover:scale-110 ease-in duration-200 shadow-lg bg-white shadow-gray-400 cursor-pointer"
    >
        <img
            className="h-36 min-w-[300px] object-contain"
            src={imgUrl}
            alt={imgUrl}
        />
        <div className="card-content px-6 bg-gray-200 h-[88px] rounded-md">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </a>
);

const CardContainer = ({ cards }) => (
    <div className="cards-container w-full flex overflow-x-auto pb-4">
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
