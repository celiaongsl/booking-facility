import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";

const RegisterPage = () => {
  const [state, setState] = useState({
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

    axios.post(
      "http://localhost:3000/api/v1/registrations",
      userData,
      credentials
    ).then(res => {
        console.log(res)
        console.log("registration response");
    }).catch(error => {
        console.log("registration error", error);
    })
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <TextField
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={state.password_confirmation}
          onChange={handleChange}
          required
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
