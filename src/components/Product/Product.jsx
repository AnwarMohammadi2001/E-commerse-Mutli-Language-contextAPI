import React, { useContext } from "react";
import HeaderProduct from "./HeaderProduct";
import { AppContext } from "../../Context/AppContext";
import ProductCard from "./ProductCard";
import FilteringSide from "./FilteringSide";

const Product = () => {
  const { product, productLoading } = useContext(AppContext);

  return (
    <div>
      <HeaderProduct />
      <div className="flex gap-5">
        {/* Sidebar - Sticky */}
        <div className="w-64">
          <div className="sticky top-24">
            {/* top-24 means 96px (almost your 100px request) */}
            <FilteringSide />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 flex-1">
          {product.slice(0, 20).map((item, index) => (
            <ProductCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
