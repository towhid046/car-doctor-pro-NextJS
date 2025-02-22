import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) return null;
        const hashPassword = bcrypt.compareSync(password, currentUser.password);
        if (!hashPassword) return null;
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { name, email, password } = user;
        try {
          const db = await connectDB();
          const userCollection = db.collection("users");
          const isUserExist = await userCollection.findOne({ email });
          if (!isUserExist) {
             await userCollection.insertOne(user);
            return user;
          }
          return user;
        } catch (error) {
          console.error(error.message);
        }
      }
      return user;
    },
  },
});
export { handler as GET, handler as POST };