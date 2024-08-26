import { NextResponse } from "next/server";
import locationCity from "@/services/locationCity";

export async function GET(request) {
  const url = request.nextUrl;
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");
  try {
    const data = await locationCity(lat, lon);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
