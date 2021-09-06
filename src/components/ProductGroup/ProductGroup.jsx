import useFetch from "../../hooks/useFetch";
import useProducts from "../../hooks/useProducts";
import { Title } from "../Common/Title";
import ProductCard from "../PorductCard/ProductCard";
import "./ProductGroup.css";

const ProductGroup = ({ categoryId }) => {
  const { products, isLoading } = useProducts();

  const productGroup = categoryId
    ? products.filter((i) => i.categoryId == categoryId)
    : products;

  const { data } = useFetch("http://localhost:8000/categories");
  let category = data.filter((item) => item.id == categoryId);

  return (
    <div className="productGroup">
      <div className="productGroup-title">
        <Title
          text={categoryId ? category[0]?.categoryNameTr : "Tüm Ürünler"}
          cssClass="text-largest fullWidth"
        />
      </div>
      {productGroup.map((product) => (
        <ProductCard key={product.id} product={product} isLoading={isLoading} />
      ))}
    </div>
  );
};

export default ProductGroup;
