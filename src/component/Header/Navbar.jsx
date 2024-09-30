import "./Navbar.css";
import { Link } from "react-router-dom";

function NavbarMain() {
    return (
        <>
            <div className="nav-container">
                <div className="nav-position">
                    <Link to={"/home"}><a style={{color:"black"}}>Home</a></Link>
                    <a style={{color:"black"}} href="/appointment">Appointment</a>
                    <a style={{color:"black"}}  href="#features">Dental Service</a>
                    <a><Link to={"/login"}>Sign In</Link></a>
                    <a href="#home">Blogs</a>
                    <a href="#home">Contact Us</a>
                    </div>
            </div>
        </>
    );
}
export default NavbarMain;