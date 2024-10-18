import { useState } from "react";
import "./AppointmentCard.css";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import propTypes from "prop-types";



const AppointmentCard = ({ data, selectDate}) => {
    const { name, time, available } = data;
    const selectClientDate = selectDate;

    let [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    };
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="appointmentCard">
            <h4 style={{ fontWeight: "bold", color: "#5FDDB1" }}>{name}</h4>
            <h6>{time}</h6>
            <p>{available}</p>
            <button onClick={openModal} className="button">Book Appointment</button>
            <ModalComponent selectClientDate={selectClientDate} modalIsOpen={modalIsOpen} closeModal={closeModal} selectName={name} selectTime={time}></ModalComponent>
        </div>
    );
};
// setUp props validation.
AppointmentCard.propTypes = {
    data: propTypes.node,
    selectDate: propTypes.node,
}
//this component is finished.

const ModalComponent = ({ modalIsOpen, closeModal, selectName, selectTime,selectClientDate }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            width: "700px",
            height: "400px",
            textAlign: "center",
        },
    };
    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#root');


    let subtitle;


    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    //this section for form hook. this form hook install from react-form-hooks.
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        try {
            fetch("http://localhost:3000/addPatient",{
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            }
            ).then(res=>res.json())
        } finally {
            closeModal()
            alert('Your request is successfully done..')
        }

    }

    console.log(watch("example")) // watch input value by passing the name of it
    //this hook section is finished.


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>{selectName}</h2>
                { /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input
                        style={{ width: "90%", margin: "5px" }}
                        defaultValue={selectTime}
                        {...register("time")}
                        readOnly
                    />
                    <br />
                    <input
                        style={{ width: "90%", margin: "5px" }}
                        placeholder="Your Name"
                        {...register("name")}
                    />
                    <br />
                    <input
                        style={{ width: "90%", margin: "5px" }}
                        placeholder="Phone Number"
                        {...register("phon")}
                    />
                    <br />
                    <input
                        style={{ width: "90%", margin: "5px" }}
                        placeholder="Email"
                        {...register("email")}
                    />
                    <br />
                    <input
                        style={{ width: "90%", margin: "5px" }}
                        defaultValue={selectClientDate}
                        {...register("date", { required: true })}
                    />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input type="submit" />
                </form>

            </Modal>
        </div>
    );

};//finish
// react form-hook start from here.
ModalComponent.propTypes = {
    modalIsOpen : propTypes.node,
    closeModal : propTypes.node,
    selectName : propTypes.node,
    selectTime : propTypes.node,
    selectClientDate : propTypes.node
}


export default AppointmentCard;