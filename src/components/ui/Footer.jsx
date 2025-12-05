import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#ECEBE7] py-16 mt-20 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand section */}
        <div>
          <h3 className="text-2xl font-[Playfair] text-gray-800">Heartivy</h3>
          <p className="text-sm mt-2 text-gray-600">
            A gentle space for emotional healing.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <p className=" text-gray-800">Quick Links</p>

          {["About", "Support", "Community"].map((link) => (
            <p
              key={link}
              className="text-gray-600 text-xs hover:text-black cursor-pointer"
            >
              {link}
            </p>
          ))}
        </div>

        {/* Social icons */}
        <div className="space-y-4">
          <p className="font-semibold text-gray-800">Follow Us</p>

          <div className="flex justify-center md:justify-start gap-4">
            <Instagram className="cursor-pointer hover:text-black transition" />
            <Twitter className="cursor-pointer hover:text-black transition" />
            <Linkedin className="cursor-pointer hover:text-black transition" />
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-10">
        © 2025 Heartivy — All Rights Reserved.
      </p>
    </footer>
  );
}
