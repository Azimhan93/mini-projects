import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const books = await prisma.book.findMany({
    include: { author: true },
  });
  return NextResponse.json(books);
}

export async function POST(req) {
  const { title, content, authorId } = await req.json();
  const book = await prisma.book.create({
    data: { title, content, authorId: Number(authorId) },
  });
  return NextResponse.json(book, { status: 201 });
}