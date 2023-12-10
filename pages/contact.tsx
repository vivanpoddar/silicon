import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState } from "react";
import {TailSpin} from "react-loader-spinner";
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
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-auto h-auto border rounded-lg overflow-hidden p-4">
            <div className="w-32 h-24 overflow-hidden">
                isLoading ? <TailSpin color="white" radius={"1rem"} />
                <Image src={image} width={640} height={480} alt={name} layout="responsive" style={{ display: isLoading ? 'none' : 'block' }} onLoad={() => setIsLoading(false)} />
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
            <div className="h-screen">
                <div className="flex bg-black justify-center">
                    <div className="pt-24 flex-col justify-center">
                        <h1 className="text-2xl">Board of Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="flex space-x-4">
                            <Person image="/vivan.png" name="Vivan Poddar" position="Executive Director" text="" linkedin="https://www.linkedin.com/in/vivanpoddar" email="mailto:vivanneil@outlook.com" />
                            <Person image="/evan.png" name="Evan Xiang" position="Operations Director" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                            <Person image="/ethan.png" name="Ethan Chen" position="Finance, PR Director" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                            <Person image="/thomas.png" name="Thomas Wang" position="Marketing Director" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                            <Person image="/kiran.png" name="Kiran Tevar" position="Expansion Director" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                            <Person image="/liam.png" name="Ziyu (Liam) Lin" position="Product Director" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        </div>
                        <h1 className="text-2xl pt-4">Regional Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="flex space-x-4">
                            <Person image="/liam.png" name="Ziyu (Liam) Lin" position="China Director" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        </div>
                        <h1 className="text-2xl pt-4">Chapter Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="flex space-x-4">
                            <Person image="" name="John Doe" position="A School District" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        </div>
                    </div>
                    <div></div>
                </div>
                <h1 className="flex text-2xl"></h1>
            </div>
            <Footer />
        </>
    )
}

export default Join;