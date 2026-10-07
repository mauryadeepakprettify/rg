"use client"
import Image from "next/image"
import Button from "../../atoms/Button"
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <section className="home-secC">
            <div className="bg">
                <Image className="earth" src="/image/home/earth.png" alt="earth" width={880} height={529} />
                <Image className="logo" src="/logo.svg" alt="shape" width={149} height={108} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-a">
                        <div className="heading">
                            <h6>The Pleiaddes Experience</h6>
                            <h2>The <span>Luxury </span>Orbit</h2>
                        </div>
                        <p>A residence should be more than an address. It should be an experience.
                            At Pleiaddes, architecture, landscape and lifestyle come together to create a private world where mornings begin amidst greenery, evenings unfold beside water and every arrival feels exceptional.</p>
                        <Button className="btn-animate">Schedule a Site Visit</Button>
                    </div>
                    <div className="col-b">
                        <ul className="location">
                            {
                                data?.map((item, index) => {
                                            const reverseIndex = data.length - 1 - index;

                                    return (
                                        <motion.li
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                x: 40,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: (reverseIndex * 60),
                                            }}
                                            transition={{
                                                delay: index * 0.5,
                                                duration: 1,
                                                // ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >{item} <Image src="/icon/star-fill.svg" alt="arrow" width={35} height={35} /></motion.li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience

const data = [
    "Tower - 6 Taygete", "Tower - 5 Merope", "Tower - 4 Maia", "Tower-3 Electra", "Tower - 2 Celaeno", "Tower - 1 Alcyone", "Club Astero"
]