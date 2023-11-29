const Contact = () => {
    return (
        <div
            id="contact"
            className="max-w-[1040px] m-auto md:px-20 p-4 py-16 bg-gradient-to-tl from-[#1f97ba] to-[#5ce1e6]"
        >
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
                Contact
            </h1>
            <form action="https://getform.io/f/8684c7ff-92da-464d-83f8-5c588cf35ecb" method="POST" encType="multipart/form-data">
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label
                            className="uppercase text-sm py-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="border-2 rounded-lg p-3 flex border-gray-300"
                            type="text"
                            name="name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="uppercase text-sm py-2"
                            htmlFor="phone"
                        >
                            Phone Number{" "}
                        </label>
                        <input
                            className="border-2 rounded-lg p-3 flex border-gray-300"
                            type="text"
                            name="phone"
                        />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="email"
                        name="email"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="subject"
                    ></input>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message"></textarea>
                </div>
                <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg  shadow-2xl shadow-gray-700">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
