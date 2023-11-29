import { MDBFooter } from "mdb-react-ui-kit";
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    return (
        <MDBFooter className="bg-dark text-center text-white"
        style={{ backgroundColor: "#001b5e" }}>
            <div
                className="text-center p-3 flex flex-row justify-around m-auto w-[55%] "
                style={{ backgroundColor: "#001b5e" }}
            >
                <a
                    href="https://www.linkedin.com/in/franco-david-garay-466699238/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaLinkedin className=" cursor-pointer" size={40} />
                </a>
                <a
                    href="https://github.com/francogaray"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaGithub className=" cursor-pointer" size={40} />
                </a>
                <a href="mailto:contacto@francodev.com.ar">
                    <FaEnvelope className=" cursor-pointer" size={40} />
                </a>
            </div>
            <div
                className="text-center p-3"
                style={{ backgroundColor: "#001b5e" }}
            >
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a className="text-dark" href="https://francodev.com.ar">
                    francodev.com.ar
                </a>
            </div>
        </MDBFooter>
    );
}
