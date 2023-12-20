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
            <div className="overflow-hidden">
                <div className="flex bg-black justify-center">
                    <div className="pt-24 pb-24 px-4 flex-col justify-center">
                        <h1 className="text-2xl">Board of Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <Person image="/vivan.png" name="Vivan Poddar" position="Executive Director" text="" linkedin="https://www.linkedin.com/in/vivanpoddar" email="mailto:vivanneil@outlook.com" />
                            <Person image="/evan.png" name="Evan Xiang" position="Operations Director" text="" linkedin="https://www.linkedin.com/in/evan-xiang-4483b7231/" email="mailto:vivanneil@outlook.com" />
                            <Person image="/ethan.png" name="Ethan Chen" position="Finance, PR Director" text="" linkedin="https://www.linkedin.com/in/ethan-chen-065265283/" email="mailto:vivanneil@outlook.com" />
                            <Person image="/thomas.png" name="Thomas Wang" position="Marketing Director" text="" linkedin="https://www.linkedin.com/in/thomas-jichen-wang-a0b427268/" email="mailto:vivanneil@outlook.com" />
                            <Person image="/kiran.png" name="Kiran Tevar" position="Expansion Director" text="" linkedin="https://www.linkedin.com/in/kiran-tevar-680304278/" email="mailto:vivanneil@outlook.com" />
                            <Person image="/david.png" name="David Wang" position="Product Director" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        </div>
                        <h1 className="text-2xl pt-4">Regional Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <Person image="/liam.png" name="Ziyu (Liam) Lin" position="East Asia Region" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        </div>
                        <h1 className="text-2xl pt-4">Chapter Directors</h1>
                        <div className="border-b w-full mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <Person image="/anita.png" name="Anita Zhu" position="Deer Lakes School District" text="" linkedin="https://www.linkedin.com/" email="mailto:vivanneil@outlook.com" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Join;