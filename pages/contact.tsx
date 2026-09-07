import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Person from "@/components/person";
import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Silicon | Contact</title>
            </Head>
            <Navbar current="Team"/>
            <div className="min-h-screen bg-black">
                <div className="flex bg-black justify-center">
                    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 flex-col justify-center max-w-7xl w-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4">Leadership</h1>
                        <div className="border-b w-full mb-6"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-3xl">
                            <Person image="/boden.png" name="Boden Moraski" position="Executive Director" text="" linkedin="https://www.linkedin.com/in/boden-moraski" website="https://bodenmoraski.com" email="bodenmoraski@gmail.com" />
                            <Person image="/alex.jpg" name="Alex Du" position="Executive Director" text="" linkedin="https://www.linkedin.com/in/alexander-j-du" email="alexjdu2009@gmail.com" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4">Operations</h1>
                        <div className="border-b w-full mb-6"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <Person image="" name="Pranav Chandran" position="Finances" text="" linkedin="" email="" />
                            <Person image="" name="Krish Yadav" position="Growth" text="" linkedin="" email="" />
                            <Person image="" name="Daniel Gao" position="Technical" text="" linkedin="" email="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;