import "./AppointmentCard.css";

const AppointmentCard = ({data}) => {
    const {name, time, available} = data;
    return (
        <div className="appointmentCard">
            <h4 style={{fontWeight:"bold", color:"#5FDDB1"}}>{name}</h4>
            <h6>{time}</h6>
            <p>{available}</p>
            <button className="button">Book Appointment</button>
        </div>
    );
};

export default AppointmentCard;