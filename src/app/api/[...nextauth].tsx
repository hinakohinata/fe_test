// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth,{NextAuthOptions} from "next-auth"
// import axios from "axios";
// import dotenv from 'dotenv';

// // // dotenv.load();
// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export const authOptions: NextAuthOptions= {
//   // Configure one or more authentication providers
//   providers: [
//     // ...add more providers here
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         const {username,password}=credentials as any;
//         const response = await axios.post<any>(API_URL+'user/login', { username, password });
//         if (response.data.error) {
//           // Login thất bại
//           return response.data
//         } else {
//           return null;}
//         // Add logic here to look up the user from the credentials supplied
//         // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
//         // if (user) {
//         //   // Any object returned will be saved in `user` property of the JWT
//         //   return user
//         // } else {
//         //   // If you return null then an error will be displayed advising the user to check their details.
//         //   return null
  
//         //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         // }
//         }
//     })
//   ],
// }

// export default NextAuth(authOptions)