import { useState } from "react";
import propTypes from "prop-types";
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartLine, faCalendarCheck, faHospitalUser,faPrescription,faGears, faRightFromBracket,}  from "@fortawesome/free-solid-svg-icons"

const Sidebar = (props) => {
  
  const [changeSidebar, setSidebar] = useState(props.position);
  
  
  return (
    <div className={changeSidebar? "sidebar2 gridItem2": "sidebar"}>
      <ul>
        <li>
          <a href="/dashboard">
            <span className="icon">
              <i ><FontAwesomeIcon icon={faChartLine} className="fa-thin" /></i>
            </span>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/appointment">
            <span className="icon">
            <i ><FontAwesomeIcon icon={faCalendarCheck} className="fa-thin" /></i>
            </span>
            <span className="text">Appointment</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
           <i> <FontAwesomeIcon icon={faHospitalUser} /></i>
            </span>
            <span className="text">Patients</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
            <i> <FontAwesomeIcon icon={faPrescription} /></i>
            </span>
            <span className="text">Prescriptions</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
            <i> <FontAwesomeIcon icon={faGears} /></i>
            </span>
            <span className="text">Setting</span>
          </a>
        </li>
      </ul>
      <div className="logout">
        <a href="#">
          <span>
          <i> <FontAwesomeIcon icon={faRightFromBracket} /></i>
          </span>
        <span>Log Out</span>
        </a>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  position: propTypes.node,
};

export default Sidebar;