import React, { useState } from 'react';

const tiktokVideos = [
    'https://www.tiktok.com/embed/7352099512036289802',
    'https://www.tiktok.com/embed/7352991412408380731',
    'https://www.tiktok.com/embed/7351414166144761131'
];

const TikTokGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? tiktokVideos.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === tiktokVideos.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="videos" className="bg-black text-white py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-sky-500 mb-8">Highlights</h2>

                <div className="relative">
                    {/* TikTok Embed */}
                    <div className="w-full aspect-w-9 aspect-h-16 overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            src={tiktokVideos[currentIndex]}
                            title={`TikTok ${currentIndex}`}
                            className="w-full h-full border-none"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-l"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-r"
                    >
                        ›
                    </button>
                </div>

                {/* Optional: Indikator */}
                <div className="mt-4 flex justify-center gap-2">
                    {tiktokVideos.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-pink-500' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TikTokGallery;