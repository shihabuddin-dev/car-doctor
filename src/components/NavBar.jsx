"use client"
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const NavBar = () => {
    const { data: session, status } = useSession()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    const buttons =
        <div className='space-x-2'>
            {status == 'authenticated' ? <>
                <Image
                    src={session?.user?.image}
                    width={50}
                    height={50}
                    alt="user-logo"
                />
                <button className='btn-sm btn btn-primary rounded-md' onClick={() => signOut()}>Log Out </button>
            </> : <><Link href='/login'><button className='btn-sm btn hover:btn-primary rounded-md'>login</button></Link>
                <Link href='/register'><button className='btn-sm btn hover:btn-primary rounded-md'>Register</button></Link></>}
        </div>


    return (
        <nav className="bg-base-100 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href='/'>
                        <div className="flex-shrink-0">
                            <div className="flex items-center">
                                <Image
                                    src="/assets/logo.svg"
                                    alt="Car Doctor Logo"
                                    width={40}
                                    height={40}
                                    className="w-15 h-15"
                                />
                            </div>
                        </div>
                    </Link>
                    {/* Desktop Navigation Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-accent hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Right Side Icons and Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div> {buttons}</div>
                        {/* Search Icon */}
                        <button className="text-secondary hover:text-primary p-2 transition-colors duration-200">
                            <FaSearch className="w-5 h-5" />
                        </button>

                        {/* Shopping Bag Icon */}
                        <button className="text-secondary hover:text-primary p-2 transition-colors duration-200">
                            <FaShoppingBag className="w-5 h-5" />
                        </button>

                        {/* Appointment Button */}
                        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-base-100 px-3 py-1 rounded-lg font-medium transition-colors duration-200">
                            Appointment
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-secondary hover:text-primary p-2 transition-colors duration-200"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className='px-3'> {buttons}</div>

                            {/* Mobile Icons and Button */}
                            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">

                                <button className="text-secondary hover:text-primary p-2 transition-colors duration-200">
                                    <FaSearch className="w-5 h-5" />
                                </button>

                                <button className="text-secondary hover:text-primary p-2 transition-colors duration-200">
                                    <FaShoppingBag className="w-5 h-5" />
                                </button>

                                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-3 py-1 rounded-lg font-medium transition-colors duration-200">
                                    Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;