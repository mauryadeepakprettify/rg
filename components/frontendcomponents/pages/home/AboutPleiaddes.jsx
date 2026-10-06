import Image from "next/image"
import Button from "../../atoms/Button"

const AboutPleiaddes = () => {
    return (
        <section className="home-secB border-b-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-a">
                        <figure>
                            {
                                data?.map((image, i) => {
                                    return (
                                        <Image src={image} alt="luxury" width={485} height={505} key={i} />
                                    )
                                })
                            }

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
    "/image/home/luxury.png"

]
