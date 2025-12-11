import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-pink-600">
          uphaarwala
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-pink-600">Home</Link>
          <Link to="/about" className="hover:text-pink-600">About</Link>
          <Link to="/contact" className="hover:text-pink-600">Contact</Link>

          <a
            href="https://api.whatsapp.com/send/?phone=917067777023&text=Hi%20UpahaarWala&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 decoration-0 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <div className="space-y-1 cursor-pointer">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-pink-600">Home</Link>
          <Link to="/about" className="block hover:text-pink-600">About</Link>
          <Link to="/contact" className="block hover:text-pink-600">Contact</Link>
          
          <a
            href="https://api.whatsapp.com/send/?phone=917067777023&text=Hi%20UpahaarWala&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
