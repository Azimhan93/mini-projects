import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const authors = await prisma.author.findMany({
    include: { books: true },
  });
  return NextResponse.json(authors);
}

export async function POST(req) {
  const { name, surName } = await req.json();
  const author = await prisma.author.create({
    data: { name, surName },
  });
  return NextResponse.json(author, { status: 201 });
}

export async function PUT(req) {
    const { id, name, surName } = await req.json();
    const author = await prisma.author.update({
      where: { id },
      data: { name, surName },
    });
    return NextResponse.json(author);
}

export async function DELETE(req) {
    const { id } = await req.json();
    await prisma.author.delete({ where: { id } });
    return NextResponse.json({ ok: true });
}