import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';


const Cart = () => {

const [order , setOrder]=useState([])

const fetchOrders = async () => {
  try {
    const res = await axios.get(
      "http://localhost:3000/user/my-orders",
      {
        withCredentials: true,
      }
    );
   console.log(res.data.data)
    setOrder(res.data.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

useEffect(() => {
  fetchOrders();
}, []);
  return (
   <>
    <h1 className="text-4xl font-bold mb-8 flex justify-center pt-9">Your order</h1>
   <div className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">

    {/* ================= Desktop Table ================= */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left">
        <thead className="border-b bg-gray-50">
          <tr className="text-lg">
            <th className="py-4">S.No</th>
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

      <tbody>
  {order.map((elem, index) =>
    elem.products.map((item, idx) => (
      <tr key={item._id} className="border-b mt-2">
        <td className="py-5">{index + 1}</td>

        <td>
          <img
            src={item.productId?.image}
            alt={item.productId?.title}
            className="w-20 h-18 rounded-lg object-cover m-2"
          />
        </td>

        <td className="font-medium">{item.productId?.title}</td>

        <td>{item.quantity}</td>

        <td>₹{item.price}</td>

      </tr>
    ))
  )}
</tbody>
      </table>
    </div>

    {/* ================= Mobile Cards ================= */}
  {order.map((elem, index)=>{
    return (
        <div
        key={index}
         className="md:hidden space-y-5">

      <div className="border rounded-xl p-4 shadow-sm bg-white">

        <div className="flex gap-4">
          <img
            src="https://via.placeholder.com/100"
            alt=""
            className="w-24 h-24 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h2 className="font-bold text-lg">Nike Shoes</h2>

            <p className="text-gray-500 mt-1">
              Quantity: <span className="font-medium">2</span>
            </p>

            <p className="text-gray-500">
              Price: ₹1200
            </p>
          </div>
        </div>

      </div>

    </div>
    )
  })}
  </div>
</div>
   </>
  )
}

export default Cart
