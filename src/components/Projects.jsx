const projects = [
  { number: "01", title: "Ethera Business Network (EBN)", description: "A business networking platform designed to connect organisations, opportunities, and professional communities through a clear digital experience." },
  { number: "02", title: "Ethera Network Unlock Tool", description: "A practical technology tool focused on network access and device support, combining a straightforward interface with a problem-solving mindset." },
  { number: "03", title: "MTPrime Streaming Platform", description: "A streaming platform project created for digital entertainment and online content delivery.", url: "https://www.mtprime.live" },
];

function Projects() {
  return <section className="cv-section" id="projects"><div className="container"><p className="section-kicker">05 · Selected work</p><h2 className="section-title">Projects with<br />a purpose.</h2><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p>{project.url && <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Visit mtprime.live</a>}</article>)}</div></div></section>;
}
export default Projects;
