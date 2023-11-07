import { createContext } from "react";

export interface AuthContextState {
  user: string | null; //TODO change to User type
  setUser: (user: string | null) => void;

  login: (user: string) => void;
}

const AuthContext = createContext<AuthContextState>({
  user: null,
  setUser: () => {},
  login: () => {},
});

export default AuthContext;
