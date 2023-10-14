import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import { EmailProvider } from "next-auth/providers/email";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import connect from "@/helpers/dbConfig";
import User from "@/models/userMode";
import { NextResponse } from "next/server";
// End of imports

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          connect();
          const user = await User.findOne(email);
          if (!user)
            return NextResponse.json(
              {
                message: "User not found",
              },
              {
                status: 500,
              }
            );
        } catch (error) {}

        return user;
      },
    }),
    // EmailProvider({
    //   server: {
    //     port: process.env.SERVER_PORT,
    //     host: process.env.SERVER_HOST,
    //   },
    //   auth: {
    //     user: process.env.SERVER_USER,
    //     password: process.env.SERVER_PASSWORD,
    //   },
    //   from: process.env.SERVER_MYMAIL,
    // }),

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
