import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    username: formData.get("username"),
    lastname: formData.get("lastname"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const result = await axios.post("http://localhost:3000/api/register",
      data,
       {
    withCredentials: true,
  }
    );

    Swal.fire({
      icon: "success",
      title: "Success",
      text: result.data.message,
    });

    e.target.reset();

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.response?.data?.message || "Something went wrong",
    });
  }
};

const Regiter = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Create Account
          </h1>

          <form 
          onSubmit={(e)=>{
            handleSubmit(e)
          }}
          className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your first name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
            <p className="text-center text-gray-600 text-sm">
              Already have an account?
              <a
                href="/login"
                className="text-blue-600 font-semibold ml-1 hover:underline"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Regiter;
