import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useState } from "react";
import { Button } from "../Common/Button";
import { Title } from "../Common/Title";

const ProductCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="card-header">
        <img src="assets/images/products/generic_1.jpg" alt="Product Name" />
      </div>
      <div className="card-body">
        <Title cssClass="text text-bold text-large" text="Product Title"/>
        <Title cssClass="text" text="Product Desc"/>
      </div>
      <div className="card-footer">
        {isHover ? (
          <Button label="Sepete Ekle" cssClass="btn btn-warning btn-block" />
        ) : (
          <Title cssClass="text text-bold text-medium" text="2000TL"/>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
