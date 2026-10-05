import Image from "next/image"

const Star = () => {
    return (
        <section className="home-secD">
            <video src="/video/sunset.mp4" poster="/video/sunset.png" autoPlay loop muted playsInline>
                Your browser does not support the video.
            </video>
            <Image src="/image/home/sky-view.png" alt="star" width={1281} height={606} />
            <div className="container">
                <div className="content">
                    <p>Thoughtfully Designed. Exceptionally Lived.</p>

                    <h2>Your 7 Star <span>Suite</span> </h2>
                </div>
            </div>
        </section>
    )
}

export default Star