import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Profile() {
  return <section className="cv-section" id="profile"><div className="container profile-layout"><div><p className="section-kicker">01 · Profile</p><h2 className="section-title">Software builder.<br />Creative thinker.</h2></div><div className="profile-contact"><strong>Contact details</strong><a href="tel:+26659676254"><FaPhone /> +266 59676254</a><a href="mailto:kabeloselomo313@gmail.com"><FaEnvelope /> kabeloselomo313@gmail.com</a><span><FaMapMarkerAlt /> Maseru, Lesotho</span></div><div className="profile-copy"><p className="section-intro">I am Kabelo Selomo, a Software Engineering student at Limkokwing University with a practical interest in full-stack web development and digital media.</p><p className="section-intro">My creative toolkit spans graphic design, video editing, 3D art, and technology support for schools. I bring together technical problem solving and visual communication to create useful, engaging digital experiences.</p></div></div></section>;
}
export default Profile;
