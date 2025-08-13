import React, { useEffect, useRef, useState } from 'react';
import lute2 from '../assets/gallery/lute2.jpg';
import lute3 from '../assets/gallery/lute3.jpg';
import lute4 from '../assets/gallery/lute4.png';

const ImageGallery = () => {
    const images = [lute2, lute3, lute4];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current); // nur einmal anzeigen
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section
            id="videos"
            ref={sectionRef}
            className={`bg-[#0b0f1a] text-white py-16 px-6 md:px-12 transition-all duration-1000 ease-in-out transform 
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-sky-500">Highlights</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-xl transition duration-300 transform hover:scale-105"
                        >
                            <img
                                src={src}
                                alt={`Leo Highlight ${index + 1}`}
                                className="h-[500px] w-auto object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;