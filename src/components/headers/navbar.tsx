"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between w-full bg-primary text-white px-6 py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold">STAYKUY</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <a href="#booking" className="hover:text-blue-200 transition-colors">My Booking</a>
                <a href="#wishlist" className="hover:text-blue-200 transition-colors">Wishlist</a>
                <a href="#blog" className="hover:text-blue-200 transition-colors">Blog</a>
                <a href="#help" className="hover:text-blue-200 transition-colors">Help</a>
            </div>

            {/* User Profile */}
            <div className="hidden md:flex items-center ml-8">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                        T
                    </div>
                    <span className="font-medium">ID</span>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none cursor-pointer">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-500 px-6 py-4 shadow-md z-50">
                    <div className="flex flex-col space-y-4">
                        <a href="#booking" className="hover:text-blue-200 transition-colors py-2">My Booking</a>
                        <a href="#wishlist" className="hover:text-blue-200 transition-colors py-2">Wishlist</a>
                        <a href="#blog" className="hover:text-blue-200 transition-colors py-2">Blog</a>
                        <a href="#help" className="hover:text-blue-200 transition-colors py-2">Help</a>
                        <div className="flex items-center space-x-4 py-2">
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                                T
                            </div>
                            <span className="font-medium">ID</span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;