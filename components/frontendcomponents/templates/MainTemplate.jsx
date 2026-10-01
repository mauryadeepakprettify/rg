import Footer from "../organisms/Footer"
import Header from "../organisms/Header"

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainTemplate