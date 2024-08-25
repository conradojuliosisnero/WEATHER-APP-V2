import { NextResponse } from "next/server";
import getCurrentTime from "@/services/currrentTime";

export async function GET(request) {
  const url = new URL(request.url);
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");
  const part = url.searchParams.get("part");

  try {
    const response = await getCurrentTime(lat, lon, part);
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      return NextResponse.json(response);
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
