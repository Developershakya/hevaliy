import Image from 'next/image';
import { Heart, BookOpen, Activity, Users, ScanFace, Folder } from 'lucide-react';
import Header from '../../../components/ui/NavBar';
import Footer from '@/components/Footer';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pt-24 ">
      {/* --- Navbar --- */}
      <Header></Header>

      <main className="max-w-6xl mx-auto px-20 py-12">

        {/* --- Hero Section --- */}
        <div className="text-center mb-24">
          <div className="flex justify-center mb-4">
            {/* Small decorative squiggle/logo */}
            <span className="text-2xl font-bold">『 About Ous 』</span>
          </div>
          <h1 className="text-3xl md:text-3xl font-semibold mb-4 text-gray-900">
            Because no one deserves to feel alone in their pain.
          </h1>
          <p className="text-gray-900  max-w-2xl mx-auto text-sm md:text-[17px] px-13">
            Heartivy was created to make emotional support safe, gentle, and human again. A place where healing begins with understanding, and connection grows through compassion.
          </p>
        </div>

        {/* --- Hero Grid Images --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 h-[650px] ">
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
        <p className="text-gray-400 text-sm md:text-[20px] font-semibold text-center mb-96">Trusted by many</p>
        {/* --- Our Story Section --- */}
        <div className="flex flex-col md:flex-row   gap-18 mb-24">
          <div className="w-full  relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/Rectangle 42033.png"
              alt="Our story team"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full ">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 ">Our Story</h2>
            <p className="text-gray-900 text-lg  leading-relaxed ">
              Heartivy began with a simple truth: in a world more connected than ever, loneliness and emotional pain often go unspoken. We saw people struggling in silence, carrying burdens they felt they had to bear alone.
              Our founders experienced firsthand the isolation that comes with mental health challenges. They understood that sometimes, what we need most isn't clinical intervention—it's human connection, empathy, and the reassurance that we're not alone.
              Heartivy was built to be that safe space—a gentle refuge where healing happens through understanding, where stories are shared without judgment, and where every voice matters.
            </p>

          </div>

        </div>
        <div className="flex justify-center items-center">          <span className="bg-gray-400 w-45 h-1.5 rounded-full opacity-50 mb-52"></span></div>
        {/* --- What We Do (Features) --- */}
        <div className="mb-24">

          <div className="text-center mb-22 px-22">
            <h2 className="text-lg font-semibold  tracking-wider text-gray-800">What We Do</h2>
            <p className="text-gray-700 text-lg mt-2">We provide tools and spaces designed to support your emotional well-being, wherever you are in your journey.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            <FeatureCard img="/icons/Vector (5).png" title="Safe Spaces" desc="A place where you can express freely — anonymously or openly — without judgment." />
            <FeatureCard img="/icons/Vector (4).png" title="Guided Journaling" desc="Daily prompts that help you reflect, release stress, and understand your emotions better." />
            <FeatureCard img="/icons/Vector (3).png" title="Mood Check-Ins" desc="Quick check-ins to track how you’re feeling and see your emotional patterns over time." />
            <FeatureCard img="/icons/Vector (2).png" title="Calming Tools" desc="Breathing exercises, grounding techniques, and micro-activities to help you feel better." />
            <FeatureCard img="/icons/Vector (1).png" title="Community Stories" desc="Real stories from people who’ve walked similar paths — reminders that you’re not alone." />
            <FeatureCard img="/icons/Vector.png" title="Resource Library" desc="Curated articles, mental-health insights, and self-care guides for everyday support." />
          </div>
          <p className="text-gray-900 text-center text-md m-12">"Healing isn't linear — but it's real."</p>
        </div>

        {/* --- Our Mission --- */}
        <div className="text-center mb-24 mt-56 px-22">
          <h2 className="text-lg font-semibold  mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-8">
            To create a world where emotional support is accessible to everyone, where vulnerability is met with compassion, and where no one has to navigate their mental health journey alone. We believe in the power of human connection to heal, uplift, and transform lives.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Badge color="bg-[#FFE1E1] text-black" text="Join the Community" />
            <Badge color="bg-[#D9FFF9] text-black" text="Explore Tools" />
            <Badge color="bg-[#D7D8FF] text-black" text="Read Stories" />
            <Badge color="bg-[#FFFFD5] text-black" text="Get Support" />
          </div>
        </div>
        <div className="text-center  mt-56 px-22">
          <h2 className="text-lg font-semibold mb-4">The Hearts Behind Heartivy</h2>
          <p className="text-gray-700 text-lg mb-8">
            We're a team of empaths, listeners, and advocates who believe in the healing power of connection.
          </p>
        </div>
        {/* --- Team Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-40 mb-48 mt-22">
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
        <div className="text-center  mt-56 px-22">
          <h2 className="text-lg font-semibold mb-4">The Hearts Behind Heartivy</h2>
          <p className="text-gray-700 text-lg mb-8">
            We're a team of empaths, listeners, and advocates who believe in the healing power of connection.
          </p>
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
      <h3 className=" text-[17px] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}

type BadgeProps = {
  color: string;
  text: string;
};

function Badge({ color, text }: BadgeProps) {
  return (
    <span className={`${color} px-6 py-2 rounded-full text-[14px] font-bold shadow-[inset_0_0_18px_rgba(255,255,255,0.4),inset_0_0_6px_rgba(0,0,0,0.1)]`}>
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