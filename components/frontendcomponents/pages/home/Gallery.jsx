"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import SlideBtn from "../../atoms/SlideBtn";
import Image from "next/image";

const Gallery = () => {
    return ( 
        <section className="home-secI border-b-gradient">
            <div className="container">
                <div className="heading">
                    <h2><span>Gallery</span></h2>
                    <p>See Luxury in Every Frame</p>
                    <div className="swiper-nav swiper-group">
                        <SlideBtn className="gallery-prev primary-border" />
                        <SlideBtn className="gallery-next primary-border" />
                    </div>
                </div>

                <div className="content">
                    <Swiper
                        className="gallery-swiper"
                        loop={false}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={800}
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1.2}
                        spaceBetween={40}
                        navigation={{
                            nextEl: ".gallery-next",
                            prevEl: ".gallery-prev",
                        }}
                    >
                        {data.map(({ image, title, description }, index) => (
                            <SwiperSlide key={index}>
                                <a href="#" className="gallery-card">
                                    <figure>
                                        <Image src={image} alt={title} width={1068} height={647} />
                                        <figcaption>
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </figcaption>
                                    </figure>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Gallery

const data = [
    {
        image: "/image/home/gallery/1.png",
        title: "The Grand 50,000 Sq. Ft. Clubhouse  ",
        description: "A destination where wellness, recreation and social experiences come together under one luxurious roof."
    },
    {
        image: "/image/home/gallery/2.png",
        title: "The Grand Reception  ",
        description: "A refined arrival experience that sets the tone for everything that follows, welcoming residents and guests with understated elegance."
    },
    {
        image: "/image/home/gallery/3.png",
        title: "Restaurant & Private Dining ",
        description: "An elegant culinary setting complemented by a dedicated Private Dining Room  designed for intimate meals, special occasions, and memorable gatherings."
    },
    
]