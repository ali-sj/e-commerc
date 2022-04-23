import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCartAction,removeCartAction,spliceCartAction } from '../../Redux/actions/actionCart'
import { productListAction } from '../../Redux/actions/actionProduct'
const CartItem = ({product}) => {

  const dispatch=useDispatch()
  const productList=useSelector(state=>state.productList)
    const{id, title, img, price, total, count}=product
      const removeHandler=(id)=>{
        const finded=productList.find(product=>{return product.id===id})
        const mapp=productList.map(product=>{return product.id===finded.id?{...finded,inCart:false}:product})
    
    dispatch(productListAction(mapp))
    dispatch(spliceCartAction(id))
    

  }
  const removefromCartHandler=(id)=>{
    const finded=productList.find(product=>{return product.id===id})
     if(finded.count===1){
       const mapped=productList.map(product=>{return product.id===finded.id?{...finded,inCart:false}:product})
       dispatch(productListAction(mapped))
     }
    dispatch(removeCartAction(id))


  }
  return (
    <>

   <div className='row my-3 text-capitalize text-center'>
        <div className='col-10 mx-auto col-lg-2'>
            <img 
            className='cart-img'
            src={img}
            style={{ width: "5rem", heigth: "5rem",marginTop:'-10px' }}
            alt=""
            
            
            />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <span className="d-lg-none">product :</span> {title}
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
            <span className="d-lg-none">price :</span> ${price}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">
            <div className="btn btn-black mx-1"
            
               
              >
              <span onClick={()=>{   removefromCartHandler(id)}}>
                
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={()=>{dispatch(addtoCartAction(id))}}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <div className=" cart-icon" >
            <i  onClick={()=>{removeHandler(id)}}className="fa fa-trash trash" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <strong>item total :${total} </strong>
        </div>
      
    </div>
    <hr/>

    </>
 
  )
}

export default CartItem
