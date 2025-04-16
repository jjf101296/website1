import Image from "next/image";
import React from "react";

export default function BirthdayInvite() {
  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center space-y-6">
        <Image
          src="/e73e3caf7a46269456c971136e1e1040.jpg"
          alt="Joshua Banner"
          width={800}
          height={400}
          className="rounded-xl mx-auto"
        />

        <h1 className="text-4xl font-extrabold text-blue-700">Joshua Matthew's 1st Birthday</h1>
        <p className="text-gray-700 text-lg">
          Our little bundle of joy is turning ONE!<br />
          Come celebrate with us and make memories together.
        </p>

        <div className="text-left md:text-center space-y-2 text-gray-800">
          <p><strong>📅 Date:</strong> Thursday, June 26th, 2025</p>
          <p><strong>🕕 Time:</strong> 6:00 PM onwards</p>
          <p><strong>📍 Venue:</strong> Vijay Park, Arumbakkam, Chennai</p>
        </div>

        <a
          href="https://joshuamatthew26062024.my.canva.site/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Event Page & RSVP
        </a>

        <p className="text-sm text-gray-500">With love, <br /><strong>John & Manusha</strong></p>

        <Image
          src="/b0ee8a146429f982749530e6b852ec17.jpg"
          alt="Joshua Photo"
          width={200}
          height={200}
          className="rounded-full mx-auto border-4 border-blue-300"
        />
      </div>
    </main>
  );
}