import Nav from "./components/nav/Nav"
import LandingPage from "./components/landingPage/LandingPage"
import Services from "./components/services/Services"
import Drones from "./components/drones/Drones"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Impressum from "./components/impressum/Impressum"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


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