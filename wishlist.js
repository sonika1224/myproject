import React from "react";

function Wishlist({ cartItems, removeFromCart, buyNow }) {
  return (
    <div className="bg-gray-50 py-12 px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">
        Your Wishlist
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-20">
          🛒 Your wishlist is empty. Go explore and add some products!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.price}</p>
              </div>

              <div className="mt-auto flex gap-3">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm"
                >
                  Remove
                </button>

                <button
                  onClick={() => buyNow(item)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
