import { storeProducts } from "../../data"
export const addtoCartAction=(id)=>(dispatch,getState)=>{
const findedProduct=getState().productList.find(product=>{return product.id===id})
dispatch({type:'ADD_TO_CART',payload:findedProduct})
localStorage.setItem('cartItems',JSON.stringify(getState().cartItems))
}
export const removeCartAction=(id)=>(dispatch,getState)=>{
    const findedProduct=getState().productList.find(product=>{return product.id===id})
  
    dispatch({type:'REMOVE_OF_CART',payload:findedProduct})
    localStorage.setItem('cartItems',JSON.stringify(getState().cartItems))
    }
    export const spliceCartAction=(id)=>(dispatch,getState)=>{
        const findedProduct=getState().productList.find(product=>{return product.id===id})
        dispatch({type:'SPLICE_OF_CART',payload:findedProduct})
        localStorage.setItem('cartItems',JSON.stringify(getState().cartItems))
        }
        export const emptyCartAction=()=>{
            return{type:'EMPTY_CART'}
        }
        