import React, { useEffect, useRef, useState } from 'react';
import AboutImage from '../assets/lute3.jpg';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className={`bg-[#0b0f1a] py-16 px-6 md:px-12 transition-all duration-1000 ease-in-out transform 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-12">
                {/* Textbereich */}
                <div className="w-full sm:w-1/2 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-500">Über mich</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        Lute macht Comedy, die direkt aus dem Feed ins Zwerchfell geht. In schnellen Reaktions-Clips nimmt er Trends, Clips und Alltagsmomente aufs Korn – ehrlich, pointiert und mit einer guten Portion Humor.
                        Was ihn ausmacht: schnelle Schnitte, spontane Punchlines und ein Gespür dafür, was gerade im Netz passiert. Ob auf TikTok, YouTube oder Instagram – wer Lute folgt, bekommt täglich frischen Stoff zum Lachen.
                    </p>
                    <p className="text-gray-400 italic py-4">
                        „Oh ja, da regnets.“ — Lute
                    </p>
                </div>

                {/* Bild */}
                <div className="w-full sm:w-1/2 flex justify-center">
                    <img
                        src={AboutImage}
                        alt="lute"
                        className="rounded-xl shadow-xl object-cover w-full h-[400px] md:h-[500px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;