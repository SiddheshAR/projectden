"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 shadow-sm px-6 py-3 relative z-50 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          ProjectHub
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 relative">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-full left-0 bg-white shadow-lg rounded-md">
                  <ul className="grid w-48 gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/projects/trending" className="text-sm">
                          Trending Projects
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/projects/new" className="text-sm">
                          New Projects
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="text-sm hover:underline">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="text-sm hover:underline">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-4 py-2 border border-black text-sm font-medium rounded hover:bg-black hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-900 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
<div
  className={`
    md:hidden fixed inset-x-0 top-[60px] z-40
    transform-gpu transition-transform duration-300 ease-in-out
    ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
    bg-white shadow-lg
  `}
>
  <nav className="flex flex-col space-y-2 px-6 py-4">
    <Link href="/projects/trending" className="text-sm py-2">
      Trending Projects
    </Link>
    <Link href="/projects/new" className="text-sm py-2">
      New Projects
    </Link>
    <Link href="/about" className="text-sm py-2">
      About
    </Link>
    <Link href="/contact" className="text-sm py-2">
      Contact
    </Link>

    <div className="border-t pt-4 space-y-3">
      <Link
        href="/login"
        className="block text-center px-4 py-2 border border-black text-sm font-medium rounded hover:bg-black hover:text-white transition"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="block text-center px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-900 transition"
      >
        Sign Up
      </Link>
    </div>
  </nav>
</div>
      )}
    </nav>
  );
}

export default Navbar;
