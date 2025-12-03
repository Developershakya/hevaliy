"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // to detect active link
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import loginIcon from "../../../public/images/login-icon.png";

export default function NavBar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/marketing/about" },
    { name: "Get Support", href: "/support" },
    { name: "Resources", href: "/resources" },
    { name: "Community", href: "/marketing/community" },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname(); // current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 flex justify-center pt-6 
        transition-all duration-300
        ${scrolled ? "bg-white/10 backdrop-blur-xl shadow-lg py-4" : "bg-transparent"}
      `}
    >
      <div className="w-full max-w-[1550px] px-10 flex justify-around items-center transition-all relative">
        {/* Logo */}
        <Image src={logo} width={40} height={40} alt="logo" className="object-contain" />

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 px-10 py-2 rounded-full bg-[#FFFFFF26] backdrop-blur-xl relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name} className="relative">
                {isActive && (
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-600"></span>
                )}
                <Link
                  href={item.href}
                  className={`text-gray-700 text-md font-medium hover:text-black transition ${
                    isActive ? "font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Login Button */}
        <Link href="/auth/login">
          <div className="flex items-center gap-2 bg-[#E8E8E8] px-6 py-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
            <span className="text-lg font-medium">Login</span>
            <Image src={loginIcon} alt="login icon" width={18} height={18} className="object-contain" />
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
          <span className="text-xl text-white">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-20 w-full bg-white/90 backdrop-blur-xl py-4 rounded-xl shadow-xl text-center space-y-4">
          {navItems.map((item) => (
            <p key={item.name} className="text-gray-800 text-sm">
              {item.name}
            </p>
          ))}
          <Link href="/auth/login" className="block bg-black text-white py-2 rounded-full mx-20">
            Login ↗
          </Link>
        </div>
      )}
    </nav>
  );
}
