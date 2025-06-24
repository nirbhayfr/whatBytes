import Search from "../_ui/Search";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
     return (
          <header className="flex items-center justify-between bg-blue-700 text-white px-12 py-6">
               <h1 className="text-2xl font-semibold">WhatBytes</h1>
               <Search />
               <button className="bg-blue-900 px-4 py-2 rounded-2xl flex items-center gap-x-3 hover:bg-blue-800 transition-all duration-200 cursor-pointer">
                    <FaCartShopping />
                    Cart
               </button>
          </header>
     );
}

export default Header;
