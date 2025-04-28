import prisma from "@/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { "lounge-id": string } }
) {
  try {
    const { userId } = await auth();
    let includeAccessibleCards: boolean | any = false;
    let user_card_ids = [];
    if (userId) {
      includeAccessibleCards = true;
      const savedCards = await prisma.savedCards.findMany({
        where: {
          user_id: userId,
        },
      });
      user_card_ids = savedCards.map((card: any) => card.card_id);
    }
    const resolvedParams = await params;
    const loungeId = resolvedParams["lounge-id"];

    // Get query parameters from the URL
    const searchParams = req.nextUrl.searchParams;
    const includeAmenities = searchParams.get("include-amenities") === "true";

    // Fetch the lounge by ID from the database
    const lounge = await prisma.airportLounge.findUnique({
      where: {
        id: loungeId,
      },
    });

    // If lounge not found, return 404
    if (!lounge) {
      return NextResponse.json(
        {
          success: false,
          error: "Lounge not found",
        },
        { status: 404 }
      );
    }

    // Prepare amenities data if requested
    let amenities = undefined;
    if (includeAmenities) {
      amenities = {
        food: lounge.amenities_food,
        disabledAccess: lounge.amenities_disabled_access,
        tv: lounge.amenities_tv,
        internet: lounge.amenities_internet,
        noSmoking: lounge.amenities_no_smoking,
        smokingArea: lounge.amenities_smoking_area,
        alcoholicDrinks: lounge.amenities_alcoholic_drinks,
        newspapersMagazines: lounge.amenities_newspapers_magazines,
        wifi: lounge.amenities_wifi,
        airConditioning: lounge.amenities_air_conditioning,
        television: lounge.amenities_television,
        shower: lounge.amenities_shower,
        spa: lounge.amenities_spa,
        printer: lounge.amenities_printer,
      };
    }

    // Fetch accessible cards if requested
    let accessibleCards: any = user_card_ids.length;
    if (
      includeAccessibleCards &&
      lounge.accessible_cards &&
      lounge.accessible_cards.length > 0
    ) {
      // console.log("lounge.accessible_cards", lounge.accessible_cards);
      // console.log("user_card_ids", user_card_ids);
      // first check if user_card_ids will match any of the lounge.accessible_card_ids
      const accessibleCardIds = lounge.accessible_cards;
      const userCardIds = user_card_ids;
      const matchingCardIds = accessibleCardIds.filter((cardId: string) =>
        userCardIds.includes(cardId)
      );
      if (matchingCardIds.length > 0) {
        accessibleCards = await prisma.card.findMany({
          where: {
            id: {
              in: matchingCardIds,
            },
          },
          select: {
            id: true,
            card_name: true,
            card_issuer: true,
            card_image_url: true,
          },
        });
      }
    }

    // Return the lounge as JSON with optional included data
    return NextResponse.json({
      success: true,
      data: {
        ...lounge,
        amenities: includeAmenities ? amenities : undefined,
        user_cards: includeAccessibleCards ? accessibleCards : undefined,
      },
    });
  } catch (error) {
    console.error("Error fetching lounge:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch lounge",
      },
      { status: 500 }
    );
  }
}
