import React from "react";

function CardProduct({
  img,
  productName,
  productUse,
  productDescription,
  openModal,
}) {
  return (
    <>
      <div className="Product" onClick={() => openModal()}>
        <div className="Product-img">
          <img alt="" src={img} width="100%" />
        </div>
        <div className="Product-content ">
          <h6>{productName}</h6>
          <div className="active">{productUse}</div>
          <p className="text-start text-wrap">{productDescription}</p>
        </div>
      </div>
    </>
  );
}
export default CardProduct;
