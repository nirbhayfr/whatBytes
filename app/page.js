"use client";

import { Provider } from "react-redux";
import SideBar from "./_components/SideBar";
import store from "./_store/store";
import Products from "./_components/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Loader from "./_ui/Loader";

const queryClient = new QueryClient();

function page() {
     return (
          <main className="px-12 grid grid-cols-[1fr_3fr] gap-x-6 p-8 bg-blue-100 max-sm:grid-cols-[1fr_2fr] max-sm:p-4 max-xs:grid-cols-1 max-xs:gap-4">
               <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                         <Suspense fallback={<Loader />}>
                              <SideBar />
                              <Products />
                         </Suspense>
                    </Provider>
               </QueryClientProvider>
          </main>
     );
}

export default page;
