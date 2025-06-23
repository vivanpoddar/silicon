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
        <div className="w-full h-auto border border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-900 hover:border-gray-500 transition-colors duration-300">
            {image && (
                <div className="w-full aspect-square mb-3 overflow-hidden rounded-lg relative bg-gray-800">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <TailSpin color="white" radius={"1rem"} />
                        </div>
                    )}
                    <Image 
                        src={image} 
                        fill
                        alt={name} 
                        className="object-cover"
                        onLoad={() => setIsLoading(false)} 
                    />
                </div>
            )}
            <div className="space-y-2">
                <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold leading-tight" title={name}>{name}</h1>
                <h2 className="text-sm sm:text-base md:text-lg text-gray-400 leading-tight">{position}</h2>
                {text && <p className="text-sm text-gray-300">{text}</p>}
                <div className="flex space-x-3 pt-2">
                    {email && (
                        <button 
                            onClick={() => window.location.href = `mailto:${email}`}
                            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                            aria-label={`Email ${name}`}
                        >
                            <FontAwesomeIcon className="text-white text-sm" icon={faEnvelope} />
                        </button>
                    )}
                    {linkedin && (
                        <button 
                            onClick={() => window.location.href = linkedin}
                            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                            aria-label={`LinkedIn profile of ${name}`}
                        >
                            <FontAwesomeIcon className="text-white text-sm" icon={faUser} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Person;
