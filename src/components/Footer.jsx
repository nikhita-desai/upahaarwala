export default function Footer() {
  return (
    <footer className="bg-pink-50 pt-10 py-10 text-center container">
      
      {/* LOGO */}
      <h2 className="text-2xl font-bold text-pink-600">uphaarwala</h2>

      {/* COPYRIGHT */}
      <p className="text-gray-600 mt-3">
        © {new Date().getFullYear()} uphaarwala — All Rights Reserved
      </p>
    </footer>
  );
}
