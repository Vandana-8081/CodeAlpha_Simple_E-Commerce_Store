import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fechProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products", {
        withCredentials: true,
      });

      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Message:", error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };

  const placeOrder = async (product) => {
  try {
    const orderData = {
      products: [
        {
          productId: product._id,
          quantity: 1,
          price: product.price,
        },
      ],
      totalPrice: product.price,
    };

    const response = await axios.post(
      "http://localhost:3000/user/order",
      orderData,
      {
        withCredentials: true,
      }
    );

    alert(response.data.message);
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      console.log(error.message);
    }
  }
};

  useEffect(() => {
    fechProducts();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <img
                    src={elem.image}
                    alt="Product"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {elem.title}
                  </h2>

                  <div className="flex items-center justify-between mt-4 gap-5">
                    <span className="text-2xl font-bold text-green-600">
                      ₹{elem.price}
                    </span>
                    <button 
                    onClick={() => navigate(`/product/${elem._id}`)}
                    className="text-blue-500 hover:text-blue-700">View Detail</button>
                  </div>

                  <button 
                   onClick={() => placeOrder(elem)}
                  className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
