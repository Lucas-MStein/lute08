import React, { useEffect, useRef, useState } from 'react';
import AboutImage from '../assets/lute3.webp';

const TAGS = ['😂 Comedy', '⚡ Reactions', '🔥 Trends', '📱 Socials'];

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
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '-10% 0px' }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className={[
                'bg-bg py-24 border-t border-white/5',
                'transition-all duration-700 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
        >
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
                {/* LEFT: Image */}
                <div className="relative">
                    {/* Decorative frame */}
                    <div className="absolute -top-5 -left-5 w-44 h-44 border-2 border-neon rounded-3xl opacity-25 z-0 hidden sm:block" />

                    <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] border border-white/[0.08] max-w-md mx-auto md:mx-0">
                        <img
                            src={AboutImage}
                            alt="lute – Creator-Portrait"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 pointer-events-none" style={{
                            background: 'linear-gradient(135deg, rgba(212,255,0,0.08) 0%, transparent 60%)',
                        }} />
                    </div>

                    {/* Quote card */}
                    <div className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 z-20 bg-neon rounded-2xl px-5 py-5 max-w-[220px]">
                        <p className="font-display italic font-black text-bg text-[22px] leading-tight m-0">
                            „Oh ja, da regnets.“
                        </p>
                        <span className="block mt-2 text-[11px] font-semibold uppercase tracking-wider text-bg/60">
                            — lute, immer
                        </span>
                    </div>
                </div>

                {/* RIGHT: Text */}
                <div className="flex flex-col gap-7">
                    <div>
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-neon mb-3">
                            — Wer ist lute?
                        </span>
                        <h2 className="font-display italic font-black text-ink leading-[0.92] tracking-tight text-[clamp(48px,6vw,84px)] m-0">
                            COMEDY
                            <br />
                            <span className="text-neon">IST</span>
                            <br />
                            ERNST.
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 text-mute">
                        <p className="text-[17px] leading-relaxed m-0">
                            lute macht Comedy, die direkt aus dem Feed ins Zwerchfell geht. In schnellen
                            Reaktions-Clips nimmt er Trends, Clips und Alltagsmomente aufs Korn — ehrlich,
                            pointiert und mit ordentlich Humor.
                        </p>
                        <p className="text-[17px] leading-relaxed m-0">
                            Schnelle Schnitte, spontane Punchlines und ein Gespür für genau das, was gerade
                            im Netz passiert. Ob TikTok, YouTube oder Instagram — wer lute folgt, bekommt
                            täglich frischen Stoff zum Lachen.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2.5">
                        {TAGS.map((tag) => (
                            <span
                                key={tag}
                                className="bg-surface-2 border border-white/[0.08] rounded-full px-4 py-2 text-sm font-medium text-mute"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
