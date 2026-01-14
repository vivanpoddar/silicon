import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition, Dialog} from '@headlessui/react'
import {motion, AnimatePresence} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

interface NavbarProps {
    current: string;
}

export default function Navbar({ current }: NavbarProps) { 
    const navigation = [
        { name: 'Home', href: '/', current: current === 'Home' },
        { name: 'All Hackathons', href: '/hackathons', current: current === 'Hackathons' },
        { name: 'Hackathons', href: 'list', current: current === 'All Hackathons' },
        { name: 'Team', href: '/contact', current: current === 'Team' },
        { name: 'About', href: 'about', current: current === 'About' },
    ]

    const hackathonSublinks = [
        { name: 'shady.Hacks', href: '/shadyhacks' },
        { name: 'PantherHacks', href: '/' },
    ]
    
    let [isOpen, setIsOpen] = useState(false)
    let [showHackathonMenu, setShowHackathonMenu] = useState(false)
    let [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }
        
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <Disclosure as="nav" className="fixed top-0 w-full z-20 border-b bg-black" >
            {({ open }) => (
                <>
                    <div className="flex justify-between items-center h-16 ml-4 mr-4 w-full">
                        <Link href="/" key="Home">
                            <div className="flex items-center">
                                <div className='h-8 w-8'>
                                    <Image
                                        src="/image.png"
                                        alt="Silicon"
                                        width={32}
                                        height={64}
                                        layout="responsive"
                                    />     
                                </div>
                                <h1 className='pl-2 text-3xl text-white font-medium'>Silicon</h1>                             
                            </div>
                        </Link>
                        <div className="absolute md:left-0 right-0 md:ml-auto md:mr-auto md:flex md:space-x-4 items-center justify-center">
                            <button onClick={openModal} type="button">
                                <img src="/menu.svg" className='md:hidden h-8 w-8 mr-4 border p-1' style={{ filter: 'invert(100%)' }}></img>
                            </button>
                            {navigation.map((item) => (
                                item.name === 'Hackathons' ? (
                                    <div key={item.name} className="relative">
                                        <button
                                            onClick={() => setShowHackathonMenu(!showHackathonMenu)}
                                            className={classNames(
                                                item.current ? 'border' : '',
                                                'hidden md:block right-0 px-3 py-2 rounded text-sm font-medium text-white hover:bg-white hover:text-black transition-colors duration-200'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            Hosted on Silicon ↓
                                        </button>
                                    </div>
                                ) : (
                                    <Link href={item.href} key={item.name}>
                                        <motion.div
                                            whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                                            transition={{ duration: 0.25 }}
                                            className={classNames(
                                                item.current ? 'border' : '',
                                                'hidden md:block right-0 px-3 py-2 rounded text-sm font-medium text-white'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </motion.div>
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Secondary Hackathon Navbar - Desktop Only */}
                    <AnimatePresence>
                        {showHackathonMenu && isDesktop && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="border-b border-t border-gray-700 overflow-hidden"
                            >
                                <div className="flex justify-center items-center h-12 space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-400 text-sm font-medium">Sites</span>
                                        <div className="h-6 border-l border-gray-500"></div>
                                        {hackathonSublinks.map((sublink) => (
                                            sublink.name === 'PantherHacks' ? (
                                                <div key={sublink.name} className="px-2 border border-gray-700 py-1 rounded text-sm font-medium text-gray-700 cursor-not-allowed opacity-60">
                                                    {sublink.name} <span className="text-xs">(Coming Soon)</span>
                                                </div>
                                            ) : (
                                                <Link href={sublink.href} key={sublink.name}>
                                                    <motion.div
                                                        whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                                                        className="px-2 border border-gray-500 py-1 rounded text-sm font-medium text-gray-500"
                                                        onClick={() => setShowHackathonMenu(false)}
                                                    >
                                                        {sublink.name}
                                                    </motion.div>
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <div className="mt-2 text-black">
                                                {navigation.map((item) => (
                                                    item.name === 'Hackathons' ? (
                                                        <div key={item.name} className="mb-2">
                                                            <button
                                                                onClick={() => setShowHackathonMenu(!showHackathonMenu)}
                                                                className={classNames(
                                                                    item.current ? 'border' : '',
                                                                    'w-full text-left right-0 px-3 py-2 rounded text-sm font-medium text-black hover:bg-gray-100 transition-colors duration-200'
                                                                )}
                                                            >
                                                                &gt; More {showHackathonMenu ? '▲' : '▼'}
                                                            </button>
                                                            
                                                            <AnimatePresence>
                                                                {showHackathonMenu && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                                        className="ml-4 mt-2 space-y-1 overflow-hidden"
                                                                    >
                                                                        <div className="px-3 py-1 text-xs text-gray-500 font-medium">Sites:</div>
                                                                        
                                                                        {hackathonSublinks.map((sublink) => (
                                                                            sublink.name === 'PantherHacks' ? (
                                                                                <div
                                                                                    key={sublink.name}
                                                                                    className="px-3 py-1 ml-2 border border-gray-300 rounded text-sm font-medium text-gray-400 cursor-not-allowed opacity-60 block"
                                                                                >
                                                                                    → {sublink.name} <span className="text-xs">(Coming Soon)</span>
                                                                                </div>
                                                                            ) : (
                                                                                <Link href={sublink.href} key={sublink.name}>
                                                                                    <div
                                                                                        className="px-3 py-1 ml-2 border border-gray-300 rounded text-sm font-medium text-gray-600 hover:bg-gray-100 block"
                                                                                        onClick={closeModal}
                                                                                    >
                                                                                        → {sublink.name}
                                                                                    </div>
                                                                                </Link>
                                                                            )
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ) : (
                                                        <Link href={item.href} key={item.name}>
                                                            <motion.div
                                                                whileHover={{ backgroundColor: '#F3F4F6', color: '#000000' }}
                                                                transition={{ duration: 0.25 }}
                                                                className={classNames(
                                                                    item.current ? 'border' : '',
                                                                    'right-0 px-3 py-2 rounded text-sm font-medium text-black'
                                                                )}
                                                                aria-current={item.current ? 'page' : undefined}
                                                                onClick={closeModal}
                                                            >
                                                                &gt; {item.name}
                                                            </motion.div>
                                                        </Link>
                                                    )
                                                ))}
                                        </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}
