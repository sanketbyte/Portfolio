import "./footer.css";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";

function Footer() {
    return(
        <div className="footercontainer">
            <div className="footerbox">
            <div className="appeal">
                If you’re building something meaningful, I’d love to be part of the journey.<br/>
                Let’s connect and create something impactful together.</div>
            <div>
                
            <div>Contact</div>
                    <div>✉️ sanketgaikwad1451@gmail.com</div>
                    <div>📍 Pune, Maharashtra, India</div>
            </div>
            
            <div className="socialcontainer">
                <div>Connect</div>
                <div className="sociallinks">
                    <a href="https://www.linkedin.com/in/sanket-gaikwad-9a3985249/"><FaLinkedin /></a>
                    <a href="https://github.com/sanketbyte"><FaGithub /></a>
                    <a href="https://www.youtube.com/@TheFrontend_Guy"><FaYoutube /></a>
                </div>
                
            </div>
        </div  >
        </div>
        
    )
}

export default Footer