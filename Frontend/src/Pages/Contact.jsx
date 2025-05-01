import React, { useState } from "react";
import axios from "axios";
import bg1 from "../assets/bg1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contact", formData);
      toast.success("Message sent successfully! ✅", { theme: "dark" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. ❌", { theme: "dark" });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col gap-8 items-center justify-center px-4 mt-24 -mb-28 pb-28 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <h1 className="text-center text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mt-28 drop-shadow-lg animate-pulse">
        📬 Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full bg-zinc-800 p-10 rounded-3xl shadow-xl text-white space-y-6"
      >
        <div className="bg-transparent">
          <label className="text-sm text-zinc-300 bg-transparent">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-4 bg-zinc-700 rounded-xl border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="bg-transparent">
          <label className="text-sm text-zinc-300 bg-transparent">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-4 bg-zinc-700 rounded-xl border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="bg-transparent">
          <label className="text-sm text-zinc-300 bg-transparent">Your Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 p-4 bg-zinc-700 rounded-xl border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-rose-500 hover:bg-rose-600 transition rounded-xl font-semibold text-white"
        >
          Send Message
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
