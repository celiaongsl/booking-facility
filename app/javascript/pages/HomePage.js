import React from "react";
import { useHistory } from "react-router-dom";
import RegisterContainer from "../containers/RegisterContainer";

const HomePage = (props) => {
  const { loggedInStatus, handleLogin } = props;
  const history = useHistory();

  const handleSuccesssfulAuth = (userData) => {
    handleLogin(userData)
    history.push("/dashboard");
  };

  return (
    <div>
      {/* This is where the logins and registers happen Hello <br />
      Hello
      {loggedInStatus} */}
      {/* <br /> */}
      <RegisterContainer handleSuccesssfulAuth={handleSuccesssfulAuth} />
    </div>
  );
};

export default HomePage;
