export const addTocartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      const existingProduct = state.find((product) => {
        return product.id === payload.id;
      });
      if (existingProduct) {
        const maped = state.map((product) => {
          return product.id === existingProduct.id
            ? {
                ...existingProduct,
                count: existingProduct.count + 1,
                total: existingProduct.price * (existingProduct.count + 1),
              }
            : product;
        });
        return maped;
      }
      return [
        ...state,
        { ...payload, count: 1, total: payload.price * (payload.count + 1) },
      ];
    case "REMOVE_OF_CART":
        const existinggProduct = state.find((product) => {
            return product.id === payload.id;
          });
   
        
                 if (existinggProduct.count === 1) {
     const filterCart = state.filter((product) => {
         return product.id !== payload.id;
       });
        return filterCart;
      }

              const subCount = state.map((product) => {
          return product.id === existinggProduct.id
            ? {
                ...existinggProduct,
                count: (existinggProduct.count) - 1,
                total: existinggProduct.price * (existinggProduct.count - 1),
              }
            : product;
        });
        return subCount;
       
     case 'SPLICE_OF_CART':
       const findProduct=state.find(product=>{return product.id===payload.id})

        const existingIndex = state.filter((product) => {
            return product.id !== findProduct.id;
          });
        
          return existingIndex

        case 'EMPTY_CART':
          return[]  
   
      

    default:
      return state;
  }
}
