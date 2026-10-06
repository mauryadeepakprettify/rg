import Image from "next/image"
import Button from "../../atoms/Button"

const Founder = () => {
    return (
        <section className="home-secM border-b-gradient">
            <Image className="quote" src="/icon/quote.svg" alt="quote" width={297} height={216} />
            <div className="container">
                <div className="heading">
                    <h2><span>The Vision Behind the Legacy</span></h2>
                </div>
                <div className="content">
                    <div className="col-a radial-blur">
                        <figure>
                            <Image src="/image/home/founder.png" alt="founder" width={279} height={327} />
                        </figure>
                    </div>
                    <div className="col-b">
                        <p>A visionary entrepreneur whose journey has shaped RG Group into a recognized real-estate presence across Delhi NCR.</p>
                        <div className="info">
                            <h4>Rajesh Goyal</h4>
                            <p>Managing Director, RG Group</p>
                        </div>
                        <Button className="btn-animate">About RG Group</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founder