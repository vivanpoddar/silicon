import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {motion} from "framer-motion";

const About = () => {
    return (
        <>
            <Navbar current="About"/>
            <div className="h-[50vh] bg-white flex flex-col justify-center items-center">
                <h1 className="text-7xl text-black text-center">Compute. Connect. Innovate.</h1>
                <motion.div
                    className="w-3/4 h-1 bg-black mt-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <div className="h-[25vh] bg-white text-black flex flex-col p-2">
                <div className="flex pl-40 pr-40">
                    <h1 className="text-9xl">1.</h1>
                    <div className="pl-10">
                        <h1 className="text-4xl">Insert a problem</h1>
                        <p>This is happening</p>
                    </div>
                </div>
            </div>
            <div className="h-[25vh] bg-white text-black flex flex-col p-2">
                <div className="pl-40 pr-40">
                    <h1 className="text-4xl">Insert a problem</h1>
                    <p>This is happening</p>
                </div>
            </div>
            <div className="h-[25vh] bg-white text-black flex flex-col p-2">
                <div className="pl-40 pr-40">
                    <h1 className="text-4xl">Insert a problem</h1>
                    <p>This is happening</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;