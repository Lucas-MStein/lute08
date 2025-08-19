import React, { useRef, useEffect, useState } from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa'; // <-- Discord Icon importieren
import HeroImage from '../assets/lute1.webp';

const Hero = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.9 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => sectionRef.current && observer.unobserve(sectionRef.current);
    }, []);

    return (
        <section id="hero" className="relative w-full h-screen">
            <img
                src={HeroImage}
                alt="Berlin"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div
                ref={sectionRef}
                className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
                <h1 className="text-4xl sm:text-6xl font-bold text-blue-400 drop-shadow-md">
                    Comedy trifft Reaktion.
                </h1>
                <p className="mt-8 text-lg sm:text-xl text-gray-100">
                    Der Experte unter den Experten liefert mit seiner Expertise haarscharfe Analysen.
                </p>

                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                    <a
                        href="https://www.instagram.com/lute.08/"
                        className="flex items-center gap-2 px-7 py-3 text-lg rounded-full bg-pink-500 text-white
                            hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                    >
                        <FaInstagram className="text-2xl" /> Instagram
                    </a>
                    <a
                        href="https://www.tiktok.com/@lute_08"
                        className="flex items-center gap-2 px-7 py-3 text-lg rounded-full bg-black text-white
                            hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                    >
                        <FaTiktok className="text-2xl" /> TikTok
                    </a>
                    <a
                        href="https://www.youtube.com/@lute_08"
                        className="flex items-center gap-2 px-7 py-3 text-lg rounded-full bg-red-600 text-white
                            hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                    >
                        <FaYoutube className="text-2xl" /> YouTube
                    </a>
                    <a
                        href="https://www.twitch.tv/lute_08"
                        className="flex items-center gap-2 px-7 py-3 text-lg rounded-full bg-purple-600 text-white
                            hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                    >
                        <FaTwitch className="text-2xl" /> Twitch
                    </a>
                    <a
                        href="https://discord.gg/7HEVWkUt"
                        className="flex items-center gap-2 px-7 py-3 text-lg rounded-full bg-indigo-600 text-white
                            hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaDiscord className="text-2xl" /> Discord
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;