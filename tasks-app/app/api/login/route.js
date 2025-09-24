import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev_secret";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 401 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return NextResponse.json({ error: "Invalid password" }, { status: 401 });

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" });

  const res = NextResponse.json({ ok: true });
  res.cookies.set("token", token, { httpOnly: true, path: "/" });
  return res;
}