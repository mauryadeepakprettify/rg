"use client"

import Image from "next/image"
import Button from "../../atoms/Button"
import { motion } from "framer-motion"

const ConstructionUpdate = () => {
    return (
        <section className="home-secK  border-b-gradient">
            <div className="container">
                <div className="heading">
                    <h2>Construction Update</h2>
                    <p>From foundation to final finishes, follow the transformation of Pleiaddes as it progresses toward its vision of elevated living.</p>
                </div>
                <div className="grid radial-blur">
                    {
                        data?.map(({ image, title, date }, index) => {
                            const isFirst = index === 0;
                            const isLast = index === data.length - 1;

                            return (
                                <motion.a key={index}
                                    initial={{
                                        x: isFirst ? "115%" : isLast ? "-115%" : 0,
                                        rotate: isFirst ? 5 : isLast ? -5 : 0,
                                        y: isFirst || isLast ? 20 : 0,
                                    }}
                                    whileInView={{ x: 0, rotate: isFirst ? -5 : isLast ? 5 : 0, y: isFirst || isLast ? 20 : 0 }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 1,
                                    }}
                                    href="#"
                                    className="card">
                                    <figure>
                                        <Image src={image} alt={title} width={362} height={287} />
                                    </figure>
                                    <figcaption>
                                        <p>{title}</p>
                                        <span>{date}</span>
                                    </figcaption>
                                </motion.a>
                            )
                        })
                    }
                </div>
                <Button className="btn-animate">View all Updates</Button>
            </div>
        </section>
    )
}

export default ConstructionUpdate

const data = [
    {
        image: "/image/home/update/1.jpg",
        title: "Construction Update",
        date: "June 20, 2026"
    },
    {
        image: "/image/home/update/2.jpg",
        title: "Construction Update",
        date: "June 20, 2026"
    },
    {
        image: "/image/home/update/3.png",
        title: "Construction Update",
        date: "June 20, 2026"
    }
]