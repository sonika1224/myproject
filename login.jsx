import React, { useState } from "react";
import axios from "axios";

function Login({ login }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateUsername = (name) => /^[A-Za-z]{3,}$/.test(name);

  const handleLogin = async () => {
    if (!username || !email || !password) {
      alert("All fields are required.");
      return;
    }

    if (!validateUsername(username)) {
      alert("Username must be at least 3 letters with no numbers or symbols.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email (e.g. name@example.com).");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters long.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        email,
        password,
      });

      alert(response.data.message);
      login({ username, email }); // Call app login
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-full max-w-md border border-white/30 text-white">
        <h2 className="text-2xl font-extrabold text-center mb-6">Login to Your Account</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-white/10 text-white placeholder-white border border-white/30 rounded-md focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-white/10 text-white placeholder-white border border-white/30 rounded-md focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-white/10 text-white placeholder-white border border-white/30 rounded-md focus:outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
