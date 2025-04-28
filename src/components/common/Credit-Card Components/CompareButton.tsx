"use client";

import React from "react";
import { useComparisonStore } from "../../../hooks/comparisonStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const CompareButton = () => {
  const { selectedCards } = useComparisonStore();
  const router = useRouter();

  const handleCompareClick = () => {
    if (selectedCards.length > 0) {
      const idsQuery = selectedCards.map((card) => card.id).join(",");
      router.push(`/compare-cards/?compare=${idsQuery}`);
    }
  };

  return (
    <>
      {selectedCards.length > 0 && (
        <div className="fixed bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[80%] sm:w-[75%] md:w-[60%] max-w-3xl bg-white shadow-lg rounded-xl p-2 sm:p-3 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-3">
          
          {/* Card Thumbnails */}
          <div className="flex space-x-2 sm:space-x-3 ml-3 overflow-x-auto w-full sm:w-auto">
            {selectedCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-20 sm:w-28 md:w-32 h-14 sm:h-18 md:h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
              >
                <img
                  src={card.imageUrl}
                  alt="Card Thumbnail"
                  className="object-contain w-full h-full"
                />
              </div>
            ))}

            {/* Add Placeholder for adding another card (optional) */}
            {selectedCards.length < 4 && (
              <div className="flex-shrink-0 w-20 sm:w-28 md:w-32 h-14 sm:h-18 md:h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-lg sm:text-xl">
                +
              </div>
            )}
          </div>

          {/* Compare Button */}
          <Button
            onClick={handleCompareClick}
            className="bg-blue-600 mr-3  hover:bg-blue-700 text-white w-full sm:w-[18%] md:w-[14%] font-bold py-2 sm:py-2.5 px-4 sm:px-5 rounded-full shadow transition-colors duration-200 text-xs sm:text-sm whitespace-nowrap"
          >
            Compare {selectedCards.length}/4
          </Button>
        </div>
      )}
    </>
  );
};

export default CompareButton;
