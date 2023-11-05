import { Button, FormControl, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const Login: FC = () => {
  return (
    <div className="flex justify-center items-center p-20">
      <div className=" bg-background-paper rounded-lg p-20 space-y-4">
        <div className="flex justify-center">
          <Typography variant="h4" component="h1">
            Login
          </Typography>
        </div>

        <FormControl className="gap-3" required>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            color="primary"
            required
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            color="primary"
            required
          />
          <Link className="underline" href="/register">
            Don&apos;t have an account? Register
          </Link>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
