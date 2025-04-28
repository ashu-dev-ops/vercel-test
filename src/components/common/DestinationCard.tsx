// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// interface DestinationCardProps {
//   name: string;
//   code: string;
//   location: string;
//   imageUrl: string;
// }

// export default function DestinationCard({
//   name,
//   code,
//   location,
//   imageUrl,
// }: DestinationCardProps) {
//   return (
//     <Card className="max-w-md overflow-hidden transition-all hover:shadow-lg">
//       <div className="flex items-start p-4 gap-4">
//         <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md relative group">
//           {/* Gradient overlay on hover */}
//           <div className="absolute inset-0 bg-gradient-to-t from-amber-500/40 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//           {/* Sunset effect for the image */}
//           <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent mix-blend-overlay"></div>

//           <img
//             src={
//               imageUrl ||
//               "https://cinsim.cardinsider.com/lounges/1691558600970595816915586009705958LoungeImages_des1.webp"
//             }
//             alt={name}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//           />
//         </div>

//         <div className="flex flex-col flex-grow">
//           <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>

//           <div className="flex items-center space-x-2 mt-1">
//             <Badge
//               variant="outline"
//               className="text-gray-500 bg-gray-100 hover:bg-gray-100"
//             >
//               {code}
//             </Badge>
//             <span className="text-gray-400">•</span>
//             <span className="text-gray-500">{location}</span>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Sofa } from "lucide-react";
import Link from "next/link";

interface DestinationCardProps {
  name: string;
  code: string;
  location: string;
  imageUrl: string;
  loungeCount: number;
  terminalCount: number;
}

export default function DestinationCard({
  name,
  code,
  location,
  imageUrl,
  loungeCount,
  terminalCount,
}: DestinationCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl group cursor-pointer py-0  ">
      <Link
        href={`/airports/${code}`}
        className="flex flex-col sm:flex-row sm:h-auto lg:h-40"
      >
        {/* Left side - Image */}
        <div
          className="sm:w-2/5 sm:h-full relative overflow-hidden group bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${imageUrl || "/api/placeholder/400/320"})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

          <div className="absolute top-3 left-3 z-20">
            <Badge className="bg-white/80 font-semibold text-gray-800 hover:bg-white backdrop-blur-sm ">
              {code}
            </Badge>
          </div>

          {/* Additional styling for hover effect on the background */}
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-cover bg-center"></div>
        </div>

        {/* Right side - Details */}
        <div className="sm:w-3/5 pt-4 pb-2 px-5 flex flex-col justify-between">
          <div className="flex items-center text-gray-900 font-semibold mb-4">
            <MapPin size={16} className="mr-1 text-gray-900" />
            <span className="text-md tracking-wide font-bold">{location}</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
              {name}
            </h3>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-amber-200 to-rose-200 mt-auto"></div>
          <div className="flex justify-between items-center mt-2 gap-1">
            <Badge
              variant="outline"
              className="bg-gray-50 text-gray-700 hover:bg-gray-100 flex items-center gap-1"
            >
              <Sofa size={14} className="mr-1" />
              {loungeCount || 20} Lounge
            </Badge>
            <Badge
              variant="outline"
              className="bg-gray-50 text-gray-700 hover:bg-gray-100 flex items-center gap-1"
            >
              <Building2 size={14} className="mr-1" />
              {terminalCount || 10} Terminal
            </Badge>
          </div>
        </div>
      </Link>
    </Card>
  );
}
