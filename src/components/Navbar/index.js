import { Link, NavLink } from "react-router-dom";
import './index.css';

const Navbar = () => {
  return (
    <nav className="mainNavbar fixed-bottom">
      <div className="container-fluid">
        <NavLink to="/"><i className="bi bi-house-door-fill"></i></NavLink>
        <NavLink to="/blog"><i className="bi bi-pencil-square"></i></NavLink>
        <NavLink to="/wordbank"><i className="bi bi-book-half"></i></NavLink>
        <NavLink to="/profile"><i className="bi bi-person-fill"></i></NavLink>
      </div>
    </nav>
  );
}

export default Navbar;