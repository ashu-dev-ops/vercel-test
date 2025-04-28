'use client'
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const MycardsBtn = () => {
  return (
    <div>
      <SignedIn>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/my-cards">My Cards</Link>
        </Button>
      </SignedIn>

      <SignedOut>
        <SignInButton forceRedirectUrl="/my-cards">
          <Button variant="ghost" className="justify-start">
            My Cards
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default MycardsBtn;
