import React from 'react';
import { FaFacebook, FaPinterest, FaSnapchat, FaApple, FaInstagram, FaTwitter } from "react-icons/fa";
import { Box, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 - Customer Service */}
        <div className="space-y-6">
          <div className="w-48">
            <img 
              src="/logo.png" 
              alt="Bewakoof Logo" 
              className="w-full"
            />
          </div>
          
          <div>
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">CUSTOMER SERVICE</h3>
            <ul className="space-y-3">
              <li className="hover:text-yellow-400 cursor-pointer"><a href="#">Contact Us</a></li>
              <li className="hover:text-yellow-400 cursor-pointer"><a href="#">Track Order</a></li>
              <li className="hover:text-yellow-400 cursor-pointer"><a href="#">Return Order</a></li>
              <li className="hover:text-yellow-400 cursor-pointer"><a href="#">Cancel Order</a></li>
              <li className="flex items-center gap-2">
                <Box size={20} />
                <span>15 Days Return Policy*</span>
              </li>
              <li className="flex items-center gap-2">
                <CreditCard size={20} />
                <span>Cash On Delivery*</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2 - Company */}
        <div className="space-y-6">
          <div>
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">COMPANY</h3>
            <ul className="space-y-3">
              <li className="hover:text-yellow-400 cursor-pointer"><a href="#">About Us</a></li>
              <li className="hover:text-yellow-400 cursor-pointer"><a href="#">Terms & Conditions</a></li>
              <li className="hover:text-yellow-400 cursor-pointer"><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">DOWNLOAD THE APP</h3>
            <div className="flex flex-col gap-3">
              <a href="#"><img src="/api/placeholder/160/48" alt="Google Play Store" className="cursor-pointer" /></a>
              <a href="#"><img src="/api/placeholder/160/48" alt="Apple App Store" className="cursor-pointer" /></a>
            </div>
          </div>
        </div>

        {/* Column 3 - Connect */}
        <div className="space-y-6">
          <div>
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">CONNECT WITH US</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <a href="#" className="hover:text-yellow-400 flex items-center gap-2">
                  <FaFacebook size={20} />
                  <span>4.7M People like this</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="#" className="hover:text-yellow-400 flex items-center gap-2">
                  <FaInstagram size={20} />
                  <span>1M People like this</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-yellow-400"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-yellow-400"><FaPinterest size={20} /></a>
                <a href="#" className="hover:text-yellow-400"><FaSnapchat size={20} /></a>
                <a href="#" className="hover:text-yellow-400"><FaApple size={20} /></a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">100% SECURE PAYMENT</h3>
            <div className="flex flex-wrap gap-2">
              <a href="#"><img src="/api/placeholder/40/24" alt="Google Pay" className="h-6" /></a>
              <a href="#"><img src="/api/placeholder/40/24" alt="Paytm" className="h-6" /></a>
              <a href="#"><img src="/api/placeholder/40/24" alt="PhonePe" className="h-6" /></a>
              <a href="#"><img src="/api/placeholder/40/24" alt="Visa" className="h-6" /></a>
              <a href="#"><img src="/api/placeholder/40/24" alt="RuPay" className="h-6" /></a>
              <a href="#"><img src="/api/placeholder/40/24" alt="Mastercard" className="h-6" /></a>
            </div>
          </div>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-yellow-400 font-bold mb-4 text-lg">KEEP UP TO DATE</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email Id"
              className="bg-transparent border border-gray-600 px-4 py-2 rounded-l focus:outline-none focus:border-yellow-400"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r hover:bg-yellow-500 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;