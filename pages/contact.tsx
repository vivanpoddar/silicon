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
                            <Person image="/thomas.png" name="Thomas Wang" position="Operations Director" text="" linkedin="https://www.linkedin.com/in/thomas-jichen-wang-a0b427268/" email="" />
<<<<<<< HEAD
                            <Person image="/suhaan.png" name="Suhaan Tammana" position="Finances Director" text="" linkedin="https://www.linkedin.com/in/ethan-chen-065265283/" email="" />
=======
    
>>>>>>> refs/remotes/master/main
                            {/* <Person image="/david.png" name="David Wang" position="Product Director" text="" linkedin="" email="" /> */}
                        </div>
                        <h1 className="text-2xl pt-4 text-white">Regional Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            {/* <Person image="/liam.png" name="Ziyu (Liam) Lin" position="East Asia Region" text="" linkedin="" email="" /> */}
                        </div>
                        <h1 className="text-2xl pt-4 text-white">Chapter Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            {/* <Person image="/anita.png" name="Anita Zhu" position="Deer Lakes School District" text="" linkedin="https://www.linkedin.com/in/anita-zhu-75b332224/details/experience/" email="" /> */}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Join;