import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex flex-col items-center text-white px-6">
      
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold mb-6 text-center drop-shadow-lg mt-40"
      >
        Join Amazing Events
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-center max-w-3xl mb-10 text-white/90"
      >
        Browse different types of events and register in just one click. Receive instant email confirmation after joining — no hassle, just fun!
      </motion.p>

      {/* Glassmorphism CTA Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="bg-white/20 backdrop-blur-md rounded-3xl shadow-xl p-10 flex flex-col items-center gap-6 w-full max-w-md border border-white/30"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">Ready to Join?</h2>
        <p className="text-white/80 text-center mb-6">
          Sign in and start exploring events of your interest. One-click registration and instant email confirmation await!
        </p>
        <Link
          to="/home"
          className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Get Started 🚀
        </Link>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 w-full max-w-5xl grid gap-8 md:grid-cols-3 text-center mx-auto"
      >
        {/* Card 1 */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">🎫</div>
          <h3 className="text-xl font-semibold mb-2">Discover Events</h3>
          <p className="text-white/80 text-sm">
            Find workshops, hackathons, meetups, and more — all in one place.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
          <p className="text-white/80 text-sm">
            Join any event in just one click. Quick and hassle-free.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">📧</div>
          <h3 className="text-xl font-semibold mb-2">Email Confirmation</h3>
          <p className="text-white/80 text-sm">
            Get instant confirmation via email after joining an event.
          </p>
        </div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="mt-20 bg-white/20 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center w-full max-w-2xl text-center shadow-xl"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
          Join Your Favorite Events Today!
        </h2>
        <p className="text-white/80 mb-6">
          Sign in, browse events, and register instantly. Stay updated with email confirmation for every event you join.
        </p>
        <Link
          to="/home"
          className="px-10 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Join Events Now 🎉
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-white/70 text-center pb-6">
        © {new Date().getFullYear()} Event Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
