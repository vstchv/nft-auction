import { createContext } from "react";

export interface AuthContextState {
  user: string | null; //TODO change to User type
  login: (user: string) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextState>({
  user: null,
  login: () => {},
  loading: false,
});

export default AuthContext;
