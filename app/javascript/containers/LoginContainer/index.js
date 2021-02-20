import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  Div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
  },
  paperRoot: {
    width: 300,
    height: 350,
    padding: "20px 30px",
  },
  textFieldRoot: {
    width: "100%",
  },
  buttonRoot: {
    width: "100%",
  },
});

const LoginContainer = (props) => {
  const classes = useStyles();
  const { handleSuccesssfulAuth } = props;
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const userData = {
      user: { ...state },
    };

    // tells API it's ok to set cookie in our client:
    const credentials = { withCredentials: true };

    axios
      .post("http://localhost:3000/api/v1/sessions", userData, credentials)
      .then((res) => {
        if (res.data.logged_in) handleSuccesssfulAuth(res.data);
      })
      .catch((error) => {
        console.log("login error", error);
        setLoginErrors(error);
      });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className={classes.Div}>
      <Paper elevation={3} className={classes.paperRoot}>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
            className={classes.textFieldRoot}
          />
          <br />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            required
            className={classes.textFieldRoot}
          />
          <br />
          <Button type="submit" className={classes.buttonRoot} variant="contained">
            Login
          </Button>
        </form>
        <Typography>Don't have an account yet?</Typography><Button>Create one!</Button>
      </Paper>
    </div>
  );
};

export default LoginContainer;
