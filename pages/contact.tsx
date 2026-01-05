import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Person from "@/components/person";
import Head from "next/head";

const Join = () => {
    return (
        <>
            <Head>
                <title>Silicon | Contact</title>
            </Head>
            <Navbar current="Contact"/>
            <div className="min-h-screen bg-black">
                <div className="flex bg-black justify-center">
                    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 flex-col justify-center max-w-7xl w-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4">Leadership</h1>
                        <div className="border-b w-full mb-6"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                            <Person image="/vivan.png" name="Vivan Poddar" position="President" text="" linkedin="https://www.linkedin.com/in/vivanpoddar" email="mailto:vivanneil@outlook.com" />
                            <Person image="/thomas.png" name="Thomas Wang" position="Operations Director" text="" linkedin="https://www.linkedin.com/in/thomas-jichen-wang-a0b427268/" email="mailto:wangthomas19@outlook.com" />
                            <Person image="/tushar.png" name="Tushar Mehta" position="Outreach Director" text="" linkedin="https://www.linkedin.com/in/tushar-mehta-104a21375/" email="mehtat124@gmail.com" />
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

export default Join;