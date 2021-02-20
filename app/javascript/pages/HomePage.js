import React from "react";
import { useHistory } from "react-router-dom";
import RegisterContainer from "../containers/RegisterContainer";

import HomePageImage from "../assets/images/homepage.jpg";
import LoginContainer from "../containers/LoginContainer";
import { Button } from "@material-ui/core";
import axios from "axios";
import { apiURL } from "../utils/constant";

const HomePage = (props) => {
  const { loggedInStatus, handleLogin, handleLogout } = props;
  const history = useHistory();

  const handleSuccesssfulAuth = (userData) => {
    handleLogin(userData);
    history.push("/dashboard");
  };

  const handleLogoutClick = () => {
    axios
      .delete(`${apiURL}/logout`, { withCredentials: true })
      .then(() => handleLogout())
      .catch((error) => console.log("logout error", error));
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
      {loggedInStatus}
      <Button onClick={() => handleLogoutClick()}>Logout</Button>
      <LoginContainer handleSuccesssfulAuth={handleSuccesssfulAuth} />
      <RegisterContainer handleSuccesssfulAuth={handleSuccesssfulAuth} />
    </div>
  );
};

export default HomePage;
