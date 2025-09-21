import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-blue-500 transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services / Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/category/men"
                className="hover:text-blue-500 transition-colors"
              >
                Men
              </a>
            </li>
            <li>
              <a
                href="/category/women"
                className="hover:text-blue-500 transition-colors"
              >
                Women
              </a>
            </li>
            <li>
              <a
                href="/category/kids"
                className="hover:text-blue-500 transition-colors"
              >
                Kids
              </a>
            </li>
            <li>
              <a
                href="/category/accessories"
                className="hover:text-blue-500 transition-colors"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">123 Street Name, City, Country</p>
          <p className="mb-2">Email: support@example.com</p>
          <p className="mb-2">Phone: +123 456 7890</p>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Subscribe to our newsletter for updates!
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
