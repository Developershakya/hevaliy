import Image from "next/image";

export default function SubscribeSection() {
  return (
    <section className="px-4 md:px-10 max-w-5xl mx-auto mb-32">
      {/* Card */}
      <div className="relative max-w-6xl w-full rounded-3xl bg-[#EDEDED] overflow-hidden border border-[#e4e4e4]">

        {/* Background Image */}
        <Image
          src="/images/Lines_newsletter_bg.svg"
          alt="Background"
          fill
          className="object-cover mix-blend-multiply object-top translate-y-8 md:translate-y-11"
        />

        <div className="relative z-[2] text-center px-6 md:px-20 py-10 md:py-16">
          
          {/* Small Heading */}
          <p className="text-gray-900 text-md tracking-wide font-medium mb-3">
            Our Journal of Healing
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#625A60] leading-tight">
            Subscribe to Find Calm, Hope, and <br className="hidden md:block" />
            Gentle Guidance from Heartivy
          </h2>

          {/* Subline */}
          <p className="text-[#808080] text-sm max-w-2xl mx-auto mt-6 leading-relaxed px-2 md:px-32">
            Join our circle of care — receive comforting stories, mindful reflections, 
            and emotional wellness tips right in your inbox.
          </p>

          {/* Input + Button */}
          <div className="mt-10 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 mx-auto w-full max-w-xl px-4 py-2 rounded-full">
            <input
              type="email"
              placeholder="Enter your email to begin your gentle journey"
              className="w-full sm:flex-1 px-4 py-2 rounded-full text-sm outline-none"
            />
            <button className="bg-[#8F7A9C] text-white px-8 py-3 rounded-full text-[14px] hover:opacity-90 transition">
              Join the Circle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
