import { NextResponse as Response } from "next/server";
import { Site } from "@/src/models";

export async function GET() {
  return Response.json(Site.all());
}
