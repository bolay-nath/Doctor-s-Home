import InfoCard from "./InfoCard";
import {faClock,faLocationDot,faPhone} from '@fortawesome/free-solid-svg-icons'

const BusinessCard = () => {
    const infoData = [
        {
            title: "Opening Hours",
            description: "We are open in 24/7",
            icons: faClock,
            background: "primary",
            id: 1,
        },
        {
            title: "Visit Our Location",
            description: "Kumira, Sitakunda, Chittagong",
            icons: faLocationDot,
            background: "black",
            id: 2,
        },
        {
            title: "Call Us Now",
            description: "+8801823537648",
            icons: faPhone,
            background: "primary",
            id: 3,
        },
    ]
    return (
        <section className="row mx-auto p-2 ">
            {infoData.map(cardData=><InfoCard cardData={cardData} key={cardData.id}></InfoCard>)}
        </section>
    );
};

export default BusinessCard;