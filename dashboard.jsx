import React from "react";

function Dashboard({ user, products, addProduct, updateProduct, deleteProduct }) {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-pink-800 mb-6">
        Welcome, {user.username} 🎉
      </h2>

      <button
        onClick={addProduct}
        className="mb-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
      >
        ➕ Add Product
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow hover:shadow-xl transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-pink-700 font-bold mb-2">{product.price}</p>
            <div className="space-x-2">
              <button
                onClick={() => updateProduct(product.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
