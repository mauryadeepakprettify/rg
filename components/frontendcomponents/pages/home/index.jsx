import Hero from "../../organisms/Hero"
import "@/public/sass/home/home.css"
import Usp from "./Usp"
import AboutPleiaddes from "./AboutPleiaddes"
import Star from "./Star"
import Amenities from "./Amenities"
import MasterPlan from "./MasterPlan"
import WalkThrough from "./WalkThrough"
import Location from "./Location"
import PlanView from "./PlanView"
import Founder from "./Founder"
import Gallery from "./Gallery"

const HomePage = () => {
    return (
        <>
            <Hero />
            <Usp />
            <AboutPleiaddes />
            <Star />
            <Amenities />
            <MasterPlan />
            <WalkThrough />
            <Location />
            <Gallery />
            <Founder />
            <PlanView />
        </>
    )
}

export default HomePage