import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white p-4 flex flex-col">
      {/* Product Image */}
      <div className="flex justify-center items-center h-40 mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
        {item.title}
      </h2>
      <p className="text-xs text-gray-500 mb-2">{item.category}</p>
      <p className="text-lg font-bold text-blue-600 mb-4">${item.price}</p>

      {/* Buttons */}
      <button className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
