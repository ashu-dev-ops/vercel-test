"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface FooterLinkBtnProps {
  text: string;
  path: string;
}

export function FooterLinkBtn({ text, path }: FooterLinkBtnProps) {
  const isExternalLink = path === "/blogs/";
  const href = isExternalLink ? "https://sheetwa.com/blogs/" : path;

  return (
    <Link
      href={href}
      {...(isExternalLink
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        buttonVariants({ variant: "link" }),
        "h-auto p-2 text-sm font-normal text-muted-foreground hover:text-primary hover:bg-primary/5",
        "sm:-ml-2",
        "hover:no-underline"
      )}
    >
      {text}
    </Link>
  );
}
