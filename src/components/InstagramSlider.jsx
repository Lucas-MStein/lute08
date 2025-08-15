import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const InstagramSlider = () => {
    const embeds = [
        'https://www.instagram.com/reel/DJ9wFf2oP-c/',
        'https://www.instagram.com/reel/DJ1fd9poS2J/',
        'https://www.instagram.com/reel/DJt0-EaoZ1t/',
    ];

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;

        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process(); // WICHTIG: Initialisiert die Embeds
            }
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Falls schon geladen, auch bei Slide-Wechsel nachträglich rendern
        const interval = setInterval(() => {
            if (window.instgrm && window.instgrm.Embeds) {
                window.instgrm.Embeds.process();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#0b0f1a] text-white py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sky-500">Videos</h2>

                <Swiper
                    spaceBetween={40}
                    slidesPerView={1}
                    loop={true}
                    className="max-w-[540px] mx-auto"
                >
                    {embeds.map((url, index) => (
                        <SwiperSlide key={index}>
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={url}
                                data-instgrm-version="14"
                                style={{
                                    background: '#FFF',
                                    border: 0,
                                    borderRadius: '3px',
                                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                    margin: '1px auto',
                                    maxWidth: '540px',
                                    minWidth: '326px',
                                    padding: 0,
                                    width: '100%',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default InstagramSlider;