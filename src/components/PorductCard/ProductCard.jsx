import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Common/Button";
import { Title } from "../Common/Title";
import { addProductToCart } from "../../store/Actions/cartActions";

const ProductCard = ({
 product,
  isLoading,
}) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
 
  return (
    <div
        className="card"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
    <Link className="card-link" to={`/product-detail/${product.id}`}>
        <div className="card-header">
          {
            isLoading ? "Yükleniyor..." :
          <img
            src={`/assets/images/products/generic_${product.id % 4}.jpg`}
            alt="Product Name"
          />
          }
        </div>
        <div className="card-body">
          <Title
            cssClass="text text-bold text-large text-ellipsis"
            text={isLoading ? "...Loading" : product.productName}
          />
          <Title cssClass="text text-ellipsis" text={product.description} />
        </div>
          </Link>
        <div className="card-footer">
          {isHover ? (
            <Button label="Sepete Ekle" cssClass="btn btn-primary btn-block" handleClick={()=> dispatch(addProductToCart({product, productCount: 1}))} />
          ) : (
            <Title
              cssClass="text text-bold text-medium"
              text={isLoading ? "...Loading" : `${product.unitPrice} TL`}
            />
          )}
        </div>
      </div>
  );
};

export default ProductCard;
