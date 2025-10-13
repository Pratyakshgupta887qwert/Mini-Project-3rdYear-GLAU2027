import React from "react";
import Cards from "./Cards";
import ticket from "./assets/icons8-ticket-80 (1).png";
import Contact from "./assets/Contact.png";
import QR from "./assets/QR.png";
import { motion } from "framer-motion";

const Opening = () => {
  return (
    <div className="bg-[#fbfbfc] flex flex-col items-center px-4 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col justify-center items-center text-center pt-32 pb-32 min-h-[90vh]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-6 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
          Modern Event Management
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Register for events instantly and check in with a simple QR code scan.
        </p>
        <p className="mb-8 text-lg md:text-xl text-gray-600">
          Perfect for college events, conferences, and meetups.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer font-semibold rounded-full text-white bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 px-8 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          Get Started →
        </motion.button>

        {/* Scroll Indicator
        <div className="absolute bottom-10 flex justify-center items-center mt-12">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-scroll"></div>
            </div>
            <span className="text-sm text-gray-500 mt-2">Scroll down</span>
          </div>
        </div> */}
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="flex flex-col justify-center items-center w-full mt-32 md:mt-40 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center items-center">
          <Cards
            image={ticket}
            heading="1. Register"
            description="Browse events and register with a single click. No complicated forms."
          />
          <Cards
            image={QR}
            heading="2. Get QR Code"
            description="Instantly receive your unique QR code ticket in your dashboard."
          />
          <Cards
            image={Contact}
            heading="3. Check In"
            description="Show your QR code at the entrance for instant check-in. That's it!"
          />
        </div>
      </motion.section>

      {/* Scroll animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-scroll {
          animation: scroll 1.4s infinite;
        }
      `}</style>
    </div>
  );
};

export default Opening;
