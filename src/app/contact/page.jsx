'use client';

import React, { useState } from 'react';
import { Menu, X, Heart, Mail, Phone, MapPin, MessageSquare, Clock, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
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
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-purple-600">Home</Link>
              <Link href="/marketing/about" className="text-sm font-medium text-gray-700 hover:text-purple-600">About</Link>
              <Link href="/support" className="text-sm font-medium text-gray-700 hover:text-purple-600">Get Support</Link>
              <Link href="/community" className="text-sm font-medium text-gray-700 hover:text-purple-600">Community</Link>
              <Link href="/contact" className="text-sm  text-purple-600 font-bold">Contact</Link>
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
              <Link href="/" className="block text-gray-700 hover:text-purple-600">Home</Link>
              <Link href="/about" className="block text-gray-700 hover:text-purple-600">About</Link>
              <Link href="/support" className="block text-gray-700 hover:text-purple-600">Get Support</Link>
              <Link href="/community" className="block text-gray-700 hover:text-purple-600">Community</Link>
              <Link href="/contact" className="block text-purple-600 font-bold">Contact</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-semibold mb-4">Contact Us</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Let's Get in Touch.</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sometimes reaching out is the first step toward feeling a little lighter. We're here — listening, without judgment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-lg mb-12">
            If you have questions, need support, or simply want to share feedback, we're here — listening, without judgment.
          </p>
          <p className="text-center text-gray-600 text-lg mb-12">
            If you prefer, you can also reach us directly at:
          </p>
          <div className="text-center mb-12">
            <p className="text-2xl font-semibold text-gray-900 mb-2">support@heartivy.com</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition cursor-pointer">
              <div className="inline-block bg-white p-4 rounded-full mb-6">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Support Chat</h3>
              <p className="text-gray-700 mb-4">Get instant help from our support team during business hours.</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">Start Chat →</button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition cursor-pointer">
              <div className="inline-block bg-white p-4 rounded-full mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-700 mb-4">Send us an email and we'll respond within 24 hours.</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Send Email →</button>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center hover:shadow-lg transition cursor-pointer">
              <div className="inline-block bg-white p-4 rounded-full mb-6">
                <Clock className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Available 24/7</h3>
              <p className="text-gray-700 mb-4">Crisis support always available when you need us most.</p>
              <button className="text-pink-600 font-semibold hover:text-pink-700">Get Help Now →</button>
            </div>
          </div>

          {/* In Crisis Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center mb-20">
            <h3 className="text-3xl font-bold mb-4">In a Crisis?</h3>
            <p className="text-lg mb-8 text-purple-100 max-w-2xl mx-auto">
              If you're experiencing a mental health emergency, please reach out to emergency services or a crisis helpline immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                Crisis Helpline
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
                Emergency Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Send us a Message</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Inquiry Type</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 appearance-none bg-white cursor-pointer"
                >
                  <option value="">Select your inquiry type...</option>
                  <option value="support">Support Chat</option>
                  <option value="professional">Professional Counseling</option>
                  <option value="community">Community Circles</option>
                  <option value="wellness">Wellness Resources</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your main text here..."
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 resize-none"
              ></textarea>
              <div className="text-right mt-2 text-gray-500 text-sm">0/500</div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Submit Form
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block bg-purple-100 p-3 rounded-full mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">support@heartivy.com</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block bg-green-100 p-3 rounded-full mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">+1 (800) HEARTIVY</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block bg-pink-100 p-3 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'How do I join a support circle?',
                a: 'Simply log into your account, navigate to the Community section, and browse available circles. Click "Join" on any circle that resonates with you!'
              },
              {
                q: 'Is my information confidential?',
                a: 'Absolutely! Your privacy and confidentiality are paramount. We follow strict data protection regulations and encrypt all personal information.'
              },
              {
                q: 'Can I talk to a professional counselor?',
                a: 'Yes! We have licensed professionals available for one-on-one sessions. Visit our Get Support section to schedule an appointment.'
              },
              {
                q: 'What if I\'m in crisis?',
                a: 'If you\'re experiencing a mental health emergency, please contact local emergency services or our 24/7 crisis helpline immediately.'
              },
              {
                q: 'How much does it cost?',
                a: 'Community circles and many resources are free. Professional counseling services have different pricing plans available.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.q}</h4>
                <p className="text-gray-700">{item.a}</p>
              </div>
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
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="font-bold text-lg">Heartivy</span>
              </div>
              <p className="text-gray-400">Building a community where every heart matters.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">Get Support</button></li>
                <li><button className="hover:text-white transition">Community</button></li>
                <li><button className="hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button className="hover:text-white transition">About Us</button></li>
                <li><button className="hover:text-white transition">Careers</button></li>
                <li><button className="hover:text-white transition">Blog</button></li>
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