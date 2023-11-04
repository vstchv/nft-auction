import { FormControl, TextField, Typography } from "@mui/material";
import { FC } from "react";

const Login: FC<Login> = () => {
  return (
    <>
      <FormControl required>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          color="primary"
          required
        />
      </FormControl>
    </>
  );
};

export default Login;

interface Login {}
