import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import csv from "csv-parser";

import path from "path";
import prisma from "@/db/prisma";
export async function GET(req: NextRequest) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "v1",
    "insert-data",
    "ci.csv"
  );

  if (!fs.existsSync(filePath)) {
    console.log("CSV file not found", filePath);
    return NextResponse.json({ error: "CSV file not found" }, { status: 404 });
  }

  const results: any[] = [];
  const errorCards: any[] = [];
  return new Promise((resolve) => {
    const stream = fs.createReadStream(filePath).pipe(csv());

    stream.on("data", (row) => {
      results.push(row);
    });

    stream.on("end", async () => {
      try {
        let i = 0;
        for (const row of results) {
          i++;
          const loungeId = parseInt(row.loungeId);
          const creditCardId = parseInt(row.credit_card_id);

          const lounge = await prisma.airportLounge.findMany({
            where: {
              ci_lounge_id: String(loungeId),
            },
          });

          const card = await prisma.card.findFirst({
            where: {
              credit_card_id: String(creditCardId),
            },
          });

          if (lounge[0] && card) {
            console.log(i);
            await prisma.airportLounge.update({
              where: { id: lounge[0].id },
              data: {
                accessible_cards: {
                   push: card.id,
                },
              },
            });
          } else {
            console.warn(
              `Missing data: loungeId=${row.loungeId}, cardId=${row.credit_card_id}`
            );
            errorCards.push(row);
          }
        }

        resolve(
          NextResponse.json(
            { message: `Imported ${results.length} lounges.` },
            { status: 200 }
          )
        );
      } catch (error) {
        console.error("Import error:", error);
        resolve(
          NextResponse.json(
            { error: "Failed to import lounges" },
            { status: 500 }
          )
        );
      } finally {
        await prisma.$disconnect();
      }
    });
  });
}
// export async function GET(req: NextRequest) {
//   const filePath = path.join(
//     process.cwd(),
//     "src",
//     "app",
//     "api",
//     "v1",
//     "insert-data",
//     "air-port-sheet.csv"
//   );
//   if (!fs.existsSync(filePath)) {
//     console.log("CSV file not found", filePath);
//     return NextResponse.json({ error: "CSV file not found" }, { status: 404 });
//   }

//   const results: any[] = [];

//   return new Promise((resolve) => {
//     const stream = fs.createReadStream(filePath).pipe(csv());

//     stream.on("data", (row) => {
//       results.push(row);
//     });

//     stream.on("end", async () => {
//       try {
//         // Process the first 5 rows
//         for (const row of results) {
//           // Step 1: Find the lounge by airport_id and lounge_name_public
//           const lounge = await prisma.airportLounge.findFirst({
//             where: {
//               airport_id: row.airport_id,
//               lounge_name_public: row.LoungeNamePublic,
//             },
//           });

//           // Step 2: If found, update the ci_lounge_id
//           if (lounge) {
//             await prisma.airportLounge.update({
//               where: {
//                 id: lounge.id, // Use the unique id from the found record
//               },
//               data: {
//                 ci_lounge_id: row.id, // Update with row.id
//               },
//             });
//           } else {
//             console.warn(
//               `No lounge found for airport_id: ${row.airport_id}, lounge_name_public: ${row.LoungeNamePublic}`
//             );
//           }
//         }

//         resolve(
//           NextResponse.json(
//             { message: `Imported ${results.length} lounges.` },
//             { status: 200 }
//           )
//         );
//       } catch (error) {
//         console.error("Import error:", error);
//         resolve(
//           NextResponse.json(
//             { error: "Failed to import lounges" },
//             { status: 500 }
//           )
//         );
//       } finally {
//         await prisma.$disconnect();
//       }
//     });
//   });
// }
// card info update
// import { NextRequest, NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";
// import csv from "csv-parser";
// import prisma from "@/db/prisma";

// export async function GET(req: NextRequest) {
//   // Use absolute path to find the CSV file
//   const filePath = path.join(
//     process.cwd(),
//     "src",
//     "app",
//     "api",
//     "v1",
//     "insert-data",
//     "sheet.csv"
//   );

//   if (!fs.existsSync(filePath)) {
//     console.log("CSV file not found", filePath);
//     return NextResponse.json({ error: "CSV file not found" }, { status: 404 });
//   }

//   const results: any[] = [];

//   return new Promise((resolve) => {
//     const stream = fs.createReadStream(filePath).pipe(csv());

//     stream.on("data", (row) => {
//       results.push(row);
//     });

//     stream.on("end", async () => {
//       try {
//         let successCount = 0;
//         let errorCount = 0;

//         for (const row of results) {
//           try {
//             await prisma.Card.create({
//               data: {
//                 card_name: row.CreditCardName || "",
//                 card_issuer: row.card_issuer || "",
//                 credit_card_id: row.credit_card_id || null,
//                 highlights: row.Highlights || null,
//                 welcome_offers: row.WelcomeOffers || null,
//                 // apply_now: row.applyNow === "TRUE",
//                 // apply_now_sequence: row.ApplynowSequence
//                 //   ? parseInt(row.ApplynowSequence)
//                 //   : null,
//                 // card_sequence: row.cardsequence
//                 //   ? parseInt(row.cardsequence)
//                 //   : null,
//                 apply_link: row.Apply_Link || null,
//                 featured_text: row.featured_text || null,
//                 issuer_name: row.IssuerName || null,
//                 website_url: row.WebsiteURL_launch_apply || null,
//                 launch_apply: row.cc_applyNowWeb === "TRUE",
//                 cc_apply_now_web: row.cc_applyNowWeb === "TRUE",
//                 apply_link_web: row.Apply_Link_Web || null,
//                 for_apply_card_url: row.forapplycardurl || null,

//                 // Card appearance
//                 card_image_url: row.url || null,
//                 // starting_color: row.StartingColor || null,
//                 // ending_color: row.EndColor || null,
//                 // card_type: row.card_type || null,

//                 // Fees
//                 joining_fees: row.JoiningFees || null,
//                 renewal_fees: row.RenewalFees || null,

//                 // Benefits flags
//                 bsf_movies: row.bsf_movies === "TRUE",
//                 bsf_travel: row.bsf_travel === "TRUE",
//                 bsf_dining: row.bsf_dining === "TRUE",
//                 bsf_fuel: row.bsf_fuel === "TRUE",
//                 bsf_shopping: row.bsf_shoping === "TRUE",

//                 // Benefits details
//                 rewards_description: row.Rewards || null,
//                 movie_benefits: row.Movie || null,
//                 dining_benefits: row.Dining || null,
//                 travel_benefits: row.Travel || null,
//                 lounge_benefits: row.Lounge || null,
//                 golf_benefits: row.Golf || null,
//                 fuel_benefits: row.Fuel || null,
//                 reward_redemption: row.RewardRedemption || null,
//               },
//             });
//             successCount++;
//           } catch (rowError) {
//             console.error("Error importing row:", rowError, row);
//             errorCount++;
//           }
//         }

//         resolve(
//           NextResponse.json(
//             {
//               message: `Imported ${successCount} credit cards. Failed: ${errorCount}.`,
//             },
//             { status: 200 }
//           )
//         );
//       } catch (error) {
//         console.error("Import error:", error);
//         resolve(
//           NextResponse.json(
//             { error: "Failed to import credit cards" },
//             { status: 500 }
//           )
//         );
//       } finally {
//         await prisma.$disconnect();
//       }
//     });
//   });
// }

// src/app/api/v1/download-images/route.ts

// import { NextRequest, NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";
// import axios from "axios";
// import prisma from "@/db/prisma";

// // 🧹 Create downloads dir if not exist
// const downloadDir = path.join(process.cwd(), "downloads");
// if (!fs.existsSync(downloadDir)) {
//   fs.mkdirSync(downloadDir);
// }

// function slugify(text: string) {
//   return text
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w\-]+/g, "")
//     .replace(/\-\-+/g, "-")
//     .replace(/^-+|-+$/g, "");
// }

// async function downloadImage(url: string, filename: string): Promise<void> {
//   const filePath = path.join(downloadDir, filename);

//   try {
//     const response = await axios.get(url, { responseType: "stream" });
//     const writer = fs.createWriteStream(filePath);

//     await new Promise<void>((resolve, reject) => {
//       response.data.pipe(writer);
//       writer.on("finish", () => resolve());
//       writer.on("error", (err) => reject(err));
//     });
//   } catch (err) {
//     console.error(`❌ Failed to download ${url}`, err);
//     throw err;
//   }
// }
// launge image update
// export async function GET(req: NextRequest) {
//   try {
//     const lounges = await prisma.Card.findMany();

//     let updatedCount = 0;
//     let errorCount = 0;

//     for (const lounge of lounges) {
//       try {
//         const city = lounge.airport_city || "unknown";
//         const name = lounge.lounge_name || "lounge";
//         const baseSlug = `${slugify(name)}`;
//         let index = 1;

//         // Handle airport map image
//         let newAirportMapUrl = lounge.airport_image_map;
//         if (lounge.airport_image_map) {
//           const fileName = `${baseSlug}-lounge-access.png`;
//           await downloadImage(lounge.airport_image_map, fileName);
//           newAirportMapUrl = `https://assets.moneydost.com/airport-lounges/${fileName}`;
//         }

//         // Handle lounge images
//         // let newLoungeImages: string[] = [];
//         // if (Array.isArray(lounge.lounge_images)) {
//         //   for (const imageUrl of lounge.lounge_images) {
//         //     const fileName = `${baseSlug}-${index++}.png`;
//         //     await downloadImage(imageUrl, fileName);
//         //     newLoungeImages.push(`https://assets.moneydost.com/${fileName}`);
//         //   }
//         // }
//         let newLoungeImages: string[] = [];
//         if (Array.isArray(lounge.lounge_images)) {
//           const categories = [
//             "seating",
//             "dining",
//             "amenities",
//             "entertainment",
//           ];
//           let index = 0;
//           for (const imageUrl of lounge.lounge_images) {
//             if (typeof imageUrl !== "string" || !imageUrl) continue;
//             const category = categories[index] || `feature-${index + 1}`;
//             const fileName = `${baseSlug}-${category}.png`;
//             try {
//               await downloadImage(imageUrl, fileName);
//               newLoungeImages.push(
//                 `https://assets.moneydost.com/airport-lounges/${fileName}`
//               );
//             } catch (error) {
//               console.error(`Failed to download ${imageUrl}:`, error);
//             }
//             index++;
//           }
//         }
//         console.log(newAirportMapUrl, newLoungeImages);

//         // Update DB
//         await prisma.AirportLounge.update({
//           where: { id: lounge.id }, // Adjust based on your schema
//           data: {
//             airport_image_map: newAirportMapUrl,
//             lounge_images: newLoungeImages,
//           },
//         });

//         updatedCount++;
//       } catch (loungeErr) {
//         console.error("⛔ Error updating lounge:", loungeErr);
//         errorCount++;
//       }
//     }

//     return NextResponse.json(
//       {
//         message: `✅ Updated ${updatedCount} lounges. ❌ Failed: ${errorCount}`,
//       },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("🔥 Fatal error in image downloader:", err);
//     return NextResponse.json(
//       { error: "Failed to process lounge images." },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }
//card image download and update

// export async function GET(req: NextRequest) {
//   function slugify(text: string): string {
//     return text
//       .toLowerCase() // Convert to lowercase
//       .normalize("NFKD") // Handle accented characters
//       .replace(/[\u0300-\u036f]/g, "") // Remove accents
//       .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
//       .replace(/^-+|-+$/g, "") // Trim leading/trailing hyphens
//       .replace(/-+/g, "-"); // Collapse multiple hyphens
//   }
//   try {

//     const cards = await prisma.card.findMany({
//       where: {
//         card_image_url: {
//           not: null,
//         },
//       },
//     });

//     let successCount = 0;
//     let errorCount = 0;

//     for (const card of cards) {
//       // const slugName = slugify(card.card_name || "", {
//       //   lower: true,
//       //   strict: true,
//       // });
//       const slugName = slugify(card.card_name || "");

//       const filename = `${slugName}.webp`;
//       const newUrl = `https://assets.moneydost.com/cards/${filename}`;
//        console.log("newUrl", newUrl,successCount);
//       try {
//         await downloadImage(card.card_image_url, filename);

//         await prisma.card.update({
//           where: { credit_card_id: card.credit_card_id },
//           data: {
//             card_image_url: newUrl,
//           },
//         });

//         successCount++;
//       } catch (err) {
//         console.error(`Error processing card ${card.card_name}:`, err);
//         errorCount++;
//       }
//     }

//     return NextResponse.json({
//       message: `Downloaded and updated ${successCount} card images. Errors: ${errorCount}.`,
//     });
//   } catch (error) {
//     console.error("Migration error:", error);
//     return NextResponse.json({ error: "Migration failed" }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// card issue data inser

// const cards = [
//   {
//     name: "HDFC Bank",
//     card_issuer_id: "1",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/hdfc.png",
//   },
//   {
//     name: "SBI Card",
//     card_issuer_id: "4",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/sbi-card.png",
//   },
//   {
//     name: "IDFC First Bank",
//     card_issuer_id: "14",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/idfc.png",
//   },
//   {
//     name: "Bank of Baroda",
//     card_issuer_id: "12",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/BOB-Card-Logo.webp",
//   },
//   {
//     name: "Axis Bank",
//     card_issuer_id: "5",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/axis.png",
//   },
//   {
//     name: "AU Bank",
//     card_issuer_id: "19",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/au-bank.png",
//   },
//   {
//     name: "RBL Bank",
//     card_issuer_id: "10",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/contentberg/image/bank-icon/rbl.png",
//   },
//   {
//     name: "Kotak Mahindra Bank",
//     card_issuer_id: "13",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/Kotak-Bank.png",
//   },
//   {
//     name: "ICICI Bank",
//     card_issuer_id: "2",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/icici.png",
//   },
//   {
//     name: "IDBI Bank",
//     card_issuer_id: "15",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon-new/idbi.png",
//   },
//   {
//     name: "HSBC Bank",
//     card_issuer_id: "11",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/hsbc.png",
//   },
//   {
//     name: "Yes Bank",
//     card_issuer_id: "7",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/yes-bank.png",
//   },
//   {
//     name: "American Express",
//     card_issuer_id: "6",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/amex.png",
//   },
//   {
//     name: "Indusind Bank",
//     card_issuer_id: "3",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/indusInd.png",
//   },
//   {
//     name: "Standard Chartered",
//     card_issuer_id: "8",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/scb.png",
//   },
//   {
//     name: "Federal Bank",
//     card_issuer_id: "18",
//     image:
//       "https://cd9941cc.delivery.rocketcdn.me/wp-content/themes/astra-child/image/bank-icon/federal.png",
//   },
// ];

// function slugify(text: string): string {
//   return text
//     .toLowerCase()
//     .normalize("NFKD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "")
//     .replace(/-+/g, "-");
// }

// export async function GET(req: NextRequest) {
//   let successCount = 0;
//   let errorCount = 0;

//   try {
//     for (const card of cards) {
//       const slugName = slugify(card.name);
//       const filename = `${slugName}.webp`;
//       const newUrl = `https://assets.moneydost.com/card-issuer/${filename}`;

//       try {
//         await downloadImage(card.image, filename);

//         await prisma.CardIssuer.create({
//           data: {
//             name: card.name,
//             ci_id: card.card_issuer_id,
//             image: newUrl,
//             // slug: slugName,
//           },
//         });

//         successCount++;
//       } catch (err) {
//         console.error(`Error processing card ${card.name}:`, err);
//         errorCount++;
//       }
//     }

//     return NextResponse.json({
//       message: `Inserted ${successCount} card images. Errors: ${errorCount}.`,
//     });
//   } catch (error) {
//     console.error("Insertion error:", error);
//     return NextResponse.json({ error: "Insertion failed" }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
// export async function GET(req: NextRequest) {
//   let successCount = 0;
//   let errorCount = 0;

//   try {
//     for (const card of cards) {
//       const slugName = slugify(card.name);
//       const filename = `${slugName}.webp`;
//       const newUrl = `https://assets.moneydost.com/airport/${filename}`;

//       try {
//         await downloadImage(card.image, filename);

//         await prisma.CardIssuer.create({
//           data: {
//             name: card.name,
//             ci_id: card.card_issuer_id,
//             image: newUrl,
//             // slug: slugName,
//           },
//         });

//         successCount++;
//       } catch (err) {
//         console.error(`Error processing card ${card.name}:`, err);
//         errorCount++;
//       }
//     }

//     return NextResponse.json({
//       message: `Inserted ${successCount} card images. Errors: ${errorCount}.`,
//     });
//   } catch (error) {
//     console.error("Insertion error:", error);
//     return NextResponse.json({ error: "Insertion failed" }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
