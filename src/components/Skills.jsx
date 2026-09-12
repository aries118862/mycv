import { useState } from "react";

const skills = ["Full-stack web development", "Software engineering", "Graphic design", "Video editing", "3D art", "Technology support for schools", "React.js", "HTML & CSS", "Problem solving", "Team collaboration"];

function Skills() {
  const [showSkills, setShowSkills] = useState(true);
  return <section className="cv-section" id="skills"><div className="container skills-layout"><div className="skills-header"><div><p className="section-kicker">03 · Capabilities</p><h2 className="section-title">Technical skill.<br />Creative range.</h2></div><div className="section-toolbar"><p className="section-intro">A flexible skill set across software, web, design, media, and technical support.</p><button className="text-button skills-toggle" type="button" onClick={() => setShowSkills((visible) => !visible)}>{showSkills ? "Hide skills" : "Show skills"}</button></div></div>{showSkills && <div className="skill-wrap">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div>}</div></section>;
}
export default Skills;
