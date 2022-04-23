import { createStore, applyMiddleware } from "redux";
import { reducer } from "./combineReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { storeProducts } from "../data";

import thunk from "redux-thunk";
const productListFromLocal = localStorage.getItem("productList")
  ? JSON.parse(localStorage.getItem("productList"))
  : storeProducts;
const selectedFromLocal = localStorage.getItem("selectedProduct")
  ? JSON.parse(localStorage.getItem("selectedProduct"))
  : {};
  const cartItemsFromLocal=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const initial = {
  productList: productListFromLocal,
  selectedProduct: selectedFromLocal,
  cartItems:cartItemsFromLocal
};
const middleware = [thunk];

export const store = createStore(
  reducer,
  initial,
  composeWithDevTools(applyMiddleware(...middleware))
);
