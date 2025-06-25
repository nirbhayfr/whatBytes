import Link from "next/link";
import { useDispatch } from "react-redux";
import { updateCart } from "../_store/productSlice";

function Product({ product }) {
     const dispatch = useDispatch();
     function handleClick() {
          const obj = {
               name: product.title,
               price: product.price,
               quantity: 1,
          };
          dispatch(updateCart(obj));
     }
     return (
          <div className="bg-white rounded-xl p-4 space-y-4">
               <Link
                    className="w-full p-4 cursor-pointer"
                    href={`/products/${product.id}`}
               >
                    <img
                         src={product.image}
                         alt={product.title}
                         className="w-full h-[15rem] object-contain"
                    />
               </Link>
               <p className="text-center">
                    {product.title.split(" ").slice(0, 4).join(" ") + " .."}
               </p>
               <p className="text-xl font-medium">${product.price}</p>
               <button
                    className="w-full bg-blue-700 text-white px-4 py-2"
                    onClick={handleClick}
               >
                    Add to cart
               </button>
          </div>
     );
}

export default Product;
