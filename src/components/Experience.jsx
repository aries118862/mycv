const experience = [
  { year: "Current focus", role: "Software Engineering Student", organization: "Limkokwing University", description: "Developing software engineering, full-stack web development, and digital product skills through coursework and personal practice." },
  { year: "Technical interest", role: "Multimedia and Technology Specialist", organization: "Independent practice", description: "Building capability across graphic design, video editing, 3D art, and technology support for schools." },
];

function Experience() {
  return <section className="cv-section" id="experience"><div className="container section-grid"><div><p className="section-kicker">04 · Experience</p><h2 className="section-title">Learning by<br />doing.</h2></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><strong>{item.year}</strong><h3>{item.role}</h3><em>{item.organization}</em><p>{item.description}</p></article>)}</div></div></section>;
}
export default Experience;
