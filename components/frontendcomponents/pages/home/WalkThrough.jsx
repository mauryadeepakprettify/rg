import PlayBtn from "../../atoms/PlayBtn"

const WalkThrough = () => {
    return (
        <section className="home-secG">
            <video src="/video/lifestyle.mp4" poster="/video/lifestyle.png" autoPlay loop muted></video>
            <div className="content">
                <PlayBtn />
                <h2>
                    Walkthrough
                </h2>
            </div>
        </section>
    )
}

export default WalkThrough