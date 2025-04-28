import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3D-card";
import { Card as ShadcnCard, CardHeader, CardTitle } from "../../ui/card";

import TabClientSide from "./TabClientSide";
import CheckBoxClient from "./CheckBoxClient";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trash2 } from "lucide-react";

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
  onDelete?: (id: string) => void;
}

//Component Starts
const MyCard: React.FC<CardWithTabsProps> = ({ card, onDelete }) => {
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
        className="rounded-xl border border-black/[0.1] shadow-lg overflow-hidden h-[430px] flex flex-col dark:bg-black dark:border-white/[0.2] hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        {/* Empty space for the overlapping image */}
        <div className="h-8 "></div>

        {/* Card Header with Title */}
        <CardHeader className="py-1 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center px-4">
          <div className="text-center">
            <CardTitle className="text-lg font-semibold text-blue-700 -mt-2 dark:text-blue-300 truncate">
              {card.card_name}
            </CardTitle>
          </div>
        </CardHeader>

        <TabClientSide key={card.credit_card_id} card={card} />

        {/* Action Button and Compare Checkbox */}
        <div className="px-3 pt-2 pb-3 -mb-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between gap-2">
          {/* Delete Button */}
          <DeleteButton card={card} onDelete={onDelete} />

          {/* Explore Card Button */}
          <ExploreCardButton card={card} />
        </div>
      </ShadcnCard>
    </div>
  );
};

export default MyCard;

const DeleteButton = ({
  card,
  onDelete,
}: {
  card: CreditCard;
  onDelete?: (id: string) => void;
}) => {
  const handleDelete = () => {
    if (onDelete && card.id) {
      onDelete(card.id);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDelete}
      className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-1"
      aria-label="Delete card"
    >
      <Trash2 className="w-4 h-4" />
      <span className="hidden sm:inline">Delete</span>
    </Button>
  );
};

const ExploreCardButton = ({ card }: { card: CreditCard }) => {
  return (
    <>
      {" "}
      <Link href={`/card/${card.id}` || ""}>
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
        >
          Explore Card
          <span className="inline-block transition-transform duration-200 ease-in-out ml-1">
            →
          </span>
        </Button>
      </Link>
    </>
  );
};
