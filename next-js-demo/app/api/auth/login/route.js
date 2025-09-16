import { NextResponse } from "next/server";

export async function POST(req) {
  const { username } = await req.json().catch(() => ({}));
  if (!username?.trim()) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true, username });

  res.cookies.set("user", "ok", { path: "/" });
  res.cookies.set("username", username, { path: "/" });
  return res;
}
