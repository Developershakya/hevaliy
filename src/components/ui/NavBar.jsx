"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // to detect active link
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import loginIcon from "../../../public/images/login-icon.png";
import { Nunito_Sans, Poppins } from "next/font/google";
import { motion , AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // light-medium-regular-bold
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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

  // Check if current route is Home or About
  const isHomeOrAbout = pathname === "/" || pathname === "/marketing/about";
  
  // Check if current route is Home only
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // scroll off
    } else {
      document.body.style.overflow = "auto"; // scroll on
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <div className="relative">
<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`${nunito.className}
        md:hidden
        fixed
        top-2 left-2 right-2
        z-50
        border border-gray-100
        backdrop-blur-xl
      ${isHome ? "bg-white/30" : "bg-black/10"}
        p-5
        rounded-3xl
        shadow-xl
        text-left
        space-y-1
      `}
    >
      {/* Header */}
      <div
        className="flex justify-between p-2 mb-20 cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <Image src={logo} width={40} height={40} alt="logo" />
        <Image
          src={"/icons/close.png"}
          width={18}
          height={18}
          alt="close"
          className="object-contain"
        />
      </div>

      {/* NAV LINKS */}
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setOpen(false)}
          className="block text-white font-extrabold text-[36px]"
        >
          {item.name}
        </Link>
      ))}

      {/* LOGIN */}
      <Link
        href="/auth/login"
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 text-black mt-4"
      >
        <span className="font-extrabold text-[36px]">Login</span>
        <Image
          src={loginIcon}
          width={18}
          height={18}
          alt="login icon"
          className="object-contain"
        />
      </Link>
    </motion.div>
  )}
</AnimatePresence>


<nav
  className={`
    fixed left-0 w-full z-50 flex justify-center pt-6
    -top-px                         /* 🔥 1px gap fix */
    transition-all duration-300
    transform-gpu will-change-transform

    ${
      scrolled && isHomeOrAbout
        ? "bg-white/10 backdrop-blur-xl shadow-lg py-4"
        : "bg-transparent"
    }

    ${open ? "md:block hidden" : "block"}

    ${nunito.className}

    ${
      !isHomeOrAbout
        ? "rounded-bl-3xl rounded-br-3xl bg-white/10 backdrop-blur-xl py-4"
        : ""
    }

${
  scrolled && !isHomeOrAbout
    ? `
      border-b-2 border-l-2 border-r-2 border-[#E5E7EB]
      lg:border-0 lg:shadow-lg
    `
    : ""
}

  `}
>

        <div className={`
          w-full max-w-[1550px] px-10 flex md:justify-around justify-between  items-center transition-all relative
          
        `}>
          {/* Logo */}
          <Image
            src={logo}
            width={40}
            height={40}
            alt="logo"
            className="object-contain"
          />

          {/* Center Links */}
          <div className="hidden md:flex items-center lg:gap-8 lg:px-10 lg:py-2 md:gap-4 md:px-13 md:py-2 rounded-full bg-[#FFFFFF26] backdrop-blur-xl relative">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="relative">
                  {isActive && (
                    <span className="absolute lg:-left-4 md:-left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-600"></span>
                  )}
                  <Link
                    href={item.href}
                    className={`text-gray-700 lg:text-xl font-bold md:text-[14px] hover:text-black transition ${
                      isActive ? "font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Login Button - Hidden on Home/About small screen, shown on other routes all screens */}
          <Link href="/auth/login">
            <div className={`
              items-center gap-2 bg-[#E8E8E8] px-5 py-2.5 rounded-full hover:bg-gray-100 transition cursor-pointer
              ${isHomeOrAbout ? "hidden md:flex" : "flex md:flex"}
            `}>
              <span className="text-[23px] font-bold">Login</span>
              <Image
                src={loginIcon}
                alt="login icon"
                width={18}
                height={18}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Mobile Toggle - Shows only on Home with white color, on About with black */}
          {isHome && (
            <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
              <span className="text-xl text-white">☰</span>
            </button>
          )}

          {/* Mobile Toggle - Shows on About with black */}
          {pathname === "/marketing/about" && (
            <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
              <span className="text-xl text-black">☰</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}