import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full blur-[140px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-700 rounded-full blur-[160px] opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-600 rounded-full blur-[200px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* Left */}
        <div className="flex flex-col gap-7 text-center lg:text-left">

          <h1 className={`text-5xl md:text-6xl font-extrabold ${poppins.className}`}>
            <span className="text-white">The Future of</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              URL Shortening
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Fast, secure and modern URL shortener built with premium UI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <Link href="/shorten">
              <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold hover:scale-105 transition">
                Try Now
              </button>
            </Link>

            <Link href="/github">
              <button className="px-8 py-3 rounded-2xl border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition">
                GitHub
              </button>
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="relative flex justify-center">

          <div className="absolute w-[300px] h-[300px] bg-purple-600 rounded-full blur-[120px] opacity-30"></div>

          <div className="relative animate-float-slow">
            <Image
              src="/vector.png"
              alt="Vector"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

        </div>

      </section>

    </main>
  );
}