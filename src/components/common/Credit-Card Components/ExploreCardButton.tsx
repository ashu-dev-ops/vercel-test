"use client";
import React from "react";
import { Button } from "../../ui/button";
import { Card as CardType } from "@prisma/client";

const ExploreCardButton = ({ card }: { card: CardType }) => {
  return (
    <>
      {" "}
      <Button
        className="w-full font-semibold py-2 px-4 rounded-md shadow-sm cursor-pointer z-20 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out hover:scale-[1.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-blue-500, #3b82f6), var(--color-blue-600, #2563eb))",
          color: "white",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage =
            "linear-gradient(to right, var(--color-blue-600, #2563eb), var(--color-blue-700, #1d4ed8))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage =
            "linear-gradient(to right, var(--color-blue-500, #3b82f6), var(--color-blue-600, #2563eb))";
        }}
        onClick={() => alert(`Exploring ${card.card_name}...`)}
      >
        Explore Card
        <span className="inline-block transition-transform duration-200 ease-in-out ml-1">
          →
        </span>
      </Button>
    </>
  );
};

export default ExploreCardButton;
