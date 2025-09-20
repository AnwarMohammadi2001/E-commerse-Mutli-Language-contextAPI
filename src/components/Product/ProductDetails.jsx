import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { AppContext } from "../../Context/AppContext";
import Breadcrumb from "../Breadcrumb";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useContext(AppContext);

  // Find the product by ID
  const productDetail = product.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(productDetail?.image);

  if (!productDetail) return <p className="text-center mt-10">Loading...</p>;

  // Example: Additional images for gallery
  const additionalImages = [
    productDetail.image,
    "https://via.placeholder.com/400x400?text=Alt+Image+1",
    "https://via.placeholder.com/400x400?text=Alt+Image+2",
    "https://via.placeholder.com/400x400?text=Alt+Image+3",
  ];

  return (
    <div className="min-h-screen mt-[100px] bg-gray-50 p-6 md:px-12 lg:px-20">
      <Breadcrumb />
      <div className="grid md:grid-cols-2 gap-10 bg-white overflow-hidden p-6 md:p-10 ">
        {/* Product Image */}
        <div>
          <div className="flex items-center justify-center bg-gray-100 p-6 rounded-xl mb-4">
            <Zoom>
              <img
                src={mainImage}
                alt={productDetail.title}
                className="h-80 md:h-[400px] object-contain rounded-xl cursor-pointer"
              />
            </Zoom>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3 justify-center">
            {additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === img
                    ? "border-blue-600"
                    : "border-gray-300 hover:border-blue-500"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {productDetail.title}
            </h1>
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
              Category: {productDetail.category}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-yellow-500" size={20} />
              <span className="font-semibold">{productDetail.rating.rate}</span>
              <span className="text-gray-500">
                ({productDetail.rating.count} reviews)
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              ${productDetail.price}
            </p>

            <p className="text-gray-700 mb-6">{productDetail.description}</p>

            {/* Sizes */}
            <div className="mb-6">
              <h2 className="font-semibold text-gray-700 mb-2">Choose Size</h2>
              <div className="flex gap-3 flex-wrap">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
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
                {["bg-black", "bg-red-500", "bg-blue-500", "bg-green-500"].map(
                  (color) => (
                    <span
                      key={color}
                      className={`${color} w-8 h-8 rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-600`}
                    ></span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="flex-1 bg-black text-white py-3 cursor-pointer rounded-xl transition font-semibold">
              Add to Cart
            </button>
            <button className="flex-1 border border-black text-black py-3 rounded-xl cursor-pointer transition font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
