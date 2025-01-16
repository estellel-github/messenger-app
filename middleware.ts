import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/"
  }
});

export const config = {
  matcher: [
    "/users/:path*" // protect any routes within users
  ]
}