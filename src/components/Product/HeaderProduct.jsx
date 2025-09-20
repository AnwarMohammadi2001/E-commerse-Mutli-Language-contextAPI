import React, { useContext, useMemo } from "react";
import { Search, ShoppingCart, Grid2x2, Grid3x3, List } from "lucide-react";
import { AppContext } from "../../Context/AppContext";

const HeaderProduct = () => {
  const { product } = useContext(AppContext);

  // Get unique categories from products
  const categories = useMemo(() => {
    const unique = new Set(product.map((p) => p.category));
    return ["All", ...unique]; // add "All" option
  }, [product]);

  return (
    <div className="w-full bg-white border-b border-gray-300 p-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Box */}
      <div className="relative w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
      </div>

      {/* Cart + Layout Buttons */}
      <div className="flex gap-3 items-center">
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          <ShoppingCart size={20} />
          <span>Cart</span>
        </button>
        <button className="p-2 rounded-lg border hover:bg-gray-100">
          <List size={20} />
        </button>
        <button className="p-2 rounded-lg border hover:bg-gray-100">
          <Grid2x2 size={20} />
        </button>
        <button className="p-2 rounded-lg border hover:bg-gray-100">
          <Grid3x3 size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeaderProduct;
