"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import SlideBtn from "../../atoms/SlideBtn";

const SLIDE_SPEED = 800;

const Amenities = () => {
    const [textSwiper, setTextSwiper] = useState(null);

    const handleRealIndexChange = (swiper) => {
        if (!textSwiper || textSwiper.destroyed) return;
        textSwiper.slideToLoop(swiper.realIndex, SLIDE_SPEED);
    };

    return (
        <section className="home-secE border-b-gradient radial-blur">
            <div className="container">
                <div className="heading">
                    <h2>Amenities</h2>
                    <p>
                        Pleiaddes brings together a collection of lifestyle amenities
                        designed to transform everyday routines into indulgent experiences.
                    </p>
                </div>

                <div className="content">
                    <div className="swiper-nav">
                        <SlideBtn className="aminity-prev primary-border" />
                        <SlideBtn className="aminity-next primary-border" />
                    </div>

                    <Swiper
                        className="aminity-slider"
                        loop
                        direction="vertical"
                        allowTouchMove={false}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay, Navigation]}
                        speed={SLIDE_SPEED}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={{
                            nextEl: ".aminity-next",
                            prevEl: ".aminity-prev",
                        }}
                        onRealIndexChange={handleRealIndexChange}
                    >
                        {data.map(({ image, title }, index) => (
                            <SwiperSlide key={index}>
                                <Image src={image} alt={title} width={652} height={295} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        className="aminity-text-slider"
                        loop
                        direction="vertical"
                        allowTouchMove={false}
                        speed={SLIDE_SPEED}
                        slidesPerView={1}
                        spaceBetween={20}
                        onSwiper={setTextSwiper}
                    >
                        {data.map(({ title }, index) => (
                            <SwiperSlide key={index}>
                                <h4>{title}</h4>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <Image
                className="mobile-img"
                src="/image/home/mobile.png"
                alt="amenities"
                width={1181}
                height={686}
            />
        </section>
    );
};

export default Amenities;

const data = [
    { image: "/image/home/aminities/1.png", title: "The Clubhouse" },
    { image: "/image/home/aminities/1.png", title: "The Clubhouse" },
    { image: "/image/home/aminities/1.png", title: "The Clubhouse" },
    { image: "/image/home/aminities/1.png", title: "The Clubhouse" },
    { image: "/image/home/aminities/1.png", title: "The Clubhouse" },
];