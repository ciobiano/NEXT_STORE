import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		AppleProvider({
			clientId: process.env.APPLE_ID,
			clientSecret: process.env.APPLE_SECRET,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// ...add more providers here
	],
};

export default NextAuth(authOptions);
