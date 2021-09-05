import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Title } from "../components/Common/Title";
import useProducts from "../hooks/useProducts";
import Layout from "../components/Layout/Layout";
import { getProductById } from "../store/Actions/productActions";
import "./ProductDetail.css";
import { Button } from "../components/Common/Button";
const ProductDetail = () => {
 
  let { productId } = useParams();

  console.log('productId',productId);
  // useEffect(() => {
  //   dispatch(getProductById(productId));
  // }, [dispatch]);

  
  const { products, isLoading } = useProducts();
  const product = products.filter(item => item.id == productId);
  console.log('prodct',product);

  let stock = product[0]?.unitsInStock;
   const handleCount = (count) => {
     if (count > 0) {
       setProductCount((p) => (p < stock ? p + 1 : stock));
     }
     if (count < 0) {
       setProductCount((p) => (p > 1 ? p - 1 : 1));
     }
     if(stock == 0) setProductCount(0);
   };

   const [productCount, setProductCount] = useState(stock === 0 ? 0 : 1);
  
   const addToCart = () => {
     console.log("Add To Cart");
   }
   const buyNow = () => {
     console.log("Buy Now");
   }
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
          <Title
            text={product[0]?.productName}
            cssClass="text-large text-bold"
          />
          <Title text={product[0]?.description} cssClass="text text-medium" />
          <div className="detail-count">
            <i className="las la-minus" onClick={() => handleCount(-1)}></i>
            <input
              type="text"
              name="productCount"
              value={productCount}
              onChange={(e) => setProductCount(e.target.count)}
            />
            <i className="las la-plus" onClick={() => handleCount(+1)}></i>
            
          </div>
          <div className="detail-stock">
          <p>Products in Stock: {stock}</p>
          </div>
          <div className="detail-actions">
            <Button handleClick={addToCart} label="Sepete Ekle" cssClass="btn btn-primary" />
            <Button handleClick={buyNow} label="Hemen Al" cssClass="btn btn-secondary"/>
          </div>
        </div> 
     
      </div>
    </Layout>
  );
};

export default ProductDetail;
