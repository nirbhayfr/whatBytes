function Product({ product }) {
     return (
          <div className="bg-white rounded-xl p-4 space-y-4">
               <div className="w-full p-4">
                    <img
                         src={product.image}
                         alt={product.title}
                         className="w-full h-[15rem] object-contain"
                    />
               </div>
               <p className="text-center">
                    {product.title.split(" ").slice(0, 4).join(" ") + " .."}
               </p>
               <p className="text-xl font-medium">${product.price}</p>
               <button className="w-full bg-blue-700 text-white px-4 py-2">
                    Add to cart
               </button>
          </div>
     );
}

export default Product;
