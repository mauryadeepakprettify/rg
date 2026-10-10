"use client"
import Image from "next/image"
import Button from "../../atoms/Button"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

const AboutPleiaddes = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
    }

    useEffect(() => {
        if (!isAnimating) return

        const timer = setTimeout(() => {
            setActiveSlide((prev) => (prev + 1) % data.length)
            setIsAnimating(false)
        }, 1200)

        return () => clearTimeout(timer)
    }, [isAnimating])

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    const nextIndex = (activeSlide + 1) % data.length


    return (
        <section className="home-secB border-b-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-a fold-slider">

                        <figure className="fold-slider__next">
                            <Image src={data[nextIndex]} alt="luxury" width={485} height={505} />
                        </figure>

                        <figure className="fold-slider__current">
                            <Image src={data[activeSlide]} alt="luxury" width={485} height={505} style={{ opacity: isAnimating ? 0 : 1 }}
                            />
                            {isAnimating && (
                                <div className="fold-slider__fold" key={activeSlide}>
                                    <motion.div
                                        className="fold-piece fold-piece--tl"
                                        style={{
                                            backgroundImage: `url(${data[activeSlide]})`,
                                        }}
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            borderRadius: "0 0 0 0",
                                        }}
                                        animate={{
                                            x: -90,
                                            y: -70,
                                            borderRadius: "0 0 24px 0",
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.76, 0, 0.24, 1],
                                        }}
                                    />

                                    <motion.div
                                        className="fold-piece fold-piece--tr"
                                        style={{
                                            backgroundImage: `url(${data[activeSlide]})`,
                                        }}
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            borderRadius: "0 0 0 0",
                                        }}
                                        animate={{
                                            x: 90,
                                            y: -70,
                                            borderRadius: "0 0 0 24px",
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.05,
                                            ease: [0.76, 0, 0.24, 1],
                                        }}
                                    />

                                    <motion.div
                                        className="fold-piece fold-piece--bl"
                                        style={{
                                            backgroundImage: `url(${data[activeSlide]})`,
                                        }}
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            borderRadius: "0 0 0 0",
                                        }}
                                        animate={{
                                            x: -90,
                                            y: 70,
                                            borderRadius: "0 24px 0 0",
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.1,
                                            ease: [0.76, 0, 0.24, 1],
                                        }}
                                    />

                                    <motion.div
                                        className="fold-piece fold-piece--br"
                                        style={{
                                            backgroundImage: `url(${data[activeSlide]})`,
                                        }}
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            borderRadius: "0 0 0 0",
                                        }}
                                        animate={{
                                            x: 90,
                                            y: 70,
                                            borderRadius: "24px 0 0 0",
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.15,
                                            ease: [0.76, 0, 0.24, 1],
                                        }}
                                    />
                                </div>
                            )}
                        </figure>

                    </div>
                    <div className="col-b radial-blur">
                        <h2> <span>Luxury</span> About Pleiaddes</h2>
                        <div className="website-content">
                            <p>RG’s Pleiaddes is envisioned as an architectural masterpiece where sophistication meets serenity. Every tower rises like a shining star against Noida’s skyline, creating a distinctive residential address designed around space, greenery and elevated experiences.</p>
                        </div>
                        <Button className="btn-animate">Discover Pleiaddes Story</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPleiaddes

const data = [
    "/image/home/luxury/1.png",
    "/image/home/luxury/2.png",
    "/image/home/luxury/3.png",
    "/image/home/luxury/4.png"
]
