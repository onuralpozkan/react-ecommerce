import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Actions/productActions";
import { Title } from "../Common/Title";
import ProductCard from "../PorductCard/ProductCard";
import "./ProductGroup.css";

const ProductGroup = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { products, isLoading } = state;
  return (
    <div className="productGroup">
      <div className="productGroup-title">
        <Title text="Products" cssClass="text-largest fullWidth" />
      </div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} isLoading={isLoading} />
      ))}
    </div>
  );
};

export default ProductGroup;
