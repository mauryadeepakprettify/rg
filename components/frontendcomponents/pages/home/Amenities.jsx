"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import SlideBtn from "../../atoms/SlideBtn";


const Amenities = () => {
    return (
        <section className="home-secE border-b-gradient">
            <div className="container">
                <div className="heading">
                    <h2>Amenities</h2>
                    <p>Pleiaddes brings together a collection of lifestyle amenities designed to transform everyday routines into indulgent experiences.</p>
                </div>

                <div className="content">
                    <div className="swiper-nav ">
                        <SlideBtn className="aminity-prev primary-border" />
                        <SlideBtn className="aminity-next primary-border" />
                    </div>
                    <Swiper
                        className="aminity-slider"
                        loop={false}
                        direction="vertical"
                        allowTouchMove={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        mousewheel={{
                            releaseOnEdges: true,
                            sensitivity: 1,
                        }}
                        resistanceRatio={0}
                        navigation={{
                            nextEl: ".aminity-next",
                            prevEl: ".aminity-prev",
                        }}
                        modules={[Navigation]}
                        speed={800}
                        slidesPerView={1}
                        spaceBetween={0}>
                        {
                            data.map(({ image, title }, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Image src={image} alt={title} width={652} height={295} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    <Swiper
                        className="aminity-text-slider"
                        loop={false}
                        direction="vertical"
                        allowTouchMove={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        mousewheel={{
                            releaseOnEdges: true,
                            sensitivity: 1,
                        }}
                        resistanceRatio={0}
                        speed={800}
                        slidesPerView={1}
                        spaceBetween={20}>
                        {
                            data.map(({ title }, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <h4>{title}</h4>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <Image className="mobile-img" src="/image/home/mobile.png" alt="amenities" width={1181} height={686} />
        </section>
    )
}

export default Amenities

const data = [
    {
        image: "/image/home/aminities/1.png",
        title: "The Clubhouse"
    },
    {
        image: "/image/home/aminities/1.png",
        title: "The Clubhouse"
    },
    {
        image: "/image/home/aminities/1.png",
        title: "The Clubhouse"
    },
    {
        image: "/image/home/aminities/1.png",
        title: "The Clubhouse"
    },
    {
        image: "/image/home/aminities/1.png",
        title: "The Clubhouse"
    }
]