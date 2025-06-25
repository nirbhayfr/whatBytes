"use client";

import ProductDescription from "@/app/_components/ProductDescription";
import store from "@/app/_store/store";
import { Provider } from "react-redux";

function ClientProvider({ id }) {
     return (
          <main className="px-12 py-6 bg-blue-100 max-xs:px-6">
               <Provider store={store}>
                    <ProductDescription id={id - 1} />
               </Provider>
          </main>
     );
}

export default ClientProvider;
