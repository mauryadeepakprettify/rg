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
import Form from "./Form"
import Experience from "./Experience"
import ConstructionUpdate from "./ConstructionUpdate"
import Legacy from "./Legacy"
import FloorPlans from "./FloorPlans"

const HomePage = () => {
    return (
        <>
            <Hero />
            <Usp />
            <AboutPleiaddes />
            <Experience />
            <Star />
            <Amenities />
            <MasterPlan />
            <WalkThrough />
            <Location />
            <Gallery />
            <FloorPlans />
            <ConstructionUpdate />
            <Legacy />
            <Founder />
            <Form />
            <PlanView />
        </>
    )
}

export default HomePage