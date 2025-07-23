import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hole-9-flyover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Scroll Chevron */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-white pt-2 pb-8">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl px-4 text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
              Welcome to LL Resort
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A Lucas Lee Experience
            </p>

            {/* Description container */}
            <div className="flex justify-center">
              <div className="max-w-3xl">
                {/* First paragraph */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Our premier family-friendly private club in Victor offers an exceptional Scottish links-style 18-hole golf course, state-of-the-art golf
                  simulators, a comprehensive fitness center, brand-new pickleball facilities, and a seasonal pool. With three diverse dining outlets and
                  a welcoming atmosphere, we cater to all your recreational and social needs.
                </p>

                {/* Second paragraph */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Whether you're planning a wedding, business event, or social gathering, our elegant banquet facility and spacious ballroom,
                  accommodating up to 240 guests, provide the perfect setting. At LL Resort, we focus on what truly matters: friends, family,
                  and community. Explore membership options today and discover why we are a sought-after destination for an enriching club
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#374b19] text-white py-12 px-4">
        <div className="w-full flex justify-center">
          <div className="max-w-4xl w-full px-4">
            {/* Centered Profile Section */}
            <div className="flex flex-col items-center text-center">
              {/* Spacer above image */}
              <div style={{height: '10px'}}></div>
              
              <div className="mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <Image
                    src="/lucaslee.jpg"
                    alt="Lucas Lee"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <h3 className="text-3xl font-semibold mb-2">Lucas Lee</h3>
              <p className="text-lg text-white/80 mb-8">Founder, LL Resort</p>
              
              {/* Contact Information */}
              <div className="space-y-2 mb-8">
                <p className="text-lg">
                  <a href="mailto:LucasLeeHansen@gmail.com" className="hover:underline">LucasLeeHansen@gmail.com</a>
                </p>
                <p className="text-lg">
                  <a href="tel:3156902872" className="hover:underline">(315) 690-2872</a>
                </p>
              </div>
              
              {/* Location */}
              <div>
                <p className="text-sm text-white/80">Brickell Heights • Miami, FL</p>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="pt-6 border-t border-white/20 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-xs">
                <p>&copy; 2025 Lucas Lee. All Rights Reserved.</p>
                <Link href="#" className="hover:underline">Privacy Policy</Link>
                <Link href="#" className="hover:underline">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}