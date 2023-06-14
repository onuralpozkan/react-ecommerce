import useProducts from "../../hooks/useProducts";
import { CustomText } from "../Common/CustomText";
import ProductCard from "../PorductCard/ProductCard";
import data from '../../store/api/db.json';
import "./ProductGroup.css";

const ProductGroup = ({ categoryId }) => {
  const { products, isLoading } = useProducts();

  const productGroup = categoryId
    ? products.filter((i) => i.categoryId == categoryId)
    : products;

  let category = data.categories.filter((item) => item.id == categoryId);

  return (
    <div className="productGroup">
      <div className="productGroup-title">
        <CustomText
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
