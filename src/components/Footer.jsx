import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>123 Street Name, City, Country</p>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
