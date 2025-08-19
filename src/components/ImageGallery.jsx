import React, { useEffect, useRef, useState } from 'react';
import lute2 from '../assets/gallery/lute2.jpg';
import lute4 from '../assets/gallery/lute4.jpg';

const ImageGallery = () => {
    const images = [lute2, lute4];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current); // nur einmal animieren
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section
            id="highlights"
            ref={sectionRef}
            className={`bg-[#0b0f1a] text-white py-16 px-6 md:px-12 transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-sky-500">Highlights</h2>

                {/* Grid: mobil 1 Spalte, ab md 2 Spalten */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-xl transition duration-300 transform hover:scale-105"
                        >
                            <img
                                src={src}
                                alt={`Lute Highlight ${index + 1}`}
                                loading="lazy"
                                className="w-full h-[380px] md:h-[520px] object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;