import { Title } from "../Common/Title";
import ProductCard from "../PorductCard/ProductCard";
import "./ProductGroup.css";

const ProductGroup = () => {
  return (<div className="productGroup">
    <div className="productGroup-title">
    <Title text="Products" cssClass="text-largest fullWidth"/>
    </div>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
  </div>);
};

export default ProductGroup;
