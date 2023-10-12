import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import { EmailProvider } from "next-auth/providers/email";
import Google from "next-auth/providers/google";

// End of imports

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
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
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
