import { Nunito_Sans } from "next/font/google";

const nunito700 = Nunito_Sans({
  weight: "700",
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function WelcomeSection() {
  return (
    <section
      className="
        w-full py-36 px-10  
        bg-[url('/images/pattern-bg.png')] bg-cover bg-center
      "
    >
      {/* Top Small Text */}
      <p
        className={`
    ${nunito700.className}
    text-[20px]
    leading-[214%]
    tracking-[0.10em]
    text-gray-700
    mb-10
    ml-20
  `}
      >
        WELCOME
      </p>

      {/* Layout */}
      <div
        className="
          max-w-[1400px] mx-auto 
          flex flex-row md:flex-row 
          
        "
      >
        {/* LEFT — Staggered Heading */}
        <div className="flex flex-col">
          {/* First line */}
          <span
            className="
              font-[Yellowtail] font-normal
              text-[96px] md:text-[60px]
              leading-[150%]
              tracking-[0.10em]
              text-gray-900
            "
          >
            Where Your Heart
          </span>

          {/* Second line — shifted 80px to the right */}
          <span
            className="
              font-[Yellowtail] font-normal
              text-[96px] md:text-[60px]
              leading-[150%]
              tracking-[0.10em]
              text-gray-900
              md:ml-[220px]   /* ⭐ EXACT stagger spacing */
            "
          >
            Can Finally Rest
          </span>
        </div>

        {/* RIGHT — Paragraph */}
        <p
          className={`
            ${nunito.className}
            text-[12px]
            leading-[175%]
            tracking-[0.10em]
            text-gray-700
            text-justify
            max-w-[520px]       /* ⭐ exact width */
            md:mt-[200px]        /* ⭐ align with 2nd line */
          `}
        >
          Heartivy is more than a platform — it’s a pause. A moment between the
          noise and the stillness where you can finally breathe, feel, and heal
          at your own pace. We created Heartivy for those quiet hours when your
          mind feels heavy and your heart needs softness — a space where empathy
          replaces judgment, and care feels human again. Within our calm,
          connected environment, you'll find thoughtful support, honest
          understanding, and gentle reminders that peace is never lost — only
          waiting to be found again.
        </p>
      </div>
    </section>
  );
}
