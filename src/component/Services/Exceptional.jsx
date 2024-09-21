import care from "../../resorce/images/treatment.png";
import "./Exceptional.css"

const Exceptional = () => {
    return (
        <div className="exceptional-container">

            <div className="exceptional-part1">
                <img src={care} />
            </div>
            <div className="exceptional-part2">
                <h3>Exceptional Dental care, On your terms</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel laborum omnis magni, dolorum placeat deserunt laudantium reprehenderit nihil voluptates quam modi pariatur? Ducimus perferendis impedit omnis voluptates tenetur quos molestiae quo suscipit minus eaque! Placeat nobis minus fugit dolorum suscipit ipsam, molestias ut quis error culpa quia. Nulla debitis rerum molestias, officiis, pariatur dolores aperiam, blanditiis corrupti ab tempora omnis quaerat voluptatum voluptatem non laboriosam ipsum recusandae veritatis magni.</p>
                <button className="button">Learn More</button>
            </div>

        </div>
    );
};

export default Exceptional;