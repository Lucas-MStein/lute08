import React, { useEffect, useRef, useState } from 'react';
import lute2 from '../assets/gallery/lute2.webp';
import lute4 from '../assets/gallery/lute4.webp';
import lute5 from '../assets/gallery/lute5.webp';

const ImageGallery = () => {
    const images = [
        { src: lute2, alt: 'Lute Highlight 1' },
        { src: lute4, alt: 'Lute Highlight 2' },
        { src: lute5, alt: 'Lute Highlight 3' },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // nur einmal animieren + sauber beenden
                }
            },
            { threshold: 0.2, rootMargin: '-10% 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="highlights"
            ref={sectionRef}
            className={[
                'bg-[#0b0f1a] text-white py-16',
                'transition-all duration-700 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
        >
            {/* Content container (einheitliche Breite) */}
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-500">
                    Highlights
                </h2>
                <p className="mt-3 text-white/70">
                    Ein paar Momente & Shots aus dem Lute-Universum.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {images.map((img, index) => (
                        <a
                            key={img.alt}
                            href={img.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={[
                                'group block overflow-hidden rounded-2xl',
                                'bg-white/5 ring-1 ring-white/10',
                                'shadow-lg shadow-black/20',
                                'transition-transform duration-200',
                                'hover:scale-[1.02] hover:ring-white/20',
                                'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
                            ].join(' ')}
                            aria-label={`${img.alt} in neuem Tab öffnen`}
                        >
                            <div className="relative">
                                {/* Aspect statt fixer Höhe -> stabiler & schöner */}
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full aspect-[3/4] object-cover"
                                />

                                {/* Subtiles Overlay on hover */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                                {/* Mini-Badge */}
                                <div className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                    Highlight {index + 1}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;