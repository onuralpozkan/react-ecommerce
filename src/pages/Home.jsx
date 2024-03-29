import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductGroup from "../components/ProductGroup/ProductGroup";
import Slider from "../components/Slider/Slider";
import "./Home.css";

const Home = () => {
  const { pathname } = useLocation();
  const categoryId = pathname.split("-").slice(-1).pop();

  return (
    <Layout>
      <main className="main">
        <Slider />
        <div className="products-main-container">
          <ProductGroup categoryId={pathname == "/" ? false : categoryId} />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
