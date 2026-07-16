import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/user/admin/orders",
        {
          withCredentials: true,
        }
      );

      setOrders(res.data.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Admin Orders
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">S.No</th>
              <th>User Email</th>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Order Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, orderIndex) =>
              order.products.map((item) => (
                <tr
                  key={item._id}
                  className="border-b text-center"
                >
                  <td className="p-4">{orderIndex + 1}</td>

                  <td>
                    {order.userId?.email || "N/A"}
                  </td>

                  <td>
                    <img
                      src={item.productId?.image}
                      alt={item.productId?.title}
                      className="w-16 h-16 mx-auto rounded object-cover m-2"
                    />
                  </td>

                  <td>{item.productId?.title}</td>

                  <td>{item.quantity}</td>

                  <td>₹{item.price}</td>

                  <td className="text-green-600 font-semibold">
                    ₹{item.quantity * item.price}
                  </td>

                  <td>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="text-center py-8 text-gray-500">
            No Orders Found
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;