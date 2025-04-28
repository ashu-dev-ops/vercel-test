"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FooterColumn } from "./FooterColumn";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Social media icons
import { FooterLinkBtn } from "./FooterLinkBtn";
import { APP_NAME, LOGO_WITH_TEXT } from "@/constants";
import { useState } from "react";

// import Image from "next/image";
import { LinkedinIcon } from "@/components/brand-icons/LinkedinIcon";
import { FacebookIcon } from "@/components/brand-icons/FacebookIcon";
import { PinterestIcon } from "@/components/brand-icons/Pinterest";
import { XIcon } from "@/components/brand-icons/XIcon";
import { YoutubeIcon } from "@/components/brand-icons/YoutubeIcon";
import { InstagramIcon } from "@/components/brand-icons/InstagramIcon";
const socialLinks = [
  {
    label: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/",
  },
  {
    label: "Twitter",
    icon: XIcon,
    url: "https://twitter.com/",
  },
  {
    label: "Facebook",
    icon: FacebookIcon,
    url: "https://www.facebook.com/",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/",
  },
  {
    label: "Pinterest",
    icon: PinterestIcon,
    url: "https://www.pinterest.com/",
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    url: "https://www.youtube.com/",
  },
];

const footerData = [
  {
    title: "Resources",
    links: [
      { linkName: "Pricing", path: "/pricing/" },
      { linkName: "FAQs", path: "/faq/" },
      { linkName: "Sitemap", path: "/sitemap.html" },
    ],
  },
  {
    title: "Support",
    links: [
      { linkName: "Contact", path: "/support/" },
      { linkName: "Guidelines", path: "/guidelines/" },
      { linkName: "Cancellation", path: "/cancellation-policy/" },
    ],
  },
  {
    title: "Policies",
    links: [
      { linkName: "Cookie Policy", path: "/cookie/" },
      { linkName: "Privacy Policy", path: "/privacy-policy/" },
      { linkName: "Terms of Service", path: "/terms-of-service/" },
      { linkName: "Acceptable Policy", path: "/acceptable-policy/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#eaefff40]">
      <div className="container mx-auto">
        <div className="py-12 md:py-16 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            {/* Left Section */}
            <div className="mb-12 flex flex-col items-center text-center lg:mb-0 lg:w-1/4 lg:items-start lg:text-left">
              <Link href="/" className="mb-6 flex items-center space-x-2">
                {/* <span className="font-bold text-2xl">SheetWA</span> */}
                <img
                  src={LOGO_WITH_TEXT}
                  alt="SheetWA Logo"
                  width={140}
                  height={140}
                />
              </Link>

              {/* <p className="mb-4 text-lg font-medium text-muted-foreground">
                Lounge Acess
              </p> */}

              <div className="mb-6 flex flex-wrap justify-center lg:justify-start">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="size-12 rounded-full cursor-pointer"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="size-5 fill-current text-primary" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                ))}
              </div>

              <Button variant="outline" className="gap-2" asChild>
                <Link href={"#"} target="_blank">
                  Start for free
                </Link>
              </Button>

              <p className="mt-8 text-sm text-muted-foreground">
                © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
              </p>
            </div>

            {/* Right Section - Footer Columns */}
            <div className="flex flex-1 gap-2 flex-wrap md:justify-start  justify-center">
              {footerData.map((column, idx) => (
                <FooterColumn
                  key={idx}
                  title={column.title}
                  links={column.links}
                  className="flex flex-col gap-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
