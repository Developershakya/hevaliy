"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart, Instagram, Twitter, Linkedin } from "lucide-react";
import '@/styles/globals.css';
import Image from "next/image";
export default function HomePage() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Support", "Resources", "Community"];

  return (
    <div className="bg-[#F8F8F4] min-h-screen ">
      
      {/* ---------------- HEADER ---------------- */}
      <header className="w-full fixed top-0 z-50 py-4 backdrop-blur-lg">
        <Image
        src={"/public/images/"}
        width={10}
        height={10}
        alt="logo"></Image>
        <div className="max-w-7xl mx-auto flex justify-center items-center relative px-4">
            
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 backdrop-blur-2xl  px-10 py-3 rounded-full  border-white/40">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`relative text-sm transition ${
                  active === item ? "text-black font-semibold" : "text-gray-600 hover:text-black"
                }`}
              >
                {item}

                {active === item && (
                  <span className="absolute -left-1/5 bottom-1/3  -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></span>
                )}
              </button>
            ))}

            <Link
              href="/auth/login"
              className="bg-[#E8E8E8] text-black px-6 py-2 font-bold rounded-full text-sm hover:opacity-90 transition"
            >
              Login ↗
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden absolute right-6" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3 text-center">
            {navItems.map((item) => (
              <p
                key={item}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
                className="cursor-pointer text-gray-700 text-sm py-1 hover:text-black transition"
              >
                {item}
              </p>
            ))}

            <Link
              href="/auth/login"
              className="block bg-black text-white py-2 rounded-lg text-sm"
            >
              Login ↗
            </Link>
          </div>
        )}
      </header>


      {/* ---------------- HERO ---------------- */}
      <section className="relative w-full h-[92vh] flex items-center justify-center">
        <Image
          src={"/"}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          alt="Healing background"
          fill
        />

        <div className="relative text-center px-6">
          <h1 className="text-white text-6xl md:text-7xl font-[Playfair] font-semibold leading-tight">
            Every Heart Deserves<br/> Care and Understanding.
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto mt-4">
            A soft space to feel seen, heard and understood — where healing isn’t rushed.
          </p>

          <button className="mt-8 bg-white/90 px-8 py-3 rounded-full text-lg font-medium hover:bg-white transition">
            Begin Your Healing ✨
          </button>
        </div>
      </section>


      {/* ---------------- SECTION: FEATURES ---------------- */}
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <h2 className="text-5xl font-[Playfair] text-gray-800">What We Offer</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Healing feels different when the space feels gentle.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {[
            "Emotional Support",
            "Guided Programs",
            "Community Healing"
          ].map((title, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white border hover:shadow-xl transition"
            >
              <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4"/>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                A safe and compassionate environment focused on growth and emotional clarity.
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* ---------------- TESTIMONIAL ---------------- */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl text-gray-700 italic font-[Playfair]">
            "I finally feel understood and not judged. Heartivy changed how I see healing."
          </p>
          <p className="text-gray-500 mt-4">— Anonymous Member</p>
        </div>
      </section>


      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-[#ECEBE7] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">

          <div>
            <h3 className="text-2xl font-[Playfair] text-gray-800">Heartivy</h3>
            <p className="text-gray-600 text-sm mt-2">
              A gentle space for emotional healing.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-800">Quick Links</p>
            {["About", "Support", "Community"].map((link) => (
              <p key={link} className="text-gray-600 text-sm hover:text-black cursor-pointer">
                {link}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-gray-800">Follow Us</p>
            <div className="flex justify-center md:justify-start gap-4">
              <Instagram className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
              <Linkedin className="cursor-pointer" />
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-10">© 2025 Heartivy — All Rights Reserved.</p>
      </footer>

    </div>
  );
}
