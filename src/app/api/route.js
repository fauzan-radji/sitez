import { NextResponse as Response } from "next/server";

export async function GET() {
  return Response.json({
    routes: [
      { description: "Root", path: "/" },
      { description: "Get all sites", path: "/api/sites" },
    ],
  });
}
