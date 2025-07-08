import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { database } from "../firebase";
import { ref, push } from "firebase/database";

const Join = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        // e.preventDefault();

        // const formDataRef = ref(database, "formData");
        // push(formDataRef, {
        //     name: name,
        //     email: email,
        // })
        //     .then(() => {
        //         setName("");
        //         setEmail("");
        //     })
        //     .catch((error) => {
        //         console.error("Error saving data:", error);
        //     });
    };

    return (
        <>
            <Head>
                <title>Silicon | Join</title>
            </Head>
            <Navbar current="Join" />
            <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700">
                    <h1 className="text-2xl sm:text-3xl text-white mb-6 text-center font-bold">Join the mission</h1>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full py-3 px-4 text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-3 px-4 text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <motion.button
                            type="submit"
                            whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className='w-full border border-white py-3 px-6 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300'
                        >
                            Submit
                        </motion.button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Join;