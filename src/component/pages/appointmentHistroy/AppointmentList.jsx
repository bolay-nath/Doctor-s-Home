import { useState } from "react";
import "./AppointmentList.css";
import propTypes from "prop-types";
const AppointmentList = ({ list }) => {
  //this state use for toggle
  const [condition, setCondition] = useState(true);
  console.log(list);
  const [status, setStatus] = useState('');
  const [userId, setUserId] = useState('USER_ID_PLACEHOLDER');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)
    console.log(event)
    //Make a POST request to your server to update the status in MongoDB
    const response = await fetch('/update-status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, status }), // Send userId and status as JSON
    });

    const result = await response.json();
    alert(result.message);  // Alert the result to the user
  };
  //finished
  return (
    <div className="appointment-list-container ">
      <div>
        <h1>Appointment {list.length}</h1>
        <table>
          <tr>
            <th>Name</th>
            <th className={condition ? "displayBlock" : "displayNone"}>
              Schedule
            </th>
            <th className={condition ? "displayNone" : "displayBlock"}>
              Status
            </th>
          </tr>
        </table>

        {list.map((lis) => (
          <table key={lis._id}>
            <tr>
              <td>{lis.name}</td>
              <td className={condition ? "displayBlock" : "displayNone"}>
                {lis.time}
              </td>
              <td className={condition ? "displayNone" : "displayBlock"}>
              <form onSubmit={handleSubmit}>
        <label htmlFor="status">Select Status:</label>
        <select
          id="status"
          value={status}        // Controlled input: value is tied to the status state
          onChange={(e) => setStatus(e.target.value)} // Update state on change
        >
          <option value="">--Select Status--</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>

        <button type="submit">Update Status</button>
      </form>
              </td>
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
//handel the form action

function UpdateStatusForm() {
  // State to hold the selected status and user ID
  const [status, setStatus] = useState("");
  const [userId, setUserId] = useState("USER_ID_PLACEHOLDER"); // Replace with actual user ID

  // Handle form submission
}
//finished

AppointmentList.propTypes = {
  list: propTypes.node,
};

export default AppointmentList;
