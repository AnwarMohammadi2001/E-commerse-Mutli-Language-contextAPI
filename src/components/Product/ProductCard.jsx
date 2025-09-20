import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Encode title for URL
    const encodedTitle = encodeURIComponent(item.title);

    // Navigate to product details page
    navigate(`/product/${item.id}/${encodedTitle}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition h-[320px] bg-white p-4 flex flex-col cursor-pointer"
    >
      {/* Product Image */}
      <div className="flex justify-center items-center h-44 mb-4">
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
    </div>
  );
};

export default ProductCard;
