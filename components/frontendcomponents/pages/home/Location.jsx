import Image from "next/image"
import Button from "../../atoms/Button"

const Location = () => {
    return (
        <section className="home-secH">
            <div className="container">
                <div className="heading">
                    <h2>Location</h2>
                    <p>At the Heart of Greater Noida West</p>
                </div>

                <div className="content">
                    <div className="star-pattern">
                        {
                            data?.map(({ distance, title }, index) => {
                                return (
                                    <div key={index} className="location-detail dot">
                                        <p className="distance">{distance}</p>
                                        <h5 className="ttl">{title}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Button className="btn-animate">
                        Download Location Map
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Location

const data = [
    {
        distance: "400 m",
        title: "Adorable Daycare"
    },
    {
        distance: "850 m",
        title: "DRS Public School"
    },
    {
        distance: "2.3 km",
        title: "Yatharth Super Speciality Hospital"
    },
    {
        distance: "8.1 km",
        title: "Noida Sector 81 Metro Station"
    },
    {
        distance: "23.6 km",
        title: "Anand Vihar Railway Station"
    },
    {
        distance: "53 km",
        title: "Indira Gandhi International Airport"
    },
    {
        distance: "64 km",
        title: "National Rail Museum"
    }
]