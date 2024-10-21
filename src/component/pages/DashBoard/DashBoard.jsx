import AppointmentList from "../appointmentHistroy/AppointmentList";
import Calendar from "react-calendar";
import Sidebar from "../appointmentHistroy/Sidebar";
import "./DashBoard.css";
import DashBoardHeader from "./DashBoardHeader";
import { useState } from "react";

const DashBoard = () => {
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
    return (
        <div className="dashboard-container">
            <div className="dashboardDev-1">
                <DashBoardHeader />
            </div>
            <div className="dashboardDev-2">
                <Sidebar position={true}></Sidebar>
            </div>
            <div className="dashboardDev-3">
                <Calendar onChange={dateState} className={"gridItem3"}></Calendar>
            </div>
            <div className="dashboardDev-4">
                <AppointmentList list={appointmentList} position={true}></AppointmentList>
            </div>
        </div>
    );
};

export default DashBoard;