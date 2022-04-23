import { combineReducers } from "redux";
import { productListReducer,selectedProductReducer } from "./reducer/productReducer";
import { addTocartReducer } from "./reducer/cartReducer";
import {modalReducer} from "./reducer/modalReducer";
import { modalProductReducer } from "./reducer/modalReducer";

export const reducer=combineReducers({
    productList:productListReducer,
    cartItems:addTocartReducer,
    selectedProduct:selectedProductReducer,
    modal:modalReducer,
    modalProduct:modalProductReducer
})