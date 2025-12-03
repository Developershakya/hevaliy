import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

import img1 from "../../../public/images/Rectangle 41999.png";
import img2 from "../../../public/images/Rectangle 42000.png";
import img3 from "../../../public/images/Rectangle 42002.png";
import img4 from "../../../public/images/Rectangle 42004.png";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function HealingSection() {
  return (
    <section className="w-full pb-10 px-8 md:px-20 bg-white">
      {/* HEADING */}
      <h2
        className={`
          ${nunito.className}
          text-center text-[24px] md:text-[28px]
          font-bold tracking-[0.02em] text-gray-800 mb-16
        `}
      >
        Healing Is a Journey — and You’re Already On It
      </h2>

      {/* ⭐ FIRST ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* LEFT IMAGE */}
        <div className="w-full  rounded-2xl overflow-hidden bg-gray-200 shadow-md">
          <Image
            src={img1}
            alt="img1"
            width={475}
            height={368}
            className="object-cover w-full h-full"
          />
        </div>

        {/* MIDDLE IMAGE */}
        <div className="w-full  rounded-2xl overflow-hidden bg-gray-200 shadow-md">
          <Image
            src={img2}
            alt="img2"
            width={475}
            height={368}
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT QUOTE TEXT (12px Nunito applied) */}
        <div
          className={`
            ${nunito.className}
            text-gray-700 text-[12px]
            
            font-semibold flex items-start
          `}
        >
          <p className="text-[20px]  pt-10">
            Every sunrise feels like a quiet victory — proof that even after the
            darkest nights, light always returns. Heartivy is where healing
            grows slowly, where strength is found in softness, and where hope
            learns to breathe again.
          </p>
        </div>
      </div>

      {/* ⭐ SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT QUOTE TEXT (12px Nunito applied) */}
        <div
          className={`
            ${nunito.className}
            text-gray-700 text-[12px]
            leading-[175%] tracking-[0.02em]
            font-semibold flex items-start
          `}
        >
          <p>
            <span className="text-[64px] text-[#8BA764] font-bold leading-none">
              “
            </span>
            <span className="text-[32px]">
              {" "}
              Every smile tells a story of courage — proof that healing isn’t
              instant, but it’s real. Heartivy is where small steps lead to
              softer days, lighter hearts, and genuine connection.
            </span>
          </p>
        </div>

        {/* MIDDLE IMAGE */}
        <div className="w-full  rounded-2xl overflow-hidden bg-gray-200 shadow-md">
          <Image
            src={img3}
            alt="img3"
            width={475}
            height={368}
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full  rounded-2xl overflow-hidden bg-gray-200 shadow-md">
          <Image
            src={img4}
            alt="img4"
            width={475}
            height={368}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
