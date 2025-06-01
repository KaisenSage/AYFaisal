import { useState } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";
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
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
      style={{ backgroundColor: "#232323" }} // Now dark grey
    >
      <RevealOnScroll>
      <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "#eccec6" }}
        >
          Get In Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full rounded px-4 py-3 transition focus:outline-none"
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

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full rounded px-4 py-3 transition focus:outline-none"
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

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full rounded px-4 py-3 transition focus:outline-none"
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
            className="w-full py-3 px-6 rounded font-medium transition relative overflow-hidden"
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
      </RevealOnScroll>
    </section>
  );
};