"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchIcon } from "../svg";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav className="flex justify-between items-center">
        <a href="/index.html" className="text-3xl font-bold">
          <Image
            width={100}
            height={40}
            src="/assets/lws-kitchen.png"
            alt="LWS Kitchen"
            className="h-10"
          />
        </a>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className={
                (clsx("hover:text-orange-500"),
                pathname === "/" ? "text-orange-500" : "")
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className={
                (clsx("hover:text-orange-500"),
                pathname === "/categories" ? "text-orange-500" : "")
              }
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/recipes"
              className={
                (clsx("hover:text-orange-500"),
                pathname === "/recipes" ? "text-orange-500" : "")
              }
            >
              Latest Recipes
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className={
              (clsx("hover:text-orange-500"),
              pathname === "/" ? "text-orange-500" : "")
            }
          >
            <SearchIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
