import img2 from "../assets/img2.png"
import "./Home.css"

function Home({children}) {
    return(

<div className="Hero">
  {children}

  <div className="textgrid">
    <p className="quote">build logic;<br/>the code will follow</p>
    <p className="description">
        Hi! I am Sanket — an engineer turned software developer.<br/>
I work with the MERN stack to build clean, responsive, and meaningful web experiences.<br/>
Take a look at my projects below, and feel free to reach out if you’d like to work together!</p>
  </div>

  <div className="imgcontainer">
    <img className="img" src={img2} alt="profile" />
  </div>

  <div className="title">Fullstack Developer</div>

</div>
    )
}

export default Home