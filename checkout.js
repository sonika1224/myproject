import React, { useState } from "react";

function Checkout({ item, user, goHome }) {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    if (!address || !phone) {
      alert("Please fill all the details.");
      return;
    }

    setOrderPlaced(true);

    setTimeout(() => {
      goHome(); // go back to home page
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-green-500">✅ Order Placed Successfully!</h2>
        <p className="mt-4 text-lg text-white">Thanks for your purchase, {user.username}.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white text-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Checkout</h2>
      
      <div className="mb-4">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
        <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
        <p className="text-gray-600">{item.price}</p>
      </div>

      <input
        type="text"
        placeholder="Shipping Address"
        className="w-full mb-3 p-2 border rounded"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full mb-4 p-2 border rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={handlePlaceOrder}
        className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
