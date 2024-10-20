import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SmartKids</h3>
            <p className="text-sm">Empowering the next generation of coders.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="/" className="hover:text-blue-400">Home</a></li>
              <li className="mb-2"><a href="/courses" className="hover:text-blue-400">Courses</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">Kimathi Street</p>
            <p className="text-sm mb-2">Nairobi, TC 00100</p>
            <p className="text-sm mb-2">Phone: (+254) 790-223386</p>
            <p className="text-sm">Email: info@smartkids.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@smartkidske?_t=8qhKNxUMczO&_r=1" className="text-white hover:text-blue-400"><Facebook size={24} /></a>
              <a href="https://www.tiktok.com/@smartkidske?_t=8qhKNxUMczO&_r=1" className="text-white hover:text-blue-400"><Twitter size={24} /></a>
              <a href="https://www.instagram.com/smart_kidske/profilecard/?igsh=MWU2bHNtMzRkeTR0bA==" className="text-white hover:text-blue-400"><Instagram size={24} /></a>
              <a href="https://www.tiktok.com/@smartkidske?_t=8qhKNxUMczO&_r=1" className="text-white hover:text-blue-400"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          &copy; 2024 SmartKids. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;