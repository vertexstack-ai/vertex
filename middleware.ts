import { NextResponse } from "next/server";
import maintenanceMode from "./config/maintenance";

export function middleware(req: any) {
  const { pathname } = req.nextUrl;

  // If maintenance mode is enabled, redirect all routes to /maintenance
  if (maintenanceMode.enabled && pathname !== "/maintenance") {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  // If maintenance mode is disabled and user visits /maintenance, redirect to home
  if (!maintenanceMode.enabled && pathname === "/maintenance") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Allow normal flow for other requests
  return NextResponse.next();
}
