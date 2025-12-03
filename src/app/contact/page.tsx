"use client";

import React from "react";

export default function ContactPage() {
  return (
    <section className="min-h-screen p-8 bg-[#0A1A3A] text-white">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="mb-4">You can contact me anytime.</p>

      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white/10 border border-white/20"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded bg-white/10 border border-white/20"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded bg-white/10 border border-white/20 h-32"
        ></textarea>

        <button
          type="submit"
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded font-bold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}