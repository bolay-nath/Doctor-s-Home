import { useState } from "react";
import "./AppointmentList.css";
import propTypes from "prop-types";
const AppointmentList = ({ list, position }) => {
  //this state use for toggle
  const [condition, setCondition] = useState(true);
  
  //finished

  //this state use for multiple use of this page
  const [changeSidebar, setSidebar] = useState(position);
  // this is use for update the status
  const updateData = {};
  //when change the status from  user.
  const handleChange = async(e) => {
    console.log(e.target.value)
    updateData.status = e.target.value;
    
    console.log(updateData.status)
    console.log(updateData.id)
  };
  
//when user change and submit the status.
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(updateData); // Logs the selected option to the console
    const _id = updateData.id;
    const status = updateData.status;
    const response = await fetch('http://localhost:3000/updateStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id, status }), // Send userId and status as JSON
    });

    const result = await response.json();
    alert(result.message); 
  };
  //finished 
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
              //in the form cond when i change the status i got the id and set id into a SelectOption.
                <form className="submitOption" onSubmit={handleSubmit} >
                  <select  onChange={handleChange} onClick={()=>updateData.id=lis._id}>
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
