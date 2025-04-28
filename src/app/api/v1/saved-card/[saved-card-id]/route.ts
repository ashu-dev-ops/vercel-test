import prisma from "@/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function DELETE(
  req: Request,
  { params }: { params: { "saved-card-id": string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Check if params is a Promise, then resolve it
    const paramsResolved = params instanceof Promise ? await params : params;

    // Now you can safely destructure
    const { ["saved-card-id"]: savedCardId } = paramsResolved;

    if (!savedCardId) {
      return new NextResponse("Card ID is required", { status: 400 });
    }

    await prisma.savedCards.deleteMany({
      where: {
        user_id: userId,
        card_id: savedCardId,
      },
    });

    return new NextResponse("Card deleted successfully", { status: 200 });
  } catch (error) {
    console.error("[SAVED_CARD_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
