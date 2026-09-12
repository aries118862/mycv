const education = [
  { year: "2024 — Present", qualification: "Software Engineering", institution: "Limkokwing University of Creative Technology" },
  { year: "Completed 2021", qualification: "LGCSE Certificate", institution: "Botha-Bothe Community High School" },
  { year: "Certificate", qualification: "JC Certificate", institution: "Botha-Bothe Community High School" },
  { year: "Completed 2015", qualification: "Primary Education", institution: "Manamela Primary School" },
];

function Education() {
  return <section className="cv-section" id="education"><div className="container section-grid"><div><p className="section-kicker">02 · Education</p><h2 className="section-title">Building the<br />foundation.</h2></div><div className="education-list">{education.map((item) => <article className="education-item" key={item.qualification}><strong>{item.year}</strong><h3>{item.qualification}</h3><p>{item.institution}</p></article>)}</div></div></section>;
}
export default Education;
