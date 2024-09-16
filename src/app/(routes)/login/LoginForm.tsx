import useAuth from "@/app/_context/useAuth";
import { Typography, FormControl, TextField, Button } from "@mui/material";
import { UserQueryClient } from "clients/clients";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState, useMemo } from "react";
import { toast } from "react-toastify";

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { login } = useAuth();

  const { useUserLogin } = useMemo(() => UserQueryClient, []);

  const { mutate: loginUser } = useUserLogin({
    onSuccess: (data) => {
      toast.success("Login successful", { autoClose: 2000 });
      login(data);
      router.push("/");
    },
    onError: (error) => {
      toast.error(
        error.response?.data.message
          ? error.response.data.message
          : error.message
      );
    },
  });

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
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            color="primary"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className="underline" href="/register">
            Don&apos;t have an account? Register
          </Link>
          <Button
            onClick={() => loginUser({ username, password })}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default LoginForm;
