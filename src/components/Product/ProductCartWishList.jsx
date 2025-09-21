import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { AppContext } from "../../Context/AppContext";
import { FaXmark } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
const ProductCartWishList = ({ item }) => {
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist } = useContext(AppContext);

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
      className="border relative border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition w-[260px] h-[320px] bg-white p-4 flex flex-col cursor-pointer"
    >
      {/* Product Image */}
      <div className="flex justify-center items-center h-44 mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="h-full object-contain"
        />
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          removeFromWishlist(item.id);
        }}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition"
      >
        <HiMiniXMark size={28} className="text-gray-600 hover:text-red-500" />
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

export default ProductCartWishList;
