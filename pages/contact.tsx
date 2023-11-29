import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Join = () => {
    return (
        <>
            <Navbar current="Contact"/>
            <div className="h-screen bg-black flex pt-24 justify-center">
                <h1 className="text-7xl text-white">Meet our team</h1>
            </div>
            <Footer />
        </>
    )
}

export default Join;