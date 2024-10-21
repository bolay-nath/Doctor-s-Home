import { useState } from "react";
import "./AppointmentList.css";
import propTypes from "prop-types";
const AppointmentList = ({ list, position }) => {
  //this state use for toggle
  const [condition, setCondition] = useState(true);
  const [status, setStatus] = useState('');
  const [userId, setUserId] = useState('USER_ID_PLACEHOLDER');
  //finished

  //this state use for multiple use of this page
  const [changeSidebar, setSidebar] = useState(position);
  // this is use for update the status
  const updateData = {};
  const [selectedOption, setSelectedOption] = useState(updateData);
  const handleChange = (e) => {
    updateData.status = e.target.value;
    setSelectedOption(updateData);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(updateData); // Logs the selected option to the console
    const response = await fetch('/update-status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, status }), // Send userId and status as JSON
    });

    const result = await response.json();
    alert(result.message); 
  };
  return (
    <div className={changeSidebar ? "gridItem4" : "appointment-list-container"}>
      <div>
        <h1>Appointment {list.length}</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>
              Email
            </th>
            <th>
              {condition? "Time" : "Status"}
            </th>

          </tr>
        </table>

        {list.map((lis) => (
          <table key={lis._id} style={{ border: "1px solid black" }}>
            <tr>
              <td>{lis.name}</td>
              <td>{lis.email}</td>
              <td>{condition? lis.time:
              
                <form className="submitOption" onSubmit={handleSubmit} onChange={()=>setSelectedOption(updateData.id=lis._id)}>
                  <select value={selectedOption} onChange={handleChange}>
                    <option value={`${lis.status}`} >{lis.status}</option>
                    <option value="in-progress" >In Progress</option>
                    <option value="complete" >Complete</option>
                  </select>
                  <button type="submit">Update</button>
                </form>
              }</td>
            </tr>
          </table>
        ))}
      </div>
      <div className="button-container">
        <button
          onClick={() => (condition ? setCondition(false) : setCondition(true))}
        >
          Change
        </button>
        <button>Update</button>
      </div>
    </div>
  );
};

//finished

AppointmentList.propTypes = {
  list: propTypes.node,
  position: propTypes.node,
};

export default AppointmentList;
