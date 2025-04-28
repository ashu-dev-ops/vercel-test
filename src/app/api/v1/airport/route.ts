import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(_req: NextRequest) {
  try {
    const airports = await prisma.airport.findMany();

    const dataWithCounts = [];

    for (const airport of airports) {
      const loungeCount = await prisma.airportLounge.count({
        where: {
          airport_id: airport.airport_id,
        },
      });

      const uniqueTerminals = await prisma.airportLounge.findMany({
        where: {
          airport_id: airport.airport_id,
        },
        select: {
          terminals_select: true,
        },
        distinct: ["terminals_select"],
      });

      const totalUniqueTerminals = uniqueTerminals.length;

      dataWithCounts.push({
        ...airport,
        loungeCount,
        terminalCount: totalUniqueTerminals,
      });
    }

    return NextResponse.json({ success: true, data: dataWithCounts });
  } catch (err) {
    console.error("❌ Error fetching lounges:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
