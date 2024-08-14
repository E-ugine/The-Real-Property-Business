import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

<<<<<<< HEAD

=======
    
<<<<<<< HEAD
    const user = { username, email };
    setUser(user);

=======
>>>>>>> a14ae872f0a26ddc714f102671260067a1e61167
>>>>>>> ed62d24303a5409290167f6dee007ea21faffa73
    navigate("/");
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
