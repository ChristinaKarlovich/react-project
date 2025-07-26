import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/about">About</Link>
      <Outlet />
    </nav>
  );
}

export default Nav;
