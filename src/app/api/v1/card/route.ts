import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cardIssuerIdParam = searchParams.get("cardIssuerId");
  const name = searchParams.get("card_name");
  const card_image = searchParams.get("card_image");
  const count = searchParams.get("count");

  try {
    if (cardIssuerIdParam) {
      const selectFields: any = {};
      if (name) selectFields.name = true;
      if (card_image) selectFields.card_image = true;
      const filteredCards = await prisma.card.findMany({
        where: {
          cardIssuerId: cardIssuerIdParam,
        },
        select: Object.keys(selectFields).length > 0 ? selectFields : undefined,
        orderBy: {
          card_sequence: "asc",
        },
      });
      return NextResponse.json({
        success: true,
        data: filteredCards,
      });
    }
    // 👇 Otherwise, run your full cardIssuerId assignment/update logic
    console.log("get route hit");
    const allCards = await prisma.card.findMany({
      orderBy: {
        card_sequence: "asc",
      },
      take:  count ? Number(count) : undefined,
    });

    return NextResponse.json({
      success: true,
      data: allCards,
    });
  } catch (error) {
    console.error("Error fetching cards:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch cards",
      },
      { status: 500 }
    );
  }
}
