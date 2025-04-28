"use client";
import React from "react";
import { useComparisonStore } from "../../../hooks/comparisonStore";
import { Card as CardType } from "@prisma/client";

const CheckBoxClient = ({ card }: { card: CardType }) => {
  // Check if the current card is selected for comparison

  const { selectedCards, addCardToCompare, removeCardFromCompare } =
    useComparisonStore();
  const isSelectedForCompare = selectedCards.some(
    (c) => c.id === card.credit_card_id
  );
  // Handle checkbox change
  const handleCompareChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      addCardToCompare({
        id: card.credit_card_id || "",
        imageUrl: card.card_image_url || "",
      });
    } else {
      removeCardFromCompare(card.credit_card_id || "");
    }
  };

  return (
    <>
      {/* Added mb-3 for spacing */}
      <input
        type="checkbox"
        id={`compare-${card.credit_card_id}`}
        checked={isSelectedForCompare}
        onChange={handleCompareChange}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-blue-600 dark:checked:border-transparent"
      />
      <label
        htmlFor={`compare-${card.credit_card_id}`}
        className="ml-1 text-xs font-medium text-gray-700 dark:text-gray-400 cursor-pointer"
      >
        {" "}
        {/* Added cursor-pointer */}
        Add to compare
      </label>
    </>
  );
};
export default CheckBoxClient;
