import React from "react";
import { Link } from "react-router-dom";

const WishlistBreadcrumb = () => {
  return (
    <nav className="flex items-center text-sm text-gray-500 space-x-2">
      <Link to="/" className="hover:text-blue-600">
        Home
      </Link>
      <span>/</span>
      <span className="text-gray-800 font-medium">Wishlist</span>
    </nav>
  );
};

export default WishlistBreadcrumb;
