'use client';

import React, { useState } from 'react';
import { Menu, X, Heart, Search, Users, MessageCircle, Zap, Leaf, Star, TrendingUp } from 'lucide-react';

export default function CommunityPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Anxiety', 'Healing', 'Relationships', 'Self-Growth', 'Stress Relief', 'Meditation'];

  const circles = [
    {
      title: 'Anxiety & Overthinking Circle',
      description: 'A safe space to share your feelings, be heard, and grow together',
      members: 2345,
      icon: <Heart className="w-8 h-8 text-purple-600" fill="currentColor" />,
      color: 'bg-purple-100',
      category: 'Anxiety'
    },
    {
      title: 'Self-Growth Journey',
      description: 'Explore practices designed for personal growth and healing',
      members: 1876,
      icon: <Zap className="w-8 h-8 text-green-600" fill="currentColor" />,
      color: 'bg-green-100',
      category: 'Self-Growth'
    },
    {
      title: 'Healing After Heartbreak',
      description: 'A gentle space to process loss, share your story, and find hope',
      members: 3421,
      icon: <Heart className="w-8 h-8 text-pink-600" fill="currentColor" />,
      color: 'bg-pink-100',
      category: 'Healing'
    },
    {
      title: 'Calm Corner (Mindfulness)',
      description: 'Practice meditation, share peaceful moments, and find tranquility together',
      members: 4532,
      icon: <Leaf className="w-8 h-8 text-teal-600" fill="currentColor" />,
      color: 'bg-teal-100',
      category: 'Meditation'
    },
    {
      title: 'Loneliness Support Group',
      description: 'You are not alone. Connect with caring hearts who truly understand your journey',
      members: 2156,
      icon: <MessageCircle className="w-8 h-8 text-blue-600" fill="currentColor" />,
      color: 'bg-blue-100',
      category: 'Relationships'
    },
    {
      title: 'Daily Meditation Circle',
      description: 'Start your day with hope, inspiration, and encouragement from inspired souls',
      members: 3789,
      icon: <Star className="w-8 h-8 text-yellow-600" fill="currentColor" />,
      color: 'bg-yellow-100',
      category: 'Meditation'
    }
  ];

  const filteredCircles = selectedCategory === 'All' 
    ? circles 
    : circles.filter(circle => circle.category === selectedCategory);

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
              <a href="/support" className="text-sm font-medium text-gray-700 hover:text-purple-600">Get Support</a>
              <a href="/community" className="text-sm font-medium text-purple-600 font-bold">Community</a>
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
              <a href="/support" className="block text-gray-700 hover:text-purple-600">Get Support</a>
              <a href="/community" className="block text-purple-600 font-bold">Community</a>
              <a href="/contact" className="block text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Welcome to the Heartivy Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A gentle space where you can share, connect, and grow with thousands of caring hearts who understand your journey.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-lg shadow-lg px-6 py-4 border border-gray-200">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for topics, stories or circles..." 
                className="ml-4 outline-none w-full text-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Community Circles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Support Circles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCircles.map((circle, idx) => (
              <div key={idx} className={`${circle.color} rounded-2xl p-8 hover:shadow-xl transition cursor-pointer`}>
                <div className="mb-6">{circle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{circle.title}</h3>
                <p className="text-gray-700 mb-6">{circle.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={18} />
                    <span className="font-semibold">{circle.members.toLocaleString()} members</span>
                  </div>
                </div>
                <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-50 transition">
                  Join Circle →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">🤝 Community Safety & Emotional Guidelines</h3>
            <p className="text-gray-700 mb-8">We appreciate every act of kindness that makes this community feel like home.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="currentColor" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Share gently, listen with kindness</h4>
                    <p className="text-gray-700">Every story matters, and we hear each one with care.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Your safety and privacy come first</h4>
                    <p className="text-gray-700">Confidentiality is sacred and respected here.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">No judgment, No pressure</h4>
                    <p className="text-gray-700">Everyone's journey is unique and valuable.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <Leaf className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">We're here to uplift, not to diagnose</h4>
                    <p className="text-gray-700">Seek professional help when you need more support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Ready to Find Your Circle?</h3>
          <p className="text-lg mb-8 text-purple-100">
            Join our community and connect with people who truly understand your journey.
          </p>
          <a href="/signup" className="inline-block bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition">
            Join the Community
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="font-bold text-lg">Heartivy</span>
              </div>
              <p className="text-gray-400">Building a community where every heart matters.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Community</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">Join a Circle</button></li>
                <li><button className="hover:text-white transition">Events</button></li>
                <li><button className="hover:text-white transition">Guidelines</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">Crisis Help</button></li>
                <li><button className="hover:text-white transition">Chat Support</button></li>
                <li><button className="hover:text-white transition">Resources</button></li>
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
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center">© 2025 Heartivy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}