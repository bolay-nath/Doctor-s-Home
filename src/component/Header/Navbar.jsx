import "./Navbar.css"

function NavbarMain() {
    return (
        <>
            <div className="nav-container">
                <div className="nav-position">
                    <a style={{color:"black"}} href="#home">Home</a>
                    <a style={{color:"black"}} href="#home">About</a>
                    <a style={{color:"black"}}  href="#features">Dental Service</a>
                    <a href="#pricing">Reviews</a>
                    <a href="#home">Blogs</a>
                    <a href="#home">Contact Us</a>
                    </div>
            </div>
        </>
    );
}
export default NavbarMain;