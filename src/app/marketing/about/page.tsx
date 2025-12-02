'use client';

import React, { useState } from 'react';
import { Menu, X, Heart, Users, Target, Zap } from 'lucide-react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: 'Mental health advocate with 10+ years in the wellness industry'
    },
    {
      name: 'Rahul Kapoor',
      role: 'Chief Therapist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Licensed psychologist and counselor passionate about community support'
    },
    {
      name: 'Anjali Desai',
      role: 'Community Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Dedicated to building safe and inclusive spaces for everyone'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-10 h-10 text-purple-600" fill="currentColor" />,
      title: 'Compassion First',
      description: 'Every decision we make is guided by compassion and kindness toward all individuals.'
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: 'Community Driven',
      description: 'We believe in the power of community to heal and support one another through challenges.'
    },
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: 'Accessibility',
      description: 'Mental health support should be available to everyone, regardless of their background.'
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" fill="currentColor" />,
      title: 'Innovation',
      description: 'We continuously improve our platform to provide the best support experience possible.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Heartivy founded with a mission to democratize mental health support' },
    { year: '2021', event: 'Reached 10,000 active members and launched 25 support circles' },
    { year: '2022', event: 'Expanded to 50,000+ members across multiple communities' },
    { year: '2023', event: 'Partnered with 100+ mental health professionals' },
    { year: '2024', event: 'Reached 100,000+ active members globally' },
    { year: '2025', event: 'Expanding international presence with localized support' }
  ];

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
              <a href="/about" className="text-sm font-medium text-purple-600 font-bold">About</a>
              <a href="/support" className="text-sm font-medium text-gray-700 hover:text-purple-600">Get Support</a>
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
              <a href="/about" className="block text-purple-600 font-bold">About</a>
              <a href="/support" className="block text-gray-700 hover:text-purple-600">Get Support</a>
              <a href="/community" className="block text-gray-700 hover:text-purple-600">Community</a>
              <a href="/contact" className="block text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Because no one deserves to feel alone in their pain.
            </h1>
            <p className="text-xl text-gray-600">
              Heartivy was founded on a simple belief: everyone deserves access to mental health support, community, and understanding. We're building a space where vulnerability is celebrated and healing is supported.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg mb-4">
                Heartivy began with a personal journey. Our founder, Priya Sharma, struggled with anxiety and loneliness while navigating the complexities of modern life. Despite having access to resources, she felt isolated and misunderstood.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                She realized that what the world needed wasn't another clinical platform, but a compassionate community where people could be themselves without judgment. A space where shared experiences could lead to real healing.
              </p>
              <p className="text-gray-700 text-lg">
                That's how Heartivy was born. Today, we're proud to support over 100,000 members who have found connection, hope, and healing through our platform.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" 
                alt="Our Story" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To create a safe, accessible, and compassionate platform where individuals can find mental health support, build meaningful connections, and discover their path to healing without judgment or barriers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                A world where mental health is prioritized equally with physical health, where everyone has access to supportive communities, and where seeking help is celebrated as an act of strength and self-love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-1 h-20 bg-purple-200 mt-4"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h4 className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</h4>
                  <p className="text-gray-700 text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100K+</div>
              <p className="text-lg text-purple-100">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-lg text-purple-100">Support Circles</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500K+</div>
              <p className="text-lg text-purple-100">Stories Shared</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg text-purple-100">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Join Our Movement</h3>
          <p className="text-xl text-gray-600 mb-8">
            Be part of a community that's changing the way people experience mental health support.
          </p>
          <a href="/signup" className="inline-block bg-purple-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-purple-700 transition">
            Get Started Today
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
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">About Us</button></li>
                <li><button className="hover:text-white transition">Our Mission</button></li>
                <li><button className="hover:text-white transition">Careers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">Get Support</button></li>
                <li><button className="hover:text-white transition">Community</button></li>
                <li><button className="hover:text-white transition">Contact Us</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">Privacy Policy</button></li>
                <li><button className="hover:text-white transition">Terms of Service</button></li>
                <li><button className="hover:text-white transition">Cookie Policy</button></li>
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