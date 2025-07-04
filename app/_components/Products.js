import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setProducts } from "../_store/productSlice";
import Loader from "../_ui/Loader";

function Products() {
     const searchParams = useSearchParams();
     const dispatch = useDispatch();
     const search = searchParams.get("search");
     const category = searchParams.get("category");
     const price = searchParams.get("price");

     const [displayIndex, setDisplayIndex] = useState(6);
     function handleClick() {
          setDisplayIndex((index) => index + 6);
     }
     const { isPending, error, data } = useQuery({
          queryKey: ["rpoducts"],
          queryFn: () =>
               fetch("https://dummyjson.com/c/0317-474c-4f3a-ada6").then(
                    (res) => res.json()
               ),
     });

     let filterData = data;

     //Error Handling and data uploading
     if (isPending) return <Loader />;
     if (error) throw new Error("Failed to fetch data.");

     dispatch(setProducts(data));

     //Search
     if (search !== null) {
          let searchData = filterData.map((i) => JSON.stringify(i));
          searchData = search
               .split("-")
               .map((param) =>
                    searchData.filter((i) =>
                         i.toLowerCase().includes(param.toLowerCase())
                    )
               );
          searchData = searchData.flat();
          searchData = searchData.map((i) => JSON.parse(i));
          filterData = searchData;
     }

     //Filters
     if (price !== null) {
          filterData = filterData.filter(
               (i) =>
                    i.price >= price.split("-")[0] &&
                    i.price <= price.split("-")[1]
          );
     }
     if (category !== "all")
          filterData = filterData.filter((i) => i.category.includes(category));

     const displayData = filterData.slice(0, displayIndex);

     return (
          <div className="grid grid-rows-[auto_auto_4rem] gap-4">
               <h2 className="font-semibold text-2xl">Product Listing</h2>
               <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {displayData.map((product) => (
                         <Product product={product} key={product.id} />
                    ))}
               </div>
               {filterData.length > displayIndex && (
                    <button
                         className="flex w-full items-center justify-center col-span-full bg-blue-700 text-white py-2 text-lg cursor-pointer hover:bg-blue-700/90 transition-all duration-300"
                         onClick={handleClick}
                    >
                         Load More
                    </button>
               )}
          </div>
     );
}

export default Products;
