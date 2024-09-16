import { FC } from "react";

import LoginForm from "./LoginForm";

const Login: FC = () => {
  // useEffect(() => {
  //   if (!loading && user) {
  //     router.push("/"); // Redirect after determining authentication state
  //   }
  // }, [loading, user, router]);

  // if (loading) {
  //   return <div>Loading...</div>; // Display loading indicator while checking authentication
  // }

  return <LoginForm />;
};
export default Login;
