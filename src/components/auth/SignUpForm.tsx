import { TextField, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [emailErrored, setEmailErrored] = React.useState(false);
  const [passwordErrored, setPasswordErrored] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    !email ? setEmailErrored(true) : setEmailErrored(false);
    !password ? setPasswordErrored(true) : setPasswordErrored(false);
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">Cryptostats</h1>
      <div className="flex flex-col gap-2">
        <TextField
          label="Email"
          className="w-80"
          type="email"
          required
          helperText={emailErrored && "Please enter a valid Email."}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={emailErrored}
        />
        <TextField
          label="Password"
          type="password"
          className="w-80"
          required
          helperText={passwordErrored && "Password may not be empty."}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={passwordErrored}
        />
        <Link to="/login" className="justify-self-start self-start mt-2">
          <Typography className="underline">Login</Typography>
        </Link>
      </div>
      <Button variant="contained" className="w-80" onClick={handleRegister}>
        <span className="p-1">Register</span>
      </Button>
    </div>
  );
};
