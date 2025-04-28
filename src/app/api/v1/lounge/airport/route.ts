import prisma from "@/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    let { airport_id, user_card_ids } = body;
    const { userId } = await auth();
    if (userId) {
      const savedCards = await prisma.savedCards.findMany({
        where: {
          user_id: userId,
        },
      });
      user_card_ids = savedCards.map((card: any) => card.card_id);
    }
    if (!airport_id) {
      return NextResponse.json(
        { success: false, message: "Airport ID is required" },
        { status: 400 }
      );
    }

    // Fetch all lounges for the specific airport
    const lounges = await prisma.airportLounge.findMany({
      where: {
        airport_id: airport_id,
      },
      select: {
        id: true,
        lounge_name: true,
        lounge_name_public: true,
        lounge_timing: true,
        lounge_images: true,
        amenities_food: true,
        amenities_alcoholic_drinks: true,
        accessible_cards: true,
        directions: true,
        terminals_select: true,
        airport_id: true,
      },
    });

    // Process lounges to check card access and format response
    const processedLounges = lounges.map((lounge) => {
      // Check how many of the user's cards have access to this lounge
      const accessibleCardCount = user_card_ids
        ? user_card_ids.filter((card: string) =>
            lounge.accessible_cards?.includes(card.toString())
          ).length
        : 0;

      return {
        id: lounge.id,
        lounge_img:
          lounge.lounge_images && lounge.lounge_images.length > 0
            ? lounge.lounge_images[0]
            : null,
        lounge_name:
          lounge.lounge_name_public || lounge.lounge_name || "Unknown Lounge",
        opening_hours: lounge.lounge_timing || "Not specified",
        food: lounge.amenities_food,
        drink: lounge.amenities_alcoholic_drinks,
        accessible_card_count: accessibleCardCount,
        total_card_allowed: lounge.accessible_cards?.length || 0,
        directions: lounge.directions,
        terminals_name: lounge.terminals_select,
        airport_id: lounge.airport_id,
      };
    });

    return NextResponse.json({
      success: true,
      data: processedLounges,
    });
  } catch (err) {
    console.error("❌ Error fetching lounges:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
