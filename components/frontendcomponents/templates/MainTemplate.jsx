import Overlay from "../atoms/Overlay"
import EnquireModal from "../organisms/EnquireModal"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <EnquireModal />
            <Overlay />
        </>
    )
}

export default MainTemplate