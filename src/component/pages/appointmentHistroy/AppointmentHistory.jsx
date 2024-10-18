import Calendar from "react-calendar";
import Sidebar from "./Sidebar";
import "./AppointmentHistory.css"
import { useState } from "react";
import AppointmentList from "./AppointmentList";


const AppointmentHistory = () => {
    const dates = new Date().toDateString();
    const [selectDate, setSelectDate] = useState(dates);
    const [appointmentList, setAppointmentList] = useState([])

    // this code for fetch the all patient list how are already register(date wise data call).then those all information set in the appointmentLis.
    const dateState = (data) => {
        setSelectDate(data.toDateString())
        const date = data.toDateString();
        fetch("http://localhost:3000/historyByDate", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ date })
        }).then(res => res.json())
            .then(appointment => setAppointmentList(appointment))
    };
    //line is finished
    console.log(appointmentList)
    
    return (
        <div className="appointment-history-container">
            <Sidebar></Sidebar>
            <div className="appointment-history-part2">
                <Calendar onChange={dateState} className={"appointment-history-calender item-2"}></Calendar>
                <AppointmentList list={appointmentList}></AppointmentList>
            </div>

        </div>
    );
};

export default AppointmentHistory;