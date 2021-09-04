import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useState } from "react";
import { Button } from "../Common/Button";
import { Title } from "../Common/Title";

const ProductCard = ({id,productName, description, unitPrice, isLoading}) => {

  const [isHover, setIsHover] = useState(false);
  return (
    <Link className="card-link" to={`/product-detail/${id}`}>
    <div
      className="card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      >
      <div className="card-header">
        <img src={`/assets/images/products/generic_${id % 4}.jpg`} alt="Product Name" />
      </div>
      <div className="card-body">
        <Title cssClass="text text-bold text-large text-ellipsis" text={isLoading ? "...Loading" : productName} />
        <Title cssClass="text text-ellipsis" text={description} />
      </div>
      <div className="card-footer">
        {isHover ? (
          <Button label="Sepete Ekle" cssClass="btn btn-primary btn-block" />
          ) : (
            <Title cssClass="text text-bold text-medium" text={isLoading ? "...Loading" : `${unitPrice} TL`} />
            )}
      </div>
    </div>
            </Link>
  );
};

export default ProductCard;
