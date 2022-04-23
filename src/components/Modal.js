import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addtoCartAction } from '../Redux/actions/actionCart'
import { modalAction } from '../Redux/actions/actionModal'



const Modal = () => {
    const modal=useSelector(state=>state.modal)
    const dispatch=useDispatch()
    const modalProduct=useSelector(state=>state.modalProduct)
    const card=useSelector(state=>state.cartItem)
    console.log(card);

    const{id,title,img,info,price}=modalProduct

  return (
    <div style={{transform:modal?'translateY(0)':'translateY(-100vh)',transition:'all .5s ease-in'}} className='modalProduct'>
      <h5 className='mt-3 modal-title'>Product Added To Cart</h5>
      <img  style={{width:'250px',height:'250px'}} src={img}/>
      <h5 className='modal-price text-muted'>price:${price}</h5>
      <h4 className='mt-3 modal-title'>{title}</h4>
      <button  onClick={()=>{dispatch(addtoCartAction(id)) 
      dispatch(modalAction())
      
      }}>add to cart</button>
      
    </div>
  )
}

export default Modal
