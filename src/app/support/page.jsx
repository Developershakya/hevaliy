
'use client';

import React, { useState } from 'react';
import { Menu, X, Heart, MessageCircle, Book, Headphones, Play, AlertCircle, ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const helpTopics = [
    {
      title: 'Getting Started',
      description: 'Welcome to Heartivy! This guide will help you understand the platform and make the most of the emotional support tools we built for you.',
      icon: '🚀'
    },
    {
      title: 'Account Setup & Management',
      description: 'Learn how to create your profile, manage preferences, and customize your emotional experience on Heartivy.',
      icon: '⚙️'
    },
    {
      title: 'Using Heartivy',
      description: 'Master navigating the platform, joining support circles, starting conversations, and accessing wellness resources.',
      icon: '💜'
    },
    {
      title: 'Billing & Subscriptions',
      description: 'Information about premium features, payment methods, and subscription management.',
      icon: '💳'
    },
    {
      title: 'Safety & Support',
      description: 'Important safety guidelines to ensure you have the best and most secure experience on Heartivy.',
      icon: '🛡️'
    },
    {
      title: 'Trust & Protection',
      description: 'Your privacy and safety are our top priorities. Learn how we protect your information and support.',
      icon: '🔒'
    }
  ];

  const resources = [
    {
      title: 'Crisis Support',
      description: 'Immediate assistance if you\'re in emotional distress',
      link: '#'
    },
    {
      title: 'Self-Help Tools',
      description: 'Guided exercises and resources for personal wellness',
      link: '#'
    },
    {
      title: 'Articles & Guides',
      description: 'Expert-written content on mental health topics',
      link: '#'
    },
    {
      title: 'Meditation & Breathing',
      description: 'Audio guides for mindfulness and relaxation',
      link: '#'
    }
  ];

  const faqs = [
    {
      q: 'Creating an Account',
      a: 'Click on the "Sign up" button, enter your email, set a password, and complete your profile. You can also sign up anonymously if you prefer.'
    },
    {
      q: 'Onboarding Overview',
      a: 'Once you join, we\'ll walk you through a short onboarding flow where you can choose whether you want to talk to someone, join a community circle, or explore self-help resources.'
    },
    {
      q: 'Navigating the Platform',
      a: 'Use the sidebar or main navigation bar to access Support Chats, Journals, Community, and Resources. The Home tab shows your mood tracker, daily affirmations, and quick links.'
    },
    {
      q: 'Find Steps for New Users',
      a: 'Try adding your first journal entry — a safe space just for you. Join a beginner-friendly community circle like "Calm Corner." Explore wellness tools such as breathing exercises or guided reflections.'
    },
    {
      q: 'Need More Help?',
      a: 'Visit Support — talk to us. Or email support@heartivy.com. You\'re not alone in this — reach out anytime.'
    }
  ];

  const toggleFaq = (idx) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Heartivy</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-purple-600">Home</a>
              <a href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600">About</a>
              <a href="/support" className="text-sm font-medium text-purple-600 font-bold">Get Support</a>
              <a href="/community" className="text-sm font-medium text-gray-700 hover:text-purple-600">Community</a>
              <a href="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="/login" className="hidden md:block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300">Login ↗</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <a href="/" className="block text-gray-700 hover:text-purple-600">Home</a>
              <a href="/about" className="block text-gray-700 hover:text-purple-600">About</a>
              <a href="/support" className="block text-purple-600 font-bold">Get Support</a>
              <a href="/community" className="block text-gray-700 hover:text-purple-600">Community</a>
              <a href="/contact" className="block text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Help Centre</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We know that reaching out for support or navigating a new platform can feel overwhelming. That's why we created this Help Centre — a gentle space where you can find answers, guidance, and reassurance every step of the way.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-lg shadow-lg px-6 py-4 border border-gray-200">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ml-4 outline-none w-full text-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {['Getting Started', 'Account Setup', 'Billing', 'Safety', 'Privacy'].map((topic) => (
              <button
                key={topic}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition font-semibold text-sm"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Topics Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Help Centre</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            Find answers and get support across different topics related to Heartivy.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpTopics.map((topic, idx) => (
              <button
                key={idx}
                className="bg-gray-50 hover:bg-gray-100 transition rounded-xl p-8 text-left"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-700">{topic.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Image src={""} width={100} alt="logo" className="w-5 h-5" fill="white" />
                </div>
                <span className="font-bold text-lg">Heartivy</span>
              </div>
              <p className="text-gray-400">Building a community where every heart matters.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">Crisis Helpline</button></li>
                <li><button className="hover:text-white transition">Chat Support</button></li>
                <li><button className="hover:text-white transition">Find a Therapist</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">Articles</button></li>
                <li><button className="hover:text-white transition">Self-Help Tools</button></li>
                <li><button className="hover:text-white transition">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">About</button></li>
                <li><button className="hover:text-white transition">Contact</button></li>
                <li><button className="hover:text-white transition">Privacy</button></li>
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-800 pt-8 md:flex justify-between block space-y-4">
            <p className="text-gray-400 text-center">© 2025 Heartivy. All rights reserved.</p>
            <div className="flex justify-around gap-10">
              <Link href={"#"} className="">Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}