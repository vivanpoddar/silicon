import TypeIt from "typeit-react";
import Footer from "../components/footer";
import React from 'react'
import {motion} from 'framer-motion'
import Navbar from "../components/navbar";
import LinkButton from "../components/linkbutton";
import Link from "next/link";
import Image from "next/image";

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
    return (
        //rgb(246, 196, 77)
        <div className="flex bg-blue-500 h-screen">
            <div className="absolute w-screen h-screen flex items-center justify-center flex-col" style={{ height: "100vh" }}>
                <h1 className="text-7xl">SSAHack 2023</h1><br />
                <div className="border-t border-white w-1/2 my-4"></div>
                <TypeIt className="text-5xl">Hack for a <span className="text-yellow-500 italic">purpose.</span></TypeIt>
                <button className="mt-4 bg-blue-800 text-white font-bold py-2 px-4 rounded text-2xl">Sign Up</button>
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
        <motion.div className="flex border-b border-white bg-black">
            <div className="w-1/2 flex items-center justify-center">
                <div className="p-24">
                    <h1 className="text-7xl text-white">Win an internship at Pitt RST and more.</h1>
                    <LinkButton content="See the prizes" href="#" />
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
        <div className="flex bg-black text-white ">
            <div className="w-screen h-screen flex items-center flex-col" style={{ height: "100vh" }}>
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
                            <LinkButton content="Meet the judges" href="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Questions = (): JSX.Element => {
    return (
        <div>
            <div className="bg-black text-white">
                <div className="flex items-center">
                    <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">FAQ</h1>
                    <div className="border-t border-white flex-grow"></div>
                </div>
                <div className="p-4">
                    <Question question="What is a hackathon?" answer="A hackathon is a 24-hour event where students come together to create a project that solves a problem. Students can work individually or in teams of up to 4 people. At the end of the 24 hours, students will present their projects to a panel of judges. The best projects will win prizes!" />
                    <Question question="Who can participate?" answer="Any high school student can participate! You do not need to have any prior experience with coding or hackathons. We will be hosting workshops to help you get started on your project." />
                </div>
            </div>
        </div>
    )
}

const Judges = (): JSX.Element => {
    return (
        <div className="bg-black text-white">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Judges & Masterclasses</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4">
            </div>
        </div>
    )
}

const Prizes = (): JSX.Element => {
    return (
        <div className="bg-black text-white">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Prizes</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4">
            </div>
        </div>
    )
}

const Sponsors = (): JSX.Element => {
    return (
        <div className="bg-black text-white">
            <div className="flex items-center">
                <h1 className="text-5xl text-white pr-4 pl-4 tracking-widest font-light">Sponsors</h1>
                <div className="border-t border-white flex-grow"></div>
            </div>
            <div className="p-4">
                <div className="flex flex-col items-center">
                    <div className=" p-4 m-4">
                        <h1 className="text-3xl text-blue-500">Proton Sponsors</h1>

                    </div>
                    <div className=" p-4 m-4">
                        <h1 className="text-3xl text-gray-400">Neutron Sponsors</h1>

                    </div>
                    <div className=" p-4 m-4">
                        <h1 className="text-3xl text-yellow-500">Electron Sponsors</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

const Ssahack = () => {
    return (
        <>
            <Navbar current="SSA.hack();"/> 
            <Panel1 />
            <Panel2 />
            <Content />
            <Prizes/>
            <Questions />
            <Judges/>
            <Sponsors />
            <Footer />
        </> 
    );
}

export default Ssahack;