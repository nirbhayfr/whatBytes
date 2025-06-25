"use client";

import { Provider } from "react-redux";
import SideBar from "./_components/SideBar";
import store from "./_store/store";
import Products from "./_components/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function page() {
     return (
          <main className="px-12 grid grid-cols-[1fr_3fr] gap-x-6 p-8 bg-blue-100">
               <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                         <SideBar />
                         <Products />
                    </Provider>
               </QueryClientProvider>
          </main>
     );
}

export default page;
