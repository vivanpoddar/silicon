import React, { Fragment, useRef, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog} from '@headlessui/react'
import {motion} from 'framer-motion'
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
        { name: 'shady.Hacks', href: 'shadyhacks', current: current === 'shady.Hacks' },
        { name: 'Hackathons', href: 'hackathons', current: current === 'Hackathons' },
        { name: 'About', href: 'about', current: current === 'About' },
        { name: 'Contact', href: 'contact', current: current === 'Contact' },
    ]
    
    let [isOpen, setIsOpen] = useState(false)

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
                            ))}
                        </div>
                    </div>
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
                                                    <Link href={item.href} key={item.name}>
                                                        <motion.div
                                                            whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                                                            transition={{ duration: 0.25 }}
                                                            className={classNames(
                                                                item.current ? 'border' : '',
                                                                'right-0 px-3 py-2 rounded text-sm font-medium text-black'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            &gt; {item.name}
                                                        </motion.div>
                                                    </Link>
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
