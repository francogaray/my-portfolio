import {
    AiOutlineEnvironment,
    AiOutlineMail,
    AiOutlineUser,
} from "react-icons/ai";

const Contact = () => {
    return (
        <div
            id="contact"
            className="py-16 bg-gradient-to-tl from-[#a12037] to-[#c81e37]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-white mb-8">
                    Contáctame
                </h1>
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-1 flex justify-center">
                        <div className="max-w-md space-y-4 p-10">
                            <h2 className="text-2xl font-bold mb-4 text-white text-center">
                                Información
                            </h2>
                            <div className="space-y-12 flex flex-col ">
                                <div className="flex items-center space-x-4 ">
                                    <AiOutlineUser
                                        className="text-white text-2xl"
                                        size={50}
                                    />
                                    <div>
                                        <p className="text-[#1f2938] font-bold">
                                            Nombre
                                        </p>
                                        <p className="text-white text-xl">
                                            Franco Garay
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 ">
                                    <AiOutlineEnvironment
                                        className="text-white text-2xl"
                                        size={50}
                                    />
                                    <div>
                                        <p className="text-[#1f2938] font-bold">
                                            Dirección
                                        </p>
                                        <p className="text-white text-xl">
                                            Córdoba, Argentina
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 ">
                                    <AiOutlineMail
                                        className="text-white text-2xl"
                                        size={50}
                                    />
                                    <div>
                                        <p className="text-[#1f2938] font-bold">
                                            Email
                                        </p>
                                        <p className="text-white text-xl">
                                            francogaray.dev@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-[#1f2938]/70 rounded-lg p-10 ">
                        <h2 className="text-2xl font-bold mb-4 text-white">
                            Completa el formulario
                        </h2>
                        <form
                            action="https://getform.io/f/8684c7ff-92da-464d-83f8-5c588cf35ecb"
                            method="POST"
                            encType="multipart/form-data"
                            className="space-y-4"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-[#fff] font-bold text-sm mb-1"
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    required
                                    id="name"
                                    name="name"
                                    className="w-full border-2 border-gray-300 rounded-lg py-1 px-3 focus:outline-none focus:ring-2 focus:ring-[#1f2938] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-[#fff] font-bold text-sm mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    name="email"
                                    className="w-full  border-2 border-gray-300 rounded-lg py-1 px-3 focus:outline-none focus:ring-2 focus:ring-[#1f2938] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-[#fff] font-bold text-sm mb-1"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    className="w-full border-2 border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1f2938] focus:border-transparent"
                                ></textarea>
                            </div>
                            <div className="flex justify-center p-4">
                                <button
                                    type="submit"
                                    className="bg-[#c81e37] text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-gray-700 hover:bg-[#1f2938] transition-colors duration-300"
                                >
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
