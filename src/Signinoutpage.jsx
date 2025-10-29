import React, { useState } from "react";

export default function Signinoutpage() {
  const [mode, setMode] = useState("signIn"); 

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="h-16 flex items-center">
        <div className='flex items-center '>
        <img width="44" height="14" src="https://img.icons8.com/nolan/64/calendar.png" alt="calendar"/>
        <h1 className="ml-2 self-center text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">EventCheck</h1>
      </div>
      </header>

      {/* Centered Card */}
      <main className="grid min-h-[calc(100vh-8rem)] place-items-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]">
          {/* Title */}
          <h1 className="text-center text-2xl font-semibold text-gray-800">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
              EventCheck
            </span>
          </h1>
          <p className="mt-1 text-center text-sm text-gray-500">
            Sign in or create an account to get started
          </p>

          {/* Tabs */}
          <div className="mt-6 rounded-lg bg-gray-100 p-1 grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setMode("signIn")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition
                ${mode === "signIn" ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-800"}`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode("signUp")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition
                ${mode === "signUp" ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-800"}`}
            >
              Sign Up
            </button>
          </div>

          
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault(); // UI only
            }}
          >
            {mode === "signUp" && (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-gradient-to-r from-purple-400 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:from-indigo-600 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              {mode === "signUp" ? "Create Account" : "Sign In"}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EventCheck. Modern event management made simple.
      </footer>
    </div>
  );
}