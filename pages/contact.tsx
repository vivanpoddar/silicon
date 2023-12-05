import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

interface PersonProps {
    image: string;
    position: string;
    text: string;
    linkedin: string;
    email: string;
    name: string;
};

const Person = ({ image, position, text, name, linkedin, email }: PersonProps) => {
    return (
        <div className="w-80 h-auto border rounded-lg overflow-hidden p-4">
            <div className="w-16">
                <Image src={image} width={1280} height={720} alt={name} layout="responsive" />
            </div>
            <h1 className="text-3xl text-white">{name}</h1>
            <h2 className="text-xl text-gray-400">{position}</h2>
            <p className="text-white">{text}</p>
            <div className="flex space-x-4">
                <button onClick={() => window.location.href = `mailto:${email}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
                <button onClick={() => window.location.href = linkedin}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
            </div>
        </div>
    );
};

const Join = () => {
    return (
        <>
            <Navbar current="Contact"/>
            <div className="flex h-screen bg-black justify-center">
                <div className="pt-24 flex-col justify-center">
                    <div className="flex space-x-4">
                        <Person image="/panel1.jpg" name="oijads Poddar" position="President" text="Hello" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        <Person image="/panel1.jpg" name="asdhjioajse gWang" position="President" text="Hello" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        <Person image="/panel1.jpg" name="Evaadsoijang" position="President" text="Hello" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        <Person image="/panel1.jpg" name="John Doe" position="President" text="Hello" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Join;