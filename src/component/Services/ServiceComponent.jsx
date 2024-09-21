import "./ServiceComponent.css"

const ServiceComponent = ({data}) => {
const {title,description,image} = data;
    return (
        <div className="serviceComponent">
            <img src={image} />
            <h2>{title}</h2>
            <p className="serviceDescription">{description}</p>
        </div>
    );
};

export default ServiceComponent;