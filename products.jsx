import React, { useState } from "react";

function Products({ products, user, addProduct, updateProduct, deleteProduct, addToCart }) {
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "", tag: "" });
  const [editingId, setEditingId] = useState(null);
  const [editProduct, setEditProduct] = useState({ name: "", price: "", image: "", tag: "" });

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image || !newProduct.tag) {
      alert("All fields are required");
      return;
    }
    addProduct(newProduct);
    setNewProduct({ name: "", price: "", image: "", tag: "" });
  };

  const handleUpdate = () => {
    if (!editProduct.name || !editProduct.price || !editProduct.image || !editProduct.tag) {
      alert("All fields are required");
      return;
    }
    updateProduct(editingId, editProduct);
    setEditingId(null);
  };

  return (
    <div className="bg-gray-50 py-12 px-6 min-h-screen text-black">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Products</h2>

      {user && (
        <div className="max-w-xl mx-auto mb-10 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Add Product</h3>
          <input
            className="mb-2 w-full px-4 py-2 border rounded"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            className="mb-2 w-full px-4 py-2 border rounded"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            className="mb-2 w-full px-4 py-2 border rounded"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <input
            className="mb-4 w-full px-4 py-2 border rounded"
            placeholder="Tag"
            value={newProduct.tag}
            onChange={(e) => setNewProduct({ ...newProduct, tag: e.target.value })}
          />
          <button onClick={handleAdd} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Add Product
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow p-4">
            {editingId === product.id ? (
              <div>
                <input
                  className="mb-2 w-full px-3 py-1 border rounded"
                  value={editProduct.name}
                  onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                />
                <input
                  className="mb-2 w-full px-3 py-1 border rounded"
                  value={editProduct.price}
                  onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                />
                <input
                  className="mb-2 w-full px-3 py-1 border rounded"
                  value={editProduct.image}
                  onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
                />
                <input
                  className="mb-4 w-full px-3 py-1 border rounded"
                  value={editProduct.tag}
                  onChange={(e) => setEditProduct({ ...editProduct, tag: e.target.value })}
                />
                <button onClick={handleUpdate} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Save</button>
                <button onClick={() => setEditingId(null)} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
              </div>
            ) : (
              <>
                <img
                  src={product.image.startsWith("http") ? product.image : process.env.PUBLIC_URL + product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded mb-4"
                />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p>{product.price}</p>
                <p className="text-sm text-purple-700">{product.tag}</p>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>

                {user && (
                  <div className="flex mt-2 gap-2">
                    <button
                      onClick={() => {
                        setEditingId(product.id);
                        setEditProduct(product);
                      }}
                      className="flex-1 bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="flex-1 bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
//images/product 1.jpg