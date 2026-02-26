import React, { useEffect, useRef, useState } from 'react';
import AboutImage from '../assets/lute3.webp';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // sauber beenden
                }
            },
            { threshold: 0.2, rootMargin: '-10% 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className={[
                'bg-[#0b0f1a] py-16',
                'transition-all duration-700 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12">
                    {/* Text */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-500">
                            Über mich
                        </h2>

                        <p className="mt-5 text-base md:text-lg leading-relaxed text-white/80 max-w-prose">
                            Lute macht Comedy, die direkt aus dem Feed ins Zwerchfell geht. In schnellen Reaktions-Clips nimmt er
                            Trends, Clips und Alltagsmomente aufs Korn – ehrlich, pointiert und mit einer guten Portion Humor.
                            Was ihn ausmacht: schnelle Schnitte, spontane Punchlines und ein Gespür dafür, was gerade im Netz passiert.
                            Ob auf TikTok, YouTube oder Instagram – wer Lute folgt, bekommt täglich frischen Stoff zum Lachen.
                        </p>

                        <blockquote className="mt-6 border-l-2 border-sky-500/60 pl-4 text-white/70 italic">
                            „Oh ja, da regnets.“ — Lute
                        </blockquote>
                    </div>

                    {/* Bild */}
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-md overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl shadow-black/25">
                            <img
                                src={AboutImage}
                                alt="Lute"
                                loading="lazy"
                                className="w-full aspect-[4/5] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;