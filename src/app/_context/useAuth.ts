// _context/useAuth.ts
import { useContext } from "react";
import AuthContext from "@/app/_context/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
