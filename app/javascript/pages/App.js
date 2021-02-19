// For routing
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import BookingDashboardPage from "./BookingDashboardPage";
import RoomDetailPage from "./RoomDetailPage";

import { LOGGED_IN, NOT_LOGGED_IN } from "../utils/constant";

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState(NOT_LOGGED_IN);
  const [user, setUser] = useState({});

  const handleLogin = (userData) => {
    setLoggedInStatus(LOGGED_IN);
    setUser(userData.user);
  };

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
          />
        )}
      />
      <Route
        exact
        path="/dashboard"
        render={(props) => (
          <BookingDashboardPage {...props} loggedInStatus={loggedInStatus} />
        )}
      />
      <Route exact path="/dashboard/room/:slug" component={RoomDetailPage} />
    </Switch>
  );
};

export default App;
