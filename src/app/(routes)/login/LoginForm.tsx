import { getSession, login, logout } from "lib";
import { FC } from "react";

const LoginForm: FC = async () => {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          await login(
            formData.get("username") as string,
            formData.get("password") as string
          );
        }}
      >
        <input name="username" className="text-black" placeholder="username" />
        <br />
        <input
          name="password"
          className="text-black"
          type="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
};

export default LoginForm;
