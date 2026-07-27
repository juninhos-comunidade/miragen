import Button from "../Button/Button";
import { Link } from "react-router";
import "./Header.css"; 

function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="header-logo">
        <div className="logo-icon">M</div>
        <span>MIRAGEN</span>
      </Link>

      <nav className="header-nav">
        <ul>
          <li>
            <a href="#como-funciona">Como funciona</a>
          </li>
          <li>
            <a href="#sobre">Sobre o projeto</a>
          </li>
          <li>
            <a href="#recursos">Recursos</a>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/upload">
          <Button variant="primary" text="Começar análise" />
        </Link>
      </div>
    </header>
  );
}

export default Header;