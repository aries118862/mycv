import { FaUser, FaGraduationCap, FaCode, FaFolderOpen, FaPrint, FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header({ isDark, onToggleTheme }) {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(currentTime);

  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#top" className="brand">Kabelo<span>.</span></a>

        <div className="nav-links">
          <a href="#profile"><FaUser className="nav-icon" /> Profile</a>
          <a href="#education"><FaGraduationCap className="nav-icon" /> Education</a>
          <a href="#skills"><FaCode className="nav-icon" /> Skills</a>
          <a href="#projects"><FaFolderOpen className="nav-icon" /> Projects</a>
        </div>
        <div className="nav-actions">
          <time className="live-time" dateTime={currentTime.toISOString()} aria-label="Current local time">{formattedTime}</time>
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Toggle colour theme">{isDark ? <FaSun /> : <FaMoon />}</button>
          <button className="print-button" type="button" onClick={() => window.print()}><FaPrint /> Print CV</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;