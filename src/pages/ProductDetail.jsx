import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomText } from "../components/Common/CustomText";
import useProducts from "../hooks/useProducts";
import Layout from "../components/Layout/Layout";
import "./ProductDetail.css";
import { Button } from "../components/Common/Button";
import { addProductToCart } from "../store/Actions/cartActions";
const ProductDetail = () => {
  let { productId } = useParams();

  const { products, isLoading } = useProducts();
  const product = products.filter((item) => item.id == productId);

  let stock = product[0]?.unitsInStock;
  const handleCount = (count) => {
    if (count > 0) {
      setProductCount((p) => (p < stock ? p + 1 : stock));
    }
    if (count < 0) {
      setProductCount((p) => (p > 1 ? p - 1 : 1));
    }
    if (stock == 0) setProductCount(0);
  };

  const [productCount, setProductCount] = useState(stock === 0 ? 0 : 1);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addProductToCart({ product: product[0], productCount }));
  };

  const history = useHistory();
  const buyNow = () => {
    alert(
      `${product[0]?.productName} ürününden ${productCount} adet satın alınmıştır.`
    );
    setProductCount(1);
    history.push("/");
  };
  return (
    <Layout>
      <div className="detail-container">
        <div className="detail-image">
          <img
            src="/assets/images/products/generic_3.jpg"
            alt="Product Detail"
          />
        </div>

        <div className="detail-info">
          <CustomText
            text={product[0]?.productName}
            cssClass="text-large text-bold"
          />
          <CustomText
            text={product[0]?.description}
            cssClass="text text-medium"
          />
          <div className="detail-count">
            <i className="las la-minus" onClick={() => handleCount(-1)}></i>
            <input
              type="text"
              name="productCount"
              value={productCount}
              disabled
              onChange={(e) => setProductCount(e.target.count)}
            />
            <i className="las la-plus" onClick={() => handleCount(+1)}></i>
          </div>
          <div className="detail-stock">
            <p>Products in Stock: {stock}</p>
          </div>
          <div className="detail-actions">
            <Button
              handleClick={addToCart}
              label="Sepete Ekle"
              cssClass="btn btn-primary"
            />
            <Button
              handleClick={buyNow}
              label="Hemen Al"
              cssClass="btn btn-secondary"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
