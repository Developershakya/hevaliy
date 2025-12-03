import Navbar from '../components/Hearder'; // Header component
import Footer from '../components/Footer'; // Footer component
import Image from 'next/image';
import Link from 'next/link';

// Icons jinka upyog features section mein ho sakta hai
import { Heart, BookOpen, Compass, Sun, Shield, MessageSquare, Quote, ArrowRight } from 'lucide-react';

// --- Helper Components ---

// Component for the centered Testimonial boxes
const TestimonialCard = ({ quote, author, date }: { quote: string; author: string; date: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 min-h-full">
    <Quote size={24} className="text-purple-400 mb-3" />
    <p className="text-gray-700 italic text-sm mb-4">&ldquo; {quote} &rdquo;</p>
    <div className="border-t border-gray-100 pt-3 text-xs text-gray-500">
      <p className="font-semibold text-gray-800">{author}</p>
      <p>{date}</p>
    </div>
  </div>
);

// Component for the small features grid (Find Your Way section)
const SmallFeatureItem = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ size: number; className: string }>; title: string; description: string }) => (
  <div className="flex items-start gap-4 p-4">
    <Icon size={24} className="text-purple-600 shrink-0 mt-1" />
    <div>
      <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);


// --- Main Page Component ---
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">

      {/* 1. Header/Navbar Import */}
      <Navbar />

      <main className="grow">

        {/* ---------------------------------------------------- */}
        {/* 1. HERO SECTION (Image Background) */}
        {/* ---------------------------------------------------- */}
        <section className="relative h-[600px] w-full flex items-center justify-center text-white text-center overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Landing Page Image ko as a background use kar rahe hain */}
            <Image
              src="/public/images/Rectangle 41998.png" // You will need to extract and use the background image path
              alt="Therapy session background"
              fill
              style={{ objectFit: 'cover' }}
              className="brightness-50"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto p-4">
            <p className="text-sm uppercase tracking-widest font-semibold mb-3">HEARTIVY</p>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              Every Heart Deserves <br /> Care and Understanding
            </h1>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              We provide a safe, anonymous space for emotional support, helping you find your path to healing and peace.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition flex items-center gap-2">
                Get Support <ArrowRight size={18} />
              </button>
              <Link href="/about" className="bg-white bg-opacity-20 hover:bg-opacity-30 border border-white text-white font-semibold py-3 px-8 rounded-full transition">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-100" />

        <section className="py-16 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif italic text-gray-800 mb-12">
            Where Your Heart <br /> Can Finally Rest
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Healing is a journey—and you are already on it. We pair cutting-edge AI technology with real human connection to provide relief exactly when and how you need it.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {/* Placeholder Images - Replace src with your image paths */}
            <div className="aspect-4/3 relative rounded-lg overflow-hidden">
              <Image src="/images/family.jpg" alt="Family" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="aspect-4/3 relative rounded-lg overflow-hidden md:col-span-2">
              <Image src="/images/couple_talking.jpg" alt="Couple talking" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="aspect-4/3 relative rounded-lg overflow-hidden">
              <Image src="/images/person_meditating.jpg" alt="Meditating person" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Therapy for the modern landscape</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our platform offers discreet, accessible support. No waiting rooms, no judgment—just a safe space to breathe and process your emotions, whenever you need it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Designed for real life changes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe everyone deserves quality mental health care. Our tools are built to integrate seamlessly into your busy schedule, ensuring consistent, high-quality emotional support.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-100" />

        <section className="py-16 max-w-7xl mx-auto px-6">
          <h3 className="text-center text-3xl font-bold text-gray-800 mb-12">Find Your Way to Healing</h3>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature List (Left & Right) */}
            <div className="space-y-6">
              <SmallFeatureItem icon={BookOpen} title="Personalized Therapy" description="Access licensed therapists matched specifically to your needs and goals." />
              <SmallFeatureItem icon={Compass} title="Guided Meditations" description="Daily meditation and relaxation audios to calm your mind and reduce anxiety." />
              <SmallFeatureItem icon={Sun} title="Mood & Goal Tracking" description="Intuitive tracking tools to monitor your progress and celebrate milestones." />
            </div>

            {/* Center Image */}
            <div className="relative aspect-3/4 rounded-xl overflow-hidden shadow-2xl">
              <Image src="/images/hand_holding.jpg" alt="Two hands holding" fill style={{ objectFit: 'cover' }} />
            </div>

            {/* Feature List (Right) */}
            <div className="space-y-6">
              <SmallFeatureItem icon={Shield} title="Confidential Chat Support" description="24/7 anonymous text support for immediate relief during tough moments." />
              <SmallFeatureItem icon={MessageSquare} title="Supportive Community" description="Join judgment-free group circles guided by peer support specialists." />
              <SmallFeatureItem icon={Heart} title="Tools for Resilience" description="Simple, research-backed techniques to build emotional strength and coping skills." />
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-100" />

        <section className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            What Are People <br /> Saying About Us
          </h2>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="I felt heard and validated for the first time in years. The community forums were a lifesaver when I needed immediate connection."
              author="Sanjana R."
              date="Feb 12, 2025"
            />
            <TestimonialCard
              quote="The matching process with my therapist was seamless. The personalized care truly accelerated my journey towards healing and self-acceptance."
              author="Aarav K."
              date="Mar 01, 2025"
            />
            <TestimonialCard
              quote="The mood tracker and daily exercises made self-care feel accessible, not like a chore. Heartivy changed my relationship with my own mental health."
              author="Priya S."
              date="Mar 15, 2025"
            />
            <TestimonialCard
              quote="I appreciate the anonymity. It allowed me to be completely honest about my struggles without the fear of judgment."
              author="Rahul V."
              date="Apr 05, 2025"
            />
          </div>
        </section>

        <hr className="my-12 border-gray-100" />


        <section className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet the Team</h2>

          {/* Team Images Grid (Using placeholder images) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-4/5 relative rounded-xl overflow-hidden">
              <Image src="/images/team_member_1.jpg" alt="Team member 1" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="aspect-4/5 relative rounded-xl overflow-hidden">
              <Image src="/images/team_member_2.jpg" alt="Team member 2" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="aspect-4/5 relative rounded-xl overflow-hidden">
              <Image src="/images/team_member_3.jpg" alt="Team member 3" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

      </main>

      {/* 2. Footer Import */}
      <Footer />
    </div>
  );
}