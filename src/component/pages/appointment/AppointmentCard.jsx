import { useState } from "react";
import "./AppointmentCard.css";
import Modal from 'react-modal';
import { useForm } from "react-hook-form"
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";


const AppointmentCard = ({ data }) => {
    const { name, time, available } = data;

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
            <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} selectName={name} selectTime={time}></ModalComponent>
        </div>
    );
};

const ModalComponent = ({ modalIsOpen, closeModal, selectName, selectTime}) => {
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
    
        const onSubmit = (data) => console.log(data)
    
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
                    <input style={{width:"90%", margin:"5px"}} defaultValue={selectTime} {...register("time")} readOnly="readOnly" /><br />
                    <input style={{width:"90%", margin:"5px"}} placeholder={"Your Name"} {...register("name")}  /><br />
                    <input style={{width:"90%", margin:"5px"}} placeholder={"Phon Number"} {...register("phon")}  /><br />
                    <input style={{width:"90%", margin:"5px"}} placeholder={"Email"} {...register("email")}  /><br />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input style={{width:"90%", margin:"5px"}} type="date" defaultValue={"Email"} {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <br /><input onClick={closeModal} type="submit" />
                </form>
            </Modal>
        </div>
    );

};//finish
// react form-hook start from here.


export default AppointmentCard;