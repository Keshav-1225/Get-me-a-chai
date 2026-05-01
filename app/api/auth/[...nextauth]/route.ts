export const dynamic = "force-dynamic";
import NextAuth, { type NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Google from "next-auth/providers/google"


import mongoose from "mongoose"
import UserModel from "@/backend/models/Users"
import PaymentModel from "@/backend/models/Payment"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    // ...add more providers here
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    })
  ],callbacks:{
    async signIn({account,}){
      if (account?.provider)
      {
        console.log("Provider is : ",account.provider);
      }
      return true
    }
  }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }