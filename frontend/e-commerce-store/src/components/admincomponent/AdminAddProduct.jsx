import React from 'react'
import axios from "axios";
import Swal from "sweetalert2";

const AdminAddProduct = () => {

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  try {
    const result = await axios.post(
      "http://localhost:3000/admin/add-product",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    Swal.fire({
      icon: "success",
      title: "Success",
      text: result.data.message,
    });

    e.target.reset();
  } catch (error) {
    console.log(error.response);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.response?.data?.message || "Something went wrong",
    });
  }
};


  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Add Product
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Upload your product details
        </p>

        <form 
        onSubmit={(e)=>{handleSubmit(e)}}
        className="space-y-6">
          {/* Image Upload */}
                    <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Image
            </label>

            <input
              type="file"
              name="image"
              placeholder="Enter product title"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
         

          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter product title"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Price
            </label>

            <input
              type="number"
              name="price"
              placeholder="₹ Enter price"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div> 
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Discription
            </label>

            <input
              type="text"
              name="description"
              placeholder="Enter product description"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
                      <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product category
            </label>

            <input
              type="text"
              name="category"
              placeholder="Enter product category"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
                         <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Brand
            </label>

            <input
              type="text"
              name="brand"
              placeholder="Enter product brand"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
                         <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product delivery
            </label>

            <input
              type="text"
              name="delivery"
             
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
    
    </>
 
  )
}

export default AdminAddProduct
