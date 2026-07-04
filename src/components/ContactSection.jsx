export default function ContactSection() {
  return (
    <section className="bg-white pt-20">
      <div className="container max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black font-bold mb-6">
            Get in Touch
          </h2>

          <p className="text-black mb-6 leading-relaxed">
            We'd love to help you find the perfect gift!  
            Reach out to us for custom orders, last-minute gifts, bulk hampers, or any queries.
          </p>

          <div className="space-y-4 text-black">

            <p><strong>📍 Address:</strong> Gufamandir Road Lalghati, Bhopal</p>

            <p>
              <strong>📞 Phone:</strong>{" "}
              <a href="tel:+917067777023" className="text-blue-600 underline">
                +91 7067777023
              </a>
            </p>

            <p>
              <strong>📧 Email:</strong>{" "}
              <a href="mailto:abhinavchourasia.in@gmail.com" className="text-blue-600 underline">
                upahaarwala@gmail.com
              </a>
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=917067777023&text=Hi%20UpahaarWala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 
              text-white px-6 py-3 rounded-xl shadow-md font-semibold"
            >
              💬 Chat on WhatsApp
            </a>

          </div>
        </div>
        <img src="/assets/contactus.png" alt="Banner" className="w-full h-full object-cover [image-rendering:optimizeQuality]"/>
        {/* CONTACT FORM */}
        <div className="bg-[#cccccc63] p-8 rounded-2xl shadow hidden">
          <h3 className="text-2xl font-bold text-black font-bold mb-6">Send us a message</h3>

          <form 
            action="https://formsubmit.co/abhinavchourasia.in@gmail.com"
            method="POST"
            className="space-y-5 hidden"
            >
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-black text-black rounded-lg"
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-black text-black rounded-lg"
            />

            <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 border border-black text-black rounded-lg"
            ></textarea>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New UpahaarWala Contact Form Entry" />
            <input type="hidden" name="_template" value="table" />

            <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold shadow"
            >
                Send Message
            </button>
            </form>
        </div>
      </div>
    </section>
  );
}
