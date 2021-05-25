import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          bLOGgy
        </NavLink>
          <NavLink className="link" to="/">
            Posts
          </NavLink>
          <NavLink className="link" to="/add-post">
            Add Post
          </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
