import "./Work.css";

function Work({ title, description, image }) {
    return (
        <div className="card">
            <div className="imgwrapper">
                <img src={image} alt="project thumbnail" className="placeholder" />
            </div>

            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Work;
