import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/appointment">
            <span className="icon">
              <i className="fas fa-calendar-alt"></i>
            </span>
            <span className="text">Appointment</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fas fa-user-friends"></i>
            </span>
            <span className="text">Patients</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fas fa-file-medical"></i>
            </span>
            <span className="text">Prescriptions</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fas fa-cog"></i>
            </span>
            <span className="text">Setting</span>
          </a>
        </li>
      </ul>
      <div className="logout">
        <a href="#">
          <i className="fas fa-sign-out-alt"></i>
          <span>Log Out</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;