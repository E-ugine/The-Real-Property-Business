import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // This is for mock authentication
    const user = { username };
    setUser(user);

    navigate("/");
  }

   
  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
