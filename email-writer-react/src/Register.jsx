import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", user.username);
      formData.append("password", user.password);

      const response = await axios.post(
        "http://localhost:8080/api/email/saveuser",
        formData
      );

      if (response.data === "SUCCESS") {
        setMessage("SUCCESS");
      }

    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage("EXISTS"); // USER_EXISTS
      } else {
        setMessage("FAILED");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your username"
            />
          </div>

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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* SUCCESS Message */}
        {message === "SUCCESS" && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-medium">Registration Successful!</p>

            <button
              onClick={() => navigate("/login")}
              className="mt-2 text-blue-600 underline hover:text-blue-800 transition"
            >
              Click here to Login
            </button>
          </div>
        )}

        {/* USER EXISTS Message + Login Link */}
        {message === "EXISTS" && (
          <div className="mt-4 text-center">
            <p className="text-red-600 font-medium">
              User already exists! Please login.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="mt-2 text-blue-600 underline hover:text-blue-800 transition"
            >
              Click here to Login
            </button>
          </div>
        )}

        {/* FAILED Message */}
        {message === "FAILED" && (
          <p className="mt-4 text-center text-red-600 font-medium">
            Registration Failed! Try again.
          </p>
        )}
      </div>
    </div>
  );
}

export default Register;
