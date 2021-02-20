import React from "react";
import { useHistory } from "react-router-dom";
import RegisterContainer from "../containers/RegisterContainer";

import HomePageImage from "../assets/images/homepage.jpg";
import LoginContainer from "../containers/LoginContainer";

const HomePage = (props) => {
  const { loggedInStatus, handleLogin } = props;
  const history = useHistory();

  const handleSuccesssfulAuth = (userData) => {
    handleLogin(userData);
    history.push("/dashboard");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${HomePageImage}) , linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* This is where the logins and registers happen Hello <br />
      Hello
      {loggedInStatus} */}
      {/* <br /> */}
      <LoginContainer handleSuccesssfulAuth={handleSuccesssfulAuth} />
      <RegisterContainer handleSuccesssfulAuth={handleSuccesssfulAuth} />
    </div>
  );
};

export default HomePage;
