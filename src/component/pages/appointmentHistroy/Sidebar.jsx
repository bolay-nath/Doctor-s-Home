import { useState } from "react";
import propTypes from "prop-types";
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartLine, faCalendarCheck, faHospitalUser,faPrescription,faGears, faRightFromBracket,}  from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  
  const [changeSidebar, setSidebar] = useState(props.position);
  
  
  return (
    <div className={changeSidebar? "sidebar2 gridItem2": "sidebar"}>
      <ul>
        <li>
          <Link to={"/dashboard"}>
            <span className="icon">
              <i ><FontAwesomeIcon icon={faChartLine} className="fa-thin" /></i>
            </span>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/appointment">
            <span className="icon">
            <i ><FontAwesomeIcon icon={faCalendarCheck} className="fa-thin" /></i>
            </span>
            <span className="text">Appointment</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span className="icon">
           <i> <FontAwesomeIcon icon={faHospitalUser} /></i>
            </span>
            <span className="text">Patients</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span className="icon">
            <i> <FontAwesomeIcon icon={faPrescription} /></i>
            </span>
            <span className="text">Prescriptions</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span className="icon">
            <i> <FontAwesomeIcon icon={faGears} /></i>
            </span>
            <span className="text">Setting</span>
          </Link>
        </li>
      </ul>
      <div className="logout">
        <Link to="#">
          <span>
          <i> <FontAwesomeIcon icon={faRightFromBracket} /></i>
          </span>
        <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  position: propTypes.node,
};

export default Sidebar;