import "./Navbar.css";
import { FaBars } from "react-icons/fa6";


function Navbar({title,link,icon: Icon}) {
    return(
        <div className="navbar">
            <a href={link}>
                <Icon />    
                {title}
            </a>
            
        </div>
    );
}

export default Navbar