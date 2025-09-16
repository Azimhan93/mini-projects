import { NextResponse } from "next/server";

const TODOS = [];

export async function GET() {
  return NextResponse.json(TODOS);
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body?.title) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
  const newTodo = { id: Date.now(), title: body.title, done: false };
  TODOS.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}
