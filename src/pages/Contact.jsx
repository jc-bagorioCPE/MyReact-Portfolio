import React, { useState } from "react";

function Contact({ className = "" }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen w-screen bg-[#1F1F1F] text-white flex flex-col items-center px-6 mt-0 ${className}`}
    >
      <div className="w-full max-w-lg bg-[#2A2A2A] p-8 rounded-lg shadow-lg text-center mt-20">
        <h1 className="text-4xl font-bold text-[#4169E1]">Contact Me</h1>
        <p className="mt-4 text-gray-300">
          Feel free to reach out! I’d love to connect and discuss new opportunities.
        </p>

        <form className="mt-6 flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
          <label className="text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[#4169E1] focus:outline-none"
            required
          />

          <label className="text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[#4169E1] focus:outline-none"
            required
          />

          <label className="text-gray-400">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[#4169E1] focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-[#4169E1] text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
