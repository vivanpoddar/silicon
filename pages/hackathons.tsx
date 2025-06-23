import React from 'react';
import Head from "next/head";
import { motion } from 'framer-motion';
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LinkButton from "../components/linkbutton";

interface HackathonProps {
    title: string;
    date: string;
    location: string;
    description: string;
    image?: string;
    logo?: string;
    landscapeImage?: string;
    registrationLink?: string;
    status: 'upcoming' | 'ongoing' | 'completed';
}

const HackathonCard = ({ title, date, location, description, image, logo, landscapeImage, registrationLink, status }: HackathonProps) => {
    const getStatusColor = () => {
        switch (status) {
            case 'upcoming': return 'text-green-400';
            case 'ongoing': return 'text-yellow-400';
            case 'completed': return 'text-gray-400';
            default: return 'text-white';
        }
    };

    const getStatusText = () => {
        switch (status) {
            case 'upcoming': return 'Upcoming';
            case 'ongoing': return 'Ongoing';
            case 'completed': return 'Completed';
            default: return '';
        }
    };

    return (
        <motion.div 
            className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 m-2 sm:m-4 hover:border-blue-500 transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {landscapeImage && (
                <div className="w-full h-32 sm:h-40 mb-4 overflow-hidden rounded-lg relative">
                    <Image src={landscapeImage} fill alt={`${title} landscape`} className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            )}

            {image && !landscapeImage && (
                <div className="w-full h-40 sm:h-48 mb-4 overflow-hidden rounded-lg">
                    <Image src={image} width={400} height={200} alt={title} className="w-full h-full object-cover" />
                </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div className="flex items-center gap-2 flex-1">
                    {logo && (
                        <Image src={logo} width={40} height={40} alt={`${title} logo`} className="rounded opacity-60 flex-shrink-0" />
                    )}
                    <h2 className="text-xl sm:text-2xl text-white font-bold leading-tight">{title}</h2>
                </div>
                <span className={`text-sm font-semibold ${getStatusColor()} flex-shrink-0`}>
                    {getStatusText()}
                </span>
            </div>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">{date} • {location}</p>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">{description}</p>
            {registrationLink && status === 'upcoming' && (
                <div className="w-full">
                    <LinkButton content="Register Now" href={registrationLink} />
                </div>
            )}
        </motion.div>
    );
};

export default function Hackathons() {
    const hackathons: HackathonProps[] = [
        {
            title: "shady.Hacks 2025-2026",
            date: "December 1-2, 2025",
            location: "Shady Side Academy, Pittsburgh",
            description: "Our high school hackathon brings together the brightest young minds in Pittsburgh to compete, compute, and connect. Build innovative solutions and network with peers.",
            logo: "/ssahack.png",
            landscapeImage: "/shadysidepic.jpg",
            registrationLink: "/shadyhacks",
            status: 'upcoming'
        },
    ];

    return (
        <>
            <Head>
                <title>Silicon | Hackathons</title>
            </Head>
            <Navbar current="Hackathons" />
            
            <div className="min-h-screen bg-black relative overflow-hidden">

                <motion.div 
                    className="pt-[6.5rem] pb-16 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="max-w-7xl mx-auto text-center">

                        <motion.h1 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Hackathons around the World
                        </motion.h1>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            {hackathons.map((hackathon, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <HackathonCard {...hackathon} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div 
                        className="mt-16 text-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Join the Community?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                            Do you own a hackathon or know of one that should be featured here? We want to hear from you! Join our community of innovators and help us shape the future of high school hackathons.
                        </p>
                        <LinkButton content="Contact Us" href="/contact" />
                    </motion.div>
                </motion.div>
            </div>
            
            <Footer />
        </>
    );
}