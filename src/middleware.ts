import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl.pathname;

  /**
   * If
   * clg the user is not logged in protect it from dashboard page
   */

  if (url.includes("/my-cards")) {
    const session = await auth();
    if (!session.userId) {
      return NextResponse.redirect(new URL("/", req.url));
      //   return new Response("Unauthorized", { status: 401 });
    }
  }
});

export const config = {
  matcher: [
    "/((?!api|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
