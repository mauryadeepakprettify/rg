import Image from "next/image"

const Usp = () => {
    return (
        <section className="home-secA border-b-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-a">
                        <h2>
                            <span>Luxury </span>
                            Meets the Infinite
                        </h2>
                    </div>
                    <ul className="col-b">
                        {data.map(({ label, icon }, key) => {
                            return (
                                <li key={key}>
                                    <figure className="icon">
                                        <Image  src={icon} alt={label} width={40} height={40} />
                                    </figure>
                                    <figcaption>
                                        <p>{label}</p>
                                    </figcaption>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Usp

const data = [
    {
        label: "7-Star Living",
        icon: "/icon/crown.svg"
    },
    {
        label: "75% Landscaped Green",
        icon: "/icon/leaves.svg"
    },
    {
        label: "IGBC Gold Rated",
        icon: "/icon/rate.svg"
    },
    {
        label: "Expansive Homes",
        icon: "/icon/home.svg"
    }
]