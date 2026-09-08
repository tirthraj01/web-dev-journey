import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Verify credentials against your database
        if (credentials?.email && credentials?.password) {
          return { id: "1", name: "User", email: credentials.email }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page route
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub
      return session
    }
  }
}

export default NextAuth(authOptions)
