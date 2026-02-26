import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa';
import HeroImage from '../assets/lute1.webp';

const SOCIALS = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/lute.08/',
        Icon: FaInstagram,
        className:
            'bg-pink-500 hover:bg-pink-600',
    },
    {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@lute_08',
        Icon: FaTiktok,
        className:
            'bg-black hover:bg-neutral-800',
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@lute_08',
        Icon: FaYoutube,
        className:
            'bg-red-600 hover:bg-red-700',
    },
    {
        label: 'Twitch',
        href: 'https://www.twitch.tv/lute_08',
        Icon: FaTwitch,
        className:
            'bg-purple-600 hover:bg-purple-700',
    },
    {
        label: 'Discord',
        href: 'https://discord.gg/a2McB9g3qg',
        Icon: FaDiscord,
        className:
            'bg-indigo-600 hover:bg-indigo-700',
    },
];

const Hero = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // nach erstem Trigger stoppen
                }
            },
            {
                threshold: 0.2,
                rootMargin: '-10% 0px',
            }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="hero" className="relative w-full min-h-[100svh] overflow-hidden">
            {/* Background image */}
            <img
                src={HeroImage}
                alt="Lute"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                fetchpriority="high"
            />

            {/* Overlay (mehr Tiefe als plain schwarz) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/80" />

            <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6">
                <div
                    ref={sectionRef}
                    className={[
                        'w-full max-w-3xl text-center',
                        'transition-all duration-1000 ease-out',
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                    ].join(' ')}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-blue-400 drop-shadow">
                        Comedy trifft Reaktion.
                    </h1>

                    <p className="mt-6 text-base sm:text-xl text-white/90 leading-relaxed">
                        Der Experte unter den Experten liefert mit seiner Expertise haarscharfe Analysen.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                        {SOCIALS.map(({ label, href, Icon, className }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${label} öffnen`}
                                className={[
                                    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-base sm:text-lg',
                                    'text-white shadow-md shadow-black/20',
                                    'transition transform duration-200',
                                    'hover:scale-[1.03] active:scale-[0.99]',
                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                                    className,
                                ].join(' ')}
                            >
                                <Icon className="text-xl sm:text-2xl" />
                                <span>{label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Optional: kleiner Hinweis/Anchor */}
                    <p className="mt-8 text-sm text-white/60">
                        Scroll für Highlights ↓
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;