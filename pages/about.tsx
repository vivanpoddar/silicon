import Footer from "../components/footer";
import Navbar from "../components/navbar";

const About = () => {
    return (
        <>
            <Navbar current="About"/>
            <div className="h-screen bg-white flex items-center justify-center">
                <h1 className="text-7xl text-black">Compute. Connect. Innovate.</h1>
            </div>
            <Footer />
        </>
    )
}

export default About;