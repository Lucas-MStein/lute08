import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/lutelogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);

    // Scrollverhalten überwachen (Nav erst nach 50px einblenden)
    useEffect(() => {
        const handleScroll = () => setShowNav(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-sm text-white shadow z-50">
            <nav className="max-w-5xl mx-auto px-6 py-2 flex justify-between items-center">
                {/* Logo → linkt zur Hero-Section */}
                <a href="#hero" onClick={handleLinkClick} aria-label="Zur Start-Sektion">
                    <img
                        src={Logo}
                        alt="lute Logo"
                        className="h-10 md:h-12 w-auto cursor-pointer"
                        title="Zur Start-Sektion"
                    />
                </a>

                {/* Desktop Navigation – eingeblendet beim Scrollen */}
                <ul
                    className={`${
                        showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    } hidden md:flex space-x-6 text-sm font-medium transition-all duration-500 ease-in-out`}
                >
                    <li><a href="#highlights" className="hover:text-pink-400 transition">Highlights</a></li>
                    <li><a href="#sponsor" className="hover:text-pink-400 transition">Partner</a></li>
                    <li><a href="#about" className="hover:text-pink-400 transition">Über mich</a></li>
                    <li><a href="#contact" className="hover:text-pink-400 transition">Kontakt</a></li>
                </ul>

                {/* Mobile Menü-Icon */}
                <div className="md:hidden z-50">
                    {menuOpen ? (
                        <FaTimes onClick={() => setMenuOpen(false)} className="text-2xl cursor-pointer" />
                    ) : (
                        <FaBars onClick={() => setMenuOpen(true)} className="text-2xl cursor-pointer" />
                    )}
                </div>
            </nav>

            {/* Mobile Menü (Overlay) */}
            {menuOpen && (
                <ul className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-lg font-medium z-40">
                    <li><a href="#highlights" onClick={handleLinkClick} className="hover:text-pink-400 transition">Highlights</a></li>
                    <li><a href="#sponsor" onClick={handleLinkClick} className="hover:text-pink-400 transition">Partner</a></li>
                    <li><a href="#about" onClick={handleLinkClick} className="hover:text-pink-400 transition">Über mich</a></li>
                    <li><a href="#contact" onClick={handleLinkClick} className="hover:text-pink-400 transition">Kontakt</a></li>
                </ul>
            )}
        </header>
    );
};

export default Header;