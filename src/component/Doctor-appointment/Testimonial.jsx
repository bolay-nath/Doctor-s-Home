import people1 from "../../resorce/images/people1.png"
import people2 from "../../resorce/images/people2.png"
import people3 from "../../resorce/images/people3.png"
import "./Testimonial.css"
const Testimonial = () => {
    const testimonials = [
        {
            name: "Weleamson Harry",
            place: "Dhaka",
            description: "it is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here,content",
            img: people1,
            id: 1,
        },
        {
            name: "Harry portal",
            place: "Chittagong",
            description: "it is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here,content",
            img: people2,
            id: 2,
        },
        {
            name: "Nick Jonson",
            place: "Chittagong",
            description: "it is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here,content",
            img: people3,
            id: 3,
        },
    ]
    return (
        <div className="testimonial-container">
            <div className="testimonial-heading">
                <h5 style={{color:"#00FFFF",fontWeight:"bold"}}>TESTIMONIAL</h5>
                <h1 style={{fontWeight:"bold"}}>What Our Patients Says</h1>
            </div>
            <div className="testimonial-content">
                {testimonials.map(data=><TestimonialTemplate key={data.id} data={data}></TestimonialTemplate>)}
            </div>
        </div>
    );
};
const TestimonialTemplate = ({data}) => {
    const {name,place,description,img} = data;
    return (
        <div className="testimonial-template">
            <p>{description}</p>
            <img src={img} alt="" />
            <h5 style={{color: "#00FFFF"}}>{name}</h5>
            <h6>{place}</h6>
        </div>
    )
}

export default Testimonial;