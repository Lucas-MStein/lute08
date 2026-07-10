import React, { useEffect, useRef, useState } from 'react';
import holyLogo from '../assets/holy-logo.png';

/**
 * Optionale Partner-Sektion (HOLY).
 * Aktuell nicht in App.jsx eingebunden. Bei Bedarf dort wieder einkommentieren.
 */
const SponsorSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="partner"
            ref={sectionRef}
            className={[
                'bg-bg py-24 px-6 md:px-12 border-t border-white/5',
                'transition-all duration-1000 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
        >
            <div className="max-w-4xl mx-auto text-center">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-neon mb-3">
                    — Partner
                </span>
                <h2 className="font-display italic font-black text-ink text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight m-0 mb-6">
                    POWERED BY <span className="text-neon">HOLY</span>
                </h2>
                <p className="text-lg text-mute mb-3 max-w-prose mx-auto">
                    Mit den Clean Energy Drinks von{' '}
                    <a
                        href="https://weareholy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-hot underline-offset-4 underline hover:text-hot/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-hot rounded"
                    >
                        HOLY
                    </a>{' '}
                    bist du ready für jede Reaktion.
                </p>
                <p className="text-mute/80 mb-8">
                    Spare jetzt <strong className="text-ink">10%</strong> mit dem Code:{' '}
                    <span className="font-mono bg-surface-2 border border-white/10 text-neon px-3 py-1 rounded-md">LUTE</span>
                </p>

                <a
                    href="https://weareholy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded-2xl"
                    aria-label="HOLY öffnen"
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
