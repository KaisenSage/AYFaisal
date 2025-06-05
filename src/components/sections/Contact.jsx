import { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Your message was sent successfully! I’ll be in touch soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className=" w-screen max-w-screen overflow-x-hidden min-h-screen w-screen flex items-center justify-center py-16 bg-[#232323]"
    >
      <div className="w-full max-w-lg sm:max-w-xl px-4 sm:px-8 mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-8 text-center"
          style={{ color: "#eccec6" }}
        >
          Get In Touch
        </h2>

        {/* Social and Phone Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/faisal-abdulkarim-yusuf-54652523b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#eccec6] text-[#232323] border border-[#eccec6] rounded px-4 py-2 font-medium hover:bg-[#232323] hover:text-[#eccec6] transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/thereal.oneofone/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#eccec6] text-[#232323] border border-[#eccec6] rounded px-4 py-2 font-medium hover:bg-[#232323] hover:text-[#eccec6] transition"
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            href="tel:+2347085708379"
            className="flex items-center gap-2 bg-[#eccec6] text-[#232323] border border-[#eccec6] rounded px-4 py-2 font-medium hover:bg-[#232323] hover:text-[#eccec6] transition"
          >
            <FaPhone size={20} /> +234 708 570 8379
          </a>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full rounded px-4 py-3 transition focus:outline-none text-base sm:text-lg"
              style={{
                backgroundColor: "#eccec6",
                color: "#111",
                border: "1px solid #eccec6",
              }}
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full rounded px-4 py-3 transition focus:outline-none text-base sm:text-lg"
              style={{
                backgroundColor: "#eccec6",
                color: "#111",
                border: "1px solid #eccec6",
              }}
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full rounded px-4 py-3 transition focus:outline-none text-base sm:text-lg"
              style={{
                backgroundColor: "#eccec6",
                color: "#111",
                border: "1px solid #eccec6",
              }}
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded font-medium transition relative overflow-hidden text-base sm:text-lg"
            style={{
              backgroundColor: "#eccec6",
              color: "#111",
              boxShadow: "0 0 15px rgba(236, 206, 198, 0.4)",
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(236, 206, 198, 0.6)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(236, 206, 198, 0.4)";
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};