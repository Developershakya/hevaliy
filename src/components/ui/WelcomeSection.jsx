import { Yellowtail, Nunito_Sans } from "next/font/google";

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

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
          text-md
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
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-col">
        {/* LEFT — Staggered Heading */}
        <div className="flex flex-col ">
          {/* First Line */}
          <span
            className={`
      ${yellowtail.className}
      font-normal
      text-[96px]
      leading-[120%]   /* 🔥 Tight line height */
      text-gray-900
    `}
          >
            Where Your Heart
          </span>

          <span
            className={`
      ${yellowtail.className}
      font-normal
      text-[96px]
      leading-[160%]   
      text-gray-900
      ml-[220px]     
    `}
          >
            Can Finally Rest
          </span>
        </div>
        {/* RIGHT — Paragraph */}
        <p
          className={`
    ${nunito.className}
    text-[20px]
    font-normal
    text-gray-700
    leading-relaxed
    text-justify
    max-w-[600px]
    mt-[10px]
    ml-[700px]
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
