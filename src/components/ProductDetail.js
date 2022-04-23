import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const { img, title, price, info, company } = selectedProduct;

  return (
    <>
      <Row>
        <Col className="mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={6} className="mx-auto">
          <img className="img-fluid" src={img} />
        </Col>
        <Col md={6} xs={10} className="mx-auto my-3">
          <h1 className="model-title">Model: {title}</h1>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0 info">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
