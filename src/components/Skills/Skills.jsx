import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">My Skills</h2>
      <div className="skills__content">
        <div className="skills__grid">
          <div className="skills__block">
            <h3 className="skills__subtitle">Technical Skills</h3>
            <div className="skills__tags">
              {[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Git",
                "Webpack",
                "RESTful APIs",
                "GitHub",
                "Postman",
                "VS Code",
                "Google Cloud Platform",
                "GitHub Pages",
              ].map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__block">
            <h3 className="skills__subtitle">Design Skills</h3>
            <div className="skills__tags">
              {[
                "UI/UX Design",
                "Figma",
                "Responsive & Adaptive Design",
                "Wireframing",
                "Prototyping",
                "Design System",
              ].map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__block">
            <h3 className="skills__subtitle">Marketing & Analytical Skills</h3>
            <div className="skills__tags">
              {[
                "Google Keyword Planner",
                "SEMrush",
                "Google Ads (beginner)",
                "Performance analysis",
                "Content optimization",
                "Internal linking strategy",
              ].map((qualities, index) => (
                <span className="skill-tag" key={index}>
                  {qualities}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__block">
            <h3 className="skills__subtitle">Professional Skills</h3>
            <div className="skills__tags">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Project Management",
                "Adaptability",
                "Detail-Oriented",
                "Self-Motivated",
                "Fast Learner",
                "Clear Communicator",
              ].map((qualities, index) => (
                <span className="skill-tag" key={index}>
                  {qualities}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
