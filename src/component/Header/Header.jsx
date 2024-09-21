import "./Header.css"
import chair from "../../resorce/images/chair.png";


const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerBackground">
                <div className="part1">

                </div>
                <div className="part2">

                </div>
            </div>

            <div className="headerCompo">
                <div className="headerComponentPart1">
                    <div className="headerText"> 
                        <h1>Your new smile <br />starts from hear</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel dolorum optio ratione enim, voluptate, animi non perspiciatis, tenetur itaque omnis laudantium. Quibusdam porro placeat.</p>
                        <button className="button">Appointment</button>
                    </div>

                </div>
                <div className="headerComponentPart2">
                    <img src={chair} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;