import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOGGED_IN } from "../utils/constant";

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(rest)
    console.log("what is rest?")
  return (
    <Route
      {...rest}
      render={(props) =>
        // console.log(props)
        //   fakeAuth.isAuthenticated === true ? (
        rest.loggedInStatus === LOGGED_IN ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
