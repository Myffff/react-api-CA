import React, { useContext, useState } from "react";
import { login, signup } from "../../api/movie-api";
import { AuthContext } from "../../contexts/authcontext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./setting.css";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleLoginSubmit(event) {
    event.preventDefault();
    const res = await login(username, password);
    if (res.success) {
      context.setIsAuthenticated(true);
      context.setUserName(username);
      context.setUser(res.user);
      console.log("Login success");
      navigate("/");
    }
  }
  async function handleRegistrationSubmit(event) {
    event.preventDefault();
    const res = await signup(username, email, password);
    if (res.code === 201) {
      console.log("Sign up success");
      navigate("/");
    }
  }

  return (
    <div className="login-box">
      {mode === "login" ? (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="user-box">
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <label>Username</label>
            </div>
            <br />
            <div className="user-box">
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label>Password</label>
            </div>
            <br />
            <Button
              fullWidth="true"
              type="submit"
              color="secondary"
              variant="contained"
            >
              Log in
            </Button>
          </form>
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <div className="user-box">
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label>Password</label>
            </div>
            <br />
            <Button
              fullWidth="true"
              type="submit"
              color="secondary"
              variant="contained"
            >
              Sign up
            </Button>
          </form>
        </>
      )}
      <span>
        {mode === "login" ? (
          <Button
            fullWidth="true"
            color="secondary"
            variant="outlined"
            onClick={() => setMode("register")}
          >
            Sign up
          </Button>
        ) : (
          <Button
            fullWidth="true"
            color="secondary"
            variant="outlined"
            onClick={() => setMode("login")}
          >
            Log in
          </Button>
        )}
      </span>
    </div>
  );
};
export default Login;
