import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3D-card";
import { Card as ShadcnCard, CardHeader, CardTitle } from "../../ui/card";

import TabClientSide from "./TabClientSide";
import CheckBoxClient from "./CheckBoxClient";
import ExploreCardButton from "./ExploreCardButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

// --- Type Definitions of the cards data ---
export type CreditCard = {
  id: string; // Matches { $oid: string } in data
  credit_card_id: string | null;
  card_name: string;
  card_issuer: string;
  highlights: string | null;
  welcome_offers?: string | null;
  apply_now: boolean;
  apply_link?: string | null;
  featured_text?: string | null;
  issuer_name: string | null;
  website_url?: string | null;
  launch_apply: boolean | null;
  cc_apply_now_web: boolean | null;
  apply_link_web?: string | null;
  for_apply_card_url?: string | null;
  card_image_url: string | null;
  joining_fees: string | null;
  renewal_fees: string | null;
  bsf_movies: boolean | null;
  bsf_travel: boolean | null;
  bsf_dining: boolean | null;
  bsf_fuel: boolean | null;
  bsf_shopping: boolean | null;
  rewards_description: string | null;
  movie_benefits?: string | null;
  dining_benefits?: string | null;
  travel_benefits?: string | null;
  lounge_benefits?: string | null;
  golf_benefits?: string | null;
  fuel_benefits?: string | null;
  reward_redemption?: string | null;
  created_at: Date; // Matches { $date: string } in data
  updated_at: Date;
  cardIssuerId: string | null; // Matches { $oid: string } in data
};

//type of the card this component taking
interface CardWithTabsProps {
  card: CreditCard;
  removeCompareButton?: boolean;
}

//Component Starts
const SingleCard: React.FC<CardWithTabsProps> = ({
  card,
  removeCompareButton,
}) => {
  return (
    <div className="relative w-full sm:w-[90%] md:w-[95%] mx-auto pt-16">
      {/* Floating Image with 3D effect*/}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-60 h-32">
        <CardContainer className="inter-var w-full   h-full">
          <CardBody className="w-full border-none  shadow-none p-0  h-full flex items-center justify-center">
            <CardItem
              translateZ={70}
              className="flex items-center justify-center h-full w-full"
            >
              <img
                src={card.card_image_url || ""}
                alt={`${card.card_name}`}
                className="h-full w-full object-contain"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <ShadcnCard
        key={card.credit_card_id || card.card_name}
        className="rounded-xl border border-black/[0.1] shadow-lg overflow-hidden flex flex-col dark:bg-black dark:border-white/[0.2] hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        {/* Empty space for the overlapping image */}
        <div className="h-12 shrink-0"></div>

        {/* Card Header with Title */}
        <CardHeader className="py-4 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center px-4">
          <div className="text-center flex overflow-hidden px-3">
            <div className="grow-1 overflow-hidden">
              <CardTitle className="truncate overflow-ellipsis w-full text-lg font-semibold text-blue-700 dark:text-blue-300">
                {card.card_name}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <TabClientSide key={card.credit_card_id} card={card} />

        {/* Action Button and Compare Checkbox */}
        <div className="px-3 pt-2 pb-3 -mb-6  border-t border-gray-100 dark:border-gray-700 flex flex-col items-end">
          {/* Compare Checkbox */}
          {!removeCompareButton && (
            <div className="flex items-center mx-auto mb-3">
              <CheckBoxClient key={card.credit_card_id} card={card} />
            </div>
          )}
          <ExploreCardButton key={card.credit_card_id} card={card} />
        </div>
      </ShadcnCard>
    </div>
  );
};

export default SingleCard;
