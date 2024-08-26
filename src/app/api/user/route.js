import { NextResponse } from "next/server";
import userProfile from "@/services/userProfile";

export async function GET(request) {
  const url = new URL(request.url);
  const body = url.searchParams.get("settings");
  try {
    const response = await userProfile(body);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
