import prisma from "@/db/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cardIssuerId = searchParams.get("cardIssuerId");
  try {
  if(cardIssuerId){
    const cardIssuer = await prisma.cardIssuer.findFirst({
      where: {
        ci_id: cardIssuerId
      }
    });
    return NextResponse.json(cardIssuer);
  }
    const cardIssuers = await prisma.cardIssuer.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return NextResponse.json(cardIssuers);
  } catch (error) {
    console.error("[CARD_ISSUER_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
