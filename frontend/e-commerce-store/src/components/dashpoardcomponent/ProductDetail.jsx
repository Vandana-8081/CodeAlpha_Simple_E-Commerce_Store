import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/detail/product/${id}`);

      console.log(res.data.product);

      setProduct(res.data.product);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const buyNow = async () => {
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
    fetchProduct();
  }, []);
  if (!product) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="min-h-[70vh] bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Product Image */}
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-md h-[430px] object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Right Side - Product Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>

              <p className="text-gray-600 leading-7 text-justify mb-6">
                {product.description}
              </p>

              <h2 className="text-4xl font-bold text-green-600 mb-6">
                ₹{product.price}
              </h2>

              {/* Button */}
              <button 
                onClick={buyNow}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Buy Now
              </button>

              {/* Extra Details */}
              <div className="mt-8 border-t border-gray-300 pt-6 space-y-4">
                <p className="flex justify-between text-gray-700">
                  <span className="font-semibold">Category</span>
                  <span>{product.category}</span>
                </p>

                <p className="flex justify-between text-gray-700">
                  <span className="font-semibold">Brand</span>
                  <span>{product.brand}</span>
                </p>

                <p className="flex justify-between text-gray-700">
                  <span className="font-semibold">Delivery</span>
                  <span>{product.delivery}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;

// onClick={() => navigate(`/product/${elem._id}`)}
