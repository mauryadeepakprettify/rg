"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import Button from "../../atoms/Button"
import SlideBtn from "../../atoms/SlideBtn"
import { Navigation } from "swiper/modules"
import Image from "next/image"
import { useState } from "react"

const FloorPlans = () => {
    const [floorPlanSwiper, setFloorPlanSwiper] = useState(null);

    const handleRealIndexChange = (swiper) => {
        if (!floorPlanSwiper || floorPlanSwiper.destroyed) return;
        floorPlanSwiper.slideToLoop(swiper.realIndex);
    };

    return (
        <section className="home-secJ border-b-gradient ">
            <div className="container">
                <div className="heading">
                    <h2>Floor Plans</h2>
                    <p>Designed Around the Way You Live</p>
                </div>

                <div className="content">
                    <div className="col-a">
                        <Swiper
                            direction="vertical"
                            slidesPerView={1}
                            spaceBetween={20}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".floor-plans-next",
                                prevEl: ".floor-plans-prev"
                            }}
                            onRealIndexChange={handleRealIndexChange}
                        >

                            {
                                data?.map(({ title, area }, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="floor-info-card" key={index}>
                                                <h4>{title}</h4>
                                                <p>{area}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="col-b">
                        <Swiper
                            onSwiper={setFloorPlanSwiper}

                        >
                            {
                                data?.map(({ image }, index) => {
                                    return (
                                        <SwiperSlide >
                                            <figure key={index}>
                                                <Image src={image} alt="floor plan" width={450} height={458} />
                                            </figure>
                                        </SwiperSlide>)
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="col-c">
                        <div className="swiper-nav swiper-group">
                            <SlideBtn className="primary-border floor-plans-prev" />
                            <SlideBtn className="primary-border floor-plans-next" />
                        </div>
                    </div>
                </div>

                <Button href="#" className="btn-animate">View Details</Button>
            </div>
        </section>
    )
}

export default FloorPlans

const data = [
    {
        title: "TYPICAL FLOOR PLAN",
        area: "TOWER- 01 & 02",
        image: "/image/home/floor/1.png"
    },
    {
        title: "UNIT PLAN",
        area: "TOWER- 01 & 02",
        image: "/image/home/floor/2.png"
    }
] 