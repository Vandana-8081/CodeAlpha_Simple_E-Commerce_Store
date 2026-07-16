import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/logout",
        {},
        {
          withCredentials: true,
        }
      );

      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.tu2HOgU_vEDjFJyG8yPxNQHaHa?pid=Api&h=220&P=0"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />

            <Link to="/">
              <h1 className="text-2xl font-bold text-indigo-600">
                ShopSmart
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <ul className="flex gap-6 font-medium text-gray-700">

              {!user && (
                <>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/product">Products</Link>
                  </li>

                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </>
              )}

              {user?.role === "admin" && (
                <>
                  <li>
                    <Link to="/product">Products</Link>
                  </li>

                  <li>
                    <Link to="/admin-add">Add Product</Link>
                  </li>
                   <li>
                    <Link to="/adminorder">View Order</Link>
                  </li>

                </>
              )}

              {user?.role === "user" && (
                <>
                  <li>
                    <Link to="/product">Products</Link>
                  </li>

                  <li>
                    <Link to="/cart">Orders</Link>
                  </li>

               
                </>
              )}
            </ul>

            {!user ? (
              <div className="flex gap-3">
                <Link to="/register">
                  <button className="px-4 py-2 border border-indigo-600 hover:bg-indigo-600 text-black rounded-lg">
                    Register
                  </button>
                </Link>

                <Link to="/login">
                  <button className="px-4 py-2 border border-indigo-600 bg-indigo-600  text-black rounded-lg">
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Logout
              </button>
            )}

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t pt-4">

            <div className="flex flex-col gap-4">

              {!user && (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/product">Products</Link>
                   <Link to="/about">About</Link>
                </>
              )}

              {user?.role === "admin" && (
                <>
                  <Link to="/product">Products</Link>
                  <Link to="/admin-add">Add Product</Link>
                  <Link to="/adminorder">View order</Link>
                </>
              )}

              {user?.role === "user" && (
                <>
                  <Link to="/product">Products</Link>
                  <Link to="/cart">Orders</Link>
                </>
              )}

            </div>

            <div className="mt-4">

              {!user ? (
                <>
                  <Link to="/register">
                    <button className="w-full py-2 border  rounded-lg mb-2">
                      Register
                    </button>
                  </Link>

                  <Link to="/login">
                    <button className="w-full py-2 bg-indigo-600 text-white rounded-lg">
                      Login
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full py-2 bg-indigo-600 text-white rounded-lg"
                >
                  Logout
                </button>
              )}

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Nav;