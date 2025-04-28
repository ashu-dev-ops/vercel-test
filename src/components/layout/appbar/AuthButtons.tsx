"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { ProfileMenu } from "./ProfileMenu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useClerk,
  UserButton,
} from "@clerk/nextjs";
import useCardAddModalStore from "@/hooks/manageSavedCards";
export default function AuthButtons() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { signOut } = useClerk();
  const handleLoginClick = async () => {
    router.push("/auth");
  };
  const { reset } = useCardAddModalStore();

  return (
    <ProfileMenu
      defaultButtons={
        <div className="flex items-center gap-2 pt-2">
          {/* <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut> */}
          <SignedIn>
            {/* <UserButton />
             */}
            <Button
              variant="outline"
              className={`cursor-pointer transition-all duration-300 ${
                loading
                  ? "bg-gray-200 text-gray-500 border-gray-300 shadow-lg transform scale-[1.03] animate-[pulse_1.5s_ease-in-out_infinite]"
                  : ""
              }`}
              onClick={() => {
                reset();
                signOut();
              }}
              disabled={loading}
            >
              Logout
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl={"/my-cards"}>
              <Button
                variant="outline"
                className={`cursor-pointer transition-all duration-300 ${
                  loading
                    ? "bg-gray-200 text-gray-500 border-gray-300 shadow-lg transform scale-[1.03] animate-[pulse_1.5s_ease-in-out_infinite]"
                    : ""
                }`}
                // onClick={handleLoginClick}
                disabled={loading}
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <Button className="font-medium cursor-pointer">
            <Link href={"#"} target="_blank" rel="noopener noreferrer">
              Get Started For Free
            </Link>
          </Button>
        </div>
      }
    />
  );
}
