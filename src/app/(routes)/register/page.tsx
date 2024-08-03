"use client";

import { Button, FormControl, TextField, Typography } from "@mui/material";
import { useContext, useMemo, useState } from "react";

import AuthContext from "@/app/_context/AuthContext";
import { FC } from "react";
import Link from "next/link";
import { UserQueryClient } from "clients/clients";
import { toast } from "react-toastify";
import useAuth from "@/app/_context/useAuth";
import { useRouter } from "next/navigation";

const Login: FC = () => {
    const [username, setUsername] = useState<string>("");
    const[ email, setEmail] = useState<string>("");
    const[ firstName, setFirstName] = useState<string>("");
    const[ lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const router = useRouter();
    const { login } = useAuth();

   const  handleSubmitRegister = () => {

   }

    return (
        <div className="flex justify-center items-center p-20">
            <div className=" bg-background-paper rounded-lg p-20 space-y-4">
                <div className="flex justify-center">
                    <Typography variant="h4" component="h1">
                        Register
                    </Typography>
                </div>

                <FormControl className="gap-3" required>
                    <TextField
                        id="email"
                        label="email"
                        variant="outlined"
                        color="primary"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        color="primary"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        id="firstName"
                        label="firstName"
                        variant="outlined"
                        color="primary"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        id="lastName"
                        label="lastName"
                        variant="outlined"
                        color="primary"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        color="primary"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link className="underline" href="/login">
                        Already have an account? Login
                    </Link>
                    <Button
                        onClick={handleSubmitRegister}
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </Button>
                </FormControl>
            </div>
        </div>
    );
};

export default Login;
