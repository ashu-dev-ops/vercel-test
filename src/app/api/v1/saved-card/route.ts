import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { card_id } = await req.json();
    const savedCard = await prisma.savedCards.create({
      data: {
        user_id: userId,
        card_id,
      },
    });
    const card = await prisma.card.findUnique({
      where: {
        id: card_id,
      },
    });
    console.log("savedCard", savedCard, { ...savedCard, card });
    return NextResponse.json({ ...savedCard, card });
  } catch (error) {
    console.error("[SAVED_CARD_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const savedCards = await prisma.SavedCards.findMany({
      where: {
        user_id: userId,
      },
      include: {
        card: true,
      },
    });

    return NextResponse.json(savedCards);
  } catch (error) {
    console.error("[SAVED_CARD_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}


