"use client";
import Navbar from "../../components/ui/NavBar";
import Footer from "../../components/Footer";
import { Shield, User, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { useState } from "react";
import Image from "next/image";

const switzer = localFont({
  src: "../../../public/fonts/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-switzer",
});

// --- Helper Components ---

function FeatureCard({ src, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Image Inside Circle */}
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Image
          src={src}
          alt={title}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      <h4 className="font-medium text-[13px] mb-1">{title}</h4>
      <p className="text-[12px] leading-3 font-light text-gray-500">
        {description}
      </p>
    </div>
  );
}

// 2. Left Navigation Sidebar Component
function HelpCentreNav({ activeSection, setActiveSection }) {
  const navItems = [
    { title: "Get Started", links: ["Getting set up", "How to get support"] },
    { title: "Account Setup & Management", links: ["Profile", "Settings"] },
    { title: "Billing & Subscriptions", links: ["Plans", "Payment"] },
    { title: "Safety & Security", links: ["Safety", "Security"] },
    { title: "Trust & Protection", links: ["Trust", "Protection"] },
  ];

  return (
    <div className="w-57 shrink-0 pt-8 border-r border-gray-100 pr-8 sticky top-0 self-start">
      <h3 className="text-sm text-gray-800 mb-4 font0md">Help Centre</h3>
      <p className="text-xs text-gray-600 mb-6">Find answers and get support</p>

      <div className="p-3">
        <ul className="space-y-5">
          {navItems.map((section, index) => (
            <li key={index}>
              <div
                onClick={() => setActiveSection(section.title)}
                className={`flex items-center justify-between text-xs mb-2 cursor-pointer transition-colors ${
                  activeSection === section.title
                    ? "text-purple-600 font-medium"
                    : "text-black hover:text-purple-600"
                }`}
              >
                {section.title}
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// --- Main Page Component ---
export default function SupportPage() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("General");
  const [activeSection, setActiveSection] = useState("Get Started");

  // Content for different sections
  const sectionContent = {
    "Get Started": {
      title: "Getting Started",
      content: (
        <>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-6 bg-[#F3F8FD] border-blue-100 border p-4 rounded-lg">
            Welcome to Heartivy! We are really glad you are here. This guide
            will help you understand the platform and make the most of the
            emotional support tools we have built for you.
          </p>

          <ol className="space-y-6 list-none pl-0">
            <li>
              <h3 className="text-sm mb-2">1. Signing Up</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>
                  Click the{" "}
                  <Link href="/auth/signup">
                    <sub className="font-bold text-[13px]">Sign Up</sub>
                  </Link>{" "}
                  or{" "}
                  <Link href="/auth/signup">
                    <sub className="font-bold text-[13px]">Create Account</sub>
                  </Link>{" "}
                  button.
                </li>
                <li>You can join with an email or continue anonymously.</li>
                <li>
                  All information remains private at the highest security level.
                </li>
                <li>Review our emotional safety guidelines to continue.</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">2. Onboarding Checklist</h3>
              <p className="text-sm text-gray-600 mb-2">
                Once you join, we will walk you through a short onboarding flow.
                You can quickly set goals, such as:
              </p>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>To talk to someone</li>
                <li>To learn coping skills</li>
                <li>To join community circles</li>
                <li>To track my daily mood</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                Customize your notification and privacy settings at any time.
              </p>
            </li>

            <li>
              <h3 className="text-sm mb-2">3. Navigating the Platform</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>
                  The <Link href="/home"><sub className="font-bold text-[13px]">Home</sub></Link> shows
                  the navigation bar to access{" "}
                  <Link href="/support/chat"><sub className="font-bold text-[13px]">Support Chats</sub></Link>,{" "}
                  <Link href="/community"><sub className="font-bold text-[13px]">Journal Community</sub></Link>
                  , or <Link href="/resources"><sub className="font-bold text-[13px]">Resources</sub></Link>.
                </li>
                <li>
                  The <Link href="/home"><sub className="font-bold text-[13px]">Home</sub></Link> tab
                  shows your mood tracker, daily affirmations, and quick tools.
                </li>
                <li>
                  The <Link href="/support"><sub className="font-bold text-[13px]">Support</sub></Link> tab
                  lets you book professional counseling or find a therapist.
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">4. First Steps for New Users</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>
                  Try the{" "}
                  <sub className="font-bold text-[13px]">
                    Quick Comfort Journey
                  </sub>{" "}
                  — a safe space just for you.
                </li>
                <li>
                  Join a beginner-friendly community circle like{" "}
                  <sub className="font-bold text-[13px]">Calm Corner</sub> or{" "}
                  <sub className="font-bold text-[13px]">Letting Go</sub>.
                </li>
                <li>
                  Spend five minutes with simple breathing exercises or guided
                  reflections.
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">5. Need More Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                If you ever feel stuck or unsure, you are not alone — reach out
                anytime.
              </p>
              <p className="text-sm text-gray-600">
                <sub className="font-bold text-[13px]">Visit</sub> Support Talk
                to Us
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <sub className="font-bold text-[13px]">Or email us at</sub>:{" "}
                <a
                  href="mailto:support@heartivy.com"
                  className="text-purple-600 hover:underline"
                >
                  support@heartivy.com
                </a>
              </p>
            </li>
          </ol>
        </>
      ),
    },
    "Account Setup & Management": {
      title: "Account Setup & Management",
      content: (
        <>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-6 bg-[#F3F8FD] border-blue-100 border p-4 rounded-lg">
            Learn how to set up and manage your Heartivy account, customize your
            profile, and adjust your preferences.
          </p>

          <ol className="space-y-6 list-none pl-0">
            <li>
              <h3 className="text-sm mb-2">1. Profile Setup</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Navigate to your profile settings from the top menu</li>
                <li>Add a display name or remain anonymous</li>
                <li>Choose your preferred theme and language</li>
                <li>Set your emotional wellness goals</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">2. Privacy Settings</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Control who can see your profile and activities</li>
                <li>Manage your anonymity preferences</li>
                <li>Set data sharing preferences</li>
                <li>Configure visibility in community circles</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">3. Notification Preferences</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Choose which notifications you want to receive</li>
                <li>Set quiet hours for uninterrupted rest</li>
                <li>Enable mood check-in reminders</li>
                <li>Customize email and push notification settings</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">4. Account Security</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Update your password regularly</li>
                <li>Enable two-factor authentication</li>
                <li>Review login activity and connected devices</li>
                <li>Set up account recovery options</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">5. Need Help?</h3>
              <p className="text-sm text-gray-600 mt-1">
                <sub className="font-bold text-[13px]">Contact us at</sub>:{" "}
                <a
                  href="mailto:support@heartivy.com"
                  className="text-purple-600 hover:underline"
                >
                  support@heartivy.com
                </a>
              </p>
            </li>
          </ol>
        </>
      ),
    },
    "Billing & Subscriptions": {
      title: "Billing & Subscriptions",
      content: (
        <>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-6 bg-[#F3F8FD] border-blue-100 border p-4 rounded-lg">
            Understand our pricing plans, manage your subscription, and handle
            billing-related queries.
          </p>

          <ol className="space-y-6 list-none pl-0">
            <li>
              <h3 className="text-sm mb-2">1. Available Plans</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>
                  <sub className="font-bold text-[13px]">Free Plan</sub>: Access
                  to basic features and community support
                </li>
                <li>
                  <sub className="font-bold text-[13px]">Plus Plan</sub>:
                  Additional therapy sessions and premium resources
                </li>
                <li>
                  <sub className="font-bold text-[13px]">Premium Plan</sub>:
                  Unlimited access to all features and priority support
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">2. Managing Your Subscription</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Upgrade or downgrade your plan anytime</li>
                <li>Cancel your subscription without penalties</li>
                <li>View billing history and invoices</li>
                <li>Update payment methods securely</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">3. Payment Methods</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>We accept major credit and debit cards</li>
                <li>Digital wallets and UPI payments supported</li>
                <li>All transactions are encrypted and secure</li>
                <li>Auto-renewal can be disabled in settings</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">4. Refunds & Cancellations</h3>
              <p className="text-sm text-gray-600 mb-2">
                We offer a 14-day money-back guarantee on all paid plans.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <sub className="font-bold text-[13px]">
                  For refund requests
                </sub>
                :{" "}
                <a
                  href="mailto:billing@heartivy.com"
                  className="text-purple-600 hover:underline"
                >
                  billing@heartivy.com
                </a>
              </p>
            </li>
          </ol>
        </>
      ),
    },
    "Safety & Security": {
      title: "Safety & Security",
      content: (
        <>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-6 bg-[#F3F8FD] border-blue-100 border p-4 rounded-lg">
            Your safety and security are our top priorities. Learn about the
            measures we take to protect you.
          </p>

          <ol className="space-y-6 list-none pl-0">
            <li>
              <h3 className="text-sm mb-2">1. Data Encryption</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>All data is encrypted end-to-end</li>
                <li>Bank-level security protocols in place</li>
                <li>Regular security audits and updates</li>
                <li>Secure cloud storage with redundancy</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">2. Content Moderation</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>AI-powered content filtering for harmful material</li>
                <li>24/7 human moderation team</li>
                <li>Report abusive behavior instantly</li>
                <li>Community guidelines enforcement</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">3. Crisis Support</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Immediate crisis resources available</li>
                <li>Connect to emergency helplines</li>
                <li>Trained counselors on standby</li>
                <li>Anonymous crisis intervention options</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">4. Reporting & Blocking</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Easy-to-use reporting system</li>
                <li>Block users who make you uncomfortable</li>
                <li>All reports reviewed within 24 hours</li>
                <li>Zero tolerance for harassment or abuse</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">5. Safety Concerns?</h3>
              <p className="text-sm text-gray-600 mt-1">
                <sub className="font-bold text-[13px]">Report to</sub>:{" "}
                <a
                  href="mailto:safety@heartivy.com"
                  className="text-purple-600 hover:underline"
                >
                  safety@heartivy.com
                </a>
              </p>
            </li>
          </ol>
        </>
      ),
    },
    "Trust & Protection": {
      title: "Trust & Protection",
      content: (
        <>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-6 bg-[#F3F8FD] border-blue-100 border p-4 rounded-lg">
            Building trust and protecting our community is at the heart of
            everything we do.
          </p>

          <ol className="space-y-6 list-none pl-0">
            <li>
              <h3 className="text-sm mb-2">1. Professional Verification</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>
                  All therapists and counselors are licensed professionals
                </li>
                <li>Background checks and credential verification</li>
                <li>Continuous professional development requirements</li>
                <li>Regular quality assessments and reviews</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">2. Community Guidelines</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Respectful and supportive interactions required</li>
                <li>No judgment, discrimination, or hate speech</li>
                <li>Confidentiality and privacy respected</li>
                <li>Safe space for vulnerability and healing</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">3. Data Protection</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>GDPR and HIPAA compliant</li>
                <li>Your data is never sold to third parties</li>
                <li>Complete control over your information</li>
                <li>Right to delete all your data anytime</li>
              </ul>
            </li>

            <li>
              <h3 className="text-sm mb-2">4. Transparency</h3>
              <p className="text-sm text-gray-600 mb-2">
                We believe in complete transparency about our practices,
                policies, and how we handle your information.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <sub className="font-bold text-[13px]">
                  Questions about trust & protection?
                </sub>{" "}
                <a
                  href="mailto:trust@heartivy.com"
                  className="text-purple-600 hover:underline"
                >
                  trust@heartivy.com
                </a>
              </p>
            </li>
          </ol>
        </>
      ),
    },
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800 flex flex-col">
      <Navbar />

      <main className="grow">
        <div className={`${switzer.className} max-w-7xl mx-auto px-6 py-12`}>
          {/* Top Heading Section */}
          <div className="text-center mb-32 mt-62 max-w-2xl mx-auto">
            <h1 className="text-4xl font-semibold mb-4">Help Centre</h1>
            <p className="text-gray-500 text-md">
              We know that reaching out for support or navigating a new platform
              can feel overwhelming. That's why we created this Help Centre — a
              gentle space where you can find answers, guidance, and reassurance
              every step of the way.
            </p>
          </div>

          {/* Search Section */}
          <div className="w-full flex justify-center mb-50">
            <div className="flex gap-6 items-center">
              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type a keyword"
                  className="border border-gray-300 rounded-md py-1.5 px-2 w-47 text-[13px] outline-none focus:ring-[1px] focus:ring-gray-300 transition placeholder:text-gray-400 placeholder:px-2"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  onClick={() => setKeyword("")}
                  className="absolute right-3 top-[8px] transition"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Dropdown */}
              <select
                className="border border-gray-300 rounded-md py-1.5 px-2 pr-8 text-sm outline-none focus:ring-[1px] focus:ring-gray-300 transition cursor-pointer bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>General</option>
                <option>Account</option>
                <option>Billing</option>
                <option>Technical</option>
              </select>

              {/* Button */}
              <button className="py-1.5 px-4 bg-[#8F7A9C] text-white text-sm rounded-md transition hover:opacity-90">
                Find Answers
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div
            className={`${switzer.className} grid grid-cols-1 md:grid-cols-3 gap-8 mb-52 max-w-5xl mx-auto`}
          >
            <FeatureCard
              src="/icons/consumer-protection_11668189 1.svg"
              title="Emotional Safety & Protection"
              description="We work every day to make Heartivy a safe, anonymous, and comforting space. Learn how we protect you and the community while ensuring your emotional wellbeing."
            />
            <FeatureCard
              src="/icons/shield_16399379 1.svg"
              title="Privacy & Security"
              description="Your privacy is our priority. Discover how your identity, data, and conversations remain secure, confidential, and fully in your control."
            />
            <FeatureCard
              src="/icons/bank-account_12366380 1.svg"
              title="Managing My Account"
              description="Need help updating your preferences, notifications, or profile? This section guides you through everything you need to personalize your Heartivy experience."
            />
          </div>

          {/* Main Content Columns (Sidebar + Guide) */}
          <div className="flex flex-col lg:flex-row mb-32 p-8">
            {/* Left Sidebar (Desktop Only) */}
            <div className="hidden lg:block">
              <HelpCentreNav
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </div>

            {/* Right Content - Guide */}
            <div className="grow pt-8 max-w-5xl bg-gray-100 p-8 pl-28 border border-gray-200 border-l-3 border-t-0 border-b-0 border-r-0">
              <h2 className="text-sm mb-6 text-gray-900 border-b border-gray-100 pb-3">
                {sectionContent[activeSection].title}
              </h2>

              {sectionContent[activeSection].content}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}