import "./Work.css";

function Work({ title, description, image }) {
    return (
        <div className="cardcontainer">
            <div className="card">
                <img src={image} alt="project thumbnail" className="placeholder" />
            </div>

            <div className="projectdetailscontainer">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
        
    );
}

export default Work;
