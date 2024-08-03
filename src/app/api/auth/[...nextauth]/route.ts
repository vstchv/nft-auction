import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = NextAuth({
    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch("/api/users/login", { // Adjust this URL
                    method: 'POST',
                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password,
                    }),
                    headers: { "Content-Type": "application/json" }
                });
                const user = await res.json();

                if (res.ok && user) {
                    console.log("User logged in", user)
                    // Here you would handle and save the JWT as needed
                    return user;
                }
                return null;
            }
        }),
    ],
    callbacks: {
        // Implement callbacks as needed, e.g., to save JWT to session
    },
    // Add other NextAuth configurations as needed
});
export default NextAuth(authOptions);
