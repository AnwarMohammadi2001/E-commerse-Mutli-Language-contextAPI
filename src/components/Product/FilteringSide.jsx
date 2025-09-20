import React, { useContext, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { AppContext } from "../../Context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const FilteringSide = () => {
  const [openFilter, setOpenFilter] = useState("name");
  const { product } = useContext(AppContext);

  const filters = [
    {
      key: "name",
      title: "Filter by Name",
      options: ["A-Z", "Z-A"],
    },
    {
      key: "company",
      title: "Filter by Company",
      options: ["Nike", "Adidas", "Puma"],
    },
    {
      key: "size",
      title: "Filter by Size",
      options: ["38", "39", "40", "41"],
    },
    {
      key: "color",
      title: "Filter by Color",
      options: ["Black", "White", "Blue", "Red"],
    },
  ];

  const toggleFilter = (key) => {
    setOpenFilter(openFilter === key ? null : key);
  };

  return (
    <div className="w-full md:w-64 bg-white  p-4 space-y-4">
      {filters.map((filter) => (
        <div key={filter.key} className="border-b border-gray-300 pb-2">
          {/* Filter Header */}
          <button
            onClick={() => toggleFilter(filter.key)}
            className="w-full flex justify-between items-center py-2 text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            {filter.title}
            {openFilter === filter.key ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </button>

          {/* Filter Options with Motion */}
          <AnimatePresence>
            {openFilter === filter.key && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-2 space-y-2">
                  {filter.options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-500 transition-colors"
                    >
                      <input type="checkbox" className="accent-blue-600" />
                      {option}
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FilteringSide;
