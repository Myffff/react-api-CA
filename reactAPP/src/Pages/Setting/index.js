import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authcontext";
import Login from "../../components/Setting/login";
import Form from "../../components/Setting/form";

const Setting = () => {
  const context = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(
    context.isAuthenticated
  );

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Form />}
    </>
  );
};

export default Setting;
