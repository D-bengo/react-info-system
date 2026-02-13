import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function AddUser() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...form, id: Date.now() }]);
    setForm({ name: "", email: "", phone: "", department: "" });
  };

  return (
    <>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <Input label="Name" name="name" value={form.name} onChange={handleChange} />
        <Input label="Email" name="email" value={form.email} onChange={handleChange} />
        <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
        <Input label="Department" name="department" value={form.department} onChange={handleChange} />
        <Button text="Submit" type="submit" />
      </form>

      <h3>Submitted Users</h3>
      {users.map(user => (
        <p key={user.id}>{user.name} - {user.department}</p>
      ))}
    </>
  );
}

export default AddUser;
