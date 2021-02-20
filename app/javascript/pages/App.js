// For routing
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import HomePage from "./HomePage";
import BookingDashboardPage from "./BookingDashboardPage";
import RoomDetailPage from "./RoomDetailPage";

import { apiURL, LOGGED_IN, NOT_LOGGED_IN } from "../utils/constant";

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState(NOT_LOGGED_IN);
  const [user, setUser] = useState({});

  const handleLogin = (userData) => {
    setLoggedInStatus(LOGGED_IN);
    setUser(userData.user);
  };

  const checkLoginStatus = () => {
    axios
      .get(`${apiURL}/logged_in`, { withCredentials: true })
      .then((res) => {
          console.log(res)
        if (res.data.logged_in && loggedInStatus === NOT_LOGGED_IN) {
          setLoggedInStatus(LOGGED_IN);
          return setUser(res.data.user);
        }

        // Not authenticated but status is "LOGGED_IN", reset everything
        if (!res.data.logged_in && loggedInStatus === LOGGED_IN) {
          setLoggedInStatus(NOT_LOGGED_IN);
          return setUser({});
        }
      })
      .catch((error) => console.log("check login error", error));
  };

  const handleLogout = () => {
      console.log("LOGGING OUT!!")
    setLoggedInStatus(NOT_LOGGED_IN)
    setUser({})
  }

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <HomePage
            {...props}
            loggedInStatus={loggedInStatus}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
          />
        )}
      />
      <Route
        exact
        path="/dashboard"
        render={(props) => (
          <BookingDashboardPage {...props} loggedInStatus={loggedInStatus} user={user}/>
        )}
      />
      <Route exact path="/dashboard/room/:slug" component={RoomDetailPage} />
    </Switch>
  );
};

export default App;
