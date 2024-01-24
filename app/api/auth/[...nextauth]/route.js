import { connectMongoDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs/dist/bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      Credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        await connectMongoDB();
        const user = await User.findOne({ email });

        if (user) {
          const hashedPassword = user.password;
          const passwordMatched = await bcrypt.compare(
            hashedPassword,
            password
          );

          if (!passwordMatched) {
            throw new Error("⚠ Incorrect password");
          }

          return user;
        } else {
          throw new Error("⚠ Email not registered");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
