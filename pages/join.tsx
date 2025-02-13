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
        e.preventDefault();

        const formDataRef = ref(database, "formData");
        push(formDataRef, {
            name: name,
            email: email,
        })
            .then(() => {
                setName("");
                setEmail("");
            })
            .catch((error) => {
                console.error("Error saving data:", error);
            });
    };

    return (
        <>
            <Head>
                <title>Silicon | Join</title>
            </Head>
            <Navbar current="Join" />
            <div className="h-screen bg-black flex items-center justify-center">
                <form onSubmit={handleSubmit} className=" p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-4">Join the mission</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <motion.button
                            type="submit"
                            whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                            transition={{ duration: 0.25 }}
                            className='border hidden md:block right-0 px-3 py-2 rounded text-sm font-medium text-white'
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