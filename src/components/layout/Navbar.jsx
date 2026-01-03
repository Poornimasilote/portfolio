import navLinks from "../../data/navLinks";
import useActiveSection from "../../hooks/useActiveSection";
import useScrollToSection from "../../hooks/useScrollToSection";
import "./NavbarStyles.css";

const Navbar = () => {
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);
  const scrollTo = useScrollToSection();

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <span className="logo">Poornima</span>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`nav-item ${
                activeSection === link.id ? "active" : ""
              }`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
