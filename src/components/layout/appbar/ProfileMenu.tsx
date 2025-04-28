"use client";

import Link from "next/link";
import { Avatar } from "../../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  AppWindowIcon,
  ChartLineIcon,
  LoaderIcon,
  LogOut,
  User,
} from "lucide-react";
import { DASHBOARD_URL } from "@/constants";
export function ProfileMenu({
  defaultButtons,
}: {
  defaultButtons: React.ReactNode;
}) {
  const user = "";
  const logout = () => {};
  const isLoggingOut = false;
  
  const menuItems = [
    {
      label: "Profile",
      icon: <User className="w-4 h-4" />,
      href: `${DASHBOARD_URL}/user/profile/`,
    },
    {
      label: "Reports",
      icon: <ChartLineIcon className="w-4 h-4" />,
      href: `${DASHBOARD_URL}/user/reports/`,
    },
  ];

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar
              className="cursor-pointer uppercase flex justify-center items-center flew-8 h-8 text-white bg-gray-500"
            >
              {user}
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[220px]">
            <div>
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>
                    {item.icon} {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                asChild
                onSelect={(e) => {
                  e.preventDefault(); // keep dropdown open
                  logout(); // then close later via useEffect
                }}
                disabled={isLoggingOut}
              >
                <div>
                  {isLoggingOut ? (
                    <LoaderIcon className="w-4 h-4 animate-spin" />
                  ) : (
                    <LogOut className="w-4 h-4" />
                  )}
                  Logout
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>{defaultButtons}</>
      )}
    </>
  );
}
