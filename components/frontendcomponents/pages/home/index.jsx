import Hero from "../../organisms/Hero"
import "@/public/sass/home/home.css"
import Usp from "./Usp"
import AboutPleiaddes from "./AboutPleiaddes"
import Star from "./Star"
import Amenities from "./Amenities"
import MasterPlan from "./MasterPlan"
import WalkThrough from "./WalkThrough"

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
        </>
    )
}

export default HomePage