import { useState } from "react";
import { FaArrowDown, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import References from "../components/References";
import profileImage from "../images/image0.png";

function Home() {
  const [hasProfilePhoto, setHasProfilePhoto] = useState(true);

  return (
    <>
      <section className="hero" id="top"><div className="container hero-grid"><div className="hero-copy"><p className="kicker">Curriculum Vitae · 2026</p><div className="hero-identity"><span className="profile-photo" aria-label="Kabelo Selomo profile photo">{hasProfilePhoto && <img src={profileImage} alt="Kabelo Selomo" onError={() => setHasProfilePhoto(false)} />}{!hasProfilePhoto && <span>KS</span>}</span><h1><span>Kabelo</span> <span>Selomo</span></h1></div><p className="hero-summary">Software Engineering student and multimedia creative building digital experiences through full-stack web development, graphic design, video editing, and 3D art.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <FaArrowDown /></a><a className="button button-secondary" href="tel:+26659676254">Call me <FaPhone /></a></div></div></div></section>
      <Profile />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <References />
      <section className="contact-strip" id="contact"><div className="container contact-grid"><div><p className="section-kicker">Let’s connect</p><h2>Ready to start<br />the next chapter.</h2></div><div className="contact-links"><a href="tel:+26659676254"><FaPhone /> +266 59676254</a><a href="mailto:kabeloselomo313@gmail.com"><FaEnvelope /> kabeloselomo313@gmail.com</a><span><FaMapMarkerAlt /> Maseru, Lesotho</span></div></div></section>
    </>
  );
}

export default Home;
