import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-50 pt-10 pb-10 text-center">
      <h2 className="text-2xl font-bold text-pink-600">uphaarwala</h2>
      <p className="mt-5 text-sm font-medium text-gray-700">
        Follow Us On
      </p>
      <div className="flex justify-center gap-6 mt-5 text-2xl">
        <a
          href="https://instagram.com/uphaarwala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-[#E1306C] transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com/@uphaarwala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-[#FF0000] transition"
        >
          <FaYoutube />
        </a>
      </div>

      <p className="text-gray-600 mt-4">
        © {new Date().getFullYear()} uphaarwala All rights reserved
      </p>
    </footer>
  );
}