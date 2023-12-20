import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {motion} from "framer-motion";
import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <title>Silicon | About</title>
            </Head>
            <Navbar current="About"/>
            <div>
                <div className="pt-24 bg-white flex flex-col justify-center items-center">
                    <h1 className="text-7xl text-black text-center">Compute. Connect. Innovate.</h1>
                    <motion.div
                        className="w-3/4 h-1 bg-black mt-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
                <div className="space-y-24 bg-white">
                    <div className="pt-24 text-black flex flex-col p-2">
                        <div className="md:pl-40 md:pr-40">
                            <h1 className="text-4xl text-center">Building Tech Leaders.</h1>
                            <p className="text-center">Lets connect more highschoolers with real-life experience. We&apos;re passionate about cultivating the next generation of tech leaders. Our programs focus on nurturing skills, fostering creativity, and instilling a sense of responsibility among the foundations&apos;s computer scientists.</p>
                        </div>
                    </div>
                    <div className=" bg-white text-black flex flex-col p-2">
                        <div className="md:pl-40 md:pr-40">
                            <h1 className="text-4xl text-center">Products and Solutions for Social Good</h1>
                            <p className="text-center">At our nonprofit, we harness the potential of technology to create positive change in the world. Our organization works on various award-winning projects that aim to improve our world. From developing innovative solutions to addressing global challenges, we believe in the transformative power of computer science.</p>
                        </div>
                    </div>
                    <div className="pb-24 bg-white text-black flex flex-col p-2">
                        <div className="md:pl-40 md:pr-40">
                            <h1 className="text-4xl text-center">Quality Tech Education in our Highschools</h1>
                            <p className="text-center">Our nonprofit believes that quality tech education should be accessible to everyone, regardless of background or socioeconomic status. Through scholarships, workshops, and online resources, we strive to democratize computer science education.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;