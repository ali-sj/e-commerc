import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row,Col,Container } from "react-bootstrap";
  import CartColumns from "./CartColumns";
  import CartList from "./CartList";
  import { emptyCartAction } from "../../Redux/actions/actionCart";

const Cart = () => {





  const cart = useSelector((state) => state.cartItems);
  let initialTotal = 0
  let sum_total = cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.total
      , initialTotal
  )
  let sum_count = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.count
    , initialTotal
)
const dispatch=useDispatch()
  const content =
    cart.length == 0 ? 
    
    
        <h1 className="empty-cart text-center "> your cart is currently empty!</h1>:
      <div className="cart-con">
         <CartColumns/>
      <CartList />
      <div className="cart-info">
        <div>total price:${sum_total}</div>
        <div>count of product:{sum_count}</div>
        <div> type of product:{cart.length}</div>
      </div>
    </div>
  

      
   
     
      
  
    
  return(
   <>
  {content}



   </>
  )
};

export default Cart;
