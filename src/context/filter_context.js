import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS }); //FILTER_PRODUCTS is placed above SORT as FILTER defines the number of products that are to be displayed
    dispatch({ type: SORT_PRODUCTS }); //SORT_PRODUCTS acts on the objects that FILTER_PRODUCTS provide
  }, [state.sort, state.filters]);
  // functions
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    // just for demonstration;
    // const name = e.target.name //This targets the name="sort" of <select> element inside <form> in Sort.js
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      //Since there are buttons within category and they cant be accessed by e.target.value
      value = e.target.textContent; //We use e.target.textContent from VanillaJS to access the text inside buttons
    }
    if (name === "color") {
      value = e.target.dataset.color; //This dataset refers to line 98 and 117 in Filters.js
    }
    if (name === "price") {
      value = Number(value); //In JS , all inputs come as string. Hence we convert it as a number here
    }
    if (name === "shipping") {
      value = e.target.checked; //This is the syntax to check whether the CHECKBOX is clicked or not in JS 
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
