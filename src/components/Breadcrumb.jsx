import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { AppContext } from "../Context/AppContext";

const Breadcrumb = () => {
  const { id } = useParams(); // get product id
  const { product } = useContext(AppContext);

  // Find product if on product page
  const productDetail = product.find((p) => p.id === parseInt(id));

  return (
    <nav className="bg-gray-50 py-3 px-6 rounded-lg mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {/* Home */}
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>

        {/* Product main page */}
        <li className="flex items-center">
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link to="/product" className="hover:text-blue-600">
            Product
          </Link>
        </li>

        {/* Current Product Name */}
        {productDetail && (
          <li className="flex items-center">
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium line-clamp-1">
              {productDetail.title}
            </span>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
