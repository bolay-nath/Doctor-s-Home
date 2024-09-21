import "./contact.css"
const Contact = () => {
    return (
        <div className="contact-container">
            <h3 style={{textAlign:"center", color:"#00FFFF"}}>CONTACT</h3>
            <h1 style={{textAlign:"center", fontWeight:"bold"}}>Always Contact us...</h1>
            <div className="container">
                <form action="action_page.php">

                    <label >First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label >Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label >Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                    <label >Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default Contact;