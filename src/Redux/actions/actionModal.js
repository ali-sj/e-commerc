export const modalAction=()=>{
    return{type:'MODAL'}
}
export const modalProductAction=(id)=>(dispatch,getState)=>{
    const findedModalProduct=getState().productList.find(product=>{return product.id===id})
    dispatch({type:'MODAL_PRODUCT',payload:findedModalProduct})
   }