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

const RegisterContainer = (props) => {
  const classes = useStyles();
  const { handleSuccesssfulAuth } = props;
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  
  const [registrationErrors, setRegistrationErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const userData = {
      user: { ...state },
    };

    // tells API it's ok to set cookie in our client:
    const credentials = { withCredentials: true };

    axios
      .post("http://localhost:3000/api/v1/registrations", userData, credentials)
      .then((res) => {
        if (res.data.status === "created") handleSuccesssfulAuth(res.data);
      })
      .catch((error) => {
        console.log("registration error", error);
        setRegistrationErrors(error);
      });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className={classes.Div}>
      <Paper elevation={3} className={classes.paperRoot}>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            name="first_name"
            placeholder="First Name"
            value={state.first_name}
            onChange={handleChange}
            required
            className={classes.textFieldRoot}
          />
          <TextField
            name="last_name"
            placeholder="Last Name"
            value={state.last_name}
            onChange={handleChange}
            required
            className={classes.textFieldRoot}
          />
          <br />
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
          <TextField
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={state.password_confirmation}
            onChange={handleChange}
            required
            className={classes.textFieldRoot}
          />
          <br />
          <Button type="submit" className={classes.buttonRoot} variant="contained">
            Register
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default RegisterContainer;
