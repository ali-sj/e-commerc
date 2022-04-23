export const modalReducer=(state=false,{type})=>{
    switch(type){
        case'MODAL':
        return !state
    }
    return state
}
export const modalProductReducer=(state={},{type,payload})=>{
    switch(type){
        case'MODAL_PRODUCT':
        return payload
    }
    return state
}