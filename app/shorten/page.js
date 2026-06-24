"use client";

import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="relative min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-700 rounded-full blur-[160px] opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-600 rounded-full blur-[200px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl">

        <div className="backdrop-blur-xl bg-white/5 border border-purple-500/20 rounded-3xl p-6 md:p-10 shadow-2xl shadow-purple-900/30">

          <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Generate Your Short URL 🚀
          </h1>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              value={url}
              placeholder="Enter your long URL"
              onChange={(e) => seturl(e.target.value)}
              className="px-4 py-3 rounded-xl bg-black/40 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
            />

            <input
              type="text"
              value={shorturl}
              placeholder="Enter custom short URL"
              onChange={(e) => setshorturl(e.target.value)}
              className="px-4 py-3 rounded-xl bg-black/40 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
            />

            <button
              onClick={generate}
              className="mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold hover:scale-105 transition"
            >
              Generate
            </button>

          </div>

          {/* Result */}
          {generated && (
            <div className="mt-6 p-4 rounded-xl border border-green-500/30 bg-green-500/10">

              <p className="text-green-400 font-semibold mb-2">
                Your Short Link:
              </p>

              <Link
                target="_blank"
                href={generated}
                className="text-blue-400 break-all underline"
              >
                {generated}
              </Link>

            </div>
          )}

        </div>

      </div>

    </main>
  );
};

export default Shorten;