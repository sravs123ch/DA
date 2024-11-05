import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        {/* Coursue Advertisement Section */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-full h-60 bg-black rounded-lg text-white flex flex-col items-start justify-center p-4">
            <h2 className="text-2xl font-semibold">
              Win clients and scale sites fast with Coursue
            </h2>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Get started — it's free
            </button>
          </div>
        </div>

        {/* Sign-in Section */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          Sign in to Dribbble
        </h2>

        {/* Sign in with Google */}
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 mb-4 text-gray-600 hover:bg-gray-100">
          <FcGoogle size={24} className="mr-2" />
          Sign in with Google
        </button>

        <div className="text-center text-gray-500 mb-4">
          or sign in with email
        </div>

        {/* Username or Email */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username or Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <div className="text-right text-sm text-gray-500 mt-2">
            <a href="#" className="hover:text-pink-500">
              Forgot?
            </a>
          </div>
        </div>

        {/* Sign in Button */}
        <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700">
          Sign In
        </button>

        <div className="text-center mt-4 text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-pink-600 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
