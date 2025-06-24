"use client";

import { Provider } from "react-redux";
import SideBar from "./_components/SideBar";
import store from "./_store/store";
import Products from "./_components/Products";

function page() {
     return (
          <main className="px-12 grid grid-cols-[1fr_3fr] gap-x-6 m-8">
               <Provider store={store}>
                    <SideBar />
                    <Products />
               </Provider>
          </main>
     );
}

export default page;
