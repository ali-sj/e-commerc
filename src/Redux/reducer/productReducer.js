const productlist_ini=[]
export const  productListReducer=(state=productlist_ini,{type,payload})=>{
    switch(type){
        case'PRODUCT-LIST':
        return payload
        default:
            return state
    }
    
}
export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case 'SELECTED_PRODUCT':
            return payload
            default:
                return state
    }
}