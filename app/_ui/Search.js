"use client";
import { IoIosSearch } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {
     const [searchInput, setSearchInput] = useState("");
     const router = useRouter();
     const searchParams = useSearchParams();

     function handleClick() {
          const newParams = new URLSearchParams(searchParams);
          newParams.set(
               "search",
               searchInput.toLowerCase().split(" ").join("-")
          );
          router.push(`?${newParams.toString()}`);
     }

     return (
          <div className="w-1/3 flex items-center border-2 border-white/40 rounded-sm justify-center max-xs:col-span-full max-xs:row-start-2 max-xs:w-full">
               <button
                    className=" border-r-transparent px-4 py-2 cursor-pointer hover:bg-blue-500 transition-all duration-200"
                    onClick={handleClick}
               >
                    <IoIosSearch className="size-6" />
               </button>
               <input
                    type="text"
                    placeholder="Search for products.."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="px-4 py-2 outline-none w-full border-l-transparent"
               />
          </div>
     );
}

export default Search;
