import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { AuthContext } from "../../contexts/authcontext";
import { Button } from "@mui/material";
import "./setting.css";

export default function Form() {
  const context = useContext(AuthContext);
  const [username, setUserName] = useState(context.userName);
  const user = context.user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    context.updateUserInfo(user._id, username, email, password);
  };

  return (
    <div className="login-box">
      <Box>
        <Avatar sx={{ bgcolor: deepPurple[500], margin: "auto" }}>
          {username[0]}
        </Avatar>
        <p>
          welcome! <span>{username}</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
            <label>Username </label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label>Password</label>
          </div>
          <br />
          {/* <input type="submit" value="Submit" /> */}
          <Button
            fullWidth="true"
            type="submit"
            color="secondary"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
