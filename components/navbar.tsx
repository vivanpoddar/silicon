import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {motion} from 'framer-motion'
import Image from 'next/image'

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

interface NavbarProps {
    current: string;
}


export default function Navbar({ current }: NavbarProps) { 
    const navigation = [
        { name: 'Home', href: '/', current: current === 'Home' },
        { name: 'SSA.hack();', href: 'ssahacks', current: current === 'SSA.hack();' },
        { name: 'Join', href: 'join', current: current === 'Join' },
        { name: 'About', href: 'about', current: current === 'About' },
        { name: 'Contact', href: 'contact', current: current === 'Contact' }
    ]
    
    return (
        <Disclosure as="nav" className="fixed top-0 w-full z-20 border-b bg-black" >
            {({ open }) => (
                <>
                    <div className="flex justify-between items-center h-16 ml-4 mr-4 w-full">
                        <div className="flex items-center">
                            <img
                                className='h-8 w-auto'
                                src="/image.png"
                                alt="Silicon"
                            />       
                            <h1 className='pl-2 text-3xl font-medium'>Silicon</h1>                             
                        </div>
                        <div className="absolute left-0 right-0 ml-auto mr-auto space-x-4 flex items-center justify-center">
                            {navigation.map((item) => (
                                <motion.a
                                    whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                                    transition={{ duration: 0.25 }}
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'border' : '',
                                        'right-0 px-3 py-2 rounded text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="flex justify-between items-center">
                                {navigation.map((item) => (
                                    <motion.a
                                        whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                                        transition={{ duration: 0.25 }}
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-300' : '',
                                            'border px-3 py-2 text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
