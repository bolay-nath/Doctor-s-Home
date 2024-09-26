import HeaderMain from "../Header/HeaderMain";
import Services from "../Services/Services";
import Exceptional from "../Services/Exceptional";
import AppointmentMain from "../Doctor-appointment/AppointmentMain";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentMain></AppointmentMain>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;