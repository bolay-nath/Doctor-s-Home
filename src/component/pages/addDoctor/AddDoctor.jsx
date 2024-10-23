import { useState } from "react";
import Sidebar from "../appointmentHistroy/Sidebar";
import "./addDoctor.css"

Sidebar
const addDoctor = () => {
    const [info, setInfo] = useState({});
    const newInfo = {};
    const handleBlur = (e) => {
        newInfo[e.target.name] = e.target.value;
        console.log(newInfo)
    };
    const handleFileChange = (e) => {

        newInfo[e.target.name] = e.target.files[0];
        console.log(newInfo)
        console.log('data', newInfo.file)
    }
    //when submit the form
    const handleSubmit =  (e) => {
        alert("the dat is setting")
        e.preventDefault();
        const data = new FormData();
        data.append("file", newInfo.file);
        data.append("name", newInfo.firstName);
        data.append("email", newInfo.email);
         fetch("http://localhost:3000/addDoctor", {
                method: 'POST', 
                body: data,
            })
            .then (res=>res.json())
            .then (data=>console.log(data))
    }
    return (
        <div className="addDoctor-container">
            <div>
                <Sidebar />
            </div>
            <div className="addDoctor-form">
                <form onSubmit={handleSubmit} >
                    <label>First name: </label>
                    <input type="text" name="firstName" onBlur={handleBlur} required />
                    <br />
                    <label>Last name: </label>
                    <input type="text" name="lastName" onBlur={handleBlur} required />
                    <br />
                    <label>email: </label>
                    <br />
                    <input type="email" name="email" onBlur={handleBlur} required />
                    <br />
                    <label >password: </label>
                    <br />
                    <input onBlur={handleFileChange} type="file" name="file" required />
                    <br />
                    <input type="submit" value="Login!" />
                </form>
            </div>
        </div>
    );
};

export default addDoctor;