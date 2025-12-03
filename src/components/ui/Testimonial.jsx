import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

import user1 from "../../../public/images/user1.png";
import user2 from "../../../public/images/user2.png";
import user3 from "../../../public/images/user3.png";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function TestimonialSection() {
  return (
    <section className="w-full py-24 px-8 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col justify-center">
          <h2
            className={`
              ${nunito.className}
              text-[32px] md:text-[40px] font-extrabold
              text-gray-900 leading-tight
            `}
          >
            What Are People{" "}
            <span className="text-[#2C7A59]">Saying About Us</span>
          </h2>

          <p
            className={`
              ${nunito.className}
              text-[14px] text-gray-600 leading-[175%] mt-4 max-w-[360px]
            `}
          >
            We are very happy if you are satisfied with our service. Let’s read
            pure reviews from customers who bought our products.
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-6 mt-12">
            <span
              className={`
                ${nunito.className}
                text-[20px] font-bold text-gray-900
              `}
            >
              02 <span className="text-gray-500">/ 05</span>
            </span>

            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-lg bg-[#6D4AFF] text-white flex items-center justify-center shadow-md">
                ←
              </button>
              <button className="w-10 h-10 rounded-lg bg-[#6D4AFF] text-white flex items-center justify-center shadow-md">
                →
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — TESTIMONIALS GRID */}
        <section className="w-full py-24 px-8 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
     
      {/* RIGHT – ONE BIG CARD */}
        <div
          className="p-6 rounded-2xl shadow-sm w-full h-full flex flex-col justify-between"
          style={{ backgroundColor: "#C3C3C34D" }}
        >
          <p className="text-[32px] text-[#2C7A59] leading-none">“</p>

          <p
            className={`
              ${nunito.className}
              text-[14px] text-gray-700 leading-[175%] mt-2
            `}
          >
            I finally felt safe enough to talk about things I’ve kept hidden for
            years. The anonymity is absolute, and the freedom allowed me to be
            truly honest for the first time. It changed everything.
          </p>

          {/* User */}
          <div className="flex items-center gap-3 mt-6">
            <Image
              src={user1}
              alt="user"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <p className="text-[14px] font-bold text-gray-900">Ruth M.I.</p>
              <p className="text-[12px] text-gray-500">USA</p>
            </div>
          </div>
        </div>
        {/* LEFT – TWO SMALL CARDS */}
        <div className="flex flex-col gap-8 w-full">
          {/* Small Card 1 */}
          <div
            className="p-6 rounded-2xl shadow-sm w-full"
            style={{ backgroundColor: "#C3C3C34D" }}
          >
            <p className="text-[32px] text-[#2C7A59] leading-none">“</p>

            <p
              className={`
                ${nunito.className}
                text-[14px] text-gray-700 leading-[175%] mt-2
              `}
            >
              Knowing I can connect with a compassionate listener 24/7 is a
              massive weight off my shoulders. I didn’t feel alone anymore.
            </p>

            {/* User */}
            <div className="flex items-center gap-3 mt-4">
              <Image
                src={user2}
                alt="user"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="text-[14px] font-bold text-gray-900">Alex R.</p>
                <p className="text-[12px] text-gray-500">Canada</p>
              </div>
            </div>
          </div>

          {/* Small Card 2 */}
          <div
            className="p-6 rounded-2xl shadow-sm w-full"
            style={{ backgroundColor: "#C3C3C34D" }}
          >
            <p className="text-[32px] text-[#2C7A59] leading-none">“</p>

            <p
              className={`
                ${nunito.className}
                text-[14px] text-gray-700 leading-[175%] mt-2
              `}
            >
              The groups are incredible. I found people who truly ‘get it’ in a
              supportive, judgment-free community.
            </p>

            {/* User */}
            <div className="flex items-center gap-3 mt-4">
              <Image
                src={user3}
                alt="user"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="text-[14px] font-bold text-gray-900">
                  Yaretzi H.
                </p>
                <p className="text-[12px] text-gray-500">UK</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
      </div>
    </section>
  );
}
