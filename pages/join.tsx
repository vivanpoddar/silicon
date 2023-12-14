import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";

const Join = () => {
    return (
        <>
            <Head>
                <title>Silicon | Join</title>
            </Head>
            <Navbar current="Join" />
            <div className="h-screen bg-black flex items-center justify-center">
                <h1 className="text-7xl text-white">Coming soon.</h1>
            </div>
            <Footer />
        </>
    )
}

export default Join;