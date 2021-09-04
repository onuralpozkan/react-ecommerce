import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductGroup from "../components/ProductGroup/ProductGroup";
import Slider from "../components/Slider/Slider";
import styles from "./Home.module.css";

const Home = () => {
  const { pathname } = useLocation();
  const categoryId = pathname.split("-").slice(-1).pop();
  
  return (
    <Layout>
      <main className={styles.main}>
        <Slider />
        <ProductGroup
          categoryId={pathname == '/' ? false 
          : categoryId}
        />
      </main>
    </Layout>
  );
};

export default Home;
