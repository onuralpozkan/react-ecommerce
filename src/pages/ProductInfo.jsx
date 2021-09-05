import React from "react";

const ProductInfo = ({productName, description, stock }) => {
  return (
    <div className="detail-info">
      <Title text={productName} cssClass="text-large text-bold" />
      <Title text={description} cssClass="text text-medium" />
      <div className="detail-stock">
        <p>Products in Stock: {stock}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
