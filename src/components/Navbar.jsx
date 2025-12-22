import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-2xl font-bold text-pink-600"
        >
          uphaarwala
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-pink-600">Home</Link>
          <Link to="/about" className="hover:text-pink-600">About</Link>

          {!isContactPage && (
            <Link to="/contact" className="hover:text-pink-600">
              Contact
            </Link>
          )}

          {!isContactPage ? (
            <a
              href="https://api.whatsapp.com/send/?phone=919776876029&text=Hi%20UpahaarWala"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          ) : (
            <Link
              to="/"
              className="px-4 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition"
            >
              Back to Home
            </Link>
          )}
        </div>

        {/* MOBILE HAMBURGER */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer active:scale-95 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden bg-white shadow-md
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[400px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
        `}
      >
        <div className="px-6 py-6 space-y-6 text-lg">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-pink-600">
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-pink-600">
            About
          </Link>

          {!isContactPage && (
            <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-pink-600">
              Contact
            </Link>
          )}

          {!isContactPage ? (
            <a
              href="https://api.whatsapp.com/send/?phone=919776876029&text=Hi%20UpahaarWala"
              target="_blank"
              rel="noopener noreferrer"
              onClickufClick={() => setOpen(false)}
              className="block text-center px-4 py-3 bg-green-500 text-white rounded-xl font-medium shadow transition"
            >
              WhatsApp
            </a>
          ) : (
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-3 hidden bg-pink-600 text-white rounded-full font-medium shadow transition"
            >
              Back to Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
