import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  MapPin,
  Coffee,
  CreditCard,
  ChevronRight,
  Star,
  Info,
  Utensils,
  Check,
} from "lucide-react";
import Link from "next/link";

interface LoungeCardProps {
  lounge_img: string;
  lounge_name: string;
  directions: string;
  openingHour: string;
  food: boolean;
  drink: boolean;
  total_card_allowed: number;
  accessible_card_count: number;
  rating?: number;
  canAccess?: boolean;
  lounge_id: string;
  terminals_name: string;
  id: string;
  airport_id: string;
}

export default function PremiumLoungeCard({
  lounge_img = "/api/placeholder/400/320",
  lounge_name = "DEL Executive Lounge",
  directions = "Situated at the Domestic Departures, Ground Level,  right after the Security Hold Area.",
  openingHour = "24/7",
  food = true,
  drink = true,
  total_card_allowed = 12,
  accessible_card_count = 0,
  terminals_name = "Terminal 3",
  rating = 4.5,
  id = "1",
  airport_id = "1",
  canAccess = true,
}: LoungeCardProps) {
  return (
    <Link href={`${airport_id}/${id}/`}>
      <Card className="overflow-hidden cursor-pointer py-0 border-0 shadow-lg rounded-xl max-w-3xl transition-all duration-300 hover:shadow-xl bg-white max-h-70 group">
        <div className="flex flex-row h-64 sm:h-80 rounded-xl overflow-hidden">
          {/* Image Column - Full height */}
          <div className="w-2/5 relative overflow-hidden">
            <div
              className={`w-full h-full bg-center bg-cover transition-transform duration-700  group-hover:scale-110`}
              style={{ backgroundImage: `url(${lounge_img})` }}
            ></div>

            {/* Airport Code Badge - Now Larger and More Prominent */}
            {/* <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold shadow-lg">
            {airportCode}
          </div> */}

            {/* Overlay Badge */}
            <div className="absolute top-4 left-4 z-10">
              <Badge
                variant="secondary"
                className="bg-white text-blue-800 shadow-md px-3 py-1 text-xs font-semibold"
              >
                {total_card_allowed} Cards Access
              </Badge>
            </div>

            {/* Rating */}
            <div className="absolute bottom-2 left-4 flex items-center bg-white/80 rounded-full px-2 py-1 shadow-md">
              <Star
                className="w-4 h-4 text-amber-500 mr-1"
                fill="currentColor"
              />
              <span className="text-xs font-bold">{rating}</span>
            </div>
          </div>

          {/* Information Column */}
          <div className="w-3/5 px-6 py-4 flex flex-col">
            {/* Location Section - Now Featured More Prominently */}
            <div className="mb-1">
              <div className="text-sm font-medium text-blue-600 mb-1">
                {terminals_name?.replace(/Terminal(\d+)/g, "Terminal $1")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {lounge_name}
              </h3>
              <div className="flex items-start align-middle text-gray-700 mb-0">
                <MapPin className="w-4 h-4 mr-2 text-gray-500 mt-1.5 flex-shrink-0" />
                <p className="xl:text-sm 2xl:text-base lg:text-xs md:text-xs leading-relaxed">
                  {directions.length > 130
                    ? `${directions.slice(0, 130)}...`
                    : directions}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600 flex-grow">
              <div
                className="flex items-start opacity-100 animate-fadeIn"
                style={{ animationDuration: "0.5s" }}
              >
                <Clock className="w-4 h-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                <span>{openingHour}</span>
              </div>

              <div className="flex flex-row gap-2">
                <Badge
                  variant="outline"
                  className={`flex items-center gap-1 ${
                    food
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-gray-50 text-gray-500 border-gray-200"
                  }`}
                >
                  <Utensils className="w-6 h-6" />
                  <span className="text-xs font-medium">Food</span>
                </Badge>

                <Badge
                  variant="outline"
                  className={`flex items-center gap-1 ${
                    drink
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : "bg-gray-50 text-gray-500 border-gray-200"
                  }`}
                >
                  <Coffee className="w-6 h-6" />
                  <span className="text-xs font-medium">Drinks</span>
                </Badge>
              </div>
            </div>
            <div
              className={`my-1 pt-2 flex items-center border-t mt-auto border-gray-100 ${
                accessible_card_count > 0 ? "justify-between" : "justify-end"
              }`}
            >
              {accessible_card_count > 0 && (
                <Button className="bg-green-600 hover:bg-green-700 text-white shadow-sm flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>You Have Access</span>
                </Button>
              )}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm ml-3">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
