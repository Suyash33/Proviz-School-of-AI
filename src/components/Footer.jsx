import React from 'react';
import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">Proviz AI</span>
            </div>
            <p className="text-sm">
              Empowering the next generation of AI innovators through cutting-edge education
              and practical experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Programs', 'About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>123 AI Avenue, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>admissions@proviz.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest AI trends and school updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Proviz School of AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
