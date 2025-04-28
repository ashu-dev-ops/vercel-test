// 'use client';

import * as React from "react";
import Link from "next/link";
// import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import AuthButtons from "./AuthButtons";
import { LOGO_WITH_TEXT, SERVER_URL } from "@/constants";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import MycardsBtn from "./MycardsBtn";

const cardProviders: Array<{
  name: string;
  ci_id: string;
  image: string;
}> = await fetch(`${SERVER_URL}/api/v1/card-issuer/`).then((res) => res.json());

const navigation = [
  { name: "Airports", href: "/airports/" },
  // { name: "Railway Stations", href: "/railway-stations/" },
  // { name: "My Cards", href: "/my-cards/" },
  { name: "FAQs", href: "/faq/" },
];

export default function AppBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              {/* <span className="font-bold text-xl">SheetWA</span> */}
              <img
                src={LOGO_WITH_TEXT}
                alt="Lounge App Logo"
                className="h-10"
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="-ml-3">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[80vw] sm:w-[385px] lg:hidden"
              >
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center space-x-2">
                      <img
                        src={LOGO_WITH_TEXT}
                        alt="SheetWA Logo"
                        width={100}
                        height={100}
                      />
                      {/* <span className="font-bold text-xl">SheetWA</span> */}
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-4 pt-0 justify-between h-full">
                  <div className="flex flex-col gap-1">
                    <Collapsible className="pl-1">
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="flex w-full justify-between"
                        >
                          Card Issuers
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col gap-1 pl-4 max-h-[40vh] overflow-y-auto ">
                        {cardProviders.map((item, index) => {
                          return (
                            <Button
                              key={index}
                              variant="ghost"
                              className="justify-start w-full"
                              asChild
                            >
                              <Link
                                href={`/credit-card/${item.name.toLowerCase().replaceAll(" ", "-")}-${
                                  item.ci_id
                                }`}
                              >
                                {item.image && ( // Conditionally render image if logo exists
                                  <img
                                    src={item.image}
                                    alt={`${item.image} logo`}
                                    className="w-5 h-5 mr-2 object-contain" // Added basic styling
                                  />
                                )}
                                {item.name}
                              </Link>
                            </Button>
                          );
                        })}
                      </CollapsibleContent>
                    </Collapsible>
                    <div className="flex flex-col gap-1">
                      {navigation.map((item) => (
                        <Button
                          key={item.href}
                          variant="ghost"
                          className="justify-start"
                          asChild
                        >
                          <Link
                            href={item.href}
                            // onClick={() => setIsOpen(false)}
                            {...(item.href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {item.name}
                          </Link>
                        </Button>
                      ))}
                      <MycardsBtn />
                    </div>
                  </div>
                  <div className="pt-4 mt-auto flex justify-center flex-col gap-2">
                    <AuthButtons />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 pt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium, focus:border-0">
                  Card Issuers
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[800px] p-4 grid grid-cols-4 gap-x-4 gap-y-2 overflow-hidden"
              >
                {cardProviders.map((item, index) => (
                  <DropdownMenuItem key={index} asChild>
                    {/* Desktop Dropdown Link - Added image */}
                    <Link
                      href={`/credit-card/${item.name.toLowerCase().replaceAll(" ", "-")}-${
                        item.ci_id
                      }`}
                      className="flex  items-center cursor-pointer justify-center text-center p-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                    >
                      {" "}
                      {/* Added flex and items-center */}
                      {item.image && ( // Conditionally render image if logo exists
                        <div className="w-10 h-10 flex items-center justify-center  mb-1">
                          {" "}
                          {/* Added wrapper for consistent image container */}
                          <img
                            src={item.image}
                            alt={`${item.name} logo`}
                            className="max-w-full max-h-full  object-contain" // Use max-w/h and object-contain
                          />
                        </div>
                      )}
                      <h2 className=" w-[45%] -ml-1">{item.name}</h2>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {navigation.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="font-medium"
                asChild
              >
                <Link
                  href={item.href}
                  className={cn(
                    item.href.startsWith("http") ? "cursor-alias" : ""
                  )}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
            <MycardsBtn />
          </div>

          {/* Desktop call-to-action buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <AuthButtons />
          </div>
        </div>
      </nav>
    </header>
  );
}
