import { Collapse } from "bootstrap";
import { Link, NavLink } from "react-router-dom";
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">Langui</Link>
        
        {/* Botao hamburguer para mostar/esconder menu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Links do nav */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/abcd" className="nav-link">Activity</Link>
            <Link to="/abcd" className="nav-link">Profile</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;