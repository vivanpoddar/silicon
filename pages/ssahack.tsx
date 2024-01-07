import TypeIt from "typeit-react";
import Footer from "../components/footer";
import React from 'react'
import {motion} from 'framer-motion'
import Navbar from "../components/navbar";
import LinkButton from "../components/linkbutton";
import Particles from "react-particles";
import {Dialog, Transition} from '@headlessui/react'
import { useCallback, useState, Fragment, useEffect } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "react-text-gradients";

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
        //rgb(246, 196, 77)
        <div className="bg-blue-500 h-screen w-screen">
            <Particles
                style={{position: "absolute"}}
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
            <div className="absolute w-screen h-screen flex items-center justify-center flex-col" style={{ height: "100vh" }}>
                <Image priority={true} className="md:w-1/2 w-[90vw]" src="/ssahack.png" alt="SSAHack 2023" width={800} height={300}></Image>
                <div className="border-t border-white w-1/2 my-4"></div>
                <TypeIt className="text-center text-5xl text-black">Hack for a <span className="text-yellow-500 italic">purpose.</span></TypeIt>
                <div className="flex space-x-4">
                    <a href="https://forms.gle/1NkPHxKgb2HsR9b5A" className="mt-4 bg-blue-800 text-white font-bold py-1 px-2 md:py-2 md:px-4 md:text-2xl rounded">Sign Up</a>
                    {/* <a className="mt-4 bg-blue-800 text-white font-bold py-1 px-2 md:py-2 md:px-4 md:text-2xl rounded">Handbook</a> */}
                    <a href="mailto:ssa.hack2024@gmail.com" className="mt-4 bg-blue-800 text-white font-bold py-1 px-2 md:py-2 md:px-4 md:text-2xl rounded">Contact</a>
                    <a href="https://shadysideacademy-my.sharepoint.com/:w:/g/personal/26poddarv_shadysideacademy_org/EejCBZMdudNHoMtI7kxiPEEBrONOyJj2c5hBZFD8FIIWSw?e=uwkxSG" className="mt-4 bg-blue-800 text-white font-bold py-1 px-2 md:py-2 md:px-4 md:text-2xl rounded">Handbook</a>
                </div>
                <div className="absolute bottom-0 mb-8 rounded-lg p-4">
                    <h1 className='pb-2 text-white'>Learn more</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 mx-auto text-white animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Panel2 = (): JSX.Element => {
    return (
        <motion.div className="z-10 h-[75vh] md:h-screen w-screen flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center md:p-24">
                <h1 className="md:text-7xl text-white text-center text-5xl">Win an internship with Pitt RST.</h1>
                <LinkButton content="Claim your spot at SSAHacks 2023" href="ssahacks" />
            </div>
            <div className="md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
                <div className='md:h-1/2 w-3/4 md:w-full flex items-center justify-center'>
                    <Image src="/upitt.png" width={800} height={0} alt="dude laughing"></Image>
                </div>
            </div>
        </motion.div>
    )
}

const Content = (): JSX.Element => {
    return (
        //rgb(246, 196, 77)
        <div className="flex text-white py-24">
            <div className="w-screen flex flex-col">
                <div className="flex md:flex-row flex-col-reverse h-full w-full">
                    <div className="md:w-1/2 h-full flex flex-col items-center justify-center">
                        <span className="text-center pb-4 text-md:text-4xl text-yellow-500">Tentative Schedule on <b> March 2, 2024</b></span>
                        <div className="flex md:text-4xl items-center justify-center">
                            <div className="flex flex-col space-y-8">
                                <span className="text-right">7:30</span>
                                <span className="text-right">8:00</span>
                                <span className="text-right">9:00</span>
                                <span className="text-right">11:00</span>
                                <span className="text-right">13:00</span>
                                <span className="text-right">17:00</span>
                                <span className="text-right">17:30</span>
                                <span className="text-right">18:00</span>
                            </div>
                            <div className="h-full self-center border border-white mx-4"></div>
                            <div className="flex flex-col space-y-8">
                                <span>Topic Announcement</span>
                                <span>Development Begins</span>
                                <span>Masterclass: AI Ignition</span>
                                <span>Masterclass: Micro Launchpad</span>
                                <span>Lunch</span>
                                <span>Judging</span>
                                <span>Closing Ceremony</span>
                                <span>Teams Leave</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 pb-24 md:pb-0 px-8 flex items-center justify-center">
                        <div className="md:p-24">
                            <h1 className="text-blue-500 text-xl font-bold md:text-4xl md:pb-4">8 hours to solve one problem.</h1>
                            <p className="text-lg">Welcome to SSA.hack(), the premier highschool hackathon in the Pittsburgh area. During the event, competitors will have 8 hours to create
                                a project to solve a relevant issue pertaining to a certain theme. The theme will be announced at the beginning of the event. Competitors will be able to work in teams of up to 4 people. 
                                At the end of the event, competitors will present their projects to a panel of judges. The best projects will win huge prizes offered by our sponsors.
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
            <div className="text-white">
                <div className="flex items-center">
                    <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Masterclass</h1>
                    <div className="border-t border-white flex-grow"></div>
                </div>
                <div className="p-4">
                    <div>
                        <h1 className="text-xl underline italic">AI Ignition: An Introduction to Artificial Intelligence</h1>
                        <p>Embark on a thrilling journey into the world of artificial intelligence with our power-packed masterclass. This two-hour session is crafted for individuals ready to take the first step in their AI project for the hackathon, providing essential insights and practical guidance to kickstart your AI endeavors.
                            By the end of AI Ignition, you will leave with the knowledge, confidence, and practical skills to embark on your AI project. Join us for an hour of inspiration, hands-on learning, and actionable insights as we guide you through the exciting world of artificial intelligence. Ignite your AI journey.
                        </p>
                    </div>
                    <div>
                        <h1 className="pt-2 text-xl underline italic">Micro Launchpad: An Introduction to Embedded Systems/Arduino</h1>
                        <p>Embark on a swift and enlightening journey into the world of intelligent devices with our unique masterclass. This two-hour session will provide you with what you need to integrate physical electronics and programming at the intersection of engineering and computer science. Learn about the seamless integration of computing power into the fabric of our daily lives.
                            By the end of this masterclass, you will depart with newfound insights, practical skills, and a heightened appreciation for the transformative capabilities of embedded systems. Join us for an hour of exploration, innovation, and the elevation of your understanding of smart systems. Launch into the digital world. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Questions = (): JSX.Element => {
    return (
        <div >
            <div className="text-white">
                <div className="flex items-center">
                    <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">FAQ</h1>
                    <div className="border-t border-white flex-grow"></div>
                </div>
                <div className="p-4">
                    <Question question="Is lunch, etc. included?" answer="Everything you might need will be included free of charge. However, if you would like to work with more advanced components you will be required to bring your own. However, if this is difficult to do, shoot us an email and we will be able to accomodate your needs ahead of time." />
                    <Question question="I am a middle schooler. Can I succeed in this hackathon?" answer="No worries about skill gaps here. We will be hosting masterclasses that are tailored to newcomers (specifically younger people) that will bring you up to speed. In addition, we provide novice awards for people getting into the space." />
                    <Question question="What is a hackathon?" answer="A hackathon is a 24-hour event where students come together to create a project that solves a problem. Students can work individually or in teams of up to 4 people. At the end of the 24 hours, students will present their projects to a panel of judges. The best projects will win prizes!" />
                    <Question question="Who can participate?" answer="Any high school student can participate! You do not need to have any prior experience with coding or hackathons. We will be hosting workshops to help you get started on your project." />
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

const Judges = (): JSX.Element => {
    return (
        <div id="judges" className=" text-white">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Judges</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <Person name="Dr. Dan Ding" position="Associate Professor and Vice Chair for Research at Pitt RST" text="" linkedin="" email="" image="0" />
                <Person name="Indrajit Poddar" position="Senior Cloud Infrastructure Architect at AWS" text="" linkedin="" email="" image="0" />
                <Person name="Dawson Haytock" position="Computer Science Department Chair at Shady Side Academy" text="" linkedin="" email="" image="0" />
                <Person name="Lindsey Morris" position="Clinical Research Scientist at Pitt RST" text="" linkedin="" email="" image="0" />
                <Person name="Michael Huang" position="Administrative Assistant at Pitt" text="" linkedin="" email="" image="0" />
                <Person name="Adit Shah" position="Software Engineer at Pitt RST" text="" linkedin="" email="" image="0" />
                <Person name="Breelyn Styler" position="VA Research Engineer at Human Engineering Research Laboratories" text="" linkedin="" email="" image="0" />
                <Person name="Siva Venkadesh" position="Computational Neuroscience Researcher at Pitt Dept. of Neurological Surgery" text="" linkedin="" email="" image="0" />
                <Person name="TBA" position="" text="" linkedin="" email="" image="0" />
                <Person name="TBA" position="" text="" linkedin="" email="" image="0" />
                <Person name="TBA" position="" text="" linkedin="" email="" image="0" />
                <Person name="TBA" position="" text="" linkedin="" email="" image="0" />
            </div>
        </div>
    )
}

const Prizes = (): JSX.Element => {
    let [isInternshipOpen, setInternshipOpen] = useState(false)
    let [isComputeOpen, setComputeOpen] = useState(false)
    let [isConnectOpen, setConnectOpen] = useState(false)
    let [isInnovateOpen, setInnovateOpen] = useState(false)
    let [isImpactOpen, setImpactOpen] = useState(false)
    let [isVisionOpen, setVisionOpen] = useState(false)
    let [isUnravelOpen, setUnravelOpen] = useState(false)
    let [is2024Open, set2024Open] = useState(false)

    useEffect(() => {
        if (isConnectOpen || isInternshipOpen || isComputeOpen || isInnovateOpen || isImpactOpen || isVisionOpen || isUnravelOpen || is2024Open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up function
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isConnectOpen, isInternshipOpen, isComputeOpen, isInnovateOpen, isImpactOpen, isVisionOpen, isUnravelOpen, is2024Open]);

    return (
        <div className="text-white" id="prizes">
            <div className="flex items-center">
                <motion.h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Prizes</motion.h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="py-4 flex flex-col">
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-8 mx-4 gap-2">
                    <button className="h-28 border border-black flex flex-col justify-center bg-gray-900 items-center text-center rounded-xl" onClick={() => setInternshipOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#ffd89b, #19547b']}>Internship Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border border-black flex flex-col justify-center bg-gray-900 text-center items-center rounded-xl" onClick={() => setComputeOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#17acff, #ff68f0']}>Compute Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border border-black flex flex-col justify-center bg-gray-900 text-center items-center rounded-xl" onClick={() => setConnectOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#ad5389, #3c1053']}>Connect Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border border-black flex flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setInnovateOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#7b920a, #0f9b0f']}>Innovate Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setImpactOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#22c1c3, #fdbb2d']}><span className="text-[0.75rem]" style={{lineHeight: "1rem"}}>Novice </span>Impact Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setVisionOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#396afc, #2948ff']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>Vision Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => setUnravelOpen(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#F3904F, #fffc00']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>Unravel Award</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                    <button className="h-28 border flex border-black flex-col justify-center bg-gray-900  text-center items-center rounded-xl" onClick={() => set2024Open(true)}>
                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#1C6FF8, #FEF720']}>2024 hacker()</LinearGradient></h1>
                        <p className="text-xs text-gray-400 italic">(Click me)</p>
                    </button>
                </div>
            </div>
            <Transition appear show={isInternshipOpen} as={Fragment}>
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
            </Transition>
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
                                            This award is presented to the team with the project showcasing their technical skills in relation to the prompt. The project must be highly complex and also must represent a finished and highly developed product. - Detailed desc. coming soon
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>TBA</p>
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
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#ad5389, #3c1053']}>Connect Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is presented to the team with the most potential impact on our communities. The project must also showcase a certain depth of completion and stand out among other submissions. - Detailed desc. coming soon
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>TBA</p>
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
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to left', '#7b920a, #0f9b0f']}>Innovate Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is presented to the team with the most innovative and groundbreaking idea and solution. The project must also showcase a certain depth of completion and stand out among other submissions. - Detailed desc. coming soon 
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>TBA</p>
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
                                        <p className="text-xs text-gray-800">Presented by Faaris Kamal</p>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is presented to the team with the most potential impact on our communities. This award is solely to be awarded to beginners. - Detailed desc. coming soon
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>TBA</p>
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
                                            This award is presented to the team with the most visionary idea. This award is solely to be awarded to beginners. - Detailed desc. coming soon
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>TBA</p>
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
            <Transition appear show={isUnravelOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setUnravelOpen(false)}>
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
                                        <h1 className="font-bold md:text-2xl"><LinearGradient gradient={['to right', '#F3904F, #fffc00']}><span className="text-[0.75rem]" style={{ lineHeight: "1rem" }}>Novice </span>Unravel Award</LinearGradient></h1>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This award is to be presented to the team that showcases the most growth from the beginning of the competition to the end. This award is solely to be awarded to beginners. - Detailed desc. coming soon
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>TBA</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                            onClick={() => setUnravelOpen(false)}
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
                                        <p className="text-xs text-gray-800">Presented by Faaris Kamal</p>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Thank you to our participants! You will receive a list of items just for attending the hackathon. - Detailed desc. coming soon
                                        </p>
                                        <div className="flex flex-col">
                                            <div className="pr-2 pt-2 text-xl">Prize</div>
                                            <div className="w-full border-b border-black"></div>
                                        </div>
                                        <p>TBA</p>
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
        <div className=" text-white">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Sponsors</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4">
                <div className="flex flex-col items-center">
                    <div className="p-4 m-4">
                        <h1 className="text-3xl ">Atom Sponsors</h1>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <Image src="/pittrst.png" alt="Pitt RST" height={500} width={750}></Image>
                            </div>
                        </div>
                    </div>
                    <div className=" p-4 m-4">
                        <h1 className="text-3xl">Proton Sponsors</h1>
                        <div className="flex">
                            <Image src="/acethetics.jpeg" alt="Pitt RST" height={250} width={200}></Image>
                        </div>
                    </div>
                    <div className=" p-4 m-4">
                        <h1 className="text-3xl">Electron Sponsors</h1>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <Image src="/medpath.png" alt="Medpath" height={100} width={250} style={{ backgroundColor: "white" }}></Image>
                            </div>
                            <div>
                                <Image src="/doclens_logo.jpg" alt="Doclens" height={50} width={200}></Image>
                            </div>
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
                <title>SSA.hack 2024</title>
            </Head>
            <Navbar current="SSA.hack();"/> 
            <div style={{
                backgroundImage: `url(/panelbg.png)`,
            }}>
                <Panel1 />
                <Panel2 />
                <Content />
                <Prizes />
                <Questions />
                <Judges />
                <Masterclass />
                <Sponsors />
            </div>
            <Footer />
        </> 
    );
}

export default Ssahack;