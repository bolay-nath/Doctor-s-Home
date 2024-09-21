import Doctor from "../../resorce/images/doctor.png";
import "./DoctorAppoint.css"

const DoctorAppoin = () => {
    return (
        <div className="appointment-container">
            <div className="appointment-position">
            <div className="appointment-part1">
                <img src={Doctor} alt="" />
            </div>
            <div className="appointment-part2">
                <h5 style={{fontWeight:"bold"}}>APPOINTMENT</h5>
                <h2>Make an appointment Today.</h2>
                <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its.</p>
                <button className="button">Learn more</button>
            </div>
            </div>
        </div>
    );
};

export default DoctorAppoin;