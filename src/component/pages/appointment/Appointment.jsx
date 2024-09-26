import { CardLink } from "react-bootstrap";
import Navbar from "../../../component/Header/Navbar"
import Footer from "../../Footer/Footer"
import Calendar from "react-calendar";

const Appointment = () => {
    return (
        <div>
            <Navbar />
            <h1>this is appointment</h1>
            <Calendar></Calendar>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;