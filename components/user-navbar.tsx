"use client"
import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem
} from "@/components/ui/navigation-menu"

export default function AdminSidebar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" className="p-4">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" className="p-4">
              About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin" className="p-4">
              Admin
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}