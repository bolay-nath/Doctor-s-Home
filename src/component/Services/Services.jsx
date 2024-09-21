import "./service.css"
import fluoride from "../../resorce/images/fluoride.png"
import cavity from "../../resorce/images/cavity.png"
import teeth from "../../resorce/images/whitening.png"
import ServiceComponent from "./ServiceComponent";


const Services = () => {
    const serviceData = [
        {
            title: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, dolores!",
            image: fluoride,
            id: 1,
        },
        {
            title: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, dolores!",
            image: cavity,
            id: 2,
        },
        {
            title: "Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, dolores!",
            image: teeth,
            id: 3,
        },
    ]
    return (
        <div className="service-container">
            <div className="service-heading">
            <h5>OUR SERVICES</h5>
            <h1>Service We Provide</h1>
            </div>
            <div className="serviceDataContainer">
                {serviceData.map(data=><ServiceComponent key={data.id} data={data}></ServiceComponent>)}
            </div>
        </div>
    );
};

export default Services;