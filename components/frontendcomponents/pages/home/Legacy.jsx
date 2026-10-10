"use client"
import { useCallback, useRef } from "react"
import Image from "next/image"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SlideBtn from "../../atoms/SlideBtn"
import "swiper/css"
import "swiper/css/navigation"

const Legacy = () => {
    const timelineRef = useRef(null)
    const followersRef = useRef([])

    const registerFollower = useCallback((swiper) => {
        if (!followersRef.current.includes(swiper)) {
            followersRef.current.push(swiper)
        }
    }, [])

    const unregisterFollower = useCallback((swiper) => {
        followersRef.current = followersRef.current.filter((s) => s !== swiper)
    }, [])

    const syncFollowers = useCallback((master) => {
        const index = master.realIndex
        followersRef.current.forEach((follower) => {
            if (!follower.destroyed && follower.activeIndex !== index) {
                follower.slideTo(index)
            }
        })
    }, [])

    const goToYear = useCallback((index) => {
        timelineRef.current?.slideToLoop(index)
    }, [])

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
                            loop
                            slidesPerView={1}
                            allowTouchMove={false}
                            onSwiper={registerFollower}
                            onDestroy={unregisterFollower}
                            speed={1200}

                            className="legacy-heading-slider">
                            {data.map(({ title, year }) => (
                                <SwiperSlide key={year}>
                                    <h4>{title}</h4>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-b">
                        <div className="slider-container">
                            <Swiper
                                direction="vertical"
                                loop
                                slidesPerView={1}
                                spaceBetween={0}
                                speed={1200}
                                allowTouchMove={false}
                                onSwiper={registerFollower}
                                onDestroy={unregisterFollower}
                                className="legacy-image-slider"> 
                                {data.map(({ image, title, year }) => (
                                    <SwiperSlide key={year}>
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
                            loop
                            speed={1200}
                            allowTouchMove={false}
                            onSwiper={registerFollower}
                            onDestroy={unregisterFollower}
                            className="legacy-content-slider">
                            {data.map(({ description, year }) => (
                                <SwiperSlide key={year}>
                                    <p>{description}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="swiper-nav swiper-group">
                    <SlideBtn className="legacy-prev primary-border" />
                    <div className="timeline-wrapper">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={8}
                            loop={true}
                            speed={1200}
                            navigation={{
                                nextEl: ".legacy-next",
                                prevEl: ".legacy-prev",
                            }}
                            onSwiper={(swiper) => {
                                timelineRef.current = swiper
                            }}
                            onSlideChange={syncFollowers}
                            className="timeline-swiper">
                            {data.map(({ year }, index) => (
                                <SwiperSlide key={year}>
                                    <div
                                        className="year"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => goToYear(index)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") goToYear(index)
                                        }}>
                                        <p>{year}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <SlideBtn className="legacy-next primary-border" />
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