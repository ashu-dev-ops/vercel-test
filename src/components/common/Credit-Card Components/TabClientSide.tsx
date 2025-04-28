// "use client";
import React from "react";
import { Plane,  Wallet, Gift } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card as CardType } from "@prisma/client";

// import { motion } from "framer-motion";

const TabClientSide = ({ card }: { card: CardType }) => {
  return (
    <Tabs defaultValue="lounges" className="-mt-5 z-20">
      {/* Tabs Navigation */}
      <TabsList className="flex w-full border-b gap-1  border-gray-200 dark:border-gray-700 bg-transparent h-auto p-2">
        <TabsTrigger
          value="lounges"
          className="flex-1 py-2 px-1 h-auto cursor-pointer text-xs  font-medium flex items-center justify-center transition-colors duration-200 ease-in-out data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 data-[state=active]:bg-blue-100 data-[state=active]:dark:border-blue-400 text-gray-500 dark:text-gray-400 data-[state=inactive]:border-transparent hover:bg-blue-50 dark:hover:bg-blue-50 hover:text-blue-600 dark:hover:text-blue-300"
        >
          <Plane className="text-base md:text-lg mr-1" />
          Lounges
        </TabsTrigger>
        <TabsTrigger
          value="benefits"
          className="flex-1 py-2 px-1 h-auto cursor-pointer text-xs rounded-md font-medium flex items-center justify-center transition-colors duration-200 ease-in-out data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 data-[state=active]:bg-blue-100 data-[state=active]:dark:border-blue-400 text-gray-500 dark:text-gray-400 data-[state=inactive]:border-transparent hover:bg-blue-50 dark:hover:bg-blue-50 hover:text-blue-600 dark:hover:text-blue-300"
        >
          <Gift className="text-base md:text-lg mr-1" />
          Benefits
        </TabsTrigger>
        <TabsTrigger
          value="fees"
          className="flex-1 py-2 px-1 h-auto cursor-pointer text-xs rounded-md font-medium flex items-center justify-center border-b-2 transition-colors duration-200 ease-in-out data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 data-[state=active]:bg-blue-100 data-[state=active]:dark:bg-blue-100 text-gray-500 dark:text-gray-400 data-[state=inactive]:border-transparent hover:bg-blue-50 dark:hover:bg-blue-50 hover:text-blue-600 dark:hover:text-blue-300"
        >
          <Wallet className="text-base md:text-lg mr-1" />
          Fees
        </TabsTrigger>
      </TabsList>

      {/* Tab Content */}
      <CardContent className="px-4 py-2 h-40  overflow-y-auto overflow-x-hidden">
        <TabsContent
          value="lounges"
          className=" space-y-3 text-sm text-gray-700 dark:text-gray-300 "
          asChild
        >
          <div
            // initial={{ opacity: 0, x: 20 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-start space-x-2">
              <Plane className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <div>
                <strong className="block text-xs font-bold text-gray-700 dark:text-gray-400 uppercase tracking-wider">
                  Lounge Access (
                  {card.numberOfLounges ? `${card.numberOfLounges}+ ` : ""}{" "}
                  lounges)
                </strong>
                <span>{card.lounge_benefits || "Not specified"}</span>
              </div>
            </div>
            {card.highlights &&
              card.highlights !== "Not mentioned for lounge access." && (
                <div className="flex  items-start space-x-2 overflow-hidden pt-3 border-t border-gray-100 dark:border-gray-700">
                  <Wallet className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  <div>
                    <strong className="block text-xs font-bold text-gray-700 dark:text-gray-400 uppercase tracking-wider">
                      Highlights
                    </strong>
                    <span>{card.highlights}</span>
                  </div>
                </div>
              )}
          </div>
        </TabsContent>

        <TabsContent
          value="benefits"
          className="mt-0 space-y-3 text-sm text-gray-700 dark:text-gray-300"
          asChild
        >
          <div
            // initial={{ opacity: 0, x: 20 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-start space-x-2">
              <Gift className="text-purple-600 w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                   Benefits
                </strong>
                <span className="block mt-1">{card.dining_benefits || "- No Dinning Benefit"}</span>
                <span className="block mt-1">{card.travel_benefits || "- No Travel Benefit"}</span>
                <span className="block mt-1" >{card.golf_benefits || "- No Golf Benefit"}</span>
                <span className="block mt-1" >{card.fuel_benefits || "- No Fuel Benefit"}</span>
              </div>
            </div>
          
          </div>
        </TabsContent>

        <TabsContent
          value="fees"
          className="mt-0 space-y-3 px-2 text-sm text-gray-700 dark:text-gray-300"
          asChild
        >
          <div
            // initial={{ opacity: 0, x: 20 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <strong className="text-xs font-bold text-gray-700 dark:text-gray-400 uppercase tracking-wider">
                  Joining Fee
                </strong>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {!card.joining_fees || card.joining_fees === "nil" ? "No Renewal Fees" : card.joining_fees}
                </span>
              </div>
              <div className="flex flex-col">
                <strong className="text-xs font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider">
                  Renewal Fee
                </strong>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {!card.renewal_fees || card.renewal_fees === "nil" ? "No Renewal Fees" : card.renewal_fees}
                </span>
              </div>
            </div>
          </div>
        </TabsContent>
      </CardContent>
    </Tabs>
  );
};

export default TabClientSide;
