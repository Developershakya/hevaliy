import { Heart } from "lucide-react";

export default function Features() {
  const items = ["Emotional Support", "Guided Programs", "Community Healing"];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-5xl font-[Playfair] text-gray-800">What We Offer</h2>
      <p className="text-gray-600 max-w-xl mx-auto mt-4">
        Healing feels different when the space feels gentle.
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {items.map((title, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white border hover:shadow-xl transition">
            <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm mt-2">
              A safe and compassionate environment focused on growth and clarity.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
