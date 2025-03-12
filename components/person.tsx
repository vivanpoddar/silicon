import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";

interface PersonProps {
    image?: string;
    position: string;
    text: string;
    linkedin: string;
    email: string;
    name: string;
};

const Person = ({ image, position, text, name, linkedin, email }: PersonProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-auto h-auto border rounded-lg p-4">
            {image && (
                <div className="w-32 h-24 overflow-hidden">
                    {isLoading && <TailSpin color="white" radius={"1rem"} />}
                    <Image src={image} width={640} height={480} alt={name} layout="responsive" onLoadingComplete={() => setIsLoading(false)} />
                </div>
            )}
            <h1 className="text-3xl text-white">{name}</h1>
            <h2 className="text-xl text-gray-400">{position}</h2>
            <p className="text-white">{text}</p>
            <div className="flex space-x-4">
                {email && (
                    <button onClick={() => window.location.href = `mailto:${email}`}>
                        <FontAwesomeIcon className="text-white" icon={faEnvelope} />
                    </button>
                )}
                {linkedin && (
                    <button onClick={() => window.location.href = linkedin}>
                        <FontAwesomeIcon className="text-white" icon={faUser} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Person;
