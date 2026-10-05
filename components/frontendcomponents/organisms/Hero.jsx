
const Hero = () => {
    return (
        <section className='banner center-banner home-banner border-b-gradient'>
            <div className="bg">
                <video src="/video/home-banner.mp4" autoPlay loop muted playsInline>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="banner-wrapper">
                <div className="content content-white">
                    <h1>
                        7 STAR  <span>Living</span>
                    </h1>
                    <p>Experience elevated comfort, refined spaces, and thoughtfully designed living at every moment.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero