import ReactDOM from "react-dom/client"
import Nav from "./components/nav/Nav"
import LandingPage from "./components/landingPage/LandingPage"
import Services from "./components/services/Services"
import Drones from "./components/drones/Drones"
import Me from "./components/me/Me"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Portfolio from "./components/portfolio/Portfolio"
import Impressum from "./components/impressum/Impressum"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


const App = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<><LandingPage/><Services/><Drones/><Contact/></>} />
                <Route path="/impressum" element={<Impressum/>} />
                <Route path="*" element={<LandingPage/>} />
            </Routes>
            <Footer/>
        </Router>

            // <Header/>
            // <Nav/>
            // <Services/>
            // <Drones/>
            // <Portfolio/>
            // <Testimonials/>
            // <Me/>
            // <Contact/>
            // <Footer/>


    );
}

export default App;