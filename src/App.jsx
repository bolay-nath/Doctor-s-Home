import HeaderMain from "./component/Header/HeaderMain";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from "./component/Services/Services";
import Exceptional from "./component/Services/Exceptional";
import AppointmentMain from "./component/Doctor-appointment/AppointmentMain";
import Contact from "./component/Contact/Contact";


function TotalComponent() {
    return (
        <>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentMain></AppointmentMain>
            <Contact></Contact>
        </>
    );
}

export default TotalComponent;