import 'react-calendar/dist/Calendar.css';
import Navbar from "../../../component/Header/Navbar";
import Footer from "../../Footer/Footer";
import Calendar from "react-calendar";
import "./appointment.css";
import { useState } from 'react';
import sidePicture from "../../../resorce/images/chair.png"
import appointmentData from "./appointmentData.js";
import AppointmentCard from './AppointmentCard.jsx';
import propTypes from 'prop-types';


const Appointment = () => {

    const dates = new Date().toDateString();
    const [selectDate, setSelectDate] = useState(dates);
    const dateState = (e) => {
        setSelectDate(e.toDateString())
    }
    return (
        <div className='appointment-container'>
            <Navbar />
            <h1 >Appointment</h1>
            <div className='img-component'>
                <Calendar onChange={dateState} className={"appointment-calender"} ></Calendar>
                <img className="appointment-img" src={sidePicture} alt="" />
            </div>
            <BookingDate date={selectDate}></BookingDate>

            <Footer></Footer>
        </div>
    );
};
const BookingDate = ({ date }) => {
    return (
        <section>
            <h1>Available Appointment Date on {date}</h1>
            <div className='appointmentCard-container'>
                {appointmentData.map(data => <AppointmentCard key={data.id} data={data} selectDate={date}></AppointmentCard>)}
            </div>


        </section>
    )
};

BookingDate.propTypes = {
    date: propTypes.node,
}

export default Appointment;