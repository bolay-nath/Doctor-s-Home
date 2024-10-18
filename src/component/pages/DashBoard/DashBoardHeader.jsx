import "./DashBoardHeader.css";

const DashBoardHeader = () => {
    return (
        <div className="dashBoardHeader-container">
            <div className="dashBoardHeader-item">
                <div className="dashBoard-item-1 dashBoard-item">
                    <h2>50</h2>{" "}
                    <p>
                        Pending <br /> Appointment
                    </p>
                </div>
                <div className="dashBoard-item-2 dashBoard-item">
                    <h2>50</h2>{" "}
                    <p>
                        Today's <br /> Appointment
                    </p>
                </div>
                <div className="dashBoard-item-3 dashBoard-item">
                    <h2>50</h2>{" "}
                    <p>
                        Total <br /> Appointment
                    </p>
                </div>
                <div className="dashBoard-item-4 dashBoard-item">
                    <h2>50</h2>{" "}
                    <p>
                        Total <br /> Patients
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashBoardHeader;
