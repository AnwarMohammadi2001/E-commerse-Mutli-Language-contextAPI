import React from "react";

const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-100 p-6">
          <img
            src="https://via.placeholder.com/500"
            alt="Product"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Modern Sneaker
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              A stylish and comfortable sneaker for everyday wear. Perfectly
              crafted with premium materials.
            </p>

            <p className="text-2xl font-semibold text-blue-600 mb-6">$120.00</p>

            {/* Sizes */}
            <div className="mb-6">
              <h2 className="font-semibold text-gray-700 mb-2">Choose Size</h2>
              <div className="flex gap-3">
                {["38", "39", "40", "41", "42", "43"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h2 className="font-semibold text-gray-700 mb-2">Choose Color</h2>
              <div className="flex gap-3">
                <span className="w-8 h-8 bg-black rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-600"></span>
                <span className="w-8 h-8 bg-red-500 rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-600"></span>
                <span className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-600"></span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
