import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { productListAction } from '../Redux/actions/actionProduct'
import { selectedProductAction } from '../Redux/actions/actionProduct'
import { addtoCartAction } from '../Redux/actions/actionCart'
import { modalAction,modalProductAction } from '../Redux/actions/actionModal'
import Modal from './Modal'
const Product = ({product}) => {
  const {id,img,inCart,price,title}=product
  const productList = useSelector((state) => state.productList);
  const cart=useSelector(state=>state.cartItems)
  const dispatch=useDispatch()
  const findOfCart=cart.find(product=>product.id===id)
  const testHandler=(id)=>{
    const t= productList.map(product=>product.id===id?{...product,inCart:true}:product)
    dispatch(modalAction())
//dispatch(addtoCartAction(id))
    dispatch(productListAction(t))
    dispatch(modalProductAction(id))


 
     
   }

   
  return (
    <>
 
    
    <div className='card mt-3' onClick={()=>{dispatch(selectedProductAction(id))}}>
      <div className='card-container'>
      <Link to='/details' className='text-decoration-none'>

        <img  src={img}/>
        </Link>
        <div className='info-card '>
          <div className='text-muted'>{title}</div>
      <div>${price}</div>
        </div>

      </div>
      <div className='shopping-icon mx-auto'>{findOfCart?<span>incart</span>:<i onClick={()=>{testHandler(id)
    
      
      }} className="fa fa-shopping-cart fa-2x"></i>}</div>
    </div>
    
    </>


   
    
  )
}

export default Product
