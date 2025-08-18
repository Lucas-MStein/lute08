import React, { useRef, useEffect, useState } from 'react';
import holyLogo from '../assets/holy-logo.png'; // Bitte füge das Logo ins assets-Verzeichnis ein

const SponsorSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            id="sponsor"
            ref={sectionRef}
            className={`bg-[#0b0f1a] text-white py-16 px-6 md:px-12 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-500 mb-6">
                    Partner
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Mit den Clean Energy Drinks von{' '}
                    <a
                        href="https://weareholy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 underline hover:text-pink-500"
                    >
                        HOLY
                    </a>{' '}
                    bist du ready für jede Reaktion.
                </p>
                <p className="text-md text-gray-400 mb-8">
                    Spare jetzt <strong>10%</strong> mit dem Code:{' '}
                    <span className="font-mono bg-gray-800 px-3 py-1 rounded text-pink-300">LUTE</span>
                </p>

                <a
                    href="https://weareholy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <img
                        src={holyLogo}
                        alt="HOLY Logo"
                        className="w-52 mx-auto hover:scale-105 transition-transform duration-300"
                    />
                </a>
            </div>
        </section>
    );
};

export default SponsorSection;