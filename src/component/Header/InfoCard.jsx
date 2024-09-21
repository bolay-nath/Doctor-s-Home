import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import propTypes from "prop-types";
import "./InfoCard.css"
const InfoCard = ({ cardData }) => {
    const { title, description, icons, background } = cardData;
    return (
        <div className="col-md-4 ">
            <div className={`d-flex info-container rounded-2 info-${background}`}>
                <div>
                    <FontAwesomeIcon className="font-icon" icon={icons}></FontAwesomeIcon>
                </div>
            <div className="info-title">
                <h3>{title}</h3>
                <h6>{description}</h6>
            </div>
            </div>
        </div>
    );
};
InfoCard.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    icons: propTypes.node
};
InfoCard.defaultProps = {
    isStudent: false
}

export default InfoCard;