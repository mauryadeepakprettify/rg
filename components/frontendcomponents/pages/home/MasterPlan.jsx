import Image from "next/image"
import Button from "../../atoms/Button"

const MasterPlan = () => {
    return (
        <section className='home-secF'>
            <div className='container'>
                <div className='heading'>
                    <h2>Master Plan</h2>
                    <p>Thoughtfully planned open spaces create a seamless journey through nature, recreation and relaxation.</p>
                </div>
                <div className="row">
                    <div className="col-a">
                        <div className="heading">
                            <h3>A Master Plan <span>Designed</span> Around Life</h3>
                        </div>
                        <div className="grid">
                            {
                                data?.map(({ image, label }, index) => {
                                    return (
                                        <div className="plan-card" key={index}>
                                            <figure>
                                                <Image src={image} width={181} height={178} alt={label} />
                                            </figure>
                                            <figcaption>
                                                <p>{label}</p>
                                            </figcaption>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-b">
                        <figure>
                            <Image src="/image/home/plan.svg" width={252} height={109} alt="luxury" />
                        </figure>
                        <Button className=" btn-animate">Download Master Plan</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MasterPlan

const data = [
    {
        image: "/image/home/plan/8.png",
        label: "Palm Court"
    },
    {
        image: "/image/home/plan/1.png",
        label: "Kids’ Pool"
    },
    {
        image: "/image/home/plan/2.png",
        label: "Family Pool"
    },
    {
        image: "/image/home/plan/3.png",
        label: "Outdoor Gym"
    },
    {
        image: "/image/home/plan/4.png",
        label: "Aroma Garden"
    },
    {
        image: "/image/home/plan/5.png",
        label: "Massage Room"
    },
    {
        image: "/image/home/plan/6.png",
        label: "Dance Studio"
    },
    {
        image: "/image/home/plan/7.png",
        label: "Outdoor Gym"
    }
]