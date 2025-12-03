import Image from "next/image";
import heroBg from "../../../public/images/john-towner-3Kv48NS4WUU-unsplash 1.png";
import rightImg from "../../../public/images/hero-right-img.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <Image src={heroBg} alt="hero" fill className="object-cover " />

      {/* Main Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1
          className="
          text-5xl md:text-6xl font-[Playfair] font-bold 
          text-[#F5D099]
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        "
        >
          Every Heart Deserves <br /> Care and Understanding
        </h1>

        <p className="text-gray-200 mt-3 max-w-xl text-sm md:text-base leading-relaxed">
          Find a safe, judgment-free space to share, heal, and rediscover
          yourself.
        </p>
      </div>

      {/* Bottom Left Card */}
      <div
        className="
        absolute bottom-10 left-24   text-white max-w-xs
        bg-black/30 backdrop-blur-md p-4 rounded-xl 
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
      "
      >
        <h3 className="font-semibold flex items-center gap-2 text-lg">
          💫 Strength in Stillness
        </h3>

        <p className="text-sm mt-1 leading-relaxed text-gray-100">
          Take time for your mind — nurture confidence, balance, and resilience.
        </p>
      </div>

      {/* Bottom Right Circular Card */}
      <div className="absolute bottom-10 right-24 text-white flex items-center gap-[10px">
        {/* Text on the LEFT side */}
        <div className="flex flex-col text-right leading-tight">
          <span className="text-sm opacity-90">Growth</span>
          <span className="text-sm opacity-90">Balance</span>
          <span className="text-sm opacity-90">Awareness</span>
          <span className="text-sm opacity-90">Expression</span>
        </div>

        {/* Circle Image */}
        <div
          className="
      w-[120px] h-[120px] rounded-full overflow-hidden 
      border-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]
    "
        >
          <Image
            src={rightImg}
            alt="growth"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
