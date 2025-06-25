"use client";

import { useEffect } from "react";
import FilterCategory from "../_ui/FilterCategory";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import { changePrice } from "../_store/filterSlice";
import { useRouter, useSearchParams } from "next/navigation";

function SideBar() {
     const filterState = useSelector((state) => state.filter);
     const dispatch = useDispatch();
     const router = useRouter();
     const searchParams = useSearchParams();

     useEffect(() => {
          const categoryParams = new URLSearchParams();
          const priceParams = new URLSearchParams();
          const search = searchParams.get("search");
          let searchStr = "";
          if (search !== null) {
               searchStr = `&search=${search.toString()}`;
          }
          categoryParams.set("category", filterState.category);
          priceParams.set("price", filterState.price.join("-"));
          router.push(
               `?${categoryParams.toString()}&${priceParams.toString()}${searchStr}`
          );
     }, [filterState]);

     return (
          <div className="">
               <form className="bg-blue-700 rounded-xl text-white p-4 space-y-4">
                    <h2 className="text-2xl font-medium">Filters</h2>
                    <FilterCategory filterState={filterState.category} />
                    <div className="space-y-4">
                         <h3 className="font-medium">Price</h3>
                         <RangeSlider
                              min={0}
                              max={1000}
                              step={100}
                              defaultvalue={[0, 1000]}
                              value={filterState.price}
                              onInput={(newPrice) =>
                                   dispatch(changePrice(newPrice))
                              }
                         />
                         <div className="flex justify-between text-sm">
                              <p>{filterState.price[0]}</p>
                              <p>{filterState.price[1]}</p>
                         </div>
                    </div>
               </form>
          </div>
     );
}

export default SideBar;
