import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"
const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-item">
                <p>Emergency Dental Care</p>
                <p>Check Up </p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
            </div>
            <div className="footer-item">
                <h6>Hour Services</h6>
                <p>Emergency Dental Care</p>
                <p>Check Up </p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
            </div>
            <div className="footer-item">
                <h6>Our Health</h6>
                <p>Emergency Dental Care</p>
                <p>Check Up </p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
            </div>
            <div className="footer-item">
                <h6>Our Address</h6>
                <p>Goramora, Kumira, Chittagong</p>
                <p>Chittagong</p>
                <FontAwesomeIcon className="icons" icon={faFacebook} size="2xl" bounce />
                <FontAwesomeIcon className="icons" icon={faGoogle} size="2xl" bounce />
                <FontAwesomeIcon className="icons" icon={faInstagram} size="2xl" bounce />
                <h6>Call Now</h6>
                <h5 className="button" style={{ padding: "5px" }}>01885334295</h5>

            </div>
        </div>
    );
};

export default Footer;