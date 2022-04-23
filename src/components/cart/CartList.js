import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './cartItem'



const CartList = () => {
    const cart=useSelector(state=>state.cartItems)
  return (
      <div className='container-fluid'>
          {cart.map(product=>{return <CartItem product={product}/>})}

      </div>
    
  )
}

export default CartList
