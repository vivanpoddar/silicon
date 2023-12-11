import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {motion} from "framer-motion";

const About = () => {
    return (
        <>
            <Navbar current="About"/>
            <div className="h-[40vh] bg-white flex flex-col justify-center items-center">
                <h1 className="text-7xl text-black text-center">Compute. Connect. Innovate.</h1>
                <motion.div
                    className="w-3/4 h-1 bg-black mt-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <div className="h-[20vh] bg-white text-black flex flex-col p-2">
                <div className="pl-40 pr-40">
                    <h1 className="text-4xl">Building Tech Leaders.</h1>
                    <p>Lets connect more highschoolers with real-life experience. We&apos;re passionate about cultivating the next generation of tech leaders. Our programs focus on nurturing skills, fostering creativity, and instilling a sense of responsibility among the foundations&apos;s computer scientists.</p>
                </div>
            </div>
            <div className="h-[20vh] bg-white text-black flex flex-col p-2">
                <div className="pl-40 pr-40">
                    <h1 className="text-4xl">Products and Solutions for Social Good</h1>
                    <p>At our nonprofit, we harness the potential of technology to create positive change in the world. Our organization works on various award-winning projects that aim to improve our world. From developing innovative solutions to addressing global challenges, we believe in the transformative power of computer science.</p>
                </div>
            </div>
            <div className="h-[20vh] bg-white text-black flex flex-col p-2">
                <div className="pl-40 pr-40">
                    <h1 className="text-4xl">Quality Tech Education in our Highschools</h1>
                    <p>Our nonprofit believes that quality tech education should be accessible to everyone, regardless of background or socioeconomic status. Through scholarships, workshops, and online resources, we strive to democratize computer science education.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;