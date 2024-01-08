import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {motion} from "framer-motion";
import Head from 'next/head'
import Image from "next/image";

const About = () => {
    return (
        <>
            <Head>
                <title>Silicon | About</title>
            </Head>
            <Navbar current="About"/>
            <div>
                <div className="pt-24 bg-white flex flex-col justify-center items-center">
                    <h1 className="md:text-7xl text-3xl text-black text-center">Compute. Connect. Innovate.</h1>
                    <motion.div
                        className="mb-4 w-3/4 h-1 bg-black mt-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
                <div className=" bg-white">
                    <div className="justify-items-center items-center text-black flex flex-col p-2">
                        <Image src="/about.jpg" width={800} height={0} alt="dude laughing"></Image>
                        <div className="md:pl-40 md:pr-40">
                            <h1 className="md:text-4xl text-xl font-bold text-center pt-4 pb-4">Building Tech Leaders.</h1>
                            <p className="text-center md:text-4xl pb-4">
                                Silicon aims to foster the next generation of thoughtful, ethical, and interdisciplinary computer science leaders and create a universal awareness of the computer science that powers the modern world. More specifically, Silicon aims to produce leaders that can think outside the box, analyze computational solutions for potential harms to society and solve them, and connect knowledge in a breadth of fields to create new and novel solutions. Silicon also aims to provide the general public with the knowledge to understand the computer science that powers the modern digital world and how it affects them physiologically, emotionally, and psychologically.
                            </p>
                            <p className="text-center md:text-4xl">
                               We are looking to begin our journey by hosting a hackathon in Spring of 2024, SSA.hack(). An interest form and more information will be available soon. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;