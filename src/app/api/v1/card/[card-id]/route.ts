import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/prisma";
import { AirportLounge, Card } from "@prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { "card-id": string } }
) {
  try {
    const cardId = params["card-id"];

    // Get query parameters from the URL
    const searchParams = request.nextUrl.searchParams;
    const includeIssuer = searchParams.get("include-issuer") === "true";
    const includeLounges = searchParams.get("include-lounges") === "true";

    // Fetch the card by ID from the database
    const card = await prisma.card.findUnique({
      where: {
        id: cardId,
      },
      // Note: If you have a relation to CardIssuer, uncomment and modify this
      // include: includeIssuer ? {
      //   issuer: true
      // } : undefined,
    });

    // If card not found, return 404
    if (!card) {
      return NextResponse.json(
        {
          success: false,
          error: "Card not found",
        },
        { status: 404 }
      );
    }

    // If includeLounges is true, fetch related lounges
    let lounges: AirportLounge[] = [];
    if (includeLounges) {
      // This assumes you have a way to relate cards to lounges
      // You might need to adjust this based on your data model
      lounges = await prisma.airportLounge.findMany({
        where: {
          // Add appropriate filter based on your data model
          // For example, if cards have lounge access based on card type:
          // card_type: card.card_type
        },
        take: 10, // Limit to 10 lounges
      });
    }

    // Return the card as JSON with optional included data
    return NextResponse.json({
      success: true,
      data: {
        ...card,
        lounges: includeLounges ? lounges : undefined,
      },
    });
  } catch (error) {
    console.error("Error fetching card:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch card",
      },
      { status: 500 }
    );
  }
}
