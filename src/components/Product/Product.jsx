import React, { useContext, useState } from "react";
import HeaderProduct from "./HeaderProduct";
import { AppContext } from "../../Context/AppContext";
import ProductCard from "./ProductCard";
import FilteringSide from "./FilteringSide";
import PaginationRounded from "../PaginationRounded";

const Product = () => {
  const { product, productLoading, layout } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(product.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const paginatedProducts = product.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Determine grid classes based on layout
  const gridClass =
    layout === "list"
      ? "grid grid-cols-1"
      : layout === "grid-2"
      ? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
      : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5";

  return (
    <div>
      <HeaderProduct />
      <div className="flex gap-5">
        {/* Sidebar - Sticky */}
        <div className="w-64">
          <div className="sticky top-24">
            <FilteringSide />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-col items-center justify-center gap-5 pb-5 flex-1">
          <div className={`${gridClass} gap-5 w-full`}>
            {paginatedProducts.map((item, index) => (
              <ProductCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Pagination */}
          <PaginationRounded
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
