import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  // console.log(props);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/marvel"
          >
            Marvel
          </NavLink>
          {/* <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink> */}

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/dc"
          >
            DC
          </NavLink>
          {/* <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink> */}

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/hero"
          >
            Hero
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          {/* <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/login"
          >
            Logout
          </NavLink> */}
          {/* <NavLink className="nav-item nav-link" to="/login">
            Logout
          </NavLink> */}

          <span className="nav-item nav-link text-primary">Wandir</span>
          <button className="nav-item nav-link btn" onClick={() => onLogout()}>
            {/* Igual a: <button className="nav-item nav-link btn" onClick={onLogout}> */}
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
