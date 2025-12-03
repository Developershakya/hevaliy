import Image from 'next/image';
import { Heart, BookOpen, Activity, Users, ScanFace, Folder } from 'lucide-react';
import Header from '../../../components/ui/NavBar';
import Footer from '@/components/Footer';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pt-24">
      {/* --- Navbar --- */}
      <Header></Header>

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* --- Hero Section --- */}
        <div className="text-center mb-24">
          <div className="flex justify-center mb-4">
            {/* Small decorative squiggle/logo */}
            <span className="text-2xl font-bold">『 About Ous 』</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Because no one deserves to feel alone in their pain.
          </h1>
          <p className="text-gray-900  max-w-2xl mx-auto text-sm md:text-base">
            Mental health affects how we think, feel, and act. It determines how we handle stress, relate to others, and make choices.
          </p>
        </div>

        {/* --- Hero Grid Images --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 h-[650px]">
          {/* Left Large Image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/images/Rectangle 42030.png"
              alt="Portrait of a man"
              fill
              className="object-cover"
            />
          </div>
          {/* Right Column Stacked Images */}
          <div className="flex flex-col gap-4 h-full">
            <div className="relative w-full h-1/2 rounded-2xl overflow-hidden">
              <Image
                src="/images/Rectangle 42031.png"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-1/2 rounded-2xl overflow-hidden">
              <Image
                src="/images/Rectangle 42032.png"
                alt="People working together"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
        <p className="text-gray-300 text-sm md:text-2xl text-center mb-96">Trusted by many</p>
        {/* --- Our Story Section --- */}
        <div className="flex flex-col md:flex-row  gap-12 mb-24">
          <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/Rectangle 42033.png"
              alt="Our story team"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 ">Our Story</h2>
            <p className="text-gray-700 text-md leading-relaxed ">
              We started with a simple idea: that everyone deserves a safe space to grow, heal, and connect. What began as a small community has grown into a global movement.
            </p>
            <p className="text-gray-700 text-md leading-relaxed">
              Our commitment to privacy, empathy, and accessibility drives everything we do. We believe that mental health is just as important as physical health, and we are here to bridge the gap.
              Our commitment to privacy, empathy, and accessibility drives everything we do. We believe that mental health is just as important as physical health, and we are here to bridge the gap.
            </p>
          </div>

        </div>
        <div className="flex justify-center items-center">          <span className="bg-gray-400 w-60 h-2 rounded-full opacity-50 mb-52"></span></div>
        {/* --- What We Do (Features) --- */}
        <div className="mb-24">

          <div className="text-center mb-22">
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800">What We Do</h2>
            <p className="text-gray-400 text-xs mt-2">Comprehensive support tailored for your needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FeatureCard img="/icons/Vector (5).png" title="" desc="" />
            <FeatureCard img="/icons/Vector (4).png" title="Guided Journaling" desc="Daily prompts that help you reflect, release stress, and understand your emotions better." />
            <FeatureCard img="/icons/Vector (3).png" title="Mood Check-Ins" desc="Quick check-ins to track how you’re feeling and see your emotional patterns over time." />
            <FeatureCard img="/icons/Vector (2).png" title="Calming Tools" desc="Breathing exercises, grounding techniques, and micro-activities to help you feel better." />
            <FeatureCard img="/icons/Vector (1).png" title="Community Stories" desc="Real stories from people who’ve walked similar paths — reminders that you’re not alone." />
            <FeatureCard img="/icons/Vector.png" title="Resource Library" desc="Curated articles, mental-health insights, and self-care guides for everyday support." />
          </div>
          <p className="text-gray-900 text-center text-md m-12">"Healing isn't linear — but it's real."</p>
        </div>

        {/* --- Our Mission --- */}
        <div className="text-center mb-24 mt-56 max-w-3xl mx-auto ">
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-500 text-sm mb-8">
            To make mental health support accessible, affordable, and stigma-free for everyone, everywhere. We envision a world where seeking help is seen as a strength.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge color="bg-red-100 text-red-600" text="Accessibility" />
            <Badge color="bg-blue-100 text-blue-600" text="Community" />
            <Badge color="bg-purple-100 text-purple-600" text="Innovation" />
            <Badge color="bg-yellow-100 text-yellow-700" text="Empathy" />
          </div>
        </div>

        {/* --- Team Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-40 mb-96 mt-96">
          <TeamMember
            img="/images/Rectangle 42030.png"
          />
          <TeamMember
            img="/images/Rectangle 42046.png"
          />
          <TeamMember
            img="/images/Rectangle 42047.png"
          />
        </div>

      </main>
       <div className="grid grid-cols-2 gap-22 w-7xl items-center mb-96  mx-auto">
  <div className="h-30 w-120 bg-gray-100 rounded-lg"></div>
  <div className="h-30 w-120 bg-gray-100 rounded-lg"></div>
  <div className="h-30 w-120 bg-gray-100 rounded-lg"></div>
  <div className="h-30 w-120 bg-gray-100 rounded-lg"></div>
</div>

      {/* --- Footer --- */}
      <Footer></Footer>

    </div>
  );
}

// --- Helper Components for Clean Code ---

type FeatureCardProps = {
  img: string;
  title: string;
  desc: string;
};

function FeatureCard({ img, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-[#EAEAEA] rounded-xl p-8 flex flex-col items-center text-center hover:shadow-md transition">
      <div className="mb-4 text-gray-700">
        <Image
          src={img}
          alt="Feature icon"
          width={60}
          height={60}
        />
      </div>
      <h3 className="font-semibold text-sm mb-2">{title}</h3>
      <p className="text-gray-500 text-xs">{desc}</p>
    </div>
  );
}

type BadgeProps = {
  color: string;
  text: string;
};

function Badge({ color, text }: BadgeProps) {
  return (
    <span className={`${color} px-4 py-1.5 rounded-full text-xs font-semibold`}>
      {text}
    </span>
  );
}

type TeamMemberProps = {
  img: string;
};

function TeamMember({ img }: TeamMemberProps) {
  return (
    <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-sm">
      <Image
        src={img}
        alt="Team member"
        fill
        className="object-cover"

      />
    </div>
  )
}