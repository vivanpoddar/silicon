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
    const [phone, setPhone] = useState("");
    const [discord, setDiscord] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        // e.preventDefault();

        // const formDataRef = ref(database, "formData");
        // push(formDataRef, {
        //     name: name,
        //     email: email,
        //     phone: phone,
        //     discord: discord,
        // })
        //     .then(() => {
        //         setName("");
        //         setEmail("");
        //         setPhone("");
        //         setDiscord("");
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
            <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
                <div className="w-full max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl text-white mb-3 text-center font-light tracking-wider">Join Silicon</h1>
                        <p className="text-gray-400 text-center mb-12 text-sm">Become a member today.</p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <label className="block text-gray-400 text-sm mb-2 font-light" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full py-4 px-0 text-white bg-transparent border-b border-gray-800 focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-2 font-light" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-4 px-0 text-white bg-transparent border-b border-gray-800 focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-2 font-light" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full py-4 px-0 text-white bg-transparent border-b border-gray-800 focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                                placeholder="(123) 456-7890"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-2 font-light" htmlFor="discord">
                                Discord
                            </label>
                            <input
                                type="text"
                                id="discord"
                                value={discord}
                                onChange={(e) => setDiscord(e.target.value)}
                                className="w-full py-4 px-0 text-white bg-transparent border-b border-gray-800 focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                                placeholder="username#0000"
                                required
                            />
                        </div>

                        <div className="pt-6">
                            <motion.button
                                type="submit"
                                whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="w-full border border-white py-4 rounded text-base font-light tracking-wide text-white transition-all duration-200"
                            >
                                Submit
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Join;