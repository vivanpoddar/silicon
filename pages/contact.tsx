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
            <div className="overflow-hidden h-screen">
                <div className="flex bg-black justify-center">
                    <div className="pt-24 pb-24 px-4 flex-col justify-center">
                        <h1 className="text-2xl text-white">Leadership</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <Person image="/vivan.png" name="Vivan Poddar" position="Executive Director" text="" linkedin="https://www.linkedin.com/in/vivanpoddar" email="mailto:vivanneil@outlook.com" />
                            {/* <Person image="/evan.png" name="Evan Xiang" position="SSA.hack Director" text="" linkedin="https://www.linkedin.com/in/evan-xiang-4483b7231/" email="mailto:evankxiang@gmail.com" /> */}
                            <Person image="/thomas.png" name="Thomas Wang" position="Operations Director" text="" linkedin="https://www.linkedin.com/in/thomas-jichen-wang-a0b427268/" email="mailto:wangthomas19@outlook.com" />
                            <Person image="/boden.png" name="Boden Moraski" position="Outreach Director" text="" linkedin="https://www.linkedin.com/in/boden-moraski/overlay/contact-info/" email="bodenmoraski@gmail.com" />
                            {/* <Person image="/david.png" name="David Wang" position="Product Director" text="" linkedin="" email="" /> */}
                        </div>
                        {/* <h1 className="text-2xl pt-4 text-white">Regional Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        </div>
                        <h1 className="text-2xl pt-4 text-white">Chapter Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        </div> */}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Join;