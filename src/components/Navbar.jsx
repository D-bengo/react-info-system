import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/add">Add User</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;
