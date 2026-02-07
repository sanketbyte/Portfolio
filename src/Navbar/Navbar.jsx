import "./Navbar.css"

function Navbar({title,link}) {
    return(
        <div className="navbar">
            <a href={link}>
                {title}
            </a>
            
        </div>
    );
}

export default Navbar