"use client"
import Image from "next/image"
import { FreeMode, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SlideBtn from "../../atoms/SlideBtn"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";


const Legacy = () => {
    return (
        <section className="home-secL border-b-gradient">
            <div className="container  radial-blur">
                <div className="heading">
                    <h2> RG Legacy</h2>
                </div>

                <div className="grid ">
                    <div className="col-a">
                        <Swiper 
                        direction="vertical"
                        slidesPerView={1}
                        className="legacy-heading-slider">
                            {data?.map(({ title }, index) => (
                                <SwiperSlide key={index}>
                                    <h4>{title}</h4>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-b">
                        <div className="slider-container">
                            <Swiper 
                            direction="vertical"
                            slidesPerView={1}
                            spaceBetween={0}
                            className="legacy-image-slider">
                                {data?.map(({ image, title }, index) => (
                                    <SwiperSlide
                                        key={index}>
                                        <figure>
                                            <Image src={image} alt={title} width={320} height={320} />
                                        </figure>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-c">
                        <Swiper 
                        direction="vertical"
                        slidesPerView={1}
                        className="legacy-content-slider">
                            {data?.map(({ description }, index) => (
                                <SwiperSlide key={index}>
                                    <p>{description}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="swiper-nav swiper-group">
                    <SlideBtn className="leagcy-prev primary-border" />
                    <div className="timeline-wrapper">
                        <Swiper modules={[Navigation]}
                            slidesPerView="auto"
                            loop={true} 
                            navigation={{
                                nextEl: ".leagcy-next",
                                prevEl: ".legacy-prev",
                            }} className="timeline-swiper">
                            {
                                data?.map(({ year }, index) => {
                                    return (
                                        <SwiperSlide

                                            key={index}><div className="year">
                                                <p>{year}</p>
                                            </div></SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <SlideBtn className="leagcy-next primary-border" />
                </div>
            </div>
        </section>
    )
}

export default Legacy

const data = [
    {
        title: "The Birth of RG Group",
        image: "/image/home/legacy/1.png",
        description: "In a significant milestone, the  name RG is adopted, marking the incorporation of Rajesh Projects (India) Pvt. Ltd. This heralds the flagship company’s inception, setting the stage for the formidable RG Group.",
        year: 2000
    },
    {
        title: "A Pinnacle of Deliveries",
        image: "/image/home/legacy/2.png",
        description: "Noteworthy deliveries include RG  COMPLEX at DC Chowk, Sector 9  Rohini, Sector 14 Rohini (Phase 2),  and Sector 5 Dwarka, cementing  RG Group’s reputation for timely  completion and superior  craftsmanship.",
        year: 2004
    },
    {
        title: "A Pinnacle of Deliveries",
        image: "/image/home/legacy/2.png",
        description: "Noteworthy deliveries include RG  COMPLEX at DC Chowk, Sector 9  Rohini, Sector 14 Rohini (Phase 2),  and Sector 5 Dwarka, cementing  RG Group’s reputation for timely  completion and superior  craftsmanship.",
        year: 2007
    },
    {
        title: "A Pinnacle of Deliveries",
        image: "/image/home/legacy/2.png",
        description: "Noteworthy deliveries include RG  COMPLEX at DC Chowk, Sector 9  Rohini, Sector 14 Rohini (Phase 2),  and Sector 5 Dwarka, cementing  RG Group’s reputation for timely  completion and superior  craftsmanship.",
        year: 2009
    },
    {
        title: "A Pinnacle of Deliveries",
        image: "/image/home/legacy/2.png",
        description: "Noteworthy deliveries include RG  COMPLEX at DC Chowk, Sector 9  Rohini, Sector 14 Rohini (Phase 2),  and Sector 5 Dwarka, cementing  RG Group’s reputation for timely  completion and superior  craftsmanship.",
        year: 2010
    },
    {
        title: "A Pinnacle of Deliveries",
        image: "/image/home/legacy/2.png",
        description: "Noteworthy deliveries include RG  COMPLEX at DC Chowk, Sector 9  Rohini, Sector 14 Rohini (Phase 2),  and Sector 5 Dwarka, cementing  RG Group’s reputation for timely  completion and superior  craftsmanship.",
        year: 2015
    },
    {
        title: "A Pinnacle of Deliveries",
        image: "/image/home/legacy/2.png",
        description: "Noteworthy deliveries include RG  COMPLEX at DC Chowk, Sector 9  Rohini, Sector 14 Rohini (Phase 2),  and Sector 5 Dwarka, cementing  RG Group’s reputation for timely  completion and superior  craftsmanship.",
        year: 2023
    },
    {
        title: "A Pinnacle of Deliveries",
        image: "/image/home/legacy/2.png",
        description: "Noteworthy deliveries include RG  COMPLEX at DC Chowk, Sector 9  Rohini, Sector 14 Rohini (Phase 2),  and Sector 5 Dwarka, cementing  RG Group’s reputation for timely  completion and superior  craftsmanship.",
        year: 2024
    },
    {
        title: "A Pinnacle of Deliveries",
        image: "/image/home/legacy/2.png",
        description: "Noteworthy deliveries include RG  COMPLEX at DC Chowk, Sector 9  Rohini, Sector 14 Rohini (Phase 2),  and Sector 5 Dwarka, cementing  RG Group’s reputation for timely  completion and superior  craftsmanship.",
        year: 2025
    }
]