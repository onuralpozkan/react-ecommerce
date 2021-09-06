import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Common/Button";
import { CustomText } from "../Common/CustomText";
import { addProductToCart } from "../../store/Actions/cartActions";
import { currencySymbol } from "../../utils/currencySymbol";

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
          <CustomText
            cssClass="text text-bold text-large text-ellipsis"
            text={isLoading ? "...Loading" : product.productName}
          />
          <CustomText cssClass="text text-ellipsis" text={product.description} />
        </div>
          </Link>
        <div className="card-footer">
          {isHover ? (
            <Button label="Sepete Ekle" cssClass="btn btn-primary btn-block" handleClick={()=> dispatch(addProductToCart({product, productCount: 1}))} />
          ) : (
            <CustomText
              cssClass="text text-bold text-medium"
              text={isLoading ? "...Loading" : currencySymbol(product.unitPrice) }
            />
          )}
        </div>
      </div>
  );
};

export default ProductCard;
