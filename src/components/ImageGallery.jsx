import React, { useEffect, useRef, useState } from 'react';
import lute2 from '../assets/gallery/lute2.webp';
import lute4 from '../assets/gallery/lute4.webp';
import lute5 from '../assets/gallery/lute5.webp';

const IMAGES = [
    { src: lute2, alt: 'Lute Highlight 1' },
    { src: lute4, alt: 'Lute Highlight 2' },
    { src: lute5, alt: 'Lute Highlight 3' },
];

const ImageGallery = () => {
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
            id="clips"
            ref={sectionRef}
            className={[
                'bg-bg py-24 border-t border-white/5',
                'transition-all duration-700 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
        >
            {/* Anker-Alias für bestehende Backlinks */}
            <span id="highlights" className="block -mt-24 pt-24" aria-hidden="true" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-neon mb-3">
                        — Best of
                    </span>
                    <h2 className="font-display italic font-black leading-[0.95] tracking-tight text-ink text-[clamp(44px,6vw,80px)] m-0">
                        MOMENTE &
                        <br />
                        <span className="text-neon">HIGHLIGHTS</span>
                    </h2>
                    <p className="mt-4 text-mute text-base md:text-lg">
                        Ein paar Shots aus dem Lute-Universum.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {IMAGES.map((img, index) => (
                        <div
                            key={img.alt}
                            className="group relative overflow-hidden rounded-2xl bg-surface border border-white/[0.06] shadow-card/0 transition-all duration-200 hover:-translate-y-1 hover:border-neon/30 hover:shadow-card focus-within:ring-2 focus-within:ring-neon"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />

                            {/* Hover gradient */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                            {/* Hover badge */}
                            <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-neon/15 border border-neon/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-neon backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                Highlight {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
