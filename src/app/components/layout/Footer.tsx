import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#3a7a9f] text-white py-12  ">
      <div className="max-w-[1500px]  px-8 lg:px-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-white/20 pb-10">
        {/* Brand Section */}
        <div className="md:w-[50%]">
          <h2 className="text-2xl font-bold mb-3">AnyWork</h2>
          <p className="text-sm mb-6 leading-relaxed">
            Nigeria&apos;s trusted platform for finding verified artisans and
            service providers.
          </p>
          <div className="flex flex-col  gap-3">
            <button className="bg-white text-primary px-5 py-2 rounded-lg f hover:bg-gray-100 transition">
              Find an artisan
            </button>
            <button className="border border-white px-5 py-2 rounded-lg  hover:bg-white  transition">
              Join as an Artisan
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  For Users
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  For Artisans
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span>Lagos Island</span>
              <span>Ikeja</span>
              <span>Abule Egba</span>
              <span>Oshodi</span>
              <span>Lekki</span>
              <span>VI</span>
              <span>Magodo</span>
              <span>Surulere</span>
            </div>
          </div>

          {/* Follow Us / Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-3 mb-5">
              <a href="#">
                <FaFacebookF className="p-2 bg-white/20 rounded-lg text-2xl hover:bg-white/30 transition" />
              </a>
              <a href="#">
                <FaInstagram className="p-2 bg-white/20 rounded-lg text-2xl hover:bg-white/30 transition" />
              </a>
              <a href="#">
                <FaTimes className="p-2 bg-white/20 rounded-lg text-2xl hover:bg-white/30 transition" />
              </a>
              <a href="#">
                <FaLinkedinIn className="p-2 bg-white/20 rounded-lg text-2xl hover:bg-white/30 transition" />
              </a>
            </div>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FiMapPin /> Lagos, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <FiPhone /> +234 xxx xxx xxx
              </p>
              <p className="flex items-center gap-2">
                <FiMail /> Hello@anywork.ng
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col  text-center text-sm text-white/80 pt-6">
        <p>© 2025 AnyWork. All rights reserved.</p>
        <div className="mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-5 z-999 right-5 bg-tertiary hover:bg-tertiary text-white font-semibold px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 ">
        💬 CHAT WITH US
      </button>
    </footer>
  );
}
