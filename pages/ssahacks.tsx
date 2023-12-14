import TypeIt from "typeit-react";
import Footer from "../components/footer";
import React from 'react'
import {motion} from 'framer-motion'
import Navbar from "../components/navbar";
import LinkButton from "../components/linkbutton";
import Particles from "react-particles";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Image from "next/image";
import Person from "@/components/person";
import Head from "next/head";

interface QuestionProps {
    question: string;
    answer: string;
}

const Question = ({ question, answer }: QuestionProps) => {
    return (
        <div className="border p-4 m-4">
            <h1 className="text-3xl text-blue-500">{question}</h1>
            <p className="text-lg">{answer}</p>
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
        <div className="bg-blue-500 h-screen">
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
                <Image priority={true} className="text-7xl" style={{filter: "invert(1)"}} src="/ssahack.png" alt="SSAHack 2023" width={800} height={300}></Image>
                <div className="border-t border-white w-1/2 my-4"></div>
                <TypeIt className="text-5xl">Hack for a <span className="text-yellow-500 italic">purpose.</span></TypeIt>
                <div className="flex space-x-4">
                    <button className="mt-4 bg-blue-800 text-white font-bold py-2 px-4 rounded text-2xl">Sign Up</button>
                    <button className="mt-4 bg-blue-800 text-white font-bold py-2 px-4 rounded text-2xl">Competitive Handbook</button>
                    <button className="mt-4 bg-blue-800 text-white font-bold py-2 px-4 rounded text-2xl">Contact</button>
                </div>
                <div className="absolute bottom-0 mb-8 rounded-lg p-4">
                    <h1 className='pb-2'>Learn more</h1>
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
        <motion.div className="flex">
            <div className="w-1/2 flex items-center justify-center">
                <div className="p-24">
                    <h1 className="text-7xl text-white">Win an internship at Pitt RST and more.</h1>
                    <LinkButton content="See the prizes" href="#prizes" />
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center relative " style={{ height: '100vh' }}>
                <div className='h-1/2 w-auto'>
                    <Image src="/upitt.png" width={800} height={720} alt="dude laughing"></Image>
                </div>            
            </div>
        </motion.div>
    )
}

const Content = (): JSX.Element => {
    return (
        //rgb(246, 196, 77)
        <div className="flex text-white">
            <div className="w-screen h-screen flex flex-col" style={{ height: "100vh" }}>
                <div className="flex h-full w-full">
                    <div className="w-1/2 h-full flex flex-col items-center justify-center">
                        <span className="text-center pb-4 text-4xl text-yellow-500">Tentative Schedule on <b> March 2, 2024</b></span>
                        <div className="flex text-4xl items-center justify-center">
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
                                <span>Masterclass: IoT</span>
                                <span>Masterclass: AI</span>
                                <span>Lunch</span>
                                <span>Judging</span>
                                <span>Closing Ceremony</span>
                                <span>Teams Leave</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <div className="p-24">
                            <h1 className="text-blue-500 text-4xl pb-4">8 hours to solve one problem.</h1>
                            <p className="text-lg">SSA.Hacks is a hackathon for high school students. Students will work in teams of up to 4 people to create a project that solves a problem. At the end of the 24 hours, students will present their projects to a panel of some of the most experienced judges in the Pittsburgh area. The stakes are high.</p>
                            <LinkButton content="Meet the judges" href="/judges" />
                        </div>
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

const Judges = (): JSX.Element => {
    return (
        <div id="judges" className=" text-white">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Judges & Masterclasses</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4 flex flex-col space-y-4 justify-center items-center">
                <div className="flex space-x-4"> 
                    <Person name="Dr. Dan Ding" position="Professor" text="Background info, etc." linkedin="" email="" image="/adamlee.jpg" />
                    <Person name="Indrajit Poddar" position="Cloud Architect at AWS" text="" linkedin="" email="" image="/adamlee.jpg" />
                    <Person name="Dawson Haytock" position="SSA Computer Department Chair" text="" linkedin="" email="" image="/adamlee.jpg" />
                </div>
                <div className="flex space-x-4">
                    <Person name="Judge 3 " position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />
                    <Person name="Judge 4" position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />
                    <Person name="Judge 5" position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />
                </div>
                <div className="flex space-x-4">
                    <Person name="Judge 6" position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />
                    <Person name="Judge 7" position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />
                    <Person name="Judge 8" position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />

                </div>
                <div className="flex space-x-4">
                    <Person name="Judge 9" position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />
                    <Person name="Judge 10" position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />
                    <Person name="Judge 11" position="Position" text="" linkedin="" email="" image="/adamlee.jpg" />
                </div>          
            </div>
        </div>
    )
}

const Prizes = (): JSX.Element => {
    return (
        <div className=" text-white" id="prizes">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Prizes</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="flex flex-col space-y-8">
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl px-4 text-yellow-500">The Internship Award</h1>
                            <div className="border-t w-full border-white flex-grow"></div>
                        </div>
                        <p className="text-xl">This award includes a part-time research internship in conjunction with the University of Pittsburgh Department of Rehabilitation Sciences and Technology.</p>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl px-4 text-gray-200">The Compute Award</h1>
                            <div className="border-t w-full border-white flex-grow"></div>
                        </div>
                        <p className="text-xl">This award includes a part-time research internship in conjunction with the University of Pittsburgh Department of Rehabilitation Sciences and Technology.</p>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl px-4 text-gray-300">The Connect Award</h1>
                            <div className="border-t w-full border-white flex-grow"></div>
                        </div>
                        <p className="text-xl">Land a high-ranking position on Silicon&apos;s technical and product team.</p>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl px-4 text-gray-400">The Innovate Award</h1>
                            <div className="border-t w-full border-white flex-grow"></div>
                        </div>
                        <p className="text-xl">This award includes a part-time research internship in conjunction with the University of Pittsburgh Department of Rehabilitation Sciences and Technology.</p>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl px-4 text-pink-500">The Impact Novice Award</h1>
                            <div className="border-t w-full border-white flex-grow"></div>
                        </div>
                        <p className="text-xl">This award includes a part-time research internship in conjunction with the University of Pittsburgh Department of Rehabilitation Sciences and Technology.</p>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl px-4 text-green-500">The Vision Novice Award</h1>
                            <div className="border-t w-full border-white flex-grow"></div>
                        </div>
                        <p className="text-xl">This award includes a part-time research internship in conjunction with the University of Pittsburgh Department of Rehabilitation Sciences and Technology.</p>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl px-4 text-blue-600">2024 SSA.hack Attendee</h1>
                            <div className="border-t w-full border-white flex-grow"></div>
                        </div>
                        <p className="text-xl">This award includes a part-time research internship in conjunction with the University of Pittsburgh Department of Rehabilitation Sciences and Technology.</p>
                    </div>
                </div>
            </div>
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
                    <div className=" p-4 m-4">
                        <h1 className="text-3xl ">Atomic Sponsors</h1>
                        <div className="flex">
                            <Image src="/pittrst.png" alt="Pitt RST" height={500} width={750}></Image>
                        </div>
                    </div>
                    <div className=" p-4 m-4">
                        <h1 className="text-3xl">Proton Sponsors</h1>

                    </div>
                    <div className=" p-4 m-4">
                        <h1 className="text-3xl">Electron Sponsors</h1>
                        <div className="flex">
                            <Image src="/medpath.png" alt="Medpath" height={100} width={250} style={{backgroundColor: "white"}}></Image>
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
                <Sponsors />
            </div>
            <Footer />
        </> 
    );
}

export default Ssahack;