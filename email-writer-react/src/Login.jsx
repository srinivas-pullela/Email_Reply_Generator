import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import App from "./App";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  // Handle input fields
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const formData = new FormData();
      formData.append("username", user.username);
      formData.append("password", user.password);

      const response = await axios.post(
        "http://localhost:8080/api/email/authenticate",
        formData
      );

      if (response.data === "SUCCESS") {
        navigate("/App"); // redirect on success
      }

    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-center text-red-600 font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Register Redirect */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}
