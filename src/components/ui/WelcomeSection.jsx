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
        w-full
        bg-cover bg-center
        bg-[url('/images/pattern-bg.png')]
        px-4 sm:px-6 md:px-8 lg:px-10
        py-8 sm:py-12 md:py-20 lg:py-32 xl:py-36
      "
    >
      {/* Welcome Text - Full Width Stack on Large/Mid */}
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <p
          className={`
            ${nunito700.className}
            text-xs sm:text-sm md:text-base
            font-extrabold
            tracking-widest
            text-black
            text-center md:text-left
            mb-6 sm:mb-8 md:mb-10
          `}
        >
          WELCOME
        </p>

        {/* Heading - Staggered on Large/Mid, Centered on Small */}
        <div className="flex flex-col lg:items-start md:ml-35  ">
          {/* First Line - Always Left */}
          <h1
            className={`
              ${yellowtail.className}
              font-normal
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
              leading-tight
              text-black
              tracking-wider
              text-left
              mb-2 sm:mb-3 md:mb-4 lg:mb-3
            `}
          >
            Where Your Heart
          </h1>

          {/* Second Line - Offset on Large/Mid, Centered on Small */}
          <h2
            className={`
              ${yellowtail.className}
              font-normal
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
              leading-tight
              text-black
              tracking-wider
              text-center md:text-left
              md:ml-24 lg:ml-48 xl:ml-64
            `}
          >
            Can Finally Rest
          </h2>
        </div>
      </div>

      {/* Paragraph - Centered on Small, Left on Large/Mid */}
  <div className="flex flex-col md:items-end w-full items-center">    <p
        className={`
          ${nunito.className}
          text-sm
          md:text-[15px]
          text-gray-700
          leading-relaxed sm:leading-6 md:leading-7
          text-justify
          max-w-full md:max-w-[690px]
          mx-auto md:mx-0
          tracking-wide sm:tracking-wider
         
          
        `}
      >
        Heartivy is more than a platform — it's a pause. A moment between the
        noise and the stillness where you can finally breathe, feel, and heal
        at your own pace. We created Heartivy for those quiet hours when your
        mind feels heavy and your heart needs softness — a space where empathy
        replaces judgment, and care feels human again. Within our calm,
        connected environment, you'll find thoughtful support, honest
        understanding, and gentle reminders that peace is never lost — only
        waiting to be found again.
      </p></div>
    </section>
  );
}