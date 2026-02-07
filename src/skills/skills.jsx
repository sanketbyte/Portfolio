import "./skills.css"
function Skills() {
    return(

    <section className="skills-section">
  <h2 className="skills-title">Skills</h2>

  <div className="skills-grid">
    {[
      "HTML",
      "JavaScript",
      "System Design",
      "ES6",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js"
    ].map((skill) => (
      <span key={skill} className="skill-pill">
        {skill}
      </span>
    ))}
  </div>
</section>

    )
}




export default Skills