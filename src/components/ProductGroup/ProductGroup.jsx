import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { fetchProducts } from "../../store/Actions/productActions";
import { Title } from "../Common/Title";
import ProductCard from "../PorductCard/ProductCard";
import "./ProductGroup.css";

const ProductGroup = ({ categoryId }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { products, isLoading } = state;

  console.log('proGroup', categoryId == " ");
  const productGroup = categoryId
    ? products.filter((i) => i.categoryId == categoryId)
    : products;

  const { data } = useFetch("http://localhost:8000/categories");
  let category = data.filter((item) => item.id == categoryId);

  return (
    <div className="productGroup">
      <div className="productGroup-title">
        <Title
          text={categoryId ? category[0]?.categoryName : "All Products"}
          cssClass="text-largest fullWidth"
        />
      </div>
      {productGroup.map((product) => (
        <ProductCard key={product.id} {...product} isLoading={isLoading} />
      ))}
    </div>
  );
};

export default ProductGroup;
