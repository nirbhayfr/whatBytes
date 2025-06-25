"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMinus, FiPlus } from "react-icons/fi";
import { updateCart } from "../_store/productSlice";

function ProductDescription({ id }) {
     const [quantity, setQuantity] = useState(1);
     const { products } = useSelector((state) => state.product);
     const dispatch = useDispatch();

     if (products === null)
          return (
               <div className="flex items-center justify-center">
                    <p>
                         No product found please return to the home page and
                         visit again.
                    </p>
               </div>
          );

     function handleClick(e) {
          const obj = {
               name: products[id].title,
               price: products[id].price,
               quantity: quantity,
          };
          dispatch(updateCart(obj));
          e.target.innerHTML = "Added";
     }
     return (
          <div className="bg-white">
               <div className="grid grid-cols-[1fr_2fr] gap-12 p-8 max-mid:grid-cols-1 max-xs:p-3">
                    <img
                         src={products[id].image}
                         alt={products[id].title}
                         className="w-full"
                    />
                    <div className="grid grid-rows-[auto_1fr]">
                         <div className="space-y-4">
                              <h3 className="text-2xl font-medium uppercase">
                                   {products[id].title}
                              </h3>
                              <p className="text-xl font-semibold">
                                   ${products[id].price}
                              </p>
                              <p className="w-2/3 text-justify max-sm:w-full max-sm:text-sm">
                                   Description: {products[id].description}
                              </p>
                              <p className="italic">
                                   Category: {products[id].category}
                              </p>
                         </div>

                         <div className="flex items-end w-full max-md:pt-8">
                              <div className="flex gap-4 text-2xl items-center w-full max-md:flex-col max-md:text-lg max-md:items-start">
                                   <div className="flex gap-4 items-center">
                                        <h4 className="text-2xl font-semibold">
                                             Quantity:
                                        </h4>
                                        <button
                                             className="flex items-center justify-center bg-blue-800 rounded-[10rem] text-white px-4 py-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 disabled:opacity-40"
                                             onClick={() =>
                                                  setQuantity((val) => --val)
                                             }
                                             disabled={quantity < 2}
                                        >
                                             <FiMinus />
                                        </button>
                                        <p>{quantity}</p>
                                        <button
                                             className="flex items-center justify-center bg-blue-800 rounded-[10rem] text-white px-4 py-2 cursor-pointer hover:bg-blue-600 transition-all duration-300"
                                             onClick={() =>
                                                  setQuantity((val) => ++val)
                                             }
                                        >
                                             <FiPlus />
                                        </button>
                                   </div>
                                   <button
                                        className="w-full bg-blue-700 text-white px-4 py-2 cursor-pointer hover:bg-blue-600 transition-all duration-300"
                                        onClick={(e) => handleClick(e)}
                                   >
                                        Add to Cart
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default ProductDescription;
