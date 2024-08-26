import { NextResponse } from "next/server";
import searchLocation from "@/services/searchLocation";

export async function GET(request) {
  const url = new URL(request.url);
  const city = url.searchParams.get("q");
  try {
    const response = await searchLocation(city);
    return NextResponse.json(response);
  } catch (error) {
    NextResponse.json({ error }, { status: error.status || 500 });
  }
}
