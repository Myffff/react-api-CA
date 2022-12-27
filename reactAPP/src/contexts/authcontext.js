import React, { useState, createContext } from "react";
import { login, signup, updateInfo } from "../api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token);
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password, email) => {
    const result = await signup(username, password, email);
    console.log(result.code);
    return result.code === 201 ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  };

  const updateUserInfo = async (userId, username, email, password) => {
    const result = await updateInfo(userId, username, email, password);
    if (result.code === 200) {
      alert("Update successfully");
      console.log("Update successfully");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        updateUserInfo,
        setUserName,
        setIsAuthenticated,
        setUser,
        user,
        userName
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
