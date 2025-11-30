import TypeIt from "typeit-react";
import Footer from "../components/footer";
import React from 'react'
import { motion } from 'framer-motion'
import Navbar from "../components/navbar";
import LinkButton from "../components/linkbutton";
import Particles from "react-particles";
import { Dialog, Transition } from '@headlessui/react'
import { useCallback, useState, Fragment, useEffect } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "react-text-gradients";
import Notification from "../components/notification";

interface QuestionProps {
    question: string;
    answer: string;
}

const Question = ({ question, answer }: QuestionProps) => {
    return (
        <div className="border p-4 m-4">
            <h1 className="text-xl md:text-3xl text-blue-500">{question}</h1>
            <p className="text-sm md:text-lg">{answer}</p>
        </div>
    );
};

const Panel1 = (): JSX.Element => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);


    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <div className="bg-gradient-to-b from-blue-500 to-black h-screen w-screen">
            <Particles
                style={{ position: "absolute" }}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                }}
            />
            <div className="absolute w-full h-full flex items-center justify-center flex-col px-4">
                <div className="w-full max-w-lg mb-4">
                    <Image priority={true} className="w-full h-auto" src="/ssahack.png" alt="shady.Hacks" width={600} height={100}></Image>
                </div>
                <div className="border-t border-white w-3/4 sm:w-1/2 mb-4"></div>
                <TypeIt className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">Hack for a <span className="text-yellow-500 italic">purpose.</span></TypeIt>
                <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                        <a href="https://forms.gle/1NkPHxKgb2HsR9b5A" className="text-center border text-yellow-500 font-medium py-2 px-2 sm:py-3 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl border-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition-colors">Sign Up</a>
                        <a href="https://shadysideacademy-my.sharepoint.com/:w:/g/personal/26poddarv_shadysideacademy_org/EejCBZMdudNHoMtI7kxiPEEBrONOyJj2c5hBZFD8FIIWSw?e=uwkxSG" className="text-center border border-yellow-500 text-yellow-500 font-medium py-2 px-2 sm:py-3 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded hover:bg-yellow-500 hover:text-black transition-colors">Handbook</a>
                        <a href="mailto:contact@joinsilicon.org" className="text-center border text-white py-2 px-2 sm:py-3 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded hover:bg-white hover:text-black transition-colors">Contact</a>
                        <a href="https://photos.google.com/share/AF1QipOQiYLZIbpk57qZWq49Y-rL0xRnqVo0glFUySvHSEUEGUtcjJjtQ0PbMZTszdOFNA?key=cXpvWl9aMGtqeUFuaHNTQm5PUU1DOXZZbWQ0OTNB" className="text-center border text-white py-2 px-2 sm:py-3 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded hover:bg-white hover:text-black transition-colors">2025 Pictures</a>
                        <a href="https://drive.google.com/file/d/1X0Jd8n0rW3EhQhP_2tSPOMt7C3oB6zjz/view" className="text-center border text-white py-2 px-2 sm:py-3 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded hover:bg-white hover:text-black transition-colors">Sponsor Info</a>
                        <a href="https://drive.google.com/drive/folders/1ixl2A1D_IjwNvjAvrnPSLaW9Bwja_usN?usp=drive_link" className="text-center border text-white py-2 px-2 sm:py-3 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded hover:bg-white hover:text-black transition-colors">Web Development</a>
                        <a href="https://www.instagram.com/ssa_hack/" className="text-center border text-white py-2 px-2 sm:py-3 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded hover:bg-white hover:text-black transition-colors">
                            Instagram
                        </a>
                        <a href="https://docs.google.com/spreadsheets/d/1czqJASUVv4osy-QzJjEv47Oe3O1dsVbYxdkkwsTscTU/edit?usp=sharing" className="text-center border text-white py-2 px-2 sm:py-3 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded hover:bg-white hover:text-black transition-colors">
                            2025 Scores
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 rounded-lg p-4 text-center">
                    <h1 className='pb-2 text-white text-sm sm:text-base'>Learn more</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-white animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: '/DSC_9628.jpg', alt: 'Image 3' },
        { src: '/DS307067.jpg', alt: 'Image 1' },
        { src: '/DS307074.jpg', alt: 'Image 1' },
        { src: '/DS307084.jpg', alt: 'Image 1' },
        { src: '/DS307106.jpg', alt: 'Image 1' },
        { src: '/DS307070.jpg', alt: 'Image 2' },
        { src: '/DS307097.jpg', alt: 'Image 3' },
        { src: '/DSC_9643.jpg', alt: 'Image 3' },
        { src: '/DSC_9645.jpg', alt: 'Image 3' },
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="items-center justify-center mx-8 relative w-half max-w-lg xl:max-w-4xl">
            <div className="overflow-hidden relative rounded-xl border-4 border-black">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                <div key={index} className="min-w-full">
                    <Image src={image.src} alt={image.alt} width={1000} height={500} />
                </div>
                ))}
            </div>
            </div>
            <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform  text-black p-2 rounded-full"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
            </svg>
            </button>
            <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform  text-black p-2 rounded-full"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
            </svg>
            </button>
        </div>
    );
};

const Panel2 = (): JSX.Element => {
 
    return (
        <div className="border-b relative h-[100vh] xl:h-screen w-screen flex flex-col-reverse xl:flex-row bg-black">
            <div className="absolute w-full h-full">
                <Image src="/scribble.svg" alt="wave" layout="fill" objectFit="cover" />
            </div>
            <div className="z-10 xl:w-1/2 h-1/2 xl:h-full flex flex-col items-center justify-center xl:p-24">
                <h1 className="xl:text-7xl text-white text-center mx-10 sm:mx-0 pb-4 md:px-0 text-2xl">The first highschool hackathon in the city of Pittsburgh.</h1>
                <LinkButton content="View our hackathons" href="www.joinsilicon.org/hackathons" />
            </div>
            <div className="z-10 xl:w-1/2 h-1/2 xl:h-full flex items-center justify-center">
                <div className='xl:h-1/2 xl:w-3/4 flex items-center justify-center'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

const Content = (): JSX.Element => {
    return (
        <div className="relative flex text-white bg-black py-24 z-0">
            <div className="flex absolute right-1 top-5">
                <Image src="/star.svg" alt="Star" width={500} height={50} />
            </div>
            <div className="z-10 w-screen flex flex-col">
                <div className="flex xl:flex-row flex-col-reverse h-full w-full">
                    <div className="xl:w-1/2 h-full flex flex-col items-center justify-center">
                        <span className="text-center pb-4 text-4xl text-yellow-500"><b> Apr 5, 2025</b></span>
                        <div className="flex xl:text-4xl items-center justify-center">
                            <div className="flex flex-col space-y-8">
                                <span className="text-right">9:00 AM</span>
                                <span className="text-right">9:10 AM</span>
                                <span className="text-right">10:20 AM</span>
                                <span className="text-right">12:00 PM</span>
                                <span className="text-right">12:30 PM</span>
                                <span className="text-right">4:30 PM</span>
                                <span className="text-right">5:30 PM</span>
                                <span className="text-right">6:00 PM</span>
                            </div>
                            <div className="h-full self-center border border-white mx-4"></div>
                            <div className="flex flex-col space-y-8">
                                <span>Opening Ceremony</span>
                                <span>Web Development</span>
                                <span>AI Ignition with Python</span>
                                <span>Lunch Opens</span>
                                <span>Special Guest Masterclass</span>
                                <span>Judging</span>
                                <div className="flex flex-col">
                                    <p className="text-[0.7em]/[1]">Closing Speech</p>
                                    <p className="text-[0.3em]/[1] text-gray-400">featuring State Representative Arvind Venkat</p>
                                </div>
                                <span>Teams Leave </span>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 pb-24 xl:pb-0 px-8 flex items-center justify-center relative">
                        <div className="xl:p-24">
                            <h1 className="text-blue-500 text-xl italic xl:text-4xl xl:pb-4">6 hours to solve one problem.</h1>
                            <p className="text-lg pb-2">We&apos;re excited to welcome you to shady.Hacks 2025. shady.Hacks is an annual hackathon dedicated to empowering students and innovators around the Pittsburgh area to increase exposure to the field of computer science and entrepreneurship. Join shady.Hacks to meet like-minded individuals, learn new skills, and create something amazing. During the event, you will have 6 hours to create a project to a project that addresses one critical issue that will be announced at the start of the event. It will be broad, and we aim for your creativity to run freely. At the end of the event, competitors will present their projects to a panel of judges. The best projects will win prizes offered by our sponsors. Participants will receive complementary shirts, certificates, and other goodies. Register now to secure your spot at shady.Hacks 2025. See the FAQ and handbook for more info.
                            </p>
                            <LinkButton content="Learn more in the handbook" href="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Masterclass = (): JSX.Element => {
    return (
        <div >
            <div className="text-white bg-black">
                <div className="flex items-center">
                    <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Masterclass</h1>
                    <div className="border-t border-white flex-grow"></div>
                </div>
                <div className="p-4">
                    <div>
                        <h1 className="text-xl underline italic">AI Ignition with Python: An Introduction to Python and AI</h1>
                        <p>Embark on a thrilling journey into the world of artificial intelligence with our power-packed masterclass. This session is for individuals ready to begin an AI project for the hackathon by using APIs for rapid development. Ignite your AI journey. Taught by industry leader Indrajit Poddar, Senior Technical Architect at AWS.
                        </p>
                    </div>
                    <div>
                        <h1 className="pt-2 text-xl underline italic">Web Development</h1>
                        <p>This masterclass will delve into the basics of Web Development, offering you the skills you will need to create a meaningful project to display to the judges. This course will be taught using SSA curriculum, and will give you the tools needed to succeed. Taught by SSA Computer Science Chair Mr. Dawson Haytock.</p>
                    </div>
                    <div>
                        <h1 className="pt-2 text-xl underline italic">BhashaX Introduction to Programming</h1>
                        <p>BhashaX is a pioneering system that enables programming for beginners. This innovative approach has been recognized by World Bank, Intel, MIT, Broadcom, and many more. Through this session, participants will get hands-on experience to programming by trying BhashaX.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Questions = (): JSX.Element => {
    return (
        <div className="relative bg-black">
            <div className="text-white">
                <div className="flex items-center">
                    <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">FAQ</h1>
                    <div className="border-t border-white flex-grow"></div>
                </div>
                <div className="p-4">
                    <Question question="Is lunch included?" answer="Lunch is included in your registration! Lunch will be cheese/pepperoni pizza or salad, water, and a snack. Feel free to bring your own lunch if desired. We will also be running a paid concession stand during the event." />
                    <Question question="Technology and devices included?" answer="We will provide 3D Printers, Arduinos, MakeyMakey's, Assorted Censors, Controllers, Phones, VR Headsets, Laptops and more. You are welcome to bring any hardware and software you'd like to succeed!" />
                    <Question question="I am a middle schooler. Can I succeed in this hackathon?" answer="No worries about skill gaps here. We will be hosting masterclasses that are tailored to beginners and younger competitors that will bring you up to speed. In addition, we provide novice awards for people getting into the space." />
                    <Question question="What is a hackathon?" answer="Our hackathon is a 6-hour event where students come together to create a project that solves a problem. Students can work individually or in teams of up to 4 people. At the end of the 6 hours, students will present their projects to a panel of judges. The best projects will win prizes!" />
                    <Question question="Who can participate?" answer="Any middle or high school student can participate! You do not need to have any prior experience with coding or hackathons. We will be hosting workshops to help you get started on your project." />
                </div>
            </div>
        </div>
    )
}

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
        <div className="w-auto h-auto border rounded-lg p-2 md:p-4">
            <h1 className="md:text-3xl text-xl text-white">{name}</h1>
            <h2 className="md:text-xl text-gray-400">{position}</h2>
            <p className="text-white md:text-base text-sm">{text}</p>
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

const Prizes = (): JSX.Element => {
    let [isComputeOpen, setComputeOpen] = useState(false)
    let [isConnectOpen, setConnectOpen] = useState(false)
    let [isInnovateOpen, setInnovateOpen] = useState(false)
    let [isImpactOpen, setImpactOpen] = useState(false)
    let [isVisionOpen, setVisionOpen] = useState(false)
    let [isBreakthroughOpen, setBreakthroughOpen] = useState(false)
    let [isKeystoneOpen, setKeystoneOpen] = useState(false)
    let [is2024Open, set2024Open] = useState(false)

    useEffect(() => {
        if (isConnectOpen || isComputeOpen || isInnovateOpen || isImpactOpen || isVisionOpen || isBreakthroughOpen || isKeystoneOpen || is2024Open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isConnectOpen, isComputeOpen, isInnovateOpen, isImpactOpen, isVisionOpen, isBreakthroughOpen, isKeystoneOpen, is2024Open]);

    return (
        <div className="text-white w-[100vw] bg-black" id="prizes">
            <div className="flex items-center">
                <motion.h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Prizes</motion.h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="py-4 flex flex-col">
                <div className="items-center grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 mx-4 lg:grid-cols-4 gap-2">
                    <button className="h-28 border border-black flex flex-col justify-center bg-gray-900 text-center items-center rounded-xl" onClick={() => setComputeOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#17acff, #ff68f0']}>Compute Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border border-black flex flex-col justify-center bg-gray-900 text-center items-center rounded-xl" onClick={() => setConnectOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#ad5389, #3c1053']}>Compete Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border border-black flex flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setInnovateOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#073000, #0f9b0f']}>Connect Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setBreakthroughOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#f2b4f1, #9a1811']}>Breakthrough Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setImpactOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#22c1c3, #fdbb2d']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>Impact Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setKeystoneOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#a1a1a1, #33ff33']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>AOPS Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setVisionOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#396afc, #2948ff']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>Vision Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => set2024Open(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#1C6FF8, #FEF720']}>2024 hacker()</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                </div>
            </div>
            {/* Add later if possible <Transition appear show={isInternshipOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setInternshipOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#ffd89b, #19547b']}>2024 Internship Award</LinearGradient></h1>
                                        <p className="text-xs text-gray-800">Presented by the University of Pittsburgh</p>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is presented to the team with the overall best project concerning the hackathon topic. The winning team will be awarded a research internship with Pitt RST as well as a stipend to further develop their idea. - Detailed desc. coming soon
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>Pitt RST Internship</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setInternshipOpen(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition> */}
            <Transition appear show={isComputeOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setComputeOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#17acff, #ff68f0']}>2024 Compute Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is presented to the team with the project showcasing the highest depth of technical skills in relation to the prompt. The project must be highly complex and also must represent a finished and highly developed product. A sponsor will offer the winner a summer internship opportunity.  (Important: Ages 16+ only by the end of the academic year)
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>Internship, providing organization is tentative for 2025.</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setComputeOpen(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={isConnectOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setConnectOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#ad5389, #3c1053']}>Compete Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is given to the team whose project demonstrates the most significant potential impact on our communities. The project should exhibit a high level of completion and distinguish itself from other submissions. Judges will evaluate the <span className="font-bold">effectiveness of the pitch</span>  in convincingly highlighting the project&apos;s potential and innovation.                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>$150</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setConnectOpen(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={isInnovateOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setInnovateOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#7b920a, #0f9b0f']}>Connect Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is presented to the team with the most potential impact on our communities. The project must also showcase a certain depth of completion and stand out among other submissions. Judges will be looking for a depth of project that is both highly developed and also has the potential to <span className="font-bold">connect with disadvantaged communities in the Pittsburgh area.</span>
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>$150</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setInnovateOpen(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={isBreakthroughOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setInnovateOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#f2b4f1, #9a1811']}>Breakthrough Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
This award recognizes projects that make you go &quot;Wow!&quot; Judged primarily on their sheer coolness, this award celebrates teams that push the boundaries of creativity, innovation, and technical flair. It&apos;s all about impressing the judges and your peers with mind-blowing ideas and jaw-dropping implementations.                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>$150</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setBreakthroughOpen(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={isImpactOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setImpactOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#22c1c3, #fdbb2d']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>Impact Award</LinearGradient></h1>
                                        <p className="text-xs text-gray-800"></p>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is presented to the team with the most potential impact on our communities. This award is solely to be awarded to beginners. Judges will be looking for a project that showcases the growth of the competitors throughout the competition and a project that has the potential to reach people around the nation and further.
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>$100</p>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setImpactOpen(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={isVisionOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setVisionOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#396afc, #2948ff']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>Vision Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is presented to the team with the most visionary idea. This award is solely to be awarded to beginners. Judges will be looking for a truly visionary project that reflects the skill level of the competitors.
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>$100</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setVisionOpen(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={isKeystoneOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setKeystoneOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#a1a1a1, #33ff33']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>AOPS Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
This award celebrates the team that has shown the most remarkable improvement in their skills throughout the hackathon. This award recognizes those who have embraced challenges, learned new technologies, and demonstrated significant growth in their technical and collaborative abilities.                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>$75 in discounts from the <a href="https://artofproblemsolving.com/" target="_blank" className="underline" rel="noopener noreferrer">Art of Problem Solving</a></p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setKeystoneOpen(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={is2024Open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => set2024Open(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#1C6FF8, #FEF720']}>2024 hacker()</LinearGradient></h1>
                                        <p className="text-xs text-gray-800">Presented by Perkin Showalter &apos;26</p>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Thank you to our participants! You will receive a list of items just for attending the hackathon. 
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>You will receive a shirt, certificate, and other benefits.</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => set2024Open(false)}
                                        >
                                            Let&apos;s win
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

const Sponsors = (): JSX.Element => {
    return (
        <div className="relative text-white bg-black">
            <div className="flex items-center z-10">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Sponsors</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4 w-full flex justify-center">
shady.Hacks is completely funded through the generous donations of our sponsors. Thank you for making shady.Hacks possible!
            </div>
            <div className="p-4 w-full flex justify-center">
                <Image
                    className="z-10 rounded-xl"
                    src="/Atom.png"
                    alt="Sponsors"
                    width={800}
                    height={1000}
                />
            </div>
        </div>
    )
}

const Recap = (): JSX.Element => {
    return (
        <div className="text-white bg-black">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Media</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4">
                <div className="flex gap-4">
                    <iframe
                        className="w-1/2 rounded-xl"
                        height="500"
                        src="https://www.youtube.com/embed/n6WCVRFL61k"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="w-1/2 rounded-xl"
                        height="500"
                        src="https://www.youtube.com/embed/JTiOzo9jJgY"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

const ContactTeam = (): JSX.Element => {
    return (
        <div className="text-white bg-black">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Contact & Team</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4">
                <div className="max-w-7xl mx-auto">
                    {/* Contact Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl text-yellow-500 mb-6">Get in Touch</h2>
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <a href="mailto:contact@joinsilicon.org" className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors">
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                                contact@joinsilicon.org
                            </a>
                            <a href="https://www.instagram.com/ssa_hack/" className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors">
                                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                                @ssa_hack
                            </a>
                        </div>
                    </div>

                    {/* Leadership Section */}
                    <div className="mb-8">
                        <h2 className="text-3xl text-yellow-500 mb-6">Leadership</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <Person image="/vivan.png" name="Vivan Poddar" position="Executive Director/Founder" text="" linkedin="https://www.linkedin.com/in/vivanpoddar" email="mailto:vivanneil@outlook.com" />
                            <Person image="/thomas.png" name="Thomas Wang" position="Operations Director" text="" linkedin="https://www.linkedin.com/in/thomas-jichen-wang-a0b427268/" email="mailto:wangthomas19@outlook.com" />
                            <Person image="/boden.png" name="Boden Moraski" position="Outreach Director" text="" linkedin="https://www.linkedin.com/in/boden-moraski/overlay/contact-info/" email="bodenmoraski@gmail.com" />
                        </div>
                    </div>

                    {/* Operations Team Section */}
                    <div>
                        <h2 className="text-3xl text-yellow-500 mb-6">Operations Team</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <Person image="" name="Abigail Mullin" position="Human Resources" text="" linkedin="" email="" />
                            <Person image="" name="Faaris Kamal" position="Finances" text="" linkedin="" email="" />
                            <Person image="" name="Samaira Bhat" position="" text="" linkedin="" email="" />
                            <Person image="" name="Raneem Wahdan" position="" text="" linkedin="" email="" />
                            <Person image="" name="Suhaan Tammana" position="" text="" linkedin="" email="" />
                            <Person image="" name="Regan Mulderig" position="Concessions" text="" linkedin="" email="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Ssahack = () => {
    return (
        <>
            <Head>
                <title>shady.Hacks 2025</title>
            </Head>
            <Navbar current="shady.Hacks" />
            <div className="">
                <Notification text="Less than one week away from shady.Hacks 2025!"/>
                
                <Panel1 />
                <Panel2 />
                <Content />
                <Prizes />
                {/* <Judges /> */}
                <Masterclass />
                <Recap />
                <Questions />
                <ContactTeam />
                <Sponsors />
            </div>
            <Footer />
        </>
    );
}

export default Ssahack;