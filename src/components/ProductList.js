import React, { useEffect } from "react";
import styled from "styled-components";
import { productListAction } from "../Redux/actions/actionProduct";
import Product from "./Product";
import { storeProducts } from "../data";
import { Row, Col } from "react-bootstrap";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modalAction } from "../Redux/actions/actionModal";
const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const modal=useSelector(state=>state.modal)



  return (
    <>
    <Modal/>
    <div onClick={()=>{dispatch(modalAction())}}  className="backDrop" style={{display:modal?'block':'none'}}></div>
    
      <div className="text-center title-productList zindex">
        our<span className="span-title"> products</span>{" "}
      </div>
      <Row className="container mx-auto zindex">
        {productList.map(product=><Col  md={6} lg={4} xs={10}>
<Product product={product}/>
        </Col>)}
    
      </Row>
      
    </>
  );
};

export default ProductList;
