import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const WishList = () => {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(AppContext);
  return (
    <div className="mt-[100px]">
      {wishlist.map((item, index) => (
        <ProductCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default WishList;
