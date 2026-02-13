import { Link } from "react-router-dom";
import Button from "./Button";

function UserCard({ user, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <Link to={`/users/${user.id}`}>View Details</Link><br /><br />
      <Button text="Delete" onClick={() => onDelete(user.id)} />
    </div>
  );
}

export default UserCard;
