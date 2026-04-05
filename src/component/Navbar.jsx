import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "login") navigate("/login");
    if (value === "signup") navigate("/signup");
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-gray-700">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          🧠 TestForge
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Generate</a>
          <a href="#" className="hover:text-white">About</a>
        </div>

        {/* SIMPLE SELECT */}
        <select
          onChange={handleChange}
          className="bg-gray-800 text-white px-4 py-2 rounded-xl border border-gray-600"
          defaultValue=""
        >
          <option value="" disabled>Account</option>
          <option value="login">Login</option>
          <option value="signup">Signup</option>
        </select>

      </div>
    </nav>
  );
};

export default Navbar;