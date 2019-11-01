import React, { useState, useEffect } from "react";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setInput = e => {
    switch (e.currentTarget.id) {
      case "first_name": {
        setFirstName(e.currentTarget.value);
        break;
      }
      case "last_name": {
        setLastName(e.currentTarget.value);
        break;
      }
      case "email": {
        setEmail(e.currentTarget.value);
        break;
      }
      case "password": {
        setPassword(e.currentTarget.value);
        break;
      }
      default:
        return null;
    }
  };
  console.log(
    "first name: " +
      firstName +
      " last_name: " +
      lastName +
      " email: " +
      email +
      " password: " +
      password
  );
  return (
    <form>
      <h1>Login</h1>
      <div>
        <label htmlFor="first_name"></label>
        <input
          id="first_name"
          type="text"
          value={firstName}
          onChange={e => setInput(e)}
        />
      </div>
      <div>
        <label htmlFor="last_name"></label>
        <input
          id="last_name"
          type="text"
          value={lastName}
          onChange={e => setInput(e)}
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setInput(e)}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={e => setInput(e)}
        />
      </div>
    </form>
  );
};

export default Login;
