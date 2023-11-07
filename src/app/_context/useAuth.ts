import AuthContext, { AuthContextState } from "./AuthContext";

import { useContext } from "react";

const useAuth = (): AuthContextState => useContext(AuthContext);

export default useAuth;
