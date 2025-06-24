import { useDispatch } from "react-redux";
import { changeCategory } from "../_store/filterSlice";

function FilterCategory({ filterState }) {
     const dispatch = useDispatch();
     return (
          <div className="space-y-4">
               <h3 className="font-medium">Category</h3>
               <ul className="text-sm space-y-1">
                    <li className="space-x-1">
                         <input
                              type="radio"
                              name="category"
                              id="all"
                              value="all"
                              checked={filterState === "all"}
                              onChange={(e) =>
                                   dispatch(changeCategory(e.target.value))
                              }
                         />
                         <label htmlFor="all">All</label>
                    </li>
                    <li className="space-x-1">
                         <input
                              type="radio"
                              name="category"
                              id="electronics"
                              value="electronics"
                              checked={filterState === "electronics"}
                              onChange={(e) =>
                                   dispatch(changeCategory(e.target.value))
                              }
                         />
                         <label htmlFor="electronics">Electronics</label>
                    </li>
                    <li className="space-x-1">
                         <input
                              type="radio"
                              name="category"
                              id="clothing"
                              value="clothing"
                              checked={filterState === "clothing"}
                              onChange={(e) =>
                                   dispatch(changeCategory(e.target.value))
                              }
                         />
                         <label htmlFor="clothing">Clothing</label>
                    </li>
                    <li className="space-x-1">
                         <input
                              type="radio"
                              name="category"
                              id="home"
                              value="home"
                              checked={filterState === "home"}
                              onChange={(e) =>
                                   dispatch(changeCategory(e.target.value))
                              }
                         />
                         <label htmlFor="home">Home</label>
                    </li>
               </ul>
          </div>
     );
}

export default FilterCategory;
