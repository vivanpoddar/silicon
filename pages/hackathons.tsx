import React, { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LinkButton from "../components/linkbutton";

interface HackathonProps {
    title: string;
    date: string;
    location: string;
    description?: string;
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
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 m-2 sm:m-4 flex flex-col">

            <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div className="flex items-center gap-2 flex-1">
                    {logo && (
                        <div className="w-10 h-10 flex-shrink-0 rounded overflow-hidden">
                            <Image 
                                src={logo} 
                                width={40} 
                                height={40} 
                                alt={`${title} logo`} 
                                className="w-full h-full object-contain opacity-60"
                                quality={50}
                                loading="lazy"
                            />
                        </div>
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
        </div>
    );
};

const HackathonLine = ({ title, date, location, registrationLink, status }: HackathonProps) => {
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
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex items-center gap-4">
            <div className="flex items-center gap-4 flex-1">
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white leading-tight truncate">{title}</h3>
                    <p className="text-gray-400 text-sm">{date} • {location}</p>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <span className={`text-sm font-semibold ${getStatusColor()} flex-shrink-0`}>
                    {getStatusText()}
                </span>
                {registrationLink && status === 'upcoming' && (
                    <LinkButton content="Register" href={registrationLink} />
                )}
            </div>
        </div>
    );
};

export default function Hackathons() {
    const [viewMode, setViewMode] = useState<'cards' | 'lines'>('cards');
    
    const hackathons: HackathonProps[] = [
        {
            title: "Hack the Nest",
            date: "September 20-21",
            location: "Tysons Corner, VA",
            description: "This September, join 300 hackers for the DMV area's largest high school hackathon. Hack the Nest is a collaborative coding event where participants (also called hackers) bring their innovative ideas to life in just one weekend. Whether it's 2am-debugging with cookies or karaoke, our ultimate goal is to host an unforgettable experience for an audience normally barred from hackathons.",
            logo: "/Hack_the_Nest_Logo.webp",
            landscapeImage: "/hackthenestbackground.png",
            registrationLink: "https://hackthenest.org",
            status: 'completed'
        },
        {
            title: "Hack the Colosseum",
            date: "October 18",
            location: "Ellicott City, MD",
            description: "Hack the Colosseum envisions a vibrant and collaborative community of student programmers. By bringing students from diverse backgrounds and experiences together, we aim to cultivate an innovative and supportive learning environment that inspires creativity and encourages growth. Through hands-on workshops, mentoring, and team challenges, we strive to inspire the next generation of tech leaders and innovators here in the DMV.",
            logo: "/hackthecolosseum.png",
            landscapeImage: "/hackthecolosseumbanner.png",
            registrationLink: "https://hack-the-colosseum.devpost.com/",
            status: 'upcoming'
        },
        {
            title: "shady.Hacks",
            date: "December 1",
            location: "Pittsburgh, PA",
            description: "This December, join us at Shady Side Academy for a Saturday filled with innovation and creativity. Our high school hackathon brings together the brightest young minds in Pittsburgh to compete, compute, and connect. Build innovative solutions and network with peers.",
            logo: "/ssahack.png",
            landscapeImage: "/shadysidepic.jpg",
            registrationLink: "/shadyhacks",
            status: 'upcoming'
        },
        {
            title: "QuHacks",
            date: "December 14",
            location: "Laurel, MD",
            description: "QuHacks is a day-long hackathon by students, for students. Join us for a day of creation, innovation, and fun with fellow middle and high schoolers interested in coding. From seasoned coding veterans to first-time programmers, all are welcome to join. Discover your ability to create change by developing technology to solve real-world problems, attend workshops, and meet some new friends. We can't wait to see you there!",
            logo: "/quhacks.png",
            landscapeImage: "/quhacksbanner.png",
            registrationLink: "https://quhacks.tech/",
            status: 'upcoming'
        },
        {
            title: "HackNA",
            date: "March",
            location: "Wexford, PA",
            description: "HackNA is a high school hackathon, hosted by the team from North Allegheny Senior High School. During the competition, you will create a software or hardware project from scratch based on a central theme revealed at the opening ceremony. No prior experience is required – we welcome anyone interested and will be providing workshops and mentor expertise to help you get started! At the end of the competition, teams will pitch their project to a panel of judges in a chance to win sponsored prizes and rewards.",
            logo: "hacknalogo.svg",
            landscapeImage: "/hacknabanner.jpg",
            registrationLink: "https://hackna.org",
            status: 'upcoming'
        },
        {
            title: "Synthax",
            date: "November 15-16",
            location: "Bengaluru, KA, India",
            description: "Synthax is a space where students explore, code, and build together. Its a collaborative tech playground for all skill levels, from total beginners to curious creators.",
            logo: "/synthaxlogo.png",
            landscapeImage: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/681/658/datas/full_width.png",
            registrationLink: "https://synthax.tech",
            status: 'upcoming'
        },
        {
            title: "Hack the Land",
            date: "July 25-26",
            location: "Cleveland, OH",
            description: "This July, Join over 100+ teen hackers in Cleveland, Ohio at our first high-school hackathon organized by high-schoolers! Hack the Land is a social coding/engineering event, where teen hackers/participants turn their ideas to reality in just one weekend. Whether it's 2am-debugging with cookies or karaoke, our ultimate goal is to host an unforgettable experience for participants.",
            logo: "/HTL.svg",
            registrationLink: "https://hacktheland.xyz/",
            status: 'upcoming'
        },
    ];

    const comingSoonHackathons = [
        {
            title: "Silicon Georgia",
            date: "Spring 2026",
            location: "Augusta, GA",
            status: 'upcoming' as const
        },
        {
            title: "Parkland High School",
            date: "Spring 2026",
            location: "Allentown, PA",
            status: 'upcoming' as const
        },
        {
            title: "Fox Chapel High School",
            date: "Winter 2025", 
            location: "Pittsburgh, PA",
            status: 'upcoming' as const
        },
        {
            title: "Franklin Regional High School",
            date: "Spring 2026",
            location: "Murraysville, PA", 
            description: "Girls only hackathon at Franklin Regional High School.",
            status: 'upcoming' as const
        }
    ];

    return (
        <>
            <Head>
                <title>Silicon | Hackathons</title>
            </Head>
            <Navbar current="Hackathons" />
            
            <div className="min-h-screen bg-black relative overflow-hidden">

                <div className="pt-[6.5rem] pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Hackathons around the World
                        </h1>

                        <div className="flex justify-center mb-8">
                            <div className="bg-gray-800 rounded-lg p-1 flex">
                                <button
                                    onClick={() => setViewMode('cards')}
                                    className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                                        viewMode === 'cards' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-gray-400'
                                    }`}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    
                                </button>
                                <button
                                    onClick={() => setViewMode('lines')}
                                    className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                                        viewMode === 'lines' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-gray-400'
                                    }`}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                    
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        {viewMode === 'cards' ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                {hackathons.map((hackathon, index) => (
                                    <HackathonCard key={index} {...hackathon} />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {hackathons.map((hackathon, index) => (
                                    <HackathonLine key={index} {...hackathon} />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Coming Soon Section */}
                    <div className="mt-16 max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Coming Soon</h2>
                            <p className="text-gray-400 text-sm sm:text-base">
                                Exciting hackathons in development. Stay tuned for registration details!
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            {comingSoonHackathons.map((hackathon, index) => (
                                <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 opacity-75">
                                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                                        <h3 className="text-xl sm:text-2xl text-white font-bold leading-tight">{hackathon.title}</h3>
                                        <span className="text-sm font-semibold text-blue-400 flex-shrink-0">
                                            Coming Soon
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm sm:text-base">{hackathon.date} • {hackathon.location}</p>
                                    {hackathon.description && (
                                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{hackathon.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center px-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Join the Community?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                            Do you own a hackathon or know of one that should be featured here? We want to hear from you! Join our community of innovators and help us shape the future of high school hackathons.
                        </p>
                        <LinkButton content="Contact Us" href="/contact" />
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}