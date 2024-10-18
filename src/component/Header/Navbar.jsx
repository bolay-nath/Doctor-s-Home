import "./Navbar.css";
import { Link } from "react-router-dom";

function NavbarMain() {
    return (
        <>
            <div className="nav-container">
                <div className="nav-position">
                    <Link to={"/home"}style={{color:"black"}}>Home</Link>
                    <Link style={{color:"black"}} to="/appointment">Appointment</Link>
                    <Link to={"/appointmentHistory"}style={{color:"black"}}>Dental Service</Link>
                    <Link to={"/login"}>Sign In</Link>
                    <Link to={"/dashboard"}>Dash Board</Link>
                    <a href="#home">Contact Us</a>
                    </div>
            </div>
        </>
    );
}
export default NavbarMain;