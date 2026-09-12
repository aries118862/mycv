import { useState } from "react";

const references = [
  { name: "Brain Tech Solutions", role: "Professional reference", detail: "Contact: +266 56432323", contact: "tel:+26656432323" },
  { name: "Additional reference", role: "Academic or professional reference", detail: "Details available on request.", contact: "#contact" },
];

function References() {
  const [showReferences, setShowReferences] = useState(true);
  return <section className="cv-section" id="references"><div className="container"><div className="section-toolbar"><div><p className="section-kicker">06 · References</p><h2 className="section-title">Professional<br />connections.</h2></div><button className="text-button" type="button" onClick={() => setShowReferences((visible) => !visible)}>{showReferences ? "Hide references" : "Show references"}</button></div>{showReferences && <div className="reference-grid">{references.map((reference) => <article className="reference-card" key={reference.name}><strong>{reference.name}</strong><p>{reference.role}</p><p>{reference.detail}</p><p><a href={reference.contact.startsWith("tel:") ? reference.contact : "#contact"}>{reference.contact.startsWith("tel:") ? "+266 56432323" : "Contact information available on request"}</a></p></article>)}</div>}</div></section>;
}
export default References;
