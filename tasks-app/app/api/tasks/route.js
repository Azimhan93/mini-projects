import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev_secret";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, SECRET);
    const tasks = await prisma.task.findMany({
      where: { userId: decoded.id },
      orderBy: { id: "desc" },
    });
    return NextResponse.json(tasks);
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

export async function POST(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, SECRET);
    const { title, completed } = await req.json();

    if (!title?.trim()) {
      return NextResponse.json({ error: "Title required" }, { status: 400 });
    }

    const task = await prisma.task.create({
      data: { title, completed, userId: decoded.id },
    });

    return NextResponse.json(task, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

export async function PUT(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, SECRET);
    const { id, title, completed } = await req.json();

    const task = await prisma.task.findUnique({ where: { id } });
    if (!task || task.userId !== decoded.id) {
      return NextResponse.json({ error: "Not found or forbidden" }, { status: 404 });
    }

    const updated = await prisma.task.update({
      where: { id },
      data: { title, completed },
    });

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}


export async function DELETE(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, SECRET);
    const { id } = await req.json();

    const task = await prisma.task.findUnique({ where: { id } });
    if (!task || task.userId !== decoded.id) {
      return NextResponse.json({ error: "Not found or forbidden" }, { status: 404 });
    }

    await prisma.task.delete({ where: { id } });
    return NextResponse.json({ message: "Task deleted" });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}