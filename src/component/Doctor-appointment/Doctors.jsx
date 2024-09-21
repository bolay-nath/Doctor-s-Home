import doctors from "../../resorce/images/doctor-small.png";
import "./Doctors.css"

const Doctors = () => {
    return (
        <div className="doctors-container">
            <h1 style={{color:"#00FFFF"}}>OUR DOCTORS</h1>
            <div className="doctors">
            <img src={doctors} alt="" />
            <img src={doctors} alt="" />
            <img src={doctors} alt="" />
            </div>
        </div>
    );
};

export default Doctors;