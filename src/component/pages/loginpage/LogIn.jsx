import { useState } from "react";
import "./Login.css";
import Navbar from "../../Header/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF, faXTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { createEmailAndPassword, logInWithFacebook, signWithPopupGoogle } from "./loginSetup";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [toggle, setToggle] = useState(false)
    const userSignStatus = {};
    const navigate = useNavigate()
    const handleSignStatus = (e) => {
        userSignStatus[e.target.name] = e.target.value;
        console.log(userSignStatus)
    }
    const handleSignSubmit = (e) => {
        e.preventDefault()
        createEmailAndPassword(userSignStatus.email, userSignStatus.password)
    };
    const changeRouter = async () => {
        signWithPopupGoogle()
            .then((result) => {
                console.log("Sign-in successful:", result.user);
                console.log("Access token:", result.user.email);
                if(result.user.email){
                    navigate("/appointment")
                }
            })
            .catch((error) => {
                console.error("Sign-in failed:", error.errorMessage);
            });

    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="login-container">

                <div className={toggle ? "container active" : "container"}>
                    <div className="form-container sign-up">
                        <form>
                            <h2>Create Account</h2>
                            <div className="social-icons">
                                <a href="#" className="icon" onClick={changeRouter}><i><FontAwesomeIcon icon={faGooglePlusG} /></i></a>
                                <a href="#" className="icon" onClick={logInWithFacebook}><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
                                <a href="#" className="icon"><i><FontAwesomeIcon icon={faXTwitter} /></i></a>
                                <a href="#" className="icon"><i><FontAwesomeIcon icon={faLinkedinIn} /> </i></a>
                            </div>
                            <span>or use your email for registeration</span>
                            <input name="name" type="text" placeholder="Name" onBlur={handleSignStatus} />
                            <input name="email" type="email" placeholder="Email" onBlur={handleSignStatus} />
                            <input name="password" type="password" placeholder="Password" onBlur={handleSignStatus} />
                            <button onClick={handleSignSubmit}>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form>
                            <h1>Sign In</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i><FontAwesomeIcon icon={faGooglePlusG} /></i></a>
                                <a href="#" className="icon"><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
                                <a href="#" className="icon"><i><FontAwesomeIcon icon={faXTwitter} /></i></a>
                                <a href="#" className="icon"><i><FontAwesomeIcon icon={faLinkedinIn} /> </i></a>
                            </div>
                            <span>or use your email password</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forget Your Password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button className="hidden" onClick={() => setToggle(false)} id="login">Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all of site features</p>
                                <button className="hidden" onClick={() => setToggle(true)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;