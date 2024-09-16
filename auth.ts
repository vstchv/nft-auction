import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("auth fn");
        const res = await fetch("/api/users/login", {
          method: "POST",
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (res.ok && user) {
          console.log("User logged in", user);
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});
