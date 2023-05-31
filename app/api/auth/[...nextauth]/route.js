import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session }) {
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }

      return token;
    }
  },
  pages: {
    signIn: "/signin",
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
