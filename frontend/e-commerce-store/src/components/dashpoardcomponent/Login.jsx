import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
const navigate = useNavigate();
 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const result = await axios.post(
      "http://localhost:3000/api/login",
      data,
      {
        withCredentials: true,
      }
    );
    setUser(result.data.user);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: result.data.message,
    });

    e.target.reset();

    // 👇 Role ke hisaab se redirect
    if (result.data.user.role === "admin") {
      navigate("/admin-add");
    }
    else if(result.data.user.role === "user"){
      navigate("/cart")
    }
    else {
      navigate("/");
    }

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.response?.data?.message || "Something went wrong",
    });
  }
};

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Login to your account
          </p>

          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>

            {/* Register */}
            <p className="text-center text-gray-600">
              Don't have an account?
              <a
                href="/register"
                className="text-blue-600 font-semibold ml-1 hover:underline"
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
