import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const InstagramSlider = () => {
    const reels = [
        'https://www.instagram.com/reel/DJ9wFf2oP-c/',
        'https://www.instagram.com/reel/DJ1fd9poS2J/',
        'https://www.instagram.com/reel/DJt0-EaoZ1t/'
    ];

    return (
        <section className="bg-[#0b0f1a] text-white py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sky-500">
                    Videos
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    autoplay={{ delay: 6000 }}
                    className="max-w-[540px] mx-auto"
                >
                    {reels.map((url, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full flex justify-center">
                                <iframe
                                    src={`${url}embed`}
                                    width="100%"
                                    height="580"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    frameBorder="0"
                                    className="rounded-xl shadow-xl"
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default InstagramSlider;