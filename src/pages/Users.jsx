import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>Users</h2>
      {users.map(user => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </>
  );
}

export default Users;
