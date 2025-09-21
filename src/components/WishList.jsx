import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import ProductCartWishList from "./Product/ProductCartWishList";
import Breadcrumb from "./Breadcrumb";
import WishlistBreadcrumb from "./WishlistBreadcrumb";

const WishList = () => {
  const { wishlist, clearWishList } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="px-14 pb-10">
      {/* Header */}
      <div className="mt-[100px] flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
        {/* Left: Breadcrumb + Title */}
        <div className="flex items-center gap-x-10">
          <WishlistBreadcrumb />
          <h1 className="text-lg font-semibold text-gray-800">
            My Wishlist{" "}
            <span className="text-blue-600">({wishlist.length})</span>
          </h1>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
          >
            ← Back
          </button>
          {wishlist.length > 0 && (
            <button
              onClick={clearWishList}
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Wishlist Items */}
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {wishlist.map((item, index) => (
            <ProductCartWishList key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg mt-20">
          Your wishlist is empty.
        </p>
      )}
    </div>
  );
};

export default WishList;
