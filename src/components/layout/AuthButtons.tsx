import Link from "next/link";
import { ProfileMenu } from "./appbar/ProfileMenu";
import { Button } from "../ui/button";

export default function AuthButtons() {
  return (
    <ProfileMenu
      defaultButtons={
        <>
          <Button variant="outline" className="cursor-pointer">
            <Link href="/auth">Login</Link>
          </Button>
          <Button
            className="font-medium cursor-pointer"
          >
            <Link
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started For Free
            </Link>
          </Button>
        </>
      }
    />
  );
}
