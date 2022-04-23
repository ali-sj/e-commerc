import { storeProducts } from "../../data";
import { useSelector } from "react-redux";
export const productListAction = (products) => (dispatch,getState) => {
  dispatch({ type: "PRODUCT-LIST", payload: products });

localStorage.setItem('productList',JSON.stringify(getState().productList))


  
};
export const  selectedProductAction=(id)=>(dispatch,getState)=>{
  

  const selectedProduct=getState().productList.find(product=>{return product.id===id})
  dispatch({type:'SELECTED_PRODUCT',payload:selectedProduct})
  localStorage.setItem('selectedProduct',JSON.stringify(getState().selectedProduct))

}
