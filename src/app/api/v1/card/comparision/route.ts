import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
 // adjust path if needed

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { user_id, card_ids } = body;

    if (!Array.isArray(card_ids) || card_ids.length === 0) {
      return NextResponse.json(
        { success: false, error: "At least one card ID is required." },
        { status: 400 }
      );
    }
    let comparison;

    if (user_id) {
      // If user_id exists, check for existing comparison
      comparison = await prisma.cardComparison.findUnique({
        where: { user_id },
      });

      if (comparison) {
        // Update existing comparison
        comparison = await prisma.cardComparison.update({
          where: { user_id },
          data: { card_ids },
        });
      } else {
        // Create new comparison with user_id
        comparison = await prisma.cardComparison.create({
          data: { user_id, card_ids },
        });
      }
    } else {
      // Create new comparison without user_id
      comparison = await prisma.cardComparison.create({
        data: { card_ids },
      });
    }

    return NextResponse.json({
      success: true,
      data: comparison,
    });
  } catch (error) {
    console.error("Error creating/updating card comparison:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
